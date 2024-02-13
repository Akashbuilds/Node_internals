## Difference between browser runtime and node runtime

-The following piece of code will give different output in browser runtime environment and nodejs runtime environment.
</br>
</br>

```const x = setTimeout(() => {
  console.log("Timer 1");
}, 100);

console.log(x);
```

this when executed on nodejs runtime gives a timer object , but when executed on chrome's console it gives a number as output.
