const Sequelize = require('sequelize')
const db = require('../config/db')

const Item = db.define(
  'item',
  {
    article_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.TEXT,
    name: Sequelize.TEXT,
    article: Sequelize.TEXT,
    stackable: Sequelize.BOOLEAN,
    value_sell: Sequelize.INTEGER,
    value_buy: Sequelize.INTEGER,
    weight: Sequelize.REAL,
    class: Sequelize.TEXT,
    type: Sequelize.TEXT,
    flavor_text: Sequelize.TEXT,
    version: Sequelize.TEXT,
    client_id: Sequelize.INTEGER,
    image: Sequelize.BLOB,
    timestamp: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'item',
  },
)

module.exports = Item
