//直接插入排序
//由于直接插入排序每次移动一个元素，只要比前面的元素小，都依次插入到合理的位置
//是一种稳定的排序
//快速整理代码的快捷键 Shift+ Alt + F
function directInsertionSort(array) {
    var len = array.length;
    var index;
    var current;
    for (let i = 1; i < len; i++) {
        index = i - 1;//待比較元素的下标
        current = array[i];//当前元素
        while (index >= 0 && array[index] > current) {//前置条件之一：待比较的元素比当前的元素大，将比当前元素大的元素，依次向后移动
            array[index + 1] = array[index];//将代比较的元素后移一位
            index--;//游标前移一位
            console.log(array);
        }
        if (index + 1 != i) {//避免同一个元素赋值给自身
            array[index + 1] = current;//将当前元素插入预留空位
        }
    }
    return array;
}
var testArr = [3, 21, 2, 1, 28, 15, 13];
console.time('time');
console.log(directInsertionSort(testArr));
console.timeEnd('time');