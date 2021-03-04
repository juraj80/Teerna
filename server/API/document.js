const express = require('express');
const authenticate = require("../auth.js");
const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Document manager
 *   description: Manage game documents, listing, uploading, downloading
 */

/**
 * Lists the game documents
 *
 * @openapi
 * /api/documents/get-files:
 *   get:
 *     tags:
 *       - Document manager
 *     summary: Lists the documents uploaded to the game.
 *     parameters:
 *       - $ref: '#/components/parameters/guidQuery'
 *       - $ref: '#/components/parameters/tokenQuery'
 *     responses:
 *       200:
 *         description: the list of files within the game
 */
router.get('/get-files', authenticate, (req, res) => {
  const folder = 'Uploads';
  const files = fileSystem.getUploadFiles(folder);
  const listOfFiles = fileSystem.getListOfFileObjects(files);
  res.send(listOfFiles);
});


/**
 * Uploads a new document to the game.
 *
 * @openapi
 * /api/documents/upload:
 *   post:
 *     tags:
 *       - Document manager
 *     summary: Upload a new document to the game.
 *     parameters:
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       400:
 *         description: No file uploaded
 *       200:
 *         description: the filename and filepath of the uploaded file.
 *
 */
router.post('/upload', authenticate, (req,res) => {
    console.log('upload called');
    if(req.files === null){
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    const path = `${__dirname}/Uploads/${file.name}`;
    file.mv(path, err => {
        decompress(path,'Uploads/').then(files=>{
            fs.unlinkSync(path);
            if(fs.existsSync(osxfolder)){
                fs.rmdirSync(osxfolder, {recursive: true});
            }
            console.log("done!");
        });
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
    //    res.json({ fileName: file.name, filePath: `./Uploads/${file.name}`});
        res.json({ fileName: file.name, filePath: path});
    });
});

/**
 * Download Endpoint
 *
 * @openapi
 * /api/document/download:
 *   get:
 *     tags:
 *       - Document manager
 *     summary: download the game documents for later use.
 *     parameters:
 *       - $ref: '#/components/parameters/guidQuery'
 *       - $ref: '#/components/parameters/tokenQuery'
 *     responses:
 *       200:
 *         description: the zipped game folder
 */
router.get('/download', authenticate, function(req, res){
  const folder = `${__dirname}/Uploads/game`;
  if(fs.existsSync(folder) ){
    const file = `${__dirname}/Uploads/${gameFile}`;
    zipper.sync.zip(folder).compress().save(file);
    if(fs.existsSync(file)){
      console.log("File exists: ", file);
      res.download(file, function(error){ 
        console.log("Error : ", error) 
      });
    } else {
      console.log("Server file doesn't exists!", res.status);
    }  
  }  else {
    console.log("Server folder doesn't exists!", res.status);
  }  
});

/**
 * Delete Endpoint
 *
 * @openapi
 * /api/document/delete:
 *   post:
 *     tags:
 *       - Document manager
 *     summary: delete a given document from the game folder
 *     parameters:
 *       - $ref: '#/components/parameters/guidBody'
 *       - $ref: '#/components/parameters/tokenBody'
 *     responses:
 *       200:
 *         description: document deleted
 *       400:
 *         description: document does not exist
 */
router.post('/delete', authenticate, function(req, res){
  const file = `${__dirname}/Uploads/${gameFile}`;
  const folder = `${__dirname}/Uploads/game`;
  if(fs.existsSync(file)){
    fs.unlinkSync(file)
  } 
  if(fs.existsSync(folder) ){
    fs.rmdirSync(folder, { recursive: true })  
  } 
  if(fs.existsSync(osxfolder)){
    fs.rmdirSync(osxfolder, { recursive: true })
    res.send(200, {message: 'File deleted'});
  } else{
    console.log("Server file doesn't exists!");
    res.send(400, {message: 'File does not exist'});
  }
});

module.exports = router;
