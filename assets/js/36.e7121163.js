(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{551:function(t,v,e){"use strict";e.r(v);var _=e(6),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("ul",[e("li",[t._v("JWT 简介")]),t._v(" "),e("li",[t._v("JWT 配置")]),t._v(" "),e("li",[t._v("JWT 使用")]),t._v(" "),e("li",[t._v("注意事项")])]),t._v(" "),e("h2",{attrs:{id:"jwt-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-简介"}},[t._v("#")]),t._v(" JWT 简介")]),t._v(" "),e("p",[t._v("JWT 是 Json web token 的简称, 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（RFC 7519).该 token 被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该 token 也可直接被用于认证，也可被加密。")]),t._v(" "),e("h2",{attrs:{id:"jwt-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-配置"}},[t._v("#")]),t._v(" JWT 配置")]),t._v(" "),e("p",[t._v("在使用 JWT 之前，我们需要对 JWT 进行一些必要的配置。")]),t._v(" "),e("ul",[e("li",[t._v("jboot.web.jwt.httpHeaderName：配置 JWT 的 http 头的 key，默认为 "),e("code",[t._v("Jwt")]),t._v("，可以不配置。")]),t._v(" "),e("li",[t._v("jboot.web.jwt.secret：配置 JWT 的密钥，必须配置，否则使用 jwt 会抛出异常或给出警告。")]),t._v(" "),e("li",[t._v("jboot.web.jwt.validityPeriod：配置 JWT 的过期时间，默认永不不过期。")])]),t._v(" "),e("h2",{attrs:{id:"jwt-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-使用"}},[t._v("#")]),t._v(" JWT 使用")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("JbootController")]),t._v(" 中，新增了如下几个用于操作 JWT 的方法，在使用 Jwt 之前，需要在使用 Jwt 的 Controller\n里添加注解 "),e("code",[t._v("@EnableJwt")]),t._v(" ，才能够正常的生成和刷新 Jwt 。当有很多个 Controller 都使用 Jwt 的话，可以直接 创建\n一个 BaseController，然后在 BaseController 里添加注解 "),e("code",[t._v("@EnableJwt")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("setJwtAttr()：设置 jwt 的 key 和 value")]),t._v(" "),e("li",[t._v("setJwtMap()：把整个 map的key和value 设置到 jwt")]),t._v(" "),e("li",[t._v("getJwtAttr()：获取 已经设置进去的 jwt 信息")]),t._v(" "),e("li",[t._v("getJwtAttrs()：获取 所有已经设置进去的 jwt 信息")]),t._v(" "),e("li",[t._v("getJwtPara()：获取客户端传进来的 jwt 信息，若 jwt 超时或者不被信任，那么获取到的内容为 null")]),t._v(" "),e("li",[t._v("getJwtParaToString()")]),t._v(" "),e("li",[t._v("getJwtParaToInt()")]),t._v(" "),e("li",[t._v("getJwtParaToLong()")]),t._v(" "),e("li",[t._v("getJwtParaToBigInteger()")]),t._v(" "),e("li",[t._v("getJwtParas()")])]),t._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("在服务端通过 "),e("code",[t._v("setJwtAttr()")]),t._v(" 方法设置 JWT 后，Http 的响应头会添一个名称为 "),e("code",[t._v("Jwt")]),t._v(" 的属性\n（可以通过 "),e("code",[t._v("jboot.web.jwt.httpHeaderName")]),t._v(" 进行配置）。")]),t._v(" "),e("p",[t._v("此时，客户端（浏览器、小程序、APP等）发现 Http 头有该属性后，需要客户端主动把该值存储起来。\nAPP存储到数据库、浏览和小程序可以存储到 "),e("code",[t._v("localStorage")]),t._v(" 等。\n当客户端进行 Http 请求的时候，需要在 Http 头添加下属性为 "),e("code",[t._v("Jwt")]),t._v("、值为之前存储数据 的请求头。")]),t._v(" "),e("p",[t._v("当客户端正确添加 "),e("code",[t._v("Jwt")]),t._v(" 的 Http 请求头的时候，服务端可以通过 "),e("code",[t._v("getJwtPara()")]),t._v("\n方法获取到客户端传入的内容。")]),t._v(" "),e("p",[e("strong",[t._v("注意：")]),t._v(" 接收客户端传入的Jwt值是通过"),e("code",[t._v("getJwtPara()")]),t._v("方法，而不是 "),e("code",[t._v("getJwtAttr()")]),t._v("。")])])}),[],!1,null,null,null);v.default=a.exports}}]);