const Sequelize = require('sequelize')
const db = require('../config/db')

const ImbuementMaterial = db.define(
  'imbuement_material',
  {
    imbuement_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: false,
    },
    item_id: Sequelize.INTEGER,
    amount: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'imbuement_material',
  },
)

module.exports = ImbuementMaterial
