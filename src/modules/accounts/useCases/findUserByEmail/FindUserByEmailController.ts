import { Request, Response } from 'express'
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase'

class FindUserByEmailController {
    constructor(private findUserByEmailUseCase: FindUserByEmailUseCase){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.params;
        
        const user = await this.findUserByEmailUseCase.execute(email)
        
        return res.status(200).json(user)
    }
}

export { FindUserByEmailController }