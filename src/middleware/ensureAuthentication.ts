import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, process.env.JSONWEBTOKEN_SECRET) as IPayload

        const usersRepository = new UsersRepository()
        const user = usersRepository.findById(user_id)

        if (!user) {
            throw new AppError("User not found!", 401)
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401)
    }
}