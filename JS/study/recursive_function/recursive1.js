let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

const sumSalaries = function ss(obj) {
  let sum = 0;

  for(let o in obj) {
    if(Array.isArray(obj[o])) {
      for(let a of obj[o]) {
        let {salary} = a;
        sum += salary;
      }
    } else if(typeof obj[o] === 'object') {
      sum += ss(obj[o]);
    }
  }

  return sum;
};

console.log(sumSalaries(company));