import { useState } from 'react';
import { Input } from '../components';

export default {
	title: 'Input',
	component: Input,
};

export const basic = () => {
	const [value, setValue] = useState('');
	return (
		<Input
			name='name'
			type='text'
			withIcon={false}
			placeholder='First Name'
			value={value}
			setValue={setValue}
		/>
	);
};

export const withIcon = () => {
	const [value, setValue] = useState('');
	<Input
		name='password'
		type='password'
		icon='eye'
		withIcon={true}
		placeholder='Password'
		value={value}
		setValue={setValue}
	/>;
};
