const Sequelize = require('sequelize');

const sequelize = new Sequelize('tibia_database', null, null, {
  dialect: 'sqlite',
  storage: './tibia_database.db',
});

module.exports = sequelize;
