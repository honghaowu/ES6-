
## <h2 id='3'>3. NaN </h2>  
### <h3 id='3-1'>3.1 null</h3>  
     null==undefinded;// true  
     null===undefinded;//false  
     typeof null;//object  
     判断是否为null; var a=null; a===null;//true
### <h3 id='3-2'>3.2 isNaN</h3>
  * ES5
      isNaN(NaN); // true  
      isNaN(1); // false: 1 is a number  
      isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation  
      isNaN(Infinity); // false: Infinity is a number  
      isNaN(true); // false: converted to 1, which is a number  
      isNaN(false); // false: converted to 0, which is a number  
      isNaN(null); // false: converted to 0, which is a number  
      isNaN(""); // false: converted to 0, which is a number  
      isNaN(" "); // false: converted to 0, which is a number  
      isNaN("45.3"); // false: string representing a number, converted to 45.3  
      isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3  
      isNaN("Infinity"); // false: string representing a number, converted to Infinity  
      isNaN(new Date); // false: Date object, converted to milliseconds since epoch  
      isNaN("10$"); // true : conversion fails, the dollar sign is not a digit  
      isNaN("hello"); // true : conversion fails, no digits at all  
      isNaN(undefined); // true : converted to NaN  
      isNaN(); // true : converted to NaN (implicitly undefined)  
      isNaN(function(){}); // true : conversion fails  
      isNaN({}); // true : conversion fails  
      isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number  
  * ES6 
  *只有Number.isNaN(NaN),返回true, 其余都是false; 不再转换，参数不是Number类型的直接false,是Number类型，不是NaN直接false*   
      // The one and only  
      Number.isNaN(NaN); // true  
      // Numbers  
      Number.isNaN(1); // false  
      Number.isNaN(-2e-4); // false  
      Number.isNaN(Infinity); // false  
      // Values not of type number  
      Number.isNaN(true); // false  
      Number.isNaN(false); // false  
      Number.isNaN(null); // false  
      Number.isNaN(""); // false  
      Number.isNaN(" "); // false  
      Number.isNaN("45.3"); // false  
      Number.isNaN("1.2e3"); // false  
      Number.isNaN("Infinity"); // false  
      Number.isNaN(new Date); // false  
      Number.isNaN("10$"); // false  
      Number.isNaN("hello"); // false  
      Number.isNaN(undefined); // false  
      Number.isNaN(); // false  
      Number.isNaN(function(){}); // false  
      Number.isNaN({}); // false  
      Number.isNaN([]); // false  
      Number.isNaN([1]); // false  
      Number.isNaN([1, 2]); // false  
      Number.isNaN([true]); // false  
### <h3 id='3-3'>3.3 NaN</h3>
     window.hasOwnProperty('NaN');//true;  
     typeof NaN;// Number;  
     检测NaN用isNaN;不用NaN===NaN;//因为返回false;
### <h3 id='3-4'>3.4 undefined vs NaN</h3>
    typeof undefined;//"undefined"  
    typeof null;//"object"  
  * 以下情况是undefined  
    1. let a; //声明未定义
    2. let json={a: 'a'},json.b;//属性不存在
    3. fn();//函数没有指定返回值
    4. 函数参数未传，参数为undefined; 
    *window.hasOwnProperty('undefined')//true*
## <h2 id='4'>4. 数据类型</h2>
### <h3 id='4-1'>4.1 typeof</h3>
  * 1. String
       typeof 'String' or typeof Date(2018,01,20);//String
  * 2. Number
       typeof 3;//number
  * 3. Bool 
       typeof true/false;//Boolean;
  * 4. Object 
       typeof {} or [] or null or /aaa/ or Error();//Object
  * 5. Function 
       typeof function(){}; // function
  * 6. Udefined
       var a; typeof a;//undefined;
### <h3 id='4-2'>4.2 instanceof</h3>
    a instanceof A; //判断a是否是class A的实例;
