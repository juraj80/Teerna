import { number } from 'prop-types';
import Bar from './styles/Bar';
import Progress from './styles/Progress';
import Status from './styles/Status';

export default function LinearProgressBar({ percentDone }) {
	return (
		<>
			<Status>{percentDone}%</Status>
			<Progress>
				<Bar></Bar>
			</Progress>
		</>
	);
}

LinearProgressBar.propTypes = {
    percentDone: number.isRequired,
}
