import { Router } from 'express';
import { assetsRoutes } from './assets.routes';
import { usersRoutes } from './users.routes';
import { transactionsRoutes } from './transactions.routes';

const router = Router()

router.use("/assets", assetsRoutes)
router.use("/routes", usersRoutes)
router.use("/transactions", transactionsRoutes)

export { router }