import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create user", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    })
    
    it("Should be able to create a new user", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "test123",
        }
        await createUserUseCase.execute({
            name: user.name,
            email: user.email,
            password: user.password
        })

        const createdUser = await userRepositoryInMemory.findByEmail(user.email)

        expect(createdUser).toHaveProperty("id")
    })

    it("Should not be able to create a new user with the same email", async () => {
        expect(async () => {
            const user = {
                name: "User Test",
                email: "user@test.com",
                password: "test123",
            }
            await createUserUseCase.execute({
                name: user.name,
                email: user.email,
                password: user.password
            })
    
            await createUserUseCase.execute({
                name: user.name,
                email: user.email,
                password: user.password
            })      
        }).rejects.toBeInstanceOf(AppError)

    })
})