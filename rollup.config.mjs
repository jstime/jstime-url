// rollup.config.js
import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'output/url-bundle.mjs',
    format: 'esm',
    name: 'URL'
  },
  plugins: [
    nodePolyfills(),
    json(),
    resolve({
      mainFields: ['main'],
      preferBuiltins: false
    }),
    commonjs()
  ]
};