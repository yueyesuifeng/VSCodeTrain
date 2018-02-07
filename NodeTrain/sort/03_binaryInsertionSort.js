//折半插入排序，虽然折半插入排序明显减少了查询的次数，但是数组元素移动的次数却没有改变，他们的时间复杂度都是O(n*n)
//将二分查找的方法引入进来
function binaryInsertionSort(array) {
    var current, i, j, low, high, m;
    var len = array.length;
    for (i = 1; i < len; i++) {
        low = 0;
        high = i - 1;
        current = array[i];
        while (low <= high) { //折半查找
            m = (low + high) >> 1; //取中间的点
            if (array[i] >= array[m]) { //值相同时，切换到高半区，保证稳定性
                low = m + 1; //插入点在高半区
            } else {
                high = m - 1; //插入点在低半区
            }
        }
        for (j = i; j > low; j--) { //插入位置之后的元素全部后移一位
            array[j] = array[j - 1];
        }
        array[low] = current; //步骤4:插入该元素，low这个位置就是要插入改元素的位置
    }
    return array;
}
var testArr = [3, 21, 2, 1, 28, 15, 13];
console.time('run');
console.log(binaryInsertionSort(testArr));
console.timeEnd('run');