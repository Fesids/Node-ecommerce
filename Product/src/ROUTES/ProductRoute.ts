import {Router} from "express"
import { createProductService, getProductById } from "../SERVICE/ProductService";
import { uploadFile } from "../UPLOADCONFIG/Upload";

const routes = Router();


routes.post("", uploadFile.single("productImage"),createProductService);
routes.get("/:id", getProductById);

export const productRoutes = routes;