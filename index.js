const config = require('./config');
const app = require('./src/app')(config);

app.message('hello', async ({ message, say }) => {
  console.log({
    message,
  });
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: 'button_click',
        },
      }
    ],
    text: `Hey there <@${message.user}>!`,
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  console.log({
    body,
    user: body.user,
  })
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  // Start your app
  await app.start();

  console.log(`⚡️ Bolt app is running! on port ${config.get('port')}`);
})();