## <h2 id='5'>5. 位操作</h2>
## <h2 id='6'>6. Math</h2>
### <h3 id='6-1'>6.1 Math常用方法</h3>
  * Math.round();  
    四舍五入，负值需注意Math.round(-2.5);//-2;实际是过了.5后，取右边较大的整数值.
  * Math.ceil(2.2);//3 向上取整，即右边的那个整数;
  * Math.floor(2.7);//2 向下取整，取左边方向的那个整数。
  * Math.trunc();//取整;不管正负数，只保留整数部分。
  * Math.pow(2,3);等价于ES6: 2**3;//8
  * Math.random()
    - 值的范围[min,max)
    ```
      function fn(min,max){
        return Math.random()*(max-min)+min;
      }
    ```
    - 值的范围[min,max)之间的整数
    ```
      function fn(min,max){
        return Math.floor(Math.random()*(max-min))+min;
      }
    ```
    - 值的范围[min,max]之间的整数
    ```
      function fn(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
      }
    ```
  * Math.max()/Math.min();获取最大值和最小值
    Math.max(8,2,4,1);//8
    Math.min(8,2,4,1);//1
    var ary=[8,2,4,1];
    - ES5: Math.max.apply(Math/null,ary);//apply第一个参数，替代Math.max中的this,这里没用,随便代替,一般用null,第二个参数是数组,apply后相当于把数组的[]中括号去掉后,依次传入Math.max中。
    - ES6 Math.max(...ary);//扩展运算符...放数组前,相当于取出数组中的项，即去掉开头和结尾的中括号。
## <h2 id='7'>7. String</h2>
### <h3 id='7-1'>7.1 String常用方法</h3>
  * 转为字符串类型：String(1); (1).toString();//'1'     
  * 字符串连接： 'ni'+'hao';'ni'.concat('hao','ba');
  * 字符串模板：var name='wh'; `hello,${name}`;//"hello,wh"
  * 字符串反转
  ```
  function reverseString(str){
    return str.split('').reverse().join('');
  }
  ```
  * localeCompare,按字母顺序排序
  ```
    var arr = ["bananas", "cranberries", "apples"];
    arr.sort(function(a, b) {
    return a.localeCompare(b);
    });
  ```
  * str.charAt(index);获取str中索引为index的字符，与str[index]结果一样。
  * str的长度(去空格，行数)
  ```
    function wordCount( val ){
      var wom = val.match(/\S+/g);
      return {
      charactersNoSpaces : val.replace(/\s+/g, '').length,
      characters : val.length,
      words : wom ? wom.length : 0,
      lines : val.split(/\r*\n/).length
      };
    }
  ```
  * str.trim();去除两边空格; str.trimStart();去开头空格;str.trimEnd();去结尾的空格;
  * split(',');以逗号为依据分割为数组;跟arry.join('-')相对,用-把数组项连接成字符串;
  * str.slice()
  ```
    var s = "0123456789abcdefg";
    s.slice(0, 5); // "01234"
    s.slice(5, 6); // "5"
    s.slice(10); // "abcdefg
  ```
  * str.indexOf('a'),str.lastIndexOf('a'),返回str中a的索引，lastIndexOf是从后往前查找，但是索引还是和indexOf一样从左开始，如果不存在，返回-1;
  * 'hello,world'.includes('hello');//true
  * replace  
      'hello,jack'.replace('jack','Tom');//hello,Tom
      ```
      'hello,world'.replace(/([a-zA-z])([a-zA-Z]+)/g,function(match,g1,g2){
        return g1.toUpperCase()+g2.toLowerCase();//Hello,World;
      })
      ```
  * str.toUpperCase();/str.toLowerCase();字母转为大写/小写
  * repeat ES6
    1. 'abc'.repeat(2);//'abcabc'
    2. new Array(3).join('abc');//'abcabc'，相当于[,,]把逗号换成abc
## <h2>8. Date</h2>
### <h3>8.1 创建Date对象</h3>
  * new Date();//不传参数，默认是当前的时间。
  * new Date(100000)；//一个参数为时间戳，会转化为年月日...
  * deadline =new Date("2017/11/17,23:59:59"),
### <h3>8.2 获取时间</h3>
  * 获取时间戳： (new Date()).getTime()
  * 获取年份： (new Date()).getFullYear();
  * 获取月份：(new Date()).getMonth+1;//月份0-11；需要加1；
  * 获得几号： (new Date()).getDate();
  * 获取周几：(new Date()).getDay();
  * getHours();getMinutes();getSeconds();getMilliseconds();
## <h2>9. Date</h2>  
## <h2>10. 操作符</h2>  
  ```
  if(fn) fn();//简写fn&&fn();
  var default= option || {};
  ```
