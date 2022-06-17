import { TransactionsRepository } from "../../repositories/implementations/TransactionsRepository";
import { CreateTransactionController } from "./CreateTransactionController";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

const transactionsRepository = TransactionsRepository.getInstance()

const createTransactionsUseCase = new CreateTransactionUseCase(transactionsRepository);

const createTransactionsController = new CreateTransactionController(createTransactionsUseCase)

export { createTransactionsController }