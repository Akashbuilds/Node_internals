let a  = 10; // a let declared variable is assigned the value of 10

Promise.resolve().then(() => {
  console.log("printing from promise"); //we are creating a promise and registering that to the promise queue.
});

process.nextTick(() => {
  console.log("printing from nextTick"); //registering a callback to the next tick queue
});

setTimeout(() => console.log("printing from timer"), 0);
// timer of 0ms does not exist as we saw in the node's codebase , so timer is set to 1ms

console.log(a); // we print the value in variable a.