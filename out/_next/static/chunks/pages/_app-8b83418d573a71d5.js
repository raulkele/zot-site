(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1058:function(e,t,r){"use strict";t.Z=void 0;var n=u(r(5152)),o=u(r(5675)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294));function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e,t){var r=function(e){var t,r=e.filePath,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(n).shift(),i=r.split(".").pop();return{path:o,filename:n.substring(0,n.lastIndexOf("."))||n,extension:i||""}}({filePath:e}),n=r.filename,o=r.path,i=r.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(i.toUpperCase()))return e;var a=i;["JPG","JPEG","PNG"].includes(i.toUpperCase())&&(a="WEBP");var l=o;return"/"!=(null===l||void 0===l?void 0:l.substr(-1))&&(l+="/"),"".concat(l,"nextImageExportOptimizer/").concat(n,"-opt-").concat(t,".").concat(a.toUpperCase())},p=function(e){var t=e.src,r=e.width;return d(t,r)},h=function(e){return e.src};function m(e){var t=e.src,r=e.priority,n=void 0!==r&&r,a=e.loading,u=e.lazyRoot,c=void 0===u?null:u,m=e.lazyBoundary,y=void 0===m?"200px":m,b=e.className,g=e.quality,v=e.width,j=e.height,w=e.objectFit,x=e.objectPosition,_=e.onLoadingComplete,O=e.placeholder,S=void 0===O?"blur":O,k=e.blurDataURL,P=s(e,["src","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),E=f(i.useState(!1),2),A=E[0],z=E[1],N=i.useMemo((function(){return k||d(t,10)}),[k,t]);return i.default.createElement(o.default,l({},P,v&&{width:v},j&&{height:j},n&&{priority:n},a&&{loading:a},c&&{lazyRoot:c},y&&{lazyBoundary:y},b&&{className:b},g&&{quality:g},w&&{objectFit:w},x&&{objectPosition:x},_&&{onLoadingComplete:_},S&&{placeholder:S},{loader:A?h:p,blurDataURL:N,src:t,onError:function(){z(!0)}}))}var y=n.default((function(){return Promise.resolve(m)}),{ssr:!1});t.Z=y},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1930)}])},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,u=e.priority,c=void 0!==u&&u,m=e.loading,y=e.lazyRoot,x=void 0===y?null:y,P=e.lazyBoundary,A=void 0===P?"200px":P,z=e.className,N=e.quality,C=e.width,L=e.height,I=e.style,M=e.objectFit,R=e.objectPosition,D=e.onLoadingComplete,T=e.placeholder,q=void 0===T?"empty":T,U=e.blurDataURL,V=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),B=s.useContext(h.ImageConfigContext),W=s.useMemo((function(){var e=v||B||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return b({},e,{allSizes:t,deviceSizes:r})}),[B]),F=V,G=r?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var H=k;if("loader"in F){if(F.loader){var Z=F.loader;H=function(e){e.config;var t=g(e,["config"]);return Z(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var K=_(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(U=U||K.blurDataURL,J=K.src,(!G||"fill"!==G)&&(L=L||K.height,C=C||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}t="string"===typeof t?t:J;var X=S(C),$=S(L),Q=S(N),Y=!c&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);j.has(t)&&(Y=!1);var ee,te=i(s.useState(!1),2),re=te[0],ne=te[1],oe=i(p.useIntersection({rootRef:x,rootMargin:A,disabled:!Y}),3),ie=oe[0],ae=oe[1],le=oe[2],ue=!Y||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:R};0;0;var pe=Object.assign({},I,"raw"===G?{}:de),he="blur"!==q||re?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:R||"0% 0%"};if("fill"===G)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof $){var me=$/X,ye=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ce.display="block",ce.position="relative",fe=!0,se.paddingTop=ye):"intrinsic"===G?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===G&&(ce.display="inline-block",ce.position="relative",ce.width=X,ce.height=$)}else 0;var be={src:w,srcSet:void 0,sizes:void 0};ue&&(be=O({config:W,src:t,unoptimized:l,layout:G,width:X,quality:Q,sizes:r,loader:H}));var ge=t;0;var ve;0;var je=(o(ve={},"imagesrcset",be.srcSet),o(ve,"imagesizes",be.sizes),ve),we=s.default.useLayoutEffect,xe=s.useRef(D),_e=s.useRef(t);s.useEffect((function(){xe.current=D}),[D]),we((function(){_e.current!==t&&(le(),_e.current=t)}),[le,t]);var Oe=b({isLazy:Y,imgAttributes:be,heightInt:$,widthInt:X,qualityInt:Q,layout:G,className:z,imgStyle:pe,blurStyle:he,loading:m,config:W,unoptimized:l,placeholder:q,loader:H,srcString:ge,onLoadingCompleteRef:xe,setBlurComplete:ne,setIntersection:ie,isVisible:ue},F);return s.default.createElement(s.default.Fragment,null,"raw"===G?s.default.createElement(E,Object.assign({},Oe)):s.default.createElement("span",{style:ce},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(E,Object.assign({},Oe))),c?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},je))):null)};var u,c,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),f=(u=r(3121))&&u.__esModule?u:{default:u},d=r(139),p=r(9246),h=r(8730),m=(r(670),r(2700));function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},j=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t.path).concat(A(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(A(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(A(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function O(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.layout,i=e.width,l=e.quality,u=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var o=e.deviceSizes,i=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(n);l)c.push(parseInt(l[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,a(c));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,u),f=s.widths,d=s.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,n){return"".concat(c({config:t,src:r,quality:l,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({config:t,src:r,quality:l,width:f[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=x.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(r))}function P(e,t,r,n,o,i){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(j.add(t),"blur"===n&&i(!0),null===o||void 0===o?void 0:o.current)){var r=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:r,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,o=e.qualityInt,i=e.layout,a=e.className,l=e.imgStyle,u=e.blurStyle,c=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,h=e.config,m=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,j=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,_=e.onError,S=(e.isVisible,g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,"raw"===i?{height:r,width:n}:{},{decoding:"async","data-nimg":i,className:a,style:b({},l,u),ref:s.useCallback((function(e){w(e),(null===e||void 0===e?void 0:e.complete)&&P(e,p,0,f,v,j)}),[w,p,i,f,v,j]),onLoad:function(e){P(e.currentTarget,p,0,f,v,j),x&&x(e)},onError:function(e){"blur"===f&&j(!0),_&&_(e)}})),(c||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,O({config:h,src:p,unoptimized:m,layout:i,width:n,quality:o,sizes:t.sizes,loader:y}),"raw"===i?{height:r,width:n}:{},{decoding:"async","data-nimg":i,style:l,className:a,loading:d||"lazy"}))))};function A(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(1003),u=r(880),c=r(9246);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,i=void 0===n?!0!==Boolean(!1):n,p=e.href,h=e.as,m=e.children,y=e.prefetch,b=e.passHref,g=e.replace,v=e.shallow,j=e.scroll,w=e.locale,x=e.onClick,_=e.onMouseEnter,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,i&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var S,k=!1!==y,P=u.useRouter(),E=a.default.useMemo((function(){var e=o(l.resolveHref(P,p,!0),2),t=e[0],r=e[1];return{href:t,as:h?l.resolveHref(P,h):r||t}}),[P,p,h]),A=E.href,z=E.as,N=a.default.useRef(A),C=a.default.useRef(z);i&&(S=a.default.Children.only(r));var L=i?S&&"object"===typeof S&&S.ref:t,I=o(c.useIntersection({rootMargin:"200px"}),3),M=I[0],R=I[1],D=I[2],T=a.default.useCallback((function(e){C.current===z&&N.current===A||(D(),C.current=z,N.current=A),M(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[z,L,A,D,M]);a.default.useEffect((function(){var e=R&&k&&l.isLocalURL(A),t="undefined"!==typeof w?w:P&&P.locale,r=f[A+"%"+z+(t?"%"+t:"")];e&&!r&&d(P,A,z,{locale:t})}),[z,A,R,w,k,P]);var q={ref:T,onClick:function(e){i||"function"!==typeof x||x(e),i&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:a}))}(e,P,A,z,g,v,j,w)},onMouseEnter:function(e){i||"function"!==typeof _||_(e),i&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(A)&&d(P,A,z,{priority:!0})}};if(!i||b||"a"===S.type&&!("href"in S.props)){var U="undefined"!==typeof w?w:P&&P.locale,V=P&&P.isLocaleDomain&&l.getDomainLocale(z,U,P&&P.locales,P&&P.domainLocales);q.href=V||l.addBasePath(l.addLocale(z,U,P&&P.defaultLocale))}return i?a.default.cloneElement(S,q):a.default.createElement("a",Object.assign({},O,q),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],h=o(i.useState(t?t.current:null),2),m=h[0],y=h[1],b=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),g=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&y(t.current)}),[t]),[b,d,g]};var i=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](a):a instanceof u)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o({},n,e));var a,u;var c=n=o({},n,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return r(c);n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)},t.noSSR=l;a(r(7294));var i=a(r(4588));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},u=r(2021),c=r(3644);var s=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var h=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,o;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),o&&n(t,o),e}();function m(e){return function(e,t){var r=function(){if(!o){var t=new h(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var o=null;if(!d&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&f.push((function(e){var t=!0,n=!1,o=void 0;try{for(var i,l=a[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return r()}}catch(c){n=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw o}}}))}var s=n.suspense?function(e,t){return l.default.createElement(n.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=l.default.useContext(c.LoadableContext),a=u.useSubscription(o);return l.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return s.preload=function(){return!n.suspense&&r()},s.displayName="LoadableComponent",l.default.forwardRef(s)}(p,e)}function y(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};y(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},1930:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),o=r(7294),i=r(9008),a=r.n(i),l="zot Registry",u=function(e){var t=e.title,r=e.keywords,o=e.description;return(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"keywords",content:r}),(0,n.jsx)("meta",{name:"description",content:o}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("title",{children:l===t?l:"".concat(l," | ").concat(t)})]})};u.defaultProps={title:l,keywords:"zot, project-zot, images, registry, container",description:"zot image registry"};var c=u,s=r(1664),f=r.n(s),d=r(4412),p=r.n(d),h=function(e){var t=e.visibleMobileNav,r=e.setVisibleMobileNav,i=(0,o.useState)([p().hamburgermenuicon]),a=i[0],l=i[1];return(0,o.useEffect)((function(){l(t?[p().hamburgermenuicon,p().isactive]:[p().hamburgermenuicon])}),[t]),(0,n.jsx)("button",{className:p().hamburgermenu,onClick:function(){return r(!t)},children:(0,n.jsxs)("div",{className:a.join(" "),children:[(0,n.jsx)("span",{className:p().hamburgermenuline}),(0,n.jsx)("span",{className:p().hamburgermenuline}),(0,n.jsx)("span",{className:p().hamburgermenuline})]})})},m=r(1058),y=function(e){var t=e.setVisibleMobileNav;return(0,n.jsx)("div",{className:p().mobilenav,children:(0,n.jsx)("div",{className:p().stack,children:(0,n.jsx)("div",{className:p().stackitem,children:(0,n.jsx)(f(),{href:"https://raulkele.github.io/project-zot-docs/",children:(0,n.jsx)("a",{onClick:function(){return t(!1)},children:"Docs"})})})})})},b=function(e){var t=e.visibleMobileNav,r=e.setVisibleMobileNav,i=(0,o.useState)([p().nav]),a=i[0],l=i[1];return(0,o.useEffect)((function(){l(t?[p().nav]:[p().nav,p().shadow])}),[t]),(0,n.jsxs)("nav",{className:a.join(" "),children:[(0,n.jsx)(h,{visibleMobileNav:t,setVisibleMobileNav:r}),(0,n.jsx)("div",{className:p().clogo,children:(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)(m.Z,{src:"images/zot-logo-color.png",alt:"zot Logo",width:50,height:50})})}),(0,n.jsx)("div",{className:p().list,children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://raulkele.github.io/project-zot-docs/",children:"Docs"})})})})]})},g=function(){return(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://twitter.com/Cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:"images/twitter.svg",alt:"Twitter Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.facebook.com/Cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:"images/facebook.svg",alt:"Facebook Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.instagram.com/cisco/",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:"images/instagram.svg",alt:"Instagram Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.linkedin.com/company/cisco",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:"images/linkedin.svg",alt:"LinkedIn Logo",width:40,height:20})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"https://www.youtube.com/user/cisco",children:(0,n.jsx)("a",{children:(0,n.jsx)(m.Z,{src:"images/youtube.svg",alt:"YouTube Logo",width:40,height:20})})})})]})})},v=r(4669),j=r.n(v),w=function(){return(0,n.jsx)("div",{className:j().legal,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/",children:"Terms & conditions"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/discover",children:"Privacy statement"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/docs",children:"Cookies"})}),(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:"/docs",children:"Trademarks"})})]})})},x=function(){return(0,n.jsxs)("footer",{className:j().footer,children:[(0,n.jsx)(g,{}),(0,n.jsx)(m.Z,{src:"images/cisco.svg",alt:"Cisco Logo",width:80,height:30}),(0,n.jsx)(w,{})]})},_=function(e){var t,r=e.children,i=(0,o.useState)(!1),a=i[0],l=i[1],u=null===r||void 0===r||null===(t=r.type)||void 0===t?void 0:t.name;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{title:u}),(0,n.jsx)(b,{visibleMobileNav:a,setVisibleMobileNav:l}),(0,n.jsx)("div",{className:j().container,children:(0,n.jsx)("main",{className:j().main,children:a?(0,n.jsx)(y,{setVisibleMobileNav:l}):r})}),!a&&(0,n.jsx)(x,{})]})};r(7039);function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}var k=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(_,{children:(0,n.jsx)(t,S({},r))})}},4669:function(e){e.exports={container:"Layout_container__z4qWC",main:"Layout_main__fbfOy",footer:"Layout_footer__bKkxe",legal:"Layout_legal__UsXqL",code:"Layout_code__uOPzk"}},4412:function(e){e.exports={mobilenav:"Nav_mobilenav__zK5_0",stack:"Nav_stack__cpURs",stackitem:"Nav_stackitem__fzcuQ",shadow:"Nav_shadow__5VICd",nav:"Nav_nav__bbBcN",clogo:"Nav_clogo__hoZsz",hamburgermenu:"Nav_hamburgermenu__0Gr9H",list:"Nav_list__zhAAo",hamburgermenuicon:"Nav_hamburgermenuicon__trhec",isactive:"Nav_isactive__v_66B",hamburgermenuline:"Nav_hamburgermenuline__Hl1p0"}},7039:function(){},2021:function(e,t,r){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,l,u=o(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))r.call(a,s)&&(u[s]=a[s]);if(t){l=t(a);for(var f=0;f<l.length;f++)n.call(a,l[f])&&(u[l[f]]=a[l[f]])}}return u}},569:function(e,t,r){0},403:function(e,t,r){var n=r(800),o=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,i=o.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=i[0];var a=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===r||(i=t(),a({getCurrentValue:t,subscribe:r,value:i})),o.useDebugValue(i),o.useEffect((function(){function e(){if(!o){var e=t();a((function(o){return o.getCurrentValue!==t||o.subscribe!==r||o.value===e?o:n({},o,{value:e})}))}}var o=!1,i=r(e);return e(),function(){o=!0,i()}}),[t,r]),i}},138:function(e,t,r){e.exports=r(403)},522:function(e){e.exports=r(7294)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,o),a=!1}finally{a&&delete n[e]}return i.exports}o.ab="//";var i=o(138);e.exports=i}()},5152:function(e,t,r){e.exports=r(7645)},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);