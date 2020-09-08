(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{399:function(t,v,_){"use strict";_.r(v);var r=_(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#array"}},[t._v("array")])])])]),_("p"),t._v(" "),_("p",[t._v("[TOC]")]),t._v(" "),_("h1",{attrs:{id:"js标准库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js标准库","aria-hidden":"true"}},[t._v("#")]),t._v(" JS标准库")]),t._v(" "),_("p",[t._v("这部分主要整理转载自阮一峰老师的文章：https://wangdoc.com/javascript/stdlib/index.html")]),t._v(" "),_("p",[t._v("主要讲解JavaScript的标准库")]),t._v(" "),_("h2",{attrs:{id:"array"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#array","aria-hidden":"true"}},[t._v("#")]),t._v(" array")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Array.isArray")]),t._v(" "),_("td",[t._v("返回一个布尔值，表示参数是否为数组。")]),t._v(" "),_("td",[_("code",[t._v("Array.isArray(arr)")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.valueOf()")]),t._v(" "),_("td",[t._v("返回数组本身")]),t._v(" "),_("td",[_("code",[t._v("[1,2].valueOf()")]),t._v(" => "),_("code",[t._v("[1,2]")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.toString()")]),t._v(" "),_("td",[t._v("返回数组的字符串形式")]),t._v(" "),_("td",[_("code",[t._v("[1, 'hello', {a: 1}].toString()")]),t._v(" => "),_("code",[t._v('"1,hello,[object Object]"')])])]),t._v(" "),_("tr",[_("td",[t._v("arr.push(1)")]),t._v(" "),_("td",[t._v("在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组")]),t._v(" "),_("td",[_("code",[t._v("arr = []; arr.push(1)")]),t._v(" => "),_("code",[t._v("[1]")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.pop()")]),t._v(" "),_("td",[t._v("用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。")]),t._v(" "),_("td",[_("code",[t._v("arr = ['a', 'b']; arr.pop()")]),t._v("=> "),_("code",[t._v("['a']")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.shift()")]),t._v(" "),_("td",[t._v("删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。")]),t._v(" "),_("td",[_("code",[t._v("a = ['a', 'b']; a.shift()")]),t._v("=> "),_("code",[t._v("['b']")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.unshift('x')")]),t._v(" "),_("td",[t._v("在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。")]),t._v(" "),_("td",[_("code",[t._v("a = ['a', 'b']; a.unshift('x')")]),t._v("=> "),_("code",[t._v("['c','a','b']")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.join(' ')")]),t._v(" "),_("td",[t._v("以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。")]),t._v(" "),_("td",[_("code",[t._v("a = [1, 2]; a.join(' ')")]),t._v(" =>"),_("code",[t._v("'1 2'")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.concat(3)")]),t._v(" "),_("td",[t._v("用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。")]),t._v(" "),_("td",[_("code",[t._v("[2].concat(3)")]),t._v("=> "),_("code",[t._v("[2, 3]")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.reverse()")]),t._v(" "),_("td",[t._v("用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。")]),t._v(" "),_("td",[_("code",[t._v("a = [1, 2, 3]; a = [1, 2, 3]")]),t._v("=> "),_("code",[t._v("[3, 2, 1]")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.slice(start, end)")]),t._v(" "),_("td",[t._v("提取目标数组的一部分，返回一个新数组，原数组不变。第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）如果省略第二个参数，则一直返回到原数组的最后一个成员。")]),t._v(" "),_("td",[_("code",[t._v("a = [1, 2, 3]; a.slice(1, 2)")]),t._v(" => "),_("code",[t._v("[2]")])])]),t._v(" "),_("tr",[_("td",[t._v("arr.splice(start, count, addElement1, ...)")]),t._v(" "),_("td",[t._v("删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])])])}],!1,null,null,null);a.options.__file="readme.md";v.default=a.exports}}]);