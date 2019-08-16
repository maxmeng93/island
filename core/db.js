const Sequelize = require('sequelize');

const { dbName, host, port, user, password } = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: false,
  timezone: '+08:00',
  define: {
    // create_time update_time delete_time
    timestamps: true,
    paranoid: true,
    underscored: true
  }
});

sequelize.sync({
  force: true
});

module.exports = {
  sequelize
};
