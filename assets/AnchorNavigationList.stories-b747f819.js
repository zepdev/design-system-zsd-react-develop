import{j as t}from"./jsx-dev-runtime-8ab8c10c.js";import{r as g}from"./index-b1e7e93e.js";import{A as k}from"./AnchorNavigationTab-590eb69f.js";import{B as L,Z as h}from"./ZsdButton-02e969e9.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es13-55dfe41f.js";import"./index.es24-9329eeb1.js";import"./index.es29-7715336a.js";import"./index-f96983da.js";import"./tw-merge-1166cefb.js";const o=({tabs:e,handleButtonClick:r,buttonText:u})=>{const[b,T]=g.useState(null);return t.jsxDEV("div",{className:"zep-flex zep-flex-col sm:zep-flex-row zep-justify-between zep-w-full sm:zep-border-b-1 zep-border-greyscale-400","data-testid":"zep-anchor-navigation-list",children:[t.jsxDEV("div",{className:"zep-flex zep-items-center zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-overflow-x-auto zep-w-full zep-border-b-1 sm:zep-border-none zep-border-greyscale-400",children:e==null?void 0:e.map(l=>t.jsxDEV(k,{setSelectedTab:()=>T(l),activeTab:b,tab:l},void 0,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:22,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:18,columnNumber:7},globalThis),r&&t.jsxDEV(L,{className:"zep-w-full sm:zep-max-w-max zep-mt-0.25 sm:zep-mt-[0px]",onClick:r,label:u,variant:h.PrimaryDark},void 0,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:26,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:14,columnNumber:5},globalThis)};try{o.displayName="AnchorNavigationList",o.__docgenInfo={description:"",displayName:"AnchorNavigationList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},handleButtonClick:{defaultValue:null,description:"",name:"handleButtonClick",required:!1,type:{name:"(() => void)"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Patterns/AnchorNavigationList",component:o,tags:["autodocs"],argTypes:{}},n={args:{handleButtonClick:()=>null,buttonText:"Direkt anfragen",tabs:[{scrollToIdLink:"test",linkLabel:"Tab"}]}},a={args:{handleButtonClick:()=>null,buttonText:"Direkt anfragen",tabs:[{scrollToIdLink:"test",linkLabel:"Tab 1"},{scrollToIdLink:"test",linkLabel:"Tab 2 "},{scrollToIdLink:"test",linkLabel:"Tab 3 "},{scrollToIdLink:"test",linkLabel:"Tab 4"},{scrollToIdLink:"test",linkLabel:"Tab 5"},{scrollToIdLink:"test",linkLabel:"Tab 6"}]}};var i,s,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    handleButtonClick: () => null,
    buttonText: 'Direkt anfragen',
    tabs: [{
      scrollToIdLink: 'test',
      linkLabel: 'Tab'
    }]
  } as AnchorNavigationListProps
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    handleButtonClick: () => null,
    buttonText: 'Direkt anfragen',
    tabs: [{
      scrollToIdLink: 'test',
      linkLabel: 'Tab 1'
    }, {
      scrollToIdLink: 'test',
      linkLabel: 'Tab 2 '
    }, {
      scrollToIdLink: 'test',
      linkLabel: 'Tab 3 '
    }, {
      scrollToIdLink: 'test',
      linkLabel: 'Tab 4'
    }, {
      scrollToIdLink: 'test',
      linkLabel: 'Tab 5'
    }, {
      scrollToIdLink: 'test',
      linkLabel: 'Tab 6'
    }]
  } as AnchorNavigationListProps
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const V=["Default","With2Items"];export{n as Default,a as With2Items,V as __namedExportsOrder,B as default};
