// 객체 복사
const copyObj = function copy(obj) {
  let result;
  if(Array.isArray(obj)) {
    result = [];
  } else if(typeof obj === 'object') {
    result = {};
  }

  for(let e in obj) {
    if(typeof obj[e] === 'object') {
      result[e] = copy(obj[e]);
    } else {
      result[e] = obj[e];
    }
  }
  return result;
};

// 순수 함수
const makeReverseArray = (arr) => {
  const copiedArray = copyObj(arr);
  const result = [];
  const lastIndex = copiedArray.length - 1;

  for(let i = 0; i <= lastIndex; i += 1) {
    result[lastIndex-i] = copiedArray[i];
  }

  return result;
}


const arr1= [5, 3, 2, 0, 6];
const rev1 = makeReverseArray(arr1);
rev1[3] = 100;
console.log(rev1, arr1);

const arr2 = [1, 2, {name: "Lim", age: 25, addr: [3, 4]}, [10, 20, [100, 200]]];
const rev2 = makeReverseArray(arr2);
console.log(rev2, arr2);