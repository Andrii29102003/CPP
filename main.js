const http = require("http");

const server = http.createServer((incomingMessage, response) => {
  console.log("Начало обработки запроса");
  response.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
  response.end("3KN-20B/LR1");
});

server.listen(80, "127.0.0.1", () => {
  const info = server.address();
  console.log(`Сервер запущен ${info}`);
});
