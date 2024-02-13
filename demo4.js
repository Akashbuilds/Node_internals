const x = setTimeout(() => {
  console.log("Timer 1");
}, 100);

console.log(x);

//while using nodejs runtime , the output of this piece of code is a timer object .
// Timeout {
//     _idleTimeout: 100,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 28,
//     _onTimeout: [Function (anonymous)],
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 2,
//     [Symbol(triggerId)]: 1
//   }
//   Timer 1