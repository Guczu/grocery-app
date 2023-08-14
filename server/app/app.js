import config from './config.js';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(config.databaseUrl)
    .then(() => {
        console.info('Mongodb connected');
    })
    .catch(error => console.info(error));

app.listen(config.port, function () {
    console.info(`Server is running at ${config.port}`)
});