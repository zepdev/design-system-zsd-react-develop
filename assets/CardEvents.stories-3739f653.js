import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{r as p}from"./index-b1e7e93e.js";import{L as g}from"./index.es20-b29632dd.js";import{H as f}from"./HeaderLongComponent-15926d8f.js";import{C as v}from"./CardEvent-6b6e0409.js";import{L as y}from"./Layout-fc099938.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-f43b3659.js";import"./index.es31-95f1013f.js";import"./index.es24-ba02af2f.js";import"./index.es16-6e75dee6.js";import"./clsx-0839fdbe.js";import"./ZsdButton-dbd316e7.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-fce436d5.js";const a=({cards:n,total:t,currentPage:m,setCurrentPage:u,...c})=>{const i=p.useMemo(()=>Number((t/10).toFixed()),[t]);return e.jsxDEV(y,{className:"zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5",children:[e.jsxDEV(f,{...c},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:20,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-flex zep-flex-col md:zep-gap-2 zep-gap-1.5",children:n.map(d=>e.jsxDEV(v,{...d},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:22,columnNumber:30},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:21,columnNumber:7},globalThis),e.jsxDEV(g,{currentPage:m,lastPage:i,itemsPerPage:10,setCurrentPage:u,totalElements:t,maxPageLength:i},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:24,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:19,columnNumber:5},globalThis)};try{a.displayName="CardEvents",a.__docgenInfo={description:"",displayName:"CardEvents",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardEventProps[]"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"none"'},{value:'"link"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const b={dates:{startDay:5,endDay:8,month:"März",year:2024},location:{city:"Rom",country:"Italien"},headline:"RMI Analytics’ World Malt & Beer Conference",description:"Internationale Konferenz für Gerste, Malz und Bier mit Zeppelin Systems als Silber...",imageSrc:"https://www.brewer-world.com/wp-content/uploads/2019/08/RMI.jpg",imageAlt:"",linkUrl:"",linkLabel:"Weitere Informationen",externalLinkUrl:"",externalLinkLabel:"Zur Messe Website"},H={title:"Patterns/CardEvents",component:a,tags:["autodocs"],argTypes:{}},r={args:{cards:Array.from({length:10}).map(()=>b),total:32,headline:"Headline",tagline:"Tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",linkText:"Standalone Link",type:"link",currentPage:1,setCurrentPage:n=>console.log(n)}};var l,s,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cards: Array.from({
      length: 10
    }).map(() => card),
    total: 32,
    headline: 'Headline',
    tagline: 'Tagline',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    linkText: 'Standalone Link',
    type: 'link',
    currentPage: 1,
    setCurrentPage: (page: number) => console.log(page)
  } as CardEventsProps
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,H as default};