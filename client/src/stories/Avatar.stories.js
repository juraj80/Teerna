import { Avatar } from '../components';

export default {
	component: Avatar,
	title: 'Avatar',
	decorators: [story => <div style={{ padding: '8px 12px' }}>{story()}</div>],
};

export const standard = () => <Avatar />;

export const custom = () => (
	<Avatar source='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
);

export const status = () => (
	<>
		<>
			<Avatar status='info' />
		</>
		<>
			<Avatar status='success' />
		</>
		<>
			<Avatar status='warning' />
		</>
		<>
			<Avatar status='error' />
		</>
	</>
);
