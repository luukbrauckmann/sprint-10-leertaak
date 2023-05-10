import { fontawesome } from './helpers/fontawesome.js'
import { highlightjs } from './helpers/highlight.js'

import express from 'express'
import compression from 'compression'
import helmet from 'helmet'

import startPage from './routes/start.js'
import newChecklist from './routes/new-checklist.js'
import partners from './routes/partners.js'
import styleguide from './routes/styleguide.js'
import notFoundPage from './routes/not-found.js'

const { env } = process
const server = express()

const port = env.PORT || 3000

server.set('view engine', 'ejs')
server.set('views', 'views')
server.set('trust proxy', true)

server.use(compression())
server.use(helmet())
server.use(express.static('public'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

fontawesome(server)
highlightjs(server)

/* Routes */
server.get('/', startPage)
server.get('/new-checklist', newChecklist)
server.get('/partners', partners)
server.get('/styleguide', styleguide)
server.get('/styleguide/**', styleguide)
server.get('**', notFoundPage)

server.listen(port, () => {
	console.log(`App is served on port http://localhost:${port}/`)
})

