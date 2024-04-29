import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import path from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        exclude: ['**/__stories__', '**/*.stories.ts'],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      image(),
      postcss({
        extract: false,
        modules: true,
        minimize: true,
        use: ['sass'],
      }),
      alias({
        entries: [{ find: '@', replacement: path.resolve('./src') }],
      }),

      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
        limit: Infinity,
        fileName: '[dirname][name][extname]',
      }),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.(css|scss)$/],
  },
];
