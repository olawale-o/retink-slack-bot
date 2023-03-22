const { App } = require('@slack/bolt');

module.exports = (config) => {
  const app = new App({
    token: config.get('slack.bot_token'),
    signingSecret: config.get('slack.signing_secret'),
    socketMode: config.get('env') === 'development' || config.get('env') === 'test',
    appToken: config.get('slack.app_token'),
    port: config.get('port'),
  });
  return app;
};