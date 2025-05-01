const express = require('express');
const mongoose = require('mongoose');
const flashRoutes = require('./routes/flashRoutes');
const app = express();


mongoose.connect('mongodb://localhost:27017/flashDB', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.json());


app.use('/api/flash', flashRoutes);


app.listen(3000, () => console.log('Сервер запущен на порту 3000'));