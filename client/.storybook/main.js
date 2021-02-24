module.exports = {
	stories: ['../src/stories/*.stories.js'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-contexts/register',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@storybook/node-logger',
		'@storybook/preset-create-react-app',
		'storybook-addon-styled-component-theme/dist/register',
	],
};
