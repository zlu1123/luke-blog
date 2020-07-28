(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{503:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_189-旋转数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_189-旋转数组"}},[s._v("#")]),s._v(" 189. 旋转数组")]),s._v(" "),n("p",[s._v("给定一个数组，将数组中的元素向右移动 "),n("em",[s._v("k")]),s._v(" 个位置，其中 "),n("em",[s._v("k")]),s._v(" 是非负数。")]),s._v(" "),n("h5",{attrs:{id:"示例1："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例1："}},[s._v("#")]),s._v(" 示例1：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入: [1,2,3,4,5,6,7] 和 k = 3\n输出: [5,6,7,1,2,3,4]\n解释:\n向右旋转 1 步: [7,1,2,3,4,5,6]\n向右旋转 2 步: [6,7,1,2,3,4,5]\n向右旋转 3 步: [5,6,7,1,2,3,4]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h5",{attrs:{id:"示例2："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例2："}},[s._v("#")]),s._v(" 示例2：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入: [-1,-100,3,99] 和 k = 2\n输出: [3,99,-1,-100]\n解释: \n向右旋转 1 步: [99,-1,-100,3]\n向右旋转 2 步: [3,99,-1,-100]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h5",{attrs:{id:"说明："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明："}},[s._v("#")]),s._v(" 说明：")]),s._v(" "),n("ul",[n("li",[s._v("尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。")]),s._v(" "),n("li",[s._v("要求使用空间复杂度为 O(1) 的 "),n("strong",[s._v("原地")]),s._v(" 算法")])]),s._v(" "),n("p",[s._v("以下是我本人的解题思路：")]),s._v(" "),n("h6",{attrs:{id:"_1-直接按照示例1和2步骤开始循环，每次将除最后一个数的所有数字向右移动一位，然后将最后一位数字移动至第一位。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接按照示例1和2步骤开始循环，每次将除最后一个数的所有数字向右移动一位，然后将最后一位数字移动至第一位。"}},[s._v("#")]),s._v(" 1.直接按照示例1和2步骤开始循环，每次将除最后一个数的所有数字向右移动一位，然后将最后一位数字移动至第一位。")]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @param {number} k\n * @return {void} Do not return anything, modify nums in-place instead.\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rotate")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("但是执行完以后，提示")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("执行结果：超出时间限制\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("所以此方法还是不行，接着想其他方案")]),s._v(" "),n("h6",{attrs:{id:"_2-看了官方的题解以后，发现方法一这种暴力解法会超出规定时间限制，应该是使用如下方式："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-看了官方的题解以后，发现方法一这种暴力解法会超出规定时间限制，应该是使用如下方式："}},[s._v("#")]),s._v(" 2.看了官方的题解以后，发现方法一这种暴力解法会超出规定时间限制，应该是使用如下方式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * @param {number[]} nums\n * @param {number} k\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar rotate = function(nums, k) {\n    let temp = 0;\n    let previous = 0;\n    for(let i = 0; i < k; i++) {\n        previous = nums[nums.length - 1]\n        for(let j = 0; j < nums.length; j++) {\n            temp = nums[j];\n            nums[j] = previous;\n            previous = temp;\n        }\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("官方使用的是：最简单的方法是旋转 k 次，每次将数组旋转 1 个元素。")]),s._v(" "),n("p",[s._v("时间复杂度：O(n*k)O(n∗k) 。每个元素都被移动 1 步（O(n)O(n)） k次（O(k)O(k)） 。")]),s._v(" "),n("p",[s._v("空间复杂度：O(1)O(1) 。没有额外空间被使用。")]),s._v(" "),n("p",[s._v("对比官方的暴力解法与我本人的解法来看，应该使用临时变量存储要位移的值，并且在赋值的时候不能重复赋新值，这样就会导致时间复杂度超出。")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("官方还有后续解法，待我学好以后，再记录下来")]),s._v(" "),n("p",[s._v("20200728更新：")]),s._v(" "),n("p",[s._v("看了官方的第二种解法，真的觉得自己很弱啊。先上官方的解法，在说我自己的想法")]),s._v(" "),n("h6",{attrs:{id:"方法-2：使用额外的数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法-2：使用额外的数组"}},[s._v("#")]),s._v(" 方法 2：使用额外的数组")]),s._v(" "),n("p",[s._v("算法")]),s._v(" "),n("p",[n("strong",[n("u",[s._v("我们可以用一个额外的数组来将每个元素放到正确的位置上，也就是原本数组里下标为 ii 的我们把它放到 (i+k)%数组长度(i+k)%数组长度 的位置。然后把新的数组拷贝到原数组中")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var rotate = function(nums, k) {\n    let array = []\n    for (let i = 0; i < nums.length; i++) {\n        array[(i + k) % nums.length] = nums[i];\n    }\n    for (let i = 0; i < nums.length; i++) {\n        nums[i] = array[i];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("复杂度分析")]),s._v(" "),n("p",[s._v("时间复杂度： O(n)O(n) 。将数字放到新的数组中需要一遍遍历，另一边来把新数组的元素拷贝回原数组。\n空间复杂度： O(n)O(n)。另一个数组需要原数组长度的空间。")]),s._v(" "),n("p",[s._v("我个人感觉比较精髓的时候，他通过取余数来确定了新数组的位置。其实这个应该在分析的时候就应该能看到，数学真的是所有理工科的基础啊。好好努力，学习数学")])])}),[],!1,null,null,null);a.default=e.exports}}]);