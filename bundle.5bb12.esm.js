!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({Bs1C:function(t,e,n){"use strict";(function(t){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n("hosL"),i=n("kVwD");e.a=class extends o.Component{constructor(...t){super(...t),r(this,"state",{time:Date.now()}),r(this,"d",new Date)}componentDidMount(){this.timer=setInterval((()=>{this.setState({time:Date.now()})}),1e3)}render(){let e=new Date(this.state.time).toDateString(),n=new Date(this.state.time).toLocaleTimeString(),r=new Date(this.state.time).getHours(),u=new Date(this.state.time).getMinutes(),_=30*r+u/2,l=6*u,c=6*new Date(this.state.time).getSeconds();return Object(o.h)(t,null,Object(o.h)("div",{class:i.a.container},Object(o.h)("div",{class:i.a.clockContainer},Object(o.h)("div",{class:i.a.hour,style:`transform: rotate(${_}deg);`}),Object(o.h)("div",{class:i.a.minute,style:`transform: rotate(${l}deg);`}),Object(o.h)("div",{class:i.a.second,style:`transform: rotate(${c}deg);`}))),Object(o.h)("br",null),Object(o.h)("div",null,n,Object(o.h)("br",null),e))}}}).call(this,n("hosL").Fragment)},QfWi:function(t,e,n){"use strict";function r(t,e){a.options.__h&&a.options.__h(y,t,C||e),C=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:x}),n.__[t]}function o(t){return C=1,function(t,e,n){var o=r(m++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):c(void 0,e),function(t){var e=o.__N?o.__N[0]:o.__[0],n=o.t(e,t);e!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(t,e,n){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(t){return t.__c}));if(r.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var u=!1;return r.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(u=!0)}})),!!u&&(!i||i.call(this,t,e,n))}}return o.__N||o.__}(c,t)}function i(){for(var t;t=j.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(u),t.__H.__h.forEach(_),t.__H.__h=[]}catch(e){t.__H.__h=[],a.options.__e(e,t.__v)}}function u(t){var e=y,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),y=e}function _(t){var e=y;t.__c=t.__(),y=e}function l(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function c(t,e){return"function"==typeof e?e(t):e}n.r(e);var a=n("hosL"),s=n("Y3FI"),f=n("ox/y"),p="header__OVZyn",h="active__r+Z6z";var d=()=>Object(a.h)("header",{class:p},Object(a.h)("h1",null,"Preact Applicaton"),Object(a.h)("nav",null,Object(a.h)(f.Link,{activeClassName:h,href:"/"},"Home"),Object(a.h)(f.Link,{activeClassName:h,href:"/clock"},"Clock"),Object(a.h)(f.Link,{activeClassName:h,href:"/stopwatch"},"Stopwatch"))),v="container__u2Tbw";var m,y,b,g,k=()=>Object(a.h)("div",{class:v},Object(a.h)("h1",null,"Home"),Object(a.h)("p",null,"This is the Home component.")),O=n("Bs1C"),C=0,j=[],x=[],w=a.options.__b,S=a.options.__r,A=a.options.diffed,E=a.options.__c,U=a.options.unmount;a.options.__b=function(t){y=null,w&&w(t)},a.options.__r=function(t){S&&S(t),m=0;var e=(y=t.__c).__H;e&&(b===y?(e.__h=[],y.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=x,t.__N=t.i=void 0}))):(e.__h.forEach(u),e.__h.forEach(_),e.__h=[])),b=y},a.options.diffed=function(t){A&&A(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==j.push(e)&&g===a.options.requestAnimationFrame||((g=a.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),D&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);D&&(e=requestAnimationFrame(n))})(i)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==x&&(t.__=t.__V),t.i=void 0,t.__V=x}))),b=y=null},a.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||_(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],a.options.__e(n,t.__v)}})),E&&E(t,e)},a.options.unmount=function(t){U&&U(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),e&&a.options.__e(e,n.__v))};var D="function"==typeof requestAnimationFrame,L="container__Bfh8q",N="stopwatchDisplay__Yd3Dh",P="controls__k665q";var H=()=>{const[t,e]=o(0),[n,i]=o(!1);var u,_,c;return u=()=>{let t;return n?t=setInterval((()=>{e((t=>t+10))}),10):n||clearInterval(t),()=>clearInterval(t)},_=[n],c=r(m++,3),!a.options.__s&&l(c.__H,_)&&(c.__=u,c.i=_,y.__H.__h.push(c)),Object(a.h)("div",{className:L},Object(a.h)("div",{className:N},Object(a.h)("span",null,("0"+Math.floor(t/6e4%60)).slice(-2),":"),Object(a.h)("span",null,("0"+Math.floor(t/1e3%60)).slice(-2),":"),Object(a.h)("span",null,("0"+t/10%100).slice(-2))),Object(a.h)("div",{className:P},Object(a.h)("button",{onClick:()=>i(!0)},"Start"),Object(a.h)("button",{onClick:()=>i(!1)},"Stop"),Object(a.h)("button",{onClick:()=>e(0)},"Reset")))};e.default=()=>Object(a.h)("div",{id:"app"},Object(a.h)(d,null),Object(a.h)(s.Router,null,Object(a.h)(k,{path:"/"}),Object(a.h)(O.a,{path:"/clock"}),Object(a.h)(H,{path:"/stopwatch"})))},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var a=l[c].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=_(t.replace(o,"")),e=_(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||m)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=t[f]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(y),d||v){u[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,_(e).map(l).join(""));var e}(t),t.props}function _(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function a(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),y&&y[e]?y[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return g})),n.d(e,"getCurrentUrl",(function(){return c})),n.d(e,"route",(function(){return a})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return j})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),m={},y=null,b=[],g=[],k={},O=!1,C=function(t){function e(e){t.call(this,e),e.history&&(y=e.history),this.state={url:e.url||c()},O||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),O=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;y&&(this.unlisten=y.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,_=this.previousUrl;return o!==_&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:_,active:i,current:u})),u},e}(v.Component),j=function(t){return Object(v.createElement)("a",r({onClick:p},t))},x=function(t){return Object(v.createElement)(t.component,t)};C.subscribers=g,C.getCurrentUrl=c,C.route=a,C.Router=C,C.Route=x,C.Link=j,C.exec=o,e.default=C},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,_={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:_[i]=e[i];if(arguments.length>2&&(_.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===_[i]&&(_[i]=t.defaultProps[i]);return u(t,_,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++P:o};return null==o&&null!=N.vnode&&N.vnode(i),i}function _(){return{current:null}}function l(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!p.__r++||M!==N.debounceRendering)&&((M=N.debounceRendering)||setTimeout)(p)}function p(){for(var t;p.__r=T.length;)t=T.sort((function(t,e){return t.__v.__b-e.__v.__b})),T=[],t.some((function(t){var e,n,o,i,u,_;t.__d&&(u=(i=(e=t).__v).__e,(_=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(_,i,o,e.__n,void 0!==_.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?a(i):u,i.__h),C(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,_,c,s,f){var p,h,v,y,b,g,k,C=r&&r.__k||W,j=C.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(y=n.__k[p]=null==(y=e[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(l,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=C[p])||v&&y.key==v.key&&y.type===v.type)C[p]=void 0;else for(h=0;h<j;h++){if((v=C[h])&&y.key==v.key&&y.type===v.type){C[h]=void 0;break}v=null}O(t,y,v=v||I,o,i,_,c,s,f),b=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=d(y,s,t):s=m(t,y,v,C,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=a(v))}for(n.__e=g,p=j;p--;)null!=C[p]&&("function"==typeof n.type&&null!=C[p].__e&&C[p].__e==n.__d&&(n.__d=a(r,p+1)),w(C[p],C[p]));if(k)for(p=0;p<k.length;p++)x(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):m(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,r,o,i){var u,_,l;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(_=i,l=0;(_=_.nextSibling)&&l<r.length;l+=2)if(_==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function b(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:g,i):t.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function g(t){this.l[t.type+!1](N.event?N.event(t):t)}function k(t){this.l[t.type+!0](N.event?N.event(t):t)}function O(t,e,n,o,i,u,_,a,s){var f,p,d,v,m,y,b,g,k,O,C,x,w,A=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,a=e.__e=n.__e,e.__h=null,u=[a]),(f=N.__b)&&f(e);try{t:if("function"==typeof A){if(g=e.props,k=(f=A.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=e.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?e.__c=p=new A(g,O):(e.__c=p=new c(g,O),p.constructor=A,p.render=S),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(g,p.__s))),v=p.props,m=p.state,d)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||e.__v===n.__v){p.props=g,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&_.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}if(p.context=O,p.props=g,p.__v=e,p.__P=t,C=N.__r,x=0,"prototype"in A&&A.prototype.render)p.state=p.__s,p.__d=!1,C&&C(e),f=p.render(p.props,p.state,p.context);else do{p.__d=!1,C&&C(e),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++x<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),w=null!=f&&f.type===l&&null==f.key?f.props.children:f,h(t,Array.isArray(w)?w:[w],e,n,o,i,u,_,a,s),p.base=e.__e,e.__h=null,p.__h.length&&_.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,o,i,u,_,s);(f=N.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=a,e.__h=!!s,u[u.indexOf(a)]=null),N.__e(t,e,n)}}function C(t,e){N.__c&&N.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){N.__e(t,e.__v)}}))}function j(t,e,n,r,i,u,_,l){var c,s,f,p=n.props,d=e.props,v=e.type,m=0;if("svg"===v&&(i=!0),null!=u)for(;m<u.length;m++)if((c=u[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[m]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,l=!1}if(null===v)p===d||l&&t.data===d||(t.data=d);else{if(u=u&&L.call(t.childNodes),s=(p=n.props||I).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!l){if(null!=u)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)}(t,d,p,i,l),f)e.__k=[];else if(m=e.props.children,h(t,Array.isArray(m)?m:[m],e,n,r,i&&"foreignObject"!==v,u,_,u?u[0]:n.__k&&a(n,0),l),null!=u)for(m=u.length;m--;)null!=u[m]&&o(u[m]);l||("value"in d&&void 0!==(m=d.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&b(t,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==t.checked&&b(t,"checked",m,p.checked,!1))}return t}function x(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){N.__e(t,n)}}function w(t,e,n){var r,i;if(N.unmount&&N.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||x(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){N.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&w(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function A(t,e,n){var r,o,u;N.__&&N.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],O(e,t=(!r&&n||e).__k=i(l,null,[t]),o||I,I,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?L.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),C(u,t)}function E(t,e){A(t,e,E)}function U(t,e,n){var o,i,_,l=r({},t.props);for(_ in e)"key"==_?o=e[_]:"ref"==_?i=e[_]:l[_]=e[_];return arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),u(t.type,l,o||t.key,i||t.ref,null)}function D(t,e){var n={__c:e="__cC"+R++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return A})),n.d(e,"hydrate",(function(){return E})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return l})),n.d(e,"createRef",(function(){return _})),n.d(e,"isValidElement",(function(){return H})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return U})),n.d(e,"createContext",(function(){return D})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return N}));var L,N,P,H,T,M,R,I={},W=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=W.slice,N={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},P=0,H=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=l,T=[],p.__r=0,R=0},kVwD:function(t,e){"use strict";e.a={container:"container__7Aj5E",clockContainer:"clockContainer__7VL3k",hour:"hour__3Niq1",minute:"minute__VXPtJ",second:"second__zDuaY"}},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,_=t=>t&&t.default?t.default:t,l=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw-esm.js"),"function"==typeof _(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=_(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const a={preRenderData:r},s=r.url?l(r.url):"";(u&&s===l(location.pathname)?u:i)(o(e,{CLI_DATA:a}),document.body,t)};0,e()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),_=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),l=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(_,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=l,e.default=_,_.Link=l}});
//# sourceMappingURL=bundle.5bb12.esm.js.map