(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(9186)}])},9186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),l=n(5152),s=n.n(l),a=n(5706),c=n(1804),i=n(1516),o=n(3505),u=n(1664),d=n.n(u),f=n(7294);let p=()=>{let[e,t]=(0,f.useState)(!1),n=()=>{window.scrollY>=10?t(!0):t(!1)};return(0,f.useEffect)(()=>{window.addEventListener("scroll",n)},[]),(0,r.jsx)("header",{className:"main-header ".concat(e?"fixed-header animated slideInDown":""),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"main-box",children:[(0,r.jsx)("div",{className:"nav-outer",children:(0,r.jsx)("div",{className:"logo-box",children:(0,r.jsxs)("div",{className:"logo",children:[(0,r.jsx)(d(),{href:"/",className:"noSticky",children:(0,r.jsx)("img",{src:"images/logo-2.svg",alt:"logo",title:"brand"})}),(0,r.jsx)(d(),{href:"/",className:"isSticky",children:(0,r.jsx)("img",{src:"images/logo.svg",alt:"logo",title:"brand"})})]})})}),(0,r.jsx)("div",{className:"outer-box",children:(0,r.jsx)("div",{className:"btn-box",children:(0,r.jsx)(d(),{href:"/login",className:"theme-btn btn-style-one",children:(0,r.jsx)("span",{className:"btn-title",children:"Log In"})})})})]})})})},b=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(o.Z,{}),(0,r.jsxs)("div",{className:"login-section",children:[(0,r.jsx)("div",{className:"image-layer",style:{backgroundImage:"url(images/background/12.jpg)"}}),(0,r.jsx)("div",{className:"outer-box",children:(0,r.jsx)("div",{className:"login-form default-form",children:(0,r.jsx)(i.Z,{})})})]})]}),m=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{pageTitle:"Register"}),(0,r.jsx)(b,{})]});var h=s()(()=>Promise.resolve(m),{ssr:!1})},1163:function(e,t,n){e.exports=n(880)},776:function(e,t,n){"use strict";let r;n.d(t,{OK:function(){return C},td:function(){return v},x4:function(){return R},mQ:function(){return N}});var l=n(7294);function s(e){return t=>!!t.type&&t.type.tabsRole===e}let a=s("Tab"),c=s("TabList"),i=s("TabPanel");function o(e,t){return l.Children.map(e,e=>null===e?null:a(e)||c(e)||i(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,l.cloneElement)(e,{...e.props,children:o(e.props.children,t)}):e)}var u=n(6010);function d(e){let t=0;return!function e(t,n){return l.Children.forEach(t,t=>{null!==t&&(a(t)||i(t)?n(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(c(t)&&n(t),e(t.props.children,n)))})}(e,e=>{a(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function p(e){return f(e)&&e.getAttribute("data-rttab")}function b(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let m=e=>{let t=(0,l.useRef)([]),n=(0,l.useRef)([]),s=(0,l.useRef)();function f(t,n){if(t<0||t>=x())return;let{onSelect:r,selectedIndex:l}=e;r(t,l,n)}function m(e){let t=x();for(let n=e+1;n<t;n++)if(!b(g(n)))return n;for(let r=0;r<e;r++)if(!b(g(r)))return r;return e}function h(e){let t=e;for(;t--;)if(!b(g(t)))return t;for(t=x();t-- >e;)if(!b(g(t)))return t;return e}function x(){let{children:t}=e;return d(t)}function g(e){return t.current[`tabs-${e}`]}function N(e){let t=e.target;do if(j(t)){if(b(t))return;let n=[].slice.call(t.parentNode.children).filter(p).indexOf(t);f(n,e);return}while(null!=(t=t.parentNode))}function j(e){if(!p(e))return!1;let t=e.parentElement;do{if(t===s.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:v,className:y,disabledTabClassName:w,domRef:E,focus:C,forceRenderTabPanel:k,onSelect:T,selectedIndex:_,selectedTabClassName:R,selectedTabPanelClassName:I,environment:P,disableUpDownKeys:$,disableLeftRightKeys:O,...A}=e;return l.createElement("div",Object.assign({},A,{className:(0,u.Z)(y),onClick:N,onKeyDown:function(t){let{direction:n,disableUpDownKeys:r,disableLeftRightKeys:l}=e;if(j(t.target)){let{selectedIndex:s}=e,a=!1,c=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(a=!0,c=!1,N(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(s=function(){let e=x();for(;e--;)if(!b(g(e)))return e;return null}(),a=!0,c=!0):(36===t.keyCode||"Home"===t.code)&&(s=function(){let e=x();for(let t=0;t<e;t++)if(!b(g(t)))return t;return null}(),a=!0,c=!0):(s="rtl"===n?h(s):m(s),a=!0,c=!0):(s="rtl"===n?m(s):h(s),a=!0,c=!0),a&&t.preventDefault(),c&&f(s,t)}},ref(e){s.current=e,E&&E(e)},"data-rttabs":!0}),function(){let s=0,{children:u,disabledTabClassName:d,focus:f,forceRenderTabPanel:p,selectedIndex:b,selectedTabClassName:m,selectedTabPanelClassName:h,environment:N}=e;n.current=n.current||[];let j=n.current.length-x(),v=(0,l.useId)();for(;j++<0;)n.current.push(`${v}${n.current.length}`);return o(u,e=>{let u=e;if(c(e)){let x=0,j=!1;null==r&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{r=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(n){r=!1}}(N);let v=N||("undefined"!=typeof window?window:void 0);r&&v&&(j=l.Children.toArray(e.props.children).filter(a).some((e,t)=>v.document.activeElement===g(t))),u=(0,l.cloneElement)(e,{children:o(e.props.children,e=>{let r=`tabs-${x}`,s=b===x,a={tabRef(e){t.current[r]=e},id:n.current[x],selected:s,focus:s&&(f||j)};return m&&(a.selectedClassName=m),d&&(a.disabledClassName=d),x++,(0,l.cloneElement)(e,a)})})}else if(i(e)){let y={id:n.current[s],selected:b===s};p&&(y.forceRender=p),h&&(y.selectedClassName=h),s++,u=(0,l.cloneElement)(e,y)}return u})}())};m.defaultProps={className:"react-tabs",focus:!1},m.propTypes={};let h=e=>null===e.selectedIndex?1:0,x=(e,t)=>{},g=e=>{let{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:s,onSelect:a}=e,[c,i]=(0,l.useState)(n),[o]=(0,l.useState)(h(e)),[u,f]=(0,l.useState)(1===o?r||0:null);if((0,l.useEffect)(()=>{i(!1)},[]),1===o){let p=d(t);(0,l.useEffect)(()=>{null!=u&&f(Math.min(u,Math.max(0,p-1)))},[p])}x(e,o);let b=(e,t,n)=>{("function"!=typeof a||!1!==a(e,t,n))&&(s&&i(!0),1===o&&f(e))},g={...e};return g.focus=c,g.onSelect=b,null!=u&&(g.selectedIndex=u),delete g.defaultFocus,delete g.defaultIndex,delete g.focusTabOnClick,l.createElement(m,g,t)};g.propTypes={},g.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},g.tabsRole="Tabs";var N=g;let j=e=>{let{children:t,className:n,...r}=e;return l.createElement("ul",Object.assign({},r,{className:(0,u.Z)(n),role:"tablist"}),t)};j.tabsRole="TabList",j.propTypes={},j.defaultProps={className:"react-tabs__tab-list"};var v=j;let y="react-tabs__tab",w={className:y,disabledClassName:`${y}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${y}--selected`},E=e=>{let t=(0,l.useRef)(),{children:n,className:r,disabled:s,disabledClassName:a,focus:c,id:i,selected:o,selectedClassName:d,tabIndex:f,tabRef:p,...b}=e;return(0,l.useEffect)(()=>{o&&c&&t.current.focus()},[o,c]),l.createElement("li",Object.assign({},b,{className:(0,u.Z)(r,{[d]:o,[a]:s}),ref(e){t.current=e,p&&p(e)},role:"tab",id:`tab${i}`,"aria-selected":o?"true":"false","aria-disabled":s?"true":"false","aria-controls":`panel${i}`,tabIndex:f||(o?"0":null),"data-rttab":!0}),n)};E.propTypes={},E.tabsRole="Tab",E.defaultProps=w;var C=E;let k="react-tabs__tab-panel",T={className:k,forceRender:!1,selectedClassName:`${k}--selected`},_=e=>{let{children:t,className:n,forceRender:r,id:s,selected:a,selectedClassName:c,...i}=e;return l.createElement("div",Object.assign({},i,{className:(0,u.Z)(n,{[c]:a}),role:"tabpanel",id:`panel${s}`,"aria-labelledby":`tab${s}`}),r||a?t:null)};_.tabsRole="TabPanel",_.propTypes={},_.defaultProps=T;var R=_}},function(e){e.O(0,[114,914,264,774,888,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);