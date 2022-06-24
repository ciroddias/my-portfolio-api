import {Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { ticker, quantity, price, date, user, asset } = req.body;

        const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

        await createTransactionUseCase.execute({ ticker, quantity, price, date, user, asset })

        return res.status(201).send()
    }
}

export { CreateTransactionController }