(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{7774:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[project]",function(){return l(4041)}])},9405:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var r=l(1527),a=l(4578),n=l(3123),o=l(5039),s=l(5371),c=l(7453),i=l(5912),d=l(959),x=l(422);function u(e){let{show:t,children:l,onClose:a,title:n}=e;const[o,s]=(0,d.useState)(!1),[u,m]=(0,d.useState)(t);(0,d.useEffect)((()=>{s(void 0!==window)}),[]),(0,d.useEffect)((()=>{t&&m(!0)}),[t]);const h=()=>{null===a||void 0===a||a()};return o&&u?x.createPortal((0,r.jsx)(i.E.div,{initial:{backdropFilter:t?"blur(0px)":"blur(8px)",backgroundColor:t?"rgba(0,0,0,0)":"rgba(0,0,0,.2)"},animate:{backdropFilter:t?"blur(8px)":"blur(0px)",backgroundColor:t?"rgba(0,0,0,.2)":"rgba(0,0,0,0)"},onClick:h,transition:{duration:.3},className:"fixed top-0 left-0 w-full h-full z-50",children:(0,r.jsxs)(i.E.div,{onClick:e=>e.stopPropagation(),initial:{opacity:t?0:1,filter:t?"blur(20px)":"blur(0px)"},animate:{opacity:t?1:0,filter:t?"blur(0px)":"blur(20px)"},onAnimationComplete:()=>{!1===t&&m(!1)},transition:{duration:.3},className:"modal-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondaryBackground/80 dark:bg-secondaryBackgroundDark/80 rounded-2xl shadow-2xl shadow-black/50",children:[(0,r.jsx)(c.Z,{className:"absolute top-3 right-3 w-8 h-8 cursor-pointer",onClick:h}),(0,r.jsx)("h1",{className:"text-3xl font-bold text-black dark:text-white ml-4 mt-2 absolute select-none",children:n}),(0,r.jsx)("div",{className:"w-full h-full flex flex-col items-center justify-center overflow-hidden pt-20",children:l})]})}),document.getElementById("modal-root")):null}function m(e){let{skill:t,show:l,onClose:c}=e;const i=Object.entries(null!==t&&void 0!==t?t:{}).filter((e=>{let[t,l]=e;return"description"!==t&&l&&!l.toString().startsWith("http")&&!l.toString().startsWith("/images")&&!0!==l&&!1!==l}));return(0,r.jsx)(u,{show:l&&!!t,onClose:c,title:null===t||void 0===t?void 0:t.name,children:t&&(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start p-4 h-full overflow-auto select-none customScroll",children:[(0,r.jsx)(n.Z,{className:"absolute top-4 right-14 w-6 h-6 cursor-pointer",onClick:()=>{var e;const l={title:t.name,text:"".concat(window.location.origin,"/?skill=").concat(t.name,"#skills")};(null===navigator||void 0===navigator||null===(e=navigator.canShare)||void 0===e?void 0:e.call(navigator,l))&&(navigator.share(l),(0,o.Am)("Link shared",{type:"info",icon:()=>(0,r.jsx)(n.Z,{className:"h-6 w-6"})}))}}),(0,r.jsx)(a.Z,{className:"absolute top-4 right-24 w-6 h-6 cursor-pointer",onClick:()=>{navigator.clipboard.writeText("".concat(window.location.origin,"/?skill=").concat(t.name,"#skills")),(0,o.Am)("Link copied to clipboard",{type:"info",icon:()=>(0,r.jsx)(a.Z,{className:"h-6 w-6"})})}}),(0,r.jsx)("h1",{className:"text-5xl font-bold text-black dark:text-white mb-10 underline decoration-accent/40 dark:decoration-accentDark/40",children:t.name}),(0,r.jsx)("div",{className:"grid grid-cols-2 space-x-4",children:i.map((e=>{let[t,l]=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center overflow-hidden",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-black dark:text-white",children:l}),(0,r.jsx)("p",{className:"text-black/60 dark:text-white/60 text-center",children:(0,s.k)(t.split(/(?=[A-Z])/).join(" "))})]},t)}))}),(0,r.jsxs)("div",{className:"flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center justify-center mt-10",children:[(0,r.jsx)("button",{className:"text-lg border-2 border-accent/20 dark:border-accentDark/20 rounded-3xl hover:border-accent/40 dark:hover:border-accentDark/40 hover:bg-accent/10 dark:hover:bg-accentDark/10 hover:rounded-2xl transition-all duration-200 p-2",onClick:()=>{window.open("https://profile.codersrank.io/leaderboard/developer?technology=".concat(t.name),"_blank")},children:"CodersRank Leaderboards (World)"}),(0,r.jsx)("button",{className:"text-lg border-2 border-accent/20 dark:border-accentDark/20 rounded-3xl hover:border-accent/40 dark:hover:border-accentDark/40 hover:bg-accent/10 dark:hover:bg-accentDark/10 hover:rounded-2xl transition-all duration-200 p-2",onClick:()=>{window.open("https://profile.codersrank.io/leaderboard/developer?technology=".concat(t.name,"&country=Germany"),"_blank")},children:"CodersRank Leaderboards (Germany)"})]}),(0,r.jsx)("p",{className:"m-2 mt-10 sm:m-10",children:t.description})]})})}},4041:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return b}});var r=l(1527),a=l(5475),n=l(6803),o=l.n(n),s=l(8416),c=l(959),i=l(9883),d=l(657),x=l(421),u=l(9086),m=l(9405),h=l(8187);function p(e){let{children:t,className:l}=e;return(0,r.jsxs)("div",{className:"relative ".concat(l),children:[(0,r.jsx)("div",{className:"absolute left-0 top-[5px] sm:top-[10px] blur-[3px] sm:blur-[10px] opacity-50 scale-90 dark:brightness-200",children:t}),(0,r.jsx)("div",{className:"relative",children:t})]})}const f=e=>{let{className:t,project:l}=e;return(0,r.jsx)(p,{className:t,children:(0,r.jsx)("div",{style:{transitionProperty:"width, height"},className:"w-12 h-12 rounded-lg sm:w-32 sm:h-32 sm:rounded-xl duration-200 overflow-hidden relative cursor-pointer mr-5 xl:rounded-3xl xl:w-[200px] xl:h-[200px]",children:(0,r.jsx)("img",{src:l.imageUrl,alt:l.name,className:"absolute top-0 left-0 w-full h-full"})})})};var b=!0;t.default=function(e){let{projects:t,skills:l}=e;var n,p,b;const[v,k]=(0,c.useState)(!1),{darkMode:g}=(0,d.b)(),[w,j]=(0,c.useState)(null),{query:{project:N}}=(0,s.useRouter)(),y=t.find((e=>e.id===N));return y?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{leftContent:(0,r.jsx)(o(),{href:"/#projects",children:(0,r.jsx)(a.Z,{className:"w-12 h-12 p-[7px] cursor-pointer opacity-50 dark:opacity-60 hover:scale-125 hover:opacity-100 dark:hover:opacity-100 transition-all duration-200"})})}),(0,r.jsx)(m.Z,{show:v,skill:w,onClose:()=>k(!1)}),(0,r.jsxs)("div",{className:"p-2 m-auto mt-4 sm:mt-10 sm:flex sm:flex-row xl:justify-around max-w-screen-2xl",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-5 sm:ml-10 sm:mt-10 sm:mr-10",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-1 sm:space-y-0 sm:flex-row ml-1",children:[(0,r.jsx)(f,{className:"hidden sm:block xl:hidden",project:y}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-xl sm:text-2xl md:text-4xl xl:text-6xl",children:y.name}),(0,r.jsx)("p",{className:"text-sm sm:text-lg md:text-xl xl:text-2xl fomt-bold mt-1 sm:space-x-2 flex flex-wrap flex-row text-tertiary dark:text-tertiaryDark",children:(0,r.jsx)(u.Z,{children:y.authors.map(((e,t)=>(0,r.jsx)(o(),{href:"https://github.com/".concat(e),target:"_blank",children:e},t))).reduce(((e,t)=>[e,(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"hidden sm:block",children:"&"}),(0,r.jsx)("span",{className:"block sm:hidden",children:"\xa0 \xa0"})]},t.toString()),t]))})})]})]}),(0,r.jsxs)("div",{className:"flex text-center ml-2 lg:ml-1 customScroll overflow-auto pb-2",id:"infos",children:[(0,r.jsx)("style",{children:"\n              #infos::-webkit-scrollbar {\n                height: 4px;\n              }\n            "}),(0,r.jsx)(f,{className:"sm:hidden",project:y}),!!y.downloads&&(0,r.jsxs)("div",{className:"flex flex-col text-xs sm:text-md lg:text-lg justify-between pr-7 mt-2",children:[(0,r.jsx)("span",{children:y.downloads}),(0,r.jsx)("span",{className:"opacity-60",children:"Downloads"})]}),(0,r.jsx)(u.Z,{children:null===(n=y.extraLinks)||void 0===n?void 0:n.map(((e,t)=>(0,r.jsxs)(o(),{href:e.url,target:e.url.startsWith("http")?"_blank":"_self",id:e.name,className:"flex flex-col text-xs sm:text-md lg:text-lg justify-between pl-7 pr-7 cursor-pointer mt-2 before:bg-secondaryBackgroundDark/40 dark:before:bg-secondaryBackground/40",children:[(0,r.jsx)("style",{children:"\n                    #".concat(e.name," {\n                      position: relative;\n                    }\n                    #").concat(e.name,"::before {\n                      content: '';\n                      display: block;\n                      height: 24px;\n                      left: 0;\n                      position: absolute;\n                      top: calc(50% - 12px);\n                      width: 1px;\n                    }\n                  ")}),(0,r.jsx)("img",{src:e.iconUrl,alt:e.name,width:20,height:20,className:"m-auto h-[20px] ".concat(e.className)}),(0,r.jsx)("span",{className:"opacity-60",children:e.name})]},t)))})]}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-2 space-x-0 sm:space-y-0 sm:space-x-4",children:[y.downloadUrl&&(0,r.jsx)("button",{onClick:()=>window.open(y.downloadUrl),className:"rounded-lg bg-accent/80 text-white dark:bg-accentDark/80 dark:text-black pt-1 pb-1 pl-3 pr-3 hover:bg-accent/100 dark:hover:bg-accentDark/100 transition-all duration-200 overflow-hidden",children:"Download"}),(null===(p=y.alternativeDownload)||void 0===p?void 0:p.url)&&(0,r.jsx)("button",{onClick:()=>{var e;return window.open(null===(e=y.alternativeDownload)||void 0===e?void 0:e.url)},className:"rounded-lg bg-accent/80 text-white dark:bg-accentDark/80 dark:text-black pt-1 pb-1 pl-3 pr-3 hover:bg-accent/100 dark:hover:bg-accentDark/100 transition-all duration-200 overflow-hidden",children:null===(b=y.alternativeDownload)||void 0===b?void 0:b.name}),y.playStoreUrl&&(0,r.jsx)("button",{onClick:()=>window.open(y.playStoreUrl),className:"rounded-lg bg-accent/80 text-white dark:bg-accentDark/80 dark:text-black pt-1 pb-1 pl-3 pr-3 hover:bg-accent/100 dark:hover:bg-accentDark/100 transition-all duration-200 overflow-hidden",children:"PlayStore"})]})}),(0,r.jsx)("div",{className:"flex my-2 pt-5 flex-wrap",children:(0,r.jsx)(u.Z,{children:null!==(C=y.skills.map(((e,t)=>{const a=l.find((t=>t.name===e));return a?(0,r.jsxs)("div",{onClick:()=>(e=>{j(e),k(!0)})(a),className:"m-1 h-12 w-12 rounded-[5px] bg-secondaryBackground/50 dark:bg-secondaryBackgroundDark/50 relative flex justify-center items-center cursor-pointer",children:[(0,r.jsx)("img",{className:"p-2 filter z-20 absolute top-0 left-0 w-full h-full",src:a.imageUrl,alt:a.name}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full peer z-40"}),(0,r.jsx)("span",{className:"absolute p-1 top-[-30%] select-none rounded-[5px] opacity-0 peer-hover:opacity-100 transition-all bg-white/50 text-black backdrop-blur-[5px] z-30",children:a.name})]},t):null})))&&void 0!==C?C:null})}),(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("ul",{className:"list-disc sapce-y-4 ml-5 text-lg",children:(0,r.jsx)(u.Z,{children:y.keypoints.map(((e,t)=>(0,r.jsx)("li",{children:e},t)))})})}),(0,r.jsx)("div",{className:"flex flex-wrap pt-10",children:(0,r.jsx)(u.Z,{children:t.filter((e=>e.id!==y.id)).map(((e,t)=>(0,r.jsxs)(o(),{href:"/projects/".concat(e.id),className:"flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-3xl bg-secondaryBackground/50 dark:bg-secondaryBackgroundDark/50 relative cursor-pointer overflow-hidden m-2 transition-all duration-200 group",children:[(0,r.jsx)("img",{src:e.imageUrl,alt:e.name,className:"absolute top-0 left-0 w-full h-full"}),(0,r.jsx)("span",{className:"absolute font-bold text-xs sm:text-base lg:text-lg w-full h-full bottom-0 p-3 select-none bg-white/50 text-black backdrop-blur-[5px] z-30 transition-all ease-out duration-500 top-[100%] group-hover:top-0 rounded-none group-hover:rounded-3xl",children:e.name})]},t)))})})]}),(0,r.jsx)(f,{className:"hidden xl:block",project:y})]}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(i.Z,{html:!0,backgroundColor:(0,h.Py)(null!==(D=g?"#454043":"#BFBABD")&&void 0!==D?D:"#434d57",g?"#FFFFFF":"#000000",.1),textColor:g?"#FFFFFF":"#000000",multiline:!0,className:"max-w-[200px] text-center"})})]}):(0,r.jsx)("div",{children:"Project not found"});var C,D}},4578:function(e,t,l){"use strict";var r=l(959);const a=r.forwardRef((function({title:e,titleId:t,...l},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},l),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"}))}));t.Z=a},5475:function(e,t,l){"use strict";var r=l(959);const a=r.forwardRef((function({title:e,titleId:t,...l},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},l),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}));t.Z=a},3123:function(e,t,l){"use strict";var r=l(959);const a=r.forwardRef((function({title:e,titleId:t,...l},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},l),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z",clipRule:"evenodd"}))}));t.Z=a},7453:function(e,t,l){"use strict";var r=l(959);const a=r.forwardRef((function({title:e,titleId:t,...l},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},l),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}));t.Z=a}},function(e){e.O(0,[875,583,720,774,888,179],(function(){return t=7774,e(e.s=t);var t}));var t=e.O();_N_E=t}]);