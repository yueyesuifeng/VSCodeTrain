/**
 * 冒泡排序
 */
function swap(i,j,array){
    var temp = array[j];
    array[j] = array[i];
    array[i] =temp;
}
function bubbleSort(array){
    var len = array.length;
    var ifSwap;
    for(var i=0;i<len;i++){//外层循环移动游标
        ifSwap=false;
        for(var j=0;j<len-1-i;j++){//内层循环遍历游标及之后的元素，通过两两交换的方式，每次确保内循环结束位置排序正确
            array[j] > array[j+1]&&(ifSwap = true)&&swap(j,j+1,array);//不用if的判断写法
        }
        if(!ifSwap)//如果有一轮循环，内层循环没有移动元素，说明整个数组是有序的
        break;
    }
    return array;
}
var testArr = [3,21,2,1,28,15,13];
console.time('time');
console.log(bubbleSort(testArr));
console.timeEnd('time');
//平均时间复杂度O(n*n)
//最好情况O(n)
//最坏情况(n*n)
//空间复杂度O(n)