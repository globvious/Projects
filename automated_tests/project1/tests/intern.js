define({
	proxyport: 9000,

	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '3.0.1'
	},

	environments: [
		{browserName: 'firefox'},
	],

	maxConcurrency: 3,
/*
	reporters: [
		{id: 'Runner', filename: '../project1.txt'}
	]
*/
	tunnel: 'NullTunnel',

	tunnelOptioons: {
		hostname: '127.0.0.1',
		port: 4444
	},

	functionalSuites: [
		'tests/functional/project1'
	],
})
