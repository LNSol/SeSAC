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


reduce([1, 2, 3], (a, b) => a + b, 1);        // 6이면 통과
reduce([1, 2, 3, 4, 5], (a, b) => a + b);     // 15면 통과
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 2);   // 120이면 통과
reduce([2, 2, 2], (a, b) => a * b);           // 8이면 통과(0조심)

reduce([10, 1, 2, 3], (a, b) => a - b, 0);