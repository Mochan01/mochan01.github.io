(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n||i&&(void 0!==o&&o)}e.isInAmpMode=a,e.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))}},"1mfO":function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},u=!1,c=Object(r.forwardRef)((function(t,e){var n=t.style,c=a(t,["style"]),f=function(){var t=Object(r.useState)(s),e=t[0],n=t[1],i=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1];return Object(r.useEffect)((function(){l()&&n(!0)}),[]),e}();return Object(r.useEffect)((function(){if(i)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){var t=s();n(t)}}),[i]),i?e:null}();!u&&(null===n||void 0===n?void 0:n.height)&&(u=!0,console.warn("<ReactDiv100vh /> overrides the height property of the style prop"));var d=o(o({},n),{height:f?f+"px":"100vh"});return i.a.createElement("div",o({ref:e,style:d},c))}));function s(){var t;return l()?(null===(t=document.documentElement)||void 0===t?void 0:t.clientHeight)||window.innerHeight:null}function l(){return"undefined"!==typeof window&&"undefined"!==typeof document}c.displayName="Div100vh",e.a=c},"2qu3":function(t,e,n){"use strict";var r=n("lwsE"),i=n("W8MJ");function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw o}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n("q1tI")),s=n("8L3h"),l=n("jwwS"),f=[],d=[],p=!1;function m(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function v(t){var e={loading:!1,loaded:{},error:null},n=[];try{Object.keys(t).forEach((function(r){var i=m(t[r]);i.loading?e.loading=!0:(e.loaded[r]=i.loaded,e.error=i.error),n.push(i.promise),i.promise.then((function(t){e.loaded[r]=t})).catch((function(t){e.error=t}))}))}catch(r){e.error=r}return e.promise=Promise.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function h(t,e){return c.default.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function b(t,e){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},e),r=null;function i(){if(!r){var e=new y(t,n);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!p&&"function"===typeof n.webpack){var a=n.webpack();d.push((function(t){var e,n=o(a);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(-1!==t.indexOf(r))return i()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(t,e){i();var o=c.default.useContext(l.LoadableContext),a=s.useSubscription(r);return c.default.useImperativeHandle(e,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(t){o(t)})),c.default.useMemo((function(){return a.loading||a.error?c.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,t):null}),[t,a])};return u.preload=function(){return i()},u.displayName="LoadableComponent",c.default.forwardRef(u)}var y=function(){function t(e,n){r(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=Object.assign(Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function g(t){return b(m,t)}function O(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return Promise.all(n).then((function(){if(t.length)return O(t,e)}))}g.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return b(v,t)},g.preloadAll=function(){return new Promise((function(t,e){O(f).then(t,e)}))},g.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return p=!0,e()};O(d,t).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady,e.default=g},"6E58":function(t,e,n){"use strict";n.d(e,"a",(function(){return q}));var r=n("q1tI"),i=n.n(r),o=n("nOHt"),a=n("dGgI"),u=n("lBPv"),c=n("a6RD"),s=n.n(c),l=n("vOnD"),f=n("RHde"),d=n("mycq"),p=n("tqcV"),m=n("bM56"),v=i.a.createElement,h=l.c.div.withConfig({displayName:"DangerTextTap__Main",componentId:"sc-1fj50pk-0"})(['width:100%;background-image:url(/danger_text_tap.png);background-size:contain;background-position:center;background-repeat:no-repeat;&:before{content:"";display:block;padding-top:60px;}']),b=Object(r.memo)((function(t){var e=t.visible;return v(i.a.Fragment,null,v(m.a,{visible:e},v(h,null)))})),y=i.a.createElement,g=l.c.div.withConfig({displayName:"CountTimerUnit__Main",componentId:"sc-106dtmj-0"})(["width:100%;position:fixed;top:0;left:0;right:0;bottom:0;text-align:center;z-index:3;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),O=l.c.div.withConfig({displayName:"CountTimerUnit__CountTimerWrapper",componentId:"sc-106dtmj-1"})(["position:absolute;top:","px;"],d.a.controlUnitTopMargin),_=l.c.div.withConfig({displayName:"CountTimerUnit__CountDownAnimWrapper",componentId:"sc-106dtmj-2"})(["max-width:600px;width:70%;margin:0 auto;"]),j=Object(r.memo)((function(t){var e=t.countAnim,n=t.coutDown;return y(i.a.Fragment,null,y(g,null,y(O,null,y(f.a,{count:n})),y(_,null,y(p.a,{count:e}),y(b,{visible:!isNaN(e)&&0!==e}))))})),w=n("p7xL"),C=n("clRN"),x=n("1mfO"),S=i.a.createElement,k=Object(l.c)(x.a).withConfig({displayName:"DangerMock__Wrapper",componentId:"lr3p6y-0"})(["display:flex;justify-content:center;background-color:#6AC9C3;"]),E=l.c.img.attrs((function(t){return{style:{width:t.adjustWidth+"px"}}})).withConfig({displayName:"DangerMock__Main",componentId:"lr3p6y-1"})(["height:100%;"]),I=Object(r.memo)((function(t){var e=t.image,n=Object(r.useRef)(),o=Object(r.useState)(0),a=o[0],u=o[1];Object(r.useEffect)((function(){var t=n.current,e=d.a.dangerScreenSize,r=e.width,i=e.height,o=t.offsetHeight/i;u(Math.floor(r*o))}),[n.current]);var c=Object(r.useRef)();return Object(r.useEffect)((function(){var t=c.current,e=function(t){return t.preventDefault()};return t.addEventListener("touchmove",e,!1),function(){return t.removeEventListener("touchmove",e,!1)}}),[c.current]),S(i.a.Fragment,null,S(k,{ref:c},S(E,{src:"/".concat(e),adjustWidth:a,ref:n,alt:""})))})),T=n("z3zr"),D=n("FUhX"),M=n("xVSB"),A=i.a.createElement,P=s()((function(){return Promise.all([n.e(0),n.e(16),n.e(14),n.e(99)]).then(n.bind(null,"/0on"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/0on"]},modules:["../../../components/atoms/Danger/Danger"]}}),q=Object(r.memo)((function(t){var e=t.menuIndex,n=t.image,c=t.numButtons,s=Object(o.useRouter)();Object(u.a)({nextTransitionKey:"fade"},!0),Object(D.a)(M.a.blue);var l=function(){h.setTransitionKey("fade"),s.push("/menus/menu".concat(e,"/check/end"))},f=Object(T.a)(l,a.a.soundDistance,!1),d=Object(w.a)(a.a.quizLimit,!0),p=d.countReady,m=d.countTimer,v=d.acceptTransition,h=C.h.useContainer();Object(r.useEffect)((function(){v&&l()}),[v]);var b=Object(r.useState)(!1),y=b[0],g=b[1];return Object(r.useEffect)((function(){isNaN(p)&&g(!0)}),[p,m]),A(i.a.Fragment,null,A(I,{image:n}),A(P,{image:n,inputEnable:y,onCorrect:function(){return f(!0)},numButtons:c}),A(j,{countAnim:p,coutDown:m}))}))},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);t.has(a)?o=!1:t.add(a)}switch(i.type){case"title":case"base":e.has(i.type)?o=!1:e.add(i.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=i.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return i.default.cloneElement(t,{key:n})}))}var p=o.default();function m(t){var e=t.children;return i.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return i.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}m.rewind=p.rewind,e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FUhX:function(t,e,n){"use strict";var r=n("q1tI"),i=n("clRN");e.a=function(t){var e=i.d.useContainer().setBgColor,n=i.h.useContainer().transitionKey,o=i.a.useContainer().transitionClass;Object(r.useEffect)((function(){"init"===n&&e(t)}),[]),Object(r.useEffect)((function(){"page-transition-enter-done"===o&&"slideAsVerticalNext"===n&&e(t)}),[o])}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.HeadManagerContext=i.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},ODXe:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},RHde:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("ODXe"),i=n("q1tI"),o=n.n(i),a=n("vOnD"),u=n("2t/h"),c=n("clRN"),s=n("mycq"),l=o.a.createElement,f=a.c.div.withConfig({displayName:"CountTimer__Main",componentId:"sc-2wx6l0-0"})(["display:inline-block;margin-top:","px;"],s.a.controlUnitTopMargin),d=a.c.div.withConfig({displayName:"CountTimer__Clock",componentId:"sc-2wx6l0-1"})(["width:",'px;background-image:url(/icon_time.png);background-size:contain;background-position:center;background-repeat:no-repeat;margin:0 auto;&:before{content:"";display:block;padding-top:100%;}'],43),p=a.c.div.withConfig({displayName:"CountTimer__Time",componentId:"sc-2wx6l0-2"})(["",' font-size:36px;color:#F53636;text-align:center;margin:0 auto;line-height:1;&:after{content:"\u79d2";font-size:16px;margin-left:2px;}'],u.b),m=Object(i.memo)((function(t){var e=t.count,n=c.g.useContainer().time;return Object(i.useEffect)((function(){var t=Object(r.a)(n,2),i=t[0],o=t[1].stop;3===e&&i(),0===e&&o()}),[e]),Object(i.useEffect)((function(){var t=Object(r.a)(n,2),e=(t[0],t[1].stop);return function(){return e()}}),[]),l(o.a.Fragment,null,l(f,null,l(d,null),l(p,null,e)))}))},RIqP:function(t,e,n){var r=n("Ijbi"),i=n("EbDI"),o=n("Bnag");t.exports=function(t){return r(t)||i(t)||o()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),i=n("PJYZ"),o=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(u){a(s,u);var c=l(s);function s(t){var o;return r(this,s),o=c.call(this,t),d&&(e.add(i(o)),n(i(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},a6RD:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("2qu3")),a=!1;function u(t,e){if(delete e.webpack,delete e.modules,!a)return t(e);var n=e.loading;return function(){return i.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=u,e.default=function(t,e){var n=o.default,r={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof Promise?r.loader=function(){return t}:"function"===typeof t?r.loader=t:"object"===typeof t&&(r=Object.assign(Object.assign({},r),t)),r=Object.assign(Object.assign({},r),e),"object"===typeof t&&!(t instanceof Promise)&&(t.render&&(r.render=function(e,n){return t.render(n,e)}),t.modules)){n=o.default.Map;var i={},a=t.modules();Object.keys(a).forEach((function(t){var e=a[t];"function"!==typeof e.then?i[t]=e:i[t]=function(){return e.then((function(t){return t.default||t}))}})),r.loader=i}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},bM56:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("q1tI"),i=n.n(r),o=n("dGgI"),a=n("vOnD"),u=n("z3zr"),c=i.a.createElement,s=a.c.div.attrs((function(t){return{style:{opacity:t.visible?1:0,transition:t.transition?"opacity ".concat(o.a.objectEffect,"ms ease"):"none"}}})).withConfig({displayName:"OpacityEffect__Main",componentId:"sc-8vzoan-0"})([""]),l=Object(r.memo)((function(t){var e=t.visible,n=t.isAbort,a=t.isEnteredDelay,l=t.children,f=Object(r.useState)(!1),d=f[0],p=f[1],m=Object(r.useState)(!1),v=m[0],h=m[1];Object(r.useEffect)((function(){if(!e){h(e);var t=setTimeout((function(){p(e)}),o.a.transitionAnimation);return function(){clearTimeout(t)}}if(!n){var r=setTimeout((function(){h(e)}),a?o.a.transitionAnimation:0);return p(e),function(){clearTimeout(r)}}h(e),p(e)}),[e]);var b=Object(r.useState)(!1),y=b[0],g=b[1];return Object(u.a)((function(){return g(!0)}),o.a.transitionAnimation),c(i.a.Fragment,null,d&&c(s,{visible:v,transition:y},l))}))},dGgI:function(t,e,n){"use strict";e.a={transitionAnimation:400,objectEffect:500,soundDistance:1e3,quizLimit:20,lifeJacketLimit:60,callLimit:10,numButtonEffect:1e3,phaserCallButtonEffects:300,dangerTransition:300,switchPageSystemTransitionDelay:370}},jwwS:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.LoadableContext=i.createContext(null)},lBPv:function(t,e,n){"use strict";var r=n("rePB"),i=n("q1tI"),o=n("clRN");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t,e){var n=o.b.useContainer(),r=n.visibleControlButtons,a=n.setVisibleControlButtons;Object(i.useEffect)((function(){var e={color:void 0,notation:"",prevHref:void 0,nextHref:void 0,prevClick:void 0,nextClick:void 0,prevCallBack:void 0,nextCallBack:void 0,isExistTower:!0,prevTransitionKey:"init",nextTransitionKey:"init",pageProgress:void 0};a(t?u({},e,{},t):u({},r,{},e))}),[e])}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.AmpStateContext=i.createContext({})},mycq:function(t,e,n){"use strict";e.a={waveHeight:42,waveGapFromTop:130,controlUnitTopMargin:10,dangerImageRatio:42.857,contentMaxWidth:1025,menuMaxWidth:864,headerHeight:250,headerOvrGap:100,readableContentTextSize:{pc:18,tb:18,sp:18},readableContentMB:{pc:35,tb:35,sp:35},illustRatio:50,numButtonSize:{pc:84,tb:84,sp:44},selectButtonIconSize:54,dangerScreenSize:{width:4032,height:1728},lineHeightMainText:2}},p7xL:function(t,e,n){"use strict";var r=n("q1tI"),i=n("P0Qi");e.a=function(t,e){var n=Object(r.useState)(3),o=n[0],a=n[1],u=Object(r.useState)(t),c=u[0],s=u[1],l=Object(r.useState)(!1),f=l[0],d=l[1],p=Object(r.useState)(!1),m=p[0],v=p[1];return Object(i.a)((function(){o&&a(o<4?o>1?function(t){return t-1}:4:NaN),isNaN(o)&&c&&(m||s((function(t){return t-1})),1===c&&a(0)),0===c&&d(!0)}),e?1e3:null),{countReady:o,countTimer:c,acceptTransition:f,setStopTimer:function(){return v(!0)},initCount:function(){a(3),s(t)}}}},tqcV:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=i.a.createElement,u=o.c.div.withConfig({displayName:"CountDownAnim__Main",componentId:"sc-1e5vrca-0"})(['width:100%;height:100%;position:relative;&:before{content:"";display:block;padding-top:33.455%;}']),c=o.c.div.attrs((function(t){return{style:{maxWidth:t.imageSize+"px",backgroundImage:"url(/".concat(t.imageUrl,")"),transition:t.isVisible?"".concat(400,"ms ease"):"none"}}})).withConfig({displayName:"CountDownAnim__Image",componentId:"sc-1e5vrca-1"})(["position:absolute;width:100%;height:100%;text-align:center;top:0;left:0;right:0;bottom:0;margin:auto;background-size:contain;background-position:center;background-repeat:no-repeat;transition-property:opacity;opacity:0;&.visible{opacity:1;","}"],(function(t){return t.animation})),s=Object(r.memo)((function(t){var e=t.count,n={0:{path:"danger_text_timeup.png",size:376,animation:Object(o.b)(["animation:TimeUpAnimation ","ms;@keyframes TimeUpAnimation{0%{transform:scale(1);}40%{transform:scale(5);}50%{transform:scale(.95);}60%{transform:scale(4);}70%{transform:scale(.95);}80%{transform:scale(2);}100%{transform:scale(1);}}"],400)},1:{path:"game_text_1.png",size:176,animation:Object(o.b)([""])},2:{path:"game_text_2.png",size:176,animation:Object(o.b)([""])},3:{path:"game_text_3.png",size:176,animation:Object(o.b)([""])},4:{path:"game_text_start.png",size:376,animation:Object(o.b)([""])}},s=Object(r.useState)(!1),l=s[0],f=s[1];return Object(r.useEffect)((function(){return f(!0)}),[]),a(i.a.Fragment,null,a(u,null,Object.keys(n).map((function(t,r){return a(c,{key:r,imageUrl:n[t].path,imageSize:n[t].size,className:t===String(e)?"visible":null,animation:n[t].animation,isVisible:l})}))))}))},z3zr:function(t,e,n){"use strict";var r=n("q1tI");e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=Object(r.useState)(n),o=i[0],a=i[1];return Object(r.useEffect)((function(){if(o){var n=setTimeout(t,e);return function(){return clearTimeout(n)}}}),[o]),a}}}]);