const server = require('./src/server')

server.start(() => {
  console.log('Server is running on localhost:4000')
})
