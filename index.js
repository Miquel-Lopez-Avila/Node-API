import express from 'express';
import dotenv from 'dotenv';
import Middlewares from './src/application/middleware/index.js';
import Routes from './src/domain/entities/index.js';
import Connect from './src/common/adapters/database/index.js';
import Server from './src/application/server/index.js';

dotenv.config();

const app = express();

Connect().then(() => {
    Middlewares(app);
    Routes(app);
    Server(app);
});

