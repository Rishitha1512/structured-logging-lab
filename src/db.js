const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'ordersdb',
  port: process.env.DB_PORT || 5432,
});

const connectDb = async (log) => {

  log.info('db.connecting');

  try {

    await pool.query('SELECT NOW()');

    log.info('db.connected');

  } catch (err) {

    log.error({ err }, 'db.connection_failed');
    log.warn('db.retry');

  }

};

const queryDb = async (text, params, log) => {

  log.info('db.query');

  const res = await pool.query(text, params);

  log.info('db.query.finished');

  return res;

};
module.exports = { connectDb, queryDb, pool };
