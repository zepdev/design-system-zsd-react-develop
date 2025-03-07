import{j as t}from"./jsx-dev-runtime-8ab8c10c.js";import{c as b}from"./clsx-0839fdbe.js";import{C as h}from"./ContactCard-9f2f2854.js";import{H as C}from"./HeaderLongComponent-a607587e.js";import{A as x}from"./AnchorNavigationList-77cd0226.js";import{L as N}from"./Layout-c161d79b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-f2b53c6d.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./ZsdButton-5393122c.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-ee2508ae.js";import"./AnchorNavigationTab-c7765aa4.js";const y=({contacts:e,scrollToIdLink:a,linkLabel:s})=>{const r=e.map(n=>({...n}));return t.jsxDEV("div",{"data-testid":"contact-cardpattern",id:a,className:"zep-flex-col",children:[t.jsxDEV("h4",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mt-3.5 zep-mb-2 sm:zep-mb-2.5",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:13,columnNumber:7},globalThis),t.jsxDEV("div",{className:b("zep-gap-1","sm:zep-gap-1.5","zep-grid","md:zep-inline-grid",{"zep-grid-cols-1":!0,"md:zep-grid-cols-2":!0,"xl:zep-grid-cols-3":!0}),children:r.map(n=>t.jsxDEV(h,{className:"zep-contents zep-gap-1 ram",...n},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:28,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:14,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:12,columnNumber:5},globalThis)},l=({tabs:e,...a})=>{const s=e.map(({contacts:r,...n})=>n);return t.jsxDEV(N,{children:[t.jsxDEV(C,{...a},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:39,columnNumber:7},globalThis),t.jsxDEV("div",{className:"zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 xl:zep-mt-5",children:[t.jsxDEV(x,{tabs:s},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:41,columnNumber:9},globalThis),t.jsxDEV("div",{className:"zep-flex zep-flex-col",children:e.map(r=>t.jsxDEV(y,{...r},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:44,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:42,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:40,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-card-pattern/ContactCardPattern.tsx",lineNumber:38,columnNumber:5},globalThis)};try{l.displayName="ContactCardPattern",l.__docgenInfo={description:"",displayName:"ContactCardPattern",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ContactCardSectionProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}}}}}catch{}const f={fullName:"Michael Pfrieger",image:"https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png",role:"Business Unit Leiter Polyolefin Plants",phone:"+49 7541 202 1861",fax:"+49 7541 202 1861",email:"michaell.pfrieger@zeppelin.com",address:"Zeppelin Systems GmbH Musteradresse Rödermark",languages:["Deutsch","English"]},k=e=>({linkLabel:`Tab Label-${e}`,scrollToIdLink:`tab-${e}`,contacts:Array.from({length:4}).map(()=>f)}),v=e=>({linkLabel:`Tab Label-${e}`,scrollToIdLink:`tab-${e}`,contacts:Array.from({length:6}).map(()=>f)}),R={title:"Patterns/ContactCardPattern",component:l,tags:["autodocs"],argTypes:{}},i={args:{tabs:Array.from({length:3}).map((e,a)=>k(a)),headline:"Headline",tagline:"Tagline",type:"link",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},o={args:{tabs:Array.from({length:2}).map((e,a)=>v(a)),headline:"Headline",tagline:"Tagline",type:"link",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 3
    }).map((_, index) => tabDefault(index)),
    headline: 'Headline',
    tagline: 'Tagline',
    type: 'link',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as ContactCardPatternProps
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 2
    }).map((_, index) => tabSix(index)),
    headline: 'Headline',
    tagline: 'Tagline',
    type: 'link',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as ContactCardPatternProps
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const G=["Default","With6Cards"];export{i as Default,o as With6Cards,G as __namedExportsOrder,R as default};
