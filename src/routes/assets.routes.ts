import { Router } from "express";

import { CreateAssetController } from "../modules/investing/useCases/createAsset/CreateAssetController"
import { ListAssetsController } from "../modules/investing/useCases/listAssets/ListAssetsController"

const createAssetController = new CreateAssetController()
const listAssetsController = new ListAssetsController()

const assetsRoutes = Router();

assetsRoutes.post("/", createAssetController.handle)
assetsRoutes.get("/", listAssetsController.handle)

export { assetsRoutes }