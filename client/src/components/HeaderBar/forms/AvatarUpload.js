import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import { DragDropZone } from '../../../components';
import { AlertContext, auth, AuthContext, firestore, storage } from '../../../contexts';

export default function AvatarUpload({ updateShow, closeDropdown }) {
	const addAlert = useContext(AlertContext);
    const { user, setUser } = useContext(AuthContext);
	const [file, setFile] = useState(undefined);
	const [filename, setFilename] = useState(undefined);
	const [ready, setReady] = useState(false);

	const allInputs = { imgUrl: '' };
	const [imgAsFile, setImgAsFile] = useState(undefined);
	const [imgAsUrl, setImgAsUrl] = useState(allInputs);

	useEffect(() => {
		if (file) {
			setFilename(file[0].name);
			setImgAsFile(imgFile => file);
		} else setFilename(undefined);
	}, [file]);

	useEffect(() => {
        // upload image file to firebase storage and get url
		if (ready) {
			!imgAsFile && addAlert('error', `not an image, the file is a ${typeof imgAsFile}`);
			const uploadTask = storage.ref(`/images/${filename}`).put(imgAsFile);
			uploadTask.on(
				'state_changed',
				snapshot => console.log(snapshot),
				err => addAlert('error', err),
				() =>
					storage
						.ref('images')
						.child(filename)
						.getDownloadURL()
						.then(fbUrl => setImgAsUrl(prev => ({ ...prev, imgUrl: fbUrl })))
			);
		}
        // clean up
       return () => setFile(undefined);
	}, [ready]);

    useEffect(() => {
        // update in firestore and in context
        if (imgAsUrl) {
            const updatedUser = {...user, picture: imgAsUrl};
            setUser(updatedUser);
            firestore
                .collection('users')
                .doc(auth.currentUser.uid)
                .set(updatedUser)
                .catch(err => addAlert('error', err));
            
        };
        return () => {
            setImgAsUrl(undefined);
            closeDropdown();
            updateShow();
        }
    },[imgAsUrl])

	return (
		<DragDropZone setReady={setReady} setFile={setFile} filename={filename} />
	);
}

AvatarUpload.propTypes = {
	updateShow: func.isRequired,
	closeDropdown: func,
};
