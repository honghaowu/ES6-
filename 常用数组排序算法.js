 /**1 冒泡排序
     * 外层循环i  0 leng-1;
     * 内层循环j： 0 len-1-i; 对比a[j]和a[j+1]
     * **/

    let ary1=[18,2,5,7,1,9];
    let ary2=[18,2,5,7,1,9];
    let ary3=[18,2,5,7,1,9];
    let ary4=[18,2,5,7,1,9];
    function aryFn1(ary){
      let temp;
      for(let i=0; i< ary.length-1; i++){
        for(let j=0; j<ary.length-1-i; j++){
          if(ary[j]>ary[j+1]){
            temp=ary[j];
            ary[j]=ary[j+1];
            ary[j+1]=temp;
          }
        }
      }
      return ary;
    }
    /**
     * 2 快速排序
     * 选中间值作为基准，比其小的放左边，大的放右边；用splice选择，返回的值为基准，改变了数组的长度，所以len--;
     * 递归处理
     * **/
    function quickSort(ary){
      var len=ary.length,left=[],right=[];
      if(len<=1){
        return ary;
      }
      var tempIndex=Math.floor(len/2);// 基准项索引
      var temp=ary.splice(tempIndex,1);// splice返回的是删除的项，并改变原有数组
      len--;
      for(let i=0;i<len; i++){
        if(ary[i]>temp){
          right.push(ary[i]);
        }else{
          left.push(ary[i]);
        }
      }
      return quickSort(left).concat(temp,quickSort(right));
    }
    /**
     * 3 选择排序
     * 第一次循环，假设第i项为最小项。
     * 第二次循环，找出最小项索引，然后交换位置
     * ***/
    function aryFn2(ary){
      var temp,minIndex;
      let len=ary.length;
      for(let i=0; i<len-1;i++){
        minIndex=i;
        for(let j=i+1;j<len; j++){
          if(ary[j]<ary[minIndex]){
            minIndex=j;
          }
        }
        temp=ary[i];
        ary[i]=ary[minIndex];
        ary[minIndex]=temp;
      }
      return ary;
    }
    /**
     * 4 插入排序
     * 假设a[i]为待排序的项，他前面的项，如果有比他大的，则比他大的项目后移一位，把当前的位置插入temp;
     * 因为第二次循环中j--;此时的j要+1；
     * **/
    function insertSort(ary){
      var temp;
      for(var i=1; i<ary.length; i++){
        temp=ary[i];
        for(var j=i-1;j>=0&&ary[j]>temp;j--){
          a[j+1]=a[j];
        }
        a[j+1]=temp;
      }
    }

    console.log("冒泡排序："+aryFn1(ary1));  
    console.log("快速排序："+quickSort(ary2));  
    console.log("选择排序："+aryFn2(ary3));  
    console.log("插入排序："+aryFn2(ary4));
