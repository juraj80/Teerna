const express = require('express');
const bodyParser = require('body-parser');

const fileSystem = require('./helpers/fileSystem.js')
const chat = require('./Chat/Chat.js');
const Dice = require('./Dice/Dice');
const GameSession = require("./GameSession/GameSession");

const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const decompress = require('decompress');
const zipper = require('zip-local');
const Moment = require('moment');

const osxfolder = `${__dirname}/Uploads/__MACOSX`;


const app = express();

/**
 * Serve the Client Application.
 */
app.use('/', express.static('../client/build'));

/**
 * Body parser for handling POST requests.
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(fileUpload());

const gameFile = 'game.zip';

app.use(express.static('Uploads'));


app.get('/get-files',(req, res) => {
    const folder = 'Uploads';
    const files = fileSystem.getUploadFiles(folder);
    const listOfFiles = fileSystem.getListOfFileObjects(files);
    res.send(listOfFiles);
});


//Upload Endpoint
app.post('/upload', (req,res) => {
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

//Download Endpoint

app.get('/download', function(req, res){
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

//Delete Endpoint

  app.post('/delete', function(req, res){
     
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
    
    } else{
        console.log("Server file doesn't exists!");
    }

});


/**
 * Creates a new game session, making the user its Game Master.
 */

app.post('/game-session', (req, res) => {
  const gm = req.body.user;
  const gameSession = GameSession.createSession(gm);
  res.json(
    {
      message: 'Game created',
      gameId: gameSession.sessionId
    }
  );
});

/**
 * A Dice endpoint.
 */
app.get('/dice/:sides', (req, res) => {
    const sides = req.params.sides;
    const roll = new Dice.Roll(sides, "public", "GM");
    res.json(roll);
});

// use port 5000 unless there exists a preconfigured port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Teerna Server listening on port`, port, `!`)
});
chat.setUpChat();
