(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{555:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[t._v("#")]),t._v(" MVC")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ul",[a("li",[t._v("描述")]),t._v(" "),a("li",[t._v("Controller : 控制器")]),t._v(" "),a("li",[t._v("Action ：请求的基本单位")]),t._v(" "),a("li",[t._v("Interceptor ： 拦截器")]),t._v(" "),a("li",[t._v("Handler ： 处理器")]),t._v(" "),a("li",[t._v("Render ：渲染器")]),t._v(" "),a("li",[t._v("Session")]),t._v(" "),a("li",[t._v("Cookie")])]),t._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("由于 Jboot 是基于 JFinal 进行二次开发的，因此 Jboot 的 MVC 相关功能是来至于 JFinal 提供的功能。")]),t._v(" "),a("p",[t._v("JFinal 的相关文档： "),a("a",{attrs:{href:"https://www.jfinal.com/doc/3-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/3-1"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"controller-控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-控制器"}},[t._v("#")]),t._v(" Controller ：控制器")]),t._v(" "),a("p",[t._v("Controller 是 JFinal 的核心类之一，是 MVC 设计模式中的控制器。基于 Jboot 开发的控制器需要继承 Controller。Controller 也是定义 Action 方法的地点，一个 Controller 可以包含多个 Action 。")]),t._v(" "),a("p",[t._v("另外，JbootController 扩展了 JFinal 的 Controller 类，增加了 Jwt、\bFlashMessage 和 其他一些实用的方法。")]),t._v(" "),a("p",[t._v("建议基于 Jboot 开发的应用，都继承至 JbootController。（备注：只是建议、而非必须。）")]),t._v(" "),a("h2",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),a("p",[t._v("Action 的相关文档请参考： "),a("a",{attrs:{href:"https://www.jfinal.com/doc/3-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/3-2"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"interceptor-拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interceptor-拦截器"}},[t._v("#")]),t._v(" Interceptor ： 拦截器")]),t._v(" "),a("p",[t._v("Interceptor 拦截器的相关文档请参考 "),a("a",{attrs:{href:"https://www.jfinal.com/doc/4-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/4-2"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"handler-处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler-处理器"}},[t._v("#")]),t._v(" Handler ： 处理器")]),t._v(" "),a("p",[t._v("Handler  处理器是 JFinal 的核心，用于预先处理 Web 的所有请求，其架构可以参考 "),a("a",{attrs:{href:"https://www.jfinal.com/doc/13-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/13-2"),a("OutboundLink")],1),t._v(" ，用法参考："),a("a",{attrs:{href:"https://www.jfinal.com/doc/2-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/2-7"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"render-渲染器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-渲染器"}},[t._v("#")]),t._v(" Render ：渲染器")]),t._v(" "),a("p",[t._v("Render 请参加 JFinal 的文档 "),a("a",{attrs:{href:"https://www.jfinal.com/doc/3-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jfinal.com/doc/3-7"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),a("p",[t._v("Jboot 增强了 JFinal 的 Session 功能，同时 Session 默认使用了 Jboot 自带的缓存实现，当 Jboot 开启分布式缓存之后（比如 redis ）。Session 就会自动有了分布式 Session 的功能。")]),t._v(" "),a("p",[t._v("开启分布式缓存，值需要添加如下配置：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jboot.cache.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("redis")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jboot.cache.redis.host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jboot.cache.redis.port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("3306")]),t._v("\njboot.cache.redis.password\njboot.cache.redis.database\njboot.cache.redis.timeout\n")])])]),a("blockquote",[a("p",[t._v("更多关于缓存的配置请参考【缓存】章节")])]),t._v(" "),a("p",[t._v("添加以上配置后，我们在 Controller 中就可以使用如下代码操作 Session 了。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JbootController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置 session 内容")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSessionAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your session value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当然，也可以通过如下来对 Session 进行更多的配置：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jboot.web.session.cookieName            #cookie 的名称\njboot.web.session.cookieDomain          #cookie 的域名\njboot.web.session.cookieContextPath     #cookie 的路径\njboot.web.session.maxInactiveInterval   #cookie 的刷新时间\njboot.web.session.cookieMaxAge          #cookie 的有效时间\njboot.web.session.cacheName             #Session的缓存名称\njboot.web.session.cacheType             #Session的缓存类型（不配置的情况使用jboot的默认缓存）\n")])])]),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("p",[t._v("Jboot 增强了 JFinal 的 Cookie 功能，同时提供了 CookieUtil 工具类，用于对 Cookie 进行加密安全保护 Cookie 信息安全。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置 Cookie 数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读取 Cookie 数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jboot.web.cookieEncryptKey")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("cookie安全秘钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jboot.web.cookieMaxAge")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("60 * 60 * 24 * 2")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);