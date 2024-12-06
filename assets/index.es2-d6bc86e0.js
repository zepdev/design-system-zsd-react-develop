import{j as v,v as Q}from"./index.es13-55dfe41f.js";import{a as P}from"./index.es29-7715336a.js";import{r as a,R as E,a as U}from"./index-b1e7e93e.js";import{f as _}from"./index.es24-9329eeb1.js";const ee="focus-visible:zep-ring zep-ring-focus zep-outline-none";function x(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,x),r}function K(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var O=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(O||{}),te=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(te||{});function T({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let s=G(t,e);if(l)return j(s,n,r,u);let i=o??0;if(i&2){let{static:c=!1,...p}=s;if(c)return j(p,n,r,u)}if(i&1){let{unmount:c=!0,...p}=s;return x(c?0:1,{0(){return null},1(){return j({...p,hidden:!0,style:{display:"none"}},n,r,u)}})}return j(s,n,r,u)}function j(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...s}=I(e,["unmount","static"]),i=e.ref!==void 0?{[u]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let p={};if(t){let d=!1,m=[];for(let[b,y]of Object.entries(t))typeof y=="boolean"&&(d=!0),y===!0&&m.push(b);d&&(p["data-headlessui-state"]=m.join(" "))}if(o===a.Fragment&&Object.keys(W(s)).length>0){if(!a.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let d=c.props,m=typeof(d==null?void 0:d.className)=="function"?(...y)=>K(d==null?void 0:d.className(...y),s.className):K(d==null?void 0:d.className,s.className),b=m?{className:m}:{};return a.cloneElement(c,Object.assign({},G(c.props,W(I(s,["ref"]))),p,i,ne(c.ref,i.ref),b))}return a.createElement(o,Object.assign({},I(s,["ref"]),o!==a.Fragment&&i,o!==a.Fragment&&p),c)}function ne(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function G(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...l){let u=n[r];for(let s of u){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;s(o,...l)}}});return t}function R(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function W(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function I(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var re=Object.defineProperty,oe=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(oe(e,typeof t!="symbol"?t+"":t,n),n);let ae=class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},w=new ae,C=(e,t)=>{w.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function le(e){let t=a.useRef(e);return C(()=>{t.current=e},[e]),t}let $=function(e){let t=le(e);return E.useCallback((...n)=>t.current(...n),[t])},J=Symbol();function se(e,t=!0){return Object.assign(e,{[J]:t})}function A(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=$(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[J]))?void 0:n}function ue(){let e=typeof document>"u";return"useSyncExternalStore"in U?(t=>t.useSyncExternalStore)(U)(()=>()=>{},()=>!1,()=>!e):!1}function ie(){let e=ue(),[t,n]=a.useState(w.isHandoffComplete);return t&&w.isHandoffComplete===!1&&n(!1),a.useEffect(()=>{t!==!0&&n(!0)},[t]),a.useEffect(()=>w.handoff(),[]),e?!1:t}var X;let V=(X=E.useId)!=null?X:function(){let e=ie(),[t,n]=E.useState(e?()=>w.nextId():null);return C(()=>{t===null&&n(w.nextId())},[t]),t!=null?""+t:void 0};var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{});function ce(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&de(n)?!1:r}function de(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let H=a.createContext(null);H.displayName="OpenClosedContext";var z=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(z||{});function pe(){return a.useContext(H)}function fe({value:e,children:t}){return E.createElement(H.Provider,{value:e},t)}function Y(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function me(e,t){let[n,r]=a.useState(()=>Y(e));return C(()=>{r(Y(e))},[e.type,e.as]),C(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}function ye(e){return w.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}var q;let be=(q=E.startTransition)!=null?q:function(e){e()};var ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ge||{}),he=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(he||{});let ve={0:e=>({...e,disclosureState:x(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},L=a.createContext(null);L.displayName="DisclosureContext";function B(e){let t=a.useContext(L);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,B),n}return t}let F=a.createContext(null);F.displayName="DisclosureAPIContext";function Z(e){let t=a.useContext(F);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}let M=a.createContext(null);M.displayName="DisclosurePanelContext";function Ee(){return a.useContext(M)}function we(e,t){return x(t.type,ve,e,t)}let Se=a.Fragment;function Pe(e,t){let{defaultOpen:n=!1,...r}=e,o=a.useRef(null),l=A(t,se(g=>{o.current=g},e.as===void 0||e.as===a.Fragment)),u=a.useRef(null),s=a.useRef(null),i=a.useReducer(we,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:u,buttonId:null,panelId:null}),[{disclosureState:c,buttonId:p},d]=i,m=$(g=>{d({type:1});let f=ye(o);if(!f||!p)return;let h=(()=>g?g instanceof HTMLElement?g:g.current instanceof HTMLElement?g.current:f.getElementById(p):f.getElementById(p))();h==null||h.focus()}),b=a.useMemo(()=>({close:m}),[m]),y=a.useMemo(()=>({open:c===0,close:m}),[c,m]),k={ref:l};return E.createElement(L.Provider,{value:i},E.createElement(F.Provider,{value:b},E.createElement(fe,{value:x(c,{0:z.Open,1:z.Closed})},T({ourProps:k,theirProps:r,slot:y,defaultTag:Se,name:"Disclosure"}))))}let $e="button";function ze(e,t){let n=V(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[l,u]=B("Disclosure.Button"),s=Ee(),i=s===null?!1:s===l.panelId,c=a.useRef(null),p=A(c,t,i?null:l.buttonRef);a.useEffect(()=>{if(!i)return u({type:2,buttonId:r}),()=>{u({type:2,buttonId:null})}},[r,u,i]);let d=$(f=>{var h;if(i){if(l.disclosureState===1)return;switch(f.key){case S.Space:case S.Enter:f.preventDefault(),f.stopPropagation(),u({type:0}),(h=l.buttonRef.current)==null||h.focus();break}}else switch(f.key){case S.Space:case S.Enter:f.preventDefault(),f.stopPropagation(),u({type:0});break}}),m=$(f=>{switch(f.key){case S.Space:f.preventDefault();break}}),b=$(f=>{var h;ce(f.currentTarget)||e.disabled||(i?(u({type:0}),(h=l.buttonRef.current)==null||h.focus()):u({type:0}))}),y=a.useMemo(()=>({open:l.disclosureState===0}),[l]),k=me(e,c),g=i?{ref:p,type:k,onKeyDown:d,onClick:b}:{ref:p,id:r,type:k,"aria-expanded":l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:d,onKeyUp:m,onClick:b};return T({ourProps:g,theirProps:o,slot:y,defaultTag:$e,name:"Disclosure.Button"})}let xe="div",ke=O.RenderStrategy|O.Static;function je(e,t){let n=V(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[l,u]=B("Disclosure.Panel"),{close:s}=Z("Disclosure.Panel"),i=A(t,l.panelRef,b=>{be(()=>u({type:b?4:5}))});a.useEffect(()=>(u({type:3,panelId:r}),()=>{u({type:3,panelId:null})}),[r,u]);let c=pe(),p=(()=>c!==null?(c&z.Open)===z.Open:l.disclosureState===0)(),d=a.useMemo(()=>({open:l.disclosureState===0,close:s}),[l,s]),m={ref:i,id:r};return E.createElement(M.Provider,{value:l.panelId},T({ourProps:m,theirProps:o,slot:d,defaultTag:xe,features:ke,visible:p,name:"Disclosure.Panel"}))}let Ce=R(Pe),Ie=R(ze),De=R(je),N=Object.assign(Ce,{Button:Ie,Panel:De});const He=a.forwardRef(({items:e,className:t,...n},r)=>v.jsx(v.Fragment,{children:e.map((o,l)=>{const{title:u,content:s,disabled:i}=o;return v.jsx(N,{children:({open:c})=>{const p=P("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":c});return v.jsxs("div",{"data-disabled":i,className:P("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!i},{"hover:!zep-border-neutral-dark-active":!i},t),children:[v.jsx(N.Button,{disabled:i,className:P("zep-typography-headlineXS-fluid-cqi","zep-w-full",ee,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":i},{"zep-opacity-disabled":i}),...n,ref:r,"data-testid":`zep-accordion-button-${l}`,children:v.jsxs(_,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[v.jsx("span",{className:"zep-text-left",children:u}),v.jsx(Q,{className:P("zep-min-w-[24px] !zep-grow-0 zep-justify-end",p),name:"chevron-mini-down"})]})}),v.jsx(N.Panel,{className:P({"zep-hidden":!c},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:s})]})}},`${u}-${l}`)})}));export{He as C};
