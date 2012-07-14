# Loadify

Middleware for browserify to make bundles loadable via AMD or script tag.


## Getting Started

Install the module with: `npm install loadify`


## Documentation

Loadify accepts an object with a couple keys:

- `module` - The requireable module name.
- `name` - (optional) If you're generating a script and it's included via a script tag, this will be the global variable under which your script exports will be available.


## Examples

Package up a module.

```javascript
var loadify = require('loadify');
var browserify = require('browserify');
var bundle = browserify({
	require: 'my_module'
});

bundle.use(loadify({
	module: 'my_module'
}));

// write your bundle to a file
```

Package up a script that uses other modules.

```javascript
var loadify = require('loadify');
var browserify = require('browserify');
var bundle = browserify({
	entry: './my_script.js'
});

bundle.use(loadify({
	name: 'myModule', // global that will be available if loaded via script tag
	module: './my_script.js'
}));

// write your bundle to a file
```

## Tests

To run tests in the browser, browse to `./test/index.html`. If you make changes, run `node ./test/fixture/compile.js` to recomplile the client javascript.


## TODO

- Automatically detect module name.
- Add tests for loading via CommonJS loader.

## License

Copyright (c) 2012 Chris Jaure  
Licensed under the MIT license.
