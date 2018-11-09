const { EXPECTED_OPTIONS_KEY } = require('dataloader-sequelize')
const { resolver } = require('graphql-sequelize')

const models = require('../models')

const resolvers = {
  Query: {
    item: resolver(models.Item),
    itemSearch: resolver(models.Item, {
      before: (options, args) => {
        options.where = {
          name: {
            $like: `%${args.name}%`,
          },
        }
        return options
      },
    }),
    items: resolver(models.Item),
    itemByClientId: resolver(models.Item),
    rashidPosition: resolver(models.RashidPosition),
    rashidPositions: resolver(models.RashidPosition),
  },
  Item: {
    attributes: resolver(models.Item.ItemAttribute),
  },
  ItemAttribute: {
    item: resolver(models.ItemAttribute.Item),
  },
}

resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY }

module.exports = resolvers
