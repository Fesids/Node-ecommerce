//import Tutorial, { IProduct } from "../MODELS/Product"

import { IProduct } from "../MODELS/Product";


export interface ProductDTO{
    name: string,
    description: string,
    productImage: string,
    price: number,
    category: number

}


export interface IProductRepository{

    save(body: ProductDTO): Promise<String>;

    retrieveById(id: number): Promise<IProduct>;
    //saveTeste(tutorial: Tutorial): Promise<Tutorial>

}





