const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === '/' || req.url === '/index.html') {
    try {
      const html = fs.readFileSync(path.join(__dirname, '../client/index.html'));
      res.writeHead(200, {'Content-Type': 'text/html'});
      return res.end(html);
    } catch (err) {
      res.writeHead(500);
      return res.end('Ошибка загрузки HTML');
    }
  }


  if (req.url === '/script.js') {
    try {
      const js = fs.readFileSync(path.join(__dirname, '../client/script.js'));
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      return res.end(js);
    } catch (err) {
      res.writeHead(500);
      return res.end('Ошибка загрузки JS');
    }
  }

  if (req.url === '/api/user-data') {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'data/user-data.json'));
      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(data);
    } catch (err) {
      res.writeHead(500);
      return res.end('Ошибка загрузки данных');
    }
  }


  if (req.url === '/api/media') {
    try {
      const gif = fs.readFileSync(path.join(__dirname, 'data/sample.gif'));
      res.writeHead(200, {'Content-Type': 'image/gif'});
      return res.end(gif, 'binary');
    } catch (err) {
      res.writeHead(500);
      return res.end('Ошибка загрузки медиа');
    }
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000, () => console.log('Сервер запущен: http://localhost:3000'));

