const typeDefs = `
  type Query {
    item(id: ID!): Item
    itemSearch(name: String): [Item]
    itemByClientId(client_id: Int!): Item
    items: [Item]
    rashidPosition(day: ID!): RashidPosition
    rashidPositions: [RashidPosition]
  }

  type Item {
    id: ID!
    title: String
    name: String
    client_id: Int
    stackable: Int
    value: Int
    price: Int
    weight: Float
    class: String
    type: String
    flavor_text: String
    version: String
    attributes: [ItemAttribute]
    attack: String
  }

  type ItemAttribute {
    item_id: ID!
    item: Item
    attribute: String
    value: String
  }

  type RashidPosition {
    day: ID!
    day_name: String
    city: String
    x: Int
    y: Int
    z: Int
  }
`

module.exports = typeDefs
