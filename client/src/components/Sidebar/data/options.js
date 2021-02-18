const gmOptions = [
	{
		title: 'Messaging',
		options: [
			{
				tabIcon: 'joinreq',
				tabName: 'joinRequests',
				tabTitle: 'Join Requests',
				notifications: 1,
			},
			{
				tabIcon: 'chat',
				tabName: 'chat',
				tabTitle: 'Chat',
				notifications: 2,
				tabAction: 'openChat',
			},
		],
	},
	{
		title: 'Game Management',
		options: [
			{
				tabIcon: 'game',
				tabName: 'gamePlay',
				tabTitle: 'Game',
				notifications: null,
			},
			{
				tabIcon: 'players',
				tabName: 'players',
				tabTitle: 'Players',
				notifications: null,
			},
			{
				tabIcon: 'document',
				tabName: 'documents',
				tabTitle: 'Documents',
				notifications: null,
			},
			{
				tabIcon: 'map',
				tabName: 'map',
				tabTitle: 'Map',
				notifications: null,
			},
		],
	},
];

const playerOptions = [
	{
		title: 'Messaging',
		options: [
			{
				tabIcon: 'chat',
				tabName: 'chat',
				tabTitle: 'Chat',
				notifications: 3,
				tabAction: 'openChat',
			},
		],
	},
	{
		title: 'Game Management',
		options: [
			{
				tabIcon: 'game',
				tabName: 'gamePlay',
				tabTitle: 'Game',
				notifications: null,
			},
			{
				tabIcon: 'players',
				tabName: 'players',
				tabTitle: 'Players',
				notifications: null,
			},
			{
				tabIcon: 'document',
				tabName: 'documents',
				tabTitle: 'Documents',
				notifications: null,
			},
			{
				tabIcon: 'map',
				tabName: 'map',
				tabTitle: 'Map',
				notifications: null,
			},
		],
	},
];

export { gmOptions, playerOptions };
