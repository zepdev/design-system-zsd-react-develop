import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{f as V}from"./index.es24-9329eeb1.js";import{c as j}from"./index-f96983da.js";import{c as o}from"./clsx-0839fdbe.js";import{r as y}from"./index-b1e7e93e.js";import{B as g,Z as T}from"./ZsdButton-174bca3c.js";import{t as M}from"./tw-merge-1166cefb.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";import"./_commonjsHelpers-de833af9.js";var a=(i=>(i.Zps="ZPS",i.Cat="CAT",i))(a||{});const D=y.createContext({imageAlignment:"left",variant:a.Zps,headline:"",tagline:"",description:""}),c=()=>y.useContext(D),t=({imageAlignment:i="left",children:l,variant:m=a.Zps,headline:s="",tagline:r="",description:n=""})=>e.jsxDEV(D.Provider,{value:{imageAlignment:i,variant:m,headline:s,tagline:r,description:n},children:e.jsxDEV("div",{className:"zep-grid-items zep-items-center zep-justify-center zep-min-screen",children:e.jsxDEV("div",{className:o("zep-container","zep-mx-auto","zep-relative","zep-grid","zep-grid-cols-1","md:zep-gap-1.5","lg:zep-gap-2","md:zep-grid-cols-16"),"data-testid":"zep-mediaText-simple",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:37,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:36,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:35,columnNumber:5},globalThis),S=({src:i,alt:l,aspectRatio:m="4:3"})=>{const{imageAlignment:s}=c(),r=m==="4:3"?"zep-pb-[calc(3_*_100%_/_4)]":"zep-pb-[calc(4_*_100%_/_3)]",n=s==="left"?"md:zep-order-1":"",x=s==="left"?"md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10":"md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15";return e.jsxDEV("div",{"data-testid":"zep-mediaText-image",className:o("zep-col-start-5","zep-col-end-13","zep-justify-center","zep-row-start-1","zep-row-end-1",n,x),children:e.jsxDEV("div",{className:o("zep-relative",r),children:e.jsxDEV("img",{alt:l,src:i,className:o("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:79,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:78,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:66,columnNumber:5},globalThis)},E=({children:i})=>{const{imageAlignment:l,variant:m}=c(),s=l==="left"?"":"md:zep-order-1",r=l==="left"?"zep-col-start-6 zep-col-end-12 md:zep-col-start-8 md:zep-col-end-16 xl:zep-col-start-9 xl:zep-col-end-15":"zep-col-start-5 zep-col-end-13  md:zep-col-start-2 md:zep-col-end-10 xl:zep-col-start-3 xl:zep-col-end-9",n={[a.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[a.Cat]:["zep-bg-neutral-dark-default"]},x=j([` 
        zep-mt-[63%]
        md:zep-w-auto
        zep-mx-auto
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-h-[max-content]
        zep-row-start-1
        zep-row-end-1
        zep-z-10
        zep-p-1
        sm:zep-p-2
        md:zep-p-2
        lg:zep-p-5
        xl:zep-p-5
        zep-max-w-fit
        md:zep-max-w-[499px]
        lg:zep-max-w-[700px]
        ${s},
        ${r}`],{variants:{variant:n},defaultVariants:{variant:a.Zps}});return e.jsxDEV("div",{className:M(x({variant:m})),"data-testid":"zep-mediaText-body",children:e.jsxDEV("div",{children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:136,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:135,columnNumber:5},globalThis)},q=()=>{const{tagline:i,variant:l}=c(),m={[a.Zps]:["zep-text-typography-brand-steel"],[a.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},s=j([`zep-typography-taglineMD
      zep-mb-0.5
      `],{variants:{variant:m},defaultVariants:{variant:a.Zps}});return e.jsxDEV("p",{"data-testid":"zep-MediaText-tagline",className:M(s({variant:l}),"zep-break-words"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:166,columnNumber:5},globalThis)},L=()=>{const{headline:i}=c();return e.jsxDEV("h4",{"data-testid":"zep-MediaText-headline",className:o("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-mb-1.5","xl:zep-mb-2","zep-text-left","zep-break-words"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:175,columnNumber:5},globalThis)},B=()=>{const{description:i}=c();return e.jsxDEV("p",{"data-testid":"zep-MediaText-description",className:"zep-text-typography-light-100 zep-typography-bodyText zep-mb-1.5 xl:zep-mb-2 zep-break-words",children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:195,columnNumber:5},globalThis)},_=({labelPrimary:i,labelSecondary:l,onClickPrimary:m,onClickSecondary:s})=>e.jsxDEV("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxDEV(V,{gap:"1.5",className:o("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2 lg:zep-gap-1.5"),direction:"column",children:[e.jsxDEV(g,{onClick:m,label:i,variant:T.PrimaryDark},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:212,columnNumber:9},globalThis),e.jsxDEV(g,{label:l,onClick:s,variant:T.SecondaryDark},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:213,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:207,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/MediaText.tsx",lineNumber:206,columnNumber:5},globalThis);t.Image=S;t.Body=E;t.Tagline=q;t.Headline=L;t.Description=B;t.Button=_;try{t.displayName="MediaText",t.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"MediaTextVariant.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const F={title:"Components/MediaText",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(a)}}}},u={src:"./assets/image-4_3.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},p={args:{imageAlignment:"left",variant:a.Zps,headline:"Headline",tagline:"TAGLINE",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t.Image,{src:u.src,alt:u.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:36,columnNumber:9},globalThis),e.jsxDEV(t.Body,{children:[e.jsxDEV(t.Tagline,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:38,columnNumber:11},globalThis),e.jsxDEV(t.Headline,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:39,columnNumber:11},globalThis),e.jsxDEV(t.Description,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:40,columnNumber:11},globalThis),e.jsxDEV(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:41,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:37,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:35,columnNumber:7},globalThis)}},d={args:{imageAlignment:"right",variant:a.Zps,headline:"Headline",tagline:"TAGLINE",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t.Image,{src:u.src,alt:u.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:58,columnNumber:9},globalThis),e.jsxDEV(t.Body,{children:[e.jsxDEV(t.Tagline,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:60,columnNumber:11},globalThis),e.jsxDEV(t.Headline,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:61,columnNumber:11},globalThis),e.jsxDEV(t.Description,{},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:62,columnNumber:11},globalThis),e.jsxDEV(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"},void 0,!1,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:63,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:59,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/mediaText-simple/mediaText.stories.tsx",lineNumber:57,columnNumber:7},globalThis)}};var f,b,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'left',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(h=(b=p.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var N,z,v;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'right',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(v=(z=d.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const O=["Default","ImageRight"];export{p as Default,d as ImageRight,O as __namedExportsOrder,F as default};
