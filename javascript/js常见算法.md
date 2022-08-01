#### 1. 冒泡排序
> 比较两个相邻的元素，如果第一个比第二个大。则交换位置
```js
function bubbleSort(arr) {
    const len = arr.length;
    for(let i=0; i<len; i++) {
        for(let j=0; j<len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([2,4,5,72,67,62]))
```

#### 2. 快速排序
> 找出一个参考值，通过递归讲数据分成较小和较大的不同子序列
```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [], right = [], current = arr.splice(0,1);
  for (i = 0; i<arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}
console.log(quickSort([1,5,3,4,87,21]))
```

#### 3. 铺平数组
```js
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});
```

#### 4. 手撕数组slice方法
```js
/**
 * 思路
 * 新建一个数组用来做result，遍历开始到结束这个区间内的值，添加在result里边
 */
function slice(array, start, end) {
  let length = array.length;

  start = start === null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }

  if (end < 0) {
    end += length
  } 

  length = start > end ? 0 : end - start;

  let index = -1;
  const result = new Array(length);

  while(++index < length) {
    result[index] = array[index+start]
  }
  return result;
}
console.log(slice([1,2,3,4,5], -1))
```