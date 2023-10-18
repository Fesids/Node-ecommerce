import { Category } from "../DATABASE/SCHEMAS/CategorySchema";
import { CategoryDTO, ICategoryRepository } from "../DTO/CategoryDTO";
import { ICategory } from "../MODELS/category";

export class CategoryRepository implements ICategoryRepository{

    async retrieveById(categoryId: string): Promise<ICategory> {
        const category = await Category.findById(categoryId);

        if(!category){
            throw new Error(`category with id ${categoryId} doesn't exist`);
        }

        const {_id, name, available} = category;

        return {id:_id, name, available}
        
    }


    async save(body: CategoryDTO): 
    Promise<ICategory> {
        const categoryExists = await Category.findOne({name: body.name});

        if(categoryExists){
            throw new Error("A category with that name already exist");
        }

        const saveBody = {
            name: body.name,

        }

        const {_id} = await Category.create(saveBody);

        const newCategory = await Category.findById(_id);

        if(!newCategory){
          throw new Error("Something went wrong trying to create category");

        }

        return{
            id: newCategory._id,
            name: newCategory.name,
            available: newCategory.available
        }
    }

   
    
}