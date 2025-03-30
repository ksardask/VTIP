// logic.js
const fs = require('fs');
const path = require('path');

function processNames(names) {
    // Преобразуем первую букву в заглавную и сортируем
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1)).sort();
}

function saveToFile(fileName, data) {
    const filePath = path.join(__dirname, 'data', fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readFromFile(fileName) {
    const filePath = path.join(__dirname, 'data', fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = { processNames, saveToFile, readFromFile };
