(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+mJH":function(n,e,t){"use strict";var a=t("q1tI"),r=t("Aug1");e.a=function(){var n=Object(a.useState)(),e=n[0],t=n[1];return Object(a.useEffect)((function(){var n=r.a.isEnable();t(n)}),[]),e}},"1OyB":function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,"a",(function(){return a}))},"22D/":function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var a=t("q1tI"),r=t.n(a),u=t("vOnD"),i=t("xVSB"),c=t("SwTs"),o=t("/4QB"),s=r.a.createElement,l=u.c.div.withConfig({displayName:"ReadableTopTitle__Main",componentId:"bwez2j-0"})([""]),f=Object(a.memo)((function(n){var e=n.title,t=n.subTitle;return s(r.a.Fragment,null,s(l,null,s(o.a,{color:i.a.linkBlue,textAlign:"left"},e),t&&s(c.a,null,t)))}))},"3Vrn":function(n,e,t){"use strict";var a=t("o0o1"),r=t.n(a),u=t("q1tI"),i=t.n(u).a.createElement;e.a=function(n,e){var t=Object(u.useState)(""),a=t[0],c=t[1],o=!0,s=function(n){o&&c(n)};return Object(u.useEffect)((function(){var t=function(n){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=5;break}return e.next=3,r.a.awrap(n());case 3:e.next=0;break;case 5:case"end":return e.stop()}}),null,null,null,Promise)};return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e(s,n,t);case 1:case"end":return a.stop()}}),null,null,null,Promise),function(){return o=!1}}),[]),{imageUrl:a,preloaders:n.map((function(n,e){return i("link",{key:e,rel:"preload",href:"/"+n,as:"image"})}))}}},"5TYa":function(n,e,t){"use strict";e.a={menu1:{main:"\u30e1\u30cb\u30e5\u30fc\uff11\uff08\u6c34\u306e\u4e8b\u6545\u3092\u77e5\u308d\u3046\uff01\uff09",content:"\u6c34\u306e\u4e8b\u6545\u306f\u306a\u305c\u304a\u304d\u308b\uff1f"}}},Aug1:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t("1OyB"),r=t("vuIU"),u=t("rePB"),i=function(){function n(){Object(a.a)(this,n)}return Object(r.a)(n,null,[{key:"enable",value:function(){sessionStorage.setItem(n.key,this.true)}},{key:"disable",value:function(){sessionStorage.setItem(n.key,this.false)}},{key:"isEnable",value:function(){return sessionStorage.getItem(n.key)===this.true}}]),n}();Object(u.a)(i,"key","isInOrder"),Object(u.a)(i,"true","true"),Object(u.a)(i,"false","false")},NtAE:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menus/menu1/11",function(){return t("sqfJ")}])},SwTs:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t("q1tI"),r=t.n(a),u=t("tFhd"),i=t("xVSB"),c=r.a.createElement,o=Object(a.memo)((function(n){var e=n.children;return c(r.a.Fragment,null,c(u.a,{fontSize:{pc:24,tb:24,sp:18},color:i.a.linkBlue},e))}))},or3g:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t("q1tI"),r=t.n(a),u=t("vOnD"),i=r.a.createElement,c=u.c.div.attrs((function(n){return{style:{backgroundImage:"url(/".concat(n.imageUrl,")")}}})).withConfig({displayName:"PenguinAnimBase__Main",componentId:"sc-18qe72q-0"})(['background-size:contain;background-position:center;background-repeat:no-repeat;&:before{content:"";display:block;padding-top:93.433%;}']),o=Object(a.memo)((function(n){var e=n.imageUrl;return i(r.a.Fragment,null,i(c,{imageUrl:e}))}))},pQqy:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var a=t("h4VS"),r=t("q1tI"),u=t.n(r),i=t("vOnD"),c=t("mFIh"),o=t("0ifF"),s=t("o0o1"),l=t.n(s),f=t("or3g"),m=t("3Vrn"),p=t("yt5R"),b=u.a.createElement;function d(){var n=Object(a.a)(["\n    width: 244px;\n  "]);return d=function(){return n},n}var y=i.c.div.withConfig({displayName:"PenguinExplanation__Main",componentId:"sc-1mk25q9-0"})(["width:290px;margin:0 auto;",";"],c.a.lessThan("tb")(d())),g=Object(r.memo)((function(){var n=Object(m.a)(["chara_explanation1.png","chara_explanation2.png","chara_explanation3.png","chara_explanation4.png"],(function(n,e,t){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n(e[1]),a.next=3,l.a.awrap(p.a.timeAsync(1500));case 3:return n(e[2]),a.next=6,l.a.awrap(p.a.timeAsync(200));case 6:return n(e[1]),a.next=9,l.a.awrap(p.a.timeAsync(200));case 9:return n(e[2]),a.next=12,l.a.awrap(p.a.timeAsync(200));case 12:return n(e[1]),a.next=15,l.a.awrap(p.a.timeAsync(200));case 15:return n(e[2]),a.next=18,l.a.awrap(p.a.timeAsync(200));case 18:return n(e[1]),a.next=21,l.a.awrap(p.a.timeAsync(1e3));case 21:n(e[3]),t((function(){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(p.a.timeAsync(100));case 2:return n(e[1]),t.next=5,l.a.awrap(p.a.timeAsync(3e3));case 5:n(e[3]);case 6:case"end":return t.stop()}}),null,null,null,Promise)}));case 23:case"end":return a.stop()}}),null,null,null,Promise)})),e=n.imageUrl,t=n.preloaders;return b(u.a.Fragment,null,b(y,null,t,b(f.a,{imageUrl:e})))})),v=t("tFhd"),h=t("mycq"),x=u.a.createElement;function w(){var n=Object(a.a)(["\n   display: flex;\n   flex-direction: row-reverse;\n   justify-content: space-between;\n   & > div: last-child {\n     width: calc(100% - 290px);\n   }\n "]);return w=function(){return n},n}var O=i.c.div.withConfig({displayName:"CheckFlexibleWrapper__Main",componentId:"sc-1v971yr-0"})(["",";"],c.a.greaterThan("sp")(w())),j=Object(r.memo)((function(n){var e=n.children;return x(u.a.Fragment,null,x(O,null,x(o.a,{size:{pc:0,tb:0,sp:h.a.readableContentMB.sp}},x(g,null)),x(v.a,{fontSize:h.a.readableContentTextSize},e)))}))},sqfJ:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return x}));var a=t("hGi/"),r=t("8Kt/"),u=t.n(r),i=t("q1tI"),c=t.n(i),o=t("22D/"),s=t("BY9L"),l=t("mycq"),f=t("0ifF"),m=t("xVSB"),p=t("lBPv"),b=t("JI74"),d=t("pQqy"),y=t("5TYa"),g=t("vHK9"),v=t("+mJH"),h=c.a.createElement;function x(n){Object(a.a)(n);var e=Object(v.a)();return Object(p.a)({color:"orange",prevHref:"/menus/menu1/10",nextHref:e?"/menus/menu2/act/1":"/menus/menu1/main",prevTransitionKey:"fade",nextTransitionKey:e?"fade":"slideAsVerticalPrev",notation:e?"\u30e1\u30cb\u30e5\u30fc\uff12\u3078":"\u304a\u308f\u308a",pageProgress:{currentPage:11,pageAmount:11}},e),h(c.a.Fragment,null,h(u.a,null,h("title",null,y.a.menu1.content)),h(s.a,{color:m.a.blue},h(f.a,{size:l.a.readableContentMB},h(o.a,{title:h(c.a.Fragment,null,h(b.a,{ruby:"\u307f\u305a"},"\u6c34"),"\u306e",h(b.a,{ruby:"\u3058\u3053"},"\u4e8b\u6545"),"\u306f\u306a\u305c\u304a\u304d\u308b\uff1f")})),h(f.a,{size:l.a.readableContentMB},h(d.a,null,h(f.a,{size:l.a.readableContentMB},"\u3069\u3093\u306a\u306b",h(b.a,{ruby:"\u304a\u3088"},"\u6cf3"),"\u304e\u306b",h(b.a,{ruby:"\u3058\u3057\u3093"},"\u81ea\u4fe1"),"\u304c\u3042\u3063\u3066\u3082\u3001",h(b.a,{ruby:"\u3057\u305c\u3093"},"\u81ea\u7136"),"\u306e",h(b.a,{ruby:"\u304a\u304a"},"\u5927"),"\u304d\u306a",h(b.a,{ruby:"\u3061\u304b\u3089"},"\u529b"),"\u306b\u306f\u304b\u306a\u3044\u307e\u305b\u3093\u3002 \u3053\u306e",h(b.a,{ruby:"\u3042\u3068"},"\u5f8c"),"\u306e",h(b.a,{ruby:"\u304c\u304f\u3057\u3085\u3046"},"\u5b66\u7fd2"),"\u30e1\u30cb\u30e5\u30fc\u3067\u3001"),h(f.a,{size:l.a.readableContentMB},h(g.a,{list:[h(c.a.Fragment,null,"\u307e\u305a\u3001",h(b.a,{ruby:"\u307f\u305a"},"\u6c34"),"\u306b",h(b.a,{ruby:"\u304a"},"\u843d"),"\u3061\u306a\u3044\u305f\u3081\u306e",h(b.a,{ruby:"\u3061\u3057\u304d"},"\u77e5\u8b58")),h(c.a.Fragment,null,h(b.a,{ruby:"\u3064\u304e"},"\u6b21"),"\u306b\u3001\u305d\u308c\u3067\u3082",h(b.a,{ruby:"\u307f\u305a"},"\u6c34"),"\u306b",h(b.a,{ruby:"\u304a"},"\u843d"),"\u3061\u3066\u3057\u307e\u3063\u305f",h(b.a,{ruby:"\u3068\u304d"},"\u6642"),"\u306b",h(b.a,{ruby:"\u305f\u3059"},"\u52a9"),"\u304b\u308b\u305f\u3081\u306e",h(b.a,{ruby:"\u307b\u3046\u307b\u3046"},"\u65b9\u6cd5")),h(c.a.Fragment,null,h(b.a,{ruby:"\u3055\u3044\u3054"},"\u6700\u5f8c"),"\u306b\u3001",h(b.a,{ruby:"\u307f\u305a"},"\u6c34"),"\u306b",h(b.a,{ruby:"\u304a"},"\u843d"),"\u3061\u3066\u3044\u308b",h(b.a,{ruby:"\u3072\u3068"},"\u4eba"),"\u3092",h(b.a,{ruby:"\u307f"},"\u898b"),"\u3064\u3051\u305f",h(b.a,{ruby:"\u3070\u3042\u3044"},"\u5834\u5408"),"\u306e",h(b.a,{ruby:"\u3053\u3046\u3069\u3046"},"\u884c\u52d5"))]})),"\u3053\u306e\uff13\u3064\u3092",h(b.a,{ruby:"\u307e\u306a"},"\u5b66"),"\u3093\u3067\u3044\u304d\u307e\u3057\u3087\u3046"))))}},tFhd:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var a=t("h4VS"),r=t("vOnD"),u=t("2t/h"),i=t("mFIh"),c=t("xVSB"),o=t("mycq");function s(){var n=Object(a.a)(["\n    font-size: ","px;\n  "]);return s=function(){return n},n}function l(){var n=Object(a.a)(["\n    font-size: ","px;\n  "]);return l=function(){return n},n}function f(){var n=Object(a.a)(["\n    font-size: ","px;\n  "]);return f=function(){return n},n}var m=r.c.div.withConfig({displayName:"MainTextSourceHanSansJp",componentId:"sc-1ga8fed-0"})(["color:",";"," line-height:",";text-align:",";word-break:break-all;",";",";",";"],(function(n){return n.color?n.color:c.a.navy}),u.b,o.a.lineHeightMainText,(function(n){return n.textAlign}),i.a.greaterThan("tb")(f(),(function(n){return n.fontSize.pc})),i.a.lessThan("tb")(l(),(function(n){return n.fontSize.tb})),i.a.lessThan("sp")(s(),(function(n){return n.fontSize.sp})))},vHK9:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var a=t("q1tI"),r=t.n(a),u=t("vOnD"),i=t("tFhd"),c=t("xVSB"),o=r.a.createElement,s=u.c.ol.withConfig({displayName:"NumList__Main",componentId:"dgln3y-0"})(["counter-reset:my-counter;list-style:none;padding:0;"]),l=u.c.li.withConfig({displayName:"NumList__List",componentId:"dgln3y-1"})(["margin-bottom:28px;padding-left:","px;position:relative;&:last-child{margin-bottom:0;}"],38),f=u.c.span.withConfig({displayName:"NumList__Number",componentId:"dgln3y-2"})(["color:",";margin-left:-","px;text-align:center;position:absolute;font-size:","px;"],c.a.citrus,38,18),m=Object(a.memo)((function(n){var e=n.list;return o(r.a.Fragment,null,o(s,null,e.map((function(n,e){return o(l,{key:e},o(i.a,{fontSize:{pc:18,tb:18,sp:18}},o(f,{dangerouslySetInnerHTML:{__html:"&#93"+String(12+e)}}),n))}))))}))},vuIU:function(n,e,t){"use strict";function a(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function r(n,e,t){return e&&a(n.prototype,e),t&&a(n,t),n}t.d(e,"a",(function(){return r}))},yt5R:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("1OyB"),r=t("vuIU"),u=function(){function n(){Object(a.a)(this,n)}return Object(r.a)(n,null,[{key:"timeAsync",value:function(n){return new Promise((function(e){return setTimeout(e,n)}))}}]),n}()}},[["NtAE",1,0,2,3,4,5]]]);