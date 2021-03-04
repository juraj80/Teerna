const fs = require('fs');
const path = require('path');


const getUploadFiles = dir =>
    fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...getUploadFiles(name)] : [...files, name];
}, []);


const getFileSize = filename => {
    let stats = fs.statSync(filename);
    let sizeInB = stats.size;
    let sizeInKB = sizeInB / 1024*1024;
    return  sizeInKB;
}

const getLastModified = filename => {
    const stats = fs.statSync(filename);
    return stats.mtime.getTime();
}

const getListOfFileObjects =  files => {
    const listOfFiles = [];
    for(const file of files){

        listOfFiles.push({
            key: file,
            modified: getLastModified(file),
            size: getFileSize(file)
        })
    }
    return listOfFiles;
}


module.exports = {
    getUploadFiles, getFileSize, getLastModified, getListOfFileObjects

}