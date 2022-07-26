
const testArr = [1, 2, , 3, 4, , 5, 6];
const testStrArr = ['홍', '김', '임', '창'];
const testArrayArr = [[1, 2,], [3, 4], [5, 6]];
const testObjArr = [{name: "Lim", age: 25}, {name: "Jang", age: 29}];

const myFilter = (arr, cb) => {
  if(!Array.isArray(arr)) {
    console.log("배열이 아닙니다.");
    return;
  }

  const result = [];
  let i = 0;
  for(let a of arr) {
    if(a !== undefined && cb(a, i, arr)) {
      result.push(a);
    }
    i += 1;
  }
  return result;
};


const retFilter = testArr.filter((value, index, array) => {
  console.log(index);
  return (value % 2) === 0;
});

const retMyFilter = myFilter(testArr, (value, index, array) => { 
  console.log(index);
  return (value % 2) === 0;
});


console.log("========== my Filter ==========");
console.log(myFilter(testArr, (value) => { return (value % 2) === 0; }));  // 숫자 배열
console.log(myFilter(testStrArr, (value) => { return value; }));  // 문자 배열
console.log(myFilter(testArrayArr, (value) => { return value['0'] < 5; }));  // 2차원 배열
console.log(myFilter(testObjArr, (value) => { return value.name === "Lim"; })); // 객체 배열

console.log("========== filter ==========");
console.log(testArr.filter((value) => { return (value % 2) === 0; }));  // 숫자 배열
console.log(testStrArr.filter((value) => { return value;}));  // 문자 배열
console.log(testArrayArr.filter((value) => { return value['0'] < 5;})); // 2차원 배열
console.log(testObjArr.filter((value) => { return value.name === "Lim";})); // 객체 배열


const assertFilter = (arr, cb, expVal) => {
  const result = myFilter(arr, cb);
  console.log(`${cb} ==> ${result} : ${(result == expVal) && '통'}`);
};

assertFilter(testArr, (value) => { return (value % 2) === 0; }, '2,4,6');