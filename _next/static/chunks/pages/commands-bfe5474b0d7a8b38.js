(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{9266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/commands",function(){return n(9318)}])},9318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var s=n(1527),r=n(959),l=n(4083),a=n(4977),o=n(32),i=n(5072),c=n(9647),d=n(9750),m=n(6137),u=n(6415),h=n(1180),x=n(2346),f=n(7213);let p=e=>{let{data:t,open:n,setOpen:l,placeholder:o}=e,[i,c]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=(0,h.ZP)(window,{Slash:e=>{l(!0),e.preventDefault()}});return()=>{e()}},[]),(0,r.useEffect)(()=>c(""),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.M,{children:n&&(0,s.jsx)(f.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.3},className:"cmdk-overlay"})}),(0,s.jsx)(u.m.Dialog,{open:n,onOpenChange:l,label:"Global Command Menu",children:(0,s.jsxs)(f.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{type:"spring",damping:10,mass:.2,stiffness:80},className:"relative pointer-events-auto border max-h-full border-bleed-background-850 overflow-hidden bg-bleed-background-950 rounded-xl drop-shadow-2xl w-full flex flex-col",children:[(0,s.jsxs)("div",{className:"relative group",children:[(0,s.jsx)(u.m.Input,{value:i,onValueChange:c,autoFocus:!0,placeholder:o}),(0,s.jsx)("div",{className:"absolute inset-y-0 flex items-center left-5",children:(0,s.jsx)(x.Z,{className:"h-5 w-5 inline-block transition duration-200 ease-linear text-neutral-500 group-focus-within:text-neutral-300",strokeWidth:2.5})})]}),!!i.trim().length&&i.trim().length>=2&&(0,s.jsxs)(u.m.List,{children:[(0,s.jsx)(u.m.Empty,{children:"No results found."}),t.map(e=>(0,s.jsx)(u.m.Group,{heading:e.group,children:e.items.map((t,n)=>(0,s.jsxs)(u.m.Item,{value:t.value,onSelect:t.onSelect,children:[t.parent&&(0,s.jsxs)("p",{className:"text-sm inline-block text-neutral-400 mb-2",children:[(0,s.jsx)("span",{className:"text-neutral-500 font-bold mr-2",children:"#"}),t.parent]}),(0,s.jsx)("p",{children:t.text||t.value}),t.description&&(0,s.jsx)("p",{className:"text-sm text-neutral-400 mt-1",children:t.description})]},"".concat(e.group,"-").concat(n)))},e.group))]})]})})]})},g=e=>e.cogs.map(e=>({cog:(e.alt_name||e.cog_name).toLowerCase(),commands:e.commands})).map(e=>e.commands.map(t=>({parent:e.cog,value:t.name,description:t.description||"No description set"})).flat(1)).flat(1),b=(e,t)=>{let n=[];return t.cogs.forEach(t=>{let s=(t.alt_name||t.cog_name).toLowerCase();s===e&&(n=t.commands)}),n};var A=n(7314);let v=(0,A.cn)(""),w=(0,A.cn)(!1),j=e=>{let{disabled:t,data:n,categories:l}=e,a=(0,i.useRouter)(),o=(0,c.b9)(v),[d,m]=(0,r.useState)(!1),u=(0,r.useMemo)(()=>t||!n?[]:[{group:"Categories",items:l.map(e=>({value:e})).map(e=>({...e,onSelect:()=>{o(e.value),m(!1),window.scrollTo({top:0,behavior:"smooth"});let t=a.asPath.split("#");t.length>1&&a.push(a.asPath.split("#")[0],void 0,{shallow:!0,scroll:!1})}}))},{group:"Commands",items:g(n).map(e=>({...e,onSelect:()=>{a.push(a.asPath.split("#")[0]+"#"+e.value),m(!1)}}))}],[a,t,n,l]);return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("span",{className:"absolute -top-[28px] font-semibold text-sm text-neutral-500 inset-x-0 text-center",children:"search"}),(0,s.jsx)("button",{onClick:()=>!t&&m(!0),className:"text-bleed-blue-3 px-3 py-2.5 border border-bleed-background-750 transition duration-200 ease-linear hover:ring-2 hover:ring-bleed-background-750 hover:bg-bleed-background-750 rounded-2xl bg-bleed-background-900",children:(0,s.jsx)(x.Z,{className:"h-7 w-7",strokeWidth:2})}),!t&&(0,s.jsx)(p,{data:u,open:d,setOpen:m,placeholder:"Search commands or categories..."})]})},k=()=>(0,s.jsxs)("div",{className:"mt-20 flex flex-col text-center items-center",children:[(0,s.jsx)("svg",{className:"w-20 h-20 text-neutral-600 rotate-6","stroke-width":"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",children:(0,s.jsx)("path",{d:"M2 11V4.6a.6.6 0 01.6-.6h6.178a.6.6 0 01.39.144l3.164 2.712a.6.6 0 00.39.144H21.4a.6.6 0 01.6.6V11M2 11v8.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V11M2 11h20",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,s.jsx)("p",{className:"mt-6 text-lg text-neutral-400 font-semibold tracking-tight",children:"No commands found"})]});var N=n(7551),C=n(5924),y=n(3582),E=n(2540);let M=e=>{let{container:t,category:n,categoryCommands:l,selectedCategory:a,setCategory:o}=e,[c,d]=(0,r.useState)(!1),m=(0,N.Z)(),u=(0,r.useRef)(null),h=(0,i.useRouter)();function x(){o(n);let e=h.asPath.split("#");e.length>1&&h.push(h.asPath.split("#")[0],void 0,{shallow:!0,scroll:!1})}return(0,r.useEffect)(()=>{t.current&&u.current&&a===n&&t.current.scrollTo({left:u.current.offsetLeft-50,behavior:"smooth"})},[m,t,u,a,n]),(0,s.jsxs)("button",{ref:u,onMouseDown:()=>d(!1),onTouchStart:()=>d(!1),onMouseMove:()=>d(!0),onTouchMove:()=>d(!0),onClick:()=>{c||x()},onKeyUp:e=>{13===e.which&&x()},className:(0,C.Z)("flex-shrink-0 font-semibold outline-none px-6 inline-flex items-center py-4 transition duration-200 ease-linear",a===n?"bg-bleed-background-800 text-white":"bg-bleed-background-900 hover:bg-bleed-background-850 focus:bg-bleed-background-850 text-neutral-400 focus:text-neutral-300 hover:text-neutral-300"),children:[(0,s.jsx)("span",{className:"font-bold mr-3 text-neutral-600 -ml-2",children:"#"}),n,(0,s.jsx)("span",{className:(0,C.Z)("ml-2 text-xs transition duration-200 ease-linear py-1 rounded-lg px-2",a===n?"bg-bleed-background-600":"bg-bleed-background-750"),children:l.length})]})},L=e=>{let{data:t,categories:n,selectedCategory:l,setCategory:a}=e,o=(0,N.Z)(),i=(0,r.useRef)(null),[c,d]=(0,r.useState)(!1),[m,u]=(0,r.useState)(!0),[h,x]=(0,r.useState)(!1);function f(e){if(i.current){let t=i.current.scrollLeft,n=t+i.current.offsetWidth-50,s=e.offsetLeft,r=s+e.offsetWidth;return r<=n&&s>=t}return!1}(0,r.useEffect)(()=>{if(i.current){let e=i.current,t=()=>{e&&0===e.scrollLeft?u(!0):u(!1),e&&e.scrollLeft+1>=e.scrollWidth-e.clientWidth?d(!0):d(!1)};return t(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[o,i]);let p=(0,r.useMemo)(()=>m||c?m?c?"none":"linear-gradient(to right, black calc(100% - 50px), transparent)":"linear-gradient(to left, black calc(100% - 50px), transparent)":"linear-gradient(to right, transparent 0%, black 50px, black calc(100% - 50px), transparent 100%)",[m,c]);return(0,r.useEffect)(()=>{let e=i.current;function t(e){i.current&&x({startX:e.pageX-i.current.offsetLeft,scrollLeft:i.current.scrollLeft})}function n(e){if(h&&i.current){e.preventDefault(),e.stopPropagation();let t=e.pageX-i.current.offsetLeft,n=t-h.startX;i.current.scrollTo({left:h.scrollLeft-n})}}function s(e){h&&(e.preventDefault(),e.stopPropagation(),x(!1))}function r(e){if(e.preventDefault(),i.current){let t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));i.current.scrollLeft-=40*t}}if(e)return window.addEventListener("mousemove",n),window.addEventListener("mouseup",s),e.addEventListener("mousedown",t),e.addEventListener("wheel",r),()=>{window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s),e.removeEventListener("mousedown",t),e.removeEventListener("wheel",r)}},[h]),(0,s.jsxs)("div",{className:"mt-10 select-none relative flex items-center drop-shadow-2xl border border-bleed-background-800 w-full rounded-2xl overflow-hidden",children:[!m&&(0,s.jsx)("button",{onClick:function(){if(i.current){let e=Array.from(i.current.children),t=!1;for(let[n,s]of e.entries()){let e=s;if(f(e)){if(t){i.current.scrollTo({left:t.offsetLeft-(i.current.clientWidth-t.offsetWidth)+50,behavior:"smooth"});break}}else t=e}}},className:"absolute pl-4 left-0 z-50 inset-y-0 hidden sm:flex items-center text-neutral-300 transition duration-200 ease-linear hover:text-white",children:(0,s.jsx)(y.Z,{className:"h-6 w-6 inline-block",strokeWidth:2})}),(0,s.jsx)("div",{ref:i,className:"flex items-center overflow-x-scroll scroll-touch hidden-overflow bg-bleed-background-900",style:{WebkitMaskImage:p},children:n.map((e,n)=>(0,s.jsx)(M,{container:i,category:e,categoryCommands:b(e,t),selectedCategory:l,setCategory:a},n))}),!c&&(0,s.jsx)("button",{onClick:function(){if(i.current){let e=Array.from(i.current.children),t=!1;for(let[n,s]of e.entries()){let e=s;if(!1===t)f(e)&&(t=n);else{let t=e.offsetLeft-50;if(console.log(t),!f(e)){i.current.scrollTo({left:t,behavior:"smooth"});break}}}}},className:"absolute pr-4 right-0 z-50 inset-y-0 hidden sm:flex items-center text-neutral-300 transition duration-200 ease-linear hover:text-white",children:(0,s.jsx)(E.Z,{className:"h-6 w-6 inline-block",strokeWidth:2})})]})};var S=n(4707),U=n(9013),R=n.n(U),T=n(7349),W=n(3801),X=n.n(W),Z={src:"/_next/static/media/star.0ffd889b.png",height:179,width:179,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXH84WH95HDx2GXhx03bwUv95HH53Fb22VTr0VznzE/y1ljexE322VTRuEn85XzWvUr22VTkyU794mX831ju0lFv3K/bAAAAEnRSTlMAw9AHENRhGf0p1aphkId3aulUvWlYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVQImR2KSQ7AIBDDDBSmlK4M/P+rKPUllmKAUvkxD0m7XcNjfDj73Id7oWZZ0yULinJvx2fA/ZKMBUGAAfUWSSz6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},I={src:"/_next/static/media/star2.a65f2d52.png",height:179,width:179,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXHLy8vS0tLFxcW+vr67u7vS0tLFxcXIyMjCwsLGxsa8vLzQ0NC9vb3AwMDNzc3JycnGxsbMzMy/v7+N93SFAAAAEnRSTlMAINB/0mVh/hYJkC/C2q2mw+kX3oqaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVQImR2KSRbAIAyFUKMxnWy/979rn7KBBQAtsem6YvuQci7U6S6pcdqqAcQ93d812Xzs60CpROIHO+YBwr6LEe4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},V={src:"/_next/static/media/star3.2b3dcc35.png",height:179,width:179,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXGYXCKmZiqXXCOraCiXXCKoazGraCegZy6sbzSpZiaPVyGqdUKkZCWpZiafZSysbjKeYCSkYyWYXCMhyUmZAAAAEHRSTlMAC6ovFtYg/mPJkId3z+nUpg0riQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUCJkdikkSgCAMwFIE2soyVf//V6fkkhwCYJ1DDZfjW8N9Ys+rGmFcLasAkuU5ta+sXYFhSOcHNpABmDuXVmsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let _=e=>{let{command:t,commandIndex:n}=e,l=(0,r.useRef)(null),[a,o]=(0,c.KO)(w),[d,m]=(0,r.useState)(!1),[u,h]=(0,r.useState)(!1);(0,i.useRouter)(),(0,r.useEffect)(()=>{if(d){let e=setTimeout(()=>{m(!1)},2e3);return()=>clearTimeout(e)}},[d]),function(e,t){let n=(0,r.useRef)(!1);(0,r.useEffect)(()=>{n.current||(n.current=!0,e())},[n,...null!=t?t:[]])}(()=>{new(R())("#command-".concat(n))},[]),(0,r.useEffect)(()=>{a&&a===t.name&&l.current&&(window.scrollTo({top:l.current.offsetTop-112,behavior:"smooth"}),setTimeout(()=>{o(!1)},1350))},[a,t]);let x=(0,r.useMemo)(()=>!!t.permission&&!!t.permission.length&&t.permission.split("&"),[t.permission]),f=(0,r.useMemo)(()=>{if(x){let e=["Tier 1 Only","Tier 2 Only","Tier 3 Only"];if(x.some(t=>t.match(RegExp("("+e.join("|")+")","gi"))))return!0}return!1},[x]);return(0,s.jsx)("div",{ref:l,className:(0,C.Z)("flex flex-col py-6 rounded-3xl bg-bleed-background-950 border transition-shadow duration-200 ease-linear",a===t.name?"ring-4 ring-opacity-25 ring-bleed-blue-3 border-bleed-blue-3/75":"border-bleed-background-750"),children:(0,s.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"px-6",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-x-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[f&&(0,s.jsx)(X(),{alt:"Tier",className:"h-6 w-6",priority:!0,src:function(){if(x){if(x.some(e=>e.match(/Tier 1 Only/gi)))return Z;if(x.some(e=>e.match(/Tier 2 Only/gi)))return I;if(x.some(e=>e.match(/Tier 3 Only/gi)))return V}}()}),(0,s.jsx)("p",{className:"text-xl font-semibold inline-flex items-center",children:t.name})]}),(0,s.jsx)(T.Z,{content:d?"Copied command":"Copy command",open:u||d,onOpenChange:e=>h(e),children:(0,s.jsx)("button",{disabled:d,onClick:()=>{m(!0)},id:"command-".concat(n),"data-clipboard-text":t.syntax||t.name,className:"text-neutral-500 transition duration-200 ease-linear hover:text-white",children:(0,s.jsx)(S.Z,{className:"h-6 w-6",strokeWidth:1.5})})})]}),(0,s.jsx)("p",{title:t.description,className:"text-sm mt-3 text-neutral-400 font-medium pr-4",children:t.description||(0,s.jsx)("span",{className:"italic",children:"No description given"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("hr",{className:"border-t border-bleed-background-850 w-full my-4"}),(0,s.jsxs)("div",{className:"px-6 flex flex-col gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm tracking-wide text-bleed-blue-1 font-medium",children:"arguments"}),(0,s.jsx)("div",{className:"flex items-center gap-2 mt-3",children:t.args.length?t.args.map((e,t)=>(0,s.jsx)("p",{className:"text-neutral-300 italic inline-block text-sm py-1 px-3 rounded-lg bg-bleed-background-800",children:e.replace(/_/g," ")},t)):(0,s.jsx)("p",{className:"text-neutral-200 inline-block text-sm py-1",children:"none"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm tracking-wide text-bleed-blue-1 font-medium",children:"permissions"}),(0,s.jsx)("div",{className:"flex items-center gap-2 mt-3",children:x?x.map((e,t)=>(0,s.jsx)("p",{className:"text-white font-medium inline-block text-xs py-1.5 px-3 rounded-lg bg-bleed-background-800",children:e},t)):(0,s.jsx)("p",{className:"text-white font-medium inline-block text-xs py-1.5",children:"none"})})]})]})]})]})})},D=e=>{let{data:t,selectedCategory:n}=e,l=(0,r.useMemo)(()=>{let e=t.cogs.find(e=>e.alt_name?e.alt_name.toLowerCase()===n:e.cog_name.toLowerCase()===n);return e?e.commands:[]},[t,n]);return(0,s.jsx)("div",{className:"mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:l.map((e,t)=>(0,s.jsx)(_,{command:e,commandIndex:t},t))})},O=()=>(0,s.jsxs)("div",{className:"mt-20 flex flex-col text-center items-center",children:[(0,s.jsxs)("svg",{className:"w-20 h-20 inline-block text-red-500/40 rotate-6","stroke-width":"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",children:[(0,s.jsx)("path",{d:"M20.043 21H3.957c-1.538 0-2.5-1.664-1.734-2.997l8.043-13.988c.77-1.337 2.699-1.337 3.468 0l8.043 13.988C22.543 19.336 21.58 21 20.043 21zM12 9v4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),(0,s.jsx)("path",{d:"M12 17.01l.01-.011",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,s.jsx)("p",{className:"mt-6 text-lg text-red-400 font-semibold tracking-tight",children:"Could not load commands"})]});var K=n(3491);let B=()=>(0,s.jsxs)("h1",{className:"flex items-center tracking-tight text-3xl font-semibold",children:[(0,s.jsx)("span",{className:"p-3 mr-5 inline-flex items-center justify-center bg-bleed-background-850 rounded-full",children:(0,s.jsx)(o.Z,{className:"h-6 w-6 inline-block text-bleed-blue-1",strokeWidth:2})}),"Commands"]}),P=e=>{let{data:t,categories:n,error:r,category:l,setCategory:a}=e;return t?r?(0,s.jsx)(O,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L,{data:t,categories:n,selectedCategory:l,setCategory:a}),(0,s.jsx)(D,{data:t,selectedCategory:l})]}):(0,s.jsx)(k,{})},z=()=>{let e=(0,r.useRef)(!1),t=(0,c.b9)(w),{cache:n}=(0,l.kY)(),o=(0,K.Z)(1e3),u=(0,i.useRouter)(),h=(0,r.useMemo)(()=>{let e=n.get("commands.json");return!!e&&e.data&&!e.error},[]),[x,f]=(0,c.KO)(v),{data:p,error:b,isLoading:A}=(0,l.ZP)("commands.json"),k=(0,r.useMemo)(()=>p&&p.cogs?p.cogs.filter(e=>e.commands&&e.commands.length).sort((e,t)=>t.commands.length-e.commands.length).map(e=>(e.alt_name||e.cog_name).toLowerCase()):[],[p]),N=(0,r.useMemo)(()=>x||(k.length?k[0]:""),[k,x]),C=(0,r.useMemo)(()=>p&&p.cogs?g(p):[],[p]);return(0,r.useEffect)(()=>{function n(e){let n;if(e&&e.newURL){let t=e.newURL;n=t.split("#")}else{let e=u.asPath;n=e.split("#")}if(n.length>1){let e=decodeURIComponent(n[1]),s=e.replace(/\+/gi," "),r=C.find(e=>e.value.toLowerCase()===s.toLowerCase());r&&(f(r.parent),t(r.value))}}if(p&&p.cogs)return e.current||(n(),e.current=!0),u.events.on("hashChangeComplete",n),()=>{u.events.off("hashChangeComplete",n)}},[e,p,C,u,u.events]),(0,s.jsxs)(d.Z,{title:"commands",children:[(0,s.jsxs)("div",{className:"gap-x-8 flex items-center justify-between",children:[(0,s.jsx)(B,{}),(0,s.jsx)(j,{disabled:A||b||!p,data:p,categories:k})]}),(0,s.jsx)(a.M,{mode:"wait",children:A||!h&&o?(0,s.jsx)(m.Z,{},"loading"):(0,s.jsx)(P,{data:p,categories:k,error:b,category:N,setCategory:f})})]})};var F=z}},function(e){e.O(0,[103,462,80,774,888,179],function(){return e(e.s=9266)}),_N_E=e.O()}]);