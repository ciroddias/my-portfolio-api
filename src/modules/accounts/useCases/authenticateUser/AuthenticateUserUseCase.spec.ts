import 'dotenv/config'
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { AppError } from "../../../../errors/AppError"

let authenticateUserUseCase: AuthenticateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            name: "test",
            email: "test@email.com",
            password: "test123",
        }

        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token")
    })

    it("should not be able to authenticate a non-existent user", () => {
        expect(async() => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "123"
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "test",
                email: "test@email.com",
                password: "test123",
            }

            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "wrongPassword"
            })

        }).rejects.toBeInstanceOf(AppError)
    })
})