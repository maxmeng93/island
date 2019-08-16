const { Sequelize, Model } = require('sequelize');

const { sequelize } = require('../../core/db');

class User extends Model {

}

User.init({
  // 主键 关系型数据库
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  }
}, {sequelize});
