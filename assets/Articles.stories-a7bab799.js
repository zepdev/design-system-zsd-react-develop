import{A as v,z as r}from"./ArticleCard-08810f15.js";import{j as n}from"./jsx-dev-runtime-8ab8c10c.js";import{B as z}from"./index.es20-ff467198.js";import{r as H}from"./index-b1e7e93e.js";import{L as N}from"./Layout-fc099938.js";import{H as E}from"./HeaderLongComponent-34764d88.js";import"./index.es16-6e75dee6.js";import"./index.es13-f43b3659.js";import"./index.es31-95f1013f.js";import"./index.es4-d051cf74.js";import"./index.es24-ba02af2f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ZsdButton-4ec82ec4.js";import"./tw-merge-71974dbd.js";import"./ZsdLink-fce436d5.js";const a=({articles:e,headline:t,tagline:x,description:b,linkHref:w,linkText:T})=>{const[m,L]=H.useState(1),l=(m-1)*10,I=l+10;return n.jsxDEV(N,{testId:"zep-articles-section",children:[n.jsxDEV(E,{type:"link",headline:t,tagline:x,description:b,linkText:T,linkHref:w},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:23,columnNumber:7},globalThis),n.jsxDEV("div",{className:"zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 lg:zep-mt-5 zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2",children:e==null?void 0:e.slice(l,I).map(A=>n.jsxDEV(v,{article:A},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:33,columnNumber:65},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:32,columnNumber:7},globalThis),e.length>10&&n.jsxDEV(z,{currentPage:m,totalElements:e.length,setCurrentPage:L,itemsPerPage:10,lastPage:Math.ceil(e.length/10),maxPageLength:Math.ceil(e.length/10)},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:36,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:22,columnNumber:5},globalThis)};try{a.displayName="Articles",a.__docgenInfo={description:"",displayName:"Articles",props:{articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"none"'},{value:'"link"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const G={title:"Patterns/Articles",component:a,tags:["autodocs"],argTypes:{}},i={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:[{title:"Technische Kompetenz im Food Bereich",image:r,chipText:"CHEMIE | 18.01.2024",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}]}},s={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:11},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:r,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}},o={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:40},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:r,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}};var p,d,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: [{
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: 'CHEMIE | 18.01.2024',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }]
  } as ArticlesProps
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,g,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: Array.from({
      length: 11
    }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(),
      // chipText values: "1", "2", ..., "40"
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }))
  } as ArticlesProps
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,k,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: Array.from({
      length: 40
    }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(),
      // chipText values: "1", "2", ..., "40"
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }))
  } as ArticlesProps
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const J=["Default","Items11","MultipleItems"];export{i as Default,s as Items11,o as MultipleItems,J as __namedExportsOrder,G as default};
