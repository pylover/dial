var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const l=s(t,e,n,o);return t[0](l)}}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function c(t,e,n,o,l,r,i){const c=function(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}(e,o,l,r);if(c){const l=s(e,n,o,i);t.p(l,c)}}function a(t){return null==t?"":t}function u(e){return e&&l(e.destroy)?e.destroy:t}let d,f,h=!1;function p(t,e,n,o){for(;t<e;){const l=t+(e-t>>1);n(l)<=o?t=l+1:e=l}return t}function m(t,e){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let l=0;for(let t=0;t<e.length;t++){const r=p(1,l+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[r]+1;const i=r+1;n[i]=t,l=Math.max(i,l)}const r=[],i=[];let s=e.length-1;for(let t=n[l]+1;0!=t;t=o[t-1]){for(r.push(e[t-1]);s>=t;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);r.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<r.length&&i[e].claim_order>=r[n].claim_order;)n++;const o=n<r.length?r[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){h&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function S(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function M(t){f=t}function E(){if(!f)throw new Error("Function called outside component initialization");return f}function A(t){E().$$.on_mount.push(t)}function T(){const t=E();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,l)}))}}}const W=[],B=[],N=[],L=[],I=Promise.resolve();let q=!1;function H(t){N.push(t)}let D=!1;const F=new Set;function P(){if(!D){D=!0;do{for(let t=0;t<W.length;t+=1){const e=W[t];M(e),X(e.$$)}for(M(null),W.length=0;B.length;)B.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];F.has(e)||(F.add(e),e())}N.length=0}while(W.length);for(;L.length;)L.pop()();q=!1,D=!1,F.clear()}}function X(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const O=new Set;let V;function J(t,e){t&&t.i&&(O.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),V.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const U="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function G(t){t&&t.c()}function K(t,n,r,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,r),i||H((()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(H)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(W.push(t),q||(q=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,l,r,i,s,c,a=[-1]){const u=f;M(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:l.context||[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),p&&Y(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),l.target){if(l.hydrate){h=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();l.intro&&J(e.$$.fragment),K(e,l.target,l.anchor,l.customElement),h=!1,P()}M(u)}class tt{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(e){let n,o,l,r,i,s,c,a,u,d;return{c(){n=x("svg"),o=x("defs"),l=x("symbol"),r=x("path"),i=x("symbol"),s=x("path"),c=x("symbol"),a=x("path"),u=x("symbol"),d=x("path"),k(r,"d","M17.362 16.438l8.339 8.483c-2.125 1.908-4.925 3.079-8.006 3.079-6.627 0-12-5.373-12-12s5.373-12 12-12c3.38 0 6.428 1.402 8.609 3.65l-8.942 8.788zM18.174 7.958c-0.828 0-1.499 0.672-1.499 1.5 0 0.829 0.671 1.5 1.499 1.5 0.829 0 1.501-0.671 1.501-1.5 0-0.828-0.672-1.5-1.501-1.5z"),k(l,"id","icon-pacman"),k(l,"viewBox","0 0 32 32"),k(s,"d","M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"),k(i,"id","icon-question"),k(i,"viewBox","0 0 32 32"),k(a,"d","M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"),k(c,"id","icon-github"),k(c,"viewBox","0 0 32 32"),k(d,"d","M32 18v-12h-6v-2c0-1.1-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h22c1.1 0 2-0.9 2-2v-2h4v8h-18v4h-1c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-10c0-0.552-0.448-1-1-1h-1v-2h18zM24 6h-22v-2h22v2z"),k(u,"id","icon-paint"),k(u,"viewBox","0 0 32 32"),k(n,"aria-hidden","true"),C(n,"position","absolute"),C(n,"width","0"),C(n,"height","0"),C(n,"overflow","hidden"),k(n,"version","1.1"),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){g(t,n,e),m(n,o),m(o,l),m(l,r),m(o,i),m(i,s),m(o,c),m(c,a),m(o,u),m(u,d)},p:t,i:t,o:t,d(t){t&&$(n)}}}class nt extends tt{constructor(t){super(),Z(this,t,null,et,r,{})}}function ot(t){let e,n,o;return{c(){e=x("svg"),n=x("use"),j(n,"xlink:href",o="#icon-"+t[2]),k(e,"class","svelte-16o62x8")},m(t,o){g(t,e,o),m(e,n)},p(t,e){4&e&&o!==(o="#icon-"+t[2])&&j(n,"xlink:href",o)},d(t){t&&$(e)}}}function lt(t){let e,n,o;return{c(){e=w("span"),n=y(t[1]),k(e,"class",o=a(null==t[2]?"lpad":"")+" svelte-16o62x8")},m(t,o){g(t,e,o),m(e,n)},p(t,l){2&l&&z(n,t[1]),4&l&&o!==(o=a(null==t[2]?"lpad":"")+" svelte-16o62x8")&&k(e,"class",o)},d(t){t&&$(e)}}}function rt(e){let n,o,l,r,i,s=e[2]&&ot(e),c=e[1]&&lt(e);return{c(){n=w("a"),s&&s.c(),o=b(),c&&c.c(),k(n,"class",l=a(e[3])+" svelte-16o62x8"),k(n,"id",e[4]),k(n,"style",e[5]),k(n,"href",e[0])},m(t,l){g(t,n,l),s&&s.m(n,null),m(n,o),c&&c.m(n,null),r||(i=_(n,"click",e[6]),r=!0)},p(t,[e]){t[2]?s?s.p(t,e):(s=ot(t),s.c(),s.m(n,o)):s&&(s.d(1),s=null),t[1]?c?c.p(t,e):(c=lt(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null),8&e&&l!==(l=a(t[3])+" svelte-16o62x8")&&k(n,"class",l),16&e&&k(n,"id",t[4]),32&e&&k(n,"style",t[5]),1&e&&k(n,"href",t[0])},i:t,o:t,d(t){t&&$(n),s&&s.d(),c&&c.d(),r=!1,i()}}}function it(t,e,n){let{title:o=""}=e,{target:l}=e,{icon:r}=e,{cssClass:i=""}=e,{id:s=""}=e,{style:c=""}=e;const a=T();return null!=l&&l.startsWith("/")&&(l="/adia"+l),t.$$set=t=>{"title"in t&&n(1,o=t.title),"target"in t&&n(0,l=t.target),"icon"in t&&n(2,r=t.icon),"cssClass"in t&&n(3,i=t.cssClass),"id"in t&&n(4,s=t.id),"style"in t&&n(5,c=t.style)},[l,o,r,i,s,c,function(){a("click",{text:"Hello!"})}]}class st extends tt{constructor(t){super(),Z(this,t,it,rt,r,{title:1,target:0,icon:2,cssClass:3,id:4,style:5})}}function ct(e){let n,o,l,r,i;return{c(){n=w("a"),o=x("svg"),l=x("use"),r=b(),i=w("h1"),i.textContent="ADia Live Demo",j(l,"xlink:href","#icon-pacman"),k(o,"class","svelte-1h70g4h"),k(i,"class","svelte-1h70g4h"),k(n,"href",e[0]),k(n,"class","svelte-1h70g4h")},m(t,e){g(t,n,e),m(n,o),m(o,l),m(n,r),m(n,i)},p(t,[e]){1&e&&k(n,"href",t[0])},i:t,o:t,d(t){t&&$(n)}}}function at(t,e,n){let{target:o}=e;return null!=o&&o.startsWith("/")&&(o="/adia"+o),t.$$set=t=>{"target"in t&&n(0,o=t.target)},[o]}class ut extends tt{constructor(t){super(),Z(this,t,at,ct,r,{target:0})}}const dt=[{name:"comment",pattern:/\s*#.*\n/},{name:"return",pattern:/(?<==> *).+ *(?=$)/},{name:"multilinepipe",pattern:/(?<=:) ?\|/},{name:"text1",pattern:/(?<=:) *.+(?==>)/},{name:"text2",pattern:/(?<=:) *.+(?=$)/},{name:"diagram",pattern:/diagram/},{name:"attr",pattern:/version|author/},{name:"sequence",pattern:/sequence/},{name:"moduleattrattr",pattern:/(?<=\.)title/},{name:"moduleattrmodule",pattern:/^\w+(?=\.)/},{name:"notemodulefirst",pattern:/(?<=@)\w+/},{name:"notemodulesecond",pattern:/(?<=@.*~\s)\w+/},{name:"caller",pattern:/(?<=^\s*)\w+\s*(?=->)/},{name:"callee",pattern:/(?<=->)\s*\w+\s*(?=:|\n)/},{name:"keyword",pattern:/(?<=^\s*)(if|elif|else|for|while)(?=:|\n)/},{name:"keyop",pattern:/(->|=>|~|@|\.)/},{name:"op",pattern:/[:!\$%\^&*\(\)+=_\]\[\}\{;"'?/\\<>,~-]/},{name:"whitespace",pattern:/\s/},{name:"other",pattern:/\S+/}];function ft(t,e){const n=t.childNodes,o=function(t){let e,n=[];for(let t=0;t<dt.length;t++){let e=dt[t];n.push(`(?<${e.name}>${e.pattern.source})`)}const o=new RegExp(n.join("|"),"gmi"),l=[];for(const n of t.matchAll(o))for(let t in n.groups)e=n.groups[t],null!=e&&l.push({name:t,text:e});return l}(e.value);var l,r,i;for(l=0;l<o.length&&l<n.length&&o[l]===n[l].textContent;l++);for(;o.length<n.length;)t.removeChild(n[l]);for(r=o.length-1,i=n.length-1;l<i&&o[r]===n[i].textContent;r--,i--);for(;l<=i;l++){const t=o[l];n[l].className=t.name,n[l].textContent=n[l].innerText=t.text}for(var s=n[l]||null;l<=r;l++){var c=document.createElement("span");const e=o[l];c.className=e.name,c.textContent=c.innerText=e.text,t.insertBefore(c,s)}}function ht(e){let n,l,r,i,s,c;return{c(){n=w("div"),l=w("pre"),r=b(),i=w("textarea"),k(l,"class","pad1 highlight svelte-yvy37q"),k(i,"class","pad1 svelte-yvy37q"),k(i,"spellcheck","false"),k(i,"wrap","off"),i.value="# Live Demo\n\ndiagram: Foo\nauthor: Alice\nversion: 0.1\n\n# First section\nsequence: Hello\nfoo.title: Foo\n\n@foo: Say Hello\nfoo -> bar: helloworld => Hi\n  @foo ~ baz: |\n    lorem ipsum\n  for: each item\n    bar -> baz: Hello()\n\n# Second section\nsequence: Bye\n\nfoo -> bar: Bye() => See U there\n  if: baz is there\n    bar -> baz: Bye()",k(n,"id","sourceParent"),k(n,"class","svelte-yvy37q")},m(t,o){g(t,n,o),m(n,l),m(n,r),m(n,i),s||(c=[u(e[2].call(null,l)),u(e[1].call(null,i)),_(i,"input",e[3]),_(i,"scroll",e[0])],s=!0)},p:t,i:t,o:t,d(t){t&&$(n),s=!1,o(c)}}}function pt(t){const e=T();let n,o,l;function r(){let t=o.value;localStorage.setItem("editorText",t),e("change",{text:t})}function i(){clearTimeout(l),ft(n,o),l=setTimeout(r,1e3)}return A((function(){let t=localStorage.getItem("editorText");null!=t&&t.trim().length>0&&(o.value=t),i()})),[function(t){n.scrollLeft=t.srcElement.scrollLeft},function(t){o=t},function(t){n=t},i]}class mt extends tt{constructor(t){super(),Z(this,t,pt,ht,r,{})}}const{window:gt}=U;function $t(t){let e,n,l,r,s,a,u,d,f,h,p,v,x,y,j,z,M;H(t[12]);const E=t[11].default,A=i(E,t,t[10],null);return r=new st({props:{icon:"question",style:"float: right",target:"/about"}}),d=new mt({}),d.$on("change",t[9]),{c(){e=w("div"),n=w("nav"),A&&A.c(),l=b(),G(r.$$.fragment),s=b(),a=w("div"),u=w("div"),G(d.$$.fragment),h=b(),p=w("div"),v=b(),x=w("div"),y=w("textarea"),k(n,"class","svelte-1dii2pk"),C(u,"--left-size",t[5]),k(u,"class","left svelte-1dii2pk"),H((()=>t[14].call(u))),k(p,"class","separator svelte-1dii2pk"),k(y,"class","pad1 svelte-1dii2pk"),k(y,"spellcheck","false"),y.disabled=!0,y.value=t[4],C(x,"--right-size",t[6]),k(x,"class","right svelte-1dii2pk"),k(a,"class","wrapper svelte-1dii2pk"),k(e,"class","main-wrapper svelte-1dii2pk")},m(o,i){g(o,e,i),m(e,n),A&&A.m(n,null),m(n,l),K(r,n,null),m(e,s),m(e,a),m(a,u),K(d,u,null),t[13](u),f=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=S();let l;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=_(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{l=_(n.contentWindow,"resize",e)}),m(t,n),()=>{(o||l&&n.contentWindow)&&l(),$(n)}}(u,t[14].bind(u)),m(a,h),m(a,p),m(a,v),m(a,x),m(x,y),t[15](x),j=!0,z||(M=[_(gt,"resize",t[12]),_(p,"mousedown",t[7]),_(p,"mouseup",t[8])],z=!0)},p(t,[e]){A&&A.p&&(!j||1024&e)&&c(A,E,t,t[10],j?e:-1,null,null),(!j||16&e)&&(y.value=t[4])},i(t){j||(J(A,t),J(r.$$.fragment,t),J(d.$$.fragment,t),j=!0)},o(t){R(A,t),R(r.$$.fragment,t),R(d.$$.fragment,t),j=!1},d(n){n&&$(e),A&&A.d(n),Q(r),Q(d),t[13](null),f(),t[15](null),z=!1,o(M)}}}function vt(t,e,n){let o,l,r,i,s,{$$slots:c={},$$scope:a}=e,u=localStorage.getItem("leftSize")?`${localStorage.getItem("leftSize")}%`:"20%",d=localStorage.getItem("leftSize")?100-Math.round(localStorage.getItem("leftSize"))+"%":"80%",f="";function h(t){if(t.clientX!==o.e.clientX){let e=t.clientX-o.e.clientX;e=Math.min(Math.max(e,-o.leftWidth),o.rightWidth),n(0,l.style.width=o.leftWidth+e+"px",l),n(1,r.style.width=o.rightWidth-e+"px",r)}}return t.$$set=t=>{"$$scope"in t&&n(10,a=t.$$scope)},[l,r,i,s,f,u,d,function(t){o={e:t,leftWidth:l.offsetWidth,rightWidth:r.offsetWidth},window.addEventListener("mousemove",h)},function(){localStorage.setItem("leftSize",Math.round(s/(i-14)*100)),window.removeEventListener("mousemove",h)},function t(e){if(null==window.adiaDiagram)return void setTimeout((function(){t(e)}),200);let o=e.detail.text;o.trim().length<=0?n(4,f=""):n(4,f=window.adiaDiagram(o))},a,c,function(){n(2,i=gt.innerWidth)},function(t){B[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(){s=this.clientWidth,n(3,s)},function(t){B[t?"unshift":"push"]((()=>{r=t,n(1,r)}))}]}class wt extends tt{constructor(t){super(),Z(this,t,vt,$t,r,{})}}function xt(t,e,n){const o=t.slice();return o[9]=e[n],o}function yt(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function bt(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function _t(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function kt(t){let e,n,o,l,r,i,s,c=t[12]+"",a=0==t[14]&&function(t){let e;return{c(){e=w("i"),e.textContent="(latest)"},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}();return{c(){e=w("li"),n=w("a"),o=y("v"),l=y(c),r=b(),a&&a.c(),s=b(),k(n,"href",i=t[4]+"/docs/"+t[12]+"/html/")},m(t,i){g(t,e,i),m(e,n),m(n,o),m(n,l),m(n,r),a&&a.m(n,null),m(e,s)},p(t,e){2&e&&c!==(c=t[12]+"")&&z(l,c),2&e&&i!==(i=t[4]+"/docs/"+t[12]+"/html/")&&k(n,"href",i)},d(t){t&&$(e),a&&a.d()}}}function jt(t){let e,n,o,l,r,i,s,c=t[12]+"",a=0==t[14]&&function(t){let e;return{c(){e=w("i"),e.textContent="(latest)"},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}();return{c(){e=w("li"),n=w("a"),o=y("adia.bundle-"),l=y(c),r=y(".js\n        "),a&&a.c(),s=b(),k(n,"href",i=t[4]+"/jsdist/"+t[12]+"/adia.bundle-"+t[12]+".js")},m(t,i){g(t,e,i),m(e,n),m(n,o),m(n,l),m(n,r),a&&a.m(n,null),m(e,s)},p(t,e){1&e&&c!==(c=t[12]+"")&&z(l,c),1&e&&i!==(i=t[4]+"/jsdist/"+t[12]+"/adia.bundle-"+t[12]+".js")&&k(n,"href",i)},d(t){t&&$(e),a&&a.d()}}}function zt(t){let e,n,o,l,r,i,s,c,a,u,d,f,h,p,v=t[12]+"",x=t[12]+"",_=0==t[14]&&function(t){let e;return{c(){e=w("i"),e.textContent="(latest)"},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}();return{c(){e=w("li"),n=w("a"),o=y("adia-"),l=y(v),r=y(".js"),s=b(),c=w("a"),a=y("adia.lib-"),u=y(x),d=y(".js"),h=b(),_&&_.c(),p=b(),k(n,"href",i=t[4]+"/jsdist/"+t[12]+"/adia-"+t[12]+".js"),k(c,"href",f=t[4]+"/jsdist/"+t[12]+"/adia-"+t[12]+".js")},m(t,i){g(t,e,i),m(e,n),m(n,o),m(n,l),m(n,r),m(e,s),m(e,c),m(c,a),m(c,u),m(c,d),m(e,h),_&&_.m(e,null),m(e,p)},p(t,e){1&e&&v!==(v=t[12]+"")&&z(l,v),1&e&&i!==(i=t[4]+"/jsdist/"+t[12]+"/adia-"+t[12]+".js")&&k(n,"href",i),1&e&&x!==(x=t[12]+"")&&z(u,x),1&e&&f!==(f=t[4]+"/jsdist/"+t[12]+"/adia-"+t[12]+".js")&&k(c,"href",f)},d(t){t&&$(e),_&&_.d()}}}function Ct(e){let n,o,l,r,i=e[9]+"";return{c(){n=w("li"),o=w("a"),l=y(i),r=b(),k(o,"href",e[9])},m(t,e){g(t,n,e),m(n,o),m(o,l),m(n,r)},p:t,d(t){t&&$(n)}}}function St(t){let e,n,o,l,r,s,a,u,d,f,h,p,x,_,j,C,S,M,E,A,T,W,B,N,L,I,q,H,D,F,P,X,O,V,U,Y,Z,tt,et;const nt=t[6].default,ot=i(nt,t,t[5],null);l=new st({props:{icon:"paint",style:"float: right",target:"/"}});let lt=t[1],rt=[];for(let e=0;e<lt.length;e+=1)rt[e]=kt(_t(t,lt,e));let it=t[0],ct=[];for(let e=0;e<it.length;e+=1)ct[e]=jt(bt(t,it,e));let at=t[0],ut=[];for(let e=0;e<at.length;e+=1)ut[e]=zt(yt(t,at,e));let dt=t[3],ft=[];for(let e=0;e<dt.length;e+=1)ft[e]=Ct(xt(t,dt,e));return{c(){e=w("div"),n=w("nav"),ot&&ot.c(),o=b(),G(l.$$.fragment),r=b(),s=w("div"),a=w("h4"),a.innerHTML="About\n    <hr/>",u=b(),d=w("p"),d.innerHTML='ADia live demo page <i>version: 2.1.0</i> using javascript and \n    <a href="https://brython.info">Brython</a>.',f=b(),h=w("p"),p=w("a"),p.textContent="ADia",x=b(),_=w("i"),j=y("version: "),C=y(t[2]),S=w("i"),M=b(),E=w("h4"),E.innerHTML="Documentation\n    <hr/>",A=b(),T=w("ul");for(let t=0;t<rt.length;t+=1)rt[t].c();W=b(),B=w("h4"),B.innerHTML="Javascript releases\n    <hr/>",N=b(),L=w("div"),I=w("h5"),I.textContent="Bundle",q=b(),H=w("ul");for(let t=0;t<ct.length;t+=1)ct[t].c();D=b(),F=w("div"),P=w("h5"),P.textContent="Brython Module",X=b(),O=w("ul");for(let t=0;t<ut.length;t+=1)ut[t].c();V=b(),U=w("h4"),U.innerHTML="Source Codes\n    <hr/>",Y=b(),Z=w("div"),tt=w("ul");for(let t=0;t<ft.length;t+=1)ft[t].c();k(a,"class","all10 svelte-1ar4c3c"),k(d,"class","all10 svelte-1ar4c3c"),k(p,"href","https://github.com/pylover/adia"),k(h,"class","all10 svelte-1ar4c3c"),k(E,"class","all10 svelte-1ar4c3c"),k(T,"class","all10 svelte-1ar4c3c"),k(B,"class","all10 svelte-1ar4c3c"),k(H,"class","all10 svelte-1ar4c3c"),k(L,"class","sm10 md3 lg3 xg3 svelte-1ar4c3c"),k(O,"class","all10 svelte-1ar4c3c"),k(F,"class","sm10 md7 lg7 xg7 svelte-1ar4c3c"),k(U,"class","all10 svelte-1ar4c3c"),k(Z,"class","all10 svelte-1ar4c3c"),k(s,"id","about"),k(s,"class","sm10 md10 lg8 xg6 svelte-1ar4c3c"),k(e,"class","main-wrapper")},m(t,i){g(t,e,i),m(e,n),ot&&ot.m(n,null),m(n,o),K(l,n,null),m(e,r),m(e,s),m(s,a),m(s,u),m(s,d),m(s,f),m(s,h),m(h,p),m(h,x),m(h,_),m(_,j),m(_,C),m(_,S),m(s,M),m(s,E),m(s,A),m(s,T);for(let t=0;t<rt.length;t+=1)rt[t].m(T,null);m(s,W),m(s,B),m(s,N),m(s,L),m(L,I),m(L,q),m(L,H);for(let t=0;t<ct.length;t+=1)ct[t].m(H,null);m(s,D),m(s,F),m(F,P),m(F,X),m(F,O);for(let t=0;t<ut.length;t+=1)ut[t].m(O,null);m(s,V),m(s,U),m(s,Y),m(s,Z),m(Z,tt);for(let t=0;t<ft.length;t+=1)ft[t].m(tt,null);et=!0},p(t,[e]){if(ot&&ot.p&&(!et||32&e)&&c(ot,nt,t,t[5],et?e:-1,null,null),(!et||4&e)&&z(C,t[2]),18&e){let n;for(lt=t[1],n=0;n<lt.length;n+=1){const o=_t(t,lt,n);rt[n]?rt[n].p(o,e):(rt[n]=kt(o),rt[n].c(),rt[n].m(T,null))}for(;n<rt.length;n+=1)rt[n].d(1);rt.length=lt.length}if(17&e){let n;for(it=t[0],n=0;n<it.length;n+=1){const o=bt(t,it,n);ct[n]?ct[n].p(o,e):(ct[n]=jt(o),ct[n].c(),ct[n].m(H,null))}for(;n<ct.length;n+=1)ct[n].d(1);ct.length=it.length}if(17&e){let n;for(at=t[0],n=0;n<at.length;n+=1){const o=yt(t,at,n);ut[n]?ut[n].p(o,e):(ut[n]=zt(o),ut[n].c(),ut[n].m(O,null))}for(;n<ut.length;n+=1)ut[n].d(1);ut.length=at.length}if(8&e){let n;for(dt=t[3],n=0;n<dt.length;n+=1){const o=xt(t,dt,n);ft[n]?ft[n].p(o,e):(ft[n]=Ct(o),ft[n].c(),ft[n].m(tt,null))}for(;n<ft.length;n+=1)ft[n].d(1);ft.length=dt.length}},i(t){et||(J(ot,t),J(l.$$.fragment,t),et=!0)},o(t){R(ot,t),R(l.$$.fragment,t),et=!1},d(t){t&&$(e),ot&&ot.d(t),Q(l),v(rt,t),v(ct,t),v(ut,t),v(ft,t)}}}function Mt(t,e,n){let{$$slots:o={},$$scope:l}=e;let r=[],i=[];let s="loading...";function c(t){null!=window.adiaVersion?(n(2,s=window.adiaVersion),console.log(s)):setTimeout((function(){c()}),200)}return A((async()=>{c();try{let[t,e]=await Promise.all([fetch("/adia/jsdist/index.json?count=10").then((t=>t.json())),fetch("/adia/docs/index.json?count=9").then((t=>t.json()))]);n(0,r=t),n(1,i=e)}catch(t){}})),t.$$set=t=>{"$$scope"in t&&n(5,l=t.$$scope)},[r,i,s,["https://github.com/pylover/adia","https://github.com/pylover/adia-live"],"/adia",l,o]}class Et extends tt{constructor(t){super(),Z(this,t,Mt,St,r,{})}}function At(e){let n;return{c(){n=w("h3"),n.textContent="Not Found !"},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Tt extends tt{constructor(t){super(),Z(this,t,null,At,r,{})}}function Wt(e){let n,o,l,r;return n=new ut({props:{target:"/"}}),l=new st({props:{icon:"github",style:"float: right",target:"https://github.com/pylover/adia"}}),{c(){G(n.$$.fragment),o=b(),G(l.$$.fragment)},m(t,e){K(n,t,e),g(t,o,e),K(l,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),J(l.$$.fragment,t),r=!0)},o(t){R(n.$$.fragment,t),R(l.$$.fragment,t),r=!1},d(t){Q(n,t),t&&$(o),Q(l,t)}}}function Bt(t){let e,n,l,r,i;e=new nt({});var s=t[0].component;function c(t){return{props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}}return s&&(l=new s(c(t))),{c(){G(e.$$.fragment),n=b(),l&&G(l.$$.fragment),r=y("")},m(t,o){K(e,t,o),g(t,n,o),l&&K(l,t,o),g(t,r,o),i=!0},p(t,[e]){const n={};if(32&e&&(n.$$scope={dirty:e,ctx:t}),s!==(s=t[0].component)){if(l){V={r:0,c:[],p:V};const t=l;R(t.$$.fragment,1,0,(()=>{Q(t,1)})),V.r||o(V.c),V=V.p}s?(l=new s(c(t)),G(l.$$.fragment),J(l.$$.fragment,1),K(l,r.parentNode,r)):l=null}else s&&l.$set(n)},i(t){i||(J(e.$$.fragment,t),l&&J(l.$$.fragment,t),i=!0)},o(t){R(e.$$.fragment,t),l&&R(l.$$.fragment,t),i=!1},d(t){Q(e,t),t&&$(n),t&&$(r),l&&Q(l,t)}}}function Nt(t,e,n){const o=[{title:"Adia",component:wt,path:"/"},{title:"About",component:Et,path:"/about"}],l={title:"Not Found",component:Tt};let r=o.findIndex((t=>"/adia"+t.path==window.location.pathname)),i=o[r];return i=r<0?l:o[r],[i]}return new class extends tt{constructor(t){super(),Z(this,t,Nt,Bt,r,{})}}({target:document.body,props:{title:"ADia!"}})}();
//# sourceMappingURL=bundle.js.map
