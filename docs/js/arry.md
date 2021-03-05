> 背景，原理，使用场景-用途，如何使用，优缺点，怎么优化，横向对比竞品，扩展引申相同原理的技术，或者更进一步，有更好的解决方案。

> STAR 点出问题，多种解决方法，为什么选这种，结果，还有更好的方法吗


## 1. 数组

> 数组对象的作用是：使用单独的变量名来存储一系列的值。


### 1-1. concat()
> 连接两个或更多的数组，并返回结果。将()里面的元素,拼接到()前的数组中
```
var a = [1,2]
var b = [3,4]
var c = a.concat(b)  //[1,2,3,4]

```

### 1-2.  every()
> 使用指定函数检测数组中的所有元素

- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回 true。

**注意：** every() 不会对空数组进行检测。

**注意：** every() 不会改变原始数组。


```
var ages = [1, 2, 4];
function checkAdult(age) {
    return age >= 2;
}
ages.every(checkAdult);  //false   不会影响原始数组

```
```
var ages = [];
function checkAdult(age) {
    return age >= 2;
}
ages.every(checkAdult);  //空数组不检查，直接返回true
```

### 1-3.filter()

> 返回满足断言函数的数组元素。
```
var ages = [1, 2, 3, 4];
 
function checkAdult(age) {
    return age >= 3;
}
ages.filter(checkAdult);  // [3, 4]  不会影响原始数组
```

### 1-4. forEach()
> 为数组的每一个元素调用指定函数

```
var arr = [1,2,3,4];
var sum =0;
arr.forEach((value,index,array) => {

 array[index] == value; //true

 sum+=value; 

 });

console.log(sum); //结果为 10
```
　　
### 1-5. indexOf()
> 在数组中查找指定元素的下标
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");  // 2
var b = fruits.indexOf("nangua");  // -1

```

### 1-6. join()
> 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

```
var str = ["a", "b", "c", "d"];
var str1 = str.join();  // "a,b,c,d"  值为空会保留逗号
var str2 = str.join('e');  // "aebeced"  通过e来隔开
var str3 = str.join('1');  // "a1b1c1d"  通过1来隔开
```

### 1-7. lastIndexOf()
> 1.如果没有指定参数返回一个指定的字符串值`最后出现`的位置（下标，空格也算一个位置）。2.如果指定`第二`个参数 `start`，则在一个字符串中的`指定`位置从`后`向`前`搜索

- lastIndexOf() 方法对大小写敏感！

- 如果要检索的字符串值没有出现，则该方法返回 -1。
**不带参数：**
```
var str="Hello world! Hello Today"
console.log(str.lastIndexOf("Hello"))  // 13
console.log(str.lastIndexOf("World"))  //-1
console.log(str.lastIndexOf("world"))  //6
```

**带参数：**
```
var str="0123456789501234";
var n=str.lastIndexOf("12", 10);   // 1  从下标为10的位置，开始往前找第一个'12'出现的下标
var n=str.lastIndexOf("12", 15);   // 12  从下标为15的位置，开始往前找第一个'12'出现的下标
var n=str.lastIndexOf("778", 15);   // -1  未找到
```

### 1-8. push和pop
1. push 把里面的内容添加到数组`末尾`，并返回修改后的`长度`。

2. pop 移除数组`最后`一项，返回`移除`的那个值，减少数组的length。

```
//push
var arr1 = ["a","b","c"];
var arr2 = arr1.push("e","f");
console.log(arr1); 　　　　　// ["a", "b", "c", "e", "f"]　　（修改原数组）
console.log(arr2);          // 5   (返回的是长度)

//pop　　　　　　　
var arr3 = arr1.pop();
console.log(arr1); 　　//  ["a", "b", "c", "e"]　　（修改原数组）　　　　　
console.log(arr3); 　　// 　f  （返回移除的那个值）　　　　　　　
```

### 1-9. unshift 和 shift
1. unshift 将参数添加到原数组`开头`，并返回数组的`长度` 。

2. shift 删除原数组`第一项`，并返回`删除元素`的值；如果数组为空则返回undefined 。 

```
//unshift
var arr1 = ["a","b","c"];
var arr2 = arr1.unshift("e","f");
console.log(arr1); 　　　　　//  ["e", "f", "a", "b", "c"]　　（修改原数组）
console.log(arr2);          // 5   (返回的是长度)

