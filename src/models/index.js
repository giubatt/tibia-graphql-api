const Item = require('./item')
const ItemAttribute = require('./item_attribute')
const RashidPosition = require('./rashid_position')
const Imbuement = require('./imbuement')
const ImbuementMaterial = require('./imbuementMaterial')

Item.ItemAttribute = Item.hasMany(ItemAttribute, {
  foreignKey: 'item_id',
  as: 'attributes',
})
ItemAttribute.Item = ItemAttribute.belongsTo(Item, { foreignKey: 'item_id' })

Imbuement.ImbuementMaterial = Imbuement.hasMany(ImbuementMaterial, {
  foreignKey: 'imbuement_id',
})

ImbuementMaterial.Item = ImbuementMaterial.belongsTo(Item, {
  targetKey: 'article_id',
  foreignKey: 'item_id',
})

module.exports = {
  Item,
  ItemAttribute,
  RashidPosition,
  Imbuement,
  ImbuementMaterial,
}
