import config from './config.js';
import express from 'express';
import mongoose from 'mongoose';
import routes from './REST/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.info('Mongodb connected');
    })
    .catch(error => console.info(error));

routes(app);

app.listen(config.port, function () {
    console.info(`Server is running at ${config.port}`)
});