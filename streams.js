const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigfile.ext", "Hello World");
};

createBigFile();
