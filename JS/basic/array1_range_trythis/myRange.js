
const range = (start, end, step) => {
  const ret = [];

  if(end === undefined) {
    end = start;
    start = 1;
  }
  step = !step? 1: Math.abs(step);

  if(start < end) {
    for(let i=start; i<=end; i+=step) {
      ret.push(i);
    }
  } else {
    for(let i=start; i>=end; i-=step) {
      ret.push(i);
    }
  }

  return ret;
};

console.log(range(1, 10, 1));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));  // [1, 3, 5, 7, 9]
console.log(range(1, 10));     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 1));     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
console.log(range(5));         // [1, 2, 3, 4, 5]
console.log(range(100));       // [1, 2, 3, ..., 99, 100]
