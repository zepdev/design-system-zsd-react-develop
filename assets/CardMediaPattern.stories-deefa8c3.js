import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as t}from"./clsx-0839fdbe.js";import{G as S}from"./global-variants-0f433d85.js";import{H as P}from"./HeaderLongComponent-6c5c8110.js";import{C as j,f as l}from"./CardMedia-34b01170.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-1f646d4e.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";import"./ZpsButton-c50e010a.js";import"./index.es24-9329eeb1.js";import"./index-f96983da.js";import"./tw-merge-1166cefb.js";const d=({className:i,cards:v,variant:m=S.Zps,imageOrientation:M="horizontal",...T})=>{const y=v.map(c=>({...c,imageOrientation:M}));return e.jsxDEV("div",{className:t("zep-bg-background-medium","zep-flex","zep-flex-col","xl:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-items-start","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]","zep-w-full","zep-max-w-[1920px]"),children:[e.jsxDEV(P,{type:"link",...T,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:38,columnNumber:7},globalThis),e.jsxDEV("div",{"data-testid":"cards-container",className:t("zep-w-full","zep-overflow-x-auto"),children:e.jsxDEV("div",{className:t("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-w-fit"),children:y.map(c=>e.jsxDEV(j,{...c,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:42,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:40,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:18,columnNumber:5},globalThis)};try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}}}}}catch{}const a={imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},W={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},r={decorators:[i=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:31,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:30,columnNumber:7},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},n={decorators:[i=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:50,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:49,columnNumber:7},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={decorators:[i=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:70,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:69,columnNumber:7},globalThis)],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},o={decorators:[i=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:89,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:88,columnNumber:7},globalThis)],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,x,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var w,N,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const Y=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{s as CardMedia3Cards,o as CardMedia3PlusCards,n as CardMediaVertical,r as Default,Y as __namedExportsOrder,W as default};
