import esbuild from 'esbuild';
import { resolve } from 'path';

export const ENTRY = resolve('src/index.js');
export const OUTFILE = resolve('dist/app.js');

export function bundle(config = {}) {
  return esbuild.build({
    format: 'iife',
    entryPoints: [ENTRY],
    bundle: true,
    outfile: OUTFILE,
    ...config
  });
}

export function logSuccess() {
  console.log('Bundled: ' + OUTFILE);
}