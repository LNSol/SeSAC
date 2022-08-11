/* 요소 순회 : Map.prototype.forEach() */
// (currentValue, currentKey, self)
const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3'], ['key4', 'value4']]);

map.forEach((v, k, self) => {
  console.log(v, k, self);
});



/* for...of문 */
for (const [key, value] of map) {
  console.log(key, ' -> ', value);
}
for (const entry of map) {
  console.log(entry);
}



/* 스프레드 문법 */
console.log('Map > ', map);
console.log('Spread > ', ...map);
console.log('Array > ', [...map]);



/* 디스트럭처링 */
const [one, two, ...rest] = map;
console.log('one > ', one);
console.log('two > ', two);
console.log('rest > ', rest);



/* 이터레이터 객체를 반환하는 메서드 */
// Map.prototype.keys() 
for (const key of map.keys()) {
  console.log(key);
}

// Map.prototype.values()
for (const value of map.values()) {
  console.log(value);
}

// Map.prototype.entires()
for (const entry of map.entries()) {
  console.log(entry);
}