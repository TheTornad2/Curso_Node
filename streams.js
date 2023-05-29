const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "Hello World".repeat(100000));
};

createBigFile();

// const { createReadStream } = require("fs");

// const stream = createReadStream("./data/bigfile.txt", "utf-8");

// //!

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("Ya terminé de leer el archivo");
// });

// stream.on("error", (error) => {
//   console.log(error);
// });
