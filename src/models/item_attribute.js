const Sequelize = require('sequelize')
const db = require('../config/db')

const ItemAttribute = db.define(
  'item_attribute',
  {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    attribute: Sequelize.TEXT,
    value: Sequelize.TEXT,
  },
  {
    timestamps: false,
    tableName: 'item_attribute',
  },
)

// ItemAttributes.findAll({ where: { item_id: 18554 } }).then(data =>
//   console.log(data.map(JSON.stringify)),
// )

module.exports = ItemAttribute
