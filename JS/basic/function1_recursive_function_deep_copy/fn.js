function hello() {
  return "Hello, World";
}
console.log(hello());
//
function printReturnValue(fn) {
  console.log(fn.name, fn());
}
printReturnValue(hello);
//
function f(n) {
  if (typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
  else n += 1;
}

let n = 10;
let nobj = { id: 10 };
f(n);
f(nobj);
console.log(n, nobj);
//
const user = {id: 1, name: 'Lim'};
function fd1(id, name) {
  console.log(`id is ${id}, name is ${name}`);
}
function fd2({id, name}) { // Destructuring -> let {id, name} = user;
  console.log(`id is ${id}, name is ${name}`);
}
function fd3([id, name]) { // Destructuring -> let {id, name} = user;
  console.log(`id is ${id}, name is ${name}`);
}
fd1(user.id, user.name);
fd2(user);
const arr = [2, 'Jang'];
fd3(arr);

//
console.log("------------------");
const counter = (function() {
  let curr = 0;
  return {
    inc: (n=1) => {
      curr += n;
    },
    getCurr: function() {
      return curr;
    },
    dec(n=1) {
      curr -= n;
    }
  }
})();

counter.inc();
console.log(counter.getCurr());
counter.inc();
console.log(counter.getCurr());
counter.inc(100);
console.log(counter.getCurr());

counter.dec();
console.log(counter.getCurr());
counter.dec(50);
console.log(counter.getCurr());
console.log("--------------------");
//
const f3 = (n) => {
  return n * 10;
};
console.log(f3(10));
//
const name = 'window\'s name';
const obj = {
  name: 'ObjName',
  bark1() {
    console.log('obj.bark=', this.name);
  },
  bark2: () => console.log('obj.bark2=', this.toString()),  //?
};
obj.bark1();
obj.bark2();
