define({
	proxyport: 9000,

	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '3.0.1'
	},

	environments: [
		{browserName: 'chrome'},
	],

	maxConcurrency: 3,

	reporters: [
		{id: 'Runner', filename: 'rowsdowr.txt'}
	],

	tunnel: 'NullTunnel',

	tunnelOptioons: {
		hostname: '127.0.0.1',
		port: 4444
	},

	functionalSuites: [
		'tests/functional/rowsdowr'
	],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
