import Icon from './Icon';

export default {
	title: 'Icon',
	parameters: {
		component: IconStory,
		componentSubtitle: 'Icon Story',
	},
};

export const sizes = () => (
	<>
		<Icon icon='document' size='small' filled />
		<Icon icon='document' filled />
		<Icon icon='document' size='large' filled />
	</>
);

export const outlined = () => (
	<>
		<Icon icon='document' />
	</>
);

export const custom = () => <Icon icon='document' colour='hotpink' filled />;
