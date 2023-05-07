const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Bienvenido al servidor");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Acerca De");
    return response.end();
  }

  if (request.url === "/contact") {
    response.write("Puedes contactarnos acá");
    return response.end();
  }

  if (request.url === "/Number") {
    response.write("Numero");
    return response.end();
  }

  response.write(`
    <h1>Not Found</h1>
    <p>Esta página no se encontró</p>
    <a href="/">Volver a la página principal</a>
  `);
  response.end();
});

server.listen(3000);

console.log("Servidor Escuchando en el puerto 3000");
