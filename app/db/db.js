const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.MYSQLDB_DATABASE,
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.MYSQLDB_DOCKER_PORT,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
