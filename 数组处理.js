    /**
     * 判断内部是否是对象类型，是，就继续递归，不是，则说明为值类型
     * 去重，
     * 排序
     * **/
    Array.prototype.plat=function(){
      var newAry=[];
      function plat(ary){
        ary.forEach(function(item){
          if(Object.prototype.toString.call(item).slice(8,-1)==='Array'){
            plat(item);
          }else{
            newAry.push(item);
          }
        });
      };
      plat(this);
      return newAry;
    };
    Array.prototype.unique=function(){
      return this.filter(function(item,index,arr){
        return arr.indexOf(item)==index;
      });
    }
    Array.prototype.sortAry=function(){
      return this.sort(function(a,b){
        return a-b;
      });
    };
    
    var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];  
    var newA=arr.plat().unique().sortAry();
    console.log(newA); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
