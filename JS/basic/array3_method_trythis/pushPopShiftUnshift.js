const arr = [1, 2, 3, 4];

const push = (arr, ...elements) => {
  return [...arr, ...elements];
};
console.log(push(arr, 5, 6));  // [1, 2, 3, 4, 5, 6]


const pop = (arr, count = 1) => {
  const len = arr.length;
  return [...arr].filter( (_, index) => index < (len - count));
};
console.log(pop(arr));    // [1, 2, 3]
console.log(pop(arr, 2)); // [1, 2]


const unshift = (arr, ...elements) => {
  return elements.concat(arr);
};
console.log(unshift(arr, 0));     // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8));  // [7, 8, 1, 2, 3, 4]


const shift = (arr, count = 1) => {
  return [...arr].filter((_, i) => i >= count);
};
console.log(shift(arr));    // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]

console.log(arr); // [1, 2, 3, 4]