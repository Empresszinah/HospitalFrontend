(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,r;var a,{src:o,sizes:m,unoptimized:y=!1,priority:v=!1,loading:w,className:k,quality:C,width:E,height:x,fill:R,style:P,onLoad:_,onLoadingComplete:N,placeholder:S="empty",blurDataURL:j,layout:O,objectFit:z,objectPosition:I,lazyBoundary:T,lazyRoot:A}=e,L=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),M=l.useMemo(()=>{let e=p||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),W=L,$=W.loader||f.default;if(delete W.loader,"__next_img_default"in $){if("custom"===M.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=$;$=e=>{let{config:t}=e,r=i(e,["config"]);return B(r)}}if(O){"fill"===O&&(R=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];Z&&(P=n({},P,Z));let F={responsive:"100vw",fill:"100vw"}[O];F&&!m&&(m=F)}let V="",U=g(E),q=g(x);if("object"==typeof(a=o)&&(h(a)||void 0!==a.src)){let G=h(o)?o.default:o;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(t=G.blurWidth,r=G.blurHeight,j=j||G.blurDataURL,V=G.src,!R){if(U||q){if(U&&!q){let K=U/G.width;q=Math.round(G.height*K)}else if(!U&&q){let H=q/G.height;U=Math.round(G.width*H)}}else U=G.width,q=G.height}}let J=!v&&("lazy"===w||void 0===w);((o="string"==typeof o?o:V).startsWith("data:")||o.startsWith("blob:"))&&(y=!0,J=!1),M.unoptimized&&(y=!0);let[Q,X]=l.useState(!1),[Y,ee]=l.useState(!1),et=g(C),er=Object.assign(R?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:I}:{},Y?{}:{color:"transparent"},P),en="blur"===S&&j&&!Q?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:q,blurWidth:t,blurHeight:r,blurDataURL:j}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:o,sizes:i,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,i=[];for(let l;l=o.exec(r);l)i.push(parseInt(l[2]));if(i.length){let s=.01*Math.min(...i);return{widths:a.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:M,src:o,unoptimized:y,width:U,quality:et,sizes:m,loader:$}),eo=o,ei={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:W.crossOrigin},el=l.useRef(_);l.useEffect(()=>{el.current=_},[_]);let es=l.useRef(N);l.useEffect(()=>{es.current=N},[N]);let ec=n({isLazy:J,imgAttributes:ea,heightInt:q,widthInt:U,qualityInt:et,className:k,imgStyle:er,blurStyle:en,loading:w,config:M,fill:R,unoptimized:y,placeholder:S,loader:$,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},ec)),v?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},ei))):null)};var n=r(6495).Z,a=r(2648).Z,o=r(1598).Z,i=r(7273).Z,l=o(r(7294)),s=a(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=a(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,a,o,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let b=e=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:o,className:s,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:p,loading:h,srcString:g,config:b,unoptimized:y,loader:v,onLoadRef:w,onLoadingCompleteRef:k,setBlurComplete:C,setShowAltText:E,onLoad:x,onError:R}=e,P=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},P,t,{width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:h,style:n({},c,u),ref:l.useCallback(e=>{e&&(R&&(e.src=e.src),e.complete&&m(e,g,p,w,k,C,y))},[g,p,w,k,C,R,y]),onLoad(e){let t=e.currentTarget;m(t,g,p,w,k,C,y)},onError(e){E(!0),"blur"===p&&C(!0),R&&R(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:o}=e,i=n||t,l=a||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5734:function(){},5675:function(e,t,r){e.exports=r(9749)},1163:function(e,t,r){e.exports=r(880)},5774:function(e,t,r){"use strict";r.d(t,{Ip:function(){return i},y3:function(){return l}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e){var t,r,a,o,i,l,s,c=e.className,u=e.counterClockwise,d=e.dashRatio,f=e.pathRadius,p=e.strokeWidth,h=e.style;return(0,n.createElement)("path",{className:c,style:Object.assign({},h,(r=(t={pathRadius:f,dashRatio:d,counterClockwise:u}).counterClockwise,o=(1-t.dashRatio)*(a=2*Math.PI*t.pathRadius),{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-o:o)+"px"})),d:"\n      M 50,50\n      m 0,-"+(l=(i={pathRadius:f,counterClockwise:u}).pathRadius)+"\n      a "+l+","+l+" "+(s=i.counterClockwise?1:0)+" 1 1 0,"+2*l+"\n      a "+l+","+l+" "+s+" 1 1 0,-"+2*l+"\n    ",strokeWidth:p,fillOpacity:0})}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return!function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,i=e.counterClockwise,l=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),d=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:l.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(o,{className:a.trail,counterClockwise:i,dashRatio:t,pathRadius:u,strokeWidth:s,style:l.trail}),(0,n.createElement)(o,{className:a.path,counterClockwise:i,dashRatio:d*t,pathRadius:u,strokeWidth:s,style:l.path}),c?(0,n.createElement)("text",{className:a.text,style:l.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function l(e){var t=e.rotation,r=e.strokeLinecap,n=e.textColor,a=e.textSize,o=e.pathColor,i=e.pathTransition,l=e.pathTransitionDuration,c=e.trailColor,u=e.backgroundColor,d=null==t?void 0:"rotate("+t+"turn)",f=null==t?void 0:"center center";return{root:{},path:s({stroke:o,strokeLinecap:r,transform:d,transformOrigin:f,transition:i,transitionDuration:null==l?void 0:l+"s"}),trail:s({stroke:c,strokeLinecap:r,transform:d,transformOrigin:f}),text:s({fill:n,fontSize:a}),background:s({fill:u})}}function s(e){return Object.keys(e).forEach(function(t){null==e[t]&&delete e[t]}),e}},776:function(e,t,r){"use strict";let n;r.d(t,{OK:function(){return R},td:function(){return k},x4:function(){return S},mQ:function(){return v}});var a=r(7294);function o(e){return t=>!!t.type&&t.type.tabsRole===e}let i=o("Tab"),l=o("TabList"),s=o("TabPanel");function c(e,t){return a.Children.map(e,e=>null===e?null:i(e)||l(e)||s(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,a.cloneElement)(e,{...e.props,children:c(e.props.children,t)}):e)}var u=r(6010);function d(e){let t=0;return!function e(t,r){return a.Children.forEach(t,t=>{null!==t&&(i(t)||s(t)?r(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(l(t)&&r(t),e(t.props.children,r)))})}(e,e=>{i(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function p(e){return f(e)&&e.getAttribute("data-rttab")}function h(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let g=e=>{let t=(0,a.useRef)([]),r=(0,a.useRef)([]),o=(0,a.useRef)();function f(t,r){if(t<0||t>=b())return;let{onSelect:n,selectedIndex:a}=e;n(t,a,r)}function g(e){let t=b();for(let r=e+1;r<t;r++)if(!h(y(r)))return r;for(let n=0;n<e;n++)if(!h(y(n)))return n;return e}function m(e){let t=e;for(;t--;)if(!h(y(t)))return t;for(t=b();t-- >e;)if(!h(y(t)))return t;return e}function b(){let{children:t}=e;return d(t)}function y(e){return t.current[`tabs-${e}`]}function v(e){let t=e.target;do if(w(t)){if(h(t))return;let r=[].slice.call(t.parentNode.children).filter(p).indexOf(t);f(r,e);return}while(null!=(t=t.parentNode))}function w(e){if(!p(e))return!1;let t=e.parentElement;do{if(t===o.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:k,className:C,disabledTabClassName:E,domRef:x,focus:R,forceRenderTabPanel:P,onSelect:_,selectedIndex:N,selectedTabClassName:S,selectedTabPanelClassName:j,environment:O,disableUpDownKeys:z,disableLeftRightKeys:I,...T}=e;return a.createElement("div",Object.assign({},T,{className:(0,u.Z)(C),onClick:v,onKeyDown:function(t){let{direction:r,disableUpDownKeys:n,disableLeftRightKeys:a}=e;if(w(t.target)){let{selectedIndex:o}=e,i=!1,l=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(i=!0,l=!1,v(t)),(a||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?(a||39!==t.keyCode&&"ArrowRight"!==t.code)&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(o=function(){let e=b();for(;e--;)if(!h(y(e)))return e;return null}(),i=!0,l=!0):(36===t.keyCode||"Home"===t.code)&&(o=function(){let e=b();for(let t=0;t<e;t++)if(!h(y(t)))return t;return null}(),i=!0,l=!0):(o="rtl"===r?m(o):g(o),i=!0,l=!0):(o="rtl"===r?g(o):m(o),i=!0,l=!0),i&&t.preventDefault(),l&&f(o,t)}},ref(e){o.current=e,x&&x(e)},"data-rttabs":!0}),function(){let o=0,{children:u,disabledTabClassName:d,focus:f,forceRenderTabPanel:p,selectedIndex:h,selectedTabClassName:g,selectedTabPanelClassName:m,environment:v}=e;r.current=r.current||[];let w=r.current.length-b(),k=(0,a.useId)();for(;w++<0;)r.current.push(`${k}${r.current.length}`);return c(u,e=>{let u=e;if(l(e)){let b=0,w=!1;null==n&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{n=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(r){n=!1}}(v);let k=v||("undefined"!=typeof window?window:void 0);n&&k&&(w=a.Children.toArray(e.props.children).filter(i).some((e,t)=>k.document.activeElement===y(t))),u=(0,a.cloneElement)(e,{children:c(e.props.children,e=>{let n=`tabs-${b}`,o=h===b,i={tabRef(e){t.current[n]=e},id:r.current[b],selected:o,focus:o&&(f||w)};return g&&(i.selectedClassName=g),d&&(i.disabledClassName=d),b++,(0,a.cloneElement)(e,i)})})}else if(s(e)){let C={id:r.current[o],selected:h===o};p&&(C.forceRender=p),m&&(C.selectedClassName=m),o++,u=(0,a.cloneElement)(e,C)}return u})}())};g.defaultProps={className:"react-tabs",focus:!1},g.propTypes={};let m=e=>null===e.selectedIndex?1:0,b=(e,t)=>{},y=e=>{let{children:t,defaultFocus:r,defaultIndex:n,focusTabOnClick:o,onSelect:i}=e,[l,s]=(0,a.useState)(r),[c]=(0,a.useState)(m(e)),[u,f]=(0,a.useState)(1===c?n||0:null);if((0,a.useEffect)(()=>{s(!1)},[]),1===c){let p=d(t);(0,a.useEffect)(()=>{null!=u&&f(Math.min(u,Math.max(0,p-1)))},[p])}b(e,c);let h=(e,t,r)=>{("function"!=typeof i||!1!==i(e,t,r))&&(o&&s(!0),1===c&&f(e))},y={...e};return y.focus=l,y.onSelect=h,null!=u&&(y.selectedIndex=u),delete y.defaultFocus,delete y.defaultIndex,delete y.focusTabOnClick,a.createElement(g,y,t)};y.propTypes={},y.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},y.tabsRole="Tabs";var v=y;let w=e=>{let{children:t,className:r,...n}=e;return a.createElement("ul",Object.assign({},n,{className:(0,u.Z)(r),role:"tablist"}),t)};w.tabsRole="TabList",w.propTypes={},w.defaultProps={className:"react-tabs__tab-list"};var k=w;let C="react-tabs__tab",E={className:C,disabledClassName:`${C}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${C}--selected`},x=e=>{let t=(0,a.useRef)(),{children:r,className:n,disabled:o,disabledClassName:i,focus:l,id:s,selected:c,selectedClassName:d,tabIndex:f,tabRef:p,...h}=e;return(0,a.useEffect)(()=>{c&&l&&t.current.focus()},[c,l]),a.createElement("li",Object.assign({},h,{className:(0,u.Z)(n,{[d]:c,[i]:o}),ref(e){t.current=e,p&&p(e)},role:"tab",id:`tab${s}`,"aria-selected":c?"true":"false","aria-disabled":o?"true":"false","aria-controls":`panel${s}`,tabIndex:f||(c?"0":null),"data-rttab":!0}),r)};x.propTypes={},x.tabsRole="Tab",x.defaultProps=E;var R=x;let P="react-tabs__tab-panel",_={className:P,forceRender:!1,selectedClassName:`${P}--selected`},N=e=>{let{children:t,className:r,forceRender:n,id:o,selected:i,selectedClassName:l,...s}=e;return a.createElement("div",Object.assign({},s,{className:(0,u.Z)(r,{[l]:i}),role:"tabpanel",id:`panel${o}`,"aria-labelledby":`tab${o}`}),n||i?t:null)};N.tabsRole="TabPanel",N.propTypes={},N.defaultProps=_;var S=N}}]);