import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import Compound from './compound.js';

dotenv.config();

const dbconn = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false,
        retry: {
            max: 5,
            match: [
              /ECONNREFUSED/,
              /ETIMEDOUT/
            ],
            timeout: 5000,
          },
    }
)

const db = {};

db.Sequelize = Sequelize
db.conn = dbconn

db.Compound = Compound(dbconn)

db.initializeDatabase = async () => {
    try {
        await dbconn.authenticate();
        console.log('Connection established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error.message);
    }
};

export default db;