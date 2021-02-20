import { DocumentManager } from '../../../modules';

export const gameManagementOptions = [
	{
		index: 0,
		icon: 'game',
		title: 'Game',
		notifications: null,
		gmOnly: false,
		content: <div />,
	},
	{
		index: 1,
		icon: 'players',
		title: 'Players',
		notifications: null,
		gmOnly: false,
		content: <div />,
	},
	{
		index: 2,
		icon: 'document',
		title: 'Documents',
		notifications: null,
		gmOnly: false,
		content: <DocumentManager />,
	},
	{
		index: 3,
		icon: 'map',
		title: 'Map',
		notifications: null,
		gmOnly: false,
		content: <div />,
	},
];

export const messagingOptions = [
	{
		index: 4,
		icon: 'joinreq',
		title: 'Join Requests',
		notifications: 1,
		gmOnly: true,
		content: <div />,
	},
	{
		index: 5,
		icon: 'chat',
		title: 'Chat',
		notifications: 2,
		gmOnly: false,
		content: <div />,
	},
];

// const gmOptions = [
// 	{
// 		title: 'Messaging',
// 		options: [
// 			{
// 				index: 0,
// 				tabIcon: 'joinreq',
// 				tabName: 'joinRequests',
// 				tabTitle: 'Join Requests',
// 				notifications: 1,
// 				tabAction: options.JOIN_REQUESTS,
// 			},
// 			{
// 				index: 1,
// 				tabIcon: 'chat',
// 				tabName: 'chat',
// 				tabTitle: 'Chat',
// 				notifications: 2,
// 				tabAction: options.GAME,
// 			},
// 		],
// 	},
// 	{
// 		title: 'Game Management',
// 		options: [
// 			{
// 				index: 2,
// 				tabIcon: 'game',
// 				tabName: 'gamePlay',
// 				tabTitle: 'Game',
// 				notifications: null,
// 				tabAction: options.GAME,
// 			},
// 			{
// 				index: 3,
// 				tabIcon: 'players',
// 				tabName: 'players',
// 				tabTitle: 'Players',
// 				notifications: null,
// 				tabAction: options.PLAYERS,
// 			},
// 			{
// 				index: 4,
// 				tabIcon: 'document',
// 				tabName: 'documents',
// 				tabTitle: 'Documents',
// 				notifications: null,
// 				tabAction: options.DOCUMENTS,
// 			},
// 			{
// 				index: 5,
// 				tabIcon: 'map',
// 				tabName: 'map',
// 				tabTitle: 'Map',
// 				notifications: null,
// 				tabAction: options.MAP,
// 			},
// 		],
// 	},
// ];

// const playerOptions = [
// 	{
// 		title: 'Messaging',
// 		options: [
// 			{
// 				index: 0,
// 				tabIcon: 'chat',
// 				tabName: 'chat',
// 				tabTitle: 'Chat',
// 				notifications: 3,
// 				tabAction: options.GAME,
// 			},
// 		],
// 	},
// 	{
// 		title: 'Game Management',
// 		options: [
// 			{
// 				index: 1,
// 				tabIcon: 'game',
// 				tabName: 'gamePlay',
// 				tabTitle: 'Game',
// 				notifications: null,
// 				tabAction: options.GAME,
// 			},
// 			{
// 				tabIcon: 'players',
// 				tabName: 'players',
// 				tabTitle: 'Players',
// 				notifications: null,
// 				tabAction: options.PLAYERS,
// 			},
// 			{
// 				tabIcon: 'document',
// 				tabName: 'documents',
// 				tabTitle: 'Documents',
// 				notifications: null,
// 				tabAction: options.DOCUMENTS,
// 			},
// 			{
// 				tabIcon: 'map',
// 				tabName: 'map',
// 				tabTitle: 'Map',
// 				notifications: null,
// 				tabAction: options.MAP,
// 			},
// 		],
// 	},
// ];

// export { gmOptions, playerOptions };
