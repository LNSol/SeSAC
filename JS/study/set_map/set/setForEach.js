/* 요소 순회 : Set.prototype.forEach() */
// (value1, value2, self)
// Array.prototype.forEach 메서드와 인터페이스를 통일하기 위함.(?)
const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
set.forEach((value1, value2, self) => {
  console.log(value1, value2, self);
});



/* for...of문 */
for (const v of set) {
  console.log(v);
}


/* 스프레드 문법 */
console.log('Set > ', set);
console.log('Spread > ', ...set);
console.log('Array > ', [...set]);


/* 디스트럭처링 */
const [value1, ...restValues] = set;
console.log(value1, restValues);