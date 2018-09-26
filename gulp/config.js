var util = require('gulp-util');

var srcPath = 'app';
var destPath = 'build';

var production = util.env.production || util.env.prod || false;

var config = {
  env: 'development',
  production: production,

  setEnv: function (env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv: function () {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  }

}

config.setEnv(production ? 'production' : 'development');

module.exports = config;