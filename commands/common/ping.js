module.exports = async (client, message, opts) => {
  client.fns.message.send(message.channel)('pong')
}
