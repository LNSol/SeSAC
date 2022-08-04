const setA = new Set([1,2,3,4,5,6]);
const setB = new Set([2,4,6]);

// 합집합(1)
Set.prototype.union1 = function(set) {
  const result = new Set(this);
  for(const v of set) {
    result.add(v);
  }
  return result;
};
console.log(setA.union1(setB));
console.log(setB.union1(setA));

// 합집합(2)
Set.prototype.union2 = function(set) {
  return new Set([...this, ...set]);
}
console.log(setA.union2(setB));
console.log(setB.union2(setA));
