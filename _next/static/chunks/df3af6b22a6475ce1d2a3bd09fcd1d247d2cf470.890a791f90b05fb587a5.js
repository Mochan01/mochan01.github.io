(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"1IxL":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("vOnD"),o=Object(r.b)(["box-shadow:0px 4px 5px 1px rgb(0,0,0,.14);"])},"5ael":function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n("h4VS"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("UvC6"),u=n("2t/h"),s=n("1IxL"),l=n("OtQk"),f=n("mFIh"),p=n("xVSB"),d=i.a.createElement;function v(){var t=Object(r.a)(["\n    display: none;\n  "]);return v=function(){return t},t}function h(){var t=Object(r.a)(["\n        font-size: 14px;\n        line-height: 1.9;\n      "]);return h=function(){return t},t}function m(){var t=Object(r.a)(["\n        font-size: 20px;\n      "]);return m=function(){return t},t}function b(){var t=Object(r.a)(["\n      margin-left: ","px;\n    "]);return b=function(){return t},t}var y=a.c.div.attrs((function(t){return{style:{justifyContent:"left"===t.align?"flex-start":"center",backgroundColor:t.isColored?p.a.lightOrange:"#fff"}}})).withConfig({displayName:"MenuButton__Main",componentId:"sc-17b8gxs-0"})([""," "," display:block;cursor:pointer;white-space:nowrap;height:114px;user-select:none;position:relative;display:flex;align-items:center;border-radius:24px;& > .wrapper{margin-top:1em;margin-left:","px;",";text-align:",";line-height:1;.menu{"," color:#F34A00;font-size:36px;",";}.desc{"," color:",";font-size:18px;margin-top:8px;",";}}"],s.a,l.b,(function(t){return"left"===t.align?t.icon?113:27:0}),f.a.lessThan("sp")(b(),(function(t){return"left"===t.align?10:0})),(function(t){return"left"===t.align?"left":"center"}),u.a,f.a.lessThan("sp")(m()),u.b,p.a.navy,f.a.lessThan("sp")(h())),g=a.c.div.withConfig({displayName:"MenuButton__Icon",componentId:"sc-17b8gxs-1"})(["background-image:url(",');background-size:contain;background-repeat:no-repeat;background-position:center;content:"";width:',"px;height:100%;position:absolute;top:-10px;left:-13px;pointer-events:none;display:",";",";"],(function(t){return t.icon}),103,(function(t){return t.icon?"block":"none"}),f.a.lessThan("sp")(v())),x=Object(o.memo)((function(t){var e=t.href,n=t.title,r=t.align,o=t.description,a=t.icon,u=t.transitionKey,s=t.isColored;return d(i.a.Fragment,null,d(c.a,{href:e,transitionKey:u},d(y,{role:"button",icon:a,description:o,align:r,isColored:s},d(g,{icon:a}),d("div",{className:"wrapper"},d("div",{className:"menu"},n),o&&d("div",{className:"desc"},o)))))}))},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?i=!1:(p.add(l),r[s]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=i.default();function v(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}v.rewind=d.rewind,e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FUhX:function(t,e,n){"use strict";var r=n("q1tI"),o=n("clRN");e.a=function(t){var e=o.d.useContainer().setBgColor,n=o.h.useContainer().transitionKey,i=o.a.useContainer().transitionClass;Object(r.useEffect)((function(){"init"===n&&e(t)}),[]),Object(r.useEffect)((function(){"page-transition-enter-done"===i&&"slideAsVerticalNext"===n&&e(t)}),[i])}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},O56q:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("ZYEL"),c=n("FUhX"),u=n("xVSB"),s=o.a.createElement,l=i.c.div.withConfig({displayName:"Menu__Container",componentId:"sc-1bsdk52-0"})(["min-height:100%;position:relative;"," "," ",""],a.c,a.d,a.a),f=i.c.div.withConfig({displayName:"Menu__Wrapper",componentId:"sc-1bsdk52-1"})(["",""],a.b),p=Object(r.memo)((function(t){var e=t.children;return Object(c.a)(u.a.blue),s(o.a.Fragment,null,s(l,null,s(f,null,e)))}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},U1Ah:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("hGi/"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("clRN"),u=n("Vwxa"),s=n("D2zs"),l=n("xVSB"),f=i.a.createElement,p=a.c.div.attrs((function(t){return{style:{transform:"translateY(".concat(t.scrollTop,"px)")}}})).withConfig({displayName:"FishiesY__Main",componentId:"sc-1a1yg4v-0"})(['position:fixed;width:100%;top:0;left:0;&:after{content:"";width:100%;padding-top:',"vh;position:absolute;bottom:-","vh;left:0;background-color:",";}"],50,50,l.a.blue),d=Object(o.memo)((function(t){Object(r.a)(t);var e=c.h.useContainer().transitionKey,n=c.a.useContainer().transitionClass,o=Object(u.a)(e,n).isMovingY,a=c.f.useContainer().scrollTop;return f(i.a.Fragment,null,o&&f(p,{scrollTop:n.match(/page-transition-exit/g)?a:0},f(s.a,null)))}))},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){a(s,c);var u=l(s);function s(t){var i;return r(this,s),i=u.call(this,t),p&&(e.add(o(i)),n(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},cLEy:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("hGi/"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("clRN"),u=n("Vwxa"),s=n("7bg6"),l=i.a.createElement,f=a.c.div.attrs((function(t){return{style:{transform:"translateY(".concat(t.scrollTop,"px)")}}})).withConfig({displayName:"WaveUnitY__Main",componentId:"sc-1l6id3a-0"})(["position:fixed;top:0;left:0;width:100%;z-index:1;"]),p=Object(o.memo)((function(t){Object(r.a)(t);var e=c.h.useContainer().transitionKey,n=c.a.useContainer().transitionClass,o=Object(u.a)(e,n).isMovingY,a=c.f.useContainer().scrollTop;return l(i.a.Fragment,null,o&&l(f,{scrollTop:n.match(/page-transition-exit/g)?a:0},l(s.a,null)))}))},lBPv:function(t,e,n){"use strict";var r=n("rePB"),o=n("q1tI"),i=n("clRN");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t,e){var n=i.b.useContainer(),r=n.visibleControlButtons,a=n.setVisibleControlButtons;Object(o.useEffect)((function(){var e={color:void 0,notation:"",prevHref:void 0,nextHref:void 0,prevClick:void 0,nextClick:void 0,prevCallBack:void 0,nextCallBack:void 0,isExistTower:!0,prevTransitionKey:"init",nextTransitionKey:"init",pageProgress:void 0};a(t?c({},e,{},t):c({},r,{},e))}),[e])}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})}}]);