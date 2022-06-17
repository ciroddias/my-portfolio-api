import {Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {
    constructor(private createTransactionUseCase: CreateTransactionUseCase){}

    handle(req: Request, res: Response): Response {
        const { ticker, quantity, price, date, user, asset } = req.body;

        this.createTransactionUseCase.execute({ ticker, quantity, price, date, user, asset })

        return res.status(201)
    }
}

export { CreateTransactionController }