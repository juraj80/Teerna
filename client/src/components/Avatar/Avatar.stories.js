import Avatar from './Avatar';

export default {
	title: 'Avatar',
	parameters: {
		component: Avatar,
		componentSubtitle: 'Avatar Story',
	},
};

export const sizes = (
	<>
		<Avatar size='small' />
		<Avatar />
		<Avatar size='large' />
	</>
);

export const customs = (
	<>
		<Avatar
			size='small'
			source='https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
		/>
		<Avatar source='https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' />
		<Avatar
			size='large'
			source='https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
		/>
	</>
);

export const actionables = <Avatar clickable action={() => {}} />;
