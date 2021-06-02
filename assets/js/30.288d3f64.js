(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{545:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件机制"}},[t._v("#")]),t._v(" 事件机制")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ul",[a("li",[t._v("为什么要事件机制")]),t._v(" "),a("li",[t._v("Jboot 事件机制的使用")])]),t._v(" "),a("h2",{attrs:{id:"为什么要事件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要事件机制"}},[t._v("#")]),t._v(" 为什么要事件机制？")]),t._v(" "),a("p",[t._v("答案是：为了解耦，保持自身的独立和简洁，从而降低系统复杂度。")]),t._v(" "),a("p",[t._v("举个例子：\n"),a("strong",[t._v("用户注册")]),t._v("功能几乎是互联网系统必备的功能，用户注册的功能非常简单，用户提交注册信息，系统验证用户合法性后保存信息到数据库。")]),t._v(" "),a("p",[t._v("但是，由于运营等需求，可能在某个时间点需要增加某个功能，例如：")]),t._v(" "),a("ul",[a("li",[t._v("在元旦的时候，注册用户\b添加2个积分。")]),t._v(" "),a("li",[t._v("\b新的需求用户注册成功后，需要发送一封邮件。")]),t._v(" "),a("li",[t._v("在情人节给注册邀请人10积分。")]),t._v(" "),a("li",[t._v("公司老板今天的生日、注册自动升级为xxx会员。")]),t._v(" "),a("li",[t._v("... 等等等等")])]),t._v(" "),a("p",[t._v("同时，在稍微复杂的系统里，一个系统往往可能会有多个注册入口，比如网页注册、APP通过api注册、微信用户自动登录时注册、第三方用户登录时进行注册...")]),t._v(" "),a("p",[t._v("那么，此时，注册功能每添加一个新的需求，就需要修改很多地方的代码...出现很多的代码冗余。")]),t._v(" "),a("p",[t._v("如何解决呢？")]),t._v(" "),a("p",[t._v("此时就用到了事件机制了。在用户注册的时候，系统只需要发送一个新用户注册的事件，让事件的监听器去获取这个事件后，执行自己的业务逻辑。")]),t._v(" "),a("p",[t._v("每个需求，就是一个事件监听器。当有新的需求出现的时候，我们只需要写一个新的事件监听器就可以了，其他任何地方的所有代码都不需要改动。")]),t._v(" "),a("h2",{attrs:{id:"jboot-事件机制的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jboot-事件机制的使用"}},[t._v("#")]),t._v(" Jboot 事件机制的使用")]),t._v(" "),a("p",[t._v("事件机制由两部分组成，一个是发送者，一个是接收者。发送者只是一个抽象的概念，在 Jboot 中并没有这个对象的存在。")]),t._v(" "),a("p",[t._v("当我们需要发送事件的时候，只需要调用如下代码就可以了。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Jboot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("事件监听器如何监听到这个事件呢，只需要2步：")]),t._v(" "),a("ol",[a("li",[t._v("编写一个类（任意名称）实现 "),a("code",[t._v("JbootEventListener")]),t._v(" 接口")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("@EventConfig")]),t._v(" 注解配置上这个编写的类")])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEventListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JbootEventListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JbootEvent")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get data:"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此时，当有 "),a("code",[t._v("eventName")]),t._v(" , "),a("code",[t._v("event1")]),t._v(" , "),a("code",[t._v("event2")]),t._v(" 任何一个事件发送的时候，以上的 "),a("code",[t._v("MyEventListener.onEvent")]),t._v(" 都会被触发执行。")]),t._v(" "),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("p",[t._v("事件机制和 MQ（消息队列）很相似，主要区别是在于事件机制只是在 Jvm 应用内执行，解决的业务之间的耦合问题。")]),t._v(" "),a("p",[t._v("MQ（消息队列）解决的是分布式下，多个系统的事件（或者消息）发送和监听，MQ 需要第三方的 "),a("strong",[t._v("中间件")]),t._v(" ，例如：Redis、rabbitMQ、activeMQ...等。")])])}),[],!1,null,null,null);s.default=e.exports}}]);