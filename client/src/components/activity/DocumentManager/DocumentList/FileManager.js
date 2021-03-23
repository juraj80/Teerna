import { useState } from 'react';
import Moment from 'moment';
import FileBrowser  from 'react-keyed-file-browser';
import { colours, spacing } from '../../../../styles';
import { darken, transparentize } from 'polished';

const customFiles = [
	{
		key: 'photos/animals/cat in a hat.png',
		modified: +Moment().subtract(1, 'hours'),
		size: 1.5 * 1024 * 1024,
	},
	{
		key: 'photos/animals/kitten_ball.png',
		modified: +Moment().subtract(3, 'days'),
		size: 545 * 1024,
	},
	{
		key: 'photos/animals/elephants.png',
		modified: +Moment().subtract(3, 'days'),
		size: 52 * 1024,
	},
	{
		key: 'photos/funny fall.gif',
		modified: +Moment().subtract(2, 'months'),
		size: 13.2 * 1024 * 1024,
	},
	{
		key: 'photos/holiday.jpg',
		modified: +Moment().subtract(25, 'days'),
		size: 85 * 1024,
	},
	{
		key: 'documents/letter chunks.doc',
		modified: +Moment().subtract(15, 'days'),
		size: 480 * 1024,
	},
	{
		key: 'documents/export.pdf',
		modified: +Moment().subtract(15, 'days'),
		size: 4.2 * 1024 * 1024,
	},
];

export const DocumentList = () => {
	const [currFiles, setCurrFiles] = useState([]);

    const handleCreateFolder = key => setCurrFiles(currFiles.concat([{key}]));

    const handleCreateFiles = (files, prefix) => {
        let newFiles = files.map(file => {
            let newKey = prefix;
            if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
                newKey += '/';
            }
            newKey += file.name;
            return { key: newKey, size: file.size, modified: +Moment()};
        });
        const uniqueNewFiles = [];
        newFiles.map(nfile => {
            let exists = false;
            currFiles.map(currFile => {
                if (currFile.key === nfile.key) exists = true;
            });
            if (!exists) uniqueNewFiles.push(nfile);
        });
        setCurrFiles([...currFiles, ...uniqueNewFiles]);
    };

    const handleRenameFolder = (oldKey, newKey) => {
        const newFiles = [];
        currFiles.map(file => {
            if (file.key.substr(0, oldKey.length) === oldKey) {
                newFiles.push({...file, key: file.key.replace(oldKey, newKey), modified: +Moment()});
            } else newKey.push(file);
        })
        setCurrFiles(newFiles);
    };

    const handleRenameFile = (oldKey, newKey) => {
        const newFiles = [];
        currFiles.map(file => {
            if (file.key === oldKey) newFiles.push({...file, key: newKey, modified: +Moment()});
            else newFiles.push(file);
        });
        setCurrFiles(newFiles);
    }

    const handleDeleteFolder = folderKey => {
        const newFiles = [];
        currFiles.map(file => {
            if (file.key.substr(0, folderKey.length) !== folderKey) newFiles.push(file);
        });
        setCurrFiles(newFiles);
    };

    const handleDeleteFile = fileKey => {
        const newFiles = [];
        currFiles.map(file => {
            if (file.key !== fileKey) newFiles.push(file);
        });
        setCurrFiles(newFiles);
    }

    return (
        <div style={{ position: 'absolute', minWidth: '100%', minHeight:'180px', left: 0, bottom: 0, display: 'flex', justifyContent: 'center', background: transparentize(0.8, colours.grey[200]), padding: '16px'}} >
        <FileBrowser
            files={currFiles}
            onCreateFolder={handleCreateFolder}
            onCreateFiles={handleCreateFiles}
            onMoveFolder={handleRenameFolder}
            onMoveFile={handleRenameFile}
            onRenameFolder={handleRenameFolder}
            onRenameFile={handleRenameFile}
            onDeleteFolder={handleDeleteFolder}
            onDeleteFile={handleDeleteFile}
        />
        </div>
    );
	
};
