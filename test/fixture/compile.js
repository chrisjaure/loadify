#!/usr/bin/env node

console.log('Recompiling client javascript. When done, browse to ./test/index.html');

var
	fs = require('fs'),
	traverse = require('traverse'),
	browserify = require('browserify'),
	loadify = require('../../'),
	mod,
	script;

script = browserify({
	entry : __dirname + '/script.js'
});
script.use(loadify({
	name: 'test',
	module: '/script.js'
}));
write(script, 'script.client.js');

mod = browserify({
	require: 'traverse'
});
mod.use(loadify({
	module: 'traverse'
}));
write(mod, 'module.client.js');

function write (bundle, name) {

	var src = bundle.bundle();

	fs.writeFile(__dirname + '/' + name, src, function () {
		console.log(name + ': ' + Buffer(src).length + ' bytes written.');
	});

}
