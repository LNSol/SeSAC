const setA = new Set([1,2,3,4,5,6]);
const setB = new Set([2,4,6]);

// 부분 집합과 상위 집합(1)
Set.prototype.isSuperset1 = function(subset) {
  for(const v of subset) {
    if(!this.has(v)) return false;
  }
  return true;
};
console.log(setA.isSuperset1(setB));
console.log(setB.isSuperset1(setA));


// 부분 집합과 상위 집합(2)
Set.prototype.isSuperset2 = function(subset) {
  return [...subset].every( v => [...this].includes(v) );
};
console.log(setA.isSuperset2(setB));
console.log(setB.isSuperset2(setA));