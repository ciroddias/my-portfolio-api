import { Request, Response } from "express";
import { container } from 'tsyringe'
import { ListTransactionsByAssetUseCase } from "./ListTransactionsByAssetUseCase";

class ListTransactionsByAssetController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { ticker } = req.params

        const listTransactionByAssetUseCase = container.resolve(ListTransactionsByAssetUseCase)

        const transactions = await listTransactionByAssetUseCase.execute(ticker)

        return res.status(200).json(transactions)
    }
}

export { ListTransactionsByAssetController }