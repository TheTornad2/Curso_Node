const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data, secondData) => {
  console.log("received");
  console.log(data);
  console.log(secondData);
});

//! Un evento es una señal de que algo ocurrió. Todos los nodos del DOM generan dichas señales (pero los eventos no están limitados sólo al DOM).

//! El On escucha determinados eventos, cuando pasa determinada cosa escucha ese evento.

customEmitter.emit("response", "hello World", "Welcome");
customEmitter.emit("response", "Bryant", "Corniel");
customEmitter.emit("response", 30, 15);
customEmitter.emit("response", [1, 2, 3], [3, 2, 1]);
customEmitter.emit("response", { name: "Bryant" });

//! Emit se utiliza para emitir un evento justo como si se estuviese dando un click, cada emit se representa como un click nuevo parecido a un EventListener normal del DOM
