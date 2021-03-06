import 'reflect-metadata'
import 'dotenv/config'
import './database'
import "./shared/container"
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import { router } from './routes'
import { AppError } from './errors/AppError'

const app = express()

app.use(express.json())

app.use(router)

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({message: err.message})
    }

    return res.status(500).json({status: "error", message: `internal server error - ${err.message}`})
})

app.listen(3000, () => console.log('Server started at port 3000'))

