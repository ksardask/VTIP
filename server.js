// server.js
const express = require('express');
const { processNames } = require('./logic');
const app = express();

app.use(express.json());

app.post('/process-names', (req, res) => {
    const { names } = req.body;
    const processedNames = processNames(names);
    res.json({ processedNames });
});

app.listen(3000, () => console.log('Server running on port 3000'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html'); // Убедитесь, что путь к файлу правильный
});
