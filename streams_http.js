const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });

  //! El método craeteReadStream se utiliza para leer archivos grandes, se utiliza el enconding: utf-8 para poder convertir el resultado a strings y el fileStream.on es el método de escucha pasándole el parámetro Data y haciendo una función que lea los chunks (Cargue el archivo)

  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log(`server on port ${3000}`);
