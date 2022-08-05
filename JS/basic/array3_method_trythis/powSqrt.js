const arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {
  const powResult = [];
  const sqrtResult = [];
  for (const a of arr) {
    powResult.push(a*a);
    sqrtResult.push(Math.sqrt(a));
  }

  return [powResult, sqrtResult];
};
console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]



const powSqrtByForEach = (arr) => {
  const powResult = [];
  const sqrtResult = [];
  arr.forEach(a => {
    powResult.push(a*a);
    sqrtResult.push(Math.sqrt(a));
  });

  return [powResult, sqrtResult];
};
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]



const powSqrtByMap = (arr) => {
  const powResult = arr.map(a => a*a);
  const sqrtResult = arr.map(a => Math.sqrt(a));

  return [powResult, sqrtResult];
};
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]