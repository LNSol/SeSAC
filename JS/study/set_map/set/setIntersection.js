const setA = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const setB = new Set([2, 4, 6, 8]);

/* 방법 1 */
Set.prototype.intersection1 = function(set) {
  const result = new Set();

  for (const v of set) {
    if (this.has(v)) result.add(v);
  }
  return result;
};
console.log(setA.intersection1(setB));
console.log(setB.intersection1(setA));



/* 방법 2 */
Set.prototype.intersection2 = function(set) {
  return new Set([...this].filter(v => {
    return set.has(v);
  }));
};
console.log(setA.intersection2(setB));
console.log(setB.intersection2(setA));


