
## 1. 什么是正则
1. 正则表达式是由一个字符序列形成的搜索模式。
2. 当你在文本中搜索数据时，你可以用搜索模式来描述你要查询的内容。
3. 正则表达式可以是一个简单的字符，或一个更复杂的模式。
4. 正则表达式可用于所有文本搜索和文本替换的操作。

### 1-1. 正则对象RegExp
> 当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）
```
//以下是等价的：
var re = new RegExp("\\w+");
var re = /\w+/;

```

## 2. 语法
> /正则表达式主体/修饰符(可选)
```
var patt = /runoob/i
```
**注：**
- /runoob/i  是一个正则表达式。
- runoob  是一个正则表达式主体 (用于检索)。
- i  是一个修饰符 (搜索不区分大小写)。

## 3. 使用字符串方法
在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。

- `search()` 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

- `replace()` 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

### 3-1. search()
(1). 使用`正则表达式`搜索 "Runoob" 字符串，且不区分大小写(i)：
```
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
输出结果为：

6
```
(2). search 方法可使用`字符串`作为参数。字符串参数会转换为正则表达式：
```
检索字符串中 "Runoob" 的子串：

var str = "Visit Runoob!"; 
var n = str.search("Runoob");
输出结果为：

6
```

### 3-2. replace()
使用正则表达式且不区分大小写将字符串中的 Microsoft 替换为 Runoob :
```
var str = document.getElementById("demo").innerHTML;  //Visit Microsoft!
var txt = str.replace(/microsoft/i,"Runoob");
结果输出为:

Visit Runoob!
```

### 3-3. match
```
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/g);
// ain,ain,ain
```

## 4. 正则表达式修饰符
> 修饰符 可以在全局搜索中不区分大小写:

| 修饰符    |   描述  |  
| --- | --- | --- | --- |
| i   |  执行对大小写不敏感的匹配。   | 
| g   |  执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。   | 
| m   |  执行多行匹配。   | 

## 5. 正则表达式模式
> 方括号用于查找某个范围内的字符：

| 表达式    |   描述  |  案例 |
| --- | --- | --- | --- | --- |
| [abc]   |  查找方括号之间的任何字符。   | var str="abks";  var patt1=/[a-h]/g; 得到：a,b |
| [^abc]   |  查找任何不在方括号之间的字符。   | var str="abks"; var patt1=/[^a-h]/g; 得到：k,s  |
| (x \| y)   |  查找任何以 \|分隔的选项。   | |
| (x \| y \| z)	| 查找任何指定的选项。| |
| [0-9]   |  查找任何从 0 至 9 的数字。   | |
| [a-z]	| 查找任何从小写 a 到小写 z 的字符。| |
| [A-Z]	| 查找任何从大写 A 到大写 Z 的字符。| |
| [A-z]	| 查找任何从大写 A 到小写 z 的字符。| |


## 6. 元字符
> 元字符（Metacharacter）是拥有特殊含义的字符：

| 表达式    |   描述  |  案例 |
| --- | --- | --- | --- |  --- |
|.|	查找单个字符，除了换行和行结束符。|var str="That's hot!"; var patt1=/h.t/g; 得到：hat,hot|
|\w|	查找数字、字母及下划线。| |
|\W|	查找非单词字符。|  var str="Give 100%!"; var patt1=/\W/g;得到：,%,! |
|\d|	查找数字。|
|\D	|查找非数字字符。|
|\s	|查找空白字符。|
|\S|	查找非空白字符。|
|\b	|匹配单词边界。| var str="Visit Runooob"; var patt1=/\bRun/g; 得到：Run|
|\B	|匹配非单词边界。对字符串中不位于单词开头或结尾的 "xx" 进行全局搜索| var str="Visit Runoob"; var patt1=/\Bnoob/g; 得到：noob|
|\0	|查找 NULL 字符。| 
|\n	|查找换行符。| var str="Visit RUNOOB.\n Learn"; var patt1=/\n/g; 得到：13|
|\f	|查找换页符。|
|\r	|查找回车符。|
|\t	|查找制表符。|
|\v	|查找垂直制表符。|
|\xxx	|查找以八进制数 xxx 规定的字符。|
|\xdd	|找以十六进制数 dd 规定的字符。|
|\uxxxx|	查找以十六进制数 xxxx 规定的 Unicode 字符。|

## 7. 量词
> 方括号用于查找某个范围内的字符：

| 表达式    |   描述  |  案例 |
| --- | --- | --- | --- | --- |
|n+	|匹配任何包含至少一个 n 的字符串。|例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。|
|n*	|匹配任何包含零个或多个 n 的字符串。|例如，/bo*/ 匹配(b后面任意数量的o) "A ghost booooed" 中的 "boooo；"A bird warbled" 中的 "b"|
|n?	|匹配任何包含零个或一个 n 的字符串。|例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。|
|n{X}	|匹配包含 X 个 n 的序列的字符串。|例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。|
|n{X,}	| X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。| 例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。|
|n{X,Y}	|X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。|例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。|
|n$	|匹配任何结尾为 n 的字符串。|
|^n	|匹配任何开头为 n 的字符串。|
|?=n|	匹配任何其后紧接指定字符串 n 的字符串。|
|?!n|	匹配任何其后没有紧接指定字符串 n 的字符串。|

## 8. RegExp 对象方法
| 方法	| 描述|  案例| 
| --- | --- | --- | --- |--- |
| compile	| 在 1.5 版本中已废弃。 编译正则表达式。|var str="Hello world!";
| exec	| 检索字符串中指定的值。返回找到的值，并确定其位置。|var str="Hello world!"; var patt=/Hello/g;var result=patt.exec(str);得到：Hello。patt=/RUNOOB/g;result=patt.exec(str);得到：null|
| test| 	检索字符串中指定的值。返回 true 或 false。| var str="Hello world!"; var patt=/Hello/g; var result=patt.test(str); 得到：true |
| toString| 	返回正则表达式的字符串。| var patt = new RegExp("RUNOOB", "g"); var res = patt.toString(); 得到：/RUNOOB/g|

## 9. RegExp 对象属性
| 方法	| 描述|  案例| 
| --- | --- | --- | --- |--- |
