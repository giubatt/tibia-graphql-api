const Sequelize = require('sequelize')
const db = require('../config/db')

const RashidPosition = db.define(
  'rashid_position',
  {
    day: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    day_name: Sequelize.TEXT,
    city: Sequelize.TEXT,
    x: Sequelize.INTEGER,
    y: Sequelize.INTEGER,
    z: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  },
)

module.exports = RashidPosition
