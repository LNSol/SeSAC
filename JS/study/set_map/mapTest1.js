
const m1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(m1);

// 요소 개수 확인 : Map.prototype.size
console.log(m1.size);

// 요소 추가 : Map.prototype.set -> 추가된 Map을 반환함
m1.set('key3', 'value3').set('key4', 'value4');
console.log(m1);

//
const lim = {name: "Eunha"};
const jang = {name: "Boyoung"};

const m2 = new Map([['Lim', lim], ['Jang', jang]]);
console.log(m2);
console.log(m2.get('Lim'));

// 요소 순회
console.log("----------");
m2.forEach((v, k, m) => {
  console.log(v, k, m);
});

for(const [key, value] of m2) {
  console.log(key, value);
}

// 스프레드 문법
console.log(...m2);
// 디스트럭처링
const [a, b] = m2;
console.log("a >>", a, "b >>", b);