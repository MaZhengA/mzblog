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