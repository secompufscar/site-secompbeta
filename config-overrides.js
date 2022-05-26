/* biblioteca de terceiros para facilitar imports */

const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@layouts': 'src/layouts',
    '@pages': 'src/pages',
    '@utils': 'src/utils'
  })(config);

  return config;
};