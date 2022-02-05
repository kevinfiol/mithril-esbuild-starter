import { bundle, logSuccess } from './bundle.js';
import servor from 'servor';

const PORT = 5000;

// Start live-reload server
servor({
  root: 'dist',
  fallback: 'index.html',
  reload: true,
  port: PORT
}).then(() => {
  console.log(`Server started at localhost:${PORT}`);

  // Bundle & watch folder for changes
  return bundle({
    minify: false,
    sourcemap: true,
    watch: {
      onRebuild(error) {
        if (error) console.error(error);
        else logSuccess();
      }
    }
  });
})
.then(logSuccess)
.catch((e) => {
  console.error(e);
  process.exit(1);
});