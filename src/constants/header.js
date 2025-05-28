export const menuItems = [
	{ name: 'Home', path: '/home' },
	// { name: "Projects", path: "/home/#projects" },
	{
		name: 'Service',
		path: '/service',
		list: [
			{
				name: 'Android-app ',
				path: '/android-app-development-company',
			},
			{ name: ' Service-ios ', path: '/service-ios' },
			{ name: 'Ai-service', path: '/ai-service' },
			{ name: 'Service-web3', path: '/service-web3' },
			{ name: 'Web-App ', path: '/web-app' },
		],
	},
	{
		name: 'Machine Learning',
		path: '/ml',
		list: [
			{ name: 'Chatbot', path: '/service-chatbot' },
			{ name: 'Big-Data', path: '/big-data' },
		],
	},
	{
		name: 'Blockchain',
		path: '/blockchain',
		list: [
			{ name: 'Web3 ', path: '/web3' },
			{ name: 'Token', path: '/nft-token-development' },
			{ name: 'Metaverse ', path: '/metaverse' },
			{ name: 'Web3-game-development', path: '/web3-game-development' },
			{
				name: 'Crypto-exchange-development ',
				path: '/crypto-exchange-software-development',
			},
			{ name: 'Wallet ', path: '/wallet' },
		],
		activeEl: 3,
	},
	{
		name: 'Graphic-Design',
		path: '/gd',
		list: [
			{ name: 'Motion', path: '/motion' },
			{ name: 'UI/UX', path: '/ui-ux' },
			{ name: 'Copywriting', path: '/copywriting' },
		],
	},
	{ name: 'About us', path: '/aboutus' },
	{ name: 'Contact us', path: '/contactus' },
]
