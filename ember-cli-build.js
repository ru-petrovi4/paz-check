'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/@fontsource'
      ]
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  //  app.import('node_modules/@fontsource/roboto/cyrillic-700.css', {
  //     destDir: 'assets',
  //     outputFile: 'cyrillic-700.css',
  //   });
  app.import(
    'node_modules/@fontsource/roboto/files/roboto-cyrillic-700-normal.woff2',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/roboto/files/roboto-cyrillic-700-normal.woff',
    {
      destDir: 'assets/files',
    }
  );
  // Open-sans
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-400-normal.woff2',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-400-normal.woff',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-600-normal.woff2',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-600-normal.woff',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-700-normal.woff2',
    {
      destDir: 'assets/files',
    }
  );
  app.import(
    'node_modules/@fontsource/open-sans/files/open-sans-cyrillic-700-normal.woff',
    {
      destDir: 'assets/files',
    }
  );

  return app.toTree();
};
