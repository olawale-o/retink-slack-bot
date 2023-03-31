module.exports = async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.channel,
      text: `Good bye ! <@${event.user}> has left the team.`
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
};