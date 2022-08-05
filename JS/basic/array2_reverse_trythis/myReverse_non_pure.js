import { range } from './myRange3.js';

// 비순수 함수
const reverseArray = (arr) => {
  const len = arr.length;
  const pivot = Math.floor(len / 2);

  for(let i = 0; i < pivot; i += 1) {
    [ arr[i], arr[len-(i+1)] ] = [ arr[len-(i+1)], arr[i] ];
  }
  return arr;
};


const arr1 = [5, 4, 7, 9, 10];
const arr2 = [9, 3, 5, 6, 7, 1, 8, 5];
const arr3 = ['가', '나', '다', 10, 9, 8];
const arr4 = [10, 9, , 7, 6];
const arr5 = [
  1, 2, [4, 3, 1],
  {id: 1, name: "Lim"},
  {id: 2, name: "Jang"},
  {id: 3, name: "Kim"}
];

console.log("reverse: ", reverseArray(arr1), "original: ", arr1);
console.log("reverse: ", reverseArray(arr2), "original: ", arr2);
console.log("reverse: ", reverseArray(arr3), "original: ", arr3);
console.log("reverse: ", reverseArray(arr4), "original: ", arr4);
console.log("reverse: ", reverseArray(arr5), "original: ", arr5);
console.log("=============================");


// const arr6 = range(3000);
// const arr7 = range(3000);

// console.time('myReverse3000');
// reverseArray(arr6);
// console.timeEnd('myReverse3000');

// console.time('reverse3000');
// arr7.reverse();
// console.timeEnd('reverse3000');
