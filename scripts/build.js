import { bundle, logSuccess } from './bundle.js';

bundle({ minify: true })
  .then(logSuccess)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });