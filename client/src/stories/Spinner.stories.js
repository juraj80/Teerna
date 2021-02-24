import { Spinner } from '../components';
import { rgba } from 'polished';

export default {
	title: 'Spinner',
	component: Spinner,
	decorators: [
		story => (
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					background: rgba(0, 0, 0, 0.9),
					zIndex: 1,
				}}
			>
				{story()}
			</div>
		),
	],
};

export const Basic = () => <Spinner />;
