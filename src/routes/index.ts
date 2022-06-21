import { Router } from 'express';
import { assetsRoutes } from './assets.routes';
import { usersRoutes } from './users.routes';
import { transactionsRoutes } from './transactions.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router()

router.use("/assets", assetsRoutes)
router.use("/users", usersRoutes)
router.use("/transactions", transactionsRoutes)
router.use(authenticateRoutes)

export { router }
