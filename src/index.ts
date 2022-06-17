import 'reflect-metadata'
import 'dotenv/config'
import './database'
import express from 'express'
import { assetsRoutes } from './routes/assets.routes'
import { usersRoutes } from './routes/users.routes'
import { transactionsRoutes } from './routes/transactions.routes'

const app = express()

app.use(express.json())
app.use("/assets", assetsRoutes)
app.use("/routes", usersRoutes)
app.use("/transactions", transactionsRoutes)

app.listen(3000, () => console.log('Server started at port 3000'))

