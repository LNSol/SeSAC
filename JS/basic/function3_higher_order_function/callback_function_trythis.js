// CASE #1. 빼기 연산에서 문제 발생
// const reduce = (arr, cb, initial) => {
//   let result = arr[0];
//   let len = arr.length;

//   for(let i=1; i<len; i++) {
//     result = cb(result, arr[i]);
//   }

// 덧셈이나 곱셈 연산에서 initial 값을 마지막에 더하거나 곱해도 결과 똑같은데
// 빼기 연산에서는 ㄴㄴ
//   if(initial) {  
//     result = cb(result, initial);
//   }
//   console.log(result);
// };

// CASE #2. initial값이 있으면 배열을 새로 만드는 방법
const reduce = (arr, cb, initial) => {
  if(initial !== undefined) arr = [initial, ...arr];
  let result = arr[0];
  let len = arr.length;

  for(let i=1; i<len; i++) {
    result = cb(result, arr[i]);
  }
  console.log(result);
};

// CASE #3. 쉼표 연산자 사용
const reduce2 = (arr, cb, iv) => {
  let i = 0;
  let sum = iv ?? (i+=1, arr[0]);

  for(i; i<arr.length; i++) {
    sum = cb(sum ,arr[i]);
  }
  console.log(sum);
}

//
const reduce3 = (arr, cb, initValue) => {
  if(!Array.isArray(arr)) {
    return initValue;
  }
  let i =0;
  let ret = initValue ?? (i+=1, arr[0]);
  for(; i<arr.length; i+=1) {
    ret = cb(ret, arr[i]);
  }
  return ret;
};

console.time('total');
console.time('1st');
const assertReduce = (arr, cb, initValue, expVal) => {
  const myReduce = reduce3(arr, cb, initValue);
  console.log(arr, `${cb}, ${initValue} ==> ${myReduce} : ${myReduce === expVal && '통'}`);
};

assertReduce([1, 2, 3], (a, b) => a + b, undefined, 6);
console.timeEnd('1st');

assertReduce([1, 2, 3], (a, b) => a + b, '', '12345');

assertReduce([3, 4], (a, b) => a, undefined, 0);
assertReduce([], (a, b) => a * b, 0, 0);
// assertReduce(null, (a, b) => a * b, 0, 0);
console.timeEnd('total');

// console.log(reduce3([1, 2, 3], (a, b) => a + b, 0));
// console.log(reduce3([1, 2, 3, 4, 5], (a, b) => a + b));
// console.log(reduce3([1, 2, 3, 4, 5], (a, b) => a + b, ''));
// console.log(reduce3([1, 2, 3, 4, 5], (a, b) => a + b, null));


// reduce([1, 2, 3], (a, b) => a + b, 1);        // 6이면 통과
// reduce([1, 2, 3, 4, 5], (a, b) => a + b);     // 15면 통과
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 2);   // 120이면 통과
// reduce([2, 2, 2], (a, b) => a * b);           // 8이면 통과(0조심)

// reduce([10, 1, 2, 3], (a, b) => a - b, 0);
// console.log("-----------");

// reduce2([1, 2, 3], (a, b) => a + b, 1);        // 6이면 통과
// reduce2([1, 2, 3, 4, 5], (a, b) => a + b);     // 15면 통과
// reduce2([1, 2, 3, 4, 5], (a, b) => a * b, 2);   // 120이면 통과
// reduce2([2, 2, 2], (a, b) => a * b);           // 8이면 통과(0조심)

// reduce2([10, 1, 2, 3], (a, b) => a - b, 0);
// console.log("-----------");



