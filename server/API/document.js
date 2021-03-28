const express = require('express');
const authenticate = require("../auth.js");
const router = express.Router();
const fileSystem = require('../helpers/fileSystem');
const decompress = require('decompress');

const DocumentManager = require('../DocumentManager/DocumentManager.js');
const GameSession = require('../GameSession/GameSession.js');



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
router.get('/get-files', authenticate, async (req, res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else if (!req.query.guid) {
    res.status(400).json({msg: 'There is no game session.'});
  } else {
    const gameSession = await GameSession.getSession(req.user, req.query.guid);
    const documentManager = new DocumentManager(gameSession);
    const listOfFiles = await documentManager.getFiles();
    res.send(listOfFiles);
  }
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
 *       - in: body
 *         name: file
 *         description: The file to be uploaded
 *         schema:
 *           type: string
 *     responses:
 *       400:
 *         description: No file uploaded
 *       200:
 *         description: the filename and filepath of the uploaded file.
 *
 */
router.post('/upload', authenticate, async (req,res) => {
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else if (!req.body.guid) {
    res.status(400).json({msg: 'There is no game session.'});
  } else if(req.files === null){
    return res.status(400).json({ msg: 'No file uploaded' });
  } else {
    const gameSession = await GameSession.getSession(req.user, req.body.guid);
    const documentManager = new DocumentManager(gameSession);
    const uploaded = await documentManager.upload(req.files.file);
    if (uploaded === null) {
      res.status(500).send(err);
    } else {
      res.json(uploaded);
    }
  }
});

/**
 * Get contents endpoint
 *
 * @openapi
 * /api/document/content:
 *   get:
 *     tags:
 *       - Document manager
 *     summary: fetches the content of a given file
 *     parameters:
 *       - $ref: '#/components/parameters/guidQuery'
 *       - $ref: '#/components/parameters/tokenQuery'
 *       - in: query
 *         name: file
 *         description: The file to be fetched
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: the string content of the fetched file
 */
router.get('/content', authenticate, async function(req, res){
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else if (!req.query.guid) {
    res.status(400).json({msg: 'There is no game session.'});
  } else if (!req.query.file) {
    res.status(400).json({msg: 'There is no file to be fetched.'});
  } else {
    const gameSession = await GameSession.getSession(req.user, req.query.guid);
    const documentManager = new DocumentManager(gameSession);
    try {
      console.log(req.query.file);
      const contents = await documentManager.getContent(req.query.file);
      res.status(200).send(contents);
    } catch (e) {
      console.error(e);
      res.status(500).json({msg: 'Error fetching the file.'});
    }
  }  
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
router.get('/download', authenticate, async function(req, res){
  if (!req.user || !req.user.user_id) {
    res.status(403).send('Forbidden');
  } else if (!req.query.guid) {
    res.status(400).json({msg: 'There is no game session.'});
  } else {
    const gameSession = await GameSession.getSession(req.user, req.query.guid);
    const documentManager = new DocumentManager(gameSession);
    const download = documentManager.download();
    if (download) {
      res.download(download, function(error){ 
        if (error != undefined) console.error("Error : ", error) 
      });
    } else {
      res.status(500).json({msg: 'Error when creating download file'});
      console.error("Error : ", error) 
    }
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
    res.send(400, {message: 'File does not exist'});
  }
});

module.exports = router;
