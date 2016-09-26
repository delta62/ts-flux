'use strict';

const Builder = require('systemjs-builder');

let builder = new Builder({
  map: {
    lib: 'lib'
  },
  meta: {
    lib: {
      format: 'cjs',
    }
  },
  packages: {
    lib: {
      defaultExtension: 'js'
    }
  }
});

builder
  .buildStatic('index.js', 'dist/flux-lite.umd.js', {
    globalName: 'FluxLite',
    globalDeps: {
      eventemitter3: 'EventEmitter'
    },
    deps: [ 'eventemitter3' ]
  })
  .then(() => console.log('Build complete'))
  .catch(err => console.error(err));

builder
  .buildStatic('index.js', 'dist/flux-lite.es2015.js', {
    format: 'es6',
    runtime: false
  })
  .then(() => console.log('ES6 build complete'))
  .catch(err => console.error(err));

builder
  .buildStatic('index.js', 'dist/flux-lite.umd.min.js', {
    globalName: 'FluxLite',
    globalDeps: {
      eventemitter3: 'EventEmitter'
    },
    deps: [ 'eventemitter3' ],
    minify: true
  })
  .then(() => console.log('Minified build complete'))
  .catch(err => console.error(err));
