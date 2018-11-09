const Item = require('./item')
const ItemAttribute = require('./item_attribute')
const RashidPosition = require('./rashid_position')

Item.ItemAttribute = Item.hasMany(ItemAttribute, {
  foreignKey: 'item_id',
  as: 'attributes',
})
ItemAttribute.Item = ItemAttribute.belongsTo(Item, { foreignKey: 'item_id' })

module.exports = {
  Item,
  ItemAttribute,
  RashidPosition,
}
