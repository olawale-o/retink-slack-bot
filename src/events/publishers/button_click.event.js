module.exports = async ({ body, ack, say }) => {
  console.log({
    body,
    user: body.user,
  })
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
};
