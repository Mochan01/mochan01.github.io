(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+qNp":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("q1tI"),a=e.n(r),i=e("vOnD"),o=a.a.createElement,u=i.c.div.withConfig({componentId:"rikmns-0"})(["width:100%;background-image:url(/",');background-repeat:no-repeat;background-size:cover;background-position:center;border-radius:10px;&:before{content:"";display:block;padding-top:',"%;}"],(function(t){return t.image}),(function(t){return t.ratio})),c=Object(r.memo)((function(t){var n=t.image,e=t.ratio;return o(a.a.Fragment,null,o(u,{image:n,ratio:e}))}))},"/0+H":function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=r(e("q1tI")),i=e("lwAK");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,r=t.hybrid,a=void 0!==r&&r,i=t.hasQuery;return e||a&&(void 0!==i&&i)}n.isInAmpMode=o,n.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"3Vrn":function(t,n,e){"use strict";var r=e("o0o1"),a=e.n(r),i=e("q1tI"),o=e.n(i).a.createElement;n.a=function(t,n){var e=Object(i.useState)(t[Object.keys(t)[0]]),r=e[0],u=e[1],c=!0,l=function(t){c&&u(t)},f=function(t){return new Promise((function(n){var e=setTimeout((function(){return n(void 0)}),t);c||clearTimeout(e)}))};return Object(i.useEffect)((function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n(l,f);case 1:case"end":return t.stop()}}),null,null,null,Promise),function(){return c=!1}}),[]),{imageUrl:r,preloaders:Object.keys(t).map((function(n,e){return o("link",{key:e,rel:"preload",href:"/"+t[n],as:"image"})}))}}},"8Kt/":function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=r(e("q1tI")),i=r(e("Xuae")),o=e("lwAK"),u=e("FYa8"),c=e("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[a.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function f(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===a.default.Fragment?t.concat(a.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}n.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(t,n){return t.reduce((function(t,n){var e=a.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(f,[]).reverse().concat(l(n.inAmpMode)).filter(function(){var t=new Set,n=new Set,e=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);t.has(o)?i=!1:t.add(o)}switch(a.type){case"title":case"base":n.has(a.type)?i=!1:n.add(a.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(a.props.hasOwnProperty(l))if("charSet"===l)e.has(l)?i=!1:e.add(l);else{var f=a.props[l],p=r[l]||new Set;p.has(f)?i=!1:(p.add(f),r[l]=p)}}}return i}}()).reverse().map((function(t,n){var e=t.key||n;return a.default.cloneElement(t,{key:e})}))}var d=i.default();function m(t){var n=t.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(e){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:e,inAmpMode:c.isInAmpMode(t)},n)}))}))}m.rewind=d.rewind,n.default=m},BY9L:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var r=e("q1tI"),a=e.n(r),i=e("vOnD"),o=e("ZYEL"),u=e("xVSB"),c=e("clRN"),l=e("dGgI"),f=a.a.createElement,s=i.c.div.withConfig({componentId:"sc-1nuf6s3-0"})(["width:100%;background-color:",";"],u.a.blue),p=i.c.div.withConfig({componentId:"sc-1nuf6s3-1"})([""," "," width:100%;max-width:1025px;background-color:#fff;margin:0 auto;min-height:100vh;position:relative;padding-bottom:100px;"],o.c,o.d),d=i.c.div.withConfig({componentId:"sc-1nuf6s3-2"})(["",""],o.b),m=i.c.div.withConfig({componentId:"sc-1nuf6s3-3"})(['width:100%;top:0;left:0;right:0;padding-top:92px;position:fixed;z-index:1;&:before{width:100%;height:100%;content:"";top:0;left:0;right:0;margin:auto;max-width:1025px;position:absolute;background-color:#fff;}']),b=Object(r.memo)((function(t){var n=t.children,e=c.c.useContainer().setBgColor;return Object(r.useEffect)((function(){setTimeout((function(){e(u.a.blue)}),l.a.transitionAnimation)}),[]),f(a.a.Fragment,null,f(s,null,f(p,null,f(m,null),f(d,null,n))))}))},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},"GpY+":function(t,n,e){"use strict";var r=e("q1tI"),a=e("nOHt");n.a=function(t){var n=Object(a.useRouter)();Object(r.useEffect)((function(){n.beforePopState((function(n){return t(0),!0}))}))}},Ijbi:function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},L3mr:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("vOnD"),u=e("2t/h"),c=e("mFIh"),l=i.a.createElement;function f(){var t=Object(r.a)(["\n      font-size: 18px;\n    "]);return f=function(){return t},t}function s(){var t=Object(r.a)(["\n      font-size: 28px;\n    "]);return s=function(){return t},t}var p=o.c.div.withConfig({componentId:"sc-10j5n4e-0"})(["color:#176D8E;font-weight:bold;& > .title{"," font-size:36px;",";}& > .subTitle{"," font-size:24px;",";}"],u.a,c.a.lessThan("sp")(s()),u.b,c.a.lessThan("sp")(f())),d=Object(a.memo)((function(t){var n=t.title,e=t.subTitle;return l(i.a.Fragment,null,l(p,null,l("div",{className:"title"},n),e&&l("div",{className:"subTitle"},e)))}))},OZR5:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("vOnD"),u=e("mFIh"),c=i.a.createElement;function l(){var t=Object(r.a)(["\n    margin-bottom: ","px;\n  "]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n    margin-bottom: ","px;\n  "]);return f=function(){return t},t}var s=o.c.div.withConfig({componentId:"uh154t-0"})(["margin-bottom:","px;",";",";"],(function(t){return t.size.pc}),u.a.lessThan("tb")(f(),(function(t){return t.size.tb})),u.a.lessThan("sp")(l(),(function(t){return t.size.sp}))),p=Object(a.memo)((function(t){var n=t.size,e=t.children;return c(i.a.Fragment,null,c(s,{size:n},e))}))},Q3XW:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menus/menu2/act/2",function(){return e("YV1v")}])},RIqP:function(t,n,e){var r=e("Ijbi"),a=e("EbDI"),i=e("Bnag");t.exports=function(t){return r(t)||a(t)||i()}},Xuae:function(t,n,e){"use strict";var r=e("lwsE"),a=e("PJYZ"),i=e("W8MJ"),o=e("7W2i"),u=e("a1gu"),c=e("Nsbk"),l=e("RIqP");function f(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var a=c(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return u(this,e)}}Object.defineProperty(n,"__esModule",{value:!0});var s=e("q1tI"),p=!1;n.default=function(){var t,n=new Set;function e(e){t=e.props.reduceComponentsToState(l(n),e.props),e.props.handleStateChange&&e.props.handleStateChange(t)}return function(u){o(l,u);var c=f(l);function l(t){var i;return r(this,l),i=c.call(this,t),p&&(n.add(a(i)),e(a(i))),i}return i(l,null,[{key:"rewind",value:function(){var e=t;return t=void 0,n.clear(),e}}]),i(l,[{key:"componentDidMount",value:function(){n.add(this),e(this)}},{key:"componentDidUpdate",value:function(){e(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),e(this)}},{key:"render",value:function(){return null}}]),l}(s.Component)}},YV1v:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return O}));var r=e("o0o1"),a=e.n(r),i=e("8Kt/"),o=e.n(i),u=e("q1tI"),c=e.n(u),l=e("GpY+"),f=e("L3mr"),s=e("hTSK"),p=e("BY9L"),d=e("mycq"),m=e("OZR5"),b=e("+qNp"),v=e("3Vrn"),h=e("lBPv"),g=c.a.createElement;function O(t){var n=t.setTransTime;Object(l.a)(n),Object(h.a)({color:"orange",prevHref:"/menus/menu2/act/1",nextHref:"/menus/menu2/act/3",pageProgress:{currentPage:2,pageAmount:6}});var e={anim1:"m2_2-6_anim1.png",anim2:"m2_2-6_anim2.png",anim3:"m2_2-6_anim3.png",anim4:"m2_2-6_anim4.png"},r=Object(v.a)(e,(function(t,n){return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,a.a.awrap(n(1e3));case 3:return t(e.anim2),r.next=6,a.a.awrap(n(1e3));case 6:return t(e.anim3),r.next=9,a.a.awrap(n(1e3));case 9:return t(e.anim4),r.next=12,a.a.awrap(n(3e3));case 12:t(e.anim1),r.next=0;break;case 15:case"end":return r.stop()}}),null,null,null,Promise)})),i=r.imageUrl,u=r.preloaders;return g(c.a.Fragment,null,g(o.a,null,g("title",null,"\u3053\u3053\u306b\u6ce8\u610f!\u6d77\u306e\u7279\u3061\u3087\u3046\u3068\u6d77\u3067\u306e\u884c\u52d5\u3092\u77e5\u308d\u3046")),g(p.a,null,g(m.a,{size:d.a.readableContentMB},g(f.a,{title:g(c.a.Fragment,null,g("ruby",null,"\u6d77",g("rt",null,"\u3046\u307f")),"\u306e\u7279\u3061\u3087\u3046\u3068\u6d77\u3067\u306e\u884c\u52d5\u3092\u77e5\u308d\u3046"),subTitle:g(c.a.Fragment,null,"1.",g("ruby",null,"\u6f6e",g("rt",null,"\u3057\u304a")),"\u306e\u6e80\u3061\u5f15\u304d\u3068\u6f6e\u306e\u6d41\u308c")})),g(m.a,{size:d.a.readableContentMB},g(s.a,{fontSize:d.a.readableContentTextSize},g("ruby",null,"\u6d77",g("rt",null,"\u3046\u307f")),"\u306b\u306f\u3001\u6708\u3068\u592a\u967d\u306e\u5f15\u529b\u306e\u529b\u3067\u6e80\u3061\u305f\u308a\u5f15\u3044\u305f\u308a\u3059\u308b\u300c\u6f6e\u6c50(\u6f6e\u306e\u6e80\u3061\u5f15\u304d)\u300d\u304c\u3042\u308a\u307e\u3059\u3002",g("br",null),g("br",null),"\u6d77\u306e\u9ad8\u3055(\u6f6e\u4f4d)\u304c\u4e00\u756a\u9ad8\u304f\u306a\u308b\u3053\u3068\u3092\u300c\u6e80\u6f6e\u300d\u3001\u4e00\u756a\u4f4e\u304f\u306a\u308b\u3053\u3068\u3092\u300c\u5e72\u6f6e\u300d\u3068\u3044\u3044\u3001",g("br",null),"\u305d\u306e\u65e5\u306b\u3088\u3063\u3066\u6e80\u6f6e\u3084\u5e72\u6f6e\u306b\u306a\u308b\u6642\u9593\u304c\u5909\u308f\u308a\u307e\u3059\u3002",g("br",null),"\u6f6e\u304c\u6e80\u3061\u3066\u304f\u308b\u3068\u304d\u306f\u3001\u305d\u308c\u307e\u3067\u9678\u3060\u3063\u305f\u6240\u306b\u6c34\u304c\u6765\u308b\u304b\u3082\u77e5\u308c\u307e\u305b\u3093\u3002",g("br",null),"\u9006\u306b\u3001\u6e80\u6f6e\u304b\u3089\u5e72\u6f6e\u306b\u9032\u3080\u3068\u304d\u3001\u3064\u307e\u308a\u6f6e\u304c\u5f15\u304f\u3068\u304d\u306f\u3001\u6c96\u306b\u5411\u304b\u3046\u5f37\u3044\u6d41\u308c\u304c\u3067\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",g("br",null),"\u6f6e\u306e\u6e80\u3061\u5f15\u304d\u306e\u52d5\u304d\u306b\u3064\u308c\u3066\u3067\u304d\u308b\u6d41\u308c\u3092\u300c\u6f6e\u6d41\u300d\u3068\u3044\u3044\u3001\u6642\u9593\u3068\u3068\u3082\u306b\u65b9\u5411\u3084\u5f37\u3055\u304c\u5909\u308f\u308a\u307e\u3059\u3002",g("br",null),"\u6f6e\u306e\u6e80\u3061\u5f15\u304d\u3084\u6f6e\u306e\u6d41\u308c\u3092\u77e5\u3063\u3066\u3001\u5b89\u5168\u306a\u884c\u52d5\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002",g("br",null))),u,g(b.a,{image:i,ratio:d.a.illustRatio})))}},ZYEL:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return l})),e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s}));var r=e("h4VS"),a=e("vOnD"),i=e("mFIh");function o(){var t=Object(r.a)(["\n    padding-right: 10px;\n    padding-left: 10px;\n  "]);return o=function(){return t},t}function u(){var t=Object(r.a)(["\n    padding-right: 30px;\n    padding-left: 30px;\n  "]);return u=function(){return t},t}var c=Object(a.b)(["padding-right:60px;padding-left:60px;",";",";"],i.a.lessThan("tb")(u()),i.a.lessThan("sp")(o())),l=Object(a.b)(["padding-top:200px;"]),f=(Object(a.b)(["padding-top:140px;"]),Object(a.b)(["padding-bottom:100px;"])),s=Object(a.b)(["z-index:0;max-width:864px;margin:0 auto;"])},hTSK:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("vOnD"),u=e("2t/h"),c=e("mFIh"),l=i.a.createElement;function f(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return f=function(){return t},t}function s(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return s=function(){return t},t}function p(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return p=function(){return t},t}var d=o.c.div.withConfig({componentId:"sc-7hvmhc-0"})(["color:#1A1D4A;"," line-height:1.7;",";",";",";"],u.b,c.a.greaterThan("tb")(p(),(function(t){return t.fontSize.pc})),c.a.lessThan("tb")(s(),(function(t){return t.fontSize.tb})),c.a.lessThan("sp")(f(),(function(t){return t.fontSize.sp}))),m=Object(a.memo)((function(t){var n=t.children,e=t.fontSize;return l(i.a.Fragment,null,l(d,{fontSize:e},n))}))},lBPv:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=e("q1tI"),i=e("clRN");function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}n.a=function(t,n){var e=i.a.useContainer(),r=e.visibleControlButtons,o=e.setVisibleControlButtons,c=Object(a.useState)(!1),l=c[0],f=c[1];Object(a.useEffect)((function(){f(n)}),[n&&n]),Object(a.useEffect)((function(){return o(u({},r,{},t)),function(){o(u({},r,{color:void 0,isFinish:void 0,prevHref:void 0,nextHref:void 0,prevClick:void 0,nextClick:void 0,pageProgress:void 0}))}}),[l])}},lwAK:function(t,n,e){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};Object.defineProperty(n,"__esModule",{value:!0});var a=r(e("q1tI"));n.AmpStateContext=a.createContext({})},mycq:function(t,n,e){"use strict";n.a={waveHeight:42,waveGapFromTop:130,controlUnitTopMargin:10,dangerImageRatio:42.857,readableContentTextSize:{pc:18,tb:18,sp:18},readableContentMB:{pc:35,tb:35,sp:35},illustRatio:50}}},[["Q3XW",0,2,1,3]]]);