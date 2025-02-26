import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as r}from"./clsx-0839fdbe.js";import{g as T}from"./useMaxChar150-a3dc5361.js";import{Z as a,B as b}from"./ZsdButton-46c67cfd.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-cfbbaaf2.js";import"./jsx-runtime-6f6342d7.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const u=({imageSrc:o,imageAlt:L,headline:V,subline:j,description:c,primaryButtonLabel:l,secondaryButtonLabel:m,onClickPrimaryButton:q,onClickSecondaryButton:H,backgroundVariant:i="gradient"})=>{var p,g;const B=(()=>{switch(i){case"indigo":return"zep-bg-primary-default zep-text-typography-light-100";case"gradient":return"zep-bg-zsd-gradient zep-text-typography-dark-100";default:return""}})(),C=i==="indigo"?"zep-text-typography-light-100":"!zep-text-indigo-700",d={indigo:{primary:a.PrimaryLight,secondary:a.SecondaryLight},gradient:{primary:a.PrimaryDark,secondary:a.SecondaryDark}},k=((p=d[i])==null?void 0:p.primary)||a.PrimaryDark,D=((g=d[i])==null?void 0:g.secondary)||a.SecondaryDark;return e.jsxDEV("div",{style:{alignItems:"stretch"},"data-testid":"zep-small-hero",className:r(B,"md:zep-flex","zep-relative","zep-flex-col","md:zep-flex-row"),children:[o&&e.jsxDEV("div",{className:"md:zep-w-[44%] zep-w-full zep-h-auto zep-flex zep-order-1 md:zep-order-2",children:e.jsxDEV("img",{src:o,alt:L,className:"zep-aspect-[16/9] zep-h-auto zep-w-full zep-object-fill"},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:59,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:58,columnNumber:9},globalThis),e.jsxDEV("div",{className:r("zep-p-1.5","sm:zep-p-2","xl:zep-p-6","md:zep-w-[56%]","zep-justify-center","zep-flex","zep-flex-col","zep-order-2 md:zep-order-1"),children:[e.jsxDEV("h2",{className:r("zep-typography-headlineXL-fluid-cqi",C),children:V},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:75,columnNumber:9},globalThis),e.jsxDEV("h3",{className:r("zep-typography-headlineXL-fluid-cqi","zep-mb-0.25","xl:zep-mb-0.75"),children:j},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:76,columnNumber:9},globalThis),c&&e.jsxDEV("p",{className:"zep-mb-1.5",children:T(c)},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:77,columnNumber:25},globalThis),e.jsxDEV("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:l&&e.jsxDEV("div",{className:"zep-flex zep-gap-1",children:[e.jsxDEV(b,{label:l,title:l,onClick:q,variant:k,className:"sm:zep-max-w-max"},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:81,columnNumber:15},globalThis),m&&e.jsxDEV(b,{label:m,title:m,onClick:H,variant:D,className:"sm:zep-max-w-max"},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:89,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:80,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:78,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:63,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/small-hero/SmallHero.tsx",lineNumber:46,columnNumber:5},globalThis)};try{u.displayName="SmallHero",u.__docgenInfo={description:"",displayName:"SmallHero",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primaryButtonLabel:{defaultValue:null,description:"",name:"primaryButtonLabel",required:!1,type:{name:"string"}},secondaryButtonLabel:{defaultValue:null,description:"",name:"secondaryButtonLabel",required:!1,type:{name:"string"}},onClickPrimaryButton:{defaultValue:null,description:"",name:"onClickPrimaryButton",required:!1,type:{name:"(() => void)"}},onClickSecondaryButton:{defaultValue:null,description:"",name:"onClickSecondaryButton",required:!1,type:{name:"(() => void)"}},backgroundVariant:{defaultValue:{value:"gradient"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"indigo"'},{value:'"gradient"'}]}}}}}catch{}const K={title:"Components/SmallHero",component:u,tags:["autodocs"],argTypes:{}},n={args:{backgroundVariant:"gradient",headline:"Tiernahrung",subline:"Herstellung auf spitzenniveau",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",imageSrc:"./public/assets/newhero-small.png",imageAlt:"image alt",primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary"}},s={args:{headline:"Tiernahrung",subline:"Herstellung auf spitzenniveau",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",backgroundImage:"../public/assets/hero-small.png",primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary"}},t={args:{backgroundVariant:"indigo",headline:"Tiernahrung",subline:"Herstellung auf spitzenniveau",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary"}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'gradient',
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    imageSrc: './public/assets/newhero-small.png',
    imageAlt: 'image alt',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary'
  } as SmallHeroProps
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,N,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    backgroundImage: '../public/assets/hero-small.png',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary'
  } as SmallHeroProps
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var S,v,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'indigo',
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary'
  } as SmallHeroProps
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const M=["Default","GradientWithoutImage","PlainFullBackground"];export{n as Default,s as GradientWithoutImage,t as PlainFullBackground,M as __namedExportsOrder,K as default};
