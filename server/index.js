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
        res.json({ fileName: file.name, filePath: `./Uploads/${file.name}`});
    });

});

// use port 5000 unless there exists a preconfigured port
var port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server Started...'));

