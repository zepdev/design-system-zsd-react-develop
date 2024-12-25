import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{h as s}from"./index.es13-f43b3659.js";import{f as m}from"./index.es24-ba02af2f.js";import{c as h}from"./index-ff2c9236.js";import{t as g}from"./tw-merge-1166cefb.js";var a=(e=>(e.PrimaryDark="primary-dark",e.SecondaryDark="secondary-dark",e.SecondaryLight="secondary-light",e.PrimaryLight="primary-light",e))(a||{});const f={[a.PrimaryDark]:["zep-bg-primary-default","zep-text-typography-light-100","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-typography-light-100","enabled:active:zep-bg-primary-active","enabled:active:zep-text-typography-light-100","disabled:zep-opacity-disabled"],[a.SecondaryDark]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-typography-light-100","enabled:active:zep-bg-primary-active","enabled:active:zep-text-typography-light-100","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[a.PrimaryLight]:["zep-bg-typography-neutral-light-default","zep-text-typography-dark-100","enabled:hover:zep-bg-typography-neutral-light-hover","enabled:hover:zep-text-typography-dark-100","enabled:active:zep-bg-typography-neutral-light-active","enabled:active:zep-text-typography-dark-100","disabled:zep-opacity-disabled"],[a.SecondaryLight]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-typography-neutral-light-default","zep-text-typography-neutral-light-default","enabled:hover:zep-text-typography-dark-100","enabled:hover:zep-ring-0","enabled:hover:zep-bg-neutral-light-default","enabled:active:zep-ring-0","enabled:active:zep-bg-typography-neutral-light-active","enabled:active:zep-text-typography-dark-100","disabled:zep-bg-opacity-disabled"]},r=h(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:f},defaultVariants:{variant:a.PrimaryDark}}),n=({className:e,variant:u,isLoading:o=!1,label:t,children:v,icon:i,iconPosition:p="left",...d})=>{const c=!t||t===""?r({variant:u}).replace("zep-px-1","zep-px-0.75"):r({variant:u});return l.jsxDEV("button",{className:g(c,e,"zep-w-full sm:zep-w-inherit"),...d,children:[o&&l.jsxDEV("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"},void 0,!1,{fileName:"/home/circleci/project/src/components/zsd-button/ZsdButton.tsx",lineNumber:96,columnNumber:9},globalThis),l.jsxDEV(m,{gap:"0.5",className:p==="left"?"zep-flex-row-reverse":"",children:[t??v,i&&l.jsxDEV(s,{name:i},void 0,!1,{fileName:"/home/circleci/project/src/components/zsd-button/ZsdButton.tsx",lineNumber:102,columnNumber:18},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/zsd-button/ZsdButton.tsx",lineNumber:100,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/zsd-button/ZsdButton.tsx",lineNumber:94,columnNumber:5},globalThis)};try{r.displayName="zsdButton",r.__docgenInfo={description:"",displayName:"zsdButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary-dark"'},{value:'"secondary-dark"'},{value:'"secondary-light"'},{value:'"primary-light"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"phone"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{n as B,a as Z,f as z};
