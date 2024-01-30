import{ssrElement as k,escape as b,mergeProps as Y,ssr as w,isServer as E,getRequestEvent as S,renderToStream as G,createComponent as d,delegateEvents as Q,ssrHydrationKey as R,ssrAttribute as I,useAssets as X,NoHydration as B,HydrationScript as Z,Hydration as ee}from"solid-js/web";import{lazy as te,createComponent as ne,sharedConfig as N,children as re,createMemo as L,on as se,createRoot as ae,Show as U,createSignal as oe,onCleanup as P,Suspense as ie,ErrorBoundary as ce}from"solid-js";import{provideRequestEvent as le}from"solid-js/web/storage";import{s as C,a as x,b as ue,g as he,r as de,c as me,d as pe,e as fe,f as ge,h as be,i as we}from"./assets/action-c7cb9b20.js";import{eventHandler as ye}from"h3";import"node:async_hooks";import{c as ve,a as Re,R as Se,g as Ae,b as $e,d as Ee,e as _,m as ke,u as Ce}from"./assets/routing-d4b2a578.js";import"unctx";function Le(e){e.forEach(t=>{if(!t.attrs.href)return;let r=document.head.querySelector(`link[href="${t.attrs.href}"]`);r||(r=document.createElement("link"),r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",t.attrs.href),document.head.appendChild(r))})}var xe=" ";const Te={style:e=>k("style",e.attrs,()=>b(e.children),!0),link:e=>k("link",e.attrs,void 0,!0),script:e=>e.attrs.src?k("script",Y(()=>e.attrs,{get id(){return e.key}}),()=>w(xe),!0):null};function T(e){let{tag:t,attrs:{key:r,...n}={key:void 0},children:s}=e;return Te[t]({attrs:n,key:r,children:s})}function Pe(e,t,r,n="default"){return te(async()=>{{const o=(await e.import())[n],i=(await t.inputs?.[e.src].assets()).filter(f=>f.tag==="style"||f.attrs.rel==="stylesheet");return typeof window<"u"&&Le(i),{default:f=>[...i.map(g=>T(g)),ne(o,f)]}}})}const D=[{type:"page",$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import("./_...404_.js"),import:()=>import("./_...404_.js")},path:"/*404",filePath:"/home/ykhi/projects/courses/ticketing/client/src/routes/[...404].tsx"},{type:"page",$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("./index.js"),import:()=>import("./index.js")},path:"/",filePath:"/home/ykhi/projects/courses/ticketing/client/src/routes/index.tsx"},{type:"page",$component:{src:"src/routes/auth/sign-up/index.tsx?pick=default&pick=$css",build:()=>import("./index2.js"),import:()=>import("./index2.js")},path:"/auth/sign-up/",filePath:"/home/ykhi/projects/courses/ticketing/client/src/routes/auth/sign-up/index.tsx"}],Me=qe(D.filter(e=>e.type==="page")),Oe=Fe(D.filter(e=>e.type==="api"));function Ne(e,t){const r=e.replace("","").split("/").filter(Boolean);e:for(const n of Oe){const s=n.matchSegments;if(r.length<s.length||!n.wildcard&&r.length>s.length)continue;for(let i=0;i<s.length;i++){const u=s[i];if(u&&r[i]!==u)continue e}const o=n[`$${t}`];if(o==="skip"||o===void 0)return;const a={};for(const{type:i,name:u,index:f}of n.params)i===":"?a[u]=r[f]:a[u]=r.slice(f).join("/");return{handler:o,params:a}}}function qe(e){function t(r,n,s,o){const a=Object.values(r).find(i=>s.startsWith(i.id+"/"));return a?(t(a.children||(a.children=[]),n,s.slice(a.id.length)),r):(r.push({...n,id:s,path:s.replace(/\/\([^)/]+\)/g,"")}),r)}return e.sort((r,n)=>r.path.length-n.path.length).reduce((r,n)=>t(r,n,n.path,n.path),[])}function Fe(e){return e.flatMap(t=>K(t.path).map(n=>({...t,path:n}))).map(He).sort((t,r)=>r.score-t.score)}function K(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const s=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)s.push(r+=t[1]),n=n.slice(t[0].length);return K(n).reduce((o,a)=>[...o,...s.map(i=>i+a)],[])}function He(e){const t=e.path.split("/").filter(Boolean),r=[],n=[];let s=0,o=!1;for(const[a,i]of t.entries())if(i[0]===":"){const u=i.slice(1);s+=3,r.push({type:":",name:u,index:a}),n.push(null)}else i[0]==="*"?(s-=1,r.push({type:"*",name:i.slice(1),index:a}),o=!0):(s+=4,i.match(/^\(.+\)$/)||n.push(i));return{...e,score:s,params:r,matchSegments:n,wildcard:o}}function W(){function e(r){return{...r,...r.$$route?r.$$route.require().route:void 0,metadata:{...r.$$route?r.$$route.require().route.metadata:{},filesystem:!0},component:Pe(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(e):void 0}}return Me.map(e)}let q;const je=()=>E?S().routes:q||(q=W());function Ie(e){const t=me(e,"flash");if(!t)return;let r=JSON.parse(t);if(!r||!r.result)return[];const n=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])];return pe(e,"flash","",{maxAge:0}),{url:r.url,result:r.error?new Error(r.result):r.result,input:n}}async function J(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,C(e,"Content-Type","text/html"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],initialSubmission:Ie(e),routes:W(),components:{status:n=>(x(e,n.code,n.text),()=>!e.handled&&x(e,200)),header:n=>(n.append?ue(e,n.name,n.value):C(e,n.name,n.value),()=>{if(e.handled)return;let s=he(e,n.name);Array.isArray(s)||(s=[s]);const o=s.indexOf(n.value);o!==-1&&s.splice(o,1),s.length?C(e,n.name,s):de(e,n.name)})},$islands:new Set})}function Be(e,t={}){return ye({onRequest:t.onRequest,onBeforeResponse:t.onBeforeResponse,handler:r=>{const n=fe(r);return le(n,async()=>{const s=Ne(new URL(n.request.url).pathname,n.request.method);if(s){const h=(await s.handler.import())[n.request.method];return n.params=s.params,N.context={event:n},await h(n)}const o=await J(n);let a={...t};if(a.onCompleteAll){const g=a.onCompleteAll;a.onCompleteAll=h=>{H(o)(h),g(h)}}else a.onCompleteAll=H(o);if(a.onCompleteShell){const g=a.onCompleteShell;a.onCompleteShell=h=>{F(o,r)(),g(h)}}else a.onCompleteShell=F(o,r);const i=G(()=>(N.context.event=o,e(o)),a);if(o.response&&o.response.headers.get("Location"))return ge(n,o.response.headers.get("Location"));const{writable:u,readable:f}=new TransformStream;return i.pipeTo(u),f})}})}function F(e,t){return()=>{e.response&&e.response.headers.get("Location")&&(x(t,302),be(t,"Location",e.response.headers.get("Location")))}}function H(e){return({write:t})=>{const r=e.response&&e.response.headers.get("Location");r&&t(`<script>window.location="${r}"<\/script>`)}}function Ue(e,t={}){return Be(e,{...t,createPageEvent:J})}const z=e=>t=>{const{base:r}=t,n=re(()=>t.children),s=L(()=>ve(t.root?{component:t.root,children:n()}:n(),t.base||"")),o=Re(e,s,{base:r});return e.create&&e.create(o),d(Se.Provider,{value:o,get children(){return d(_e,{routerState:o,get branches(){return s()}})}})};function _e(e){const t=L(()=>Ae(e.branches,e.routerState.location.pathname));if(E){const a=S();a&&(a.routerMatches||(a.routerMatches=[])).push(t().map(({route:i,path:u,params:f})=>({path:i.originalPath,pattern:i.pattern,match:u,params:f,metadata:i.metadata})))}const r=$e(()=>{const a=t(),i={};for(let u=0;u<a.length;u++)Object.assign(i,a[u].params);return i}),n=[];let s;const o=L(se(t,(a,i,u)=>{let f=i&&a.length===i.length;const g=[];for(let h=0,A=a.length;h<A;h++){const y=i&&i[h],c=a[h];u&&y&&c.route.key===y.route.key?g[h]=u[h]:(f=!1,n[h]&&n[h](),ae(l=>{n[h]=l,g[h]=Ee(e.routerState,g[h-1]||e.routerState.base,De(()=>o()[h+1]),()=>t()[h],r)}))}return n.splice(a.length).forEach(h=>h()),u&&f?u:(s=g[0],g)}));return d(U,{get when(){return o()&&s},keyed:!0,children:a=>d(_.Provider,{value:a,get children(){return a.outlet()}})})}const De=e=>()=>d(U,{get when(){return e()},keyed:!0,children:t=>d(_.Provider,{value:t,get children(){return t.outlet()}})});function Ke([e,t],r,n){return[r?()=>r(e()):e,n?s=>t(n(s)):t]}function We(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Je(e){let t=!1;const r=s=>typeof s=="string"?{value:s}:s,n=Ke(oe(r(e.get()),{equals:(s,o)=>s.value===o.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&P(e.init((s=e.get())=>{t=!0,n[1](r(s)),t=!1})),z({signal:n,create:e.create,utils:e.utils})}function ze(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Ve(e,t){const r=We(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0)}function Ye(e){const t=new URL(e);return t.pathname+t.search}function Ge(e){let t;const r={value:e.url||(t=S())&&Ye(t.request.url)||""};return z({signal:[()=>r,n=>Object.assign(r,n)]})(e)}function Qe(e=!0,t=!1,r="/_server"){return n=>{const s=n.base.path(),o=n.navigatorFactory(n.base);let a={};function i(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function u(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const l=c.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!l||t&&!l.hasAttribute("link"))return;const p=i(l),m=p?l.href.baseVal:l.href;if((p?l.target.baseVal:l.target)||!m&&!l.hasAttribute("state"))return;const v=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||v&&v.includes("external"))return;const $=p?new URL(m,document.baseURI):new URL(m);if(!($.origin!==window.location.origin||s&&$.pathname&&!$.pathname.toLowerCase().startsWith(s.toLowerCase())))return[l,$]}function f(c){const l=u(c);if(!l)return;const[p,m]=l,M=n.parsePath(m.pathname+m.search+m.hash),v=p.getAttribute("state");c.preventDefault(),o(M,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function g(c){const l=u(c);if(!l)return;const[p,m]=l;a[m.pathname]||n.preloadRoute(m,p.getAttribute("preload")!=="false")}function h(c){const l=u(c);if(!l)return;const[p,m]=l;a[m.pathname]||(a[m.pathname]=setTimeout(()=>{n.preloadRoute(m,p.getAttribute("preload")!=="false"),delete a[m.pathname]},200))}function A(c){const l=u(c);if(!l)return;const[,p]=l;a[p.pathname]&&(clearTimeout(a[p.pathname]),delete a[p.pathname])}function y(c){let l=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!l)return;if(!l.startsWith("https://action/")){const m=new URL(l,ke);if(l=n.parsePath(m.pathname+m.search),!l.startsWith(r))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=we.get(l);if(p){c.preventDefault();const m=new FormData(c.target);c.submitter&&c.submitter.name&&m.append(c.submitter.name,c.submitter.value),p.call(n,m)}}Q(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",A),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",y),P(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",A),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",y)})}}function Xe(e){return E?Ge(e):Je({get:()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),set({value:t,replace:r,scroll:n,state:s}){r?window.history.replaceState(s,"",t):window.history.pushState(s,"",t),Ve(window.location.hash.slice(1),n)},init:t=>ze(window,"popstate",()=>t()),create:Qe(e.preload,e.explicitLinks,e.actionBase),utils:{go:t=>window.history.go(t)}})(e)}function Ze(e){if(E){const t=S();t&&P(t.components.status(e))}return null}var et=["<nav",' class="bg-violet-800"><ul class="container flex items-center p-3 text-gray-200"><!--$-->',"<!--/--><!--$-->","<!--/--></ul></nav>"],tt=["<li",' class="','"><a',">","</a></li>"];function nt(){return w(et,R(),b(d(j,{text:"Home",path:"/"})),b(d(j,{text:"Sign-up",path:"/auth/sign-up"})))}function j({text:e,path:t}){const r=Ce(),n=s=>s==r.pathname?"border-rose-600":"border-transparent hover:border-rose-600";return w(tt,R(),`border-b-2 ${b(n(t),!0)} mx-1.5 sm:mx-6`,I("href",b(t,!0),!1),b(e))}function rt(){return d(Xe,{root:e=>[d(nt,{}),d(ie,{get children(){return e.children}})],get children(){return d(je,{})}})}function st(e){return d(ce,{get fallback(){return d(Ze,{code:500})},get children(){return e.children}})}var at=["<script",">","<\/script>"],ot=["<script",' type="module" async',"><\/script>"];const it=w("<!DOCTYPE html>");function V(e,t,r=[]){for(let n=0;n<t.length;n++){const s=t[n];if(s.path!==e[0].path)continue;let o=[...r,s];if(s.children){const a=e.slice(1);if(a.length===0||(o=V(a,s.children,o),!o))continue}return o}}function ct(e){const t=S();let r=[];return Promise.resolve().then(async()=>{if(t.routerMatches&&t.routerMatches[0]){const n=[...t.routerMatches[0]];for(;n.length&&(!n[0].metadata||!n[0].metadata.filesystem);)n.shift();const s=n.length&&V(n,t.routes);if(s)for(let o=0;o<s.length;o++){const a=s[o],u=await globalThis.MANIFEST.client.inputs[a.$component.src].assets();r.push.apply(r,u)}else console.warn("No route matched for preloading js assets")}r=[...new Map(r.map(n=>[n.attrs.key,n])).values()].filter(n=>n.attrs.rel==="modulepreload"&&!t.assets.find(s=>s.attrs.key===n.attrs.key))}),X(()=>r.length?r.map(n=>T(n)):void 0),d(B,{get children(){return[it,d(e.document,{get assets(){return[d(Z,{}),t.assets.map(n=>T(n))]},get scripts(){return[w(at,R(),`window.manifest = ${JSON.stringify(t.manifest)}`),w(ot,R(),I("src",b(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]},get children(){return d(ee,{get children(){return d(st,{get children(){return d(rt,{})}})}})}})]}})}var lt=['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],ut=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const yt=Ue(()=>d(ct,{document:({assets:e,children:t,scripts:r})=>w(ut,R(),d(B,{get children(){return w(lt,b(e))}}),b(t),b(r))}));export{yt as default};
