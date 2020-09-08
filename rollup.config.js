const {join} = require('path');

const license = require('rollup-plugin-license');
const nodePolyfills = require('rollup-plugin-node-polyfills');
const json = require('@rollup/plugin-json');
const {nodeResolve} = require('@rollup/plugin-node-resolve');

const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'index.mjs',
  output: {
    file: 'output/url-bundle.mjs',
    format: 'esm',
    name: 'URL'
  },
  plugins: [
    license({
      thirdParty: {
        includePrivate: true, // Default is false.
        output: {
          file: join(__dirname, 'output', 'url-dependencies.txt'),
          encoding: 'utf-8', // Default is utf-8.
        },
      },
    }),
    nodePolyfills(),
    json(),
    nodeResolve({
      mainFields: ['main'],
      preferBuiltins: false
    }),
    commonjs()
  ]
};