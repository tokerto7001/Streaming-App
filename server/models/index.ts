import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../configurations";

const db = new Sequelize(
    {
        dialect: 'postgres',
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: false,
        define: {
            underscored: true, // use snake_case for all fields in the database
            // freezeTableName: true, //stop the auto-pluralization performed by Sequelize
            timestamps: false // don't add timestamps to tables by default (createdAt, updatedAt)
        }
    }
)
export default db