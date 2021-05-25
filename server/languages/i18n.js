const i18n = require('i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: `${__dirname}/translations/{{lng}}.json`
    },
    fallbackLng: 'en',
    preload: ['en', 'vn']
  });

module.exports = { i18n, i18nextMiddleware };
