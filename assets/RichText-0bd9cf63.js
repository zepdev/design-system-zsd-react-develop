import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{j as r}from"./jsx-runtime-6f6342d7.js";import{j as N}from"./index.es34-79e31a69.js";import{i as d}from"./index.es31-95f1013f.js";import{r as v}from"./index-b1e7e93e.js";import{h as F}from"./index.es13-cfbbaaf2.js";import{i as j,S as W,y as I}from"./index.es4-634758bf.js";import{f as G}from"./index.es24-26db34bb.js";import{l as J,e as O}from"./index.es16-5f436067.js";import{B as X}from"./BlocksRenderer-d6f587aa.js";import{L as K}from"./ZsdLink-d34f02b4.js";import{A as Q}from"./index.es2-9c4d8c34.js";import{L as U}from"./Layout-658f3258.js";import{H as Y}from"./HeaderShortComponent-185785ad.js";import{B as ee,Z as te}from"./ZsdButton-c8136eac.js";const q=v.createContext({type:"bullet"}),E=({type:e="bullet",children:t,className:a})=>{const c=e==="bullet"?"ul":"ol";return r.jsx(q.Provider,{value:{type:e},children:r.jsx(c,{className:d("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",a),children:t})})},re=({children:e,className:t})=>{const{type:a}=v.useContext(q);return r.jsx("li",{className:d("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':a==="bullet"},{"before:[content:counter(section,lower-alpha)]":a==="alphabetical"},{'before:[content:counter(section)"."]':a==="numeric"},t),children:e})};E.Item=re;var l=(e=>(e.Zps="ZPS",e.Cat="CAT",e.Zsd="ZSD",e.Default="Default",e))(l||{}),w=(e=>(e.Text="text",e.Button="button",e))(w||{}),u=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e))(u||{});const ae={[u.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[u.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[u.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[u.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},$=N(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:ae},defaultVariants:{variant:u.Primary}}),ie=({className:e,variant:t,isLoading:a=!1,label:c,children:n,icon:s,labelClass:p,iconPosition:b="left",...g})=>{const T=!c||c===""?$({variant:t}).replace("zep-px-1","zep-px-0.75"):$({variant:t});return r.jsxs("button",{className:j(T,e,"zep-w-full sm:zep-w-auto"),...g,children:[a&&r.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),r.jsxs(G,{gap:"0.5",className:b==="left"?`zep-flex-row-reverse ${p}`:`${p}`,children:[c??n,s&&r.jsx(F,{name:s})]})]})},A=v.createContext({variant:l.Zps}),R=()=>v.useContext(A),le=({children:e,...t})=>r.jsx("tbody",{...t,children:e}),ce=({children:e,className:t,isFirstRow:a,align:c,...n})=>{const{variant:s}=R(),p={[l.Zps]:["zep-text-typography-primary-default "],[l.Cat]:["zep-text-typography-dark-100"],[l.Zsd]:["zep-text-typography-dark-100"],[l.Default]:["zep-text-typography-dark-100"]},b=N([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:p},defaultVariants:{variant:l.Zps}});return r.jsxs("td",{className:d("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",t),style:{textAlign:c},...n,children:[r.jsx("span",{className:j(b({variant:s}),s===l.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:e}),r.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},se=({children:e,className:t,...a})=>{const{variant:c}=R(),n={[l.Zps]:["zep-bg-indigo-500"],[l.Cat]:["zep-bg-yellow-500"],[l.Zsd]:["zep-bg-greyscale-200"],[l.Default]:["zep-bg-greyscale-0"]},s=N([`
      sm:zep-table-row-group`],{variants:{variant:n},defaultVariants:{variant:l.Zps}});return r.jsx("thead",{className:j(s({variant:c,className:t})),...a,children:e})},oe=({children:e,className:t,align:a="left",...c})=>{const{variant:n}=R(),s={[l.Zps]:["zep-text-typography-light-100"],[l.Cat]:["zep-text-typography-dark-100"],[l.Zsd]:["zep-text-typography-dark-100"],[l.Default]:["zep-text-typography-dark-100"]},p=N([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:s},defaultVariants:{variant:l.Zps}});return r.jsxs("th",{className:d("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",t),style:{textAlign:a},...c,children:[r.jsx("span",{className:j(p({variant:n})),children:e}),r.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},S=({children:e,className:t,...a})=>r.jsx("tr",{className:d(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",t),...a,children:e}),ne=({children:e,className:t,variant:a=l.Zps,maxWidth:c,maxHeight:n,fullWidth:s,textTop:p=!0,buttonLabel:b,descriptionBottom:g,descriptionTop:T,dataSource:P,columns:C,align:z,tableButtonOnClick:B,...L})=>{const H=(h,m,f,k,o)=>{switch(k){case w.Button:return r.jsx(W,{icon:o==null?void 0:o.iconName,variant:a===l.Zps?I.Tertiary:I.DarkTertiary,onClick:(o==null?void 0:o.onClick)===void 0?void 0:()=>o.onClick(h,m,f),children:o==null?void 0:o.title});case w.Text:default:return r.jsx("p",{children:h})}};return r.jsx(A.Provider,{value:{variant:a},children:r.jsxs(r.Fragment,{children:[p&&r.jsx("div",{className:`zep-mb-2.5 ${a===l.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:r.jsx("p",{children:T})}),r.jsx("div",{className:d("zep-overflow-scroll zep-w-full sm:zep-w-auto",t,{"sm:zep-w-full":s}),style:{maxWidth:c,maxHeight:n},"data-testid":"zep-table",children:r.jsxs("table",{className:d("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":s}),...L,children:[r.jsx(se,{children:r.jsx(S,{children:C.map(({title:h,key:m},f)=>r.jsx(oe,{className:d({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":f===0,"zep-bg-indigo-500":a===l.Zps,"zep-bg-yellow-500":a===l.Cat,"zep-bg-greyscale-200":a===l.Zsd}),align:z,children:h},`table-align-${z}-head-cell-${m}`))})}),r.jsx(le,{children:P.map((h,m)=>r.jsx(S,{children:C.map(({key:f,dataIndex:k,props:o,renderAs:M},Z)=>r.jsx(ce,{align:z,isFirstRow:m===0,className:Z===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:H(h[k],h,m,M,o)},`table-align-${z}-cell-${m}-${f}-${Z}`))},`table-align-${z}-row-${m}`))})]})}),g&&r.jsx("div",{className:`zep-my-2.5 ${a===l.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:r.jsx("p",{children:g})}),b&&B&&r.jsx("div",{children:r.jsx(ie,{label:b,variant:u.Primary,labelClass:"zep-text-indigo-500",onClick:B})})]})})},pe=({level:e,children:t})=>e<=3?i.jsxDEV("h3",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-font-500",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:12,columnNumber:5},globalThis):i.jsxDEV("h4",{className:"zep-typography-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-font-500",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:14,columnNumber:5},globalThis),me=({children:e})=>i.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-100",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:20,columnNumber:3},globalThis),de=({ordered:e,items:t})=>i.jsxDEV(E,{type:e?"numeric":"bullet",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:25,columnNumber:3},globalThis),y=({content:e})=>i.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-2",children:i.jsxDEV(X,{content:e,blocks:{paragraph:({children:t})=>i.jsxDEV(me,{children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:35,columnNumber:38},globalThis),heading:({children:t,level:a})=>i.jsxDEV(pe,{level:a,children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:36,columnNumber:43},globalThis),link:({children:t,url:a})=>i.jsxDEV(K,{as:"span",className:"zep-inline-flex",href:a,hasIcon:!1,label:t,mode:J.Inline,target:O.Blank},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:38,columnNumber:11},globalThis),"list-item":({children:t})=>i.jsxDEV(E.Item,{className:"!zep-p-[0]",children:i.jsxDEV("span",{className:"zep-break-all zep-w-full zep-inline-block zep-text-typography-dark-100",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:50,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:49,columnNumber:11},globalThis),list:({children:t,format:a})=>i.jsxDEV(de,{ordered:a==="ordered",items:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:56,columnNumber:11},globalThis)},modifiers:{bold:({children:t})=>i.jsxDEV("span",{className:"zep-typography-bodyStrong",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:60,columnNumber:33},globalThis),italic:({children:t})=>i.jsxDEV("span",{className:"zep-italic",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:61,columnNumber:35},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:32,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:31,columnNumber:3},globalThis);try{y.displayName="BlocksRichText",y.__docgenInfo={description:"",displayName:"BlocksRichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}}}}}catch{}const V=({images:e})=>i.jsxDEV("div",{className:"zep-flex sm:zep-flex-row zep-flex-col sm:zep-flex-wrap sm:zep-gap-y-3 sm:zep-gap-x-2 zep-gap-1",children:e.map(({src:t,alt:a})=>i.jsxDEV("div",{className:"zep-grow zep-shrink first-of-type:zep-basis-full sm:zep-basis-[calc(50%-16px)] zep-basis-full zep-aspect-[16/9] zep-object-cover",children:i.jsxDEV("img",{src:t,alt:a},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:9,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:8,columnNumber:9},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:6,columnNumber:5},globalThis);try{V.displayName="Images",V.__docgenInfo={description:"",displayName:"Images",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"Image[]"}}}}}catch{}const D=({contents:e})=>i.jsxDEV("div",{className:"zep-w-full",children:i.jsxDEV(Q,{className:"zep-text-typography-dark-100",items:e.map(t=>({title:t.title,content:i.jsxDEV("div",{className:"zep-relative",children:i.jsxDEV(y,{content:t.accordionContent},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:15,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:14,columnNumber:13},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:9,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:8,columnNumber:5},globalThis);try{D.displayName="Accordion",D.__docgenInfo={description:"",displayName:"Accordion",props:{contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"AccordionContent[]"}}}}}catch{}const _=({certificateImages:e,title:t})=>i.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1.5",children:[i.jsxDEV("h4",{className:"zep-text-typography-dark-100 zep-typography-headlineSM-fluid-cqi",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:7,columnNumber:7},globalThis),i.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-gap-1",children:e.map(({src:a,alt:c})=>i.jsxDEV("img",{className:"zep-w-[120px] zep-h-[68px] zep-object-cover",src:a,alt:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:10,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:8,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:6,columnNumber:5},globalThis);try{_.displayName="Certificates",_.__docgenInfo={description:"",displayName:"Certificates",props:{certificateImages:{defaultValue:null,description:"",name:"certificateImages",required:!0,type:{name:"Image[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const x=({children:e,onDownload:t,description:a,buttonText:c,...n})=>i.jsxDEV(U,{className:"zep-flex zep-justify-center xl:zep-justify-start",testId:"zep-rich-text",children:i.jsxDEV("div",{className:"zep-flex xl:zep-max-w-[1920px] zep-max-w-[894px] zep-w-full xl:zep-flex-row xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-2 zep-flex-col xl:zep-items-start",children:[i.jsxDEV(Y,{className:"xl:zep-min-w-[42%] zep-w-full",...n},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:15,columnNumber:9},globalThis),i.jsxDEV("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-3 zep-items-center",children:[e,i.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1",children:[i.jsxDEV("p",{className:"zep-text-typography-dark-100 zep-typography-bodyText",children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:22,columnNumber:13},globalThis),i.jsxDEV(ee,{className:"sm:zep-w-fit",icon:"download",iconPosition:"right",variant:te.SecondaryDark,onClick:t,children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:23,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:21,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:19,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:14,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:13,columnNumber:5},globalThis);x.BlocksRichText=y;x.Images=V;x.Accordion=D;x.Table=ne;x.Certificates=_;try{x.displayName="RichText",x.__docgenInfo={description:"",displayName:"RichText",props:{onDownload:{defaultValue:null,description:"",name:"onDownload",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{x as R};
