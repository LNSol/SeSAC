const arr= [1, 2, 3, 4];

const deleteArray = (arr, start, end) => {
  end = end ?? arr.length;
  return [...arr].filter((_, index) => !(index >= start && index < end));
};
console.log(deleteArray(arr, 2));     // [1, 2];
console.log(deleteArray(arr, 1, 3));  // [1, 4]
console.log(arr);                     // [1, 2, 3, 4]




const users = [{id: 1, name: 'Hong'}, {id: 2, name: 'Kim'}, {id: 3, name: 'Lee'}];

const deleteObjectArray = (orr, ...conditions) => {
  const [key, value] = conditions;
  const target = !value ? key: orr.findIndex((obj => obj[key] === value));

  return [...orr].filter((_, index) => target !== index);

};
console.log(deleteObjectArray(users, 2));             // Hong, Kim
console.log(deleteObjectArray(users, 'id', 2));       // Hong, Lee
console.log(deleteObjectArray(users, 'name', 'Lee')); // Hong, Kim
console.log(users);                                   // Hong, Kim, Lee