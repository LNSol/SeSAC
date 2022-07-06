const n = 100;

const s1 = n.toString();
const c2 = n + '';

console.log(s1, typeof s1, typeof s2);


console.log(n.toString(2), n.toString(8), n.toString(16));
console.log(parseInt(n.toString(2), 2));

console.log(parseFloat('3.2cm')); // -> 3.2
console.log(Number('3.2cm')); // -> NaN

//--------------------------------------------------
const n1 = Number(s1);
const n2 = new Number(s1);
console.log(n1, n2, typeof n1, typeof n2);

const x = 5;
console.log(typeof x, typeof !!x, typeof !!undefined);

//--------------------------------------------------
const d1 = Date();
const d2 = new Date();
console.log(d1, d2, typeof d1, typeof d2, d1.valueOf(), d2.valueOf());

//-------------------------------------------------
console.log('sss' + 2, 'sss' + {id: 1});
const person = {name: "Lim", age:25};
console.log(person.toString());

const q = 5;
const z = q + '30';
console.log(z);

let a = 1, b = 2;
let c = (a++, b++);
console.log(c); //-> 2

//---------------------------------------------------
const T = true, F = false;
let xx = 1;
console.log(T||xx++, F||xx++, xx);
console.log(T&&xx++, F&&xx++, xx);

let p = 0b1010, m = 0b1100;
console.log((a&b).toString(2));

let o1 = o2 = {name:"lim"};
console.log( o1 === o2);

const u = {name: "Lim", age: 25};
const {name: nm, age, addr} = u;
//{name, age} = u // -> Error
// ({name, age} = u) 이렇게 써야댐.
console.log(nm, age, addr); 

//--
const arr = [1,2,3,4,5,6,7,8,9,10];
const obj = {name: "Lim", age: 24};
for(let a of arr) {
  console.log(a);
}
/*
for(let o of obj) { // Error
  console.log(o);
}*/


