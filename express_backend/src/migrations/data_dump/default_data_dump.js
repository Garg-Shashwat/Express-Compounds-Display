import mysql from 'mysql2';
import fs from 'fs';
import csv from 'csv-parser';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

export const dumpData = async (filePath) => {
    const connection = mysql.createConnection(dbConfig);
    const records = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            records.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed.');

            const insertQuery = `
                INSERT INTO Compounds (name, description, image, imageAttribution, createdAt, updatedAt) 
                VALUES ?`;

            const values = records.map(record => [
                record.name, 
                record.description, 
                record.image, 
                record.imageAttribution,
                new Date(),
                new Date(),
            ]);

            connection.query(insertQuery, [values], (err, result) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return;
                }
                console.log('Data dumped successfully:', result.affectedRows);
            });

            connection.end();
        });
};
