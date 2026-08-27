const pino = require('pino');

const logger = pino({
  level: 'info',

  formatters: {
    level(label) {
      return { level: label };
    }
  },

  base: {
    service: 'orders-api'
  },

  timestamp: () => `,"ts":"${new Date().toISOString()}"`
});

module.exports = logger;