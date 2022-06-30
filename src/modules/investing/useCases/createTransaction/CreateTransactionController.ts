import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { type, quantity, price, date, user, ticker } = req.body;

        const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

        await createTransactionUseCase.execute({ type, quantity, price, date, user, ticker })

        return res.status(201).send()
    }
}

export { CreateTransactionController }