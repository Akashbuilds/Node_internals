const fs = require("fs");
fs.readFile("./readme.md", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// process.nextTick(() => console.log("Printing next tick1"));

setTimeout(() => console.log("timer 1"), 100);
