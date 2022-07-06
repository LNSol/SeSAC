console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

console.log(Math.round(2.34, 2));
console.log((2.455).toFixed(2));

const f = 2.345;
console.log(Math.trunc(f), Math.floor(f));

console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3, Math.abs(0.1 + 0.2) -  0.3 < Number.EPSILON);
console.log(Math.abs(2.4 % 1) - 0.4 < Number.EPSILON);

/* Try This 1 */
console.log("### Try This 1 ###")
for(let i=0.1; i<1; i=(i*10 + 0.1*10)/ 10) {
  console.log(i, i.toFixed(1));
}

/* Try this 2 */
console.log("### Try This 2 ###");
let userNum = 0.21354;

function toValidFloat(a, b, length) {
  const po = Math.pow(10, length);
  console.log(a, po);
  
  return ((a * po) + (b * po)) / po;
}

console.log(0.21354 + 0.1, toValidFloat(0.21354, 0.1, 5));


/* Try this 3 */
console.log(0.14 + 0.28);


//-----------------------------------------------
for(let i=2; i<=10; i++) {
  console.log(Math.sqrt(i).toFixed(3));
}