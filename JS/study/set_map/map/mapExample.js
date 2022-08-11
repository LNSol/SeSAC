/* Map 객체 생성 */
// 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 함.
const map1 = new Map();
const map2 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key1', 'value3']]);
console.log('map1 > ', map1);
console.log('map2 > ', map2);



/* 요소 개수 확인 : Map.prototype.size */
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
const { size } = map2;
// size = 10;
console.log(size);




/* 요소 추가 : Map.prototype.set() */
map2.set('key3', 'value3');
map2.set('key4', 'value4').set('key5', 'value5').set('key5', 'value50');
console.log('map2 > ', map2);



/* 객체와 Map 객체의 차이점 */
// 객체의 프로퍼티는 문자열이나 심벌값일 수 있으며, 이터러블하지 않음.
// Map 객체의 키는 제한이 없으며, 이터러블함.
const lim = {name: "Eunha", age: 25};
const kim = {name: "Gukja", age: 25};
const obj = {lim: 'developer'};
const mapObj = new Map([[lim, 'me'], [kim, 'friend']]);
console.log(obj);
console.log(mapObj);



/* 요소 취득 : Map.prototype.get() */
console.log(mapObj.get(lim));
console.log(mapObj.get(kim));
console.log(mapObj.get('park'));



/* 요소 존재 여부 확인 : Map.prototype.has() */
console.log(mapObj.has(lim));
console.log(mapObj.has('park'));



/* 요소 삭제 : Map.prototype.delete() */
console.log(mapObj);
console.log(mapObj.delete(lim));
console.log(mapObj.delete('park'));
console.log(mapObj);




/* 요소 일괄 삭제 : Mpa.prototype.clear() */
console.log(mapObj.clear());
console.log(mapObj);