import { IProductRepository, ProductDTO } from "../DTO/ProductDTO";
import { IProduct, ProductPool } from "../MODELS/Product";
//import Tutorial, { IProduct, ProductPool } from "../MODELS/Product";

export class ProductRepository implements IProductRepository{

    async retrieveById(id: number): Promise<IProduct> {
        const q = "select * from products where id = $1";

        const product = await ProductPool.query(q, [id]);

        if (!product){
            throw new Error("No product with the provided ID found")
        }

        //return product.rows;
        const {rows} = product
        //console.log(product);
        rows[0].id
        console.log(rows[0].id)
        const prodBody = {
            id: rows[0].id,
            name: rows[0].name,
            description: rows[0].description,
            productImage: rows[0].productimage,
            price: rows[0].price,
            category: rows[0].category
        }
       
        return prodBody;
    }
    /*async saveTeste(tutorial: Tutorial): Promise<Tutorial> {
        try {
            return  await Tutorial.create({
              title: tutorial.title,
              description: tutorial.description,
              published: tutorial.published
            });
          } catch (err) {
            throw new Error("Failed to create Tutorial!");
          }
        }*/

    


    


    async save(body: ProductDTO): Promise<String> {

        const {name, description, productImage, price, category}= body;

        await ProductPool.query("INSERT INTO products(name, description, productimage, price, category) VALUES ($1, $2, $3, $4, $5)", [name, description, productImage, price, category]);
        return "Product created successfully";

        //await ProductPool.query("INSERT INTO ")

        /*const newProduct =  await Product.create({
            name: body.name,
            description: body.description,
            productImage: body.productImage,
            price: body.price,
            category: body.category
        })*/

        //if(newProduct.name && body.description && newProduct.id)

        /*return {
            id: newProduct.id,
            name: newProduct.name,
            description: newProduct.description,
            productImage: newProduct.productImage,
            price: newProduct.price,
            category: newProduct.category
        }*/
        //return "created success";

       
        /*try{

            const newProduct =  await Product.create({
                name: body.name,
                description: body.description,
                productImage: body.productImage,
                price: body.price,
                category: body.category
            })

            return {
                id: newProduct.id,
                name: newProduct.name,
                description: newProduct.description,
                productImage: newProduct.productImage,
                price: newProduct.price,
                category: newProduct.category
            }


        }catch(err){
            throw new Error("Failed to create product")
        }*/

    }
    
}