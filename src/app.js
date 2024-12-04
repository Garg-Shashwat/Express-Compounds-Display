import express from 'express';
import db from './models/index.js';
import 'dotenv/config';
import { setupServer, startServer } from './transport/server.js'

// DB setup
(async () => {
    await db.initializeDatabase();

    await db.conn.sync({ force: false });
    console.log('Database synced successfully.');
})();

const app = express();

setupServer(app);
startServer(app);