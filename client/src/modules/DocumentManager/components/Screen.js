import { useEffect, useState } from 'react';
import { func, string } from 'prop-types';
import { Upload, Download, Load, Delete } from './';
import { FileManager } from '../../../components';

const Screen = ({ type, setLoaded, setUploaded }) => {
	let content = <div />;
	// const [Content, setContent] = useState(undefined);

	switch (type) {
		case 'download':
			content = <Download />;
			break;
		case 'delete':
			content = <Delete />;
			break;
		case 'load':
			content = <Load setLoaded={setLoaded} />;
			break;
		case 'upload':
			content = <Upload setUploaded={setUploaded} />;
			break;
	}

	return (
		<>
			{type === 'load' && <FileManager />}
			{content}
		</>
	);
};

Screen.propTypes = {
	type: string.isRequired,
	setUploaded: func.isRequired,
	setLoaded: func.isRequired,
};

export default Screen;
