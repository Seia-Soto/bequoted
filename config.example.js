const { name, version } = require('./package')

module.exports = {
  providers: {
    _throwException: 0,
    Discord: {
      token: '',
      options: {
        agent: `Seia-Soto/${name} v${version} (https://github.com/Seia-Soto)`,
        allowedMentions: {
          everyone: false,
          roles: false,
          users: true
        },
        autoreconnect: true,
        compress: true,
        connectionTimeout: 15 * 1000,
        defaultImageFormat: 'jpg',
        defaultImageSize: 16 * 16,
        disableEvents: [
          'CHANNEL_CREATE',
          'CHANNEL_DELETE',
          'CHANNEL_UPDATE',
          'GUILD_BAN_ADD',
          'GUILD_BAN_REMOVE',
          'GUILD_CREATE',
          'GUILD_DELETE',
          'GUILD_MEMBER_ADD',
          'GUILD_MEMBER_REMOVE',
          'GUILD_MEMBER_UPDATE',
          'GUILD_ROLE_CREATE',
          'GUILD_ROLE_DELETE',
          'GUILD_ROLE_UPDATE',
          'GUILD_UPDATE',
          'MESSAGE_DELETE',
          'MESSAGE_DELETE_BULK',
          'PRESENCE_UPDATE',
          'TYPING_START',
          'USER_UPDATE'
        ],
        getAllUsers: false,
        guildCreateTimeout: 5 * 1000,
        guildSubscriptions: false,
        largeThreshold: 25,
        latencyThreshold: 10 * 1000,
        maxResumeAttempts: 5,
        maxShards: 'auto',
        messageLimit: 10,
        opusOnly: true,
        requestTimeout: 5 * 1000,
        reconnectDelay: 2 * 1000,
        restMode: false,
        seedVoiceConnections: false
      }
    }
  }
}
