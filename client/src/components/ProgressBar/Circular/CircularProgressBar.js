import { number } from 'prop-types';

export default function CircularProgressBar({ percentDone }) {
	return (
		<Circle>
			<Pie>
				<svg>
					<circle cx={percentDone * 3.6} cy={percentDone * 3.6} r='50'></circle>
				</svg>
			</Pie>
        </Circle>
	);
}

CircularProgressBar.propTypes = {
	percentDone: number.isRequired,
};
