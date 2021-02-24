import { actions } from './actions';

const landingItems = [
	{ itemTitle: 'Create Game', itemAction: actions.CREATE_GAME },
	{ itemTitle: 'Join Game', itemAction: actions.REQUEST_JOIN },
];

const gmItems = [
	{ itemTitle: 'Create Game', itemAction: actions.CREATE_GAME },
	{ itemTitle: 'Load Game', itemAction: actions.LOAD_GAME },
];

const playerItems = [
	{ itemTitle: 'Join Game', itemAction: actions.REQUEST_JOIN },
];

export { landingItems, gmItems, playerItems };
