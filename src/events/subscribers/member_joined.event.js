module.exports = async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.channel,
      text: `Welcome to the team, <@${event.user}>! 🎉 You can introduce yourself in this channel.`
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
};
  