## <h2>11. 构造函数</h2>
```
  function Cat(name){
    this.name=name;
    this.sound='Meow';
  }
  let cat=new Cat('Tom');
  cat.sound;
  Cat.prototype.speak=function(){
    console.log(this.sound);
  }
  cat.speak;
  cat.constructor;//Cat
  cat instanceof Cat;//true;
```
## <h2>12. 条件</h2>
  * 三目运算符 a=1?'yes':'no';
  * switch(val){case 1: ...;break;case 2: ...;break;}
  * if...else.../if...else if..else...
## <h2>13. 注释</h2>
  * 单行 //
  * 多行 /**/  /*TODO:xxx*/
  * <!--xxx-->
## <h2>14. 数组</h2>
### <h3>14.1 数组与类数组</h3>
```
    var realArray=['a','b','c'];
    var arrayLike={0:'a',1:'b',2:'c',length:3};
    //1. Array.from
    Array.from(arrayLike);//["a", "b", "c"]
    //2. for...of
    var newArray=[];
    for(let item of values(arrayLike)){
      newArray.push(item);
    }
    //3. ES5
    [].slice.call(arrayLike);
```
### <h3>14.2 reduce</h3>
[arr.reduce(callback[, initialValue])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
求和
```
[1,2,3,4].reduce(function(a,b){
  return a+b;
});
```
求最小值
```
[1,2,3,4].reduce(function(a,b){
  return a<b?a:b;
},Infinity);
```
去重
```
[1,2,3,4,5,2,3].reduce(function(a,b){
  if(a.indexOf(b)===-1){
    a.push(b);
  }
  return a;
},[]);
// [1, 2, 3, 4, 5]
```
### <h3>14.2 map</h3>
```
  ['one', 'two', 'three', 'four'].map(function(value, index, arr) {
  return value.length;
  });
  // ? [3, 3, 5, 4]
  Version ≥ 6
  ['one', 'two', 'three', 'four'].map(value => value.length);
  // ? [3, 3, 5, 4]
```
### <h3>14.3 filter</h3>
过滤ary.filter(fn(element, index, array)){//条件});返回满足条件的数组
```
  var numbers = [5, 32, 43, 4];
  var odd = numbers.filter(function(n) { return n % 2 !== 0;});
  //Version ≥ 6
  let odd = numbers.filter(n => n % 2 !0); // [5,43];
```
### <h3>14.3 sort</h3>
排序
```
  array.sort(function(a,b){return a-b});
  // 按照单词长度从短到长排序。
  ["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
  return a.length - b.length;
  });
```
### <h3>14.4 去重</h3>
```
  //1. ES5,利用如果有重复，当前重复项被查找出的index不等于本身的index;
  var array=[2,2,3,4,5,3];
  array.filter(function(value,index,array){
    return array.indexOf(value)===index;
  });
  //2 .
  [1,2,3,4,5,2,3].reduce(function(a,b){
    if(a.indexOf(b)===-1){
      a.push(b);
    }
    return a;
  },[]);
  // [1, 2, 3, 4, 5]
  //3. ES6，利用Set()不含重复项。
  [...new Set(array))];
```
### <h3>14.4 clone</h3>
```
  //1. ES5
  var array=[2,2,3,4,5,3];
  var newArray=Array.prototype.slice.call(array);
  var newArray=[].slice.call(array);
  //3. ES6
  var newArray=Array.from(array);
  var newArray=Array.of(...array);
```
### <h3>14.4 数组连接</h3>
```
  //1. ES5
  ary1.concat(ary2,ary3);
  //3. ES6
  [...ary1,...ary2];
```
### <h3>14.5 find</h3>
```
  array.find(function(val,index,arr){
    return val>2;//返回大于2的第一个的值;
  });
```
### <h3>14.6 数组增删</h3>
  * shift();从前面删除
  * pop();从后面删除
  * unshift();从前面添加
  * push(); 从后面添加；
  * splice(index,count,ele);从index，删除count,ele根据count,和自己的个数，判断是删除，替换还是添加；
  * 数组清空
    1. arry=[];
    2. arry.length=0;
  * 数组中最大最小值
    1. Math.max.apply(null,arr);
    2. Math.max(...arr);
  * entries
  ```
    var arr = ["a", "b", "c"];
    var iterator = arr.entries();
    // undefined

    for (let e of iterator) {
        console.log(e);
    }

    // [0, "a"] 
    // [1, "b"] 
    // [2, "c"]
  ```
### <h3>14.7 判断是否是数组</h3>
  * Array.isArray(obj);
  * obj instanceof Array;
  * obj.constructor===Array;
  * 是否具有数组的方法sort...等；
## <h2>15 对象</h2>
