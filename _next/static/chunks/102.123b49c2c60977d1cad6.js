(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"/0on":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("1O+K"),c=n.n(a),u=n("lNlg"),s=n("1OyB"),f=n("JX7q"),l=n("Ji7U"),d=n("md7G"),h=n("foSv");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var b=function(t){Object(l.a)(n,t);var e=p(n);function n(t,r){var o;return Object(s.a)(this,n),(o=e.call(this,t,0,0,r)).setOrigin(0,0),t.add.existing(Object(f.a)(o)),o}return n}(c.a.GameObjects.Image),m=n("dGgI"),v=n("vuIU"),y=n("rePB"),g=n("WIYo");function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t){Object(l.a)(n,t);var e=O(n);function n(t,r,o,i,a,c){var u;return Object(s.a)(this,n),u=e.call(this,t,o.position.x,o.position.y),Object(y.a)(Object(f.a)(u),"defaultColor",3753663),Object(y.a)(Object(f.a)(u),"correctColor",16070198),Object(y.a)(Object(f.a)(u),"inCorrectColor",11184810),u.add([u.createButton(o.isCorrect,i,a,c),u.createNumber(r)]),t.add.existing(Object(f.a)(u)),u}return Object(v.a)(n,[{key:"createNumber",value:function(t){var e=this.scene.add.text(0,0,String(t),{fontFamily:"heisei-maru-gothic-std, sans-serif",fontSize:"100px",fontStyle:"bold"}),n=e.getBounds().width;return e.setPosition(-n/2,-60),e}},{key:"createButton",value:function(t,e,n,r){var o=this,i=this.scene.add.arc(0,0,80,0,360,!1);return i.setFillStyle(this.defaultColor),new g.a(this.scene,i).on("click",(function(){r(),o.scene.sound.play(t?e:n),i.setFillStyle(t?o.correctColor:o.inCorrectColor),o.scene.add.tween({targets:i,duration:.1*m.a.numButtonEffect,scale:1.1,ease:"Cubic.Out",onComplete:function(){o.scene.add.tween({targets:i,duration:.2*m.a.numButtonEffect,scale:.9,ease:"Cubic.Out",onComplete:function(){o.scene.add.tween({targets:i,duration:.7*m.a.numButtonEffect,scale:1,ease:"Cubic.Out"})}})}}),i.disableInteractive()})),i}}]),n}(c.a.GameObjects.Container),w=n("mycq"),S=n("z3zr"),C=n("1mfO"),I=o.a.createElement;function x(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var A=i.c.div.attrs((function(t){return{style:{opacity:t.isVisible?1:0}}})).withConfig({displayName:"Danger__Wrapper",componentId:"vf4vkj-0"})(["transition:opacity ease .3s;&:after{display:",';content:"";width:100%;height:100%;position:absolute;top:0;left:0;z-index:23;pointer-events:auto;}'],(function(t){return t.inputEnable?"none":"block"})),k=Object(i.c)(C.a).withConfig({displayName:"Danger__AdjustHeight",componentId:"vf4vkj-1"})(["position:fixed;top:0;left:0;z-index:3;display:flex;height:100%;width:100%;justify-content:center;"]),B=Object(i.c)(u.a).withConfig({displayName:"Danger__IonWrapper",componentId:"vf4vkj-2"})(["canvas{user-select:none;width:","px;height:100%;}"],(function(t){return t.adjustWidth}));e.default=Object(r.memo)((function(t){var e=t.onCorrect,n=t.inputEnable,i=t.image,c=t.numButtons,u=Object(r.useState)(!1),s=u[0],f=u[1],l=w.a.dangerScreenSize,d=l.width,h=l.height,p=Object(r.useState)(null),v=p[0],y=p[1];Object(S.a)((function(){y({width:d,height:h,type:a.CANVAS,scene:{init:function(){var t=this.game.input.mouse;t&&(t.preventDefaultWheel=!1);var e=this.game.input.touch;e&&(e.capture=!1)},preload:function(){this.load.audio("correctSound","/maru.mp3"),this.load.audio("incorrectSound","/batu.mp3"),this.load.image("dangerIllust","/".concat(i))},create:function(){var t=this;new b(this,"dangerIllust");var n,r=c.filter((function(t){return t.isCorrect})),o=x(c);try{var i=function(){var o=n.value;new j(t,c.indexOf(o)+1,o,"correctSound","incorrectSound",(function(){o.isCorrect&&r.pop(),r.length||(t.input.enabled=!1,setTimeout(e,300))}))};for(o.s();!(n=o.n()).done;)i()}catch(a){o.e(a)}finally{o.f()}f(!0)}}})}),m.a.transitionAnimation);var g=Object(r.useRef)(),O=Object(r.useState)(0),C=O[0],R=O[1];return Object(r.useEffect)((function(){var t=g.current.offsetHeight/h;R(Math.floor(d*t))}),[g.current]),I(o.a.Fragment,null,I(A,{isVisible:s,inputEnable:n},I(k,null,I(B,{game:v,ref:g,adjustWidth:C}))))}))}}]);