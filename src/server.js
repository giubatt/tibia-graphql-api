const { GraphQLServer } = require('graphql-yoga')
const { createContext, EXPECTED_OPTIONS_KEY } = require('dataloader-sequelize')
const sequelize = require('./config/db')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context(req) {
    // For each request, create a DataLoader context for Sequelize to use
    const dataloaderContext = createContext(sequelize)

    // Using the same EXPECTED_OPTIONS_KEY, store the DataLoader context
    // in the global request context
    return {
      [EXPECTED_OPTIONS_KEY]: dataloaderContext,
    }
  },
})

module.exports = server
