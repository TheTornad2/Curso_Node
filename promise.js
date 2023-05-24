const { error } = require("console");
const { promisify } = require("util");
const { readFile } = require("fs");

const readFilePromise = promisify(readFile);

//! Promisify es un módulo utilizado para hacer promesas de una forma mucho más rapida y facil para las personas.

//! Esta es una forma de hacer promesas de fora rápida

/* function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
} */

/* getText("./data/fourth.txt")
  .then((result) => console.log(result))
  .then(() => getText("./data/first.txt"))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */
//! .then es una función que dice algo así como, cuando todo esto termine bien voy a estar recibiendolo, parecido a la función catch que es para cuando todo va mal

async function read() {
  try {
    const result = await readFilePromise("./data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFilePromise("./data/second.txt", "utf-8");
    console.log(result2);
    const result3 = await readFilePromise("./data/third.txt", "utf-8");
    console.log(result3);
    const result4 = await readFilePromise("./data/fourth.txt", "utf-8");
    console.log(result4);
  } catch (err) {
    console.log(err);
  }
}

read();

//! la función ASYNC hace que todo lo que está delante de ella se vuelva código Asíncrono, aunque se escriba de la misma forma que el codigo síncrono, recuerda que el código asíncrono es aquel que puede ejecutarse sin interrumpir un proceso y permite ejcutarse varios procesos a la vez.
