import { func, string } from 'prop-types';
import { Upload, Download, Load, Delete, DocumentList } from './';

const Screen = ({ type, setLoaded, setUploaded }) => {
	let content = <div />;

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
		case 'documents':
			content = <DocumentList />;
			break;
	}

	return <>{content}</>;
};

Screen.propTypes = {
	type: string.isRequired,
	setUploaded: func.isRequired,
	setLoaded: func.isRequired,
};

export default Screen;
