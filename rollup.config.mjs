import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: 'index.mjs',
  output: {
    file: 'output/url-bundle.js',
    format: 'iife',
    name: 'URL'
  },
  plugins: [
    replace({
      "return Buffer.from": "return "
    }),
    license({
      thirdParty: {
        includePrivate: true, // Default is false.
        output: {
          file: new URL('./output/url-dependencies.txt', import.meta.url).pathname,
          encoding: 'utf-8', // Default is utf-8.
        },
      },
    }),
    alias({
      entries: [
        { find: 'util', replacement: new URL('./lib/util.js', import.meta.url).pathname }
      ]
    }),
    json(),
    nodeResolve({
      mainFields: ['main'],
      preferBuiltins: false
    }),
    commonjs(),
  ]
};
