import{j as b}from"./jsx-dev-runtime-8ab8c10c.js";import{L as Je}from"./Layout-56731c8a.js";import{a as Qe,c as H,g as Ze}from"./_commonjsHelpers-de833af9.js";import{_ as v}from"./iframe-ed1a2f02.js";import{r as Z}from"./index-b1e7e93e.js";import{p as Ge}from"./index-bc8ef2d0.js";import{p as et}from"./play-2325896b.js";import{H as tt}from"./HeaderLongComponent-a3b5248c.js";var rt=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&at(o,r.attrs),r.text&&(o.text=""+r.text);var d="onload"in o?oe:nt;d(o,a),o.onload||oe(o,a),n.appendChild(o)};function at(e,t){for(var r in t)e.setAttribute(r,t[r])}function oe(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function nt(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var ot=function(t){return it(t)&&!st(t)};function it(e){return!!e&&typeof e=="object"}function st(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ct(e)}var lt=typeof Symbol=="function"&&Symbol.for,ut=lt?Symbol.for("react.element"):60103;function ct(e){return e.$$typeof===ut}function pt(e){return Array.isArray(e)?[]:{}}function j(e,t){return t.clone!==!1&&t.isMergeableObject(e)?S(pt(e),e,t):e}function dt(e,t,r){return e.concat(t).map(function(a){return j(a,r)})}function ft(e,t){if(!t.customMerge)return S;var r=t.customMerge(e);return typeof r=="function"?r:S}function yt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ie(e){return Object.keys(e).concat(yt(e))}function me(e,t){try{return t in e}catch{return!1}}function mt(e,t){return me(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function ht(e,t,r){var a={};return r.isMergeableObject(e)&&ie(e).forEach(function(n){a[n]=j(e[n],r)}),ie(t).forEach(function(n){mt(e,n)||(me(e,n)&&r.isMergeableObject(t[n])?a[n]=ft(n,r)(e[n],t[n],r):a[n]=j(t[n],r))}),a}function S(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||dt,r.isMergeableObject=r.isMergeableObject||ot,r.cloneUnlessOtherwiseSpecified=j;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):ht(e,t,r):j(t,r)}S.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return S(a,n,r)},{})};var _t=S,he=_t,vt=Object.create,$=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,gt=Object.getOwnPropertyNames,bt=Object.getPrototypeOf,Ot=Object.prototype.hasOwnProperty,wt=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},_e=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of gt(t))!Ot.call(e,n)&&n!==r&&$(e,n,{get:()=>t[n],enumerable:!(a=Pt(t,n))||a.enumerable});return e},G=(e,t,r)=>(r=e!=null?vt(bt(e)):{},_e(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),Et=e=>_e($({},"__esModule",{value:!0}),e),ve={};wt(ve,{callPlayer:()=>Ut,getConfig:()=>Vt,getSDK:()=>$t,isBlobUrl:()=>Ht,isMediaStream:()=>zt,lazy:()=>Rt,omit:()=>kt,parseEndTime:()=>Dt,parseStartTime:()=>xt,queryString:()=>Nt,randomString:()=>Lt,supportsWebKitPresentationMode:()=>Bt});var V=Et(ve),Tt=G(Z),St=G(rt),At=G(he);const Rt=e=>Tt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Mt=/[?&#](?:start|t)=([0-9hms]+)/,Ct=/[?&#]end=([0-9hms]+)/,W=/(\d+)(h|m|s)/g,It=/^\d+$/;function Pe(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(W))return jt(a);if(It.test(a))return parseInt(a)}}function jt(e){let t=0,r=W.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=W.exec(e)}return t}function xt(e){return Pe(e,Mt)}function Dt(e){return Pe(e,Ct)}function Lt(){return Math.random().toString(36).substr(2,5)}function Nt(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function B(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const w={},$t=function(t,r,a=null,n=()=>!0,o=St.default){const d=B(r);return d&&n(d)?Promise.resolve(d):new Promise((f,u)=>{if(w[t]){w[t].push({resolve:f,reject:u});return}w[t]=[{resolve:f,reject:u}];const O=g=>{w[t].forEach(A=>A.resolve(g))};if(a){const g=window[a];window[a]=function(){g&&g(),O(B(r))}}o(t,g=>{g?(w[t].forEach(A=>A.reject(g)),w[t]=null):a||O(B(r))})})};function Vt(e,t){return(0,At.default)(t.config,e.config)}function kt(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Ut(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function zt(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Ht(e){return/^blob:/.test(e)}function Bt(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var ee=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyNames,Wt=Object.prototype.hasOwnProperty,Kt=(e,t)=>{for(var r in t)ee(e,r,{get:t[r],enumerable:!0})},Yt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xt(t))!Wt.call(e,n)&&n!==r&&ee(e,n,{get:()=>t[n],enumerable:!(a=Ft(t,n))||a.enumerable});return e},qt=e=>Yt(ee({},"__esModule",{value:!0}),e),ge={};Kt(ge,{AUDIO_EXTENSIONS:()=>te,DASH_EXTENSIONS:()=>De,FLV_EXTENSIONS:()=>Le,HLS_EXTENSIONS:()=>ae,MATCH_URL_DAILYMOTION:()=>Ce,MATCH_URL_FACEBOOK:()=>Ee,MATCH_URL_FACEBOOK_WATCH:()=>Te,MATCH_URL_KALTURA:()=>xe,MATCH_URL_MIXCLOUD:()=>Ie,MATCH_URL_MUX:()=>we,MATCH_URL_SOUNDCLOUD:()=>be,MATCH_URL_STREAMABLE:()=>Se,MATCH_URL_TWITCH_CHANNEL:()=>Me,MATCH_URL_TWITCH_VIDEO:()=>Re,MATCH_URL_VIDYARD:()=>je,MATCH_URL_VIMEO:()=>Oe,MATCH_URL_WISTIA:()=>Ae,MATCH_URL_YOUTUBE:()=>K,VIDEO_EXTENSIONS:()=>re,canPlay:()=>Qt});var Jt=qt(ge),se=V;const K=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,be=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Oe=/vimeo\.com\/(?!progressive_redirect).+/,we=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ee=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Te=/^https?:\/\/fb\.watch\/.+$/,Se=/streamable\.com\/([a-z0-9]+)$/,Ae=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Re=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Me=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Ce=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Ie=/mixcloud\.com\/([^/]+\/[^/]+)/,je=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,xe=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,te=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,re=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ae=/\.(m3u8)($|\?)/i,De=/\.(mpd)($|\?)/i,Le=/\.(flv)($|\?)/i,Y=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&Y(t)||Y(t.src))return!0;return!1}return(0,se.isMediaStream)(e)||(0,se.isBlobUrl)(e)?!0:te.test(e)||re.test(e)||ae.test(e)||De.test(e)||Le.test(e)},Qt={youtube:e=>e instanceof Array?e.every(t=>K.test(t)):K.test(e),soundcloud:e=>be.test(e)&&!te.test(e),vimeo:e=>Oe.test(e)&&!re.test(e)&&!ae.test(e),mux:e=>we.test(e),facebook:e=>Ee.test(e)||Te.test(e),streamable:e=>Se.test(e),wistia:e=>Ae.test(e),twitch:e=>Re.test(e)||Me.test(e),dailymotion:e=>Ce.test(e),mixcloud:e=>Ie.test(e),vidyard:e=>je.test(e),kaltura:e=>xe.test(e),file:Y};var ne=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyNames,er=Object.prototype.hasOwnProperty,tr=(e,t)=>{for(var r in t)ne(e,r,{get:t[r],enumerable:!0})},rr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Gt(t))!er.call(e,n)&&n!==r&&ne(e,n,{get:()=>t[n],enumerable:!(a=Zt(t,n))||a.enumerable});return e},ar=e=>rr(ne({},"__esModule",{value:!0}),e),Ne={};tr(Ne,{default:()=>or});var nr=ar(Ne),_=V,m=Jt,or=[{key:"youtube",name:"YouTube",canPlay:m.canPlay.youtube,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./YouTube-a03d1f88.js").then(e=>e.Y),["./YouTube-a03d1f88.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:m.canPlay.soundcloud,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./SoundCloud-39a97497.js").then(e=>e.S),["./SoundCloud-39a97497.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:m.canPlay.vimeo,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Vimeo-f7e5040a.js").then(e=>e.V),["./Vimeo-f7e5040a.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"mux",name:"Mux",canPlay:m.canPlay.mux,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Mux-e3fc37a4.js").then(e=>e.M),["./Mux-e3fc37a4.js","./iframe-ed1a2f02.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"facebook",name:"Facebook",canPlay:m.canPlay.facebook,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Facebook-cf42c7a9.js").then(e=>e.F),["./Facebook-cf42c7a9.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"streamable",name:"Streamable",canPlay:m.canPlay.streamable,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Streamable-b5d085ca.js").then(e=>e.S),["./Streamable-b5d085ca.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"wistia",name:"Wistia",canPlay:m.canPlay.wistia,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Wistia-2c295fc2.js").then(e=>e.W),["./Wistia-2c295fc2.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"twitch",name:"Twitch",canPlay:m.canPlay.twitch,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Twitch-c49030b4.js").then(e=>e.T),["./Twitch-c49030b4.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:m.canPlay.dailymotion,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./DailyMotion-f816081c.js").then(e=>e.D),["./DailyMotion-f816081c.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:m.canPlay.mixcloud,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Mixcloud-aa28ade1.js").then(e=>e.M),["./Mixcloud-aa28ade1.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:m.canPlay.vidyard,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Vidyard-31ce68e1.js").then(e=>e.V),["./Vidyard-31ce68e1.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:m.canPlay.kaltura,lazyPlayer:(0,_.lazy)(()=>v(()=>import("./Kaltura-9b40def7.js").then(e=>e.K),["./Kaltura-9b40def7.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))},{key:"file",name:"FilePlayer",canPlay:m.canPlay.file,canEnablePIP:e=>m.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,_.supportsWebKitPresentationMode)())&&!m.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,_.lazy)(()=>v(()=>import("./FilePlayer-6d928fe2.js").then(e=>e.F),["./FilePlayer-6d928fe2.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url))}],le=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ir(e,t){return!!(e===t||le(e)&&le(t))}function sr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ir(e[r],t[r]))return!1;return!0}function lr(e,t){t===void 0&&(t=sr);var r,a=[],n,o=!1;function d(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];return o&&r===this&&t(f,a)||(n=e.apply(this,f),o=!0,r=this,a=f),n}return d}const ur=Object.freeze(Object.defineProperty({__proto__:null,default:lr},Symbol.toStringTag,{value:"Module"})),cr=Qe(ur);var pr=typeof Element<"u",dr=typeof Map=="function",fr=typeof Set=="function",yr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function N(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!N(e[a],t[a]))return!1;return!0}var o;if(dr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!N(a.value[1],t.get(a.value[0])))return!1;return!0}if(fr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(yr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(pr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!N(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var $e=function(t,r){try{return N(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},mr=Object.create,k=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,_r=Object.getOwnPropertyNames,vr=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty,gr=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of _r(t))!Pr.call(e,n)&&n!==r&&k(e,n,{get:()=>t[n],enumerable:!(a=hr(t,n))||a.enumerable});return e},br=(e,t,r)=>(r=e!=null?mr(vr(e)):{},Ve(t||!e||!e.__esModule?k(r,"default",{value:e,enumerable:!0}):r,e)),Or=e=>Ve(k({},"__esModule",{value:!0}),e),ke={};gr(ke,{defaultProps:()=>Tr,propTypes:()=>Er});var Ue=Or(ke),wr=br(Ge);const{string:c,bool:h,number:E,array:F,oneOfType:R,shape:P,object:y,func:l,node:ue}=wr.default,Er={url:R([c,F,y]),playing:h,loop:h,controls:h,volume:E,muted:h,playbackRate:E,width:R([c,E]),height:R([c,E]),style:y,progressInterval:E,playsinline:h,pip:h,stopOnUnmount:h,light:R([h,c,y]),playIcon:ue,previewTabIndex:E,previewAriaLabel:c,fallback:ue,oEmbedUrl:c,wrapper:R([c,l,P({render:l.isRequired})]),config:P({soundcloud:P({options:y}),youtube:P({playerVars:y,embedOptions:y,onUnstarted:l}),facebook:P({appId:c,version:c,playerId:c,attributes:y}),dailymotion:P({params:y}),vimeo:P({playerOptions:y,title:c}),mux:P({attributes:y,version:c}),file:P({attributes:y,tracks:F,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:y,hlsVersion:c,dashVersion:c,flvVersion:c}),wistia:P({options:y,playerId:c,customControls:F}),mixcloud:P({options:y}),twitch:P({options:y,playerId:c}),vidyard:P({options:y})}),onReady:l,onStart:l,onPlay:l,onPause:l,onBuffer:l,onBufferEnd:l,onEnded:l,onError:l,onDuration:l,onSeek:l,onPlaybackRateChange:l,onPlaybackQualityChange:l,onProgress:l,onClickPreview:l,onEnablePIP:l,onDisablePIP:l},p=()=>{},Tr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:p},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p};var Sr=Object.create,x=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Rr=Object.getOwnPropertyNames,Mr=Object.getPrototypeOf,Cr=Object.prototype.hasOwnProperty,Ir=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,jr=(e,t)=>{for(var r in t)x(e,r,{get:t[r],enumerable:!0})},ze=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Rr(t))!Cr.call(e,n)&&n!==r&&x(e,n,{get:()=>t[n],enumerable:!(a=Ar(t,n))||a.enumerable});return e},He=(e,t,r)=>(r=e!=null?Sr(Mr(e)):{},ze(t||!e||!e.__esModule?x(r,"default",{value:e,enumerable:!0}):r,e)),xr=e=>ze(x({},"__esModule",{value:!0}),e),s=(e,t,r)=>(Ir(e,typeof t!="symbol"?t+"":t,r),r),Be={};jr(Be,{default:()=>U});var Dr=xr(Be),ce=He(Z),Lr=He($e),Fe=Ue,Nr=V;const $r=5e3;class U extends ce.Component{constructor(){super(...arguments),s(this,"mounted",!1),s(this,"isReady",!1),s(this,"isPlaying",!1),s(this,"isLoading",!0),s(this,"loadOnReady",null),s(this,"startOnPlay",!0),s(this,"seekOnPlay",null),s(this,"onDurationCalled",!1),s(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),s(this,"getInternalPlayer",t=>this.player?this.player[t]:null),s(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),s(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),s(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),s(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),s(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),s(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),s(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),s(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:d,pip:f,loop:u,activePlayer:O,disableDeferredLoading:g}=this.props;if(!(0,Lr.default)(t.url,r)){if(this.isLoading&&!O.forceLoad&&!g&&!(0,Nr.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&f&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!f&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==d&&this.player.setPlaybackRate&&this.player.setPlaybackRate(d),t.loop!==u&&this.player.setLoop&&this.player.setLoop(u)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},$r));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?ce.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}s(U,"displayName","Player");s(U,"propTypes",Fe.propTypes);s(U,"defaultProps",Fe.defaultProps);var Vr=Object.create,D=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyNames,zr=Object.getPrototypeOf,Hr=Object.prototype.hasOwnProperty,Br=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fr=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},Xe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ur(t))!Hr.call(e,n)&&n!==r&&D(e,n,{get:()=>t[n],enumerable:!(a=kr(t,n))||a.enumerable});return e},L=(e,t,r)=>(r=e!=null?Vr(zr(e)):{},Xe(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Xr=e=>Xe(D({},"__esModule",{value:!0}),e),i=(e,t,r)=>(Br(e,typeof t!="symbol"?t+"":t,r),r),We={};Fr(We,{createReactPlayer:()=>ea});var Wr=Xr(We),T=L(Z),Kr=L(he),X=L(cr),pe=L($e),C=Ue,Ke=V,Yr=L(Dr);const qr=(0,Ke.lazy)(()=>v(()=>import("./Preview-2e7d5f8c.js").then(e=>e.P),["./Preview-2e7d5f8c.js","./_commonjsHelpers-de833af9.js","./index-b1e7e93e.js"],import.meta.url)),Jr=typeof window<"u"&&window.document&&typeof document<"u",Qr=typeof H<"u"&&H.window&&H.window.document,Zr=Object.keys(C.propTypes),Gr=Jr||Qr?T.Suspense:()=>null,M=[],ea=(e,t)=>{var r;return r=class extends T.Component{constructor(){super(...arguments),i(this,"state",{showPreview:!!this.props.light}),i(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),i(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),i(this,"showPreview",()=>{this.setState({showPreview:!0})}),i(this,"getDuration",()=>this.player?this.player.getDuration():null),i(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),i(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),i(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),i(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),i(this,"handleReady",()=>{this.props.onReady(this)}),i(this,"getActivePlayer",(0,X.default)(a=>{for(const n of[...M,...e])if(n.canPlay(a))return n;return t||null})),i(this,"getConfig",(0,X.default)((a,n)=>{const{config:o}=this.props;return Kr.default.all([C.defaultProps.config,C.defaultProps.config[n]||{},o,o[n]||{}])})),i(this,"getAttributes",(0,X.default)(a=>(0,Ke.omit)(this.props,Zr))),i(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return T.default.createElement(Yr.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,pe.default)(this.props,a)||!(0,pe.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:d,oEmbedUrl:f,previewAriaLabel:u}=this.props;return T.default.createElement(qr,{url:a,light:n,playIcon:o,previewTabIndex:d,previewAriaLabel:u,oEmbedUrl:f,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:d,fallback:f,wrapper:u}=this.props,{showPreview:O}=this.state,g=this.getAttributes(a),A=typeof u=="string"?this.references.wrapper:void 0;return T.default.createElement(u,{ref:A,style:{...n,width:o,height:d},...g},T.default.createElement(Gr,{fallback:f},O?this.renderPreview(a):this.renderActivePlayer(a)))}},i(r,"displayName","ReactPlayer"),i(r,"propTypes",C.propTypes),i(r,"defaultProps",C.defaultProps),i(r,"addCustomPlayer",a=>{M.push(a)}),i(r,"removeCustomPlayers",()=>{M.length=0}),i(r,"canPlay",a=>{for(const n of[...M,...e])if(n.canPlay(a))return!0;return!1}),i(r,"canEnablePIP",a=>{for(const n of[...M,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var ta=Object.create,z=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,aa=Object.getOwnPropertyNames,na=Object.getPrototypeOf,oa=Object.prototype.hasOwnProperty,ia=(e,t)=>{for(var r in t)z(e,r,{get:t[r],enumerable:!0})},Ye=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of aa(t))!oa.call(e,n)&&n!==r&&z(e,n,{get:()=>t[n],enumerable:!(a=ra(t,n))||a.enumerable});return e},sa=(e,t,r)=>(r=e!=null?ta(na(e)):{},Ye(t||!e||!e.__esModule?z(r,"default",{value:e,enumerable:!0}):r,e)),la=e=>Ye(z({},"__esModule",{value:!0}),e),qe={};ia(qe,{default:()=>da});var ua=la(qe),q=sa(nr),ca=Wr;const pa=q.default[q.default.length-1];var da=(0,ca.createReactPlayer)(q.default,pa);const fa=Ze(ua),J=({url:e,thumbnail:t})=>b.jsxDEV("div",{style:{position:"relative",width:"100%",margin:"0 auto",aspectRatio:"16 / 9"},children:b.jsxDEV(fa,{playing:!0,controls:!0,playIcon:b.jsxDEV("img",{alt:"play",className:"zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]",src:et},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:23,columnNumber:11},globalThis),light:t,url:e,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},config:{file:{attributes:{style:{objectFit:"cover"}}}}},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:19,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/video/ResponsivePlayer.tsx",lineNumber:11,columnNumber:5},globalThis),ya=J;try{J.displayName="ResponsivePlayer",J.__docgenInfo={description:"",displayName:"ResponsivePlayer",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},thumbnail:{defaultValue:null,description:"",name:"thumbnail",required:!0,type:{name:"string"}}}}}catch{}const Q=({video:e})=>{const{title:t,tagline:r,description:a,linkHref:n,linkText:o,url:d,thumbnail:f,videoDetails:u}=e;return b.jsxDEV(Je,{children:[b.jsxDEV(tt,{headline:t,tagline:r,description:a,linkText:o,linkHref:n},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:11,columnNumber:7},globalThis),b.jsxDEV("div",{className:"zep-w-full zep-relative zep-max-w-[1436px] zep-mx-auto zep-mt-2 md:zep-mt-5",children:[b.jsxDEV(ya,{url:d,thumbnail:f},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:20,columnNumber:9},globalThis),b.jsxDEV("p",{className:"zep-text-typography-dark-100 zep-mt-0.5 md:zep-mt-1 zep-typography-supportText",children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:21,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:19,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/video/Video.tsx",lineNumber:10,columnNumber:5},globalThis)};try{Q.displayName="Video",Q.__docgenInfo={description:"",displayName:"Video",props:{video:{defaultValue:null,description:"",name:"video",required:!0,type:{name:"SingleVideo"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ma={title:"Patterns/Video",component:Q,tags:["autodocs"],argTypes:{}},I={args:{video:{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",videoDetails:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}}};var de,fe,ye;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    video: {
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      videoDetails: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
    }
  }
}`,...(ye=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const ha=["Default"],Ta=Object.freeze(Object.defineProperty({__proto__:null,Default:I,__namedExportsOrder:ha,default:ma},Symbol.toStringTag,{value:"Module"}));export{Ta as V,Jt as p,V as u};
