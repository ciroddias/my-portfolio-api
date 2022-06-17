import 'reflect-metadata'
import 'dotenv/config'
import './database'
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(3000, () => console.log('Server started at port 3000'))

