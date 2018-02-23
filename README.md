# [ES6](#es6)
## <h2 id='es6'>ES6</h2>
### 1.1 变量声明
  - var 变量提升，没有块级作用域  
  - let 不具备变量提升，不能重复声明，{}有块级作用域
  - const 定义常量，一旦声明，就不可以改变
### 1.2 变量解构  
  **也称“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。**
  - 数组解构： let [a,b]=[1,2]，解构不成功，变量的值就等于undefined。  
  - set结构： let [x, y, z] = new Set(['a', 'b', 'c']); x // "a"
  - 默认值：如果一个数组成员是null，默认值就不会生效,只有当一个数组成员严格等于undefined，默认值才会生效。
  ```
    let [x = 1] = [undefined];
    x // 1

    let [x = 1] = [null];
    x // null
  ```
  - 对象解构：var {x: y = 3} = {x: 5};y // 5
  - 字符串的解构：
```
    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
```
  - 函数参数的解构
  ```
  function add([x, y]){
    return x + y;
  }
  add([1, 2]); // 3
  ```
  ### 1.3 字符串
  - endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
```
    let s = 'Hello world!';
    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true
    s.includes('Hello', 6) // false
```
  - repeat()  
    'x'.repeat(3) // "xxx"
  - 字符串中嵌入变量:let name = "Bob", time = "today";`Hello ${name}, how are you ${time}?`


[javascript 总结（常用工具类的封装）](https://segmentfault.com/a/1190000013041329)
