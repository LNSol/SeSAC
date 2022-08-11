
/* Set 객체 생성 */
const set1 = new Set();  // 빈 Set 객체 생성
const set2 = new Set([1, 1, 2, 2, 3, 3]); // 이터러블을 인수로 넘김
console.log('set1 > ', set1);
console.log('set2 > ', set2);




/* 중복 요소 제거 */
// 1. 배열의 중복 요소 제거
const uniq1 = (arr) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};
console.log('uniq1 > ', uniq1([1, 1, 2, 2, 3, 3]));

// 2. Set을 이용한 중복 요소 제거
const uniq2 = (arr) => {
  return [...new Set(arr)];
};
console.log('uniq2 > ', uniq2([1, 1, 2, 2, 3, 3]));




/* 요소 개수 확인 : Set.prototype.size */
// setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티임.
console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
const { size } = new Set([1, 1, 2, 2, 3, 3]);
// size = 10; // Error
console.log('size > ', size);




/* 요소 추가 : Set.prototype.add() */
const set3 = new Set();
set3.add(1);
set3.add(2).add(3).add(4).add(4).add(4);
set3.add(undefined).add(undefined);
set3.add(NaN).add(NaN);
set3.add(+0).add(-0);
console.log('set3 > ', set3);




/* 요소 존재 여부 확인 : Set.prototype.has() */
console.log('has(NaN) > ', set3.has(NaN));
console.log('has(10) > ', set3.has(10));



/* 요소 삭제 : Set.prototype.delete() */
set3.delete(undefined);
set3.delete(NaN);
set3.delete(0);
set3.delete(100); // 무시
console.log('after delete > ', set3);



/* 요소 일괄 삭제 : Set.prototype.clear() */
console.log(set3.clear());
console.log(set3);