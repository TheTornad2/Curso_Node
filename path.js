const path = require("path");

const filePath = path.join("/public", "dist", "styles", "main.css");
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.dirname(filePath));
console.log(path.resolve("dist"));
//! estos se utilizan para la navegación de archivos
