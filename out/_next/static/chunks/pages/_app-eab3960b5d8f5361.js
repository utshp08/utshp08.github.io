(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7886)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),s=n(7795),i=n(4465),u=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:s.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:s,as:h,children:m,prefetch:y,passHref:x,replace:w,shallow:k,scroll:b,locale:j,onClick:M,onMouseEnter:_,onTouchStart:C,legacyBehavior:E=!1}=e,S=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,E&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==y,O=l.default.useContext(u.RouterContext),P=l.default.useContext(c.AppRouterContext),L=null!=O?O:P,T=!O,{href:z,as:I}=l.default.useMemo(()=>{if(!O){let e=g(s);return{href:e,as:h?g(h):e}}let[t,n]=a.resolveHref(O,s,!0);return{href:t,as:h?a.resolveHref(O,h):n||t}},[O,s,h]),R=l.default.useRef(z),A=l.default.useRef(I);E&&(o=l.default.Children.only(n));let B=E?o&&"object"==typeof o&&o.ref:t,[V,H,U]=f.useIntersection({rootMargin:"200px"}),D=l.default.useCallback(e=>{(A.current!==I||R.current!==z)&&(U(),A.current=I,R.current=z),V(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[I,B,z,U,V]);l.default.useEffect(()=>{L&&H&&N&&v(L,z,I,{locale:j})},[I,z,H,j,N,null==O?void 0:O.locale,L]);let K={ref:D,onClick(e){E||"function"!=typeof M||M(e),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,r,s,i,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:s,locale:u,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,L,z,I,w,k,b,j,T,N)},onMouseEnter(e){E||"function"!=typeof _||_(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(N||!T)&&v(L,z,I,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof C||C(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(N||!T)&&v(L,z,I,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||x||"a"===o.type&&!("href"in o.props)){let q=void 0!==j?j:null==O?void 0:O.locale,X=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(I,q,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);K.href=X||p.addBasePath(i.addLocale(I,q,null==O?void 0:O.defaultLocale))}return E?l.default.cloneElement(o,K):l.default.createElement("a",Object.assign({},S,K),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,u=i||!l,[c,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},s.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,u,n,t,c]);let h=o.useCallback(()=>{f(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7886:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893);n(4222);var r=n(7294),l=n(1163),a=n(4184),s=n.n(a);let i=e=>{let{Component:t,pageProps:n}=e,a=(0,l.useRouter)(),[i,u]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{u(!0),setTimeout(()=>{u(!1)},300)};return a.events.on("routeChangeComplete",e),()=>{a.events.off("routeChangeComplete",e)}},[a.events]);let c=()=>(0,o.jsx)("div",{className:"container mx-auto",children:"Loading..."});return(0,o.jsx)("div",{className:s()({"animate-slideUpEnter":!i}),children:(0,o.jsx)(i?c:t,{...n})})};var u=n(1664),c=n.n(u);let f=[{title:"Home",path:"/",display:!0,icon:'\n        <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke-width="1.5"\n            stroke="currentColor"\n            className="w-10 h-10"\n        >\n            <path\n                stroke-linecap="round"\n                stroke-linejoin="round"\n                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"\n            />\n        </svg>\n        '},{title:"Profile",path:"/profile",display:!0,icon:'\n            <svg\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                stroke-width="1.5"\n                stroke="currentColor"\n                className="w-6 h-9 shrink-0"\n            >\n                <path\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"\n                />\n            </svg>\n        '},{title:"Skills",path:"/skills",display:!0,icon:'<svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    stroke-width="1.5"\n                    stroke="currentColor"\n                    className="w-6 h-9 shrink-0"\n                >\n                    <path\n                        stroke-linecap="round"\n                        stroke-linejoin="round"\n                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"\n                    />\n                </svg>'},{title:"Works",path:"/works",display:!0,icon:'\n        <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke-width="1.5"\n            stroke="currentColor"\n            className="w-6 h-9 shrink-0"\n        >\n            <path\n                stroke-linecap="round"\n                stroke-linejoin="round"\n                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"\n            />\n            <path\n                stroke-linecap="round"\n                stroke-linejoin="round"\n                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"\n            />\n        </svg>\n        '}],d=e=>{let{page:t}=e,[n,l]=(0,r.useState)(!1);return(0,o.jsxs)(c(),{href:t.path,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:s()({"flex aspect-square min-h-[50px] w-[80px] flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-sky-900 dark:text-sky-50":!0,"bg-indigo-50 text-indigo-600":n}),children:[(0,o.jsx)("svg",{width:"50px",dangerouslySetInnerHTML:{__html:t.icon}}),(0,o.jsxs)("small",{className:"text-center text-xs font-medium",children:[" ",t.title," "]})]})},p=e=>{let{}=e;return(0,o.jsx)("div",{className:"flex items-center h-screen border-tbackdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed ",children:(0,o.jsx)("nav",{className:" border-gray-200 bg-white/50 p-2.5 shadow-lg z-20 flex shrink-0 grow-0 justify-around gap-4 min-h-[auto] min-w-[64px] flex-col rounded-lg border h-auto ",children:f.map((e,t)=>(0,o.jsx)(d,{page:e},t))})})};function h(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(p,{}),(0,o.jsx)(i,{...e})]})}},4222:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);