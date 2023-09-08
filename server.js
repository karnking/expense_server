const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const midddleware = jsonserver.defaults()
const port = process.env.port || 8080;

server.use(midddleware)
server.use(router)

server.listen(port)