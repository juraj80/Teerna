import Moment from 'moment';
import FileBrowser from 'react-keyed-file-browser';
import { useConsoleSize } from '../../hooks';

const FileBrowserComponent = () => {
	return (
		<>
			<FileBrowser
				files={[
					{
						key: 'cat.png',
						modified: +Moment().subtract(1, 'hours'),
						size: 1.5 * 1024 * 1024,
					},
					{
						key: 'kitten.png',
						modified: +Moment().subtract(3, 'days'),
						size: 545 * 1024,
					},
					{
						key: 'elephant.png',
						modified: +Moment().subtract(3, 'days'),
						size: 52 * 1024,
					},
				]}
			/>
		</>
	);
};

export default FileBrowserComponent;
