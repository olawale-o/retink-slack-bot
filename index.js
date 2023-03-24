const moment = require('moment');
const { WebClient, LogLevel } = require("@slack/web-api");
const config = require('./config');
const app = require('./src/app')(config);
const client = new WebClient(config.get('slack.bot_token'), {
  logLevel: LogLevel.DEBUG,
});


app.message('hello', require('./src/messages/hello.message'));

app.action('button_click', require('./src/events/publishers/button_click.event'));

app.event('member_joined_channel', require('./src/events/subscribers/member_joined.event'));

app.event('member_left_channel', require('./src/events/subscribers/member_left.event'));


(async () => {
  await app.start();
  require('./src/messages/post.message')({
    client,
    postAt: moment().add(5, 'minutes').unix(),
    channelId: 'C04AQGNQE4S',
    text: "Good day everyone @<channel>; please remember to send in your updates for the week. Thank you",
  });
  console.log(`⚡️ Bolt app is running! on port ${config.get('port')}`);
})();

