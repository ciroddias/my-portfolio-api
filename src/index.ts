import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'

import './database'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Server started at port 3000'))

