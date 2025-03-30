const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { processNames, saveToFile, readFromFile } = require('./logic');

// Настройка статической папки
const app = express();
app.use(express.static(path.join(__dirname, 'html')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(bodyParser.json());

// Обработать массив
app.post('/process-names', (req, res) => {
    const names = req.body.names;
    if (!Array.isArray(names)) {
        return res.status(400).send('Invalid input');
    }

    saveToFile('original.json', names);
    const processedNames = processNames(names);
    saveToFile('processed.json', processedNames);

    res.send({ success: true });
});

// Получить массивы
app.get('/get-names', (req, res) => {
    const original = readFromFile('original.json');
    const processed = readFromFile('processed.json');
    res.send({ original, processed });
});

// Обработчик корневого маршрута (index.html)
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Устанавливаем заголовок
    res.sendFile(__dirname + '/html/index.html'); // Возвращаем HTML-файл главной страницы
});

// Обработчик для второй страницы (result.html)
app.get('/result', (req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Устанавливаем заголовок
    res.sendFile(__dirname + '/html/result.html'); // Возвращаем HTML-файл второй страницы
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
