console.log("start");

setTimeout(() => console.log("timer 1"), 0);

Promise.resolve().then(() => console.log("printing from promise 1"));

setTimeout(() => console.log("timer 2"), 0);

process.nextTick(() => console.log("printing from next tick1"));

setTimeout(() => console.log("timer 3"), 0);

for (let i = 0; i < 100000000; i++) {}

console.log("end");
