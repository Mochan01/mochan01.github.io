(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n||i&&(void 0!==o&&o)}e.isInAmpMode=a,e.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))}},"1mfO":function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},c=!1,u=Object(r.forwardRef)((function(t,e){var n=t.style,u=a(t,["style"]),f=function(){var t=Object(r.useState)(s),e=t[0],n=t[1],i=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1];return Object(r.useEffect)((function(){l()&&n(!0)}),[]),e}();return Object(r.useEffect)((function(){if(i)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){var t=s();n(t)}}),[i]),i?e:null}();!c&&(null===n||void 0===n?void 0:n.height)&&(c=!0,console.warn("<ReactDiv100vh /> overrides the height property of the style prop"));var p=o(o({},n),{height:f?f+"px":"100vh"});return i.a.createElement("div",o({ref:e,style:p},u))}));function s(){var t;return l()?(null===(t=document.documentElement)||void 0===t?void 0:t.clientHeight)||window.innerHeight:null}function l(){return"undefined"!==typeof window&&"undefined"!==typeof document}u.displayName="Div100vh",e.a=u},"6E58":function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var r=n("q1tI"),i=n.n(r),o=n("nOHt"),a=n("dGgI"),c=n("lBPv"),u=n("a6RD"),s=n.n(u),l=n("vOnD"),f=n("RHde"),p=n("mycq"),d=n("tqcV"),m=n("bM56"),v=i.a.createElement,b=l.c.div.withConfig({displayName:"DangerTextTap__Main",componentId:"sc-1fj50pk-0"})(['width:100%;background-image:url(/danger_text_tap.png);background-size:contain;background-position:center;background-repeat:no-repeat;&:before{content:"";display:block;padding-top:60px;}']),h=Object(r.memo)((function(t){var e=t.visible;return v(i.a.Fragment,null,v(m.a,{visible:e},v(b,null)))})),g=i.a.createElement,y=l.c.div.withConfig({displayName:"CountTimerUnit__Main",componentId:"sc-106dtmj-0"})(["width:100%;position:fixed;top:0;left:0;right:0;bottom:0;text-align:center;z-index:3;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),O=l.c.div.withConfig({displayName:"CountTimerUnit__CountTimerWrapper",componentId:"sc-106dtmj-1"})(["position:absolute;top:","px;"],p.a.controlUnitTopMargin),j=l.c.div.withConfig({displayName:"CountTimerUnit__CountDownAnimWrapper",componentId:"sc-106dtmj-2"})(["max-width:600px;width:70%;margin:0 auto;"]),w=Object(r.memo)((function(t){var e=t.countAnim,n=t.coutDown;return g(i.a.Fragment,null,g(y,null,g(O,null,g(f.a,{count:n})),g(j,null,g(d.a,{count:e}),g(h,{visible:!isNaN(e)&&0!==e}))))})),_=n("p7xL"),x=n("clRN"),C=n("1mfO"),S=i.a.createElement,E=Object(l.c)(C.a).withConfig({displayName:"DangerMock__Wrapper",componentId:"lr3p6y-0"})(["display:flex;justify-content:center;background-color:#6AC9C3;"]),k=l.c.img.attrs((function(t){return{style:{width:t.adjustWidth+"px"}}})).withConfig({displayName:"DangerMock__Main",componentId:"lr3p6y-1"})(["height:100%;"]),I=Object(r.memo)((function(t){var e=t.image,n=Object(r.useRef)(),o=Object(r.useState)(0),a=o[0],c=o[1];Object(r.useEffect)((function(){var t=n.current,e=p.a.dangerScreenSize,r=e.width,i=e.height,o=t.offsetHeight/i;c(Math.floor(r*o))}),[n.current]);var u=Object(r.useRef)();return Object(r.useEffect)((function(){var t=u.current,e=function(t){return t.preventDefault()};return t.addEventListener("touchmove",e,!1),function(){return t.removeEventListener("touchmove",e,!1)}}),[u.current]),S(i.a.Fragment,null,S(E,{ref:u},S(k,{src:"/".concat(e),adjustWidth:a,ref:n,alt:""})))})),P=n("z3zr"),D=n("FUhX"),M=n("xVSB"),T=i.a.createElement,A=s()((function(){return Promise.all([n.e(0),n.e(16),n.e(15),n.e(101)]).then(n.bind(null,"/0on"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/0on"]},modules:["../../../components/atoms/Danger/Danger"]}}),z=Object(r.memo)((function(t){var e=t.menuIndex,n=t.image,u=t.numButtons,s=Object(o.useRouter)();Object(c.a)({nextTransitionKey:"fade"},!0),Object(D.a)(M.a.blue);var l=function(){b.setTransitionKey("fade"),s.push("/menus/menu".concat(e,"/check/end"))},f=Object(P.a)(l,a.a.soundDistance,!1),p=Object(_.a)(a.a.quizLimit,!0),d=p.countReady,m=p.countTimer,v=p.acceptTransition,b=x.h.useContainer();Object(r.useEffect)((function(){v&&l()}),[v]);var h=Object(r.useState)(!1),g=h[0],y=h[1];return Object(r.useEffect)((function(){isNaN(d)&&y(!0)}),[d,m]),T(i.a.Fragment,null,T(I,{image:n}),T(A,{image:n,inputEnable:g,onCorrect:function(){return f(!0)},numButtons:u}),T(w,{countAnim:d,coutDown:m}))}))},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("Xuae")),a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);t.has(a)?o=!1:t.add(a)}switch(i.type){case"title":case"base":e.has(i.type)?o=!1:e.add(i.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=i.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return i.default.cloneElement(t,{key:n})}))}var d=o.default();function m(t){var e=t.children;return i.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return i.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FUhX:function(t,e,n){"use strict";var r=n("q1tI"),i=n("clRN");e.a=function(t){var e=i.d.useContainer().setBgColor,n=i.h.useContainer().transitionKey,o=i.a.useContainer().transitionClass;Object(r.useEffect)((function(){"init"===n&&e(t)}),[]),Object(r.useEffect)((function(){"page-transition-enter-done"===o&&"slideAsVerticalNext"===n&&e(t)}),[o])}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.HeadManagerContext=i.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},RIqP:function(t,e,n){var r=n("Ijbi"),i=n("EbDI"),o=n("Bnag");t.exports=function(t){return r(t)||i(t)||o()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),i=n("PJYZ"),o=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){a(s,c);var u=l(s);function s(t){var o;return r(this,s),o=u.call(this,t),p&&(e.add(i(o)),n(i(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},dGgI:function(t,e,n){"use strict";e.a={transitionAnimation:400,objectEffect:500,soundDistance:1e3,quizLimit:20,callLimit:10,numButtonEffect:1e3,phaserCallButtonEffects:300,dangerTransition:300,switchPageSystemTransitionDelay:370}},lBPv:function(t,e,n){"use strict";var r=n("rePB"),i=n("q1tI"),o=n("clRN");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t,e){var n=o.b.useContainer(),r=n.visibleControlButtons,a=n.setVisibleControlButtons;Object(i.useEffect)((function(){var e={color:void 0,notation:"",prevHref:void 0,nextHref:void 0,prevClick:void 0,nextClick:void 0,prevCallBack:void 0,nextCallBack:void 0,isExistTower:!0,prevTransitionKey:"init",nextTransitionKey:"init",pageProgress:void 0};a(t?c({},e,{},t):c({},r,{},e))}),[e])}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.AmpStateContext=i.createContext({})},mycq:function(t,e,n){"use strict";e.a={waveHeight:42,waveGapFromTop:130,controlUnitTopMargin:10,dangerImageRatio:42.857,contentMaxWidth:1025,menuMaxWidth:864,headerHeight:250,headerOvrGap:100,readableContentTextSize:{pc:18,tb:18,sp:18},readableContentMB:{pc:35,tb:35,sp:35},illustRatio:50,numButtonSize:{pc:84,tb:84,sp:44},selectButtonIconSize:54,dangerScreenSize:{width:4032,height:1728}}},p7xL:function(t,e,n){"use strict";var r=n("q1tI"),i=n("P0Qi");e.a=function(t,e){var n=Object(r.useState)(3),o=n[0],a=n[1],c=Object(r.useState)(t),u=c[0],s=c[1],l=Object(r.useState)(!1),f=l[0],p=l[1],d=Object(r.useState)(!1),m=d[0],v=d[1];return Object(i.a)((function(){o&&a(o<4?o>1?function(t){return t-1}:4:NaN),isNaN(o)&&u&&(m||s((function(t){return t-1})),1===u&&a(0)),0===u&&p(!0)}),e?1e3:null),{countReady:o,countTimer:u,acceptTransition:f,setStopTimer:function(){return v(!0)},initCount:function(){a(3),s(t)}}}},tqcV:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=i.a.createElement,c=o.c.div.withConfig({displayName:"CountDownAnim__Main",componentId:"sc-1e5vrca-0"})(['width:100%;height:100%;position:relative;&:before{content:"";display:block;padding-top:33.455%;}']),u=o.c.div.attrs((function(t){return{style:{maxWidth:t.imageSize+"px",backgroundImage:"url(/".concat(t.imageUrl,")"),transition:t.isVisible?"".concat(400,"ms ease"):"none"}}})).withConfig({displayName:"CountDownAnim__Image",componentId:"sc-1e5vrca-1"})(["position:absolute;width:100%;height:100%;text-align:center;top:0;left:0;right:0;bottom:0;margin:auto;background-size:contain;background-position:center;background-repeat:no-repeat;transition-property:opacity;opacity:0;&.visible{opacity:1;","}"],(function(t){return t.animation})),s=Object(r.memo)((function(t){var e=t.count,n={0:{path:"danger_text_timeup.png",size:376,animation:Object(o.b)(["animation:TimeUpAnimation ","ms;@keyframes TimeUpAnimation{0%{transform:scale(1);}40%{transform:scale(5);}50%{transform:scale(.95);}60%{transform:scale(4);}70%{transform:scale(.95);}80%{transform:scale(2);}100%{transform:scale(1);}}"],400)},1:{path:"game_text_1.png",size:176,animation:Object(o.b)([""])},2:{path:"game_text_2.png",size:176,animation:Object(o.b)([""])},3:{path:"game_text_3.png",size:176,animation:Object(o.b)([""])},4:{path:"game_text_start.png",size:376,animation:Object(o.b)([""])}},s=Object(r.useState)(!1),l=s[0],f=s[1];return Object(r.useEffect)((function(){return f(!0)}),[]),a(i.a.Fragment,null,a(c,null,Object.keys(n).map((function(t,r){return a(u,{key:r,imageUrl:n[t].path,imageSize:n[t].size,className:t===String(e)?"visible":null,animation:n[t].animation,isVisible:l})}))))}))},z3zr:function(t,e,n){"use strict";var r=n("q1tI");e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=Object(r.useState)(n),o=i[0],a=i[1];return Object(r.useEffect)((function(){if(o){var n=setTimeout(t,e);return function(){return clearTimeout(n)}}}),[o]),a}}}]);