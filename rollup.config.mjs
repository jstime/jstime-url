import license from 'rollup-plugin-license';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'output/url-bundle.js',
    format: 'iife',
    name: 'URL'
  },
  plugins: [
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
