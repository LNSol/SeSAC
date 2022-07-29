
const range = (start, end, step) => {
  const result = [];
  // 1. end 세팅
  if(!end) {
    if(start > 0) {
      end = start;
      start = 1;
    } else if(start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }

  // 2. 잘못된 step 검사
  if(step !== undefined && start !== end && Math.sign(end-start) !== Math.sign(step)) return [];

  // 3. step 세팅
  step = step || (start<=end ? 1: -1);

  const last = start + (Math.floor((end-start)/step) * step) + step;

  for(let i = start; i != last; i += step) {
    result.push(i);
  }

  return result;
};

// console.log(range(1, 10, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
// console.log(range(1, 10));    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(10, 1));    // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -2));// [10, 8, 6, 4, 2]
// console.log(range(5));        // [1, 2, 3, 4, 5]
// console.time('100');
// console.log(range(100));      // [1, 2, 3, ..., 99, 100]
// console.timeEnd('100');
// console.log(range(-5));       // [-5, -4, -3, -2, -1]
// console.log(range(5, 5));     // [5]
// console.log(range(5, 5, 0));  // [5]
// console.log(range(5, 5, -1)); // [5]
// console.log(range(5, 1, 1));  // []
// console.log(range(1, 5, -1)); // []
// console.log(range(1, 5, 6));  // [1]
// console.log(range(0));        // [0]
// console.log(range(2, 1, -5)); // [2]
// console.log(range(0, 5));     // [0, 1, 2, 3, 4, 5]
// console.log(range(0, -1));    // [0, -1]
// console.log(range(0, -3));    // [0, -1, -2, -3]
// console.log(range(-3, 0));    // [-3, -2, -1, 0]
// console.log(range(0, 0));     // [0]
// console.log(range(0, 0, 5));  // [0]
// console.log(range(0, -1, -5));// [0]

export { range };