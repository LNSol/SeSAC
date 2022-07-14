const reFn = function re(n=100) {
  return (n!==1)? n + re(n-1): 1;
};

const reFn2 = function re2(n=1, m=100) {
  return (m!==n)? m + re2(n, m-1): n;
};

let tot1 = reFn(10);
console.log("tot1 : " + tot1);

let tot2 = reFn2(5, 80);
console.log("tot2 : " + tot2);