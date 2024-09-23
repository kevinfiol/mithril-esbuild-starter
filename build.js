import esbuild from 'esbuild';
import { resolve } from 'path';

const PORT = 8091;
const DEV = process.argv.includes('--dev');
const OUTFILE = resolve('public/app.js');
const ENTRY = resolve('src/index.js');

/** @type {esbuild.BuildOptions} **/
const config = {
  format: 'iife',
  entryPoints: [ENTRY],
  outfile: OUTFILE,
  bundle: true,
  minify: !DEV,
  sourcemap: DEV,
  jsxFactory: 'm',
  jsxFragment: '"["',
  define: {
    'window.DEV_MODE': DEV ? 'true' : 'false'
  },
  plugins: [{
    name: 'on-end',
    setup(build) {
      build.onEnd(({ errors }) => {
        if (!errors.length) console.log('Bundled: ', OUTFILE);
      });
    }
  }]
};

(async () => {
  if (DEV) {
    const ctx = await esbuild.context(config);
    await ctx.watch();

    await ctx.serve({
      servedir: resolve('public'),
      port: PORT
    });

    console.log(`Listening at http://localhost:${PORT}...`);
    process.on('exit', ctx.dispose);
  } else {
    await esbuild.build(config);
  }
})();
