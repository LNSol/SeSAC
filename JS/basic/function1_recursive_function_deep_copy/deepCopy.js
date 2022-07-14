const kim = {
  nid: 3,
  addr: 'Seoul',
  oo: {
    id: 1,
    name: 'Lim',
    addr: {
      city: 'Busan'
    }
  }
};

const deepCopyObject = function dco(obj) {
  const newObj = {};
  
  for(let key in obj) {
    (typeof obj[key] === 'object')? newObj[key] = dco(obj[key]): newObj[key] = obj[key];
  }
  
  return newObj;
};

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'daejeon';

// true, true, true면 통과!
console.log(kim.addr !== newKim.addr,
  kim.oo.name !== newKim.oo.name,
  kim.oo.addr.city !== newKim.oo.addr.city);

console.log(kim);
console.log(newKim);