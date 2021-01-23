import Button from './Button';

export default {
	title: 'Button',
	parameters: {
		component: Button,
		componentSubtitle: 'Button Base',
	},
};

export const primary = () => <Button type='primary'>Primary</Button>;
export const secondary = () => <Button type='secondary'>Secondary</Button>;
export const actionButtons = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
		}}
	>
		<Button type='accept'>Accept</Button>
		<Button type='cancel'>Cancel</Button>
		<Button type='danger'>Danger</Button>
		<Button type='info'>Info</Button>
		<Button type='disabled'>Disabled</Button>
	</div>
);
