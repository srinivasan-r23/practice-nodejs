const fs = require("fs");

setImmediate(() => console.log("SetImmediate")); // A

setTimeout(() => {
  console.log("Timeout"); //B
  setTimeout(() => {
    console.log("inner timeout"); //C
  }, 0);
}, 0);

Promise.resolve("Promise").then(() => {
  console.log("promise"); //D
  Promise.resolve("Promise1").then(
    () => setTimeout(() => console.log("Promise1")), //E
    0
  );
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("File");
});

process.nextTick(() => {
  process.nextTick(() => {
    setTimeout(() => console.log("inner nexttick"), 0); //G
  });
  console.log("nextTick"); //F
});
console.log("End of the file");

//nexttick
//
