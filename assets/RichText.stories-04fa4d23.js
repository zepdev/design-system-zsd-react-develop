import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{b as A,l as F,e as U}from"./index.es16-6e75dee6.js";import{j as b}from"./index.es13-f43b3659.js";import{i as D}from"./index.es31-95f1013f.js";import{r as V}from"./index-b1e7e93e.js";import{c as h}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";const C=V.createContext({type:"bullet"}),f=({type:t="bullet",children:l,className:r})=>{const i=t==="bullet"?"ul":"ol";return b.jsx(C.Provider,{value:{type:t},children:b.jsx(i,{className:D("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",r),children:l})})},H=({children:t,className:l})=>{const{type:r}=V.useContext(C);return b.jsx("li",{className:D("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':r==="bullet"},{"before:[content:counter(section,lower-alpha)]":r==="alphabetical"},{'before:[content:counter(section)"."]':r==="numeric"},l),children:t})};f.Item=H;const K=({level:t,children:l})=>{const r=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsxDEV("h3",{className:h(r),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:16,columnNumber:5},globalThis):e.jsxDEV("h4",{className:h(r),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:18,columnNumber:5},globalThis)},G=({children:t})=>e.jsxDEV("p",{className:"zep-mb-2",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:24,columnNumber:3},globalThis),J=({ordered:t,items:l})=>e.jsxDEV(f,{className:"zep-mb-2",type:t?"numeric":"bullet",children:l.map((r,i)=>e.jsxDEV(f.Item,{children:r},i,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:31,columnNumber:7},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:29,columnNumber:3},globalThis),N=({content:t,children:l,textColor:r})=>{const i=r==="white"?"!zep-text-typography-light-100":r==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",S=(m,c,_)=>{const{type:g,text:w,inlineStyleRanges:L=[],entityRanges:k=[],items:B=[],ordered:M}=m,T=(s,o,d,n="style")=>{let a=[],p=0;return o.forEach(({offset:u,length:j,style:$,key:R})=>{u>p&&a.push({text:s.slice(p,u),style:null,url:null});const q=s.slice(u,u+j),I=n==="style"&&$||null,O=n==="entity"&&R!==void 0&&d?d[R].data.url:null;a.push({text:q,style:I,url:O}),p=u+j}),p<s.length&&a.push({text:s.slice(p),style:null,url:null}),a},P=T(w||"",k,_,"entity").flatMap((s,o)=>s.url?e.jsxDEV(e.Fragment,{children:e.jsxDEV(A,{href:s.url,as:"span",hasIcon:!1,label:s.text,mode:F.Inline,target:U.Blank},o,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:74,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:73,columnNumber:11},globalThis):T(s.text,L,void 0,"style").map((n,a)=>n.style==="BOLD"?e.jsxDEV("span",{className:"zep-typography-bodyStrong",children:n.text},o+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:90,columnNumber:13},globalThis):n.style==="ITALIC"?e.jsxDEV("span",{className:"zep-italic",children:n.text},o+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:96,columnNumber:13},globalThis):e.jsxDEV("span",{children:n.text},o+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:101,columnNumber:16},globalThis))),y=e.jsxDEV("span",{className:h(i),children:P.map((s,o)=>e.jsxDEV("span",{children:s},`${c}-${o}`,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:109,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:107,columnNumber:7},globalThis);switch(g){case"header-three":case"header-four":return e.jsxDEV(K,{className:h(i,"zep-font-500"),level:g,children:y},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:118,columnNumber:11},globalThis);case"unstyled":return e.jsxDEV(G,{className:i,children:y},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:124,columnNumber:11},globalThis);case"list":return e.jsxDEV(J,{className:i,ordered:!!M,items:B},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:129,columnNumber:16},globalThis);default:return null}};return e.jsxDEV("div",{className:h(i,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((m,c)=>S(m,c,t.entityMap)),t.images.map((m,c)=>e.jsxDEV("div",{children:e.jsxDEV("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:m.src,alt:m.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:143,columnNumber:11},globalThis)},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:142,columnNumber:9},globalThis)),l]},void 0,!0,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:136,columnNumber:5},globalThis)};try{N.displayName="RichText",N.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"indigo"'},{value:'"black"'}]}}}}}catch{}const le={title:"Components/RichText",component:N,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},Q={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}],items:[],ordered:!1},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[]},x={args:{textColor:"indigo",content:Q,children:e.jsxDEV("p",{className:"zep-mb-1",children:"This is Custom"},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.stories.tsx",lineNumber:104,columnNumber:15},globalThis)}};var z,E,v;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps
}`,...(v=(E=x.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const ie=["Default"];export{x as Default,ie as __namedExportsOrder,le as default};
