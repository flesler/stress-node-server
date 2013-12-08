stress-node-server
==================

## Description

Node server for stress testing other servers.

Uses the [stress-node](https://github.com/flesler/stress-node) library to run the stress tests.

## Installation

First download the code and install dependencies

	git clone git://github.com/flesler/stress-node-server stress-server
	cd stress-server
	npm install

Now you are ready to run stress tests. Check the Help section for details.

## Usage

Here's the help output:

	Usage: node app http://google.com

	Options:
		-h, --help        show this help
		-c, --concurrent  max concurrent http requests   [default: 50]
		-a, --amount      amount of requests to perform  [default: 1]
		-m, --method      requests http method           [default: "GET"]
		-d, --data        request payload                [default: ""]
		-t, --timeout     request timeout (ms)           [default: 1000]
