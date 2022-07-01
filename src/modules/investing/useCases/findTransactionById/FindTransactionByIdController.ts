import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindTransactionByIdUseCase } from './FindTransactionByIdUseCase'

class FindTransactionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const findTransactionByIdUseCase = container.resolve(FindTransactionByIdUseCase)

        const transaction = await findTransactionByIdUseCase.execute(id)

        return res.status(200).json(transaction)
    }
}

export { FindTransactionByIdController }