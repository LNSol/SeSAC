const range = (start, end, step) => {
  const ret = [];

  end ?? (end=start, start=1)
  step = step? step: ((start<end)? 1: -1);
  
  // 잘못된 step 값인 경우
  if(Math.sign(end-start) !== Math.sign(step)) {
    console.log("error");
    return;
  }
    
  const last = start + (Math.floor(((end-start)/step)) * step);
  
  for(let i=start; i!=(last+step); i+=step) {
    ret.push(i);
  }

  return ret;
};

// console.log(range(1,10,0)); // 흠 처리 o?x?
console.log(range(1, 10, 1));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));  // [1, 3, 5, 7, 9]
console.log(range(1, 10, 1));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 1));     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
console.log(range(5));         // [1, 2, 3, 4, 5]
console.log(range(100));       // [1, 2, 3, ..., 99, 100]

console.log(range(15, 50, 10));
console.log(range(40, 20, -8));

// 잘못된 step 값을 준 경우
console.log(range(10, 0, 2));
console.log(range(2, 10, -3));
