const Sequelize = require('sequelize')
const db = require('../config/db')

const Imbuement = db.define(
  'imbuement',
  {
    article_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.TEXT,
    name: Sequelize.TEXT,
    tier: Sequelize.TEXT,
    type: Sequelize.TEXT,
    effect: Sequelize.TEXT,

    version: Sequelize.TEXT,
    image: Sequelize.BLOB,
    timestamp: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'imbuement',
  },
)

module.exports = Imbuement
