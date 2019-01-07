const path = require('path')
const { importSchema } = require('graphql-import')

module.exports = importSchema(path.resolve(__dirname, 'schema.graphql'))
