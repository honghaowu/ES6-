# Ajax
## 1 Ajax
   * 1.1 Ajax常用方法和属性  
      - responseText: data type string
      - responseXML: data type XML  
      - onreadystatechange:监听状态变化函数 
   * 1.2 Ajax 请求
      - 创建Ajax对象  
           *ie7+，及现代浏览器支持XMLHttpRequest*  
           *ie5,ie6支持的是ActiveXObject*
         ```
           var xhr;
           if(window.XMLHttpRequest){
             xhr=new XMLHttpRequest();
           }else{
             xhr=new ActiveXObject('Microsoft.XMLHTTP');
           }
         ```
      - 监听状态变化  
           *readyState为请求状态码，为4表示请求完成*  
           *status为响应状态码，200表示服务器响应正常*
         ```
           xhr.onreadystatechange=function(){
             if(xhr.readyState==4 && xhr.status==200){
               console.log(responseText);
               var data=JSON.parse(responseText);
             }
           }
         ```
      - 创建请求  
         *参数：请求方式，url地址，true异步，false同步*
          ```
            xhr.open('GET/POST',url,true);
          ```
      - 发送请求
         *get 请求send(null);post请求，data="name=wh&age=28"*
          ```
            xhr.send(null/data);
          ```
   * 1.3 get请求
      ```
      var xhr;
      if(window.XML){
        xhr=new XMLHttpRequest();
      }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
          console.log(responseText);
        }
      }
      xhr.open('GET','http://www.xxx?name=wh&age=28',true);
      xhr.send(null);
      ```
   * 1.4 post请求
     ```
      var xhr;
      if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
      }else{
        xhr=new ActiveXObject('Microsoft.XMLHTTP');
      }
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
          console.log(responseText);
        }
      }
      xhr.open("POST",'http://www.xxx',true);
       //4.设置请求头
      xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      xhr.send('name=wh&age=28');
     ```
* 1.5 jQuery的ajax
     - $.ajax({}) 可配置方式发起Ajax请求
     - $.get() 以GET方式发起Ajax请求
     - $.post() 以POST方式发起Ajax请求
   ```
    $.ajax({
      type : 'get',
      url : 'getCode.php',
      data : {'mobile' : phone},
      dataType : 'json',
      beforeSend : function(){

      },
      success : function(info){

      }
    });
   ```
   * 1.6 小结
      - get 没有请求主体, 使用 xhr.send(null) 发送请求主体
      - get 可以通过请求 url 上添加请求函数
      - post 可以通过 xhr.send( 'name=itcast&age=10' ) 发送请求主体
      - post 需要设置xhr.setRequestHeader
      - get 性能高( 基本上获取内容都是使用get )
      - get 大小限制约 4kb, post 则没有限制
## 2 跨域
   * 2.1 jsonp （包括jQuery）  
   */*  
    ** jsonp跨域  
    ** 原理：利用script标签的src可以跨域访问外部资源，  
    ** 在客户端，通过callback（也可能是cb）指定回调函数的名字，作为参数传递给服务器，服务器把数据作为回调函数的参数返回，并自动执行回调函数。  
    */*
   ```
      function getPrice(){
        var js=document.createElement("script");
        js.src="http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice";
        document.body.appendChild(js);
      }
      function refreshPrice(data){
        console.log(data);
      }
      getPrice();
   ```
   * 2.2 CORS
   * 2.3 代理服务器
   * 2.4 flash
