(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{568:function(t,e,o){"use strict";o.r(e);var r=o(6),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"undertow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#undertow"}},[t._v("#")]),t._v(" Undertow")]),t._v(" "),o("h2",{attrs:{id:"目录"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),o("ul",[o("li",[t._v("Undertow基本配置")]),t._v(" "),o("li",[t._v("其他扩展")])]),t._v(" "),o("h2",{attrs:{id:"undertow基本配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#undertow基本配置"}},[t._v("#")]),t._v(" Undertow基本配置")]),t._v(" "),o("p",[t._v("由于 Jboot 是依赖 "),o("code",[t._v("Jfinal-Undertow")]),t._v(" 进行开发的，因此 "),o("code",[t._v("Jfinal-Undertow")]),t._v(" 的所有配置 Jboot 都会支持，"),o("code",[t._v("Jfinal-Undertow")]),t._v(" 的配置文档在：https://www.jfinal.com/doc/1-4")]),t._v(" "),o("h2",{attrs:{id:"其他扩展"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#其他扩展"}},[t._v("#")]),t._v(" 其他扩展")]),t._v(" "),o("h3",{attrs:{id:"扩展1-配置位置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#扩展1-配置位置"}},[t._v("#")]),t._v(" 扩展1：配置位置")]),t._v(" "),o("p",[t._v("在 Jboot 应用中，除了可以在 resource 目录下的 "),o("code",[t._v("undertow.txt")]),t._v(" 文件进行配置以外，也可以在 "),o("code",[t._v("jboot.properties")]),t._v(" 文件里配置。")]),t._v(" "),o("p",[t._v("\b同时可以通过启动参数 和 环境变量等进行配置，Undertow 启动的时候读取配置内容的优先顺序是：")]),t._v(" "),o("p",[o("code",[t._v("启动参数")]),t._v(" > "),o("code",[t._v("JVM属性")]),t._v(" > "),o("code",[t._v("环境变量")]),t._v(" > "),o("code",[t._v("jboot.properties")]),t._v(" > "),o("code",[t._v("undertow.txt")])]),t._v(" "),o("p",[t._v("所以，假设同时在 "),o("code",[t._v("jboot.porperties")]),t._v(" 和 "),o("code",[t._v("undertow.txt")]),t._v(" 都配置了 "),o("code",[t._v("undertow.port")]),t._v(" ，那么 "),o("code",[t._v("undertow.txt")]),t._v(" 的配置将不会生效。（因为会被 "),o("code",[t._v("jboot.porperties")]),t._v(" 覆盖）。")]),t._v(" "),o("p",[t._v("关于配置问题，更多请移步到："),o("RouterLink",{attrs:{to:"/docs/config.html"}},[t._v("配置文件")]),t._v("。")],1),t._v(" "),o("h3",{attrs:{id:"扩展2-undertow-随机端口号"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#扩展2-undertow-随机端口号"}},[t._v("#")]),t._v(" 扩展2：Undertow 随机端口号")]),t._v(" "),o("p",[t._v("在\b分布式等情况下，应用启动的目的，可能只是为了暴露 "),o("code",[t._v("RPC")]),t._v(" 服务，本身应用是不提供 WEB 功能，此时 Undertow 的端口号就显得无关重要了。")]),t._v(" "),o("p",[t._v("在这种情况下，需要把 Undertow 的端口配置为随机端口，配置内容如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("undertow.port = * \n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);