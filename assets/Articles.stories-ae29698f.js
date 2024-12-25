import{A as Te,z as W}from"./ArticleCard-08810f15.js";import{j as L}from"./jsx-dev-runtime-8ab8c10c.js";import{j as b,h as je}from"./index.es13-f43b3659.js";import{i as M}from"./index.es31-95f1013f.js";import{j as Ie,f as Ce}from"./index.es24-ba02af2f.js";import{r as Pe}from"./index-b1e7e93e.js";import{L as Le}from"./Layout-fc099938.js";import{H as Ae}from"./HeaderLongComponent-15926d8f.js";import"./index.es16-6e75dee6.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ZsdButton-dbd316e7.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-fce436d5.js";var y=(e=>(e.Primary="primary",e.Secondary="secondary",e.Tertiary="tertiary",e.DarkPrimary="dark-primary",e.DarkSecondary="dark-secondary",e.DarkTertiary="dark-tertiary",e.LightPrimary="light-primary",e.LightSecondary="light-secondary",e.LightTertiary="light-tertiary",e))(y||{}),J="-";function $e(e){var t=Se(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,a=r===void 0?{}:r;function i(s){var l=s.split(J);return l[0]===""&&l.length!==1&&l.shift(),ve(l,t)||Me(s)}function o(s,l){var c=n[s]||[];return l&&a[s]?[].concat(c,a[s]):c}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function ve(e,t){var o;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),a=r?ve(e.slice(1),r):void 0;if(a)return a;if(t.validators.length!==0){var i=e.join(J);return(o=t.validators.find(function(s){var l=s.validator;return l(i)}))==null?void 0:o.classGroupId}}var ae=/^\[(.+)\]$/;function Me(e){if(ae.test(e)){var t=ae.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function Se(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},a=Ge(Object.entries(e.classGroups),n);return a.forEach(function(i){var o=i[0],s=i[1];U(s,r,o,t)}),r}function U(e,t,n,r){e.forEach(function(a){if(typeof a=="string"){var i=a===""?t:se(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Ee(a)){U(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(function(o){var s=o[0],l=o[1];U(l,se(t,s),n,r)})})}function se(e,t){var n=e;return t.split(J).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Ee(e){return e.isThemeGetter}function Ge(e,t){return t?e.map(function(n){var r=n[0],a=n[1],i=a.map(function(o){return typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(function(s){var l=s[0],c=s[1];return[t+l,c]})):o});return[r,i]}):e}function He(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function a(i,o){n.set(i,o),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(i){var o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return a(i,o),o},set:function(i,o){n.has(i)?n.set(i,o):a(i,o)}}}var we="!";function qe(e){var t=e.separator||":",n=t.length===1,r=t[0],a=t.length;return function(i){for(var o=[],s=0,l=0,c,p=0;p<i.length;p++){var g=i[p];if(s===0){if(g===r&&(n||i.slice(p,p+a)===t)){o.push(i.slice(l,p)),l=p+a;continue}if(g==="/"){c=p;continue}}g==="["?s++:g==="]"&&s--}var f=o.length===0?i:i.substring(l),x=f.startsWith(we),w=x?f.substring(1):f,h=c&&c>l?c-l:void 0;return{modifiers:o,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:h}}}function De(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var a=r[0]==="[";a?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function _e(e){return{cache:He(e.cacheSize),splitModifiers:qe(e),...$e(e)}}var Ve=/\s+/;function Re(e,t){var n=t.splitModifiers,r=t.getClassGroupId,a=t.getConflictingClassGroupIds,i=new Set;return e.trim().split(Ve).map(function(o){var s=n(o),l=s.modifiers,c=s.hasImportantModifier,p=s.baseClassName,g=s.maybePostfixModifierPosition,f=r(g?p.substring(0,g):p),x=!!g;if(!f){if(!g)return{isTailwindClass:!1,originalClassName:o};if(f=r(p),!f)return{isTailwindClass:!1,originalClassName:o};x=!1}var w=De(l).join(":"),h=c?w+we:w;return{isTailwindClass:!0,modifierId:h,classGroupId:f,originalClassName:o,hasPostfixModifier:x}}).reverse().filter(function(o){if(!o.isTailwindClass)return!0;var s=o.modifierId,l=o.classGroupId,c=o.hasPostfixModifier,p=s+l;return i.has(p)?!1:(i.add(p),a(l,c).forEach(function(g){return i.add(s+g)}),!0)}).reverse().map(function(o){return o.originalClassName}).join(" ")}function Be(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=ze(t))&&(r&&(r+=" "),r+=n);return r}function ze(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=ze(e[r]))&&(n&&(n+=" "),n+=t);return n}function Fe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i,o=s;function s(c){var p=t[0],g=t.slice(1),f=g.reduce(function(x,w){return w(x)},p());return r=_e(f),a=r.cache.get,i=r.cache.set,o=l,l(c)}function l(c){var p=a(c);if(p)return p;var g=Re(c,r);return i(c,g),g}return function(){return o(Be.apply(null,arguments))}}function u(e){var t=function(n){return n[e]||[]};return t.isThemeGetter=!0,t}var ke=/^\[(?:([a-z-]+):)?(.+)\]$/i,Oe=/^\d+\/\d+$/,Ue=new Set(["px","full","screen"]),Ze=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ke=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function v(e){return j(e)||Ue.has(e)||Oe.test(e)||Z(e)}function Z(e){return I(e,"length",tt)}function Je(e){return I(e,"size",Ne)}function Qe(e){return I(e,"position",Ne)}function Xe(e){return I(e,"url",rt)}function H(e){return I(e,"number",j)}function j(e){return!Number.isNaN(Number(e))}function Ye(e){return e.endsWith("%")&&j(e.slice(0,-1))}function A(e){return le(e)||I(e,"number",le)}function d(e){return ke.test(e)}function $(){return!0}function T(e){return Ze.test(e)}function et(e){return I(e,"",nt)}function I(e,t,n){var r=ke.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function tt(e){return Ke.test(e)}function Ne(){return!1}function rt(e){return e.startsWith("url(")}function le(e){return Number.isInteger(Number(e))}function nt(e){return We.test(e)}function ot(){var e=u("colors"),t=u("spacing"),n=u("blur"),r=u("brightness"),a=u("borderColor"),i=u("borderRadius"),o=u("borderSpacing"),s=u("borderWidth"),l=u("contrast"),c=u("grayscale"),p=u("hueRotate"),g=u("invert"),f=u("gap"),x=u("gradientColorStops"),w=u("gradientColorStopPositions"),h=u("inset"),z=u("margin"),N=u("opacity"),k=u("padding"),Q=u("saturate"),V=u("scale"),X=u("sepia"),Y=u("skew"),ee=u("space"),te=u("translate"),R=function(){return["auto","contain","none"]},B=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",d,t]},m=function(){return[d,t]},re=function(){return["",v]},S=function(){return["auto",j,d]},ne=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},E=function(){return["solid","dashed","dotted","double","none"]},oe=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},O=function(){return["start","end","center","between","around","evenly","stretch"]},C=function(){return["","0",d]},ie=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},P=function(){return[j,H]},G=function(){return[j,d]};return{cacheSize:500,theme:{colors:[$],spacing:[v],blur:["none","",T,d],brightness:P(),borderColor:[e],borderRadius:["none","","full",T,d],borderSpacing:m(),borderWidth:re(),contrast:P(),grayscale:C(),hueRotate:G(),invert:C(),gap:m(),gradientColorStops:[e],gradientColorStopPositions:[Ye,Z],inset:F(),margin:F(),opacity:P(),padding:m(),saturate:P(),scale:P(),sepia:C(),skew:G(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",d]}],container:["container"],columns:[{columns:[T]}],"break-after":[{"break-after":ie()}],"break-before":[{"break-before":ie()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(ne(),[d])}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",A]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",d]}],grow:[{grow:C()}],shrink:[{shrink:C()}],order:[{order:["first","last","none",A]}],"grid-cols":[{"grid-cols":[$]}],"col-start-end":[{col:["auto",{span:["full",A]},d]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[$]}],"row-start-end":[{row:["auto",{span:[A]},d]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",d]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",d]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(O())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(O(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(O(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[z]}],mx:[{mx:[z]}],my:[{my:[z]}],ms:[{ms:[z]}],me:[{me:[z]}],mt:[{mt:[z]}],mr:[{mr:[z]}],mb:[{mb:[z]}],ml:[{ml:[z]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",d,t]}],"min-w":[{"min-w":["min","max","fit",d,v]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[T]},T,d]}],h:[{h:[d,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",d,v]}],"max-h":[{"max-h":[d,t,"min","max","fit"]}],"font-size":[{text:["base",T,Z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",H]}],"font-family":[{font:[$]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",d]}],"line-clamp":[{"line-clamp":["none",j,H]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",d,v]}],"list-image":[{"list-image":["none",d]}],"list-style-type":[{list:["none","disc","decimal",d]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(E(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",v]}],"underline-offset":[{"underline-offset":["auto",d,v]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",d]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",d]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(ne(),[Qe])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Je]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Xe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(E(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:E()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(E())}],"outline-offset":[{"outline-offset":[d,v]}],"outline-w":[{outline:[v]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[v]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",T,et]}],"shadow-color":[{shadow:[$]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":oe()}],"bg-blend":[{"bg-blend":oe()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",T,d]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[Q]}],sepia:[{sepia:[X]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[Q]}],"backdrop-sepia":[{"backdrop-sepia":[X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",d]}],duration:[{duration:G()}],ease:[{ease:["linear","in","out","in-out",d]}],delay:[{delay:G()}],animate:[{animate:["none","spin","ping","pulse","bounce",d]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[A,d]}],"translate-x":[{"translate-x":[te]}],"translate-y":[{"translate-y":[te]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",d]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",d]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",d]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,H]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var it=Fe(ot);const at={[y.Primary]:["zep-bg-primary-default","zep-text-primary-contrast","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled"],[y.Secondary]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[y.Tertiary]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-tertiary-hover","enabled:hover:zep-text-typography-primary-hover","enabled:active:zep-bg-tertiary-active","enabled:active:zep-text-typography-primary-active","disabled:zep-opacity-disabled"],[y.DarkPrimary]:["zep-bg-neutral-dark-default","zep-text-neutral-dark-contrast","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","disabled:zep-bg-opacity-disabled"],[y.DarkSecondary]:["zep-bg-transparent","zep-text-typography-dark-100","enabled:hover:zep-bg-neutral-dark-hover","enabled:hover:zep-text-neutral-dark-contrast","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-neutral-dark-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0"],[y.DarkTertiary]:["zep-bg-transparent","zep-text-typography-dark-100","enabled:hover:zep-bg-tertiary-hover","enabled:active:zep-bg-tertiary-active","disabled:zep-opacity-disabled"],[y.LightPrimary]:["zep-bg-neutral-light-default","zep-text-neutral-light-contrast","enabled:hover:zep-bg-neutral-light-hover","enabled:active:zep-bg-neutral-light-active","disabled:zep-bg-opacity-disabled"],[y.LightSecondary]:["zep-bg-transparent","zep-text-typography-light-100","enabled:hover:zep-bg-neutral-light-hover","enabled:hover:zep-text-neutral-light-contrast","enabled:active:zep-bg-neutral-light-active","enabled:active:zep-text-neutral-light-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-neutral-light-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0"],[y.LightTertiary]:["zep-bg-transparent","zep-text-typography-light-100","enabled:hover:zep-bg-tertiary-hover","enabled:active:zep-bg-tertiary-active","enabled:hover:zep-text-neutral-light-contrast","enabled:active:zep-text-neutral-light-contrast","disabled:zep-opacity-disabled"]},de=Ie(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-rounded-4","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:at},defaultVariants:{variant:y.Primary}}),ce=({className:e,variant:t,isLoading:n=!1,label:r,children:a,icon:i,iconPosition:o="left",...s})=>{const l=!r||r===""?de({variant:t}).replace("zep-px-1","zep-px-0.75"):de({variant:t});return b.jsxs("button",{className:it(l,e),...s,children:[n&&b.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),b.jsxs(Ce,{gap:"0.5",className:o==="left"?"zep-flex-row-reverse":"",children:[r??a,i&&b.jsx(je,{name:i})]})]})},st=({children:e,active:t,disabled:n,Comp:r="a",...a})=>b.jsx(r,{className:M("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":t,"zep-cursor-not-allowed zep-pointer-events-none":n,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!t}),"aria-current":t?"page":void 0,...a,children:b.jsx("span",{className:M("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":t,"zep-text-typography-dark-40/40":n}),children:e})}),lt=(e,t,n)=>{const r=[];if(t<=n)for(let a=1;a<=t;a++)r.push(a);else{const a=n-3,i=a/2;if(e-1<i||t-e<i){for(let o=1;o<=i+1;o++)r.push(o);r.push(NaN);for(let o=t-i;o<=t;o++)r.push(o)}else if(e-1>=a&&t-e>=a){const o=i-1;r.push(1),r.push(NaN);for(let s=e-o;s<=e+o;s++)r.push(s);r.push(NaN),r.push(t)}else{const o=e-1<t-e;let s=n;if(o){for(let l=1;l<=e+1;l++)r.push(l),s-=1;r.push(NaN),s-=1;for(let l=t-(s-1);l<=t;l++)r.push(l)}else{for(let l=t;l>=e-1;l--)r.unshift(l),s-=1;r.unshift(NaN),s-=1;for(let l=s;l>=1;l--)r.unshift(l)}}}return r},dt=({Comp:e,currentPage:t,lastPage:n,maxPageLength:r,itemsPerPage:a,setCurrentPage:i,totalElements:o})=>{const s=lt(t,n,r);return b.jsxs("div",{className:M("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[b.jsxs("div",{className:M("zep-flex","zep-gap-0.5"),children:[b.jsx(ce,{className:"zep-text-typography-dark-70/70",disabled:t===1,icon:"arrow-long-left",onClick:()=>i(t-1),variant:y.DarkTertiary}),s.map((l,c)=>b.jsx(st,{Comp:e,active:t===l,disabled:isNaN(l),onClick:()=>i(l),children:isNaN(l)?"...":l},c)),b.jsx(ce,{className:"zep-text-typography-dark-70/70",disabled:t===n,icon:"arrow-long-right",onClick:()=>i(t+1),variant:y.DarkTertiary})]}),b.jsxs("ul",{className:M("zep-flex ","zep-gap-0.25"),children:[b.jsx("li",{children:a*t-a+1}),b.jsx("li",{children:"-"}),b.jsx("li",{children:Math.min(a*t,o)}),b.jsx("li",{children:"von"}),b.jsx("li",{children:o})]})]})},K=({articles:e,headline:t,tagline:n,description:r,linkHref:a,linkText:i})=>{const[o,s]=Pe.useState(1);console.log("AAA",Math.ceil(e.length/10));const l=(o-1)*10,c=l+10;return L.jsxDEV(Le,{testId:"zep-articles-section",children:[L.jsxDEV(Ae,{type:"link",headline:t,tagline:n,description:r,linkText:i,linkHref:a},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:24,columnNumber:7},globalThis),L.jsxDEV("div",{className:"zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 lg:zep-mt-5 zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2",children:e==null?void 0:e.slice(l,c).map(p=>L.jsxDEV(Te,{article:p},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:34,columnNumber:65},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:33,columnNumber:7},globalThis),e.length>10&&L.jsxDEV(dt,{currentPage:o,lastPage:Math.ceil(e.length/10),totalElements:e.length,setCurrentPage:s,maxPageLength:e.length,itemsPerPage:10},void 0,!1,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:37,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/articles/Articles.tsx",lineNumber:23,columnNumber:5},globalThis)};try{K.displayName="Articles",K.__docgenInfo={description:"",displayName:"Articles",props:{articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"none"'},{value:'"link"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Tt={title:"Patterns/Articles",component:K,tags:["autodocs"],argTypes:{}},q={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:[{title:"Technische Kompetenz im Food Bereich",image:W,chipText:"CHEMIE | 18.01.2024",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}]}},D={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:11},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:W,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}},_={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:40},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:W,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}};var pe,ue,me;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,be,fe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var he,ye,xe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const jt=["Default","Items11","MultipleItems"];export{q as Default,D as Items11,_ as MultipleItems,jt as __namedExportsOrder,Tt as default};