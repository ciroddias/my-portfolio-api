import 'reflect-metadata'
import express from 'express'

import './database/migrations/connect'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3001, () => console.log('Server started at port 3000'))

