const Sequelize = require('sequelize')
const db = require('../config/db')

const Item = db.define(
  'items',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.TEXT,
    name: Sequelize.TEXT,
    client_id: Sequelize.INTEGER,
    stackable: Sequelize.INTEGER,
    value: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    weight: Sequelize.REAL,
    class: Sequelize.TEXT,
    type: Sequelize.TEXT,
    flavor_text: Sequelize.TEXT,
    version: Sequelize.TEXT,
    image: Sequelize.BLOB,
    last_edit: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  },
)

// Items.findOne({ where: { client_id: 3447 } }).then(console.log);

module.exports = Item
