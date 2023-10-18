import { DoubleDataType } from "sequelize";
import {Model, Table, Column, DataType} from "sequelize-typescript";
import {Pool} from "pg"

export const ProductPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "node_product_db",
    password: "67890000",
    port: 5432
})



export interface IProduct{
    id: number,
    name: string,
    description: string,
    productImage: string,
    price: number,
    category: number

}



/*@Table({
  tableName: "tutorials",
})
export default class Tutorial extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "title"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "published"
  })
  published?: boolean;
}*/
/*@Table({
    tableName: "products",
})
export class Product extends Model{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id?: number;
    
    @Column({
        type: DataType.STRING(255),
        field: "name"
    })
    name!: string;

    @Column({
        type: DataType.STRING(1300),
        field: "description"
    })
    description!: string;

    @Column({
        type: DataType.NUMBER,
        field: "price"
    })
    price!: number

    @Column({
        type: DataType.NUMBER,
        field: "category"
    })
    category!: number 

    @Column({
        type: DataType.STRING,
        field: "productImage"
    })
    productImage!: string

}*/


