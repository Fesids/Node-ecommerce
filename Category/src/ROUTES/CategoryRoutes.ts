import {Router} from "express";
import { TesteProxy, createCategoryService, getCategoryById } from "../SERVICES/CategoryService";
import {} from "express-http-proxy"
const app = Router();

app.post("/save", createCategoryService);
app.get("/detail/:categoryId", getCategoryById);
app.get("/testezin", TesteProxy);

export const categoryRoute = app;