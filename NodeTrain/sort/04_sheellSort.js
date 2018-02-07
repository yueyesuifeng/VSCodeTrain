//形参增加步数gap(实际上就相当于gap替换了原来的数字1)
/**
 * 步骤：
 * 1 将数组拆分为若干个子数组
 * 2 然后对每个自分组应用直接插入排序
 * 3 逐步减少增量
 * 4 直至增量为1，这是最后的排序，此时的排序，也就是对全数组进行直接插入排序
 * 希尔排序并不稳定
 */
function directInsertionSort(array, gap) {
    gap = (gap == undefined) ? 1 : gap; //默认从下标1的元素开始遍历
    var len = array.length,
        index, current;
    for (var i = gap; i < len; i++) {
        index = i - gap; //待比较元素的下标
        current = array[i]; //当前元素
        while (index >= 0 && array[index] > current) { //前置条件之一:待比较元素比当前元素大
            array[index + gap] = array[index]; //将待比较元素后移gap位
            index -= gap; //游标前移gap位
        }
        if (index + gap != i) { //避免同一个元素赋值给自身
            array[index + gap] = current; //将当前元素插入预留空位
        }
    }
    return array;
}

function shellSort(array) {
    var length = array.length,
        gap = length >> 1;
    while (gap > 0) {
        directInsertionSort(array, gap); //按指定步长进行直接插入排序
        gap = gap >> 1;
    }
    return array;
}
var testArr = [3, 21, 2, 1, 28, 15, 13];
console.time('run');
console.log(shellSort(testArr));
console.timeEnd('run');