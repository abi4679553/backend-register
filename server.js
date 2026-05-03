require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Listen = require('./config/listen');
const connectDB = require('./config/db');

const RegisterRouter = require('./router/RegisterRouter');


const app = express();

app.use(express.json())

// MongoDB connection
connectDB(mongoose); 


// Listen to the server
Listen(app);

app.use(RegisterRouter)