//shift
var arr3 = arr1.shift();
console.log(arr1); 　　//   ["f", "a", "b", "c"]　　（修改原数组）　　　　　
console.log(arr3); 　　// 　e  （返回移除的那个值）　　　　　　　
```

### 1-10. sort
> 将数组里的项从小到大排序,默认排序顺序是根据`字符串UniCode码`。 arr.sort( )


```
var arr1 = ["b", "a", "c", "b"];
var arr2 = ["2", "2", "1", "4"];
var arr3 = [2, 2, 1, 4];
var arr4 = ['12', '232', '500', '1000'];
console.log(arr1.sort()); 　　　　// ["a", "b", "b", "c"]　　　　　　
console.log(arr2.sort()); 　　　　// ["1", "2", "2", "4"]　　　　　
console.log(arr3.sort()); 　　　　// ["1000", "12", "232", "500"]　　排序不符合预期，所以要用到函数排序　　
　　　　　　　　
```
```
function sortNumber(a,b)
{
　　return a - b
}
arr = [13, 24, 51, 3]; 
console.log(arr.sort()); 　　　　　　　　　　// [13, 24, 3, 51] 
console.log(arr.sort(sortNumber)); 　　　　// [3, 13, 24, 51](数组被改变)
```

### 1-11.reverse()
> 反转数组项的顺序  arr.reverse( )
```
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); 　　　　　　　　//[3, 51, 24, 13]
console.log(arr); 　　　　　　　　　　　　　 //[3, 51, 24, 13](原数组改变)
```

### 1-12. slice
> 返回从`原数组`中指定`开始下标`到`结束下标`之间的项组成的`新数组`。

slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。
- 在只有一个参数的情况下， slice()方法返回从该参数指定位置`开始`到当前`数组末尾`的所有项。

- 如果有两个参数，该方法返回`起始`和`结束`位置之间的项——但`不包括结束`位置的项。

```
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); 　　　　　　　　　　　　　  //  [1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy); 　　　　　　　　　　　 //  [3, 5, 7, 9, 11]  (返回下标 1 到 最后 的位置)
console.log(arrCopy2); 　　　　　　　　　　　//  [3, 5, 7]
console.log(arrCopy3); 　　　　　　　　　　　//  [3, 5, 7]
console.log(arrCopy4); 　　　　　　　　　　　//  [5, 7, 9]
```
- arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 

- arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 

- arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。 

- arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。

### 1-13. splice
> 删除、插入和替换。  **修改原数组**

- `删除：`指定 2 个参数：要删除的`第一项`的位置和要删除的`项数`。书写格式：`arr.splice( 1 , 3  )`

- `插入：`可以向指定位置插入任意数量的项，只需提供 3 个参数：`起始位置`、 `0（要删除的项数）`和要`插入的项`。书写格式：`arr.splice(  2,0,4,6  )`

- `替换：`可以向指定位置插入任意数量的项，且同时`删除`任意数量的项，只需指定 3 个参数：`起始位置`、要`删除的项数`和要`插入`的任意数量的项。插入的项数不必与删除的项数相等。

```
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); 　　　　　　　　　　　　　　　//[5, 7, 9, 11] (修改原数组， 从0开始删除2项)
console.log(arrRemoved); 　　　　　　　　　　　//[1, 3]   (返回删除后的数组)
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 7, 4, 6, 9, 11] (修改原数组， 从下标位置2前插入4,6)
console.log(arrRemoved2); 　　　　　　　　　　// [] (插入不返回)
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 2, 4, 4, 6, 9, 11] (从下标1的位置开始删除，删除一项，并插入2,4)
console.log(arrRemoved3); 　　　　　　　　　　//[7] (返回删除项)
```