import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAssetsUseCase } from './ListAssetsUseCase'

class ListAssetsController {
    async handle(req: Request, res: Response){

        const listAssetsUseCase = container.resolve(ListAssetsUseCase)

        const users = await listAssetsUseCase.execute()

        return res.status(200).json(users)
    }
}

export { ListAssetsController }