import express from 'express';
import router from "./router.js";
import errorHandler from "./middleware/error_handler.js";

const PORT = process.env.PORT || 5000;

export const setupServer = async (server) => {
    server.use(express.json());

    server.use('/ping', (req, res) => res.send("Pong!"))

    server.use('/api', router);

    server.use(errorHandler);
};

export const startServer = async (server) => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}