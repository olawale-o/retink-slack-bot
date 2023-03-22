const config = require('./config');
const app = require('./src/app')(config);

app.message('hello', require('./src/messages/hello.message'));

app.action('button_click', require('./src/events/publishers/button_click.event'));

app.event('member_joined_channel', require('./src/events/subscribers/member_joined.event'));

app.event('member_left_channel', require('./src/events/subscribers/member_left.event'));

(async () => {
  // Start your app
  await app.start();

  console.log(`⚡️ Bolt app is running! on port ${config.get('port')}`);
})();

