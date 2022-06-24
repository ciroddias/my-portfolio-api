import { Request, Response } from "express";
import { container } from 'tsyringe'
import { ListTransactionsUseCase } from './ListTransactionsUseCase'

class ListTransactionsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const listTransactionsUseCase = container.resolve(ListTransactionsUseCase)

        const transactions = await listTransactionsUseCase.execute()

        return res.status(200).json(transactions)
    }
}

export { ListTransactionsController }