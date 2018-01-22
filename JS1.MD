
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
