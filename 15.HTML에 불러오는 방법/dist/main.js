(()=>{"use strict";var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},n(t,r)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function c(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function s(t,r,e){return r&&c(t.prototype,r),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}t.r(r),t.d(r,{isOdd:()=>l,logResult:()=>h,square:()=>a});var u=function(){function t(r,e){i(this,t),this.name=r,this.sound=e}return s(t,[{key:"fly",value:function(){console.log("".concat(this.name," ").concat(this.sound," 비행중"))}}]),t}(),f=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&n(t,r)}(f,t);var r,c,u=(r=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=o(r);if(c){var i=o(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return function(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function f(t,r,e){var n;return i(this,f),(n=u.call(this,t,r)).prey=e,n}return s(f,[{key:"hunt",value:function(){console.log("".concat(this.name," ").concat(this.prey," 사냥중"))}}]),f}(u),l=function(t){return t%2},a=function(t){return Math.pow(t,2)};function h(t){console.log("결과는 ".concat(t," 입니다."))}const p={x:1,array:[1,2,3,4,5],obj:{a:!0,b:!1},isEven:function(t){return!(t%2)}};var v=1e6,g="[big.js] ",y=g+"Invalid ",w=y+"decimal places",b=y+"rounding mode",d=g+"Division by zero",m={},E=void 0,P=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function j(t,r,e,n){var o=t.c;if(e===E&&(e=t.constructor.RM),0!==e&&1!==e&&2!==e&&3!==e)throw Error(b);if(r<1)n=3===e&&(n||!!o[0])||0===r&&(1===e&&o[0]>=5||2===e&&(o[0]>5||5===o[0]&&(n||o[1]!==E))),o.length=1,n?(t.e=t.e-r+1,o[0]=1):o[0]=t.e=0;else if(r<o.length){if(n=1===e&&o[r]>=5||2===e&&(o[r]>5||5===o[r]&&(n||o[r+1]!==E||1&o[r-1]))||3===e&&(n||!!o[0]),o.length=r,n)for(;++o[--r]>9;)if(o[r]=0,0===r){++t.e,o.unshift(1);break}for(r=o.length;!o[--r];)o.pop()}return t}function O(t,r,e){var n=t.e,o=t.c.join(""),i=o.length;if(r)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)o="0"+o;o="0."+o}else if(n>0)if(++n>i)for(n-=i;n--;)o+="0";else n<i&&(o=o.slice(0,n)+"."+o.slice(n));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return t.s<0&&e?"-"+o:o}m.abs=function(){var t=new this.constructor(this);return t.s=1,t},m.cmp=function(t){var r,e=this,n=e.c,o=(t=new e.constructor(t)).c,i=e.s,c=t.s,s=e.e,u=t.e;if(!n[0]||!o[0])return n[0]?i:o[0]?-c:0;if(i!=c)return i;if(r=i<0,s!=u)return s>u^r?1:-1;for(c=(s=n.length)<(u=o.length)?s:u,i=-1;++i<c;)if(n[i]!=o[i])return n[i]>o[i]^r?1:-1;return s==u?0:s>u^r?1:-1},m.div=function(t){var r=this,e=r.constructor,n=r.c,o=(t=new e(t)).c,i=r.s==t.s?1:-1,c=e.DP;if(c!==~~c||c<0||c>v)throw Error(w);if(!o[0])throw Error(d);if(!n[0])return t.s=i,t.c=[t.e=0],t;var s,u,f,l,a,h=o.slice(),p=s=o.length,g=n.length,y=n.slice(0,s),b=y.length,m=t,P=m.c=[],O=0,S=c+(m.e=r.e-t.e)+1;for(m.s=i,i=S<0?0:S,h.unshift(0);b++<s;)y.push(0);do{for(f=0;f<10;f++){if(s!=(b=y.length))l=s>b?1:-1;else for(a=-1,l=0;++a<s;)if(o[a]!=y[a]){l=o[a]>y[a]?1:-1;break}if(!(l<0))break;for(u=b==s?o:h;b;){if(y[--b]<u[b]){for(a=b;a&&!y[--a];)y[a]=9;--y[a],y[b]+=10}y[b]-=u[b]}for(;!y[0];)y.shift()}P[O++]=l?f:++f,y[0]&&l?y[b]=n[p]||0:y=[n[p]]}while((p++<g||y[0]!==E)&&i--);return P[0]||1==O||(P.shift(),m.e--,S--),O>S&&j(m,S,e.RM,y[0]!==E),m},m.eq=function(t){return 0===this.cmp(t)},m.gt=function(t){return this.cmp(t)>0},m.gte=function(t){return this.cmp(t)>-1},m.lt=function(t){return this.cmp(t)<0},m.lte=function(t){return this.cmp(t)<1},m.minus=m.sub=function(t){var r,e,n,o,i=this,c=i.constructor,s=i.s,u=(t=new c(t)).s;if(s!=u)return t.s=-u,i.plus(t);var f=i.c.slice(),l=i.e,a=t.c,h=t.e;if(!f[0]||!a[0])return a[0]?t.s=-u:f[0]?t=new c(i):t.s=1,t;if(s=l-h){for((o=s<0)?(s=-s,n=f):(h=l,n=a),n.reverse(),u=s;u--;)n.push(0);n.reverse()}else for(e=((o=f.length<a.length)?f:a).length,s=u=0;u<e;u++)if(f[u]!=a[u]){o=f[u]<a[u];break}if(o&&(n=f,f=a,a=n,t.s=-t.s),(u=(e=a.length)-(r=f.length))>0)for(;u--;)f[r++]=0;for(u=r;e>s;){if(f[--e]<a[e]){for(r=e;r&&!f[--r];)f[r]=9;--f[r],f[e]+=10}f[e]-=a[e]}for(;0===f[--u];)f.pop();for(;0===f[0];)f.shift(),--h;return f[0]||(t.s=1,f=[h=0]),t.c=f,t.e=h,t},m.mod=function(t){var r,e=this,n=e.constructor,o=e.s,i=(t=new n(t)).s;if(!t.c[0])throw Error(d);return e.s=t.s=1,r=1==t.cmp(e),e.s=o,t.s=i,r?new n(e):(o=n.DP,i=n.RM,n.DP=n.RM=0,e=e.div(t),n.DP=o,n.RM=i,this.minus(e.times(t)))},m.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},m.plus=m.add=function(t){var r,e,n,o=this,i=o.constructor;if(t=new i(t),o.s!=t.s)return t.s=-t.s,o.minus(t);var c=o.e,s=o.c,u=t.e,f=t.c;if(!s[0]||!f[0])return f[0]||(s[0]?t=new i(o):t.s=o.s),t;if(s=s.slice(),r=c-u){for(r>0?(u=c,n=f):(r=-r,n=s),n.reverse();r--;)n.push(0);n.reverse()}for(s.length-f.length<0&&(n=f,f=s,s=n),r=f.length,e=0;r;s[r]%=10)e=(s[--r]=s[r]+f[r]+e)/10|0;for(e&&(s.unshift(e),++u),r=s.length;0===s[--r];)s.pop();return t.c=s,t.e=u,t},m.pow=function(t){var r=this,e=new r.constructor("1"),n=e,o=t<0;if(t!==~~t||t<-1e6||t>1e6)throw Error(y+"exponent");for(o&&(t=-t);1&t&&(n=n.times(r)),t>>=1;)r=r.times(r);return o?e.div(n):n},m.prec=function(t,r){if(t!==~~t||t<1||t>v)throw Error(y+"precision");return j(new this.constructor(this),t,r)},m.round=function(t,r){if(t===E)t=0;else if(t!==~~t||t<-v||t>v)throw Error(w);return j(new this.constructor(this),t+this.e+1,r)},m.sqrt=function(){var t,r,e,n=this,o=n.constructor,i=n.s,c=n.e,s=new o("0.5");if(!n.c[0])return new o(n);if(i<0)throw Error(g+"No square root");0===(i=Math.sqrt(n+""))||i===1/0?((r=n.c.join("")).length+c&1||(r+="0"),c=((c+1)/2|0)-(c<0||1&c),t=new o(((i=Math.sqrt(r))==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+c)):t=new o(i+""),c=t.e+(o.DP+=4);do{e=t,t=s.times(e.plus(n.div(e)))}while(e.c.slice(0,c).join("")!==t.c.slice(0,c).join(""));return j(t,(o.DP-=4)+t.e+1,o.RM)},m.times=m.mul=function(t){var r,e=this,n=e.constructor,o=e.c,i=(t=new n(t)).c,c=o.length,s=i.length,u=e.e,f=t.e;if(t.s=e.s==t.s?1:-1,!o[0]||!i[0])return t.c=[t.e=0],t;for(t.e=u+f,c<s&&(r=o,o=i,i=r,f=c,c=s,s=f),r=new Array(f=c+s);f--;)r[f]=0;for(u=s;u--;){for(s=0,f=c+u;f>u;)s=r[f]+i[u]*o[f-u-1]+s,r[f--]=s%10,s=s/10|0;r[f]=s}for(s?++t.e:r.shift(),u=r.length;!r[--u];)r.pop();return t.c=r,t},m.toExponential=function(t,r){var e=this,n=e.c[0];if(t!==E){if(t!==~~t||t<0||t>v)throw Error(w);for(e=j(new e.constructor(e),++t,r);e.c.length<t;)e.c.push(0)}return O(e,!0,!!n)},m.toFixed=function(t,r){var e=this,n=e.c[0];if(t!==E){if(t!==~~t||t<0||t>v)throw Error(w);for(t=t+(e=j(new e.constructor(e),t+e.e+1,r)).e+1;e.c.length<t;)e.c.push(0)}return O(e,!1,!!n)},m[Symbol.for("nodejs.util.inspect.custom")]=m.toJSON=m.toString=function(){var t=this,r=t.constructor;return O(t,t.e<=r.NE||t.e>=r.PE,!!t.c[0])},m.toNumber=function(){var t=Number(O(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(t.toString()))throw Error(g+"Imprecise conversion");return t},m.toPrecision=function(t,r){var e=this,n=e.constructor,o=e.c[0];if(t!==E){if(t!==~~t||t<1||t>v)throw Error(y+"precision");for(e=j(new n(e),t,r);e.c.length<t;)e.c.push(0)}return O(e,t<=e.e||e.e<=n.NE||e.e>=n.PE,!!o)},m.valueOf=function(){var t=this,r=t.constructor;if(!0===r.strict)throw Error(g+"valueOf disallowed");return O(t,t.e<=r.NE||t.e>=r.PE,!0)};const S=function t(){function r(e){var n=this;if(!(n instanceof r))return e===E?t():new r(e);if(e instanceof r)n.s=e.s,n.e=e.e,n.c=e.c.slice();else{if("string"!=typeof e){if(!0===r.strict&&"bigint"!=typeof e)throw TypeError(y+"value");e=0===e&&1/e<0?"-0":String(e)}!function(t,r){var e,n,o;if(!P.test(r))throw Error(y+"number");for(t.s="-"==r.charAt(0)?(r=r.slice(1),-1):1,(e=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(e<0&&(e=n),e+=+r.slice(n+1),r=r.substring(0,n)):e<0&&(e=r.length),o=r.length,n=0;n<o&&"0"==r.charAt(n);)++n;if(n==o)t.c=[t.e=0];else{for(;o>0&&"0"==r.charAt(--o););for(t.e=e-n-1,t.c=[],e=0;n<=o;)t.c[e++]=+r.charAt(n++)}}(n,e)}n.constructor=r}return r.prototype=m,r.DP=20,r.RM=1,r.NE=-7,r.PE=21,r.strict=!1,r.roundDown=0,r.roundHalfUp=1,r.roundHalfEven=2,r.roundUp=3,r}();console.log(S),console.log(.1+.2,new S(.1).plus(.2).toNumber()),console.log(.2*.7,new S(.2).times(.7).toNumber()),console.log(.9-.6,new S(.9).minus(.6).toNumber()),console.log(1,2,{name:"홍길동",age:20}),console.log(11);var R=new u("짹짹이","파닥파닥"),M=new f("이글이","훨훨","사슴");R.fly(),M.hunt(),console.log(R.name),console.log(r),h([1,2,3,4,5].filter((function(t){return l(t)})).map(a).join(", ")),console.log(h(p.array.filter((function(t){return p.isEven(t)})).join(", ")))})();