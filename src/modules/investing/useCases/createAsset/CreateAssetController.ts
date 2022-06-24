import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateAssetUseCase } from './CreateAssetUseCase'

class CreateAssetController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { quantity, sector, ticker, userId, value } = req.body;

        const createAssetUseCase = container.resolve(CreateAssetUseCase)

        await createAssetUseCase.execute({ quantity, sector, ticker, userId, value })

        return res.status(201).send()
    }
}

export { CreateAssetController }