(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{472:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-区别"}},[s._v("#")]),s._v(" 1.区别")]),s._v(" "),a("h2",{attrs:{id:"_1-1-共同点：都是用来改变-this-的指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-共同点：都是用来改变-this-的指向"}},[s._v("#")]),s._v(" 1.1 共同点：都是用来改变 this 的指向")]),s._v(" "),a("h2",{attrs:{id:"_1-2call-和-apply-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2call-和-apply-区别"}},[s._v("#")]),s._v(" 1.2call 和 apply 区别")]),s._v(" "),a("h3",{attrs:{id:"_1-2-1-相同点：都是调用对象的一个方法，用另一个对象替换当前对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-相同点：都是调用对象的一个方法，用另一个对象替换当前对象"}},[s._v("#")]),s._v(" 1.2.1 相同点：都是调用对象的一个方法，用另一个对象替换当前对象")]),s._v(" "),a("p",[s._v("​ 例如：B.call(A, args1,args2);即 A 对象调用 B 对象的方法")]),s._v(" "),a("p",[s._v("​ F.apply(G, arguments);即 G 对象应用 F 对象的方法")]),s._v(" "),a("h3",{attrs:{id:"_1-2-2-不同点：call-方法的作用和-apply-方法类似，区别就是call-方法接受的是参数列表，而apply-方法接受的是一个参数数组。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-不同点：call-方法的作用和-apply-方法类似，区别就是call-方法接受的是参数列表，而apply-方法接受的是一个参数数组。"}},[s._v("#")]),s._v(" 1.2.2 不同点：call()方法的作用和 apply() 方法类似，区别就是"),a("code",[s._v("call()")]),s._v("方法接受的是"),a("strong",[s._v("参数列表")]),s._v("，而"),a("code",[s._v("apply()")]),s._v("方法接受的是"),a("strong",[s._v("一个参数数组")]),s._v("。")]),s._v(" "),a("p",[s._v("call()的第一个参数是 this 要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为 null、undefined 的时候，默认指向 window；")]),s._v(" "),a("p",[s._v("apply()：第一个参数是 this 要指向的对象，第二个参数是数组")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义一个空的对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//this是指obj")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后面的值需要用[]括起来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//直接写")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_1-3call-和-bind-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3call-和-bind-的区别"}},[s._v("#")]),s._v(" 1.3call()和 bind()的区别")]),s._v(" "),a("h3",{attrs:{id:"_1-3-1-相同点：都是用来改变-this-的指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-相同点：都是用来改变-this-的指向"}},[s._v("#")]),s._v(" 1.3.1 相同点：都是用来改变 this 的指向")]),s._v(" "),a("h3",{attrs:{id:"_1-3-2-不同点：call-改过-this-的指向后，会再执行函数，bind-改过-this-后，不执行函数，会返回一个绑定新-this-的函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-不同点：call-改过-this-的指向后，会再执行函数，bind-改过-this-后，不执行函数，会返回一个绑定新-this-的函数"}},[s._v("#")]),s._v(" 1.3.2 不同点：call()改过 this 的指向后，会再执行函数，bind()改过 this 后，不执行函数，会返回一个绑定新 this 的函数")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-j line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-j"}},[a("code",[s._v("function f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("{")]),s._v("\n  consol"),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("e.")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token conjunction variable"}},[s._v('"')]),s._v("看我怎么被调用"),a("span",{pre:!0,attrs:{class:"token conjunction variable"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v(";")]),s._v("\n\tconsol"),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("e.")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),s._v("指向this\n"),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("}")]),s._v("\nvar obj "),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("f.")]),s._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),s._v("直接调用函数\nvar g "),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("f.")]),s._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),s._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("不能调用函数\ng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token verb keyword"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token adverb builtin"}},[s._v("/")]),s._v("此时才调用函数\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("未完待续...")])])}),[],!1,null,null,null);t.default=r.exports}}]);