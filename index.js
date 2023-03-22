const config = require('./config');
const app = require('./src/app')(config);

app.message('hello', require('./src/messages/hello.message'));

app.action('button_click', require('./src/events/button_click.event'));

(async () => {
  // Start your app
  await app.start();

  console.log(`⚡️ Bolt app is running! on port ${config.get('port')}`);
})();

