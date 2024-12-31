import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{j as r,h as U}from"./index.es13-f43b3659.js";import{j,f as X}from"./index.es24-ba02af2f.js";import{i as h}from"./index.es31-95f1013f.js";import{r as k}from"./index-b1e7e93e.js";import{i as w,S as Y,y as $}from"./index.es4-d051cf74.js";import{l as Q,e as ee}from"./index.es16-6e75dee6.js";import{B as te}from"./BlocksRenderer-2be578fa.js";import{L as ie}from"./ZsdLink-fce436d5.js";import{A as re}from"./index.es2-df03a8e9.js";import{H as le}from"./HeaderShortComponent-93f7409b.js";import{B as oe,Z as ae}from"./ZsdButton-4ec82ec4.js";import{L as se}from"./Layout-fc099938.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./moving-forward-arrow-a1f6b1da.js";import"./tw-merge-71974dbd.js";const M=k.createContext({type:"bullet"}),B=({type:e="bullet",children:t,className:l})=>{const a=e==="bullet"?"ul":"ol";return r.jsx(M.Provider,{value:{type:e},children:r.jsx(a,{className:h("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",l),children:t})})},ce=({children:e,className:t})=>{const{type:l}=k.useContext(M);return r.jsx("li",{className:h("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':l==="bullet"},{"before:[content:counter(section,lower-alpha)]":l==="alphabetical"},{'before:[content:counter(section)"."]':l==="numeric"},t),children:e})};B.Item=ce;var o=(e=>(e.Zps="ZPS",e.Cat="CAT",e.Zsd="ZSD",e.Default="Default",e))(o||{}),R=(e=>(e.Text="text",e.Button="button",e))(R||{}),x=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e))(x||{});const ne={[x.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[x.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[x.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[x.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},q=j(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:ne},defaultVariants:{variant:x.Primary}}),pe=({className:e,variant:t,isLoading:l=!1,label:a,children:p,icon:c,labelClass:m,iconPosition:g="left",...z})=>{const D=!a||a===""?q({variant:t}).replace("zep-px-1","zep-px-0.75"):q({variant:t});return r.jsxs("button",{className:w(D,e,"zep-w-full sm:zep-w-auto"),...z,children:[l&&r.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),r.jsxs(X,{gap:"0.5",className:g==="left"?`zep-flex-row-reverse ${m}`:`${m}`,children:[a??p,c&&r.jsx(U,{name:c})]})]})},G=k.createContext({variant:o.Zps}),I=()=>k.useContext(G),me=({children:e,...t})=>r.jsx("tbody",{...t,children:e}),de=({children:e,className:t,isFirstRow:l,align:a,...p})=>{const{variant:c}=I(),m={[o.Zps]:["zep-text-typography-primary-default "],[o.Cat]:["zep-text-typography-dark-100"],[o.Zsd]:["zep-text-typography-dark-100"],[o.Default]:["zep-text-typography-dark-100"]},g=j([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:m},defaultVariants:{variant:o.Zps}});return r.jsxs("td",{className:h("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",t),style:{textAlign:a},...p,children:[r.jsx("span",{className:w(g({variant:c}),c===o.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:e}),r.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},he=({children:e,className:t,...l})=>{const{variant:a}=I(),p={[o.Zps]:["zep-bg-indigo-500"],[o.Cat]:["zep-bg-yellow-500"],[o.Zsd]:["zep-bg-greyscale-200"],[o.Default]:["zep-bg-greyscale-0"]},c=j([`
      sm:zep-table-row-group`],{variants:{variant:p},defaultVariants:{variant:o.Zps}});return r.jsx("thead",{className:w(c({variant:a,className:t})),...l,children:e})},ue=({children:e,className:t,align:l="left",...a})=>{const{variant:p}=I(),c={[o.Zps]:["zep-text-typography-light-100"],[o.Cat]:["zep-text-typography-dark-100"],[o.Zsd]:["zep-text-typography-dark-100"],[o.Default]:["zep-text-typography-dark-100"]},m=j([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:c},defaultVariants:{variant:o.Zps}});return r.jsxs("th",{className:h("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",t),style:{textAlign:l},...a,children:[r.jsx("span",{className:w(m({variant:p})),children:e}),r.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},P=({children:e,className:t,...l})=>r.jsx("tr",{className:h(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",t),...l,children:e}),xe=({children:e,className:t,variant:l=o.Zps,maxWidth:a,maxHeight:p,fullWidth:c,textTop:m=!0,buttonLabel:g,descriptionBottom:z,descriptionTop:D,dataSource:W,columns:A,align:f,tableButtonOnClick:Z,...K})=>{const O=(u,d,b,V,n)=>{switch(V){case R.Button:return r.jsx(Y,{icon:n==null?void 0:n.iconName,variant:l===o.Zps?$.Tertiary:$.DarkTertiary,onClick:(n==null?void 0:n.onClick)===void 0?void 0:()=>n.onClick(u,d,b),children:n==null?void 0:n.title});case R.Text:default:return r.jsx("p",{children:u})}};return r.jsx(G.Provider,{value:{variant:l},children:r.jsxs(r.Fragment,{children:[m&&r.jsx("div",{className:`zep-mb-2.5 ${l===o.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:r.jsx("p",{children:D})}),r.jsx("div",{className:h("zep-overflow-scroll zep-w-full sm:zep-w-auto",t,{"sm:zep-w-full":c}),style:{maxWidth:a,maxHeight:p},"data-testid":"zep-table",children:r.jsxs("table",{className:h("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":c}),...K,children:[r.jsx(he,{children:r.jsx(P,{children:A.map(({title:u,key:d},b)=>r.jsx(ue,{className:h({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":b===0,"zep-bg-indigo-500":l===o.Zps,"zep-bg-yellow-500":l===o.Cat,"zep-bg-greyscale-200":l===o.Zsd}),align:f,children:u},`table-align-${f}-head-cell-${d}`))})}),r.jsx(me,{children:W.map((u,d)=>r.jsx(P,{children:A.map(({key:b,dataIndex:V,props:n,renderAs:J},S)=>r.jsx(de,{align:f,isFirstRow:d===0,className:S===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:O(u[V],u,d,J,n)},`table-align-${f}-cell-${d}-${b}-${S}`))},`table-align-${f}-row-${d}`))})]})}),z&&r.jsx("div",{className:`zep-my-2.5 ${l===o.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:r.jsx("p",{children:z})}),g&&Z&&r.jsx("div",{children:r.jsx(pe,{label:g,variant:x.Primary,labelClass:"zep-text-indigo-500",onClick:Z})})]})})},ge=({level:e,children:t})=>e<=3?i.jsxDEV("h3",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-font-500",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:12,columnNumber:5},globalThis):i.jsxDEV("h4",{className:"zep-typography-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-font-500",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:14,columnNumber:5},globalThis),fe=({children:e})=>i.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-100",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:20,columnNumber:3},globalThis),be=({ordered:e,items:t})=>i.jsxDEV(B,{type:e?"numeric":"bullet",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:25,columnNumber:3},globalThis),T=({content:e})=>i.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-2",children:i.jsxDEV(te,{content:e,blocks:{paragraph:({children:t})=>i.jsxDEV(fe,{children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:35,columnNumber:38},globalThis),heading:({children:t,level:l})=>i.jsxDEV(ge,{level:l,children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:36,columnNumber:43},globalThis),link:({children:t,url:l})=>i.jsxDEV(ie,{as:"span",className:"zep-inline-flex",href:l,hasIcon:!1,label:t,mode:Q.Inline,target:ee.Blank},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:38,columnNumber:11},globalThis),"list-item":({children:t})=>i.jsxDEV(B.Item,{className:"!zep-p-[0]",children:i.jsxDEV("span",{className:"zep-break-all zep-w-full zep-inline-block zep-text-typography-dark-100",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:50,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:49,columnNumber:11},globalThis),list:({children:t,format:l})=>i.jsxDEV(be,{ordered:l==="ordered",items:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:56,columnNumber:11},globalThis)},modifiers:{bold:({children:t})=>i.jsxDEV("span",{className:"zep-typography-bodyStrong",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:60,columnNumber:33},globalThis),italic:({children:t})=>i.jsxDEV("span",{className:"zep-italic",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:61,columnNumber:35},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:32,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/BlocksRichText.tsx",lineNumber:31,columnNumber:3},globalThis);try{T.displayName="BlocksRichText",T.__docgenInfo={description:"",displayName:"BlocksRichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}}}}}catch{}const _=({images:e})=>i.jsxDEV("div",{className:"zep-flex sm:zep-flex-row zep-flex-col sm:zep-flex-wrap sm:zep-gap-y-3 sm:zep-gap-x-2 zep-gap-1",children:e.map(({src:t,alt:l})=>i.jsxDEV("div",{className:"zep-grow zep-shrink first-of-type:zep-basis-full sm:zep-basis-[calc(50%-16px)] zep-basis-full zep-aspect-[16/9] zep-object-cover",children:i.jsxDEV("img",{src:t,alt:l},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:9,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:8,columnNumber:9},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Images.tsx",lineNumber:6,columnNumber:5},globalThis);try{_.displayName="Images",_.__docgenInfo={description:"",displayName:"Images",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"Image[]"}}}}}catch{}const E=({contents:e})=>i.jsxDEV("div",{className:"zep-w-full",children:i.jsxDEV(re,{className:"zep-text-typography-dark-100",items:e.map(t=>({title:t.title,content:i.jsxDEV("div",{className:"zep-relative",children:i.jsxDEV(T,{content:t.accordionContent},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:15,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:14,columnNumber:13},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:9,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Accordion.tsx",lineNumber:8,columnNumber:5},globalThis);try{E.displayName="Accordion",E.__docgenInfo={description:"",displayName:"Accordion",props:{contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"AccordionContent[]"}}}}}catch{}const C=({certificateImages:e,title:t})=>i.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1.5",children:[i.jsxDEV("h4",{className:"zep-text-typography-dark-100 zep-typography-headlineSM-fluid-cqi",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:7,columnNumber:7},globalThis),i.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-gap-1",children:e.map(({src:l,alt:a})=>i.jsxDEV("img",{className:"zep-w-[120px] zep-h-[68px] zep-object-cover",src:l,alt:a},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:10,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:8,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/Certificates.tsx",lineNumber:6,columnNumber:5},globalThis);try{C.displayName="Certificates",C.__docgenInfo={description:"",displayName:"Certificates",props:{certificateImages:{defaultValue:null,description:"",name:"certificateImages",required:!0,type:{name:"Image[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const s=({children:e,onDownload:t,description:l,buttonText:a,...p})=>i.jsxDEV(se,{className:"zep-flex zep-justify-center xl:zep-justify-start",testId:"zep-rich-text",children:i.jsxDEV("div",{className:"zep-flex xl:zep-max-w-[1920px] zep-max-w-[894px] zep-w-full xl:zep-flex-row xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-2 zep-flex-col xl:zep-items-start",children:[i.jsxDEV(le,{className:"xl:zep-min-w-[42%] zep-w-full",...p},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:15,columnNumber:9},globalThis),i.jsxDEV("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-3 zep-items-center",children:[e,i.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1",children:[i.jsxDEV("p",{className:"zep-text-typography-dark-100 zep-typography-bodyText",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:22,columnNumber:13},globalThis),i.jsxDEV(oe,{className:"sm:zep-w-fit",icon:"download",iconPosition:"right",variant:ae.SecondaryDark,onClick:t,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:23,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:21,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:19,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:14,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:13,columnNumber:5},globalThis);s.BlocksRichText=T;s.Images=_;s.Accordion=E;s.Table=xe;s.Certificates=C;try{s.displayName="RichText",s.__docgenInfo={description:"",displayName:"RichText",props:{onDownload:{defaultValue:null,description:"",name:"onDownload",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y=[{type:"heading",level:4,children:[{type:"text",text:"ESC für Neumotoren"}]},{type:"paragraph",children:[{text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",type:"text"}]}],ze=Array.from({length:3}).map(()=>({src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:""})),N=[{type:"paragraph",children:[{text:"Als Kunde von Zeppelin Systems können Sie ruhigen Gewissens mit offenen Farbkarten spielen – und dabei auch noch maximal flexibel agieren. Unsere innovative Anlagentechnologie schafft dafür die perfekten Voraussetzungen. Vom zügigen Austragen bis zur optimalen Förderung, vom zuverlässigen Filtern bis zur hochpräzisen Verwiegung und Dosierung.",type:"text"}]},{type:"paragraph",children:[{text:"Profitieren Sie vom umfassenden Zeppelin Know-how in allen relevanten Steps der Dispersionsfarbenproduktion, inklusive dem sicheren Handling von Titanoxid.",type:"text"}]},{type:"heading",level:3,children:[{type:"text",text:"Vorteile für Ihre Dispersionsfarbenproduktion"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"}]},{type:"list-item",children:[{type:"text",text:"Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"}]}]}],ye=[{title:"Title one",accordionContent:y},{title:"Title two",accordionContent:y},{title:"Title three",accordionContent:y},{title:"Title four",accordionContent:y}],Ne=Array.from({length:10}).map((e,t)=>({key:`title-${t}`,dataIndex:`title-${t}`,title:"Title"})),ve=[{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""},{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""},{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""},{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""},{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""},{src:"https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784",alt:""}],Te=Array.from({length:15}).map((e,t)=>({"title-0":"Title","title-1":"Title","title-2":"Title","title-3":"Title","title-4":"Title","title-5":"Title","title-6":"Title","title-7":"Title","title-8":"Title","title-9":"Title"})),Le={title:"Components/RichText",component:s,tags:["autodocs"],argTypes:{}},v={args:{headline:"Headline",tagline:"Tagline",onDownload:()=>null,buttonText:"Herunterladen (PDF, 2MB)",description:"Mehr Informationen finded sie in der Prduktbroschüre:",children:i.jsxDEV(i.Fragment,{children:[i.jsxDEV(s.BlocksRichText,{content:N},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:117,columnNumber:9},globalThis),i.jsxDEV(s.Images,{images:ze},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:118,columnNumber:9},globalThis),i.jsxDEV(s.BlocksRichText,{content:N},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:119,columnNumber:9},globalThis),i.jsxDEV(s.Accordion,{contents:ye},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:120,columnNumber:9},globalThis),i.jsxDEV(s.BlocksRichText,{content:N},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:121,columnNumber:9},globalThis),i.jsxDEV(s.Table,{dataSource:Te,columns:Ne,textTop:!1},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:122,columnNumber:9},globalThis),i.jsxDEV(s.BlocksRichText,{content:N},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:123,columnNumber:9},globalThis),i.jsxDEV(s.Certificates,{title:"Zertifiziert und geprüft für viele Anwendunsfälle:",certificateImages:ve},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:124,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.stories.tsx",lineNumber:116,columnNumber:7},globalThis)}};var L,H,F;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    onDownload: () => null,
    buttonText: 'Herunterladen (PDF, 2MB)',
    description: 'Mehr Informationen finded sie in der Prduktbroschüre:',
    children: <>
        <RichText.BlocksRichText content={content} />
        <RichText.Images images={images} />
        <RichText.BlocksRichText content={content} />
        <RichText.Accordion contents={accordionContents} />
        <RichText.BlocksRichText content={content} />
        <RichText.Table dataSource={dataSource} columns={columns} textTop={false} />
        <RichText.BlocksRichText content={content} />
        <RichText.Certificates title="Zertifiziert und geprüft für viele Anwendunsfälle:" certificateImages={certificateImages} />
      </>
  } as RichTextProps
}`,...(F=(H=v.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const He=["Default"];export{v as Default,He as __namedExportsOrder,Le as default};
