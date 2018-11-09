const Sequelize = require('sequelize')
const db = require('../config/db')

const ItemAttributes = db.define(
  'items_attributes',
  {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    // item_id: Sequelize.INTEGER,
    attribute: Sequelize.TEXT,
    value: Sequelize.TEXT,
  },
  {
    timestamps: false,
  },
)

// ItemAttributes.findAll({ where: { item_id: 18554 } }).then(data =>
//   console.log(data.map(JSON.stringify)),
// )

module.exports = ItemAttributes
