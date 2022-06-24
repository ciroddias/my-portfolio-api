import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase'

class FindUserByEmailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.params;
        
        const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase)

        const user = await findUserByEmailUseCase.execute(email)
        
        return res.status(200).json(user)
    }
}

export { FindUserByEmailController }