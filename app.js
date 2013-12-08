var optimist = require('optimist')
	.usage('Usage: node app http://google.com')
	
	.alias('h', 'help')
	.describe('h', 'show this help')
	
	.alias('c', 'concurrent')
	.describe('c', 'max concurrent http requests')
	.default('c', 50)

	.alias('a', 'amount')
	.describe('a', 'amount of requests to perform')
	.default('a', 1)
	
	.alias('m', 'method')
	.describe('m', 'requests http method')
	.default('m', 'GET')

	.alias('d', 'data')
	.describe('d', 'request payload')
	.default('d', '')

	.alias('t', 'timeout')
	.describe('t', 'request timeout (ms)')
	.default('t', 1000)

var opts = optimist.argv;
if (opts.h || !opts._.length) {
	optimist.showHelp();
	process.exit();
}

require('./lib/cli')(opts);