(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8342:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7601)}])},657:function(e,t,n){"use strict";n.d(t,{O:function(){return f},b:function(){return p}});var o=n(1527),a=n(6803),s=n.n(a),r=n(8416),i=n(959),c=n(5039),l=n(8187),u=n(5371);const d=(0,i.createContext)({darkMode:!0,setDarkMode:()=>{}});function f(e){let{children:t}=e;const[a,f]=(0,i.useState)(!0),p=(0,i.useRef)(null),{query:{devMode:m}}=(0,r.useRouter)();let g={darkMode:a,setDarkMode:f};var h;const v=m?(0,o.jsxs)("div",{className:"mb-1 mr-2 text-right text-sm opacity-60 dark:opacity-20 flex flex-col",children:[(0,o.jsx)(s(),{target:"_blank",href:"https://github.com/DerTyp7214/Portfoio/commit/".concat("6c7fc508df8f434304d00566381b9fc15fba8ab2"),children:(0,u.E)(new Date)}),(0,o.jsxs)("p",{children:[n(4147).i8," (",(0,o.jsx)(s(),{target:"_blank",className:"underline p-1",href:"https://github.com/DerTyp7214/Portfoio/actions/runs/".concat("3789488273"),children:null!==(h="3789488273")?h:"actions"}),")"]})]}):null;var y,b;return(0,o.jsxs)("div",{className:a?"dark":"",children:[(0,o.jsxs)("div",{ref:p,className:"h-screen bg-background dark:bg-backgroundDark text-black dark:text-white overflow-y-scroll scroll-smooth overflow-x-hidden z-0 customScroll selection:bg-accent/40 dark:selection:bg-accentDark/40 selection:text-black/90",style:{backgroundPositionX:"50%",backgroundImage:a?"url(/assets/pattern-dark.svg)":"url(/assets/pattern.svg)"},onScroll:e=>{const t=e.currentTarget,n=t.scrollTop;t.style.backgroundPositionY=.04*-n+"px"},children:[(0,o.jsx)(d.Provider,{value:g,children:t}),(0,o.jsx)("div",{className:"absolute bottom-0 right-1 hidden lg:block",children:v}),(0,o.jsx)("div",{className:"block lg:hidden",children:v})]}),(0,o.jsx)("div",{id:"modal-root",className:"text-black dark:text-white selection:bg-accent/40 dark:selection:bg-accentDark/40 selection:text-black/90"}),(0,o.jsx)(c.Ix,{position:"bottom-right",autoClose:5e3,progressStyle:{background:a?"#FFB166":"#994B00"},toastStyle:{background:"".concat((0,l.Py)(null!==(y=a?"#353133":"#CECACC")&&void 0!==y?y:"#1e1e1e",null!==(b=a?"#66B4FF":"#004E99")&&void 0!==b?b:"#FFFFFF",.1),"80"),borderRadius:"1rem",paddingRight:"10px",backdropFilter:"blur(20px)"},toastClassName:"transition-all duration-200 m-2",hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0,closeButton:!1,bodyClassName:"text-black dark:text-white",theme:a?"dark":"light"})]})}function p(){return(0,i.useContext)(d)}},5062:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3734:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(7022).Z,a=n(5997).Z,s=o(n(959)),r=n(8700),i=n(877),c=n(8040),l=n(3833),u=n(7846),d=n(3042),f=n(5062),p=n(3581);const m=new Set;function g(e,t,n,o){if(r.isLocalURL(t)){if(!o.bypassPrefetchedCheck){const a=t+"%"+n+"%"+("undefined"!==typeof o.locale?o.locale:"locale"in e?e.locale:void 0);if(m.has(a))return;m.add(a)}Promise.resolve(e.prefetch(t,n,o)).catch((e=>{0}))}}function h(e){return"string"===typeof e?e:i.formatUrl(e)}var v=s.default.forwardRef((function(e,t){let n;const{href:o,as:i,children:m,prefetch:v,passHref:y,replace:b,shallow:E,scroll:x,locale:T,onClick:C,onMouseEnter:k,onTouchStart:_,legacyBehavior:j=!0!==Boolean(!0)}=e,I=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!j||"string"!==typeof n&&"number"!==typeof n||(n=s.default.createElement("a",null,n));const w=!1!==v,O=s.default.useContext(l.RouterContext),L=s.default.useContext(u.AppRouterContext),N=null!=O?O:L,M=!O,{href:R,as:P}=s.default.useMemo((()=>{if(!O){const e=h(o);return{href:e,as:i?h(i):e}}const[e,t]=r.resolveHref(O,o,!0);return{href:e,as:i?r.resolveHref(O,i):t||e}}),[O,o,i]),D=s.default.useRef(R),F=s.default.useRef(P);let B;if(j)B=s.default.Children.only(n);else;const S=j?B&&"object"===typeof B&&B.ref:t,[A,$,z]=d.useIntersection({rootMargin:"200px"}),H=s.default.useCallback((e=>{F.current===P&&D.current===R||(z(),F.current=P,D.current=R),A(e),S&&("function"===typeof S?S(e):"object"===typeof S&&(S.current=e))}),[P,S,R,z,A]);s.default.useEffect((()=>{N&&$&&w&&g(N,R,P,{locale:T})}),[P,R,$,T,w,null==O?void 0:O.locale,N]);const U={ref:H,onClick:e=>{j||"function"!==typeof C||C(e),j&&B.props&&"function"===typeof B.props.onClick&&B.props.onClick(e),N&&(e.defaultPrevented||function(e,t,n,o,a,i,c,l,u,d){const{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!r.isLocalURL(n)))return;e.preventDefault();const p=()=>{"beforePopState"in t?t[a?"replace":"push"](n,o,{shallow:i,locale:l,scroll:c}):t[a?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};u?s.default.startTransition(p):p()}(e,N,R,P,b,E,x,T,M,w))},onMouseEnter:e=>{j||"function"!==typeof k||k(e),j&&B.props&&"function"===typeof B.props.onMouseEnter&&B.props.onMouseEnter(e),N&&(!w&&M||g(N,R,P,{locale:T,priority:!0,bypassPrefetchedCheck:!0}))},onTouchStart:e=>{j||"function"!==typeof _||_(e),j&&B.props&&"function"===typeof B.props.onTouchStart&&B.props.onTouchStart(e),N&&(!w&&M||g(N,R,P,{locale:T,priority:!0,bypassPrefetchedCheck:!0}))}};if(!j||y||"a"===B.type&&!("href"in B.props)){const e="undefined"!==typeof T?T:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&f.getDomainLocale(P,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);U.href=t||p.addBasePath(c.addLocale(P,e,null==O?void 0:O.defaultLocale))}return j?s.default.cloneElement(B,U):s.default.createElement("a",Object.assign({},I,U),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e;const l=c||!s,[u,d]=o.useState(!1),[f,p]=o.useState(null);o.useEffect((()=>{if(s){if(l||u)return;if(f&&f.tagName){const e=function(e,t,n){const{id:o,observer:a,elements:s}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=i.find((e=>e.root===t.root&&e.margin===t.margin));let o;if(n&&(o=r.get(n),o))return o;const a=new Map,s=new IntersectionObserver((e=>{e.forEach((e=>{const t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o={id:t,observer:s,elements:a},i.push(t),r.set(t,o),o}(n);return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),r.delete(o);const e=i.findIndex((e=>e.root===o.root&&e.margin===o.margin));e>-1&&i.splice(e,1)}}}(f,(e=>e&&d(e)),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){const e=a.requestIdleCallback((()=>d(!0)));return()=>a.cancelIdleCallback(e)}}),[f,l,n,t,u]);const m=o.useCallback((()=>{d(!1)}),[]);return[p,u,m]};var o=n(959),a=n(365);const s="function"===typeof IntersectionObserver,r=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7601:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(1527),a=n(5454),s=n.n(a),r=n(8416),i=n(4976),c=n.n(i),l=n(959),u=n(657);n(8526);function d(e){let{Component:t,pageProps:n}=e;const{pageInfo:a,projects:i}=n,{query:{project:d}}=(0,r.useRouter)(),[f,p]=(0,l.useState)(!0),m=null===i||void 0===i?void 0:i.find((e=>e.id===d));return(0,l.useEffect)((()=>{p(!1)}),[]),(0,o.jsxs)(u.O,{children:[a?(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:(null===m||void 0===m?void 0:m.name)?"".concat(null===m||void 0===m?void 0:m.name," - ").concat(a.title):a.title}),(null===m||void 0===m?void 0:m.faviconUrl)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("link",{rel:"icon",href:m.faviconUrl}),(0,o.jsx)("link",{rel:"shortcut icon",href:m.faviconUrl}),(0,o.jsx)("link",{rel:"apple-touch-icon",href:m.faviconUrl})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("link",{rel:"icon",href:a.favIconUrl}),(0,o.jsx)("link",{rel:"shortcut icon",href:a.favIconUrl}),(0,o.jsx)("link",{rel:"apple-touch",href:a.favIconUrl})]}),!f&&(0,o.jsx)("link",{rel:"canonical",href:window.location.href}),(0,o.jsx)("meta",{name:"og:title",content:(null===m||void 0===m?void 0:m.name)?"".concat(null===m||void 0===m?void 0:m.name," - ").concat(a.title):a.title}),(0,o.jsx)("meta",{name:"og:image",content:a.ogImageUrl}),(0,o.jsx)("meta",{name:"og:url",content:"https://dertyp7214.de"}),m?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"og:description",content:m.keypoints.join(" ")}),(0,o.jsx)("meta",{name:"description",content:m.keypoints.join(" ")})]}):a.description&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"og:description",content:a.description}),(0,o.jsx)("meta",{name:"description",content:a.description})]}),(0,o.jsx)("meta",{name:"application-name",content:(null===m||void 0===m?void 0:m.name)?"".concat(null===m||void 0===m?void 0:m.name," - ").concat(a.title):a.title}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-title",content:(null===m||void 0===m?void 0:m.name)?"".concat(null===m||void 0===m?void 0:m.name," - ").concat(a.title):a.title}),(0,o.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,o.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,o.jsx)("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#CECACC"}),(0,o.jsx)("meta",{name:"msapplication-tap-highlight",content:"no"}),(0,o.jsx)("link",{rel:"manifest",href:a.manifestUrl}),(0,o.jsx)("link",{rel:"mask-icon",href:"/icons/safari-pinned-tab.svg",color:"#004E99"}),(0,o.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: light)",content:"#004E99"}),(0,o.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: dark)",content:"#CECACC"})]}):(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"DerTyp7214.de"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",href:"/favicon.png"}),(0,o.jsx)("meta",{name:"og:title",content:"DerTyp7214.de"}),(0,o.jsx)("meta",{name:"og:image",content:"/og-image.png"}),(0,o.jsx)("meta",{name:"og:url",content:"https://dertyp7214.de"}),(0,o.jsx)("meta",{name:"og:description",content:"DerTyp7214.de"}),(0,o.jsx)("meta",{name:"description",content:"DerTyp7214.de"})]}),(0,o.jsx)(c(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-FHHB68R52E",strategy:"afterInteractive"}),(0,o.jsx)(c(),{id:"google-analytics",strategy:"afterInteractive",children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n      \n        gtag('config', 'G-FHHB68R52E');\n        "}),(0,o.jsx)(t,{...n})]})}},8187:function(e,t,n){"use strict";function o(e,t,n){var o=+e.replace("#","0x"),a=o>>16,s=o>>8&255,r=255&o,i=+t.replace("#","0x");return"#"+((1<<24)+(a+n*((i>>16)-a)<<16)+(s+n*((i>>8&255)-s)<<8)+(r+n*((255&i)-r))|0).toString(16).slice(1)}function a(e){const t=e.toString(16);return 1===t.length?"0"+t:t}function s(e){if(!e.startsWith("rgb"))return e;const[t,n,o]=e.replace("rgb(","").replace(")","").split(",").map((e=>parseInt(e)));return"#".concat(a(t)).concat(a(n)).concat(a(o)).toUpperCase()}function r(e){const t=document.getElementById(e);if(!t)return"";return window.getComputedStyle(t).backgroundColor}n.d(t,{Py:function(){return o},QN:function(){return s},dF:function(){return r}})},5371:function(e,t,n){"use strict";function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function a(e){let t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),n=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(e),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);return"".concat(o,"/").concat(n,"/").concat(t)}n.d(t,{E:function(){return a},k:function(){return o}})},8526:function(){},5454:function(e,t,n){e.exports=n(1723)},6803:function(e,t,n){e.exports=n(3734)},8416:function(e,t,n){e.exports=n(8136)},4976:function(e,t,n){e.exports=n(1188)},5039:function(e,t,n){"use strict";n.d(t,{Ix:function(){return _},Am:function(){return D}});var o=n(959);function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o};const r=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,c=e=>"function"==typeof e,l=e=>i(e)||c(e)?e:null,u=e=>(0,o.isValidElement)(e)||i(e)||c(e)||r(e);function d(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:c,preventExitTransition:l,done:u,nodeRef:d,isIn:f}=e;const p=a?`${t}--${c}`:t,m=a?`${n}--${c}`:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((()=>{const e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,o.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()};f||(l?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),o.createElement(o.Fragment,null,i)}}function f(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},m=e=>{let{theme:t,type:n,...a}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...a})},g={info:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){const[,t]=(0,o.useReducer)((e=>e+1),0),[n,a]=(0,o.useState)([]),s=(0,o.useRef)(null),d=(0,o.useRef)(new Map).current,m=e=>-1!==n.indexOf(e),h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>d.get(e)}).current;function v(e){let{containerId:t}=e;const{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function y(e){a((t=>null==e?[]:t.filter((t=>t!==e))))}function b(){const{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();x(e,t,n)}function E(e,n){let{delay:a,staleId:m,...v}=n;if(!u(e)||function(e){return!s.current||h.props.enableMultiContainer&&e.containerId!==h.props.containerId||d.has(e.toastId)&&null==e.updateId}(v))return;const{toastId:E,updateId:T,data:C}=v,{props:k}=h,_=()=>y(E),j=null==T;j&&h.count++;const I={...k,style:k.toastStyle,key:h.toastKey++,...v,toastId:E,updateId:T,data:C,closeToast:_,isIn:!1,className:l(v.className||k.toastClassName),bodyClassName:l(v.bodyClassName||k.bodyClassName),progressClassName:l(v.progressClassName||k.progressClassName),autoClose:!v.isLoading&&(w=v.autoClose,O=k.autoClose,!1===w||r(w)&&w>0?w:O),deleteToast(){const e=f(d.get(E),"removed");d.delete(E),p.emit(4,e);const n=h.queue.length;if(h.count=null==E?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){const e=null==E?h.props.limit:1;if(1===n||1===e)h.displayedToast++,b();else{const t=e>n?n:e;h.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};var w,O;I.iconOut=function(e){let{theme:t,type:n,isLoading:a,icon:s}=e,l=null;const u={theme:t,type:n};return!1===s||(c(s)?l=s(u):(0,o.isValidElement)(s)?l=(0,o.cloneElement)(s,u):i(s)||r(s)?l=s:a?l=g.spinner():(e=>e in g)(n)&&(l=g[n](u))),l}(I),c(v.onOpen)&&(I.onOpen=v.onOpen),c(v.onClose)&&(I.onClose=v.onClose),I.closeButton=k.closeButton,!1===v.closeButton||u(v.closeButton)?I.closeButton=v.closeButton:!0===v.closeButton&&(I.closeButton=!u(k.closeButton)||k.closeButton);let L=e;(0,o.isValidElement)(e)&&!i(e.type)?L=(0,o.cloneElement)(e,{closeToast:_,toastProps:I,data:C}):c(e)&&(L=e({closeToast:_,toastProps:I,data:C})),k.limit&&k.limit>0&&h.count>k.limit&&j?h.queue.push({toastContent:L,toastProps:I,staleId:m}):r(a)?setTimeout((()=>{x(L,I,m)}),a):x(L,I,m)}function x(e,t,n){const{toastId:o}=t;n&&d.delete(n);const s={content:e,props:t};d.set(o,s),a((e=>[...e,o].filter((e=>e!==n)))),p.emit(4,f(s,null==s.props.updateId?"added":"updated"))}return(0,o.useEffect)((()=>(h.containerId=e.containerId,p.cancelEmit(3).on(0,E).on(1,(e=>s.current&&y(e))).on(5,v).emit(2,h),()=>{d.clear(),p.emit(3,h)})),[]),(0,o.useEffect)((()=>{h.props=e,h.isToastActive=m,h.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:s,isToastActive:m}}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function b(e){const[t,n]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),i=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",T),document.addEventListener("touchmove",x),document.addEventListener("touchend",T);const n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=v(t.nativeEvent),i.y=y(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(i.boundingRect){const{top:n,bottom:o,left:a,right:s}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=a&&i.x<=s&&i.y>=n&&i.y<=o?E():b()}}function b(){n(!0)}function E(){n(!1)}function x(n){const o=r.current;i.canDrag&&o&&(i.didMove=!0,t&&E(),i.x=v(n),i.y=y(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function T(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",T);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)((()=>{l.current=e})),(0,o.useEffect)((()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),c(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{const e=l.current;c(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)})),[]),(0,o.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",b),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",E))})),[e.pauseOnFocusLoss]);const C={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return u&&d&&(C.onMouseEnter=E,C.onMouseLeave=b),m&&(C.onClick=e=>{p&&p(e),i.canCloseOnClick&&f()}),{playToast:b,pauseToast:E,isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:C}}function E(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:i,className:l,style:u,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e;const h=i||d&&0===f,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(v.transform=`scaleX(${f})`);const y=s("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),b=c(l)?l({rtl:p,type:r,defaultClassName:y}):s(y,l);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:b,style:v,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&a()}})}const T=e=>{const{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=b(e),{closeButton:i,children:l,autoClose:u,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:g,position:h,className:v,style:y,bodyClassName:T,bodyStyle:C,progressClassName:k,progressStyle:_,updateId:j,role:I,progress:w,rtl:O,toastId:L,deleteToast:N,isIn:M,isLoading:R,iconOut:P,closeOnClick:D,theme:F}=e,B=s("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":D}),S=c(v)?v({rtl:O,position:h,type:f,defaultClassName:B}):s(B,v),A=!!w||!u,$={closeToast:m,type:f,theme:F};let z=null;return!1===i||(z=c(i)?i($):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,$):E($)),o.createElement(g,{isIn:M,done:N,position:h,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:L,onClick:d,className:S,...r,style:y,ref:a},o.createElement("div",{...M&&{role:I},className:c(T)?T({type:f}):s("Toastify__toast-body",T),style:C},null!=P&&o.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},P),o.createElement("div",null,l)),z,o.createElement(x,{...j&&!A?{key:`pb-${j}`}:{},rtl:O,theme:F,delay:u,isRunning:t,isIn:M,closeToast:m,hide:p,type:f,style:_,className:k,controlledProgress:A,progress:w||0})))},C=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},k=d(C("bounce",!0)),_=(d(C("slide",!0)),d(C("zoom")),d(C("flip")),(0,o.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:a,isToastActive:r}=h(e),{className:i,style:u,rtl:d,containerId:f}=e;function p(e){const t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return c(i)?i({position:e,rtl:d,defaultClassName:t}):s(t,l(i))}return(0,o.useEffect)((()=>{t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:f},n(((e,t)=>{const n=t.length?{...u}:{...u,pointerEvents:"none"};return o.createElement("div",{className:p(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:a,props:s}=e;return o.createElement(T,{...s,isIn:r(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},a)})))})))})));_.displayName="ToastContainer",_.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:E,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let j,I=new Map,w=[],O=1;function L(){return""+O++}function N(e){return e&&(i(e.toastId)||r(e.toastId))?e.toastId:L()}function M(e,t){return I.size>0?p.emit(0,e,t):w.push({content:e,options:t}),t.toastId}function R(e,t){return{...t,type:t&&t.type||e,toastId:N(t)}}function P(e){return(t,n)=>M(t,R(e,n))}function D(e,t){return M(e,R("default",t))}D.loading=(e,t)=>M(e,R("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let o,{pending:a,error:s,success:r}=t;a&&(o=i(a)?D.loading(a,n):D.loading(a.render,{...n,...a}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,a)=>{if(null==t)return void D.dismiss(o);const s={type:e,...l,...n,data:a},r=i(t)?{render:t}:t;return o?D.update(o,{...s,...r}):D(r.render,{...s,...r}),a},d=c(e)?e():e;return d.then((e=>u("success",r,e))).catch((e=>u("error",s,e))),d},D.success=P("success"),D.info=P("info"),D.error=P("error"),D.warning=P("warning"),D.warn=D.warning,D.dark=(e,t)=>M(e,R("default",{theme:"dark",...t})),D.dismiss=e=>{I.size>0?p.emit(1,e):w=w.filter((t=>null!=e&&t.options.toastId!==e))},D.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},D.isActive=e=>{let t=!1;return I.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},D.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const o=I.get(n||j);return o&&o.getToast(e)}(e,t);if(n){const{props:o,content:a}=n,s={...o,...t,toastId:t.toastId||e,updateId:L()};s.toastId!==e&&(s.staleId=e);const r=s.render||a;delete s.render,M(r,s)}}),0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),D.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,(e=>{j=e.containerId||e,I.set(j,e),w.forEach((e=>{p.emit(0,e.content,e.options)})),w=[]})).on(3,(e=>{I.delete(e.containerId||e),0===I.size&&p.off(0).off(1).off(5)}))},4147:function(e){"use strict";e.exports={i8:"1.0.1"}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(8342),t(8136)}));var n=e.O();_N_E=n}]);