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

    imbuement: resolver(models.Imbuement),
  },

  Item: {
    attributes: resolver(models.Item.ItemAttribute),
    image({ image }) {
      return `data:image/png;base64,${image.toString('base64')}`
    },
  },

  ItemAttribute: {
    item: resolver(models.ItemAttribute.Item),
  },

  Imbuement: {
    materials: resolver(models.Imbuement.ImbuementMaterial),
    image({ image }) {
      return `data:image/png;base64,${image.toString('base64')}`
    },
  },

  ImbuementMaterial: {
    item: resolver(models.ImbuementMaterial.Item),
  },
}

resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY }

module.exports = resolvers
