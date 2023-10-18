import {Sequelize} from "sequelize-typescript";
import {config, dialect} from "./db.config";
//import Tutorial from "../MODELS/Product";
//import { Product } from "../MODELS/Product";

/*class Database{

    public sequilize: Sequelize | undefined;

    constructor(){
        this.connectToDatabase()
    }

    private async connectToDatabase(){
        this.sequilize = new Sequelize({
            database: config.DATABASE,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [Tutorial]
        });

        await this.sequilize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully");
        })
        .catch((err)=>{
            console.log("Unable to connect server");
        })



    }

}

export default Database;*/