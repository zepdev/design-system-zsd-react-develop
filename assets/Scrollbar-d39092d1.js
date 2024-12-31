import{j as n}from"./jsx-dev-runtime-8ab8c10c.js";import{r as l}from"./index-b1e7e93e.js";import{c as s}from"./clsx-0839fdbe.js";const $=({children:y,className:A,controlId:M,dataTestId:B="zep-scrollbar",theme:z="dark",scrollOrientation:i="both"})=>{const o=l.useRef(null),d=l.useRef(null),f=l.useRef(null),k=l.useRef(null),E=l.useRef(null),j=l.useRef(null),[u,X]=l.useState(20),[m,Y]=l.useState(20),[a,w]=l.useState(!1),[p,L]=l.useState(!1),[O,F]=l.useState(0),[U,G]=l.useState(0),[J,K]=l.useState(0),[Q,Z]=l.useState(0),[N,R]=l.useState(!1),[S,C]=l.useState(!1),ee=l.useMemo(()=>i!=="vertical"&&u!==0,[u,i]),te=l.useMemo(()=>i!=="horizontal"&&m!==0,[m,i]),x={light:{thumb:"zep-bg-greyscale-500",track:"zep-bg-greyscale-200"},dark:{thumb:"zep-bg-primary-default",track:"zep-bg-greyscale-400"}},re=()=>{if(o.current){if(d.current&&o.current){const{clientWidth:e}=d.current,{clientWidth:r,scrollWidth:t}=o.current,c=r>=t;X(c?0:Math.max(r/t*e,20))}if(f.current){const{clientHeight:e}=f.current,{clientHeight:r,scrollHeight:t}=o.current,c=r>=t;Y(c?0:Math.max(r/t*e,20))}}},W=()=>{if(!o.current||!d.current||!E.current||!k.current||!f.current)return;const{scrollLeft:e,scrollWidth:r,scrollHeight:t,scrollTop:c}=o.current,{clientWidth:T}=d.current,{clientHeight:D}=f.current;let h=e/r*T,b=c/t*D;h=Math.min(h,T-u),b=Math.min(b,D-m);const v=E.current,g=k.current;requestAnimationFrame(()=>{v.style.left=`${h}px`,g.style.top=`${b}px`})};l.useEffect(()=>{var e;if(o.current){const r=o.current;return j.current=new ResizeObserver(()=>{re()}),(e=j.current)==null||e.observe(r),r.addEventListener("scroll",W),()=>{var t;(t=j.current)==null||t.unobserve(r),r.removeEventListener("scroll",W)}}},[]);const oe=e=>{e.preventDefault(),e.stopPropagation(),F(e.clientX),o.current&&K(o.current.scrollLeft),L(!0)},le=e=>{e.preventDefault(),e.stopPropagation(),G(e.clientY),o.current&&Z(o.current.scrollTop),w(!0)},H=e=>{e.preventDefault(),e.stopPropagation(),a&&w(!1),p&&L(!1)},V=e=>{if(o.current){if(e.preventDefault(),e.stopPropagation(),p){const{scrollWidth:r,clientWidth:t}=o.current,c=(e.clientX-O)*(t/u);o.current.scrollLeft=Math.min(J+c,r-t)}if(a){const{scrollHeight:r,clientHeight:t}=o.current,c=(e.clientY-U)*(t/m);o.current.scrollTop=Math.min(Q+c,r-t)}}},P=e=>{e.preventDefault(),R(!0)},I=e=>{e.preventDefault(),N&&R(!1)},_=e=>{e.preventDefault(),C(!0)},q=e=>{e.preventDefault(),S&&C(!1)};l.useEffect(()=>(document.addEventListener("mousemove",V),document.addEventListener("mouseup",H),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",H)}),[V,H]);const ce=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=d,{current:t}=o;if(r&&t){const{clientX:c}=e,h=e.target.getBoundingClientRect().left,b=-(u/2),v=(c-h+b)/r.clientWidth,g=Math.floor(v*t.scrollWidth);t.scrollTo({left:g,behavior:"smooth"})}},ne=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=f,{current:t}=o;if(t&&r){const{clientY:c}=e,h=e.target.getBoundingClientRect().top,b=-(m/2),v=(c-h+b)/r.clientHeight,g=Math.floor(v*t.scrollHeight);t.scrollTo({top:g,behavior:"smooth"})}};return n.jsxDEV("div",{className:s("zep-relative","zep-w-full"),"data-testid":B,children:[n.jsxDEV("div",{className:"zep-flex",children:[n.jsxDEV("div",{className:s("zep-scrollable-content","zep-w-full",A,{"zep-mb-2":ee,"zep-mr-2":te}),id:M,ref:o,children:y},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:252,columnNumber:9},globalThis),n.jsxDEV("div",{className:s("zep-pl-2","zep-vertical-scrollbar",{"zep-hidden":m===0||i==="horizontal"}),"data-testid":"vertical-scrollbar",children:n.jsxDEV("div",{className:s("zep-block zep-relative zep-h-full",a||S?"!zep-w-0.75":"!zep-w-0.5"),"aria-controls":M,role:"scrollbar",children:[n.jsxDEV("div",{className:s("zep-top-0 zep-absolute zep-bottom-0 zep-h-full zep-rounded-[100px]",a||S?"!zep-w-0.75":"!zep-w-0.5",x[z].track),ref:f,onClick:ne,onMouseEnter:_,onMouseLeave:q,style:{cursor:a?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:265,columnNumber:13},globalThis),n.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",a||S?"!zep-w-0.75":"!zep-w-0.5",x[z].thumb),ref:k,onMouseDown:le,onMouseEnter:_,onMouseLeave:q,style:{height:`${m}px`,cursor:a?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:279,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:260,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:259,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:251,columnNumber:7},globalThis),n.jsxDEV("div",{className:s("zep-horizontal-scrollbar",{"zep-hidden":u===0||i==="vertical","zep-pr-0.5":i==="both"&&!a,"zep-pr-0.75":i==="both"&&a}),"data-testid":"horizontal-scrollbar",children:n.jsxDEV("div",{className:s("zep-block zep-relative zep-w-full",p||N?"!zep-h-0.75":"!zep-h-0.5"),"aria-controls":M,role:"scrollbar",children:[n.jsxDEV("div",{className:s("zep-absolute zep-w-full zep-rounded-[100px]",p||N?"!zep-h-0.75":"!zep-h-0.5",x[z].track),ref:d,onClick:ce,onMouseEnter:P,onMouseLeave:I,style:{cursor:p?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:310,columnNumber:11},globalThis),n.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",p||N?"!zep-h-0.75":"!zep-h-0.5",x[z].thumb),ref:E,onMouseDown:oe,onMouseEnter:P,onMouseLeave:I,style:{width:`${u}px`,cursor:p?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:324,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:305,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:297,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:250,columnNumber:5},globalThis)};try{$.displayName="Scrollbar",$.__docgenInfo={description:"",displayName:"Scrollbar",props:{controlId:{defaultValue:null,description:"",name:"controlId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:{value:"zep-scrollbar"},description:"",name:"dataTestId",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},scrollOrientation:{defaultValue:{value:"both"},description:"",name:"scrollOrientation",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}export{$ as S};
