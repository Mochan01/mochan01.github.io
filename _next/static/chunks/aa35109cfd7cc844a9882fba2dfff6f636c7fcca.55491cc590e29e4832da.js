(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function l(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var s=o.props[f],l=r[f]||new Set;l.has(s)?i=!1:(l.add(s),r[f]=l)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var p=i.default();function b(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:l,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}b.rewind=p.rewind,e.default=b},BY9L:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("ZYEL"),u=n("xVSB"),c=n("clRN"),f=n("dGgI"),s=n("mycq"),d=n("fcue"),l=n("hGi/"),p=o.a.createElement,b=i.c.div.withConfig({displayName:"HeaderOvr__Main",componentId:"sc-1b7go8p-0"})(["position:fixed;width:100%;max-width:","px;padding-top:","px;background-color:#fff;z-index:4;top:0;left:0;right:0;margin:auto;"],s.a.contentMaxWidth,s.a.headerOvrGap+s.a.controlUnitTopMargin),h=Object(r.memo)((function(t){Object(l.a)(t);var e=Object(r.useState)(!0),n=e[0],i=e[1],a=c.a.useContainer().visibleControlButtons;return Object(r.useEffect)((function(){a.color||a.nextHref||a.prevHref?i(!0):i(!1)}),[a]),n?p(o.a.Fragment,null,p(b,null)):null})),v=o.a.createElement,m=i.c.div.withConfig({displayName:"Content__Wrapper",componentId:"sc-1nuf6s3-0"})(["width:100%;background-color:",';&:before,&:after{content:"";width:100%;height:100vh;position:fixed;top:0;left:0;}&:before{',"}&:after{background-repeat:no-repeat;","}"],u.a.blue,d.c,d.a),g=i.c.div.withConfig({displayName:"Content__Main",componentId:"sc-1nuf6s3-1"})([""," padding-top:","px;width:100%;max-width:","px;background-color:#fff;margin:0 auto;min-height:100vh;position:relative;padding-bottom:100px;z-index:1;"],a.c,s.a.headerOvrGap+s.a.controlUnitTopMargin+20,s.a.contentMaxWidth),y=i.c.div.withConfig({displayName:"Content__ChildWrapper",componentId:"sc-1nuf6s3-2"})(["",""],a.b),O=Object(r.memo)((function(t){var e=t.children,n=c.c.useContainer().setBgColor;return Object(r.useEffect)((function(){setTimeout((function(){n(u.a.blue)}),f.a.transitionAnimation)}),[]),v(o.a.Fragment,null,v(m,null,v(g,null,v(h,null),v(y,{className:"transitionFade"},e))))}))},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},"GpY+":function(t,e,n){"use strict";var r=n("q1tI"),o=n("nOHt"),i=n("clRN"),a=n("dGgI");e.a=function(t){var e=Object(o.useRouter)(),n=i.f.useContainer().setTransitionKey;Object(r.useEffect)((function(){e.beforePopState((function(e){return t(0),n("init"),!0}))})),Object(r.useEffect)((function(){t(a.a.transitionAnimation)}),[])}},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},OZR5:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("h4VS"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),u=n("mFIh"),c=i.a.createElement;function f(){var t=Object(r.a)(["\n    margin-bottom: ","px;\n  "]);return f=function(){return t},t}function s(){var t=Object(r.a)(["\n    margin-bottom: ","px;\n  "]);return s=function(){return t},t}var d=a.c.div.withConfig({displayName:"Mb__Main",componentId:"uh154t-0"})(["margin-bottom:","px;",";",";"],(function(t){return t.size.pc}),u.a.lessThan("tb")(s(),(function(t){return t.size.tb})),u.a.lessThan("sp")(f(),(function(t){return t.size.sp}))),l=Object(o.memo)((function(t){var e=t.size,n=t.children;return c(i.a.Fragment,null,c(d,{size:e},n))}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var d=n("q1tI"),l=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(u){a(f,u);var c=s(f);function f(t){var i;return r(this,f),i=c.call(this,t),l&&(e.add(o(i)),n(o(i))),i}return i(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(d.Component)}},ZYEL:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n("h4VS"),o=n("vOnD"),i=n("mFIh"),a=n("mycq");function u(){var t=Object(r.a)(["\n    padding-right: 10px;\n    padding-left: 10px;\n  "]);return u=function(){return t},t}function c(){var t=Object(r.a)(["\n    padding-right: 30px;\n    padding-left: 30px;\n  "]);return c=function(){return t},t}var f=Object(o.b)(["",";",";"],i.a.lessThan("tb")(c()),i.a.lessThan("sp")(u())),s=Object(o.b)(["padding-top:","px;"],a.a.headerHeight+10),d=(Object(o.b)(["padding-top:140px;"]),Object(o.b)(["padding-bottom:100px;"])),l=Object(o.b)(["z-index:0;max-width:864px;margin:0 auto;"])},fcue:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n("vOnD"),o=n("xVSB"),i=Object(r.b)(['background-image:url("/globalmenu_bg_fish.png");background-size:1224px;background-position:center top;background-color:',";"],o.a.blue),a=Object(r.b)(['background-image:url("/menu_bg_fish.png");background-size:contain;background-position:top center;']),u=Object(r.b)(['background-image:url("/menu_bg_sea_under.png");background-size:contain;background-position:bottom center;'])},"hGi/":function(t,e,n){"use strict";function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}n.d(e,"a",(function(){return r}))},hTSK:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("h4VS"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),u=n("2t/h"),c=n("mFIh"),f=i.a.createElement;function s(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return s=function(){return t},t}function d(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return d=function(){return t},t}function l(){var t=Object(r.a)(["\n    font-size: ","px;\n  "]);return l=function(){return t},t}var p=a.c.div.withConfig({displayName:"MainTextSourceHanSansJp__Main",componentId:"sc-7hvmhc-0"})(["color:#1A1D4A;"," line-height:1.7;",";",";",";"],u.c,c.a.greaterThan("tb")(l(),(function(t){return t.fontSize.pc})),c.a.lessThan("tb")(d(),(function(t){return t.fontSize.tb})),c.a.lessThan("sp")(s(),(function(t){return t.fontSize.sp}))),b=Object(o.memo)((function(t){var e=t.children,n=t.fontSize;return f(i.a.Fragment,null,f(p,{fontSize:n},e))}))},lBPv:function(t,e,n){"use strict";var r=n("rePB"),o=n("q1tI"),i=n("clRN");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t,e){var n=i.a.useContainer(),r=n.visibleControlButtons,a=n.setVisibleControlButtons;Object(o.useEffect)((function(){var e={color:void 0,isFinish:void 0,prevHref:void 0,nextHref:void 0,prevClick:void 0,nextClick:void 0,prevTransitionKey:"init",nextTransitionKey:"init",pageProgress:void 0};a(t?u({},e,{},t):u({},r,{},e))}),[e])}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mycq:function(t,e,n){"use strict";e.a={waveHeight:42,waveGapFromTop:130,controlUnitTopMargin:10,dangerImageRatio:42.857,contentMaxWidth:1025,menuMaxWidth:864,headerHeight:250,headerOvrGap:100,readableContentTextSize:{pc:18,tb:18,sp:18},readableContentMB:{pc:35,tb:35,sp:35},illustRatio:50,numButtonSize:{pc:84,tb:84,sp:44},selectButtonIconSize:54}}}]);