import { server, port } from './config/server'
import { json } from 'express'
import * as routers from './routes/routesModule'

server.use(json())

Object.values(routers).forEach(router => server.use(router))

server.listen(port, () => console.log(`Server is running on port:${port}`))

