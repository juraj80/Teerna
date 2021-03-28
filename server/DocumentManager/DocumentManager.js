const decompress = require('decompress');
const zipper = require('zip-local');
const fileSystem = require('../helpers/fileSystem');
const fs = require('fs');
const osxfolder = `${__dirname}/Uploads/__MACOSX`;
const path = require('path');

class DocumentManager {


  constructor(gameSession) {
    this.gameSession = gameSession;
  }

  async upload(file) {
    const filepath = `${this.gameSession.getFolder()}/Uploads/${file.name}`;
    file.mv(filepath, async err => {
      let uncompressedFiles;
      if(err){
        throw err
      }
      if (file.mimetype === 'application/zip') {
        const uncompressedFiles = await decompress(filepath,'Uploads/');
        fs.unlinkSync(filepath);
        if(fs.existsSync(osxfolder)){
          fs.rmdirSync(osxfolder, {recursive: true});
        }
      }
      const result = { fileName: file.name, filePath: filepath}
      if (uncompressedFiles) {
        result.uncompressedFiles = uncompressedFiles;
      }
      return result;
    });
  }

  getFiles() {
    const files = fileSystem.getUploadFiles(this.gameSession.getFolder());
    const listOfFiles = fileSystem.getListOfFileObjects(files)
      .map(f => {f.key = f.key.replace(this.gameSession.getFolder(), ''); return f})
      .filter(f => f.key !== '/db.sqlite');
    return listOfFiles;
  }

  getContent(filePath) {
    const fileFullPath = path.join(this.gameSession.getFolder(), filePath);
    return new Promise( (resolve, reject) => {
      fs.readFile(fileFullPath, 'utf8', function (err,data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  download() {
    const folder = this.gameSession.getFolder();
    if(fs.existsSync(folder) ){
      const file = path.join(folder, 'game.zip')
      zipper.sync.zip(folder).compress().save(file);
      if(fs.existsSync(file)){
        return file;
      }
    }
    return null;
  }

}

module.exports = DocumentManager;
