var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,l){if(t){const s=i(t,e,n,l);return t[0](s)}}function i(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function c(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|s[l];return t}return e.dirty|s}return e.dirty}function a(t,e,n,l,s,o){if(s){const r=i(e,n,l,o);t.p(r,s)}}function u(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function f(t){return null==t?"":t}function d(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function w(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function z(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let S,_;function M(){if(void 0===S){S=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){S=!0}}return S}function C(t){_=t}function j(){if(!_)throw new Error("Function called outside component initialization");return _}function T(t){j().$$.on_mount.push(t)}function A(t){return j().$$.context.get(t)}const D=[],L=[],E=[],W=[],N=Promise.resolve();let B=!1;function H(t){E.push(t)}function I(t){W.push(t)}let F=!1;const X=new Set;function P(){if(!F){F=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];C(e),O(e.$$)}for(C(null),D.length=0;L.length;)L.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];X.has(e)||(X.add(e),e())}E.length=0}while(D.length);for(;W.length;)W.pop()();B=!1,F=!1,X.clear()}}function O(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const R=new Set;let J;function U(t,e){t&&t.i&&(R.delete(t),t.i(e))}function G(t,e,n,l){if(t&&t.o){if(R.has(t))return;R.add(t),J.c.push((()=>{R.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Q(t,e,n){const l=t.$$.props[e];void 0!==l&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function V(t){t&&t.c()}function Y(t,n,o,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,o),r||H((()=>{const n=c.map(e).filter(s);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(H)}function Z(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(D.push(t),B||(B=!0,N.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,s,o,r,i,c,a,u=[-1]){const f=_;C(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1,root:s.target||f.$$.root};a&&a(d.root);let p=!1;if(d.ctx=o?o(e,s.props||{},((t,n,...l)=>{const s=l.length?l[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&tt(e,t)),n})):[],d.update(),p=!0,l(d.before_update),d.fragment=!!r&&r(d.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();s.intro&&U(e.$$.fragment),Y(e,s.target,s.anchor,s.customElement),P()}C(f)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function lt(e){let n,l,s,o,r,i,c,a,u,f;return{c(){n=$("svg"),l=$("defs"),s=$("symbol"),o=$("path"),r=$("symbol"),i=$("path"),c=$("symbol"),a=$("path"),u=$("symbol"),f=$("path"),x(o,"d","M17.362 16.438l8.339 8.483c-2.125 1.908-4.925 3.079-8.006 3.079-6.627 0-12-5.373-12-12s5.373-12 12-12c3.38 0 6.428 1.402 8.609 3.65l-8.942 8.788zM18.174 7.958c-0.828 0-1.499 0.672-1.499 1.5 0 0.829 0.671 1.5 1.499 1.5 0.829 0 1.501-0.671 1.501-1.5 0-0.828-0.672-1.5-1.501-1.5z"),x(s,"id","icon-pacman"),x(s,"viewBox","0 0 32 32"),x(i,"d","M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"),x(r,"id","icon-question"),x(r,"viewBox","0 0 32 32"),x(a,"d","M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"),x(c,"id","icon-github"),x(c,"viewBox","0 0 32 32"),x(f,"d","M32 18v-12h-6v-2c0-1.1-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h22c1.1 0 2-0.9 2-2v-2h4v8h-18v4h-1c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-10c0-0.552-0.448-1-1-1h-1v-2h18zM24 6h-22v-2h22v2z"),x(u,"id","icon-paint"),x(u,"viewBox","0 0 32 32"),x(n,"aria-hidden","true"),z(n,"position","absolute"),z(n,"width","0"),z(n,"height","0"),z(n,"overflow","hidden"),x(n,"version","1.1"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){p(t,n,e),d(n,l),d(l,s),d(s,o),d(l,r),d(r,i),d(l,c),d(c,a),d(l,u),d(u,f)},p:t,i:t,o:t,d(t){t&&h(n)}}}class st extends nt{constructor(t){super(),et(this,t,null,lt,o,{})}}function ot(t){let e,n,l;return{c(){e=$("svg"),n=$("use"),b(n,"xlink:href",l="#icon-"+t[2]),x(n,"class","svelte-14195nk"),x(e,"class","svelte-14195nk")},m(t,l){p(t,e,l),d(e,n)},p(t,e){4&e&&l!==(l="#icon-"+t[2])&&b(n,"xlink:href",l)},d(t){t&&h(e)}}}function rt(t){let e,n,l;return{c(){e=g("span"),n=v(t[0]),x(e,"class",l=f(null==t[2]?"lpad":"")+" svelte-14195nk")},m(t,l){p(t,e,l),d(e,n)},p(t,s){1&s&&q(n,t[0]),4&s&&l!==(l=f(null==t[2]?"lpad":"")+" svelte-14195nk")&&x(e,"class",l)},d(t){t&&h(e)}}}function it(e){let n,l,o,r,i,c,a=e[2]&&ot(e),u=e[0]&&rt(e);return{c(){n=g("a"),a&&a.c(),l=y(),u&&u.c(),x(n,"id",e[4]),x(n,"class",o=f(e[3])+" svelte-14195nk"),x(n,"style",e[5]),x(n,"href",r=e[6]?void 0:e[1])},m(t,o){p(t,n,o),a&&a.m(n,null),d(n,l),u&&u.m(n,null),i||(c=w(n,"click",(function(){s(e[6]?e[7]:void 0)&&(e[6]?e[7]:void 0).apply(this,arguments)})),i=!0)},p(t,[s]){(e=t)[2]?a?a.p(e,s):(a=ot(e),a.c(),a.m(n,l)):a&&(a.d(1),a=null),e[0]?u?u.p(e,s):(u=rt(e),u.c(),u.m(n,null)):u&&(u.d(1),u=null),16&s&&x(n,"id",e[4]),8&s&&o!==(o=f(e[3])+" svelte-14195nk")&&x(n,"class",o),32&s&&x(n,"style",e[5]),66&s&&r!==(r=e[6]?void 0:e[1])&&x(n,"href",r)},i:t,o:t,d(t){t&&h(n),a&&a.d(),u&&u.d(),i=!1,c()}}}function ct(t,e,n){let{title:l=""}=e,{target:s}=e,{icon:o}=e,{cssClass:r=""}=e,{id:i=""}=e,{style:c=""}=e,a=!1;const{navigate:u}=A("nav");return null!=s&&s.startsWith("/")&&(a=!0),t.$$set=t=>{"title"in t&&n(0,l=t.title),"target"in t&&n(1,s=t.target),"icon"in t&&n(2,o=t.icon),"cssClass"in t&&n(3,r=t.cssClass),"id"in t&&n(4,i=t.id),"style"in t&&n(5,c=t.style)},[l,s,o,r,i,c,a,function(){u(s)}]}class at extends nt{constructor(t){super(),et(this,t,ct,it,o,{title:0,target:1,icon:2,cssClass:3,id:4,style:5})}}function ut(e){let n,l,s,o,r,i,c,a;return{c(){n=g("button"),l=$("svg"),s=$("use"),r=y(),i=g("h1"),i.textContent="ADia Live Demo",b(s,"xlink:href","#icon-pacman"),x(s,"class","svelte-1jmq71q"),x(l,"class",o=f(e[0]?"start":"stop")+" svelte-1jmq71q"),x(i,"class","svelte-1jmq71q"),x(n,"class","svelte-1jmq71q")},m(t,o){p(t,n,o),d(n,l),d(l,s),d(n,r),d(n,i),c||(a=w(n,"click",e[2]),c=!0)},p(t,[e]){1&e&&o!==(o=f(t[0]?"start":"stop")+" svelte-1jmq71q")&&x(l,"class",o)},i:t,o:t,d(t){t&&h(n),c=!1,a()}}}function ft(t,e,n){const{navigate:l}=A("nav");let{spin:s=!0}=e;return t.$$set=t=>{"spin"in t&&n(0,s=t.spin)},[s,l,()=>l("/")]}class dt extends nt{constructor(t){super(),et(this,t,ft,ut,o,{spin:0})}}const pt=[{name:"newline",pattern:/\r?\n/},{name:"comment",pattern:/^ *#.*(?=$)/},{name:"return",pattern:/(?<==> *).+ *(?=$)/},{name:"multilinepipe",pattern:/(?<=:) ?\|/},{name:"text1",pattern:/(?<=:) *.+(?==>)/},{name:"text2",pattern:/(?<=:) *.+(?=$)/},{name:"diagram",pattern:/diagram/},{name:"attr",pattern:/version|author/},{name:"sequence",pattern:/sequence/},{name:"moduleattrattr",pattern:/(?<=\.)title/},{name:"moduleattrmodule",pattern:/^\w+(?=\.)/},{name:"notemodulefirst",pattern:/(?<=@)\w+/},{name:"notemodulesecond",pattern:/(?<=@.*~\s)\w+/},{name:"caller",pattern:/(?<=^ *)\w+ *(?=->)/},{name:"callee",pattern:/(?<=->) *\w+ *(?=:|$)/},{name:"keyword",pattern:/(?<=^ *)(if|elif|else|for|while)(?=:|$)/},{name:"keyop",pattern:/->|=>|~|@|\./},{name:"op",pattern:/[:!\$%\^&*\(\)+=_\]\[\}\{;"'?/\\<>,~-]/},{name:"whitespace",pattern:/\s/},{name:"other",pattern:/\S+/}];function ht(t,e,n){return String(t).padStart(e,n)}function mt(t,e,n){const l=t.slice();return l[15]=e[n],l}function gt(t){let e,n,l=ht(t[15]+1,t[4]," ")+"";return{c(){e=g("span"),n=v(l),x(e,"class","svelte-7i3kzt")},m(t,l){p(t,e,l),d(e,n)},p(t,e){24&e&&l!==(l=ht(t[15]+1,t[4]," ")+"")&&q(n,l)},d(t){t&&h(e)}}}function $t(e){let n,o,r,i,c,a,u,f,$,v,b=[...Array(e[3]).keys()],q=[];for(let t=0;t<b.length;t+=1)q[t]=gt(mt(e,b,t));return{c(){n=g("span"),n.textContent="X",o=y(),r=g("div"),i=g("pre"),c=y(),a=g("div");for(let t=0;t<q.length;t+=1)q[t].c();u=y(),f=g("textarea"),x(n,"class","monospace-massure svelte-7i3kzt"),x(i,"class","highlight svelte-7i3kzt"),z(i,"padding-left",e[6]+vt+"px"),x(a,"class","numbers svelte-7i3kzt"),z(a,"width",e[6]+"px"),x(f,"spellcheck","false"),x(f,"wrap","off"),z(f,"padding-left",e[6]+vt+"px"),x(f,"class","svelte-7i3kzt"),x(r,"id","sourceParent"),x(r,"class","svelte-7i3kzt")},m(l,h){p(l,n,h),e[10](n),p(l,o,h),p(l,r,h),d(r,i),e[11](i),d(r,c),d(r,a);for(let t=0;t<q.length;t+=1)q[t].m(a,null);var m;e[12](a),d(r,u),d(r,f),k(f,e[0]),e[14](f),$||(v=[(m=e[7].call(null,n),m&&s(m.destroy)?m.destroy:t),w(f,"input",e[13]),w(f,"scroll",e[8])],$=!0)},p(t,[e]){if(64&e&&z(i,"padding-left",t[6]+vt+"px"),24&e){let n;for(b=[...Array(t[3]).keys()],n=0;n<b.length;n+=1){const l=mt(t,b,n);q[n]?q[n].p(l,e):(q[n]=gt(l),q[n].c(),q[n].m(a,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=b.length}64&e&&z(a,"width",t[6]+"px"),64&e&&z(f,"padding-left",t[6]+vt+"px"),1&e&&k(f,t[0])},i:t,o:t,d(t){t&&h(n),e[10](null),t&&h(o),t&&h(r),e[11](null),m(q,t),e[12](null),e[14](null),$=!1,l(v)}}}let vt=4;function yt(t,e,n){let l,s,o,r,i,{value:c=""}=e,a=11,u=1;function f(){n(1,o.scrollLeft=i.scrollLeft,o),n(1,o.scrollTop=i.scrollTop,o),n(5,r.scrollTop=i.scrollTop,r)}return t.$$set=t=>{"value"in t&&n(0,c=t.value)},t.$$.update=()=>{if(7&t.$$.dirty&&i){const{tokens:t,lines:e}=function(t){let e,n=[],l=0;for(let t=0;t<pt.length;t++){let e=pt[t];n.push(`(?<${e.name}>${e.pattern.source})`)}const s=new RegExp(n.join("|"),"gmi"),o=[];for(const n of t.matchAll(s))for(let t in n.groups)e=n.groups[t],null!=e&&("newline"==t&&l++,o.push({name:t,text:e}));const r=o[o.length-1];return r&&"newline"==r.name&&o.push({name:"whitespace",text:" "}),l++,{tokens:o,lines:l}}(c);n(3,u=e),f(),function(t,e,n){const l=t.childNodes;var s,o,r;for(s=0;s<n.length&&s<l.length&&n[s]===l[s].textContent;s++);for(;n.length<l.length;)t.removeChild(l[s]);for(o=n.length-1,r=l.length-1;s<r&&n[o]===l[r].textContent;o--,r--);for(;s<=r;s++){const t=n[s];l[s].className=t.name,l[s].textContent=l[s].innerText=t.text}for(var i=l[s]||null;s<=o;s++){var c=document.createElement("span");const e=n[s];c.className=e.name,c.textContent=c.innerText=e.text,t.insertBefore(c,i)}}(o,0,t)}8&t.$$.dirty&&n(4,l=u.toString().length),528&t.$$.dirty&&n(6,s=l*a+12)},[c,o,i,u,l,r,s,function(t){n(9,a=t.clientWidth)},f,a,function(t){L[t?"unshift":"push"]((()=>{r=t,n(5,r)}))},function(t){L[t?"unshift":"push"]((()=>{o=t,n(1,o)}))},function(t){L[t?"unshift":"push"]((()=>{r=t,n(5,r)}))},function(){c=this.value,n(0,c)},function(t){L[t?"unshift":"push"]((()=>{i=t,n(2,i)}))}]}class wt extends nt{constructor(t){super(),et(this,t,yt,$t,o,{value:0})}}const{window:xt}=K;function bt(t){let e,n,s,o,i,f,m,$,v,b,q,S,_,C,j,T,A,D,E,W;H(t[14]);const N=t[13].default,B=r(N,t,t[12],null);function F(e){t[16](e)}o=new at({props:{icon:"question",style:"float: right",target:"/about"}});let X={};return void 0!==t[0]&&(X.value=t[0]),b=new wt({props:X}),t[15](b),L.push((()=>Q(b,"value",F))),{c(){e=g("div"),n=g("nav"),B&&B.c(),s=y(),V(o.$$.fragment),i=y(),f=g("span"),f.textContent=`${qt}`,m=y(),$=g("div"),v=g("div"),V(b.$$.fragment),_=y(),C=g("div"),j=y(),T=g("div"),A=g("textarea"),x(f,"class","svelte-u7s56u"),x(n,"class","svelte-u7s56u"),z(v,"--left-size",t[7]),x(v,"class","left svelte-u7s56u"),H((()=>t[18].call(v))),x(C,"class","separator svelte-u7s56u"),x(A,"spellcheck","false"),x(A,"wrap","off"),x(A,"class","pad1 svelte-u7s56u"),A.disabled=!0,z(T,"--right-size",t[8]),x(T,"class","right svelte-u7s56u"),x($,"class","wrapper svelte-u7s56u"),x(e,"class","main-wrapper svelte-u7s56u")},m(l,r){p(l,e,r),d(e,n),B&&B.m(n,null),d(n,s),Y(o,n,null),d(n,i),d(n,f),d(e,m),d(e,$),d($,v),Y(b,v,null),t[17](v),S=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=g("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const l=M();let s;return l?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=w(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=w(n.contentWindow,"resize",e)}),d(t,n),()=>{(l||s&&n.contentWindow)&&s(),h(n)}}(v,t[18].bind(v)),d($,_),d($,C),d($,j),d($,T),d(T,A),k(A,t[6]),t[20](T),D=!0,E||(W=[w(xt,"resize",t[14]),w(C,"mousedown",t[9]),w(C,"mouseup",t[10]),w(A,"input",t[19])],E=!0)},p(t,[e]){B&&B.p&&(!D||4096&e)&&a(B,N,t,t[12],D?c(N,t[12],e,null):u(t[12]),null);const n={};!q&&1&e&&(q=!0,n.value=t[0],I((()=>q=!1))),b.$set(n),64&e&&k(A,t[6])},i(t){D||(U(B,t),U(o.$$.fragment,t),U(b.$$.fragment,t),D=!0)},o(t){G(B,t),G(o.$$.fragment,t),G(b.$$.fragment,t),D=!1},d(n){n&&h(e),B&&B.d(n),Z(o),t[15](null),Z(b),t[17](null),S(),t[20](null),E=!1,l(W)}}}let qt="";function kt(t,e,n){let l,s,o,r,i,c,a,{$$slots:u={},$$scope:f}=e,{busy:d=!0}=e,p=localStorage.getItem("leftSize")?`${localStorage.getItem("leftSize")}%`:"20%",h=localStorage.getItem("leftSize")?100-Math.round(localStorage.getItem("leftSize"))+"%":"80%",m="";function g(t){if(t.clientX!==r.e.clientX){let e=t.clientX-r.e.clientX;e=Math.min(Math.max(e,-r.leftWidth),r.rightWidth),n(2,s.style.width=r.leftWidth+e+"px",s),n(3,o.style.width=r.rightWidth-e+"px",o)}}return T((async function(){let t=localStorage.getItem("editorText");null!=t&&t.trim().length>0?n(0,a=t):n(0,a="# Live Demo\n\ndiagram: Foo\nauthor: Alice\nversion: 0.1\n\n# First section\nsequence: Hello\nfoo.title: Foo\n\n@foo: Say Hello\nfoo -> bar: helloworld => Hi\n  @foo ~ baz: |\n    lorem ipsum\n  for: each item\n    bar -> baz: Hello()\n\n# Second section\nsequence: Bye\n\nfoo -> bar: Bye() => See U there\n  if: baz is there\n    bar -> baz: Bye()"),aDia.input=()=>(localStorage.setItem("editorText",a),a),aDia.onresult=()=>n(6,m=""),aDia.onerror=(t,e)=>n(6,m=e),aDia.onsuccess=(t,e)=>n(6,m=e),n(11,d=!1),aDia.source=""})),t.$$set=t=>{"busy"in t&&n(11,d=t.busy),"$$scope"in t&&n(12,f=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&null!=a&&aDia.go()},[a,l,s,o,i,c,m,p,h,function(t){r={e:t,leftWidth:s.offsetWidth,rightWidth:o.offsetWidth},window.addEventListener("mousemove",g)},function(){localStorage.setItem("leftSize",Math.round(c/(i-14)*100)),window.removeEventListener("mousemove",g)},d,f,u,function(){n(4,i=xt.innerWidth)},function(t){L[t?"unshift":"push"]((()=>{l=t,n(1,l)}))},function(t){a=t,n(0,a)},function(t){L[t?"unshift":"push"]((()=>{s=t,n(2,s)}))},function(){c=this.clientWidth,n(5,c)},function(){m=this.value,n(6,m)},function(t){L[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}class zt extends nt{constructor(t){super(),et(this,t,kt,bt,o,{busy:11})}}const St=[];const _t=function(e,n=t){let l;const s=new Set;function r(t){if(o(e,t)&&(e=t,l)){const t=!St.length;for(const t of s)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,i=t){const c=[o,i];return s.add(c),1===s.size&&(l=n(r)||t),o(e),()=>{s.delete(c),0===s.size&&(l(),l=null)}}}}(0);function Mt(t,e,n){const l=t.slice();return l[8]=e[n],l}function Ct(t,e,n){const l=t.slice();return l[11]=e[n],l[13]=n,l}function jt(t,e,n){const l=t.slice();return l[11]=e[n],l[13]=n,l}function Tt(t){let e,n,l,s,o,r,i,c=t[11]+"",a=0==t[13]&&function(t){let e;return{c(){e=g("i"),e.textContent="(latest)",x(e,"class","svelte-1uqyrre")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}();return{c(){e=g("li"),n=g("a"),l=v("v"),s=v(c),o=y(),a&&a.c(),i=y(),x(n,"href",r="/adia/docs/"+(0==t[13]?"latest":t[11])+"/html/"),x(n,"class","svelte-1uqyrre"),x(e,"class","svelte-1uqyrre")},m(t,r){p(t,e,r),d(e,n),d(n,l),d(n,s),d(n,o),a&&a.m(n,null),d(e,i)},p(t,e){2&e&&c!==(c=t[11]+"")&&q(s,c),2&e&&r!==(r="/adia/docs/"+(0==t[13]?"latest":t[11])+"/html/")&&x(n,"href",r)},d(t){t&&h(e),a&&a.d()}}}function At(t){let e,n,l,s,o,r,i,c=t[11]+"",a=0==t[13]&&function(t){let e;return{c(){e=g("i"),e.textContent="(latest)",x(e,"class","svelte-1uqyrre")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}();return{c(){e=g("li"),n=g("a"),l=v("adia-"),s=v(c),o=v(".tar.gz\n        "),a&&a.c(),i=y(),x(n,"href",r="/adia/jsdist/adia-"+t[11]+".tar.gz"),x(n,"class","svelte-1uqyrre"),x(e,"class","svelte-1uqyrre")},m(t,r){p(t,e,r),d(e,n),d(n,l),d(n,s),d(n,o),a&&a.m(n,null),d(e,i)},p(t,e){1&e&&c!==(c=t[11]+"")&&q(s,c),1&e&&r!==(r="/adia/jsdist/adia-"+t[11]+".tar.gz")&&x(n,"href",r)},d(t){t&&h(e),a&&a.d()}}}function Dt(e){let n,l,s,o,r,i=e[8]+"";return{c(){n=g("li"),l=g("a"),s=v(i),r=y(),x(l,"href",o=e[8]),x(l,"class","svelte-1uqyrre"),x(n,"class","svelte-1uqyrre")},m(t,e){p(t,n,e),d(n,l),d(l,s),d(n,r)},p:t,d(t){t&&h(n)}}}function Lt(t){let e,n,l,s,o,i,f,$,w,b,k,z,S,_,M,C,j,T,A,D,L,E,W,N,B,H,I,F,X,P,O;const R=t[6].default,J=r(R,t,t[5],null);s=new at({props:{icon:"paint",style:"float: right",target:"/"}});let K=t[1],Q=[];for(let e=0;e<K.length;e+=1)Q[e]=Tt(jt(t,K,e));let tt=t[0],et=[];for(let e=0;e<tt.length;e+=1)et[e]=At(Ct(t,tt,e));let nt=t[3],lt=[];for(let e=0;e<nt.length;e+=1)lt[e]=Dt(Mt(t,nt,e));return{c(){e=g("div"),n=g("nav"),J&&J.c(),l=y(),V(s.$$.fragment),o=y(),i=g("div"),f=g("h4"),f.innerHTML='About\n    <hr class="svelte-1uqyrre"/>',$=y(),w=g("p"),w.innerHTML='ADia live demo page <i class="svelte-1uqyrre">version: 2.7.1</i> using javascript and \n    <a href="https://brython.info" class="svelte-1uqyrre">Brython</a>.',b=y(),k=g("p"),z=g("a"),z.textContent="ADia",S=y(),_=g("i"),M=v("version: "),C=v(t[2]),j=g("i"),T=y(),A=g("h4"),A.innerHTML='Documentation\n    <hr class="svelte-1uqyrre"/>',D=y(),L=g("ul");for(let t=0;t<Q.length;t+=1)Q[t].c();E=y(),W=g("h4"),W.innerHTML='Javascript releases\n    <hr class="svelte-1uqyrre"/>',N=y(),B=g("ul");for(let t=0;t<et.length;t+=1)et[t].c();H=y(),I=g("h4"),I.innerHTML='Source Codes\n    <hr class="svelte-1uqyrre"/>',F=y(),X=g("div"),P=g("ul");for(let t=0;t<lt.length;t+=1)lt[t].c();x(n,"class","svelte-1uqyrre"),x(f,"class","all10 svelte-1uqyrre"),x(w,"class","all10 svelte-1uqyrre"),x(z,"href","https://github.com/pylover/adia"),x(z,"class","svelte-1uqyrre"),x(j,"class","svelte-1uqyrre"),x(_,"class","svelte-1uqyrre"),x(k,"class","all10 svelte-1uqyrre"),x(A,"class","all10 svelte-1uqyrre"),x(L,"class","all10 svelte-1uqyrre"),x(W,"class","all10 svelte-1uqyrre"),x(B,"class","all10 svelte-1uqyrre"),x(I,"class","all10 svelte-1uqyrre"),x(P,"class","svelte-1uqyrre"),x(X,"class","all10 svelte-1uqyrre"),x(i,"id","about"),x(i,"class","sm10 md10 lg8 xg6 svelte-1uqyrre"),x(e,"class","main-wrapper svelte-1uqyrre")},m(t,r){p(t,e,r),d(e,n),J&&J.m(n,null),d(n,l),Y(s,n,null),d(e,o),d(e,i),d(i,f),d(i,$),d(i,w),d(i,b),d(i,k),d(k,z),d(k,S),d(k,_),d(_,M),d(_,C),d(_,j),d(i,T),d(i,A),d(i,D),d(i,L);for(let t=0;t<Q.length;t+=1)Q[t].m(L,null);d(i,E),d(i,W),d(i,N),d(i,B);for(let t=0;t<et.length;t+=1)et[t].m(B,null);d(i,H),d(i,I),d(i,F),d(i,X),d(X,P);for(let t=0;t<lt.length;t+=1)lt[t].m(P,null);O=!0},p(t,[e]){if(J&&J.p&&(!O||32&e)&&a(J,R,t,t[5],O?c(R,t[5],e,null):u(t[5]),null),(!O||4&e)&&q(C,t[2]),2&e){let n;for(K=t[1],n=0;n<K.length;n+=1){const l=jt(t,K,n);Q[n]?Q[n].p(l,e):(Q[n]=Tt(l),Q[n].c(),Q[n].m(L,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}if(1&e){let n;for(tt=t[0],n=0;n<tt.length;n+=1){const l=Ct(t,tt,n);et[n]?et[n].p(l,e):(et[n]=At(l),et[n].c(),et[n].m(B,null))}for(;n<et.length;n+=1)et[n].d(1);et.length=tt.length}if(8&e){let n;for(nt=t[3],n=0;n<nt.length;n+=1){const l=Mt(t,nt,n);lt[n]?lt[n].p(l,e):(lt[n]=Dt(l),lt[n].c(),lt[n].m(P,null))}for(;n<lt.length;n+=1)lt[n].d(1);lt.length=nt.length}},i(t){O||(U(J,t),U(s.$$.fragment,t),O=!0)},o(t){G(J,t),G(s.$$.fragment,t),O=!1},d(t){t&&h(e),J&&J.d(t),Z(s),m(Q,t),m(et,t),m(lt,t)}}}function Et(t,e,n){let{$$slots:l={},$$scope:s}=e;let{busy:o=!0}=e,r=[],i=[],c="loading...";return _t.subscribe((t=>{n(2,c=t)})),T((async()=>{try{let[t,e]=await Promise.all([fetch("/adia/jsdist/index.json?count=10").then((t=>t.json())),fetch("/adia/docs/index.json?count=9").then((t=>t.json()))]);n(0,r=t),n(1,i=e)}catch(t){}finally{n(4,o=!1)}})),t.$$set=t=>{"busy"in t&&n(4,o=t.busy),"$$scope"in t&&n(5,s=t.$$scope)},[r,i,c,["https://github.com/pylover/adia","https://github.com/pylover/adia-live"],o,s,l]}class Wt extends nt{constructor(t){super(),et(this,t,Et,Lt,o,{busy:4})}}function Nt(e){let n;return{c(){n=g("h3"),n.textContent="Not Found !"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Bt extends nt{constructor(t){super(),et(this,t,null,Nt,o,{})}}const{window:Ht}=K;function It(t){let e;return{c(){e=g("div"),e.innerHTML="<p>Loading, please wait ...</p>",x(e,"class","loading all10")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function Ft(t){let e,n,l,s,o;function r(e){t[8](e)}let i={};return void 0!==t[1]&&(i.spin=t[1]),e=new dt({props:i}),L.push((()=>Q(e,"spin",r))),s=new at({props:{icon:"github",style:"float: right",target:"https://github.com/pylover/adia"}}),{c(){V(e.$$.fragment),l=y(),V(s.$$.fragment)},m(t,n){Y(e,t,n),p(t,l,n),Y(s,t,n),o=!0},p(t,l){const s={};!n&&2&l&&(n=!0,s.spin=t[1],I((()=>n=!1))),e.$set(s)},i(t){o||(U(e.$$.fragment,t),U(s.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),G(s.$$.fragment,t),o=!1},d(t){Z(e,t),t&&h(l),Z(s,t)}}}function Xt(t){let e,n,s,o,r,i,c,a,u;e=new st({});let f=t[2]&&It();function d(e){t[9](e)}var m=t[3].component;function g(t){let e={$$slots:{default:[Ft]},$$scope:{ctx:t}};return void 0!==t[0]&&(e.busy=t[0]),{props:e}}return m&&(o=new m(g(t)),L.push((()=>Q(o,"busy",d)))),{c(){V(e.$$.fragment),n=y(),f&&f.c(),s=y(),o&&V(o.$$.fragment),i=v("")},m(l,r){Y(e,l,r),p(l,n,r),f&&f.m(l,r),p(l,s,r),o&&Y(o,l,r),p(l,i,r),c=!0,a||(u=w(Ht,"popstate",t[7]),a=!0)},p(t,[e]){t[2]?f||(f=It(),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null);const n={};if(16386&e&&(n.$$scope={dirty:e,ctx:t}),!r&&1&e&&(r=!0,n.busy=t[0],I((()=>r=!1))),m!==(m=t[3].component)){if(o){J={r:0,c:[],p:J};const t=o;G(t.$$.fragment,1,0,(()=>{Z(t,1)})),J.r||l(J.c),J=J.p}m?(o=new m(g(t)),L.push((()=>Q(o,"busy",d))),V(o.$$.fragment),U(o.$$.fragment,1),Y(o,i.parentNode,i)):o=null}else m&&o.$set(n)},i(t){c||(U(e.$$.fragment,t),o&&U(o.$$.fragment,t),c=!0)},o(t){G(e.$$.fragment,t),o&&G(o.$$.fragment,t),c=!1},d(t){Z(e,t),t&&h(n),f&&f.d(t),t&&h(s),t&&h(i),o&&Z(o,t),a=!1,u()}}}function Pt(t,e,n){const l={"/":{title:"Live Demo",component:zt},"/about":{title:"About",component:Wt}},s={title:"Not Found",component:Bt};let o,r=!0,i=!0,c=!0,a=!0,{title:u}=e;function f(t){return n(3,o=l[t]),null==o&&n(3,o=s),document.title=`${u} -> ${o.title}`,!1}function d(t){f(t),window.history.pushState({target:t},o.title,`${window.location.origin}/adia${t}`)}var p,h;p="nav",h={navigate:d},j().$$.context.set(p,h),d(window.location.pathname.replace(new RegExp("^/adia"),"")),aDia.delay=300,aDia.oninit=t=>{_t.set(t.__version__),n(2,a=!1)},aDia.onstatus=(t,e)=>{n(6,c="processing"==e)};return t.$$set=t=>{"title"in t&&n(5,u=t.title)},t.$$.update=()=>{65&t.$$.dirty&&n(1,r=i||c)},[i,r,a,o,f,u,c,t=>f(t.state.target),function(t){r=t,n(1,r),n(0,i),n(6,c)},function(t){i=t,n(0,i)}]}return new class extends nt{constructor(t){super(),et(this,t,Pt,Xt,o,{title:5})}}({target:document.body,props:{title:"ADia!"}})}();
//# sourceMappingURL=bundle.js.map
