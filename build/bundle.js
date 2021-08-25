var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}function r(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function w(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}let x,b;function _(){if(void 0===x){x=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){x=!0}}return x}function q(t){b=t}function k(){if(!b)throw new Error("Function called outside component initialization");return b}function S(t){k().$$.on_mount.push(t)}function A(t){return k().$$.context.get(t)}const L=[],T=[],z=[],E=[],j=Promise.resolve();let W=!1;function C(t){z.push(t)}function I(t){E.push(t)}let M=!1;const D=new Set;function H(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];q(e),P(e.$$)}for(q(null),L.length=0;T.length;)T.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];D.has(e)||(D.add(e),e())}z.length=0}while(L.length);for(;E.length;)E.pop()();W=!1,M=!1,D.clear()}}function P(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const N=new Set;let B;function F(t,e){t&&t.i&&(N.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),B.c.push((()=>{N.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const R="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function O(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function J(t){t&&t.c()}function U(t,n,o,i){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=t.$$;r&&r.m(n,o),i||C((()=>{const n=a.map(e).filter(l);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(C)}function G(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(L.push(t),W||(W=!0,j.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,l,o,i,r,a,u,d=[-1]){const f=b;q(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:l.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||f.$$.root};u&&u(h.root);let p=!1;if(h.ctx=o?o(e,l.props||{},((t,n,...s)=>{const l=s.length?s[0]:n;return h.ctx&&r(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),p&&K(e,t)),n})):[],h.update(),p=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();l.intro&&F(e.$$.fragment),U(e,l.target,l.anchor,l.customElement),H()}q(f)}class V{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let n,s,l,o;return{c(){n=f("svg"),s=f("defs"),l=f("symbol"),o=f("path"),g(o,"d","M17.362 16.438l8.339 8.483c-2.125 1.908-4.925 3.079-8.006 3.079-6.627 0-12-5.373-12-12s5.373-12 12-12c3.38 0 6.428 1.402 8.609 3.65l-8.942 8.788zM18.174 7.958c-0.828 0-1.499 0.672-1.499 1.5 0 0.829 0.671 1.5 1.499 1.5 0.829 0 1.501-0.671 1.501-1.5 0-0.828-0.672-1.5-1.501-1.5z"),g(l,"id","icon-pacman"),g(l,"viewBox","0 0 32 32"),g(n,"aria-hidden","true"),w(n,"position","absolute"),w(n,"width","0"),w(n,"height","0"),w(n,"overflow","hidden"),g(n,"version","1.1"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){a(t,n,e),r(n,s),r(s,l),r(l,o)},p:t,i:t,o:t,d(t){t&&c(n)}}}class Z extends V{constructor(t){super(),Q(this,t,null,Y,o,{})}}function tt(t){let e,n,s;return{c(){e=f("svg"),n=f("use"),v(n,"xlink:href",s="#icon-"+t[2]),g(n,"class","svelte-1g7wbgq"),g(e,"class","svelte-1g7wbgq")},m(t,s){a(t,e,s),r(e,n)},p(t,e){4&e&&s!==(s="#icon-"+t[2])&&v(n,"xlink:href",s)},d(t){t&&c(e)}}}function et(t){let e,n,s;return{c(){e=d("span"),n=h(t[0]),g(e,"class",s=i(null==t[2]?"lpad":"")+" svelte-1g7wbgq")},m(t,s){a(t,e,s),r(e,n)},p(t,l){1&l&&$(n,t[0]),4&l&&s!==(s=i(null==t[2]?"lpad":"")+" svelte-1g7wbgq")&&g(e,"class",s)},d(t){t&&c(e)}}}function nt(e){let n,s,o,u,f,h,v=e[2]&&tt(e),$=e[0]&&et(e);return{c(){n=d("a"),v&&v.c(),s=p(),$&&$.c(),g(n,"id",e[4]),g(n,"class",o=i((e[3],e[6]==e[1]?"current":""))+" svelte-1g7wbgq"),g(n,"style",e[5]),g(n,"href",u=e[7]?void 0:e[1])},m(t,o){a(t,n,o),v&&v.m(n,null),r(n,s),$&&$.m(n,null),f||(h=m(n,"click",(function(){l(e[7]?e[8]:void 0)&&(e[7]?e[8]:void 0).apply(this,arguments)})),f=!0)},p(t,[l]){(e=t)[2]?v?v.p(e,l):(v=tt(e),v.c(),v.m(n,s)):v&&(v.d(1),v=null),e[0]?$?$.p(e,l):($=et(e),$.c(),$.m(n,null)):$&&($.d(1),$=null),16&l&&g(n,"id",e[4]),74&l&&o!==(o=i((e[3],e[6]==e[1]?"current":""))+" svelte-1g7wbgq")&&g(n,"class",o),32&l&&g(n,"style",e[5]),130&l&&u!==(u=e[7]?void 0:e[1])&&g(n,"href",u)},i:t,o:t,d(t){t&&c(n),v&&v.d(),$&&$.d(),f=!1,h()}}}function st(t,e,n){let{title:s=""}=e,{target:l}=e,{icon:o}=e,{cssClass:i=""}=e,{id:r=""}=e,{style:a=""}=e,{current:c}=e,u=!1;const{navigate:d}=A("nav");return void 0!==l&&l.startsWith("/")&&(u=!0),t.$$set=t=>{"title"in t&&n(0,s=t.title),"target"in t&&n(1,l=t.target),"icon"in t&&n(2,o=t.icon),"cssClass"in t&&n(3,i=t.cssClass),"id"in t&&n(4,r=t.id),"style"in t&&n(5,a=t.style),"current"in t&&n(6,c=t.current)},[s,l,o,i,r,a,c,u,function(){d(l)}]}class lt extends V{constructor(t){super(),Q(this,t,st,nt,o,{title:0,target:1,icon:2,cssClass:3,id:4,style:5,current:6})}}function ot(e){let n,s,l,o,u,h,$,y;return{c(){n=d("button"),s=f("svg"),l=f("use"),u=p(),h=d("h1"),h.textContent="ADia",v(l,"xlink:href","#icon-pacman"),g(l,"class","svelte-1dh5onm"),g(s,"class",o=i(e[0]?"start":"stop")+" svelte-1dh5onm"),g(h,"class","svelte-1dh5onm"),g(n,"class","svelte-1dh5onm")},m(t,o){a(t,n,o),r(n,s),r(s,l),r(n,u),r(n,h),$||(y=m(n,"click",e[2]),$=!0)},p(t,[e]){1&e&&o!==(o=i(t[0]?"start":"stop")+" svelte-1dh5onm")&&g(s,"class",o)},i:t,o:t,d(t){t&&c(n),$=!1,y()}}}function it(t,e,n){const{navigate:s}=A("nav");let{spin:l=!0}=e;return t.$$set=t=>{"spin"in t&&n(0,l=t.spin)},[l,s,()=>s("/")]}class rt extends V{constructor(t){super(),Q(this,t,it,ot,o,{spin:0})}}const at=[{name:"newline",pattern:/\r?\n/},{name:"comment",pattern:/^ *#.*(?=$)/},{name:"return",pattern:/(?<==> *).+ *(?=$)/},{name:"multilinepipe",pattern:/(?<=:) ?\|/},{name:"text1",pattern:/(?<=:) *.+(?==>)/},{name:"text2",pattern:/(?<=:) *.+(?=$)/},{name:"diagram",pattern:/diagram/},{name:"attr",pattern:/version|author/},{name:"sequence",pattern:/sequence/},{name:"moduleattrattr",pattern:/(?<=\.)title/},{name:"moduleattrmodule",pattern:/^\w+(?=\.)/},{name:"notemodulefirst",pattern:/(?<=@)\w+/},{name:"notemodulesecond",pattern:/(?<=@.*~\s)\w+/},{name:"caller",pattern:/(?<=^ *)\w+ *(?=->)/},{name:"callee",pattern:/(?<=->) *\w+ *(?=:|$)/},{name:"keyword",pattern:/(?<=^ *)(if|elif|else|for|while)(?=:|$)/},{name:"keyop",pattern:/->|=>|~|@|\./},{name:"op",pattern:/[:!\$%\^&*\(\)+=_\]\[\}\{;"'?/\\<>,~-]/},{name:"whitespace",pattern:/\s/},{name:"other",pattern:/\S+/}],ct=[];for(let t=0;t<at.length;t++){let e=at[t];ct.push(`(?<${e.name}>${e.pattern.source})`)}const ut=new RegExp(ct.join("|"),"gmi");function dt(t,e,n){let s,l=0,o=0;const i=[];let r=-1,a=-1;for(const c of t.matchAll(ut))for(let t in c.groups)s=c.groups[t],null!=s&&(o=s.length,i.push({name:t,text:s,row:l,index:c.index,length:o}),e>=c.index&&e-c.index<=o&&(r=l),n>=c.index&&n-c.index<=o&&(a=l),"newline"==t&&l++);const c=i[i.length-1];if(c&&"newline"==c.name){const t=c.index+1;i.push({name:"whitespace",text:" ",row:l,index:t,length:1}),e>=t&&e-t<=1&&(r=l),n>=t&&n-t<=1&&(a=l)}return l++,{tokens:i,lines:l,selectionStartLine:r,selectionEndLine:a}}function ft(t,e,n){return String(t).padStart(e,n)}function ht(t,e,n){const s=t.slice();return s[19]=e[n],s}function pt(t,e,n){const s=t.slice();return s[22]=e[n],s}function mt(t){let e,n,s,l=t[22].text+"";return{c(){e=d("span"),n=h(l),g(e,"class",s=i(t[22].name)+" svelte-mcxhtd")},m(t,s){a(t,e,s),r(e,n)},p(t,o){2&o&&l!==(l=t[22].text+"")&&$(n,l),2&o&&s!==(s=i(t[22].name)+" svelte-mcxhtd")&&g(e,"class",s)},d(t){t&&c(e)}}}function gt(t){let e,n,s,l=ft(t[19]+1,t[2]," ")+"";return{c(){e=d("span"),n=h(l),g(e,"class",s=i(t[19]>=t[1].selectionStartLine&&t[19]<=t[1].selectionEndLine?"selected":"")+" svelte-mcxhtd")},m(t,s){a(t,e,s),r(e,n)},p(t,o){6&o&&l!==(l=ft(t[19]+1,t[2]," ")+"")&&$(n,l),2&o&&s!==(s=i(t[19]>=t[1].selectionStartLine&&t[19]<=t[1].selectionEndLine?"selected":"")+" svelte-mcxhtd")&&g(e,"class",s)},d(t){t&&c(e)}}}function vt(e){let n,l,o,i,f,h,v,$,x,b,_=e[1].tokens,q=[];for(let t=0;t<_.length;t+=1)q[t]=mt(pt(e,_,t));let k=[...Array(e[1].lines).keys()],S=[];for(let t=0;t<k.length;t+=1)S[t]=gt(ht(e,k,t));return{c(){n=d("span"),n.textContent="X",l=p(),o=d("div"),i=d("pre");for(let t=0;t<q.length;t+=1)q[t].c();f=p(),h=d("div");for(let t=0;t<S.length;t+=1)S[t].c();v=p(),$=d("textarea"),g(n,"class","monospace-massure svelte-mcxhtd"),g(i,"class","highlight svelte-mcxhtd"),w(i,"padding-left",e[7]+$t+"px"),g(h,"class","numbers svelte-mcxhtd"),w(h,"width",e[7]+"px"),g($,"spellcheck","false"),g($,"wrap","off"),w($,"padding-left",e[7]+$t+"px"),g($,"class","svelte-mcxhtd"),g(o,"id","sourceParent"),g(o,"class","svelte-mcxhtd")},m(t,s){a(t,n,s),e[14](n),a(t,l,s),a(t,o,s),r(o,i);for(let t=0;t<q.length;t+=1)q[t].m(i,null);e[15](i),r(o,f),r(o,h);for(let t=0;t<S.length;t+=1)S[t].m(h,null);e[16](h),r(o,v),r(o,$),y($,e[0]),e[18]($),x||(b=[m($,"input",e[17]),m($,"scroll",e[10]),m($,"keyup",e[8]),m($,"change",e[9])],x=!0)},p(t,[e]){if(2&e){let n;for(_=t[1].tokens,n=0;n<_.length;n+=1){const s=pt(t,_,n);q[n]?q[n].p(s,e):(q[n]=mt(s),q[n].c(),q[n].m(i,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=_.length}if(128&e&&w(i,"padding-left",t[7]+$t+"px"),6&e){let n;for(k=[...Array(t[1].lines).keys()],n=0;n<k.length;n+=1){const s=ht(t,k,n);S[n]?S[n].p(s,e):(S[n]=gt(s),S[n].c(),S[n].m(h,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=k.length}128&e&&w(h,"width",t[7]+"px"),128&e&&w($,"padding-left",t[7]+$t+"px"),1&e&&y($,t[0])},i:t,o:t,d(t){t&&c(n),e[14](null),t&&c(l),t&&c(o),u(q,t),e[15](null),u(S,t),e[16](null),e[18](null),x=!1,s(b)}}}let $t=4;function yt(t,e,n){let s,l,o,i,r,a,c,{value:u=""}=e,d=11,f=-1,h=-1;function p(){document.activeElement===c&&(n(12,f=c.selectionStart),n(13,h=c.selectionEnd))}var m;return S((function(){n(11,d=i.clientWidth),document.addEventListener("selectionchange",p)})),m=function(){document.removeEventListener("selectionchange",p)},k().$$.on_destroy.push(m),t.$$set=t=>{"value"in t&&n(0,u=t.value)},t.$$.update=()=>{12289&t.$$.dirty&&n(1,s=dt(u,f,h)),2&t.$$.dirty&&n(2,l=s.lines.toString().length),2052&t.$$.dirty&&n(7,o=l*d+12)},[u,s,l,i,r,a,c,o,p,function(){setTimeout((()=>{n(1,s=dt(c.value,f,h))}),100)},function(){n(4,r.scrollLeft=c.scrollLeft,r),n(4,r.scrollTop=c.scrollTop,r),n(5,a.scrollTop=c.scrollTop,a)},d,f,h,function(t){T[t?"unshift":"push"]((()=>{i=t,n(3,i)}))},function(t){T[t?"unshift":"push"]((()=>{r=t,n(4,r)}))},function(t){T[t?"unshift":"push"]((()=>{a=t,n(5,a)}))},function(){u=this.value,n(0,u)},function(t){T[t?"unshift":"push"]((()=>{c=t,n(6,c)}))}]}class wt extends V{constructor(t){super(),Q(this,t,yt,vt,o,{value:0})}}class xt{delay=0;loadingProbeInterval=300;input;source;onresult=null;onsuccess=null;onerror=null;onstatus=null;oninit=null;#_status="initializing";#_delayTimer;constructor(){this.ensureADiaAPI()}hook(t,e){let n=this[t];if(void 0===n)throw`Invalid hook name: ${t}`;null!=n&&n(this,e)}get status(){return this.#_status}set status(t){this.#_status=t,this.hook("onstatus",t)}ensureADiaAPI(){void 0!==window.__adia__?(window.__adia__.callback=this.onResult.bind(this),window.__adia__.send("?version")):setTimeout(this.ensureADiaAPI.bind(this),this.loadingProbeInterval)}send(){if(void 0===this.input)return;let t=this.input();this.source!=t&&(this.status="processing",this.source=t,window.__adia__.send(this.source))}go(){switch(this.status){case"idle":this.delay>0?(clearTimeout(this.#_delayTimer),this.#_delayTimer=setTimeout(this.send.bind(this),this.delay)):this.send()}}onResult(t){void 0!==t.version?(this.__version__=t.version,this.hook("oninit")):(this.hook("onresult",t),t.error?this.hook("onerror",t.error):this.hook("onsuccess",t.diagram)),this.status="idle",this.go()}}const{window:bt}=R;function _t(t){let e,n,l,o,i,u,f,h,v,$,x,b,q;function k(e){t[16](e)}C(t[14]);let S={};return void 0!==t[0]&&(S.value=t[0]),l=new wt({props:S}),t[15](l),T.push((()=>O(l,"value",k))),{c(){e=d("div"),n=d("div"),J(l.$$.fragment),u=p(),f=d("div"),h=p(),v=d("div"),$=d("textarea"),w(n,"--left-size",t[7]),g(n,"class","left svelte-1lhjcv0"),C((()=>t[18].call(n))),g(f,"class","separator svelte-1lhjcv0"),g($,"spellcheck","false"),g($,"wrap","off"),g($,"class","pad1 svelte-1lhjcv0"),$.disabled=!0,w(v,"--right-size",t[8]),g(v,"class","right svelte-1lhjcv0"),g(e,"class","main svelte-1lhjcv0")},m(s,o){a(s,e,o),r(e,n),U(l,n,null),t[17](n),i=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=d("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=_();let l;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=m(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{l=m(n.contentWindow,"resize",e)}),r(t,n),()=>{(s||l&&n.contentWindow)&&l(),c(n)}}(n,t[18].bind(n)),r(e,u),r(e,f),r(e,h),r(e,v),r(v,$),y($,t[6]),t[20](v),x=!0,b||(q=[m(bt,"resize",t[14]),m(f,"mousedown",t[9]),m(f,"mouseup",t[10]),m($,"input",t[19])],b=!0)},p(t,[e]){const n={};!o&&1&e&&(o=!0,n.value=t[0],I((()=>o=!1))),l.$set(n),64&e&&y($,t[6])},i(t){x||(F(l.$$.fragment,t),x=!0)},o(t){X(l.$$.fragment,t),x=!1},d(n){n&&c(e),t[15](null),G(l),t[17](null),i(),t[20](null),b=!1,s(q)}}}function qt(t,e,n){let s,l,o,i,r,a,c,{busy:u=!0}=e,{loading:d=!0}=e,f=localStorage.getItem("leftSize")?`${localStorage.getItem("leftSize")}%`:"20%",h=localStorage.getItem("leftSize")?100-Math.round(localStorage.getItem("leftSize"))+"%":"80%",p="";function m(t){if(t.clientX!==i.e.clientX){let e=t.clientX-i.e.clientX;e=Math.min(Math.max(e,-i.leftWidth),i.rightWidth),n(2,l.style.width=i.leftWidth+e+"px",l),n(3,o.style.width=i.rightWidth-e+"px",o)}}const g=new xt;return g.delay=300,g.oninit=()=>{n(12,d=!1)},g.onstatus=(t,e)=>{n(11,u="idle"!=e)},g.input=()=>(localStorage.setItem("editorText",c),c),g.onresult=()=>n(6,p=""),g.onerror=(t,e)=>n(6,p=e),g.onsuccess=(t,e)=>n(6,p=e),S((async function(){let t=localStorage.getItem("editorText");null!=t&&t.trim().length>0?n(0,c=t):n(0,c="# Live Demo\n\ndiagram: Foo\nauthor: Alice\nversion: 0.1\n\n# First section\nsequence: Hello\nfoo.title: Foo\n\n@foo: Say Hello\nfoo -> bar: helloworld => Hi\n  @foo ~ baz: |\n    lorem ipsum\n  for: each item\n    bar -> baz: Hello()\n\n# Second section\nsequence: Bye\n\nfoo -> bar: Bye() => See U there\n  if: baz is there\n    bar -> baz: Bye()")})),t.$$set=t=>{"busy"in t&&n(11,u=t.busy),"loading"in t&&n(12,d=t.loading)},t.$$.update=()=>{8193&t.$$.dirty&&null!=c&&g.go()},[c,s,l,o,r,a,p,f,h,function(t){i={e:t,leftWidth:l.offsetWidth,rightWidth:o.offsetWidth},window.addEventListener("mousemove",m)},function(){localStorage.setItem("leftSize",Math.round(a/(r-14)*100)),window.removeEventListener("mousemove",m)},u,d,g,function(){n(4,r=bt.innerWidth)},function(t){T[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(t){c=t,n(0,c)},function(t){T[t?"unshift":"push"]((()=>{l=t,n(2,l)}))},function(){a=this.clientWidth,n(5,a)},function(){p=this.value,n(6,p)},function(t){T[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}class kt extends V{constructor(t){super(),Q(this,t,qt,_t,o,{busy:11,loading:12})}}function St(t,e,n){const s=t.slice();return s[7]=e[n],s}function At(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function Lt(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function Tt(t){let e,n,s,l,o,i,u,f=t[10]+"",m=0==t[12]&&function(t){let e;return{c(){e=d("i"),e.textContent="(latest)",g(e,"class","svelte-1uqyrre")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}();return{c(){e=d("li"),n=d("a"),s=h("v"),l=h(f),o=p(),m&&m.c(),u=p(),g(n,"href",i="/adia/docs/"+(0==t[12]?"latest":t[10])+"/html/"),g(n,"class","svelte-1uqyrre"),g(e,"class","svelte-1uqyrre")},m(t,i){a(t,e,i),r(e,n),r(n,s),r(n,l),r(n,o),m&&m.m(n,null),r(e,u)},p(t,e){2&e&&f!==(f=t[10]+"")&&$(l,f),2&e&&i!==(i="/adia/docs/"+(0==t[12]?"latest":t[10])+"/html/")&&g(n,"href",i)},d(t){t&&c(e),m&&m.d()}}}function zt(t){let e,n,s,l,o,i,u,f=t[10]+"",m=0==t[12]&&function(t){let e;return{c(){e=d("i"),e.textContent="(latest)",g(e,"class","svelte-1uqyrre")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}();return{c(){e=d("li"),n=d("a"),s=h("adia-"),l=h(f),o=h(".tar.gz\n        "),m&&m.c(),u=p(),g(n,"href",i="/adia/jsdist/adia-"+t[10]+".tar.gz"),g(n,"class","svelte-1uqyrre"),g(e,"class","svelte-1uqyrre")},m(t,i){a(t,e,i),r(e,n),r(n,s),r(n,l),r(n,o),m&&m.m(n,null),r(e,u)},p(t,e){1&e&&f!==(f=t[10]+"")&&$(l,f),1&e&&i!==(i="/adia/jsdist/adia-"+t[10]+".tar.gz")&&g(n,"href",i)},d(t){t&&c(e),m&&m.d()}}}function Et(e){let n,s,l,o,i,u=e[7]+"";return{c(){n=d("li"),s=d("a"),l=h(u),i=p(),g(s,"href",o=e[7]),g(s,"class","svelte-1uqyrre"),g(n,"class","svelte-1uqyrre")},m(t,e){a(t,n,e),r(n,s),r(s,l),r(n,i)},p:t,d(t){t&&c(n)}}}function jt(e){let n,s,l,o,i,f,m,v,y,w,x,b,_,q,k,S,A,L,T,z,E,j,W,C,I,M=e[1],D=[];for(let t=0;t<M.length;t+=1)D[t]=Tt(Lt(e,M,t));let H=e[0],P=[];for(let t=0;t<H.length;t+=1)P[t]=zt(At(e,H,t));let N=e[3],B=[];for(let t=0;t<N.length;t+=1)B[t]=Et(St(e,N,t));return{c(){n=d("div"),s=d("h4"),s.innerHTML='About\n    <hr class="svelte-1uqyrre"/>',l=p(),o=d("p"),o.innerHTML='ADia live demo page <i class="svelte-1uqyrre">version: 2.9.1</i> using javascript and \n    <a href="https://brython.info" class="svelte-1uqyrre">Brython</a>.',i=p(),f=d("p"),m=d("a"),m.textContent="ADia",v=p(),y=d("i"),w=h("version: "),x=h(e[2]),b=d("i"),_=p(),q=d("h4"),q.innerHTML='Documentation\n    <hr class="svelte-1uqyrre"/>',k=p(),S=d("ul");for(let t=0;t<D.length;t+=1)D[t].c();A=p(),L=d("h4"),L.innerHTML='Javascript releases\n    <hr class="svelte-1uqyrre"/>',T=p(),z=d("ul");for(let t=0;t<P.length;t+=1)P[t].c();E=p(),j=d("h4"),j.innerHTML='Source Codes\n    <hr class="svelte-1uqyrre"/>',W=p(),C=d("div"),I=d("ul");for(let t=0;t<B.length;t+=1)B[t].c();g(s,"class","all10 svelte-1uqyrre"),g(o,"class","all10 svelte-1uqyrre"),g(m,"href","https://github.com/pylover/adia"),g(m,"class","svelte-1uqyrre"),g(b,"class","svelte-1uqyrre"),g(y,"class","svelte-1uqyrre"),g(f,"class","all10 svelte-1uqyrre"),g(q,"class","all10 svelte-1uqyrre"),g(S,"class","all10 svelte-1uqyrre"),g(L,"class","all10 svelte-1uqyrre"),g(z,"class","all10 svelte-1uqyrre"),g(j,"class","all10 svelte-1uqyrre"),g(I,"class","svelte-1uqyrre"),g(C,"class","all10 svelte-1uqyrre"),g(n,"id","about"),g(n,"class","sm10 md10 lg8 xg6 svelte-1uqyrre")},m(t,e){a(t,n,e),r(n,s),r(n,l),r(n,o),r(n,i),r(n,f),r(f,m),r(f,v),r(f,y),r(y,w),r(y,x),r(y,b),r(n,_),r(n,q),r(n,k),r(n,S);for(let t=0;t<D.length;t+=1)D[t].m(S,null);r(n,A),r(n,L),r(n,T),r(n,z);for(let t=0;t<P.length;t+=1)P[t].m(z,null);r(n,E),r(n,j),r(n,W),r(n,C),r(C,I);for(let t=0;t<B.length;t+=1)B[t].m(I,null)},p(t,[e]){if(4&e&&$(x,t[2]),2&e){let n;for(M=t[1],n=0;n<M.length;n+=1){const s=Lt(t,M,n);D[n]?D[n].p(s,e):(D[n]=Tt(s),D[n].c(),D[n].m(S,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=M.length}if(1&e){let n;for(H=t[0],n=0;n<H.length;n+=1){const s=At(t,H,n);P[n]?P[n].p(s,e):(P[n]=zt(s),P[n].c(),P[n].m(z,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=H.length}if(8&e){let n;for(N=t[3],n=0;n<N.length;n+=1){const s=St(t,N,n);B[n]?B[n].p(s,e):(B[n]=Et(s),B[n].c(),B[n].m(I,null))}for(;n<B.length;n+=1)B[n].d(1);B.length=N.length}},i:t,o:t,d(t){t&&c(n),u(D,t),u(P,t),u(B,t)}}}function Wt(t,e,n){let{busy:s=!0}=e,{loading:l=!0}=e,o=[],i=[],r="loading...";return S((async()=>{try{let[t,e]=await Promise.all([fetch("/adia/jsdist/index.json?count=11").then((t=>t.json())),fetch("/adia/docs/index.json?count=19").then((t=>t.json()))]);n(0,o=t),n(1,i=e)}catch(t){}finally{n(5,l=!1)}})),(new xt).oninit=t=>{n(2,r=t.__version__),n(4,s=!1)},t.$$set=t=>{"busy"in t&&n(4,s=t.busy),"loading"in t&&n(5,l=t.loading)},[o,i,r,["https://github.com/pylover/adia","https://github.com/pylover/adia-live"],s,l]}class Ct extends V{constructor(t){super(),Q(this,t,Wt,jt,o,{busy:4,loading:5})}}function It(e){let n;return{c(){n=d("h3"),n.textContent="Not Found !"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class Mt extends V{constructor(t){super(),Q(this,t,null,It,o,{})}}const{window:Dt}=R;function Ht(t){let e;return{c(){e=d("div"),e.innerHTML="<p>Loading, please wait ...</p>",g(e,"class","loading all10")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}function Pt(t){let e,n,l,o,i,u,f,h,v,$,y,w,x,b,_,q,k,S,A,L;e=new Z({});let z=t[1]&&Ht();function E(e){t[8](e)}let j={};function W(e){t[9](e)}void 0!==t[4]&&(j.spin=t[4]),i=new rt({props:j}),T.push((()=>O(i,"spin",E)));let C={title:"About",target:"/about"};function M(e){t[10](e)}void 0!==t[3]&&(C.current=t[3]),h=new lt({props:C}),T.push((()=>O(h,"current",W)));let D={title:"Live Demo",target:"/"};function H(e){t[11](e)}function P(e){t[12](e)}void 0!==t[3]&&(D.current=t[3]),y=new lt({props:D}),T.push((()=>O(y,"current",M)));var N=t[2].component;function R(t){let e={};return void 0!==t[0]&&(e.busy=t[0]),void 0!==t[1]&&(e.loading=t[1]),{props:e}}return N&&(_=new N(R(t)),T.push((()=>O(_,"busy",H))),T.push((()=>O(_,"loading",P)))),{c(){J(e.$$.fragment),n=p(),z&&z.c(),l=p(),o=d("nav"),J(i.$$.fragment),f=p(),J(h.$$.fragment),$=p(),J(y.$$.fragment),x=p(),b=d("div"),_&&J(_.$$.fragment),g(b,"class","content")},m(s,c){U(e,s,c),a(s,n,c),z&&z.m(s,c),a(s,l,c),a(s,o,c),U(i,o,null),r(o,f),U(h,o,null),r(o,$),U(y,o,null),a(s,x,c),a(s,b,c),_&&U(_,b,null),S=!0,A||(L=m(Dt,"popstate",t[7]),A=!0)},p(t,[e]){t[1]?z||(z=Ht(),z.c(),z.m(l.parentNode,l)):z&&(z.d(1),z=null);const n={};!u&&16&e&&(u=!0,n.spin=t[4],I((()=>u=!1))),i.$set(n);const o={};!v&&8&e&&(v=!0,o.current=t[3],I((()=>v=!1))),h.$set(o);const r={};!w&&8&e&&(w=!0,r.current=t[3],I((()=>w=!1))),y.$set(r);const a={};if(!q&&1&e&&(q=!0,a.busy=t[0],I((()=>q=!1))),!k&&2&e&&(k=!0,a.loading=t[1],I((()=>k=!1))),N!==(N=t[2].component)){if(_){B={r:0,c:[],p:B};const t=_;X(t.$$.fragment,1,0,(()=>{G(t,1)})),B.r||s(B.c),B=B.p}N?(_=new N(R(t)),T.push((()=>O(_,"busy",H))),T.push((()=>O(_,"loading",P))),J(_.$$.fragment),F(_.$$.fragment,1),U(_,b,null)):_=null}else N&&_.$set(a)},i(t){S||(F(e.$$.fragment,t),F(i.$$.fragment,t),F(h.$$.fragment,t),F(y.$$.fragment,t),_&&F(_.$$.fragment,t),S=!0)},o(t){X(e.$$.fragment,t),X(i.$$.fragment,t),X(h.$$.fragment,t),X(y.$$.fragment,t),_&&X(_.$$.fragment,t),S=!1},d(t){G(e,t),t&&c(n),z&&z.d(t),t&&c(l),t&&c(o),G(i),G(h),G(y),t&&c(x),t&&c(b),_&&G(_),A=!1,L()}}}function Nt(t,e,n){let s;const l={"/":{title:"Live Demo",component:kt},"/about":{title:"About",component:Ct}},o={title:"Not Found",component:Mt};let i,r,a=!0,c=!0,{title:u}=e;function d(t){return n(3,r=t),n(2,i=l[t]),null==i&&n(2,i=o),document.title=`${u} -> ${i.title}`,!1}function f(t){d(t),window.history.pushState({target:t},i.title,`${window.location.origin}/adia${t}`)}var h,p;h="nav",p={navigate:f},k().$$.context.set(h,p),r=window.location.pathname.replace(new RegExp("^/adia"),""),f(r);return t.$$set=t=>{"title"in t&&n(6,u=t.title)},t.$$.update=()=>{1&t.$$.dirty&&n(4,s=a)},[a,c,i,r,s,d,u,t=>d(t.state.target),function(t){s=t,n(4,s),n(0,a)},function(t){r=t,n(3,r)},function(t){r=t,n(3,r)},function(t){a=t,n(0,a)},function(t){c=t,n(1,c)}]}return new class extends V{constructor(t){super(),Q(this,t,Nt,Pt,o,{title:6})}}({target:document.body,props:{title:"ADia!"}})}();
//# sourceMappingURL=bundle.js.map
