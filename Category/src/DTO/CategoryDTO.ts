import { ICategory } from "../MODELS/category"

export interface CategoryDTO{
    name: string
}

export interface ICategoryRepository{

   save(body:CategoryDTO): Promise<ICategory>;

   retrieveById(categoryId:string): Promise<ICategory>

}