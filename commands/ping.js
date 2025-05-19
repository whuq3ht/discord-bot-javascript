export default {
  name: "ping",
  description: "Botun gecikmesini gösterir",
  execute(message, args) {
    message.channel.send(`🏓 Pong! Gecikme: ${Date.now() - message.createdTimestamp}ms`);
  }
};
