import { Router } from "express";
import views_router from "./views/indexViews.js";

const mainRouter = Router()

mainRouter.use('/', views_router);

export default mainRouter