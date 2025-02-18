import{j as w}from"./jsx-dev-runtime-8ab8c10c.js";import{L as et}from"./Layout-c161d79b.js";import{a as tt,c as H,g as rt}from"./_commonjsHelpers-de833af9.js";import{_ as g}from"./iframe-d066a27e.js";import{r as Z}from"./index-b1e7e93e.js";import{p as at}from"./index-bc8ef2d0.js";import{p as nt}from"./play-2325896b.js";import{H as ot}from"./HeaderLongComponent-38420ccb.js";var it=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&st(o,r.attrs),r.text&&(o.text=""+r.text);var d="onload"in o?ie:lt;d(o,a),o.onload||ie(o,a),n.appendChild(o)};function st(e,t){for(var r in t)e.setAttribute(r,t[r])}function ie(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function lt(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var ut=function(t){return ct(t)&&!pt(t)};function ct(e){return!!e&&typeof e=="object"}function pt(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||yt(e)}var dt=typeof Symbol=="function"&&Symbol.for,ft=dt?Symbol.for("react.element"):60103;function yt(e){return e.$$typeof===ft}function ht(e){return Array.isArray(e)?[]:{}}function j(e,t){return t.clone!==!1&&t.isMergeableObject(e)?S(ht(e),e,t):e}function mt(e,t,r){return e.concat(t).map(function(a){return j(a,r)})}function _t(e,t){if(!t.customMerge)return S;var r=t.customMerge(e);return typeof r=="function"?r:S}function gt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function se(e){return Object.keys(e).concat(gt(e))}function ve(e,t){try{return t in e}catch{return!1}}function vt(e,t){return ve(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function bt(e,t,r){var a={};return r.isMergeableObject(e)&&se(e).forEach(function(n){a[n]=j(e[n],r)}),se(t).forEach(function(n){vt(e,n)||(ve(e,n)&&r.isMergeableObject(t[n])?a[n]=_t(n,r)(e[n],t[n],r):a[n]=j(t[n],r))}),a}function S(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||mt,r.isMergeableObject=r.isMergeableObject||ut,r.cloneUnlessOtherwiseSpecified=j;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):bt(e,t,r):j(t,r)}S.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return S(a,n,r)},{})};var Pt=S,be=Pt,wt=Object.create,$=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Et=Object.getOwnPropertyNames,Tt=Object.getPrototypeOf,St=Object.prototype.hasOwnProperty,At=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},Pe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Et(t))!St.call(e,n)&&n!==r&&$(e,n,{get:()=>t[n],enumerable:!(a=Ot(t,n))||a.enumerable});return e},ee=(e,t,r)=>(r=e!=null?wt(Tt(e)):{},Pe(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),Rt=e=>Pe($({},"__esModule",{value:!0}),e),we={};At(we,{callPlayer:()=>Ft,getConfig:()=>Bt,getSDK:()=>zt,isBlobUrl:()=>Yt,isMediaStream:()=>Wt,lazy:()=>It,omit:()=>Ht,parseEndTime:()=>$t,parseStartTime:()=>kt,queryString:()=>Ut,randomString:()=>Vt,supportsWebKitPresentationMode:()=>Xt});var V=Rt(we),xt=ee(Z),Mt=ee(it),Ct=ee(be);const It=e=>xt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),jt=/[?&#](?:start|t)=([0-9hms]+)/,Lt=/[?&#]end=([0-9hms]+)/,X=/(\d+)(h|m|s)/g,Dt=/^\d+$/;function Oe(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(X))return Nt(a);if(Dt.test(a))return parseInt(a)}}function Nt(e){let t=0,r=X.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=X.exec(e)}return t}function kt(e){return Oe(e,jt)}function $t(e){return Oe(e,Lt)}function Vt(){return Math.random().toString(36).substr(2,5)}function Ut(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function F(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const O={},zt=function(t,r,a=null,n=()=>!0,o=Mt.default){const d=F(r);return d&&n(d)?Promise.resolve(d):new Promise((f,u)=>{if(O[t]){O[t].push({resolve:f,reject:u});return}O[t]=[{resolve:f,reject:u}];const P=b=>{O[t].forEach(A=>A.resolve(b))};if(a){const b=window[a];window[a]=function(){b&&b(),P(F(r))}}o(t,b=>{b?(O[t].forEach(A=>A.reject(b)),O[t]=null):a||P(F(r))})})};function Bt(e,t){return(0,Ct.default)(t.config,e.config)}function Ht(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Ft(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Wt(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Yt(e){return/^blob:/.test(e)}function Xt(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var te=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyNames,Jt=Object.prototype.hasOwnProperty,Qt=(e,t)=>{for(var r in t)te(e,r,{get:t[r],enumerable:!0})},Gt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of qt(t))!Jt.call(e,n)&&n!==r&&te(e,n,{get:()=>t[n],enumerable:!(a=Kt(t,n))||a.enumerable});return e},Zt=e=>Gt(te({},"__esModule",{value:!0}),e),Ee={};Qt(Ee,{AUDIO_EXTENSIONS:()=>re,DASH_EXTENSIONS:()=>$e,FLV_EXTENSIONS:()=>Ve,HLS_EXTENSIONS:()=>ne,MATCH_URL_DAILYMOTION:()=>Le,MATCH_URL_FACEBOOK:()=>Re,MATCH_URL_FACEBOOK_WATCH:()=>xe,MATCH_URL_KALTURA:()=>ke,MATCH_URL_MIXCLOUD:()=>De,MATCH_URL_MUX:()=>Ae,MATCH_URL_SOUNDCLOUD:()=>Te,MATCH_URL_STREAMABLE:()=>Me,MATCH_URL_TWITCH_CHANNEL:()=>je,MATCH_URL_TWITCH_VIDEO:()=>Ie,MATCH_URL_VIDYARD:()=>Ne,MATCH_URL_VIMEO:()=>Se,MATCH_URL_WISTIA:()=>Ce,MATCH_URL_YOUTUBE:()=>K,VIDEO_EXTENSIONS:()=>ae,canPlay:()=>tr});var er=Zt(Ee),le=V;const K=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Te=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Se=/vimeo\.com\/(?!progressive_redirect).+/,Ae=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Re=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,xe=/^https?:\/\/fb\.watch\/.+$/,Me=/streamable\.com\/([a-z0-9]+)$/,Ce=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Ie=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,je=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Le=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,De=/mixcloud\.com\/([^/]+\/[^/]+)/,Ne=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,ke=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,re=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,ae=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ne=/\.(m3u8)($|\?)/i,$e=/\.(mpd)($|\?)/i,Ve=/\.(flv)($|\?)/i,q=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&q(t)||q(t.src))return!0;return!1}return(0,le.isMediaStream)(e)||(0,le.isBlobUrl)(e)?!0:re.test(e)||ae.test(e)||ne.test(e)||$e.test(e)||Ve.test(e)},tr={youtube:e=>e instanceof Array?e.every(t=>K.test(t)):K.test(e),soundcloud:e=>Te.test(e)&&!re.test(e),vimeo:e=>Se.test(e)&&!ae.test(e)&&!ne.test(e),mux:e=>Ae.test(e),facebook:e=>Re.test(e)||xe.test(e),streamable:e=>Me.test(e),wistia:e=>Ce.test(e),twitch:e=>Ie.test(e)||je.test(e),dailymotion:e=>Le.test(e),mixcloud:e=>De.test(e),vidyard:e=>Ne.test(e),kaltura:e=>ke.test(e),file:q};var oe=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,ar=Object.getOwnPropertyNames,nr=Object.prototype.hasOwnProperty,or=(e,t)=>{for(var r in t)oe(e,r,{get:t[r],enumerable:!0})},ir=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ar(t))!nr.call(e,n)&&n!==r&&oe(e,n,{get:()=>t[n],enumerable:!(a=rr(t,n))||a.enumerable});return e},sr=e=>ir(oe({},"__esModule",{value:!0}),e),Ue={};or(Ue,{default:()=>ur});var lr=sr(Ue),_=V,h=er,ur=[{key:"youtube",name:"YouTube",canPlay:h.canPlay.youtube,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./YouTube-34fa6099.js").then(e=>e.Y),["./YouTube-34fa6099.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:h.canPlay.soundcloud,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./SoundCloud-17d53437.js").then(e=>e.S),["./SoundCloud-17d53437.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:h.canPlay.vimeo,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Vimeo-470afd0f.js").then(e=>e.V),["./Vimeo-470afd0f.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"mux",name:"Mux",canPlay:h.canPlay.mux,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Mux-9cd9422a.js").then(e=>e.M),["./Mux-9cd9422a.js","./iframe-d066a27e.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"facebook",name:"Facebook",canPlay:h.canPlay.facebook,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Facebook-e5c1f0a3.js").then(e=>e.F),["./Facebook-e5c1f0a3.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"streamable",name:"Streamable",canPlay:h.canPlay.streamable,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Streamable-7c7ba108.js").then(e=>e.S),["./Streamable-7c7ba108.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"wistia",name:"Wistia",canPlay:h.canPlay.wistia,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Wistia-06944020.js").then(e=>e.W),["./Wistia-06944020.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"twitch",name:"Twitch",canPlay:h.canPlay.twitch,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Twitch-7e6619f3.js").then(e=>e.T),["./Twitch-7e6619f3.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:h.canPlay.dailymotion,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./DailyMotion-3e13dd49.js").then(e=>e.D),["./DailyMotion-3e13dd49.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:h.canPlay.mixcloud,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Mixcloud-380eba9d.js").then(e=>e.M),["./Mixcloud-380eba9d.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:h.canPlay.vidyard,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Vidyard-800391e7.js").then(e=>e.V),["./Vidyard-800391e7.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:h.canPlay.kaltura,lazyPlayer:(0,_.lazy)(()=>g(()=>import("./Kaltura-70559525.js").then(e=>e.K),["./Kaltura-70559525.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"file",name:"FilePlayer",canPlay:h.canPlay.file,canEnablePIP:e=>h.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,_.supportsWebKitPresentationMode)())&&!h.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,_.lazy)(()=>g(()=>import("./FilePlayer-20bafb4b.js").then(e=>e.F),["./FilePlayer-20bafb4b.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))}],ue=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function cr(e,t){return!!(e===t||ue(e)&&ue(t))}function pr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!cr(e[r],t[r]))return!1;return!0}function dr(e,t){t===void 0&&(t=pr);var r,a=[],n,o=!1;function d(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];return o&&r===this&&t(f,a)||(n=e.apply(this,f),o=!0,r=this,a=f),n}return d}const fr=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"})),yr=tt(fr);var hr=typeof Element<"u",mr=typeof Map=="function",_r=typeof Set=="function",gr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function k(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!k(e[a],t[a]))return!1;return!0}var o;if(mr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!k(a.value[1],t.get(a.value[0])))return!1;return!0}if(_r&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(gr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(hr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!k(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var ze=function(t,r){try{return k(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},vr=Object.create,U=Object.defineProperty,br=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,wr=Object.getPrototypeOf,Or=Object.prototype.hasOwnProperty,Er=(e,t)=>{for(var r in t)U(e,r,{get:t[r],enumerable:!0})},Be=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pr(t))!Or.call(e,n)&&n!==r&&U(e,n,{get:()=>t[n],enumerable:!(a=br(t,n))||a.enumerable});return e},Tr=(e,t,r)=>(r=e!=null?vr(wr(e)):{},Be(t||!e||!e.__esModule?U(r,"default",{value:e,enumerable:!0}):r,e)),Sr=e=>Be(U({},"__esModule",{value:!0}),e),He={};Er(He,{defaultProps:()=>xr,propTypes:()=>Rr});var Fe=Sr(He),Ar=Tr(at);const{string:c,bool:m,number:E,array:W,oneOfType:R,shape:v,object:y,func:l,node:ce}=Ar.default,Rr={url:R([c,W,y]),playing:m,loop:m,controls:m,volume:E,muted:m,playbackRate:E,width:R([c,E]),height:R([c,E]),style:y,progressInterval:E,playsinline:m,pip:m,stopOnUnmount:m,light:R([m,c,y]),playIcon:ce,previewTabIndex:E,previewAriaLabel:c,fallback:ce,oEmbedUrl:c,wrapper:R([c,l,v({render:l.isRequired})]),config:v({soundcloud:v({options:y}),youtube:v({playerVars:y,embedOptions:y,onUnstarted:l}),facebook:v({appId:c,version:c,playerId:c,attributes:y}),dailymotion:v({params:y}),vimeo:v({playerOptions:y,title:c}),mux:v({attributes:y,version:c}),file:v({attributes:y,tracks:W,forceVideo:m,forceAudio:m,forceHLS:m,forceSafariHLS:m,forceDisableHls:m,forceDASH:m,forceFLV:m,hlsOptions:y,hlsVersion:c,dashVersion:c,flvVersion:c}),wistia:v({options:y,playerId:c,customControls:W}),mixcloud:v({options:y}),twitch:v({options:y,playerId:c}),vidyard:v({options:y})}),onReady:l,onStart:l,onPlay:l,onPause:l,onBuffer:l,onBufferEnd:l,onEnded:l,onError:l,onDuration:l,onSeek:l,onPlaybackRateChange:l,onPlaybackQualityChange:l,onProgress:l,onClickPreview:l,onEnablePIP:l,onDisablePIP:l},p=()=>{},xr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:p},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p};var Mr=Object.create,L=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyNames,jr=Object.getPrototypeOf,Lr=Object.prototype.hasOwnProperty,Dr=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Nr=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},We=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ir(t))!Lr.call(e,n)&&n!==r&&L(e,n,{get:()=>t[n],enumerable:!(a=Cr(t,n))||a.enumerable});return e},Ye=(e,t,r)=>(r=e!=null?Mr(jr(e)):{},We(t||!e||!e.__esModule?L(r,"default",{value:e,enumerable:!0}):r,e)),kr=e=>We(L({},"__esModule",{value:!0}),e),s=(e,t,r)=>(Dr(e,typeof t!="symbol"?t+"":t,r),r),Xe={};Nr(Xe,{default:()=>z});var $r=kr(Xe),pe=Ye(Z),Vr=Ye(ze),Ke=Fe,Ur=V;const zr=5e3;class z extends pe.Component{constructor(){super(...arguments),s(this,"mounted",!1),s(this,"isReady",!1),s(this,"isPlaying",!1),s(this,"isLoading",!0),s(this,"loadOnReady",null),s(this,"startOnPlay",!0),s(this,"seekOnPlay",null),s(this,"onDurationCalled",!1),s(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),s(this,"getInternalPlayer",t=>this.player?this.player[t]:null),s(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),s(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),s(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),s(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),s(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),s(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),s(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),s(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:d,pip:f,loop:u,activePlayer:P,disableDeferredLoading:b}=this.props;if(!(0,Vr.default)(t.url,r)){if(this.isLoading&&!P.forceLoad&&!b&&!(0,Ur.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&f&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!f&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==d&&this.player.setPlaybackRate&&this.player.setPlaybackRate(d),t.loop!==u&&this.player.setLoop&&this.player.setLoop(u)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},zr));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?pe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}s(z,"displayName","Player");s(z,"propTypes",Ke.propTypes);s(z,"defaultProps",Ke.defaultProps);var Br=Object.create,D=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Fr=Object.getOwnPropertyNames,Wr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty,Xr=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Kr=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},qe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Fr(t))!Yr.call(e,n)&&n!==r&&D(e,n,{get:()=>t[n],enumerable:!(a=Hr(t,n))||a.enumerable});return e},N=(e,t,r)=>(r=e!=null?Br(Wr(e)):{},qe(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),qr=e=>qe(D({},"__esModule",{value:!0}),e),i=(e,t,r)=>(Xr(e,typeof t!="symbol"?t+"":t,r),r),Je={};Kr(Je,{createReactPlayer:()=>na});var Jr=qr(Je),T=N(Z),Qr=N(be),Y=N(yr),de=N(ze),M=Fe,Qe=V,Gr=N($r);const Zr=(0,Qe.lazy)(()=>g(()=>import("./Preview-2e7d5f8c.js").then(e=>e.P),["./Preview-2e7d5f8c.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url)),ea=typeof window<"u"&&window.document&&typeof document<"u",ta=typeof H<"u"&&H.window&&H.window.document,ra=Object.keys(M.propTypes),aa=ea||ta?T.Suspense:()=>null,x=[],na=(e,t)=>{var r;return r=class extends T.Component{constructor(){super(...arguments),i(this,"state",{showPreview:!!this.props.light}),i(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),i(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),i(this,"showPreview",()=>{this.setState({showPreview:!0})}),i(this,"getDuration",()=>this.player?this.player.getDuration():null),i(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),i(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),i(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),i(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),i(this,"handleReady",()=>{this.props.onReady(this)}),i(this,"getActivePlayer",(0,Y.default)(a=>{for(const n of[...x,...e])if(n.canPlay(a))return n;return t||null})),i(this,"getConfig",(0,Y.default)((a,n)=>{const{config:o}=this.props;return Qr.default.all([M.defaultProps.config,M.defaultProps.config[n]||{},o,o[n]||{}])})),i(this,"getAttributes",(0,Y.default)(a=>(0,Qe.omit)(this.props,ra))),i(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return T.default.createElement(Gr.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,de.default)(this.props,a)||!(0,de.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:d,oEmbedUrl:f,previewAriaLabel:u}=this.props;return T.default.createElement(Zr,{url:a,light:n,playIcon:o,previewTabIndex:d,previewAriaLabel:u,oEmbedUrl:f,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:d,fallback:f,wrapper:u}=this.props,{showPreview:P}=this.state,b=this.getAttributes(a),A=typeof u=="string"?this.references.wrapper:void 0;return T.default.createElement(u,{ref:A,style:{...n,width:o,height:d},...b},T.default.createElement(aa,{fallback:f},P?this.renderPreview(a):this.renderActivePlayer(a)))}},i(r,"displayName","ReactPlayer"),i(r,"propTypes",M.propTypes),i(r,"defaultProps",M.defaultProps),i(r,"addCustomPlayer",a=>{x.push(a)}),i(r,"removeCustomPlayers",()=>{x.length=0}),i(r,"canPlay",a=>{for(const n of[...x,...e])if(n.canPlay(a))return!0;return!1}),i(r,"canEnablePIP",a=>{for(const n of[...x,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var oa=Object.create,B=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,sa=Object.getOwnPropertyNames,la=Object.getPrototypeOf,ua=Object.prototype.hasOwnProperty,ca=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},Ge=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of sa(t))!ua.call(e,n)&&n!==r&&B(e,n,{get:()=>t[n],enumerable:!(a=ia(t,n))||a.enumerable});return e},pa=(e,t,r)=>(r=e!=null?oa(la(e)):{},Ge(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),da=e=>Ge(B({},"__esModule",{value:!0}),e),Ze={};ca(Ze,{default:()=>ma});var fa=da(Ze),J=pa(lr),ya=Jr;const ha=J.default[J.default.length-1];var ma=(0,ya.createReactPlayer)(J.default,ha);const _a=rt(fa),Q=({url:e,thumbnail:t})=>w.jsxDEV("div",{style:{position:"relative",width:"100%",margin:"0 auto",aspectRatio:"16 / 9"},children:w.jsxDEV(_a,{playing:!0,controls:!0,playIcon:w.jsxDEV("img",{alt:"play",className:"zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]",src:nt},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:23,columnNumber:11},globalThis),light:t,url:e,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},config:{file:{attributes:{style:{objectFit:"cover"}}}}},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:19,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:11,columnNumber:5},globalThis),ga=Q;try{Q.displayName="ResponsivePlayer",Q.__docgenInfo={description:"",displayName:"ResponsivePlayer",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},thumbnail:{defaultValue:null,description:"",name:"thumbnail",required:!0,type:{name:"string"}}}}}catch{}const G=({video:e})=>{const{title:t,tagline:r,description:a,linkHref:n,type:o,linkText:d,url:f,thumbnail:u,videoDetails:P}=e;return w.jsxDEV(et,{children:[w.jsxDEV(ot,{headline:t,tagline:r,description:a,type:o,linkText:d,linkHref:n},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:11,columnNumber:7},globalThis),w.jsxDEV("div",{className:"zep-w-full zep-relative zep-max-w-[1436px] zep-mx-auto zep-mt-2 md:zep-mt-5",children:[w.jsxDEV(ga,{url:f,thumbnail:u},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:21,columnNumber:9},globalThis),w.jsxDEV("p",{className:"zep-text-typography-dark-100 zep-mt-0.5 md:zep-mt-1 zep-typography-supportText",children:P},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:22,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:20,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:10,columnNumber:5},globalThis)};try{G.displayName="Video",G.__docgenInfo={description:"",displayName:"Video",props:{video:{defaultValue:null,description:"",name:"video",required:!0,type:{name:"SingleVideo"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const va={title:"Patterns/Video",component:G,tags:["autodocs"],argTypes:{}},C={args:{video:{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",type:"link",linkText:"Watch on Youtube",linkHref:"https://www.youtube.com/watch?v=YE7VzlLtp-4",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",videoDetails:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}}},I={args:{video:{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",linkText:"Watch on Youtube",linkHref:"https://www.youtube.com/watch?v=YE7VzlLtp-4",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q="}}};var fe,ye,he;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    video: {
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      type: 'link',
      linkText: 'Watch on Youtube',
      linkHref: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      videoDetails: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
    }
  }
}`,...(he=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var me,_e,ge;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    video: {
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      linkText: 'Watch on Youtube',
      linkHref: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q='
    }
  }
}`,...(ge=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:ge.source}}};const ba=["Default","WithoutVideoDescription"],xa=Object.freeze(Object.defineProperty({__proto__:null,Default:C,WithoutVideoDescription:I,__namedExportsOrder:ba,default:va},Symbol.toStringTag,{value:"Module"}));export{xa as V,er as p,V as u};
