let a=1;
let b="es6";
console.log(a);
/**1
 * var 
 * let 块级作用域，
 * const 定义常量，定义之后不能再次修改
 * */

/** 2 解构赋值：
  *数组：
  *let [a,b]=['wu','hao']
  *undefined null有区别
  let [a,b=1]=[2,undefined] 此时的b=1;
  let [a,b=1]=['w',null],此时的b=null
  对象：let {foo,bar}={foo:"w",bar: "h"}
  数组是按照顺序的，而对象是按照key来解析
  字符串：let [a,b]='wh';//a='w',b='h';
  */
  let foo;//声明后再解构，需要加上（）,否则报错。
  ({foo}={foo:'w'});
  console.log(foo);


  // 3 扩展运算符和reset,参数不确定，可以用扩展运算符，reset运算符，跟扩展运算符差不多，只是前面有确定的项。
  //如：function fn(a,...arg){for (let val of arg) console.log(val) },fn(0,2,3); a=0; 2,3对应arg[0],arg[1]
  function fn(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
  }
  fn(1,2,3);

  // 4 字符串模板
  //判断是否含有某个字符ES5中，str.indexOf('wh')>=0即含有；
  //ES6中，str.includes('wh')；返回true/false;是否在开头str.startsWith('wh'),结尾str.endsWith('wh')； str.repeat(n)把str复制n次。
  let name='wh';
  let hello=`hello,${name}`;// ``中空格没用，加html标签可以；${}是变量;支持运算 ${a+b}
  console.log(hello);

  /** 数字操作
   * Number.parseInt() , Number.parseFloat()在ES6中将parseInt()和parseFloat()都移植到Number对象上去，方法的行为保持不变。
   * Number.isInteger() 用来判断一个值是否为整数。2和2.0被视为同一个值.
   * Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 这两个常量，用来表示安全整数的范围。
    Number.MAX_SAFE_INTEGER===Math.pow(2,53)-1;
    Number.MIN_SAFE_INTEGER===Math.pow(-2,53)+1;
  */
  var json={
      '0': 'w',
      '1': '18',
      length: 2
  }
  //类数组转数组，Array.from()  Array.prototype.slice.call(json)
  var arrJson=Array.prototype.slice.call(json);
  console.log(arrJson);
  console.log(Array.from(json));//["w", "18"]
  console.log(Array.of(3,4,5));//[3,4,5]
  //arr.find(fn(val,index,arr){}) 
  let arr=["xiaoxiao","jiajia","doudou"];
  console.log(arr.find(function(val,index,arr){
    return val>5;// 满足条件就不再继续，返回6
  }));
  //数组替换,fill(newVal,index1,index2),newVal替换index1和index2之间的元素，且不包括index2
  let arr1=['ni','hao'];
  var arr2=arr1.fill('nin',0,1);
  console.log(arr2);//把ｎｉ替换为ｎｉｎ了

  //of用法
  for(let item of arr){
      console.log(item);
  }
//   输出下标
for(let item of arr.keys()){
    console.log(item);
}
for(let [index,val] of arr.entries()){
    console.log(index+":"+val);
}
var list=arr.entries();
console.log(list.next().value);//xiaoxiao
console.log(list.next().value);//jiajia
console.log(list.next().value);//doudou

//09 箭头函数
// 常规函数
function add(a,b=2){
    //主动抛出异常
    if(a==0){
        throw new Error('a is Error ');
    }
    return a+b;
}
console.log(add(1,1));
console.log(add.length);//1 除去传递的默认参数之后，还需要传递的参数个数
//箭头函数
var add1=(a,b=2) => a+b;//如果代码是一行，等价于var add1=(a,b=2)=>{return a+b},如果代码是多行，需要{}包起来。箭头函数中不能有new,不能当构造函数。

//json对象解构
let json1 ={
    a: "zzu",
    b: "ccm"
};
function fun({a,b}){
    console.log(a,b);
}
fun(json1);
//数组解构
function arrfn(a,b,c){
    console.log(a,b,c);
}
arrfn(...arr);
// 数组in 数组空位的判断 index in arr;
// 数组遍历： forEach()
arr.forEach((val,index)=>console.log(index,val));
//数组 filter
arr.filter(x=>console.log("arr.filter: "+x));
arr.some(x=>console.log("arr.some: "+x));
//数组转字符串：
console.log([1,2,3].toString());
console.log([1,2,3].join('|'));
// 对象的方法 is assign合并对象
var l={l: 'lala'},o={o: 'oo'}
console.log(Object.assign(l,o));// {l: "lala", o: "oo"}

//Symbol
let sm=Symbol();
console.log(typeof(sm));

//Set 中放数组，且不允许有重复项
let setArr=new Set(arr);
console.log(setArr); //Set{"xiaoxiao", "jiajia", "doudou"}
//追加项
setArr.add('lala');// Set{"xiaoxiao", "jiajia", "doudou", "lala"}
console.log(setArr);
//has 
console.log(setArr.has('lala'));//true
//setArr.delete('lala');
// setArr.clear(); 清除
//遍历 for ...of   
for(let item of setArr){
    console.log(item);
}
setArr.forEach(value=>console.log(value));
//长度
console.log(setArr.size);
//WeakSet()内部可以放对象

//Map
var map=new Map();
//增 删 改 查 - map.set(key,val);map.get(key); map.detele(key); map.has(key);map.clear(); map.size;

// Proxy

// Promise


// Class
class Person{
    name(name){
        console.log(name);// 如果要获取name,记得加上： return name;
    }// 多个方法直接写，不用逗号，另一个方法中用到同一个类中的方法，用this.
    age(val){
        console.log(val);
    }
    constructor(a,b){// a b 是类的参数,用constructor
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}
let person=new Person(1,5);
person.name('doudou');
console.log(person.add());
//继承
class man extends Person{}
let newMan=new man();
newMan.name("继承来的人");

//模块 export 输出 import 引入

//export default只能有一个，export可以有很多个。
// 引入export时候，用import {xx} from "./x.js" 需要加{}引入
// 引入export default时，import xx from "./x.js"， 不需要{}

