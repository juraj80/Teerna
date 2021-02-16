const express = require('express');
const chat = require('./Chat/Chat.js');


const fileUpload = require('express-fileupload');
const fs = require('fs');
const decompress = require('decompress');
const zipper = require('zip-local');

const app = express();

chat.setUpChat();

app.use(fileUpload());
const gameFile = 'game.zip';

app.use(express.static('Uploads'));

//Upload Endpoint

app.post('/upload', (req,res) => {
    console.log('upload called');
    if(req.files === null){
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    const path = `${__dirname}/Uploads/${file.name}`

    file.mv(path, err => {
        decompress(path,'Uploads/').then(files=>{
            fs.unlinkSync(path);
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
    const osxfolder = `${__dirname}/Uploads/__MACOSX`;

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


// use port 5000 unless there exists a preconfigured port
var port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server Started...'));

