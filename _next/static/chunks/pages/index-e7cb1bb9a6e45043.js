(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,o=r(7273).Z,l=a(r(7294)),s=i(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=i(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>o,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:m,loading:h,srcString:b,config:w,unoptimized:x,loader:v,onLoadRef:y,onLoadingCompleteRef:j,onLoad:_,onError:E}=e,S=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return h=f?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,r,{width:a,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:h,style:n({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,b,y,j,x))},[b,y,j,E,x,t]),onLoad(e){let t=e.currentTarget;p(t,b,y,j,x)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===m&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),E&&E(e)}})))}),w=l.forwardRef((e,t)=>{let r,i;var a,{src:p,sizes:w,unoptimized:x=!1,priority:v=!1,loading:y,className:j,quality:_,width:E,height:S,fill:z,style:C,onLoad:k,onLoadingComplete:I,placeholder:N="empty",blurDataURL:R,layout:O,objectFit:P,objectPosition:A,lazyBoundary:L,lazyRoot:M}=e,T=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(u.ImageConfigContext),B=l.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),W=T,Z=W.loader||f.default;if(delete W.loader,"__next_img_default"in Z){if("custom"===B.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=Z;Z=e=>{let{config:t}=e,r=o(e,["config"]);return F(r)}}if(O){"fill"===O&&(z=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];q&&(C=n({},C,q));let G={responsive:"100vw",fill:"100vw"}[O];G&&!w&&(w=G)}let U="",V=h(E),H=h(S);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let J=m(p)?p.default:p;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,i=J.blurHeight,R=R||J.blurDataURL,U=J.src,!z){if(V||H){if(V&&!H){let X=V/J.width;H=Math.round(J.height*X)}else if(!V&&H){let $=H/J.height;V=Math.round(J.width*$)}}else V=J.width,H=J.height}}let K=!v&&("lazy"===y||void 0===y);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(x=!0,K=!1),B.unoptimized&&(x=!0);let Q=h(_),Y=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:A}:{},{color:"transparent"},C),ee="blur"===N&&R?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:H,blurWidth:r,blurHeight:i,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=a.exec(r);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:i.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:a,width:s[d]})}}({config:B,src:p,unoptimized:x,width:V,quality:Q,sizes:w,loader:Z}),er=p,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:W.crossOrigin},ei=l.useRef(k);l.useEffect(()=>{ei.current=k},[k]);let ea=l.useRef(I);l.useEffect(()=>{ea.current=I},[I]);let eo=n({isLazy:K,imgAttributes:et,heightInt:H,widthInt:V,qualityInt:Q,className:j,imgStyle:Y,blurStyle:ee,loading:y,config:B,fill:z,unoptimized:x,placeholder:N,loader:Z,srcString:er,onLoadRef:ei,onLoadingCompleteRef:ea},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},eo,{ref:t})),v?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a}=e,o=n||t,l=i||r,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},8095:function(e,t,r){"use strict";var n=r(5893);r(7294);let i=e=>{let{children:t}=e;return(0,n.jsx)("h1",{className:'relative mb-10 xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl before:content-[""] before:block before:absolute before:top-[170%] before:left-[25%] before:w-[50%] before:h-[5px] before:bg-yellow-500 ',children:t})};t.Z=i},5970:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(5675),a=r.n(i),o=r(4184),l=r.n(o),s=r(8095);let c=()=>(0,n.jsxs)("div",{className:"px-5 flex flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-start xs:justify-start items-center h-screen ",children:[(0,n.jsx)("div",{className:l()({"block  min-w-[200px] max-w-[300px] rounded-full  xl:p-1 mb-[30px]":!0,"animate-steam":!0}),children:(0,n.jsx)(a(),{alt:"",src:"https://mir-s3-cdn-cf.behance.net/user/276/92390f168029759.5b356ed946ab5.jpg",width:200,height:200,className:l()({"min-w-[200px] max-w-[300px] rounded-full ":!0," absolute z-10 top-0 left-0":!0})})}),(0,n.jsx)(s.Z,{className:"text-5xl mt-5 ",children:"Hello, I‘m Reymart!"}),(0,n.jsxs)("div",{className:"z-10 p-5 text-xl text-center max-w-[800px]",children:[(0,n.jsxs)("p",{children:["I‘m a ",(0,n.jsx)("strong",{children:"web"})," enthusiast — a self-taught developer and experienced designer. I studied IT where my focus is on database management."]}),(0,n.jsx)("p",{children:"One of my passion is to design and build modern websites. "}),(0,n.jsx)("p",{children:"I‘ve been in an IT industry for more than 6-years where I demonstrated both my web design and development skills."})]})]});t.default=c},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);