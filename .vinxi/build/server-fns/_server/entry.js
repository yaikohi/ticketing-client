import{fromJSON as $,crossSerializeStream as U,getCrossReferenceHeader as A}from"seroval";import{CustomEventPlugin as R,DOMExceptionPlugin as b,EventPlugin as w,FormDataPlugin as q,HeadersPlugin as S,ReadableStreamPlugin as v,RequestPlugin as x,ResponsePlugin as P,URLSearchParamsPlugin as E,URLPlugin as T}from"seroval-plugins/web";import{sharedConfig as I}from"solid-js";import{provideRequestEvent as O}from"solid-js/web/storage";import{H3Event as g,setHeader as W,getRequestURL as k,getRequestIP as F,getRequestWebStream as N,eventHandler as B}from"h3";import{getContext as D}from"unctx";import{AsyncLocalStorage as M}from"node:async_hooks";const h="Invariant Violation",{setPrototypeOf:z=function(e,n){return e.__proto__=n,e}}=Object;class y extends Error{framesToPop=1;name=h;constructor(n=h){super(typeof n=="number"?`${h}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),z(this,y.prototype)}}function J(e,n){if(!e)throw new y(n)}function G(e){let n;const r=L(e),o={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(r,{...o,body:e.node.req.body}):new Request(r,{...o,get body(){return n||(n=X(e),n)}})}function V(e){return e.web??={request:G(e),url:L(e)},e.web.request}function j(){return Z()}const H=Symbol("$HTTPEvent");function K(e){return typeof e=="object"&&(e instanceof g||e?.[H]instanceof g||e?.__is_event__===!0)}function p(e){return function(...n){let r=n[0];if(K(r))n[0]=r instanceof g||r.__is_event__?r:r[H];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=j(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");n.unshift(r)}return e(...n)}}const L=p(k),Q=p(F),m=p(W),X=p(N);function Y(){return D("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:M})}function Z(){return Y().use().event}const C=Symbol("h3Event"),d=Symbol("fetchEvent"),ee={get(e,n){return n===d?e:e[n]??e[C][n]}};function te(e){const n=V(e);return new Proxy({request:n,clientAddress:Q(e),locals:{},[C]:e},ee)}function ne(e){if(!e[d]){const n=te(e);e[d]=n}return e[d]}function re(e){const r=e.length.toString(16),o="00000000".substring(0,8-r.length)+r;return new TextEncoder().encode(`;0x${o};${e}`)}function oe(e,n){return new ReadableStream({start(r){U(n,{scopeId:e,plugins:[R,b,w,q,S,v,x,P,E,T],onSerialize(o,a){r.enqueue(re(a?`(${A(e)},${o})`:o))},onDone(){r.close()},onError(o){r.error(o)}})}})}async function se(e){const n=ne(e),r=n.request,o=r.headers.get("x-server-id"),a=r.headers.get("x-server-instance"),u=new URL(r.url);let f,l;if(o)J(typeof o=="string","Invalid server function"),[f,l]=o.split("#");else if(f=u.searchParams.get("id"),l=u.searchParams.get("name"),!f||!l)throw new Error("Invalid request");const _=(await globalThis.MANIFEST["server-fns"].chunks[f].import())[l];let i=[];if(!a||e.method==="GET"){const t=u.searchParams.get("args");t&&JSON.parse(t).forEach(s=>i.push(s))}if(e.method==="POST"){const t=r.headers.get("content-type");if(t.startsWith("multipart/form-data")||t.startsWith("application/x-www-form-urlencoded"))i.push(await new Request(r,{...r,body:n.node.req.body}).formData());else{const s=new Request(r,{...r,body:n.node.req.body});i=$(await s.json(),{plugins:[R,b,w,q,S,v,x,P,E,T]})}}try{let t=await O(n,()=>(I.context={event:n},_(...i)));if(t instanceof Response){if(t.status===302)return new Response(null,{status:a?204:302,headers:{Location:t.headers.get("Location")}});if(t.headers)for(const[s,c]of t.headers.entries())m(e,s,c);t.customBody?t=await t.customBody():t.body==null&&(t=void 0)}if(!a){const s=t instanceof Error,c=new URL(r.headers.get("referer"));return new Response(null,{status:302,headers:{Location:c.toString(),...t?{"Set-Cookie":`flash=${JSON.stringify({url:u.pathname+encodeURIComponent(u.search),result:s?t.message:t,error:s,input:[...i.slice(0,-1),[...i[i.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return typeof t=="string"?new Response(t):(m(e,"content-type","text/javascript"),oe(a,t))}catch(t){if(t instanceof Response){if(t.status===302)return new Response(null,{status:a?204:302,headers:{Location:t.headers.get("Location")}});if(t.headers)for(const[s,c]of t.headers.entries())m(e,s,c);t.customBody?t=await t.customBody():t.body==null&&(t=void 0)}return t}}const pe=B(se);export{pe as default};
