let a=[1,2,3,4];
let b=[3,4,5,6];
// 求并
let sA=new Set(a);
let sB=new Set(b);

let c=new Set([...a,...b]);
console.log([...c]);//[1, 2, 3, 4, 5, 6]

let d=new Set(a.filter(x=>sB.has(x)));
console.log([...d]);//[3, 4]
