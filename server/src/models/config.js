/* eslint-disable no-unused-vars */
require('dotenv').config();

const env = process.env;

const development = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  dialect: 'mysql',
  port: env.MYSQL_PORT,
  dialectOptions: {
    charset: 'utf8mb4_general_ci',
    dataString: true,
    typeCast: true,
    timezone: '-09:00',
  },
  define: {
    timestamps: true,
    supportBigNumbers: true,
  },
};

const production = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  dialect: 'mysql',
  port: env.MYSQL_PORT,
  dialectOptions: {
    timezone: 'Asia/Seoul',
  },
};

const test = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_TEST_DATABASE,
  host: env.MYSQL_HOST,
  dialect: 'mysql',
  port: env.MYSQL_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    collation: 'utf8mb4_general_ci',
    dataString: true,
    typeCast: true,
    useUTC: false,
  },
  define: {
    supportBigNumbers: true,
  },
};

module.exports = { development, production, test };
