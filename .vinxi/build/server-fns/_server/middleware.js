import{H3Event as s,setHeader as l,getRequestURL as y,getRequestIP as h,getRequestWebStream as m}from"h3";import{getContext as g}from"unctx";import{AsyncLocalStorage as b}from"node:async_hooks";function d(e){let t;const n=a(e),u={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(n,{...u,body:e.node.req.body}):new Request(n,{...u,get body(){return t||(t=E(e),t)}})}function p(e){return e.web??={request:d(e),url:a(e)},e.web.request}function q(){return S()}const c=Symbol("$HTTPEvent");function R(e){return typeof e=="object"&&(e instanceof s||e?.[c]instanceof s||e?.__is_event__===!0)}function o(e){return function(...t){let n=t[0];if(R(n))t[0]=n instanceof s||n.__is_event__?n:n[c];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=q(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(n)}return e(...t)}}const a=o(y),x=o(h),_=o(l),E=o(m);function v(){return g("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:b})}function S(){return v().use().event}const i=Symbol("h3Event"),r=Symbol("fetchEvent"),f={get(e,t){return t===r?e:e[t]??e[i][t]}};function T(e){const t=p(e);return new Proxy({request:t,clientAddress:x(e),locals:{},[i]:e},f)}function A(e){return new Proxy({...e[r]},f)}function C(e){if(!e[r]){const t=T(e);e[r]=t}return e[r]}export{A as c,C as g,_ as s};
