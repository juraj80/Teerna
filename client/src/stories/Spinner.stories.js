import { Spinner } from '../components/feedback';

export default {
	title: 'Spinner',
	component: Spinner,
};

export const basic = () => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<Spinner />
	</div>
);
