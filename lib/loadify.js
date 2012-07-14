/*
 * loadify
 * https://github.com/chrisjaure/loadify
 *
 * Copyright (c) 2012 Chris Jaure
 * Licensed under the MIT license.
 */

var appended_function = function() {

	(function (name, definition) {

		if (typeof define == 'function') {
			define(definition);
		}
		else if (typeof module !='undefined') {
			module.exports = definition();
		}
		else {
			this[name] = definition();
		}

	})('{name}', function () {

		return require('{module}');

	});

};

module.exports = function(opts) {

	var
		fn = appended_function.toString(),
		body = fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"));

	opts.name = opts.name || opts.module;

	return function(bundle) {
		bundle.exports = [];
		bundle.append(
			body.toString()
				.replace('{name}', opts.name)
				.replace('{module}', opts.module));
	};

};