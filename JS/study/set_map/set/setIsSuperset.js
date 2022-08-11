const setA = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const setB = new Set([2, 4, 6, 8]);


Set.prototype.isSuperset = function(set) {
  const thisArray = [...this];

  return [...set].every(v => {
    return thisArray.includes(v);
  });
};
console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));