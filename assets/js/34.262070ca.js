(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{217:function(a,t,e){"use strict";e.r(t);var s=e(6),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-函数声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数声明"}},[a._v("#")]),a._v(" 1. 函数声明")]),a._v(" "),e("h3",{attrs:{id:"_1-1-什么是函数声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是函数声明"}},[a._v("#")]),a._v(" 1-1. 什么是函数声明")]),a._v(" "),e("blockquote",[e("p",[a._v("就是使用function关键字声明一个函数，再指定一个函数名，叫函数声明")])]),a._v(" "),e("h3",{attrs:{id:"_1-2-函数声明三种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-函数声明三种方式"}},[a._v("#")]),a._v(" 1-2. 函数声明三种方式")]),a._v(" "),e("h4",{attrs:{id:"_1-function-构造器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-function-构造器"}},[a._v("#")]),a._v(" (1)  Function()构造器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var f =new Function()\n")])])]),e("h4",{attrs:{id:"_2-函数声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数声明"}},[a._v("#")]),a._v(" (2)   函数声明")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function f (){\n     console.log(2);\n}\n")])])]),e("h4",{attrs:{id:"_3-函数表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-函数表达式"}},[a._v("#")]),a._v(" (3)   函数表达式")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var f = function() {\n      console.log(1);  \n}\n")])])]),e("h2",{attrs:{id:"_2-变量声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-变量声明"}},[a._v("#")]),a._v(" 2. 变量声明")]),a._v(" "),e("h3",{attrs:{id:"_2-1-什么是变量声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是变量声明"}},[a._v("#")]),a._v(" 2-1. 什么是变量声明")]),a._v(" "),e("blockquote",[e("p",[a._v("声明是告诉编译器，有某个类型的变量会被使用，但是编译器此时并"),e("code",[a._v("不会")]),a._v("为它"),e("code",[a._v("分配任何内存")]),a._v("。"),e("br"),a._v(" "),e("strong",[a._v("ps")]),a._v("："),e("code",[a._v("定义")]),a._v("是分配了"),e("code",[a._v("内存")]),a._v("。举个例子：var a = 1，其中var a是声明，a=1是定义(即赋值)。")])]),a._v(" "),e("h3",{attrs:{id:"_2-2-变量声明的方式和区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-变量声明的方式和区别"}},[a._v("#")]),a._v(" 2-2. 变量声明的方式和区别")]),a._v(" "),e("ul",[e("li",[a._v("var声明的变量会挂载在"),e("code",[a._v("window")]),a._v("上，而let和const声明的变量不会")]),a._v(" "),e("li",[a._v("var声明变量存在"),e("code",[a._v("变量提升")]),a._v("，let和const不存在变量提升(严格来说，let也存在)")]),a._v(" "),e("li",[a._v("let和const声明形成"),e("code",[a._v("块级作用域")])]),a._v(" "),e("li",[a._v("let和const不能"),e("code",[a._v("重复声明")]),a._v("，而var可以")]),a._v(" "),e("li",[a._v("let 和 const 不会声明提前(即存在"),e("code",[a._v("暂存性死区")]),a._v(")")]),a._v(" "),e("li",[a._v("const"),e("code",[a._v("声明必须赋值")])])]),a._v(" "),e("h4",{attrs:{id:"_1-var声明的变量会挂载在window上-而let和const声明的变量不会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-var声明的变量会挂载在window上-而let和const声明的变量不会"}},[a._v("#")]),a._v(" (1) var声明的变量会挂载在window上，而let和const声明的变量不会：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a = 100;\nconsole.log(a,window.a);    // 100 100\nlet b = 10;\nconsole.log(b,window.b);    // 10 undefined\nconst c = 1;\nconsole.log(c,window.c);    // 1 undefined\n")])])]),e("h4",{attrs:{id:"_2-var声明变量存在变量提升-let和const不存在变量提升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-var声明变量存在变量提升-let和const不存在变量提升"}},[a._v("#")]),a._v(" (2) var声明变量存在变量提升，let和const不存在变量提升")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log(a); // undefined  ===>  a已声明还没赋值，默认得到undefined值\nvar a = 100;\nconsole.log(b); // 报错：b is not defined  ===> 找不到b这个变量\nlet b = 10;\nconsole.log(c); // 报错：c is not defined  ===> 找不到c这个变量\nconst c = 10;\n")])])]),e("h4",{attrs:{id:"_3-let和const声明形成块作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-let和const声明形成块作用域"}},[a._v("#")]),a._v(" (3) let和const声明形成块作用域")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if(1){\n    var a = 100;\n    let b = 10;\n}\nconsole.log(a); // 100\nconsole.log(b)  // 报错：b is not defined  ===> 找不到b这个变量\n//\nif(1){\n    var a = 100;     \n    const c = 1;\n}\n console.log(a); // 100\n console.log(c)  // 报错：c is not defined  ===> 找不到c这个变量\n")])])]),e("h4",{attrs:{id:"_4-同一作用域下let和const不能重复声明-而var可以"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-同一作用域下let和const不能重复声明-而var可以"}},[a._v("#")]),a._v(" (4) 同一作用域下let和const不能重复声明，而var可以")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a = 100;\nconsole.log(a); // 100\nvar a = 10;\nconsole.log(a); // 10\nlet a = 100;\nlet a = 10;\n//  控制台报错：Identifier 'a' has already been declared  ===> 标识符a已经被声明了。\n")])])]),e("h4",{attrs:{id:"_5-暂存死区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-暂存死区"}},[a._v("#")]),a._v(" (5) 暂存死区")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a = 100;\nif(1){\n    a = 10;\n    let a = 1;\n    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域查找变量a，\n    // 而这时，还未到声明时候，所以控制台Error:a is not defined\n    // 即let 和 const 不会声明提前\n}\n")])])]),e("h4",{attrs:{id:"_6-const一旦声明必须赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-const一旦声明必须赋值"}},[a._v("#")]),a._v(" (6) const一旦声明必须赋值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("一旦声明必须赋值,不能使用null占位。声明后不能再修改如果声明的是引用类型数据，可以修改其属性\nconst a = 100; \nconst list = [];\nlist[0] = 10;\nconsole.log(list);　　// [10]\nconst obj = {a:100};\nobj.name = 'apple';\nobj.a = 10000;\nconsole.log(obj);　　// {a:10000,name:'apple'}\n")])])]),e("h2",{attrs:{id:"_3-数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型"}},[a._v("#")]),a._v(" 3.  数据类型")]),a._v(" "),e("h3",{attrs:{id:"_3-1-数据类型的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据类型的分类"}},[a._v("#")]),a._v(" 3-1.数据类型的分类")]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("基本类型")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("string（字符串）-- 原始类型")]),a._v(" "),e("li",[a._v("boolean（布尔值）-- 原始类型")]),a._v(" "),e("li",[a._v("number（数字）--原始类型")]),a._v(" "),e("li",[a._v("symbol（符号）--原始类型")]),a._v(" "),e("li",[a._v("null（空值）")]),a._v(" "),e("li",[a._v("undefined（未定义）")]),a._v(" "),e("li",[a._v("BigInt（BigInt比Number支持范围更大的整数值，BigInt支持"),e("code",[a._v("(2^63-1)")]),a._v("，Number精度在"),e("code",[a._v("(2^53-1)")]),a._v("范围内。BigInt(10)值为："),e("code",[a._v("10n")]),a._v("）")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("对象类型(引用类型)，有以下3种")]),a._v("：")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("A.内置对象/原生对象")])]),a._v(" "),e("ul",[e("li",[a._v("String、Number、Boolean、Array、Date、RegExp、Math、 Error、 Object、Function、 Global")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("B.宿主对象")])]),a._v(" "),e("ol",[e("li",[a._v("BOM对象：Window、Navigator、Screen、History、Location")]),a._v(" "),e("li",[a._v("DOM对象：Document、Body、Button、Canvas等")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("C.自定义对象")]),a._v("--(指由用户创建的对象，兼容性问题需要由编写者注意)")])])])])]),a._v(" "),e("p",[e("strong",[a._v("扩展：什么是内置对象/原生对象，宿主对象")])]),a._v(" "),e("ul",[e("li",[a._v("ECMA-262 把"),e("strong",[a._v("原生对象")]),a._v("（native object）定义为“"),e("code",[a._v("独立")]),a._v("于"),e("code",[a._v("宿主环境")]),a._v("的 "),e("code",[a._v("ECMAScript")]),a._v(" 实现提供的"),e("code",[a._v("对象")]),a._v("”，内置对象属于原生对象。")]),a._v(" "),e("li",[a._v("何为“宿主对象”？ ECMAScript中的“宿主”当然就是我们"),e("code",[a._v("网页的运行环境")]),a._v("，即“"),e("code",[a._v("操作系统")]),a._v("”和“"),e("code",[a._v("浏览器")]),a._v("”。所有非原生对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);