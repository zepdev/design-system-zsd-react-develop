import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{r as u}from"./index-b1e7e93e.js";import{c as s}from"./clsx-0839fdbe.js";import{H as x}from"./HeaderLongComponent-0c6d29ca.js";import{A as h}from"./AnchorNavigationList-a2178fd4.js";import{S as b}from"./Scrollbar-0e530b6e.js";import{C as z}from"./CardMedia-5edc931d.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-5f436067.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./ZsdButton-e17fac36.js";import"./index.es24-26db34bb.js";import"./index.es34-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-d34f02b4.js";import"./AnchorNavigationTab-21bbbe9e.js";const f=u.createContext({}),N=()=>u.useContext(f),C=({cards:t,scrollToIdLink:a,linkLabel:n})=>{const{imageOrientation:l}=N(),o=t.map(r=>({...r,imageOrientation:l}));return e.jsxDEV("div",{id:a,className:"zep-flex-col zep-flex md:zep-gap-2.5 zep-gap-1.5",children:[e.jsxDEV("h4",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:18,columnNumber:7},globalThis),e.jsxDEV(b,{className:s("zep-w-full","zep-overflow-x-auto"),dataTestId:"cards-container",controlId:`cards-section-${a}`,scrollOrientation:"horizontal",children:e.jsxDEV("div",{className:s("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-w-fit"),children:o.map(r=>e.jsxDEV(z,{...r},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:27,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:25,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:19,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:17,columnNumber:5},globalThis)},c=({className:t,tabs:a,imageOrientation:n="horizontal",...l})=>{const o=a.map(({cards:r,...g})=>g);return e.jsxDEV(f.Provider,{value:{imageOrientation:n},children:e.jsxDEV("div",{className:s("zep-bg-greyscale-0","zep-flex","zep-flex-col","xl:zep-gap-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-items-start","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]","zep-w-full","zep-max-w-[1920px]"),children:[e.jsxDEV(x,{...l},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:65,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col xl:zep-gap-3.5 md:zep-gap-2.5 sm:zep-gap-2 zep-gap-1",children:[e.jsxDEV(h,{tabs:o},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:67,columnNumber:11},globalThis),e.jsxDEV("div",{className:"zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2",children:a.map(r=>e.jsxDEV(C,{...r},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:69,columnNumber:32},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:68,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:66,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:44,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:43,columnNumber:5},globalThis)};try{c.displayName="CardMediaPattern",c.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"CardsSectionProps[]"}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const v={imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"construction site",headline:"Testing",description:"Testing",onDownload:()=>null,linkText:"Click me"},y=t=>({linkLabel:"Tab Label",scrollToIdLink:`tab-${t}`,cards:Array.from({length:4}).map(()=>v)}),$={title:"Patterns/CardMediaPattern",component:c,tags:["autodocs"],argTypes:{}},i={args:{tabs:Array.from({length:3}).map((t,a)=>y(a)),headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 3
    }).map((_, index) => tab(index)),
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,$ as default};
