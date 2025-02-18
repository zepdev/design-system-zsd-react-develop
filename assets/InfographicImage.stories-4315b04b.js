import{j as t}from"./jsx-dev-runtime-8ab8c10c.js";import{r as g}from"./index-b1e7e93e.js";import{u as L}from"./useContainerDimensions-a1b6568a.js";import{j as i}from"./jsx-runtime-6f6342d7.js";import{y as I,j as w}from"./index.es35-79e31a69.js";import{c as T}from"./index-ff2c9236.js";import{c}from"./clsx-0839fdbe.js";import{G as p}from"./global-variants-0e6e1510.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";const E=w("zep-absolute zep-flex-col zep-drop-shadow-md zep-z-[1500]",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100",zps:"zep-bg-primary-default zep-text-typography-light-100",cat:"zep-bg-background-dark zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),D=w("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100",zps:"zep-text-primary-default",cat:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),C=()=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"})}),k=()=>i.jsx("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"})}),q=({className:e,label:n,description:a,position:o,color:l,align:s,onClose:m,show:r})=>i.jsxs("div",{className:I(E({align:s,color:l,position:o,show:r}),e),children:[i.jsx("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:m,children:i.jsx(C,{})}),i.jsxs("div",{className:"zep-max-w-[300px] zep-px-1 zep-py-0.5 zep-break-words zep-w-max",children:[n&&i.jsx("p",{className:"zep-typography-headlineXS-fluid-cqi zep-mb-1",children:n}),i.jsx("p",{className:"zep-typography-supportText",children:a})]}),i.jsx("div",{className:D({position:o,color:l,align:s}),children:i.jsx(k,{})})]}),S=({children:e,label:n,description:a,className:o,color:l="dark",position:s="top",align:m="center"})=>{const[r,b]=g.useState(!1),V=P=>{P.stopPropagation(),b(!1)};return i.jsxs("div",{className:I("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",o),"data-testid":"zep-tooltip",onClick:()=>b(!0),children:[i.jsx(q,{label:n,description:a,color:l,position:s,align:m,show:r,onClose:V,className:o}),e]})},f=({point:e,setActivePoint:n,activePoint:a,width:o})=>{const l={[p.Zps]:[c("zep-shadow-[0_0_0_10px_rgba(39,22,111,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(39,22,111,1)] [&>p]:zep-text-primary-default",a===e&&"zep-shadow-[0_0_0_3px_rgba(39,22,111,1)]")]},s=T([c("zep-w-1 zep-h-1 md:zep-w-1.25 md:zep-h-1.25 zep-rounded-full zep-transition-all md:group-hover:zep-w-2 md:group-hover:zep-h-2",a===e?"zep-w-2 zep-h-2 ":"")],{variants:{variant:l},defaultVariants:{variant:p.Zps}});return t.jsxDEV("div",{onClick:()=>{o&&o<990&&n(e)},style:{left:`${e.x}%`,top:`${e.y}%`},className:"zep-absolute zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-bg-typography-light-100",children:[t.jsxDEV("div",{className:"zep-hidden md:zep-block",children:t.jsxDEV(S,{color:"zps",label:e.label,description:e.description,children:t.jsxDEV("div",{className:"zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:t.jsxDEV("div",{className:c(s({variant:p.Zps}),"zep-flex zep-justify-center zep-items-center"),children:e.step&&t.jsxDEV("p",{children:e.step},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:60,columnNumber:30},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:54,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:53,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:52,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:51,columnNumber:7},globalThis),t.jsxDEV("div",{className:"md:zep-hidden zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:t.jsxDEV("div",{className:c(s({variant:p.Zps}),"zep-flex zep-justify-center zep-items-center"),children:e.step&&t.jsxDEV("p",{className:"zep-typography-supportText",children:e.step},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:69,columnNumber:26},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:66,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:65,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:42,columnNumber:5},globalThis)},A=f;try{f.displayName="InfoPoint",f.__docgenInfo={description:"",displayName:"InfoPoint",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}const h=({point:e,activePoint:n,setActivePoint:a})=>{const o={[p.Zps]:[c("zep-bg-greyscale-200 zep-text-typography-dark-100",n===e&&"zep-shadow-[inset_0_0_0_4px_rgba(39,22,111,1)]")]},l=T(["zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full"],{variants:{variant:o},defaultVariants:{variant:p.Zps}});return t.jsxDEV("div",{id:`${e.x}${e.y}`,onClick:()=>a(e),className:c(l({variant:p.Zps}),"card",n===e&&"active","zep-snap-center"),children:[t.jsxDEV("p",{className:"zep-text-headlineXS-fluid-cqi zep-mb-1 zep-text-start",children:e.label},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:42,columnNumber:7},globalThis),t.jsxDEV("p",{className:"zep-typography-bodyText zep-text-start",children:e.description},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:43,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:32,columnNumber:5},globalThis)},Z=h;try{h.displayName="PointCard",h.__docgenInfo={description:"",displayName:"PointCard",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}}}}}catch{}const z=({imageUrl:e,imageAlt:n,points:a})=>{const[o,l]=g.useState(),s=g.useRef(null),{width:m}=L(s);return g.useEffect(()=>{const r=document.getElementById(`${o==null?void 0:o.x}${o==null?void 0:o.y}`);r&&r.scrollIntoView({behavior:"smooth",inline:"center"})},[o]),t.jsxDEV("div",{children:[t.jsxDEV("div",{"data-testid":"zep-infographic-image",className:"zep-relative",ref:s,children:[t.jsxDEV("img",{src:e,alt:n},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:23,columnNumber:9},globalThis),a==null?void 0:a.map(r=>t.jsxDEV(A,{width:m,point:r,activePoint:o,setActivePoint:l},r.x,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:25,columnNumber:11},globalThis))]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:22,columnNumber:7},globalThis),t.jsxDEV("div",{className:"zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ",children:a.map(r=>t.jsxDEV(Z,{point:r,setActivePoint:l,activePoint:o},r.x,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:36,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:34,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:21,columnNumber:5},globalThis)};try{z.displayName="InfographicImage",z.__docgenInfo={description:"",displayName:"InfographicImage",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"Point[]"}}}}}catch{}const F={title:"Components/InfographicImage",component:z,tags:["autodocs"],argTypes:{}},d={decorators:[e=>t.jsxDEV("button",{children:t.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.stories.tsx",lineNumber:19,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.stories.tsx",lineNumber:18,columnNumber:7},globalThis)],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}},u={decorators:[e=>t.jsxDEV("button",{children:t.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.stories.tsx",lineNumber:40,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.stories.tsx",lineNumber:39,columnNumber:7},globalThis)],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label",step:"1"},{x:40,y:30,description:"Tooltip content",label:"Label",step:"2"},{x:15,y:80,description:"Tooltip content",label:"Label",step:"3"},{x:85,y:70,description:"Tooltip content",label:"Label",step:"4"}]}};var x,y,N;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    imageAlt: 'Image alt',
    points: [{
      x: 20,
      y: 20,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 40,
      y: 30,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 15,
      y: 80,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 85,
      y: 70,
      description: 'Tooltip content',
      label: 'Label'
    }]
  } as InfographicImageProps
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,v,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    imageAlt: 'Image alt',
    points: [{
      x: 20,
      y: 20,
      description: 'Tooltip content',
      label: 'Label',
      step: '1'
    }, {
      x: 40,
      y: 30,
      description: 'Tooltip content',
      label: 'Label',
      step: '2'
    }, {
      x: 15,
      y: 80,
      description: 'Tooltip content',
      label: 'Label',
      step: '3'
    }, {
      x: 85,
      y: 70,
      description: 'Tooltip content',
      label: 'Label',
      step: '4'
    }]
  } as InfographicImageProps
}`,...(_=(v=u.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const J=["Default","WithSteps"];export{d as Default,u as WithSteps,J as __namedExportsOrder,F as default};
