import express from 'express';
import db from './models/index.js';
import 'dotenv/config';
import { setupServer, startServer } from './transport/server.js'
import { dumpData } from './migrations/data_dump/default_data_dump.js';

// DB setup
(async () => {
    await db.initializeDatabase();

    await db.conn.sync({ force: false });
    console.log('Database synced successfully.');

    if (process.env.DUMP_DATA == 'true') {
        console.log('Dumping Data');
        dumpData('/usr/src/app/data_dump.csv');
    }
})();

const app = express();

setupServer(app);
startServer(app);