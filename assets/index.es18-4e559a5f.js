import{j as o}from"./jsx-runtime-6f6342d7.js";import{i as n}from"./index.es31-95f1013f.js";import{r as l}from"./index-b1e7e93e.js";const p=l.createContext({type:"bullet"}),c=({type:t="bullet",children:r,className:e})=>{const s=t==="bullet"?"ul":"ol";return o.jsx(p.Provider,{value:{type:t},children:o.jsx(s,{className:n("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",e),children:r})})},i=({children:t,className:r})=>{const{type:e}=l.useContext(p);return o.jsx("li",{className:n("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':e==="bullet"},{"before:[content:counter(section,lower-alpha)]":e==="alphabetical"},{'before:[content:counter(section)"."]':e==="numeric"},r),children:t})};c.Item=i;export{c as i};
