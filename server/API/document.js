const express = require('express');
const decompress = require('decompress');
const fileSystem = require('./helpers/fileSystem.js')
const router = express.Router();
const GameSession = require("../GameSession/GameSession");
const path = require('path');
const zipper = require('zip-local');

/** Returns the current game for the request, if available
 *
 * @param {Request} req: the current request
 * @param {string} guid: the game id.
 */
async function getGame(req, guid=null) {
  let game = null;
  if (req.user && req.user.user_id) {
    if (guid == null) {
      guid = req.query.guid;
    }
    try {
      game = await GameSession.getSession(req.user, guid);
    } catch(e) {
      console.error(e);
    }
  }
  return game; 
}


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
router.get('/get-files', async (req, res) => {
  const game = getGame(req, req.query.guid);
  if (!game) {
    res.status(403).send('Forbidden');
  }
  const folder = game.getFolder();
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
router.post('/upload', (req,res) => {
  if(req.files === null){
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const game = getGame(req, req.query.guid);
  if (!game) {
    res.status(403).send('Forbidden');
  }
  const folder = game.getFolder();
  const file = req.files.file;
  const filePath = path.join(folder, file.name);
  file.mv(path, err => {
    if(err){
      console.log(err);
      return res.status(500).send(err);
    } else {
      decompress(path, folder).then(files=>{
        fs.unlinkSync(path); // remove compressed file
      });
    }
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
router.get('/download', function(req, res){
  const game = getGame(req, req.query.guid);
  const gameFile = 'game.zip';
  if (!game) {
    res.status(403).send('Forbidden');
  }
  const folder = game.getFolder();
  if(fs.existsSync(folder) ){
    const file = path.join(folder, gameFile);
    zipper.sync.zip(folder).compress().save(file);
    if(fs.existsSync(file)){
      res.download(file, function(error){ 
        console.log("Error : ", error) 
      });
    } else {
      console.error('Could not create the zip file');
      res.status(500).send('Internal Server Error');
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
 *       - file: the file path to be deleted
 *     responses:
 *       200:
 *         description: document deleted
 *       400:
 *         description: document does not exist
 */
router.post('/delete', function(req, res){
  const game = getGame(req, req.query.guid);
  const gameFile = 'game.zip';
  if (!game) {
    res.status(403).send('Forbidden');
  }
  if (!req.body.file) {
    res.status(400).send('Bad Request');
  }
  const folder = game.getFolder();
  if(fs.existsSync(folder) ){
    const file = path.join(folder, req.body.file);
    if(fs.existsSync(file)){
      fs.unlinkSync(file)
      res.status(200).send("Document successfuly deleted");
    } else{
      console.log("Server file doesn't exists!");
      res.send(400, {message: 'File does not exist'});
    }
  }
});

module.exports = router;
