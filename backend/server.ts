import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router as route } from './api/index.ts';

dotenv.config();

const dbUserName = encodeURIComponent(process.env.DB_USER_NAME || '');
const dbUserPassword = encodeURIComponent(process.env.DB_USER_PASSWORD || '');

const uri = `mongodb+srv://${dbUserName}:${dbUserPassword}@dnd.48ijg6a.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  dbName: process.env.DB_NAME || '',
});
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log('Connected to DB!'));

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['POST', 'GET', 'DELETE', 'PATCH']
}));
app.use('/api', route);
app.listen(process.env.SERVER_PORT, () => console.log('Server Started'));
