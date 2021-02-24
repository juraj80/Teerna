import { Button } from '../components';

export default {
	component: Button,
	title: 'Button',
	decorators: [story => <div style={{ padding: '12px 16px' }}>{story()}</div>],
};

export const standard = () => (
	<Button
		type='button'
		text='Button'
		fill='fill'
		border='minimal'
		colour='blue'
		action={() => {}}
	/>
);

export const colours = () => (
	<>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='minimal'
			colour='blue'
		/>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='minimal'
			colour='black'
		/>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='minimal'
			colour='white'
		/>
	</>
);

export const outlined = () => {
	<Button type='button' text='Outline' />;
};

export const shapes = () => (
	<>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='minimal'
			colour='blue'
		/>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='regular'
			colour='blue'
		/>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='round'
			colour='blue'
		/>
		<Button
			action={() => {}}
			type='button'
			text='Button'
			fill='fill'
			border='exaggerated'
			colour='blue'
		/>
	</>
);

export const withIcon = () => (
	<>
		<Button
			action={() => {}}
			type='button'
			fill='fill'
			border='round'
			colour='blue'
			icon='document'
		/>
		<Button
			action={() => {}}
			type='button'
			fill='fill'
			text='doc'
			border='minimal'
			colour='blue'
			icon='document'
		/>
	</>
);

export const disabled = () => (
	<Button
		action={() => {}}
		type='button'
		fill='fill'
		text='doc'
		border='minimal'
		colour='blue'
		icon='document'
		disabled
	/>
);
