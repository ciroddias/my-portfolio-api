import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, process.env.JSONWEBTOKEN_SECRET) as IPayload

        const usersRepository = new UsersRepository()
        const user = usersRepository.findById(user_id)

        if (!user) {
            throw new Error("User not found!")
        }

        next()
    } catch {
        throw new Error("Invalid token!")
    }
}