import express from 'express';
import bodyParser from 'body-parser';
import db from './models/index.js';
import dotenv from 'dotenv';

dotenv.config()

(async () => {
    await db.initializeDatabase();

    await db.conn.sync({ force: false });
    console.log('Database synced successfully.');
})();
