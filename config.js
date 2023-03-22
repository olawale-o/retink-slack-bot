const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 5000,
    format: Number,
    env: 'PORT',
    arg: 'port',
  },
  slack: {
    signing_secret: {
      doc: 'Slack signing secret',
      format: String,
      default: '',
    },
    bot_token: {
      doc: 'Slack bot token',
      format: String,
      default: '',
    },
  },
});

const env = config.get('env');
config.loadFile(`./config/${env}.json`);

config.validate({ allowed: 'strict' });

module.exports = config;