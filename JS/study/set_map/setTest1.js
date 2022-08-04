const s1= new Set([1,2,3,4,5,5,4,3]);
const s2 = new Set();
console.log(s1);
console.log(s2);

// 중복을 제거하는 방법1
const uniq1 = (array) => {
  return array.filter((element, index) => array.indexOf(element) === index);
};
console.log(uniq1([1,1,2,3,4,4,5,6]));

// 중복을 제거하는 방법 2
const uniq2 = (array) => {
  return [...new Set(array)];
};
console.log(uniq2([1,1,2,3,4,4,5,6]));


// 메서드
// 요소 개수 확인 : size
console.log(s1.size);

// 요소 추가 : add()
const arr = [10,20,30];
const lim = {name: 'Lim'};
console.log(s1.add(8).add(arr).add(lim));

// 요소 삭제 : delete()
s1.delete(1);
s1.delete(lim);
console.log(s1);

// 요소 일괄 삭제 : clear();
// s1.clear();

// 요소 존재 여부 : has()
console.log(s1.has(arr));
console.log(s1.has(10));

// Set은 이터러블함. 따라서 for ... of 사용 가능
for(const element of s1) {
  console.log(element);
}

// 스프레드 / 디스트럭처링
const sp = [...s1];
console.log(sp);
const [a, ...rest] = sp;
console.log(a, rest);