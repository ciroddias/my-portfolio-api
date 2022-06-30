import { DataSource } from "typeorm"
import { Asset } from "../modules/investing/entities/Asset"
import { Transaction } from "../modules/investing/entities/Transaction"
import { User } from "../modules/accounts/entities/User"
import { Earnings } from "../modules/investing/entities/Earnings"

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        Asset,
        Transaction,
        User,
        Earnings
    ],
    synchronize: true,
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { AppDataSource }