module.exports = async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.channel,
      text: `How may i help you? <@${event.user}>`
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
};