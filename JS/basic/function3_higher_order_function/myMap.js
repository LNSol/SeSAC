
const myMap = (arr, cb) => {
  if(!Array.isArray(arr)) {
    console.log("배열이 아닙니다.");
    return;
  }

  const retArr = [];
  const len = arr.length;

  // CASE #1. O
  for(let i=0; i<len; i+=1) {
    if(arr.hasOwnProperty(i)) {
     retArr.push(cb(arr[i], i, arr));
    }
    retArr.length = i+1;
  }

  // CASE #2. O - of 연산자는 빈 원소에 대해서 undefined를 넘겨줌.
  // let i = 0;
  // for(let a of arr) {
  //   if(a !== undefined)
  //     retArr.push(cb(a));
  //   retArr.length = i += 1;
  // }


  // CASE #3. X-배열 객체의 원소가 아닌 프로퍼티에 대해서도 콜백함수를 수행함.
  // for(let a in arr) {
  //   retArr.push(cb(arr[a]));
  // }
  return retArr;
};

// console.log(myMap(arr1, (value, index, array) => { return value * value}));
// console.log(myMap({name: "Lim", age: 25}, (value, index, array) => { return value; }));
const arr = [1, 2, , 4, 5, 6, , 8];
arr.x = 10;
arr.y = 20;

const retTestMyMap = myMap(arr, (value) => { return value * value; });
console.log(retTestMyMap);

console.log("========= map =========");
const retTestMap = arr.map((value) => { return value * value; });
console.log(retTestMap);