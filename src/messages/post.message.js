module.exports = async function (channelDetails) {
  const { client, postAt, channelId, text } = channelDetails;
  try {
    const result = await client.chat.scheduleMessage({
      channel: channelId,
      text,
      post_at: postAt,
    }); 
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
};