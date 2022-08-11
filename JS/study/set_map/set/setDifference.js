const setA = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const setB = new Set([2, 4, 6, 8]);


/* 방법 1 */
Set.prototype.difference1 = function(set) {
  const result = new Set(this);

  for (const v of set) {
    result.delete(v);
  }
  return result;
};
console.log(setA.difference1(setB));
console.log(setB.difference1(setA));



/* 방법 2 */
Set.prototype.difference2 = function(set) {
  return new Set([...this].filter(v => {
    return !set.has(v);
  }));
};
console.log(setA.difference2(setB));
console.log(setB.difference2(setA));