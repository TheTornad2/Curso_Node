const fs = require("fs"); //! se utiliza para poder crear archivos, leerlos, alterarlos o eliminarlos.

// const first = fs.readFileSync("./data/first.txt", "utf-8"); //! Aquí lleva utf-8 para que sea string
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);f
// console.log(second.toString()); //! En esta forma podemos hacer que las cosas se vuelvan stings

// const title = "Este es un archivo nuevo";

// fs.writeFileSync("./data/fourth.txt", title, {
//   flag: "a",
// });
// //! esto se utiliza para poder crear un archivo en una carpeta y luego de la coma es el contenido que tendrá cuando se cree todo

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }

    console.log(data);

    fs.writeFile(
      "./data/newFile.txt",
      "archivo creado desde fs",
      (err, data) => {
        console.log(err);
        console.log(data);
      }
    );
  });
});
