import{j as t}from"./jsx-dev-runtime-8ab8c10c.js";import{B as p}from"./index.es20-6253c2ed.js";import{r as g}from"./index-b1e7e93e.js";import{H as f}from"./HeaderLongComponent-91819aa3.js";import{C as v}from"./CardEvent-86d7135d.js";import{L as y}from"./Layout-658f3258.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es4-634758bf.js";import"./index.es34-79e31a69.js";import"./index.es13-cfbbaaf2.js";import"./index.es24-26db34bb.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-5f436067.js";import"./clsx-0839fdbe.js";import"./ZsdButton-94c3c502.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-d34f02b4.js";const r=({cards:e,...m})=>{const[a,c]=g.useState(1),i=(a-1)*10,u=i+10;return t.jsxDEV(y,{className:"zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5",testId:"zep-card-events",children:[t.jsxDEV(f,{...m},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:19,columnNumber:7},globalThis),t.jsxDEV("div",{className:"zep-flex zep-flex-col md:zep-gap-2 zep-gap-1.5",children:e.slice(i,u).map(d=>t.jsxDEV(v,{...d},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:22,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:20,columnNumber:7},globalThis),t.jsxDEV(p,{currentPage:a,totalElements:e.length,setCurrentPage:c,itemsPerPage:10},void 0,!1,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-events/CardEvents.tsx",lineNumber:15,columnNumber:5},globalThis)};try{r.displayName="CardEvents",r.__docgenInfo={description:"",displayName:"CardEvents",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardEventProps[]"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"none"'},{value:'"link"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const x={dates:{startDay:5,endDay:8,month:"März",year:2024},location:{city:"Rom",country:"Italien"},headline:"RMI Analytics’ World Malt & Beer Conference",description:"Internationale Konferenz für Gerste, Malz und Bier mit Zeppelin Systems als Silber...",imageSrc:"https://www.brewer-world.com/wp-content/uploads/2019/08/RMI.jpg",imageAlt:"",linkUrl:"",linkLabel:"Weitere Informationen",externalLinkUrl:"",externalLinkLabel:"Zur Messe Website"},S={title:"Patterns/CardEvents",component:r,tags:["autodocs"],argTypes:{}},n={args:{cards:Array.from({length:32}).map(()=>x),total:32,headline:"Headline",tagline:"Tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",linkText:"Standalone Link",type:"link",currentPage:1,setCurrentPage:e=>console.log(e)}};var l,s,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cards: Array.from({
      length: 32
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
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,S as default};
