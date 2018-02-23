AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。  
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。  

区别：
- 1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。CMD 推崇 as lazy as possible.
- 2. CMD 推崇依赖就近，AMD 推崇依赖前置。
```
// CMD
   define(function(require, exports, module) { 
     var a = require('./a');   
     a.doSomething();   
     // 此处略去 100 行
     var b = require('./b');
     // 依赖可以就近书写
     b.doSomething() ;  
     // ... 
    })
   // AMD 默认推荐的是
   define(['./a', './b'], function(a, b) {
      // 依赖必须一开始就写好
      a.doSomething();
      // 此处略去 100 行
      b.doSomething();
      ...
    })

```
