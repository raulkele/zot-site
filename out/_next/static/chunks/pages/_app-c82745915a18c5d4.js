(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1058:function(e,t,r){"use strict";t.Z=void 0;var n=c(r(5152)),i=c(r(5675)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(7294));function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e,t){var r=function(e){var t,r=e.filePath,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop();return{path:i,filename:n.substring(0,n.lastIndexOf("."))||n,extension:o||""}}({filePath:e}),n=r.filename,i=r.path,o=r.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(o.toUpperCase()))return e;var a=o;["JPG","JPEG","PNG"].includes(o.toUpperCase())&&(a="WEBP");var l=i;return"/"!=(null===l||void 0===l?void 0:l.substr(-1))&&(l+="/"),"".concat(l,"nextImageExportOptimizer/").concat(n,"-opt-").concat(t,".").concat(a.toUpperCase())},h=function(e){var t=e.src,r=e.width;return d(t,r)},p=function(e){return e.src};function m(e){var t=e.src,r=e.priority,n=void 0!==r&&r,a=e.loading,c=e.lazyRoot,u=void 0===c?null:c,m=e.lazyBoundary,g=void 0===m?"200px":m,b=e.className,y=e.quality,v=e.width,A=e.height,j=e.objectFit,w=e.objectPosition,x=e.onLoadingComplete,O=e.placeholder,_=void 0===O?"blur":O,E=e.blurDataURL,S=s(e,["src","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),k=f(o.useState(!1),2),z=k[0],P=k[1],C=o.useMemo((function(){return E||d(t,10)}),[E,t]);return o.default.createElement(i.default,l({},S,v&&{width:v},A&&{height:A},n&&{priority:n},a&&{loading:a},u&&{lazyRoot:u},g&&{lazyBoundary:g},b&&{className:b},y&&{quality:y},j&&{objectFit:j},w&&{objectPosition:w},x&&{onLoadingComplete:x},_&&{placeholder:_},{loader:z?p:h,blurDataURL:C,src:t,onError:function(){P(!0)}}))}var g=n.default((function(){return Promise.resolve(m)}),{ssr:!1});t.Z=g},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1930)}])},7020:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/cisco.9009b6ce.svg",height:266,width:502}},9040:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/facebook.bae92644.svg",height:24,width:24}},2548:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/instagram.b40d5dea.svg",height:24,width:24}},7736:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/linkedin.a0ef48ed.svg",height:24,width:24}},7720:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/twitter.6dbddcd3.svg",height:24,width:24}},5008:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/user-profile.9e156bc6.png",height:225,width:225,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUBAQH+/v57e3uEhIQMDAzj4+NlZWVtbW309PQoKCgcHBxgyJrYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImR3GQRLAMAgDsXUMhPz/w51aJwE1U/yudBNLTkaa5O0+oE7vtotWND7hDxW8AKaYqt1IAAAAAElFTkSuQmCC"}},1672:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/youtube.89f635c9.svg",height:24,width:24}},6877:function(e,t,r){"use strict";r.r(t),t.default={src:"/zot-site/_next/static/media/zot-logo.0c4072be.jpg",height:60,width:64,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADETEFBhPw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALo39ls7YLErsHHJb5eTIApTRfO8/azERA//2Q=="}},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,c=e.priority,u=void 0!==c&&c,m=e.loading,g=e.lazyRoot,w=void 0===g?null:g,S=e.lazyBoundary,z=void 0===S?"200px":S,P=e.className,C=e.quality,N=e.width,I=e.height,L=e.style,M=e.objectFit,R=e.objectPosition,D=e.onLoadingComplete,B=e.placeholder,T=void 0===B?"empty":B,U=e.blurDataURL,V=y(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=s.useContext(p.ImageConfigContext),Q=s.useMemo((function(){var e=v||q||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return b({},e,{allSizes:t,deviceSizes:r})}),[q]),W=V,F=r?"responsive":"intrinsic";"layout"in W&&(W.layout&&(F=W.layout),delete W.layout);var H=E;if("loader"in W){if(W.loader){var G=W.loader;H=function(e){e.config;var t=y(e,["config"]);return G(t)}}delete W.loader}var Z="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var J=x(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(U=U||J.blurDataURL,Z=J.src,(!F||"fill"!==F)&&(I=I||J.height,N=N||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:Z;var K=_(N),X=_(I),Y=_(C),$=!u&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,$=!1);A.has(t)&&($=!1);var ee,te=o(s.useState(!1),2),re=te[0],ne=te[1],ie=o(h.useIntersection({rootRef:w,rootMargin:z,disabled:!$}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!$||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:R};0;0;var he=Object.assign({},L,"raw"===F?{}:de),pe="blur"!==T||re?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:R||"0% 0%"};if("fill"===F)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var me=X/K,ge=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===F?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=ge):"intrinsic"===F?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===F&&(ue.display="inline-block",ue.position="relative",ue.width=K,ue.height=X)}else 0;var be={src:j,srcSet:void 0,sizes:void 0};ce&&(be=O({config:Q,src:t,unoptimized:l,layout:F,width:K,quality:Y,sizes:r,loader:H}));var ye=t;0;var ve;0;var Ae=(i(ve={},"imagesrcset",be.srcSet),i(ve,"imagesizes",be.sizes),ve),je=s.default.useLayoutEffect,we=s.useRef(D),xe=s.useRef(t);s.useEffect((function(){we.current=D}),[D]),je((function(){xe.current!==t&&(le(),xe.current=t)}),[le,t]);var Oe=b({isLazy:$,imgAttributes:be,heightInt:X,widthInt:K,qualityInt:Y,layout:F,className:P,imgStyle:he,blurStyle:pe,loading:m,config:Q,unoptimized:l,placeholder:T,loader:H,srcString:ye,onLoadingCompleteRef:we,setBlurComplete:ne,setIntersection:oe,isVisible:ce},W);return s.default.createElement(s.default.Fragment,null,"raw"===F?s.default.createElement(k,Object.assign({},Oe)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(k,Object.assign({},Oe))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},Ae))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),f=(c=r(3121))&&c.__esModule?c:{default:c},d=r(139),h=r(9246),p=r(8730),m=(r(670),r(2700));function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){g(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function y(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},A=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(z(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(z(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(z(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function O(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(n);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),f=s.widths,d=s.kind,h=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,n){return"".concat(u({config:t,src:r,quality:l,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({config:t,src:r,quality:l,width:f[h]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=w.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(r))}function S(e,t,r,n,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(A.add(t),"blur"===n&&o(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,h=e.srcString,p=e.config,m=e.unoptimized,g=e.loader,v=e.onLoadingCompleteRef,A=e.setBlurComplete,j=e.setIntersection,w=e.onLoad,x=e.onError,_=(e.isVisible,y(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},_,t,"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,className:a,style:b({},l,c),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&S(e,h,0,f,v,A)}),[j,h,o,f,v,A]),onLoad:function(e){S(e.currentTarget,h,0,f,v,A),w&&w(e)},onError:function(e){"blur"===f&&A(!0),x&&x(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},_,O({config:p,src:h,unoptimized:m,layout:o,width:n,quality:i,sizes:t.sizes,loader:g}),"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:d||"lazy"}))))};function z(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(1003),c=r(880),u=r(9246);function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(i?"%"+i:"")]=!0}}var h=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,o=void 0===n?!0!==Boolean(!1):n,h=e.href,p=e.as,m=e.children,g=e.prefetch,b=e.passHref,y=e.replace,v=e.shallow,A=e.scroll,j=e.locale,w=e.onClick,x=e.onMouseEnter,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,o&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var _,E=!1!==g,S=c.useRouter(),k=a.default.useMemo((function(){var e=i(l.resolveHref(S,h,!0),2),t=e[0],r=e[1];return{href:t,as:p?l.resolveHref(S,p):r||t}}),[S,h,p]),z=k.href,P=k.as,C=a.default.useRef(z),N=a.default.useRef(P);o&&(_=a.default.Children.only(r));var I=o?_&&"object"===typeof _&&_.ref:t,L=i(u.useIntersection({rootMargin:"200px"}),3),M=L[0],R=L[1],D=L[2],B=a.default.useCallback((function(e){N.current===P&&C.current===z||(D(),N.current=P,C.current=z),M(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[P,I,z,D,M]);a.default.useEffect((function(){var e=R&&E&&l.isLocalURL(z),t="undefined"!==typeof j?j:S&&S.locale,r=f[z+"%"+P+(t?"%"+t:"")];e&&!r&&d(S,z,P,{locale:t})}),[P,z,R,j,E,S]);var T={ref:B,onClick:function(e){o||"function"!==typeof w||w(e),o&&_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}))}(e,S,z,P,y,v,A,j)},onMouseEnter:function(e){o||"function"!==typeof x||x(e),o&&_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l.isLocalURL(z)&&d(S,z,P,{priority:!0})}};if(!o||b||"a"===_.type&&!("href"in _.props)){var U="undefined"!==typeof j?j:S&&S.locale,V=S&&S.isLocaleDomain&&l.getDomainLocale(P,U,S&&S.locales,S&&S.domainLocales);T.href=V||l.addBasePath(l.addLocale(P,U,S&&S.defaultLocale))}return o?a.default.cloneElement(_,T):a.default.createElement("a",Object.assign({},O,T),r)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),m=p[0],g=p[1],b=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),y=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&g(t.current)}),[t]),[b,d,y]};var o=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,c=Promise,(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](a):a instanceof c)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i({},n,e));var a,c;var u=n=i({},n,t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return r(u);n.loadableGenerated&&delete(n=i({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)},t.noSSR=l;a(r(7294));var o=a(r(4588));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=i},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},c=r(2021),u=r(3644);var s=[],f=[],d=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,i;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),i&&n(t,i),e}();function m(e){return function(e,t){var r=function(){if(!i){var t=new p(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var i=null;if(!d&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&f.push((function(e){var t=!0,n=!1,i=void 0;try{for(var o,l=a[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var c=o.value;if(-1!==e.indexOf(c))return r()}}catch(u){n=!0,i=u}finally{try{t||null==l.return||l.return()}finally{if(n)throw i}}}))}var s=n.suspense?function(e,t){return l.default.createElement(n.lazy,o({},e,{ref:t}))}:function(e,t){r();var o=l.default.useContext(u.LoadableContext),a=c.useSubscription(i);return l.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return s.preload=function(){return!n.suspense&&r()},s.displayName="LoadableComponent",l.default.forwardRef(s)}(h,e)}function g(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return g(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){g(s).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};g(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},1930:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(5893),i=r(7294),o=r(9008),a=r.n(o),l="Zot Registry",c=function(e){var t=e.title,r=e.keywords,i=e.description;return(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"keywords",content:r}),(0,n.jsx)("meta",{name:"description",content:i}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("title",{children:l===t?l:"".concat(l," | ").concat(t)})]})};c.defaultProps={title:l,keywords:"zot, project-zot, images, registry, container",description:"Zot image registry"};var u=c,s=r(1664),f=r.n(s),d=r(4412),h=r.n(d),p=function(e){var t=e.visibleMobileNav,r=e.setVisibleMobileNav,o=(0,i.useState)([h().hamburgermenuicon]),a=o[0],l=o[1];return(0,i.useEffect)((function(){l(t?[h().hamburgermenuicon,h().isactive]:[h().hamburgermenuicon])}),[t]),(0,n.jsx)("button",{className:h().hamburgermenu,onClick:function(){return r(!t)},children:(0,n.jsxs)("div",{className:a.join(" "),children:[(0,n.jsx)("span",{className:h().hamburgermenuline}),(0,n.jsx)("span",{className:h().hamburgermenuline}),(0,n.jsx)("span",{className:h().hamburgermenuline})]})})},m=r(1058),g=function(e){var t=e.setVisibleMobileNav,r=function(){return t(!1)};return(0,n.jsx)("div",{className:h().mobilenav,children:(0,n.jsxs)("div",{className:h().stack,children:[(0,n.jsx)("div",{className:h().stackitem,children:(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)("a",{onClick:r,children:"Product"})})}),(0,n.jsx)("div",{className:h().stackitem,children:(0,n.jsx)(f(),{href:"/discover",children:(0,n.jsx)("a",{onClick:r,children:"Design"})})}),(0,n.jsx)("div",{className:h().stackitem,children:(0,n.jsx)(f(),{href:"#",children:(0,n.jsx)("a",{onClick:r,children:"Docs"})})}),(0,n.jsx)("div",{className:h().stackitem,children:(0,n.jsx)(f(),{href:"/develop",children:(0,n.jsx)("a",{onClick:r,children:"Community"})})}),(0,n.jsx)("div",{className:h().stackitem,children:(0,n.jsx)(f(),{href:"/docs",children:(0,n.jsx)("a",{onClick:r,children:"Blog"})})})]})})},b=function(e){var t=e.visibleMobileNav,o=e.setVisibleMobileNav,a=(0,i.useState)([h().nav]),l=a[0],c=a[1];return(0,i.useEffect)((function(){c(t?[h().nav]:[h().nav,h().shadow])}),[t]),(0,n.jsxs)("nav",{className:l.join(" "),children:[(0,n.jsx)(p,{visibleMobileNav:t,setVisibleMobileNav:o}),(0,n.jsx)("div",{className:h().clogo,children:(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(m.Z,{src:r(6877),alt:"Cisco Logo",width:64,height:60})})}),(0,n.jsx)("div",{className:h().list,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/",children:"Product"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/discover",children:"Design"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"#",children:"Docs"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/develop",children:"Community"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/develop",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(m.Z,{src:r(5008),alt:"User profile icon",width:30,height:30})})})]})})]})},y=function(){return(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://twitter.com/Cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:r(7720),alt:"Twitter Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.facebook.com/Cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:r(9040),alt:"Facebook Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.instagram.com/cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:r(2548),alt:"Instagram Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.linkedin.com/company/cisco",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:r(7736),alt:"LinkedIn Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.youtube.com/user/cisco",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:r(1672),alt:"YouTube Logo",width:40,height:20})})})})]})})},v=r(4669),A=r.n(v),j=function(){return(0,n.jsx)("div",{className:A().legal,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/",children:"Terms & conditions"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/discover",children:"Privacy statement"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/docs",children:"Cookies"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/docs",children:"Trademarks"})})]})})},w=function(){return(0,n.jsxs)("footer",{className:A().footer,children:[(0,n.jsx)(y,{}),(0,n.jsx)(m.Z,{src:r(7020),alt:"Cisco Logo",width:80,height:30}),(0,n.jsx)(j,{})]})},x=function(e){var t,r=e.children,o=(0,i.useState)(!1),a=o[0],l=o[1],c=null===r||void 0===r||null===(t=r.type)||void 0===t?void 0:t.name;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{title:c}),(0,n.jsx)(b,{visibleMobileNav:a,setVisibleMobileNav:l}),(0,n.jsx)("div",{className:A().container,children:(0,n.jsx)("main",{className:A().main,children:a?(0,n.jsx)(g,{setVisibleMobileNav:l}):r})}),!a&&(0,n.jsx)(w,{})]})};r(7039);function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}var E=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(x,{children:(0,n.jsx)(t,_({},r))})}},4669:function(e){e.exports={container:"Layout_container__z4qWC",main:"Layout_main__fbfOy",footer:"Layout_footer__bKkxe",legal:"Layout_legal__UsXqL",code:"Layout_code__uOPzk"}},4412:function(e){e.exports={mobilenav:"Nav_mobilenav__zK5_0",stack:"Nav_stack__cpURs",stackitem:"Nav_stackitem__fzcuQ",shadow:"Nav_shadow__5VICd",nav:"Nav_nav__bbBcN",clogo:"Nav_clogo__hoZsz",hamburgermenu:"Nav_hamburgermenu__0Gr9H",list:"Nav_list__zhAAo",hamburgermenuicon:"Nav_hamburgermenuicon__trhec",isactive:"Nav_isactive__v_66B",hamburgermenuline:"Nav_hamburgermenuline__Hl1p0"}},7039:function(){},2021:function(e,t,r){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,l,c=i(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))r.call(a,s)&&(c[s]=a[s]);if(t){l=t(a);for(var f=0;f<l.length;f++)n.call(a,l[f])&&(c[l[f]]=a[l[f]])}}return c}},569:function(e,t,r){0},403:function(e,t,r){var n=r(800),i=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,o=i.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=o[0];var a=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===r||(o=t(),a({getCurrentValue:t,subscribe:r,value:o})),i.useDebugValue(o),i.useEffect((function(){function e(){if(!i){var e=t();a((function(i){return i.getCurrentValue!==t||i.subscribe!==r||i.value===e?i:n({},i,{value:e})}))}}var i=!1,o=r(e);return e(),function(){i=!0,o()}}),[t,r]),o}},138:function(e,t,r){e.exports=r(403)},522:function(e){e.exports=r(7294)}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete n[e]}return o.exports}i.ab="//";var o=i(138);e.exports=o}()},5152:function(e,t,r){e.exports=r(7645)},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);