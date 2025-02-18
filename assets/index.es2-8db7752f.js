import{j as E}from"./jsx-runtime-6f6342d7.js";import{i as z}from"./index.es31-95f1013f.js";import{r as o,R as v,a as K}from"./index-b1e7e93e.js";import{h as te}from"./index.es13-cfbbaaf2.js";import{f as ne}from"./index.es24-551679ca.js";const re="focus-visible:zep-ring zep-ring-focus zep-outline-none";var O=(e=>(e.ALL_CLOSED="ALL_CLOSED",e.ALL_OPEN="ALL_OPEN",e.FIRST_OPEN="FIRST_OPEN",e))(O||{}),oe=Object.defineProperty,le=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t,n)=>(le(e,typeof t!="symbol"?t+"":t,n),n);let ae=class{constructor(){j(this,"current",this.detect()),j(this,"handoffState","pending"),j(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},S=new ae,N=(e,t)=>{S.isServer?o.useEffect(e,t):o.useLayoutEffect(e,t)};function se(e){let t=o.useRef(e);return N(()=>{t.current=e},[e]),t}let x=function(e){let t=se(e);return v.useCallback((...n)=>t.current(...n),[t])};function ue(){let e=typeof document>"u";return"useSyncExternalStore"in K?(t=>t.useSyncExternalStore)(K)(()=>()=>{},()=>!1,()=>!e):!1}function ie(){let e=ue(),[t,n]=o.useState(S.isHandoffComplete);return t&&S.isHandoffComplete===!1&&n(!1),o.useEffect(()=>{t!==!0&&n(!0)},[t]),o.useEffect(()=>S.handoff(),[]),e?!1:t}var W;let V=(W=v.useId)!=null?W:function(){let e=ie(),[t,n]=v.useState(e?()=>S.nextId():null);return N(()=>{t===null&&n(S.nextId())},[t]),t!=null?""+t:void 0};function X(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ce(e,t){let[n,r]=o.useState(()=>X(e));return N(()=>{r(X(e))},[e.type,e.as]),N(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let Y=Symbol();function fe(e,t=!0){return Object.assign(e,{[Y]:t})}function T(...e){let t=o.useRef(e);o.useEffect(()=>{t.current=e},[e]);let n=x(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Y]))?void 0:n}let A=o.createContext(null);A.displayName="OpenClosedContext";var I=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(I||{});function de(){return o.useContext(A)}function pe({value:e,children:t}){return v.createElement(A.Provider,{value:e},t)}function me(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ye(n)?!1:r}function ye(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function C(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}function he(e){return S.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function q(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var L=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(L||{}),ge=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ge||{});function H({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:s=!0,name:u,mergeRefs:f}){f=f??be;let a=Z(t,e);if(s)return k(a,n,r,u,f);let d=l??0;if(d&2){let{static:i=!1,...p}=a;if(i)return k(p,n,r,u,f)}if(d&1){let{unmount:i=!0,...p}=a;return C(i?0:1,{0(){return null},1(){return k({...p,hidden:!0,style:{display:"none"}},n,r,u,f)}})}return k(a,n,r,u,f)}function k(e,t={},n,r,l){let{as:s=n,children:u,refName:f="ref",...a}=D(e,["unmount","static"]),d=e.ref!==void 0?{[f]:e.ref}:{},i=typeof u=="function"?u(t):u;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t));let p={};if(t){let c=!1,h=[];for(let[g,y]of Object.entries(t))typeof y=="boolean"&&(c=!0),y===!0&&h.push(g);c&&(p["data-headlessui-state"]=h.join(" "))}if(s===o.Fragment&&Object.keys(G(a)).length>0){if(!o.isValidElement(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let c=i.props,h=typeof(c==null?void 0:c.className)=="function"?(...y)=>q(c==null?void 0:c.className(...y),a.className):q(c==null?void 0:c.className,a.className),g=h?{className:h}:{};return o.cloneElement(i,Object.assign({},Z(i.props,G(D(a,["ref"]))),p,d,{ref:l(i.ref,d.ref)},g))}return o.createElement(s,Object.assign({},D(a,["ref"]),s!==o.Fragment&&d,s!==o.Fragment&&p),i)}function Q(){let e=o.useRef([]),t=o.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function be(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...s){let u=n[r];for(let f of u){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;f(l,...s)}}});return t}function B(e){var t;return Object.assign(o.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function G(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function D(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var J;let Ee=(J=v.startTransition)!=null?J:function(e){e()};var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{}),ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ve||{}),Se=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Se||{});let we={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},F=o.createContext(null);F.displayName="DisclosureContext";function M(e){let t=o.useContext(F);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,M),n}return t}let _=o.createContext(null);_.displayName="DisclosureAPIContext";function ee(e){let t=o.useContext(_);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}return t}let U=o.createContext(null);U.displayName="DisclosurePanelContext";function Pe(){return o.useContext(U)}function $e(e,t){return C(t.type,we,e,t)}let ze=o.Fragment;function Oe(e,t){let{defaultOpen:n=!1,...r}=e,l=o.useRef(null),s=T(t,fe(b=>{l.current=b},e.as===void 0||e.as===o.Fragment)),u=o.useRef(null),f=o.useRef(null),a=o.useReducer($e,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:u,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:i},p]=a,c=x(b=>{p({type:1});let P=he(l);if(!P||!i)return;let m=(()=>b?b instanceof HTMLElement?b:b.current instanceof HTMLElement?b.current:P.getElementById(i):P.getElementById(i))();m==null||m.focus()}),h=o.useMemo(()=>({close:c}),[c]),g=o.useMemo(()=>({open:d===0,close:c}),[d,c]),y={ref:s};return v.createElement(F.Provider,{value:a},v.createElement(_.Provider,{value:h},v.createElement(pe,{value:C(d,{0:I.Open,1:I.Closed})},H({ourProps:y,theirProps:r,slot:g,defaultTag:ze,name:"Disclosure"}))))}let xe="button";function Ie(e,t){let n=V(),{id:r=`headlessui-disclosure-button-${n}`,...l}=e,[s,u]=M("Disclosure.Button"),f=Pe(),a=f===null?!1:f===s.panelId,d=o.useRef(null),i=T(d,t,a?null:s.buttonRef),p=Q();o.useEffect(()=>{if(!a)return u({type:2,buttonId:r}),()=>{u({type:2,buttonId:null})}},[r,u,a]);let c=x(m=>{var $;if(a){if(s.disclosureState===1)return;switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),u({type:0}),($=s.buttonRef.current)==null||$.focus();break}}else switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),u({type:0});break}}),h=x(m=>{switch(m.key){case w.Space:m.preventDefault();break}}),g=x(m=>{var $;me(m.currentTarget)||e.disabled||(a?(u({type:0}),($=s.buttonRef.current)==null||$.focus()):u({type:0}))}),y=o.useMemo(()=>({open:s.disclosureState===0}),[s]),b=ce(e,d),P=a?{ref:i,type:b,onKeyDown:c,onClick:g}:{ref:i,id:r,type:b,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:c,onKeyUp:h,onClick:g};return H({mergeRefs:p,ourProps:P,theirProps:l,slot:y,defaultTag:xe,name:"Disclosure.Button"})}let Ce="div",ke=L.RenderStrategy|L.Static;function Ne(e,t){let n=V(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[s,u]=M("Disclosure.Panel"),{close:f}=ee("Disclosure.Panel"),a=Q(),d=T(t,s.panelRef,g=>{Ee(()=>u({type:g?4:5}))});o.useEffect(()=>(u({type:3,panelId:r}),()=>{u({type:3,panelId:null})}),[r,u]);let i=de(),p=(()=>i!==null?(i&I.Open)===I.Open:s.disclosureState===0)(),c=o.useMemo(()=>({open:s.disclosureState===0,close:f}),[s,f]),h={ref:d,id:r};return v.createElement(U.Provider,{value:s.panelId},H({mergeRefs:a,ourProps:h,theirProps:l,slot:c,defaultTag:Ce,features:ke,visible:p,name:"Disclosure.Panel"}))}let je=B(Oe),De=B(Ie),Re=B(Ne),R=Object.assign(je,{Button:De,Panel:Re});const Me=o.forwardRef(({items:e,initialState:t=O.ALL_CLOSED,className:n,...r},l)=>{const s=u=>{switch(t){case O.ALL_OPEN:return!0;case O.FIRST_OPEN:return u===0;case O.ALL_CLOSED:default:return!1}};return E.jsx(E.Fragment,{children:e.map((u,f)=>{const{title:a,content:d,disabled:i}=u;return E.jsx(R,{defaultOpen:s(f),children:({open:p})=>{const c=z("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":p});return E.jsxs("div",{"data-disabled":i,className:z("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!i},{"hover:!zep-border-neutral-dark-active":!i},n),children:[E.jsx(R.Button,{disabled:i,className:z("zep-typography-headlineXS-fluid-cqi","zep-w-full",re,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":i},{"zep-opacity-disabled":i}),...r,ref:l,"data-testid":`zep-accordion-button-${f}`,children:E.jsxs(ne,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[E.jsx("span",{className:"zep-text-left",children:a}),E.jsx(te,{className:z("zep-min-w-[24px] !zep-grow-0 zep-justify-end",c),name:"chevron-mini-down"})]})}),E.jsx(R.Panel,{className:z({"zep-hidden":!p},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:d})]})}},`${a}-${f}`)})})});export{Me as E};
