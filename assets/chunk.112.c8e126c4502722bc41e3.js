/*! For license information please see chunk.112.c8e126c4502722bc41e3.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[112],{303:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{afterMain:()=>w,afterRead:()=>y,afterWrite:()=>B,applyStyles:()=>N,arrow:()=>J,auto:()=>s,basePlacements:()=>c,beforeMain:()=>E,beforeRead:()=>v,beforeWrite:()=>T,bottom:()=>i,clippingParents:()=>h,computeStyles:()=>re,createPopper:()=>Le,createPopperBase:()=>_e,createPopperLite:()=>Ne,detectOverflow:()=>ve,end:()=>l,eventListeners:()=>ie,flip:()=>be,hide:()=>Ae,left:()=>a,main:()=>A,modifierPhases:()=>H,offset:()=>we,placements:()=>g,popper:()=>p,popperGenerator:()=>Pe,popperOffsets:()=>Te,preventOverflow:()=>Ce,read:()=>b,reference:()=>d,right:()=>o,start:()=>u,top:()=>n,variationPlacements:()=>m,viewport:()=>f,write:()=>C})
var n="top",i="bottom",o="right",a="left",s="auto",c=[n,i,o,a],u="start",l="end",h="clippingParents",f="viewport",p="popper",d="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+l])}),[]),g=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])}),[]),v="beforeRead",b="read",y="afterRead",E="beforeMain",A="main",w="afterMain",T="beforeWrite",C="write",B="afterWrite",H=[v,b,y,E,A,w,T,C,B]
function O(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function P(e){return e instanceof S(e).Element||e instanceof Element}function _(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}const N={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e]
_(i)&&O(i)&&(Object.assign(i.style,r),Object.keys(n).forEach((function(e){var t=n[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
_(n)&&O(n)&&(Object.assign(n.style,o),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function R(e){return e.split("-")[0]}var D=Math.max,I=Math.min,x=Math.round
function M(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function F(){return!/^((?!chrome|android).)*safari/i.test(M())}function k(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1)
var n=e.getBoundingClientRect(),i=1,o=1
t&&_(e)&&(i=e.offsetWidth>0&&x(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&x(n.height)/e.offsetHeight||1)
var a=(P(e)?S(e):window).visualViewport,s=!F()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/i,u=(n.top+(s&&a?a.offsetTop:0))/o,l=n.width/i,h=n.height/o
return{width:l,height:h,top:u,right:c+l,bottom:u+h,left:c,x:c,y:u}}function G(e){var t=k(e),r=e.offsetWidth,n=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function U(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&L(r)){var n=t
do{if(n&&e.isSameNode(n))return!0
n=n.parentNode||n.host}while(n)}return!1}function j(e){return S(e).getComputedStyle(e)}function V(e){return["table","td","th"].indexOf(O(e))>=0}function X(e){return((P(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||X(e)}function W(e){return _(e)&&"fixed"!==j(e).position?e.offsetParent:null}function Y(e){for(var t=S(e),r=W(e);r&&V(r)&&"static"===j(r).position;)r=W(r)
return r&&("html"===O(r)||"body"===O(r)&&"static"===j(r).position)?t:r||function(e){var t=/firefox/i.test(M())
if(/Trident/i.test(M())&&_(e)&&"fixed"===j(e).position)return null
var r=K(e)
for(L(r)&&(r=r.host);_(r)&&["html","body"].indexOf(O(r))<0;){var n=j(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,r){return D(e,I(t,r))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}const J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,s=e.name,u=e.options,l=r.elements.arrow,h=r.modifiersData.popperOffsets,f=R(r.placement),p=z(f),d=[a,o].indexOf(f)>=0?"height":"width"
if(l&&h){var m=function(e,t){return q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,c))}(u.padding,r),g=G(l),v="y"===p?n:a,b="y"===p?i:o,y=r.rects.reference[d]+r.rects.reference[p]-h[p]-r.rects.popper[d],E=h[p]-r.rects.reference[p],A=Y(l),w=A?"y"===p?A.clientHeight||0:A.clientWidth||0:0,T=y/2-E/2,C=m[v],B=w-g[d]-m[b],H=w/2-g[d]/2+T,O=Z(C,H,B),S=p
r.modifiersData[s]=((t={})[S]=O,t.centerOffset=O-H,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&U(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function $(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,r=e.popper,s=e.popperRect,c=e.placement,u=e.variation,h=e.offsets,f=e.position,p=e.gpuAcceleration,d=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=h.x,b=void 0===v?0:v,y=h.y,E=void 0===y?0:y,A="function"==typeof m?m({x:b,y:E}):{x:b,y:E}
b=A.x,E=A.y
var w=h.hasOwnProperty("x"),T=h.hasOwnProperty("y"),C=a,B=n,H=window
if(d){var O=Y(r),P="clientHeight",_="clientWidth"
O===S(r)&&"static"!==j(O=X(r)).position&&"absolute"===f&&(P="scrollHeight",_="scrollWidth"),(c===n||(c===a||c===o)&&u===l)&&(B=i,E-=(g&&O===H&&H.visualViewport?H.visualViewport.height:O[P])-s.height,E*=p?1:-1),c!==a&&(c!==n&&c!==i||u!==l)||(C=o,b-=(g&&O===H&&H.visualViewport?H.visualViewport.width:O[_])-s.width,b*=p?1:-1)}var L,N=Object.assign({position:f},d&&ee),R=!0===m?function(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1
return{x:x(r*i)/i||0,y:x(n*i)/i||0}}({x:b,y:E},S(r)):{x:b,y:E}
return b=R.x,E=R.y,p?Object.assign({},N,((L={})[B]=T?"0":"",L[C]=w?"0":"",L.transform=(H.devicePixelRatio||1)<=1?"translate("+b+"px, "+E+"px)":"translate3d("+b+"px, "+E+"px, 0)",L)):Object.assign({},N,((t={})[B]=T?E+"px":"",t[C]=w?b+"px":"",t.transform="",t))}const re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,o=r.adaptive,a=void 0===o||o,s=r.roundOffsets,c=void 0===s||s,u={placement:R(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var ne={passive:!0}
const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=void 0===i||i,a=n.resize,s=void 0===a||a,c=S(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return o&&u.forEach((function(e){e.addEventListener("scroll",r.update,ne)})),s&&c.addEventListener("resize",r.update,ne),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",r.update,ne)})),s&&c.removeEventListener("resize",r.update,ne)}},data:{}}
var oe={left:"right",right:"left",bottom:"top",top:"bottom"}
function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var se={start:"end",end:"start"}
function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ue(e){var t=S(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return k(X(e)).left+ue(e).scrollLeft}function he(e){var t=j(e),r=t.overflow,n=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+i+n)}function fe(e){return["html","body","#document"].indexOf(O(e))>=0?e.ownerDocument.body:_(e)&&he(e)?e:fe(K(e))}function pe(e,t){var r
void 0===t&&(t=[])
var n=fe(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),o=S(n),a=i?[o].concat(o.visualViewport||[],he(n)?n:[]):n,s=t.concat(a)
return i?s:s.concat(pe(K(a)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,r){return t===f?de(function(e,t){var r=S(e),n=X(e),i=r.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,c=0
if(i){o=i.width,a=i.height
var u=F();(u||!u&&"fixed"===t)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:s+le(e),y:c}}(e,r)):P(t)?function(e,t){var r=k(e,!1,"fixed"===t)
return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):de(function(e){var t,r=X(e),n=ue(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=D(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=D(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+le(e),c=-n.scrollTop
return"rtl"===j(i||r).direction&&(s+=D(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:s,y:c}}(X(e)))}function ge(e){var t,r=e.reference,s=e.element,c=e.placement,h=c?R(c):null,f=c?$(c):null,p=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2
switch(h){case n:t={x:p,y:r.y-s.height}
break
case i:t={x:p,y:r.y+r.height}
break
case o:t={x:r.x+r.width,y:d}
break
case a:t={x:r.x-s.width,y:d}
break
default:t={x:r.x,y:r.y}}var m=h?z(h):null
if(null!=m){var g="y"===m?"height":"width"
switch(f){case u:t[m]=t[m]-(r[g]/2-s[g]/2)
break
case l:t[m]=t[m]+(r[g]/2-s[g]/2)}}return t}function ve(e,t){void 0===t&&(t={})
var r=t,a=r.placement,s=void 0===a?e.placement:a,u=r.strategy,l=void 0===u?e.strategy:u,m=r.boundary,g=void 0===m?h:m,v=r.rootBoundary,b=void 0===v?f:v,y=r.elementContext,E=void 0===y?p:y,A=r.altBoundary,w=void 0!==A&&A,T=r.padding,C=void 0===T?0:T,B=q("number"!=typeof C?C:Q(C,c)),H=E===p?d:p,S=e.rects.popper,L=e.elements[w?H:E],N=function(e,t,r,n){var i="clippingParents"===t?function(e){var t=pe(K(e)),r=["absolute","fixed"].indexOf(j(e).position)>=0&&_(e)?Y(e):e
return P(r)?t.filter((function(e){return P(e)&&U(e,r)&&"body"!==O(e)})):[]}(e):[].concat(t),o=[].concat(i,[r]),a=o[0],s=o.reduce((function(t,r){var i=me(e,r,n)
return t.top=D(i.top,t.top),t.right=I(i.right,t.right),t.bottom=I(i.bottom,t.bottom),t.left=D(i.left,t.left),t}),me(e,a,n))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(P(L)?L:L.contextElement||X(e.elements.popper),g,b,l),R=k(e.elements.reference),x=ge({reference:R,element:S,strategy:"absolute",placement:s}),M=de(Object.assign({},S,x)),F=E===p?M:R,G={top:N.top-F.top+B.top,bottom:F.bottom-N.bottom+B.bottom,left:N.left-F.left+B.left,right:F.right-N.right+B.right},V=e.modifiersData.offset
if(E===p&&V){var W=V[s]
Object.keys(G).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,r=[n,i].indexOf(e)>=0?"y":"x"
G[e]+=W[r]*t}))}return G}const be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,l=e.name
if(!t.modifiersData[l]._skip){for(var h=r.mainAxis,f=void 0===h||h,p=r.altAxis,d=void 0===p||p,v=r.fallbackPlacements,b=r.padding,y=r.boundary,E=r.rootBoundary,A=r.altBoundary,w=r.flipVariations,T=void 0===w||w,C=r.allowedAutoPlacements,B=t.options.placement,H=R(B),O=v||(H!==B&&T?function(e){if(R(e)===s)return[]
var t=ae(e)
return[ce(e),t,ce(t)]}(B):[ae(B)]),S=[B].concat(O).reduce((function(e,r){return e.concat(R(r)===s?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,a=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,l=void 0===u?g:u,h=$(n),f=h?s?m:m.filter((function(e){return $(e)===h})):c,p=f.filter((function(e){return l.indexOf(e)>=0}))
0===p.length&&(p=f)
var d=p.reduce((function(t,r){return t[r]=ve(e,{placement:r,boundary:i,rootBoundary:o,padding:a})[R(r)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:y,rootBoundary:E,padding:b,flipVariations:T,allowedAutoPlacements:C}):r)}),[]),P=t.rects.reference,_=t.rects.popper,L=new Map,N=!0,D=S[0],I=0;I<S.length;I++){var x=S[I],M=R(x),F=$(x)===u,k=[n,i].indexOf(M)>=0,G=k?"width":"height",U=ve(t,{placement:x,boundary:y,rootBoundary:E,altBoundary:A,padding:b}),j=k?F?o:a:F?i:n
P[G]>_[G]&&(j=ae(j))
var V=ae(j),X=[]
if(f&&X.push(U[M]<=0),d&&X.push(U[j]<=0,U[V]<=0),X.every((function(e){return e}))){D=x,N=!1
break}L.set(x,X)}if(N)for(var K=function(e){var t=S.find((function(t){var r=L.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return D=t,"break"},W=T?3:1;W>0&&"break"!==K(W);W--);t.placement!==D&&(t.modifiersData[l]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ye(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ee(e){return[n,o,i,a].some((function(t){return e[t]>=0}))}const Ae={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),c=ye(a,n),u=ye(s,i,o),l=Ee(c),h=Ee(u)
t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}},we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,s=r.offset,c=void 0===s?[0,0]:s,u=g.reduce((function(e,r){return e[r]=function(e,t,r){var i=R(e),s=[a,n].indexOf(i)>=0?-1:1,c="function"==typeof r?r(Object.assign({},t,{placement:e})):r,u=c[0],l=c[1]
return u=u||0,l=(l||0)*s,[a,o].indexOf(i)>=0?{x:l,y:u}:{x:u,y:l}}(r,t.rects,c),e}),{}),l=u[t.placement],h=l.x,f=l.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=f),t.modifiersData[i]=u}},Te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,s=e.name,c=r.mainAxis,l=void 0===c||c,h=r.altAxis,f=void 0!==h&&h,p=r.boundary,d=r.rootBoundary,m=r.altBoundary,g=r.padding,v=r.tether,b=void 0===v||v,y=r.tetherOffset,E=void 0===y?0:y,A=ve(t,{boundary:p,rootBoundary:d,padding:g,altBoundary:m}),w=R(t.placement),T=$(t.placement),C=!T,B=z(w),H="x"===B?"y":"x",O=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,_="function"==typeof E?E(Object.assign({},t.rects,{placement:t.placement})):E,L="number"==typeof _?{mainAxis:_,altAxis:_}:Object.assign({mainAxis:0,altAxis:0},_),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,x={x:0,y:0}
if(O){if(l){var M,F="y"===B?n:a,k="y"===B?i:o,U="y"===B?"height":"width",j=O[B],V=j+A[F],X=j-A[k],K=b?-P[U]/2:0,W=T===u?S[U]:P[U],q=T===u?-P[U]:-S[U],Q=t.elements.arrow,J=b&&Q?G(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[F],re=ee[k],ne=Z(0,S[U],J[U]),ie=C?S[U]/2-K-ne-te-L.mainAxis:W-ne-te-L.mainAxis,oe=C?-S[U]/2+K+ne+re+L.mainAxis:q+ne+re+L.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),se=ae?"y"===B?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(M=null==N?void 0:N[B])?M:0,ue=j+oe-ce,le=Z(b?I(V,j+ie-ce-se):V,j,b?D(X,ue):X)
O[B]=le,x[B]=le-j}if(f){var he,fe="x"===B?n:a,pe="x"===B?i:o,de=O[H],me="y"===H?"height":"width",ge=de+A[fe],be=de-A[pe],ye=-1!==[n,a].indexOf(w),Ee=null!=(he=null==N?void 0:N[H])?he:0,Ae=ye?ge:de-S[me]-P[me]-Ee+L.altAxis,we=ye?de+S[me]+P[me]-Ee-L.altAxis:be,Te=b&&ye?function(e,t,r){var n=Z(e,t,r)
return n>r?r:n}(Ae,de,we):Z(b?Ae:ge,de,b?we:be)
O[H]=Te,x[H]=Te-de}t.modifiersData[s]=x}},requiresIfExists:["offset"]}
function Be(e,t,r){void 0===r&&(r=!1)
var n,i,o=_(t),a=_(t)&&function(e){var t=e.getBoundingClientRect(),r=x(t.width)/e.offsetWidth||1,n=x(t.height)/e.offsetHeight||1
return 1!==r||1!==n}(t),s=X(t),c=k(e,a,r),u={scrollLeft:0,scrollTop:0},l={x:0,y:0}
return(o||!o&&!r)&&(("body"!==O(t)||he(s))&&(u=(n=t)!==S(n)&&_(n)?{scrollLeft:(i=n).scrollLeft,scrollTop:i.scrollTop}:ue(n)),_(t)?((l=k(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=le(s))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function He(e){var t=new Map,r=new Set,n=[]
function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"}
function Se(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Pe(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,o=void 0===i?Oe:i
return function(e,t,r){void 0===r&&(r=o)
var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(r){var i="function"==typeof r?r(s.options):r
h(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:P(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)}
var a,u,f=function(e){var t=He(e)
return H.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),u=a.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))))
return s.orderedModifiers=f.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect
if("function"==typeof i){var o=i({state:s,name:t,instance:l,options:n})
c.push(o||function(){})}})),l.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper
if(Se(t,r)){s.rects={reference:Be(t,Y(r),"fixed"===s.options.strategy),popper:G(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var i=s.orderedModifiers[n],o=i.fn,a=i.options,c=void 0===a?{}:a,h=i.name
"function"==typeof o&&(s=o({state:s,options:c,name:h,instance:l})||s)}else s.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){h(),u=!0}}
if(!Se(e,t))return l
function h(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var _e=Pe(),Le=Pe({defaultModifiers:[ie,Te,re,N,we,be,Ce,J,Ae]}),Ne=Pe({defaultModifiers:[ie,Te,re,N]})},109:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>D})
var n=r(377),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=i.join(","),a="undefined"==typeof Element,s=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,r){var n=Array.prototype.slice.apply(e.querySelectorAll(o))
return t&&s.call(e,o)&&n.unshift(e),n.filter(r)},l=function e(t,r,n){for(var i=[],a=Array.from(t);a.length;){var c=a.shift()
if("SLOT"===c.tagName){var u=c.assignedElements(),l=e(u.length?u:c.children,!0,n)
n.flatten?i.push.apply(i,l):i.push({scope:c,candidates:l})}else{s.call(c,o)&&n.filter(c)&&(r||!t.includes(c))&&i.push(c)
var h=c.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(c),f=!n.shadowRootFilter||n.shadowRootFilter(c)
if(h&&f){var p=e(!0===h?c.children:h.children,!0,n)
n.flatten?i.push.apply(i,p):i.push({scope:c,candidates:p})}else a.unshift.apply(a,c.children)}}return i},h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},d=function(e){var t=e.getBoundingClientRect(),r=t.width,n=t.height
return 0===r&&0===n},m=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,n=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(i,"details:not([open]) *"))return!0
var o=c(e).host,a=(null==o?void 0:o.ownerDocument.contains(o))||e.ownerDocument.contains(e)
if(r&&"full"!==r){if("non-zero-area"===r)return d(e)}else{if("function"==typeof n){for(var u=e;e;){var l=e.parentElement,h=c(e)
if(l&&!l.shadowRoot&&!0===n(l))return d(e)
e=e.assignedSlot?e.assignedSlot:l||h===e.ownerDocument?l:h.host}e=u}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var n=t.children.item(r)
if("LEGEND"===n.tagName)return!!s.call(t,"fieldset[disabled] *")||!n.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||c(e),n=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=n(window.CSS.escape(e.name))
else try{t=n(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!i||i===e}(e)}(t)||h(t)<0||!m(e,t))},v=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},b=function e(t){var r=[],n=[]
return t.forEach((function(t,i){var o=!!t.scope,a=o?t.scope:t,s=h(a,o),c=o?e(t.candidates):a
0===s?o?r.push.apply(r,c):r.push(a):n.push({documentOrder:i,tabIndex:s,item:t,isScope:o,content:c})})),n.sort(f).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)},y=function(e,t){var r
return r=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:v}):u(e,t.includeContainer,g.bind(null,t)),b(r)},E=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,o)&&g(t,e)},A=i.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,A)&&m(t,e)}
function T(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?T(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H,O=(H=[],{activateTrap:function(e){if(H.length>0){var t=H[H.length-1]
t!==e&&t.pause()}var r=H.indexOf(e);-1===r||H.splice(r,1),H.push(e)},deactivateTrap:function(e){var t=H.indexOf(e);-1!==t&&H.splice(t,1),H.length>0&&H[H.length-1].unpause()}}),S=function(e){return setTimeout(e,0)},P=function(e,t){var r=-1
return e.every((function(e,n){return!t(e)||(r=n,!1)})),r},_=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return"function"==typeof e?e.apply(void 0,r):e},L=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},N=function(e,t){var r,n=(null==t?void 0:t.document)||document,i=C({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,r){return e&&void 0!==e[t]?e[t]:i[r||t]},s=function(e){return o.containerGroups.findIndex((function(t){var r=t.container,n=t.tabbableNodes
return r.contains(e)||n.find((function(t){return t===e}))}))},c=function(e){var t=i[e]
if("function"==typeof t){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a]
t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=n.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},h=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(n.activeElement)>=0)e=n.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},f=function(){if(o.containerGroups=o.containers.map((function(e){var t,r,n=y(e,i.tabbableOptions),o=(t=e,(r=(r=i.tabbableOptions)||{}).getShadowRoot?l([t],r.includeContainer,{filter:m.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):u(t,r.includeContainer,m.bind(null,r)))
return{container:e,tabbableNodes:n,focusableNodes:o,firstTabbableNode:n.length>0?n[0]:null,lastTabbableNode:n.length>0?n[n.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=o.findIndex((function(t){return t===e}))
if(!(r<0))return t?o.slice(r+1).find((function(e){return E(e,i.tabbableOptions)})):o.slice(0,r).reverse().find((function(e){return E(e,i.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function e(t){!1!==t&&t!==n.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(h()))},d=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},g=function(e){var t=L(e)
s(t)>=0||(_(i.clickOutsideDeactivates,e)?r.deactivate({returnFocus:i.returnFocusOnDeactivate&&!w(t,i.tabbableOptions)}):_(i.allowOutsideClick,e)||e.preventDefault())},v=function(e){var t=L(e),r=s(t)>=0
r||t instanceof Document?r&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),p(o.mostRecentlyFocusedNode||h()))},b=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==_(i.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=L(e)
f()
var r=null
if(o.tabbableGroups.length>0){var n=s(t),a=n>=0?o.containerGroups[n]:void 0
if(n<0)r=e.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var u=P(o.tabbableGroups,(function(e){var r=e.firstTabbableNode
return t===r}))
if(u<0&&(a.container===t||w(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(u=n),u>=0){var l=0===u?o.tabbableGroups.length-1:u-1
r=o.tabbableGroups[l].lastTabbableNode}}else{var h=P(o.tabbableGroups,(function(e){var r=e.lastTabbableNode
return t===r}))
if(h<0&&(a.container===t||w(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!a.nextTabbableNode(t))&&(h=n),h>=0){var d=h===o.tabbableGroups.length-1?0:h+1
r=o.tabbableGroups[d].firstTabbableNode}}}else r=c("fallbackFocus")
r&&(e.preventDefault(),p(r))}(e)},A=function(e){var t=L(e)
s(t)>=0||_(i.clickOutsideDeactivates,e)||_(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},T=function(){if(o.active)return O.activateTrap(r),o.delayInitialFocusTimer=i.delayInitialFocus?S((function(){p(h())})):p(h()),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",g,{capture:!0,passive:!1}),n.addEventListener("touchstart",g,{capture:!0,passive:!1}),n.addEventListener("click",A,{capture:!0,passive:!1}),n.addEventListener("keydown",b,{capture:!0,passive:!1}),r},B=function(){if(o.active)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",g,!0),n.removeEventListener("touchstart",g,!0),n.removeEventListener("click",A,!0),n.removeEventListener("keydown",b,!0),r}
return(r={get active(){return o.active},get paused(){return o.paused},activate:function(e){if(o.active)return this
var t=a(e,"onActivate"),r=a(e,"onPostActivate"),i=a(e,"checkCanFocusTrap")
i||f(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,t&&t()
var s=function(){i&&f(),T(),r&&r()}
return i?(i(o.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!o.active)return this
var t=C({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,B(),o.active=!1,o.paused=!1,O.deactivateTrap(r)
var n=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),c=a(t,"checkCanReturnFocus"),u=a(t,"returnFocus","returnFocusOnDeactivate")
n&&n()
var l=function(){S((function(){u&&p(d(o.nodeFocusedBeforeActivation)),s&&s()}))}
return u&&c?(c(d(o.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,B()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,f(),T(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?n.querySelector(e):e})),o.active&&f(),this}}).updateContainerElements(e),r}
let R
try{R=(0,n.capabilities)("3.22")}catch{R=(0,n.capabilities)("3.13")}var D=(0,n.setModifierManager)((()=>({capabilities:R,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:r,isPaused:n,shouldSelfFocus:i,focusTrapOptions:o,additionalElements:a,_createFocusTrap:s}}){e.focusTrapOptions={...o}||{},void 0!==r&&(e.isActive=r),void 0!==n&&(e.isPaused=n),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let c=N
s&&(c=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(void 0!==a?[t,...a]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const r=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=r,n=void 0===t
e.focusTrap.deactivate({returnFocus:n})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=r,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},821:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(294),i=r(336),o=r.n(i),a=r(603)
class s extends(o()){compute([e]){return function(e,t){return(0,a.assert)("You must pass a owner to isComponent (isComponent checks if the owner you pass has a factory for the given component)",e),(0,a.assert)("You must pass a component name to isComponent (isComponent checks if the passed owner has a factory for the given component)",t),Boolean(e.factoryFor(`component:${t}`))}((0,n.getOwner)(this),e)}}},597:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>c,modifier:()=>l})
var n=r(294),i=r(377),o=r(130)
function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class s{constructor(e){a(this,"capabilities",(0,i.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t)
n.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class c{constructor(e,t){(0,n.setOwner)(this,e)}modify(e,t,r){}}(0,i.setModifierManager)((e=>new s(e)),c)
const u=new class{constructor(){a(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:i,named:o}=r,a=e.instance(t,i,o)
"function"==typeof a&&(n.teardown=a)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function l(e,t){return e.toString=()=>t?.name||e.name,(0,i.setModifierManager)((()=>u),e)}},954:e=>{function t(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function r(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function n(e,t,r,n,i){return r.bind(t,e,n,i)}function i(e,i){return n(e,this,1===e.length?t:r,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(e){return e in this.cache},a.prototype.get=function(e){return this.cache[e]},a.prototype.set=function(e,t){this.cache[e]=t}
var s={create:function(){return new a}}
e.exports=function(e,t){var r=t&&t.cache?t.cache:s,n=t&&t.serializer?t.serializer:o
return(t&&t.strategy?t.strategy:i)(e,{cache:r,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,r,t.cache.create(),t.serializer)},monadic:function(e,r){return n(e,this,t,r.cache.create(),r.serializer)}}},520:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{SKELETON_TYPE:()=>i,SyntaxError:()=>P,TYPE:()=>n,createLiteralElement:()=>v,createNumberElement:()=>b,isArgumentElement:()=>s,isDateElement:()=>u,isDateTimeSkeleton:()=>g,isLiteralElement:()=>a,isNumberElement:()=>c,isNumberSkeleton:()=>m,isPluralElement:()=>f,isPoundElement:()=>p,isSelectElement:()=>h,isTagElement:()=>d,isTimeElement:()=>l,parse:()=>R,pegParse:()=>_})
var n,i,o=r(497)
function a(e){return e.type===n.literal}function s(e){return e.type===n.argument}function c(e){return e.type===n.number}function u(e){return e.type===n.date}function l(e){return e.type===n.time}function h(e){return e.type===n.select}function f(e){return e.type===n.plural}function p(e){return e.type===n.pound}function d(e){return e.type===n.tag}function m(e){return!(!e||"object"!=typeof e||e.type!==i.number)}function g(e){return!(!e||"object"!=typeof e||e.type!==i.dateTime)}function v(e){return{type:n.literal,value:e}}function b(e,t){return{type:n.number,value:e,style:t}}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(i||(i={}))
var y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,E=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,A=/^(@+)?(\+|#+)?$/g,w=/(\*)(0+)|(#+)(0+)|(0+)/g,T=/^(0+)$/
function C(e){var t={}
return e.replace(A,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function B(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function H(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!T.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function O(e){return B(e)||{}}function S(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,o.Cl)((0,o.Cl)((0,o.Cl)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,o.Cl)((0,o.Cl)({},e),O(t))}),{}))
continue
case"engineering":t=(0,o.Cl)((0,o.Cl)((0,o.Cl)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,o.Cl)((0,o.Cl)({},e),O(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(w,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(T.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(E.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(E,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),i.options.length&&(t=(0,o.Cl)((0,o.Cl)({},t),C(i.options[0])))}else if(A.test(i.stem))t=(0,o.Cl)((0,o.Cl)({},t),C(i.stem))
else{var a=B(i.stem)
a&&(t=(0,o.Cl)((0,o.Cl)({},t),a))
var s=H(i.stem)
s&&(t=(0,o.Cl)((0,o.Cl)({},t),s))}}return t}var P=function(e){function t(r,n,i,o){var a=e.call(this)||this
return a.message=r,a.expected=n,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return(0,o.C6)(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){switch(e.type){case"literal":return'"'+n(e.text)+'"'
case"class":var t=e.parts.map((function(e){return Array.isArray(e)?i(e[0])+"-"+i(e[1]):i(e)}))
return"["+(e.inverted?"^":"")+t+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return e.description}}return"Expected "+function(e){var t,r,n=e.map(o)
if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+((a=t)?'"'+n(a)+'"':"end of input")+" found."
var a},t}(Error),_=function(e,t){t=void 0!==t?t:{}
var r,a={},s={start:_t},c=_t,u=function(){return!cr},l=function(e){return e},h=function(){return cr},f="<",p=Ct("<",!1),d=function(e){return e.join("")},m=function(){return"<"},g=function(e){return(0,o.Cl)({type:n.literal,value:e},ir())},v="#",b=Ct("#",!1),E=function(){return(0,o.Cl)({type:n.pound},ir())},A=Ht("tagElement"),w=function(e,t,r){return e!==r&&Tt('Mismatch tag "'+e+'" !== "'+r+'"',wt()),(0,o.Cl)({type:n.tag,value:e,children:t},ir())},T="/>",C=Ct("/>",!1),B=function(e){return(0,o.Cl)({type:n.literal,value:e.join("")},ir())},H=">",O=Ct(">",!1),_=function(e){return e},L="</",N=Ct("</",!1),R=Ht("argumentElement"),D="{",I=Ct("{",!1),x="}",M=Ct("}",!1),F=function(e){return(0,o.Cl)({type:n.argument,value:e},ir())},k=Ht("numberSkeletonId"),G=/^['\/{}]/,U=Bt(["'","/","{","}"],!1,!1),j={type:"any"},V=Ht("numberSkeletonTokenOption"),X="/",K=Ct("/",!1),W=function(e){return e},Y=Ht("numberSkeletonToken"),z=function(e,t){return{stem:e,options:t}},Z=function(e){return(0,o.Cl)({type:i.number,tokens:e,parsedOptions:ur?S(e):{}},ir())},q="::",Q=Ct("::",!1),J=function(e){return e},$=function(){return rr.push("numberArgStyle"),!0},ee=function(e){return rr.pop(),e.replace(/\s*$/,"")},te=",",re=Ct(",",!1),ne="number",ie=Ct("number",!1),oe=function(e,t,r){return(0,o.Cl)({type:"number"===t?n.number:"date"===t?n.date:n.time,style:r&&r[2],value:e},ir())},ae="'",se=Ct("'",!1),ce=/^[^']/,ue=Bt(["'"],!0,!1),le=/^[^a-zA-Z'{}]/,he=Bt([["a","z"],["A","Z"],"'","{","}"],!0,!1),fe=/^[a-zA-Z]/,pe=Bt([["a","z"],["A","Z"]],!1,!1),de=function(e){return(0,o.Cl)({type:i.dateTime,pattern:e,parsedOptions:ur?(t=e,r={},t.replace(y,(function(e){var t=e.length
switch(e[0]){case"G":r.era=4===t?"long":5===t?"narrow":"short"
break
case"y":r.year=2===t?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":r.day=["numeric","2-digit"][t-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":r.weekday=4===t?"short":5===t?"narrow":"short"
break
case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"a":r.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1]
break
case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1]
break
case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1]
break
case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":r.minute=["numeric","2-digit"][t-1]
break
case"s":r.second=["numeric","2-digit"][t-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":r.timeZoneName=t<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),r):{}},ir())
var t,r},me=function(){return rr.push("dateOrTimeArgStyle"),!0},ge="date",ve=Ct("date",!1),be="time",ye=Ct("time",!1),Ee="plural",Ae=Ct("plural",!1),we="selectordinal",Te=Ct("selectordinal",!1),Ce="offset:",Be=Ct("offset:",!1),He=function(e,t,r,i){return(0,o.Cl)({type:n.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:i.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Tt('Duplicate option "'+r+'" in plural element: "'+At()+'"',wt()),e[r]={value:n,location:i},e}),{})},ir())},Oe="select",Se=Ct("select",!1),Pe=function(e,t){return(0,o.Cl)({type:n.select,value:e,options:t.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Tt('Duplicate option "'+r+'" in select element: "'+At()+'"',wt()),e[r]={value:n,location:i},e}),{})},ir())},_e="=",Le=Ct("=",!1),Ne=function(e){return rr.push("select"),!0},Re=function(e,t){return rr.pop(),(0,o.Cl)({id:e,value:t},ir())},De=function(e){return rr.push("plural"),!0},Ie=function(e,t){return rr.pop(),(0,o.Cl)({id:e,value:t},ir())},xe=Ht("whitespace"),Me=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Fe=Bt([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),ke=Ht("syntax pattern"),Ge=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,Ue=Bt([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),je=Ht("optional whitespace"),Ve=Ht("number"),Xe="-",Ke=Ct("-",!1),We=function(e,t){return t?e?-t:t:0},Ye=(Ht("apostrophe"),Ht("double apostrophes")),ze="''",Ze=Ct("''",!1),qe=function(){return"'"},Qe=function(e,t){return e+t.replace("''","'")},Je=function(e){return!("<"===e||"{"===e||nr()&&"#"===e||rr.length>1&&"}"===e)},$e="\n",et=Ct("\n",!1),tt=function(e){return"<"===e||">"===e||"{"===e||"}"===e||nr()&&"#"===e},rt=Ht("argNameOrNumber"),nt=Ht("validTag"),it=Ht("argNumber"),ot="0",at=Ct("0",!1),st=function(){return 0},ct=/^[1-9]/,ut=Bt([["1","9"]],!1,!1),lt=/^[0-9]/,ht=Bt([["0","9"]],!1,!1),ft=function(e){return parseInt(e.join(""),10)},pt=Ht("argName"),dt=Ht("tagName"),mt=0,gt=0,vt=[{line:1,column:1}],bt=0,yt=[],Et=0
if(void 0!==t.startRule){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".')
c=s[t.startRule]}function At(){return e.substring(gt,mt)}function wt(){return St(gt,mt)}function Tt(e,t){throw function(e,t){return new P(e,[],"",t)}(e,t=void 0!==t?t:St(gt,mt))}function Ct(e,t){return{type:"literal",text:e,ignoreCase:t}}function Bt(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Ht(e){return{type:"other",description:e}}function Ot(t){var r,n=vt[t]
if(n)return n
for(r=t-1;!vt[r];)r--
for(n={line:(n=vt[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return vt[t]=n,n}function St(e,t){var r=Ot(e),n=Ot(t)
return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function Pt(e){mt<bt||(mt>bt&&(bt=mt,yt=[]),yt.push(e))}function _t(){return Lt()}function Lt(){var e,t
for(e=[],t=Nt();t!==a;)e.push(t),t=Nt()
return e}function Nt(){var t,r
return t=mt,gt=mt,(u()?void 0:a)!==a?(r=function(){var e,t,r,n
return Et++,(e=It())===a&&(e=mt,(t=xt())!==a&&(r=Lt())!==a&&(n=Mt())!==a?(gt=e,e=t=w(t,r,n)):(mt=e,e=a)),Et--,e===a&&(t=a,0===Et&&Pt(A)),e}(),r!==a?(gt=t,t=l(r)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=function(){var e,t
return e=mt,(t=Rt())!==a&&(gt=e,t=g(t)),t}())===a&&(t=function(){var t,r,n,i
return Et++,t=mt,123===e.charCodeAt(mt)?(r=D,mt++):(r=a,0===Et&&Pt(I)),r!==a&&Yt()!==a&&(n=Jt())!==a&&Yt()!==a?(125===e.charCodeAt(mt)?(i=x,mt++):(i=a,0===Et&&Pt(M)),i!==a?(gt=t,t=r=F(n)):(mt=t,t=a)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(R)),t}())===a&&(t=function(){var t
return t=function(){var t,r,n,i,o,s,c,u,l
return t=mt,123===e.charCodeAt(mt)?(r=D,mt++):(r=a,0===Et&&Pt(I)),r!==a&&Yt()!==a&&(n=Jt())!==a&&Yt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a&&Yt()!==a?(e.substr(mt,6)===ne?(o=ne,mt+=6):(o=a,0===Et&&Pt(ie)),o!==a&&Yt()!==a?(s=mt,44===e.charCodeAt(mt)?(c=te,mt++):(c=a,0===Et&&Pt(re)),c!==a&&(u=Yt())!==a?(l=function(){var t,r,n
return t=mt,e.substr(mt,2)===q?(r=q,mt+=2):(r=a,0===Et&&Pt(Q)),r!==a?(n=function(){var e,t,r
if(e=mt,t=[],(r=Gt())!==a)for(;r!==a;)t.push(r),r=Gt()
else t=a
return t!==a&&(gt=e,t=Z(t)),t}(),n!==a?(gt=t,t=r=J(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,gt=mt,(r=(r=$())?void 0:a)!==a&&(n=Rt())!==a?(gt=t,t=r=ee(n)):(mt=t,t=a)),t}(),l!==a?s=c=[c,u,l]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(c=Yt())!==a?(125===e.charCodeAt(mt)?(u=x,mt++):(u=a,0===Et&&Pt(M)),u!==a?(gt=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}(),t===a&&(t=function(){var t,r,n,i,o,s,c,u,l
return t=mt,123===e.charCodeAt(mt)?(r=D,mt++):(r=a,0===Et&&Pt(I)),r!==a&&Yt()!==a&&(n=Jt())!==a&&Yt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a&&Yt()!==a?(e.substr(mt,4)===ge?(o=ge,mt+=4):(o=a,0===Et&&Pt(ve)),o===a&&(e.substr(mt,4)===be?(o=be,mt+=4):(o=a,0===Et&&Pt(ye))),o!==a&&Yt()!==a?(s=mt,44===e.charCodeAt(mt)?(c=te,mt++):(c=a,0===Et&&Pt(re)),c!==a&&(u=Yt())!==a?(l=function(){var t,r,n
return t=mt,e.substr(mt,2)===q?(r=q,mt+=2):(r=a,0===Et&&Pt(Q)),r!==a?(n=function(){var t,r,n,i
if(t=mt,r=mt,n=[],(i=Ut())===a&&(i=jt()),i!==a)for(;i!==a;)n.push(i),(i=Ut())===a&&(i=jt())
else n=a
return(r=n!==a?e.substring(r,mt):n)!==a&&(gt=t,r=de(r)),r}(),n!==a?(gt=t,t=r=J(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,gt=mt,(r=(r=me())?void 0:a)!==a&&(n=Rt())!==a?(gt=t,t=r=ee(n)):(mt=t,t=a)),t}(),l!==a?s=c=[c,u,l]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(c=Yt())!==a?(125===e.charCodeAt(mt)?(u=x,mt++):(u=a,0===Et&&Pt(M)),u!==a?(gt=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}()),t}(),t===a&&(t=function(){var t,r,n,i,o,s,c,u,l,h,f
if(t=mt,123===e.charCodeAt(mt)?(r=D,mt++):(r=a,0===Et&&Pt(I)),r!==a)if(Yt()!==a)if((n=Jt())!==a)if(Yt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a)if(Yt()!==a)if(e.substr(mt,6)===Ee?(o=Ee,mt+=6):(o=a,0===Et&&Pt(Ae)),o===a&&(e.substr(mt,13)===we?(o=we,mt+=13):(o=a,0===Et&&Pt(Te))),o!==a)if(Yt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===Et&&Pt(re)),s!==a)if(Yt()!==a)if(c=mt,e.substr(mt,7)===Ce?(u=Ce,mt+=7):(u=a,0===Et&&Pt(Be)),u!==a&&(l=Yt())!==a&&(h=zt())!==a?c=u=[u,l,h]:(mt=c,c=a),c===a&&(c=null),c!==a)if((u=Yt())!==a){if(l=[],(h=Xt())!==a)for(;h!==a;)l.push(h),h=Xt()
else l=a
l!==a&&(h=Yt())!==a?(125===e.charCodeAt(mt)?(f=x,mt++):(f=a,0===Et&&Pt(M)),f!==a?(gt=t,t=r=He(n,o,c,l)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r,n,i,o,s,c,u,l
if(t=mt,123===e.charCodeAt(mt)?(r=D,mt++):(r=a,0===Et&&Pt(I)),r!==a)if(Yt()!==a)if((n=Jt())!==a)if(Yt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===Et&&Pt(re)),i!==a)if(Yt()!==a)if(e.substr(mt,6)===Oe?(o=Oe,mt+=6):(o=a,0===Et&&Pt(Se)),o!==a)if(Yt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===Et&&Pt(re)),s!==a)if(Yt()!==a){if(c=[],(u=Vt())!==a)for(;u!==a;)c.push(u),u=Vt()
else c=a
c!==a&&(u=Yt())!==a?(125===e.charCodeAt(mt)?(l=x,mt++):(l=a,0===Et&&Pt(M)),l!==a?(gt=t,t=r=Pe(n,c)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r
return t=mt,35===e.charCodeAt(mt)?(r=v,mt++):(r=a,0===Et&&Pt(b)),r!==a&&(gt=t,r=E()),r}())),t}function Rt(){var t,r,n,i
if(t=mt,gt=mt,(r=(r=h())?void 0:a)!==a){if(n=[],(i=Zt())===a&&(i=qt())===a&&(i=Qt())===a&&(60===e.charCodeAt(mt)?(i=f,mt++):(i=a,0===Et&&Pt(p))),i!==a)for(;i!==a;)n.push(i),(i=Zt())===a&&(i=qt())===a&&(i=Qt())===a&&(60===e.charCodeAt(mt)?(i=f,mt++):(i=a,0===Et&&Pt(p)))
else n=a
n!==a?(gt=t,t=r=d(n)):(mt=t,t=a)}else mt=t,t=a
if(t===a){if(t=mt,r=[],(n=Zt())===a&&(n=qt())===a&&(n=Qt())===a&&(n=Dt()),n!==a)for(;n!==a;)r.push(n),(n=Zt())===a&&(n=qt())===a&&(n=Qt())===a&&(n=Dt())
else r=a
r!==a&&(gt=t,r=d(r)),t=r}return t}function Dt(){var t,r,n
return t=mt,r=mt,Et++,(n=xt())===a&&(n=Mt())===a&&(n=It()),Et--,n===a?r=void 0:(mt=r,r=a),r!==a?(60===e.charCodeAt(mt)?(n=f,mt++):(n=a,0===Et&&Pt(p)),n!==a?(gt=t,t=r=m()):(mt=t,t=a)):(mt=t,t=a),t}function It(){var t,r,n,i,o,s
return t=mt,r=mt,60===e.charCodeAt(mt)?(n=f,mt++):(n=a,0===Et&&Pt(p)),n!==a&&(i=$t())!==a&&(o=Yt())!==a?(e.substr(mt,2)===T?(s=T,mt+=2):(s=a,0===Et&&Pt(C)),s!==a?r=n=[n,i,o,s]:(mt=r,r=a)):(mt=r,r=a),r!==a&&(gt=t,r=B(r)),r}function xt(){var t,r,n,i
return t=mt,60===e.charCodeAt(mt)?(r=f,mt++):(r=a,0===Et&&Pt(p)),r!==a&&(n=$t())!==a?(62===e.charCodeAt(mt)?(i=H,mt++):(i=a,0===Et&&Pt(O)),i!==a?(gt=t,t=r=_(n)):(mt=t,t=a)):(mt=t,t=a),t}function Mt(){var t,r,n,i
return t=mt,e.substr(mt,2)===L?(r=L,mt+=2):(r=a,0===Et&&Pt(N)),r!==a&&(n=$t())!==a?(62===e.charCodeAt(mt)?(i=H,mt++):(i=a,0===Et&&Pt(O)),i!==a?(gt=t,t=r=_(n)):(mt=t,t=a)):(mt=t,t=a),t}function Ft(){var t,r,n,i,o
if(Et++,t=mt,r=[],n=mt,i=mt,Et++,(o=Kt())===a&&(G.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(U))),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,Et++,(o=Kt())===a&&(G.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(U))),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(k)),t}function kt(){var t,r,n
return Et++,t=mt,47===e.charCodeAt(mt)?(r=X,mt++):(r=a,0===Et&&Pt(K)),r!==a&&(n=Ft())!==a?(gt=t,t=r=W(n)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(V)),t}function Gt(){var e,t,r,n
if(Et++,e=mt,Yt()!==a)if((t=Ft())!==a){for(r=[],n=kt();n!==a;)r.push(n),n=kt()
r!==a?(gt=e,e=z(t,r)):(mt=e,e=a)}else mt=e,e=a
else mt=e,e=a
return Et--,e===a&&0===Et&&Pt(Y),e}function Ut(){var t,r,n,i
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===Et&&Pt(se)),r!==a){if(n=[],(i=Zt())===a&&(ce.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===Et&&Pt(ue))),i!==a)for(;i!==a;)n.push(i),(i=Zt())===a&&(ce.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===Et&&Pt(ue)))
else n=a
n!==a?(39===e.charCodeAt(mt)?(i=ae,mt++):(i=a,0===Et&&Pt(se)),i!==a?t=r=[r,n,i]:(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
if(t===a)if(t=[],(r=Zt())===a&&(le.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(he))),r!==a)for(;r!==a;)t.push(r),(r=Zt())===a&&(le.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(he)))
else t=a
return t}function jt(){var t,r
if(t=[],fe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(pe)),r!==a)for(;r!==a;)t.push(r),fe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&Pt(pe))
else t=a
return t}function Vt(){var t,r,n,i,o
return t=mt,Yt()!==a&&(r=tr())!==a&&Yt()!==a?(123===e.charCodeAt(mt)?(n=D,mt++):(n=a,0===Et&&Pt(I)),n!==a?(gt=mt,(Ne(r)?void 0:a)!==a&&(i=Lt())!==a?(125===e.charCodeAt(mt)?(o=x,mt++):(o=a,0===Et&&Pt(M)),o!==a?(gt=t,t=Re(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function Xt(){var t,r,n,i,o
return t=mt,Yt()!==a?(r=function(){var t,r,n,i
return t=mt,r=mt,61===e.charCodeAt(mt)?(n=_e,mt++):(n=a,0===Et&&Pt(Le)),n!==a&&(i=zt())!==a?r=n=[n,i]:(mt=r,r=a),(t=r!==a?e.substring(t,mt):r)===a&&(t=tr()),t}(),r!==a&&Yt()!==a?(123===e.charCodeAt(mt)?(n=D,mt++):(n=a,0===Et&&Pt(I)),n!==a?(gt=mt,(De(r)?void 0:a)!==a&&(i=Lt())!==a?(125===e.charCodeAt(mt)?(o=x,mt++):(o=a,0===Et&&Pt(M)),o!==a?(gt=t,t=Ie(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function Kt(){var t
return Et++,Me.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===Et&&Pt(Fe)),Et--,t===a&&0===Et&&Pt(xe),t}function Wt(){var t
return Et++,Ge.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===Et&&Pt(Ue)),Et--,t===a&&0===Et&&Pt(ke),t}function Yt(){var t,r,n
for(Et++,t=mt,r=[],n=Kt();n!==a;)r.push(n),n=Kt()
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(je)),t}function zt(){var t,r,n
return Et++,t=mt,45===e.charCodeAt(mt)?(r=Xe,mt++):(r=a,0===Et&&Pt(Ke)),r===a&&(r=null),r!==a&&(n=er())!==a?(gt=t,t=r=We(r,n)):(mt=t,t=a),Et--,t===a&&(r=a,0===Et&&Pt(Ve)),t}function Zt(){var t,r
return Et++,t=mt,e.substr(mt,2)===ze?(r=ze,mt+=2):(r=a,0===Et&&Pt(Ze)),r!==a&&(gt=t,r=qe()),Et--,(t=r)===a&&(r=a,0===Et&&Pt(Ye)),t}function qt(){var t,r,n,i,o,s
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===Et&&Pt(se)),r!==a)if(n=function(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(j)),n!==a?(gt=mt,(i=(i=tt(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r!==a?e.substring(t,mt):r}(),n!==a){for(i=mt,o=[],e.substr(mt,2)===ze?(s=ze,mt+=2):(s=a,0===Et&&Pt(Ze)),s===a&&(ce.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===Et&&Pt(ue)));s!==a;)o.push(s),e.substr(mt,2)===ze?(s=ze,mt+=2):(s=a,0===Et&&Pt(Ze)),s===a&&(ce.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===Et&&Pt(ue)));(i=o!==a?e.substring(i,mt):o)!==a?(39===e.charCodeAt(mt)?(o=ae,mt++):(o=a,0===Et&&Pt(se)),o===a&&(o=null),o!==a?(gt=t,t=r=Qe(n,i)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
return t}function Qt(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(j)),n!==a?(gt=mt,(i=(i=Je(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r===a&&(10===e.charCodeAt(mt)?(r=$e,mt++):(r=a,0===Et&&Pt(et))),r!==a?e.substring(t,mt):r}function Jt(){var t,r
return Et++,t=mt,(r=er())===a&&(r=tr()),t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(rt)),t}function $t(){var t,r
return Et++,t=mt,(r=er())===a&&(r=function(){var t,r,n,i,o
if(Et++,t=mt,r=[],45===e.charCodeAt(mt)?(n=Xe,mt++):(n=a,0===Et&&Pt(Ke)),n===a&&(n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)),n!==a)for(;n!==a;)r.push(n),45===e.charCodeAt(mt)?(n=Xe,mt++):(n=a,0===Et&&Pt(Ke)),n===a&&(n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a))
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(dt)),t}()),t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(nt)),t}function er(){var t,r,n,i,o
if(Et++,t=mt,48===e.charCodeAt(mt)?(r=ot,mt++):(r=a,0===Et&&Pt(at)),r!==a&&(gt=t,r=st()),(t=r)===a){if(t=mt,r=mt,ct.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===Et&&Pt(ut)),n!==a){for(i=[],lt.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(ht));o!==a;)i.push(o),lt.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(ht))
i!==a?r=n=[n,i]:(mt=r,r=a)}else mt=r,r=a
r!==a&&(gt=t,r=ft(r)),t=r}return Et--,t===a&&(r=a,0===Et&&Pt(it)),t}function tr(){var t,r,n,i,o
if(Et++,t=mt,r=[],n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,Et++,(o=Kt())===a&&(o=Wt()),Et--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===Et&&Pt(j)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,Et--,t===a&&(r=a,0===Et&&Pt(pt)),t}var rr=["root"]
function nr(){return"plural"===rr[rr.length-1]}function ir(){return t&&t.captureLocation?{location:wt()}:{}}var or,ar,sr,cr=t&&t.ignoreTag,ur=t&&t.shouldParseSkeleton
if((r=c())!==a&&mt===e.length)return r
throw r!==a&&mt<e.length&&Pt({type:"end"}),or=yt,ar=bt<e.length?e.charAt(bt):null,sr=bt<e.length?St(bt,bt+1):St(bt,bt),new P(P.buildMessage(or,ar),or,ar,sr)},L=/(^|[^\\])#/g
function N(e){e.forEach((function(e){(f(e)||h(e))&&Object.keys(e.options).forEach((function(t){for(var r,n=e.options[t],i=-1,s=void 0,c=0;c<n.value.length;c++){var u=n.value[c]
if(a(u)&&L.test(u.value)){i=c,s=u
break}}if(s){var l=s.value.replace(L,"$1{"+e.value+", number}"),h=_(l);(r=n.value).splice.apply(r,(0,o.fX)([i,1],h))}N(n.value)}))}))}function R(e,t){t=(0,o.Cl)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},t||{})
var r=_(e,t)
return t.normalizeHashtagInPlural&&N(r),r}},772:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{ErrorCode:()=>pe,FormatError:()=>ve,IntlMessageFormat:()=>Ce,InvalidValueError:()=>be,InvalidValueTypeError:()=>ye,MissingValueError:()=>Ee,PART_TYPE:()=>ge,default:()=>Be,formatToParts:()=>we,isFormatXMLElementFn:()=>Ae})
var n,i,o,a=r(497)
function s(e){return e.type===i.literal}function c(e){return e.type===i.argument}function u(e){return e.type===i.number}function l(e){return e.type===i.date}function h(e){return e.type===i.time}function f(e){return e.type===i.select}function p(e){return e.type===i.plural}function d(e){return e.type===i.pound}function m(e){return e.type===i.tag}function g(e){return!(!e||"object"!=typeof e||e.type!==o.number)}function v(e){return!(!e||"object"!=typeof e||e.type!==o.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(n||(n={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(i||(i={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(o||(o={}))
var b=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function E(e){var t={}
return e.replace(y,(function(e){var r=e.length
switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short"
break
case"y":t.year=2===r?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":t.day=["numeric","2-digit"][r-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":t.weekday=4===r?"short":5===r?"narrow":"short"
break
case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"a":t.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1]
break
case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1]
break
case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1]
break
case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":t.minute=["numeric","2-digit"][r-1]
break
case"s":t.second=["numeric","2-digit"][r-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":t.timeZoneName=r<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var A=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,w=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,T=/^(@+)?(\+|#+)?[rs]?$/g,C=/(\*)(0+)|(#+)(0+)|(0+)/g,B=/^(0+)$/
function H(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(T,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function O(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function S(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!B.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function P(e){return O(e)||{}}function _(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,a.Cl)((0,a.Cl)((0,a.Cl)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,a.Cl)((0,a.Cl)({},e),P(t))}),{}))
continue
case"engineering":t=(0,a.Cl)((0,a.Cl)((0,a.Cl)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,a.Cl)((0,a.Cl)({},e),P(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(C,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(B.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(w.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(w,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?t=(0,a.Cl)((0,a.Cl)({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=(0,a.Cl)((0,a.Cl)({},t),H(o)))}else if(T.test(i.stem))t=(0,a.Cl)((0,a.Cl)({},t),H(i.stem))
else{var s=O(i.stem)
s&&(t=(0,a.Cl)((0,a.Cl)({},t),s))
var c=S(i.stem)
c&&(t=(0,a.Cl)((0,a.Cl)({},t),c))}}return t}var L,N={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]}
function R(e){var t=e.hourCycle
if(void 0===t&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k"
case"h23":return"H"
case"h12":return"h"
case"h11":return"K"
default:throw new Error("Invalid hourCycle")}var r,n=e.language
return"root"!==n&&(r=e.maximize().region),(N[r||""]||N[n||""]||N["".concat(n,"-001")]||N["001"])[0]}var D=new RegExp("^".concat(b.source,"*")),I=new RegExp("".concat(b.source,"*$"))
function x(e,t){return{start:e,end:t}}var M=!!String.prototype.startsWith,F=!!String.fromCodePoint,k=!!Object.fromEntries,G=!!String.prototype.codePointAt,U=!!String.prototype.trimStart,j=!!String.prototype.trimEnd,V=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},X=!0
try{X="a"===(null===(L=J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===L?void 0:L[0])}catch(e){X=!1}var K,W=M?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},Y=F?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r,n="",i=e.length,o=0;i>o;){if((r=e[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},z=k?Object.fromEntries:function(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
t[o]=a}return t},Z=G?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length
if(!(t<0||t>=r)){var n,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===r||(n=e.charCodeAt(t+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},q=U?function(e){return e.trimStart()}:function(e){return e.replace(D,"")},Q=j?function(e){return e.trimEnd()}:function(e){return e.replace(I,"")}
function J(e,t){return new RegExp(e,t)}if(X){var $=J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
K=function(e,t){var r
return $.lastIndex=t,null!==(r=$.exec(e)[1])&&void 0!==r?r:""}}else K=function(e,t){for(var r=[];;){var n=Z(e,t)
if(void 0===n||re(n)||ne(n))break
r.push(n),t+=n>=65536?2:1}return Y.apply(void 0,r)}
var ee=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,r){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(e,r)).err)return s
o.push(s.val)}else{if(125===a&&e>0)break
if(35!==a||"plural"!==t&&"selectordinal"!==t){if(60===a&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(n.UNMATCHED_CLOSING_TAG,x(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&te(this.peek()||0)){if((s=this.parseTag(e,t)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(e,t)).err)return s
o.push(s.val)}}else{var c=this.clonePosition()
this.bump(),o.push({type:i.pound,location:x(c,this.clonePosition())})}}}return{val:o,err:null}},e.prototype.parseTag=function(e,t){var r=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:x(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0)
if(a.err)return a
var s=a.val,c=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!te(this.char()))return this.error(n.INVALID_TAG,x(c,this.clonePosition()))
var u=this.clonePosition()
return o!==this.parseTagName()?this.error(n.UNMATCHED_CLOSING_TAG,x(u,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:x(r,this.clonePosition())},err:null}:this.error(n.INVALID_TAG,x(c,this.clonePosition())))}return this.error(n.UNCLOSED_TAG,x(r,this.clonePosition()))}return this.error(n.INVALID_TAG,x(r,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var r=this.clonePosition(),n="";;){var o=this.tryParseQuote(t)
if(o)n+=o
else{var a=this.tryParseUnquoted(e,t)
if(a)n+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
n+=s}}}var c=x(r,this.clonePosition())
return{val:{type:i.literal,value:n,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(te(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===e||"selectordinal"===e)break
return null
default:return null}this.bump()
var t=[this.char()]
for(this.bump();!this.isEOF();){var r=this.char()
if(39===r){if(39!==this.peek()){this.bump()
break}t.push(39),this.bump()}else t.push(r)
this.bump()}return Y.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),Y(r))},e.prototype.parseArgument=function(e,t){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,x(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(n.EMPTY_ARGUMENT,x(r,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(n.MALFORMED_ARGUMENT,x(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,x(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:x(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,x(r,this.clonePosition())):this.parseArgumentOptions(e,t,o,r)
default:return this.error(n.MALFORMED_ARGUMENT,x(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),r=K(this.message,t),n=t+r.length
return this.bumpTo(n),{value:r,location:x(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,r,s){var c,u=this.clonePosition(),l=this.parseIdentifierIfPossible().value,h=this.clonePosition()
switch(l){case"":return this.error(n.EXPECT_ARGUMENT_TYPE,x(u,h))
case"number":case"date":case"time":this.bumpSpace()
var f=null
if(this.bumpIf(",")){this.bumpSpace()
var p=this.clonePosition()
if((w=this.parseSimpleArgStyleIfPossible()).err)return w
if(0===(v=Q(w.val)).length)return this.error(n.EXPECT_ARGUMENT_STYLE,x(this.clonePosition(),this.clonePosition()))
f={style:v,styleLocation:x(p,this.clonePosition())}}if((T=this.tryParseArgumentClose(s)).err)return T
var d=x(s,this.clonePosition())
if(f&&W(null==f?void 0:f.style,"::",0)){var m=q(f.style.slice(2))
if("number"===l)return(w=this.parseNumberSkeletonFromString(m,f.styleLocation)).err?w:{val:{type:i.number,value:r,location:d,style:w.val},err:null}
if(0===m.length)return this.error(n.EXPECT_DATE_TIME_SKELETON,d)
var g=m
this.locale&&(g=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e.charAt(n)
if("j"===i){for(var o=0;n+1<e.length&&e.charAt(n+1)===i;)o++,n++
var a=1+(1&o),s=o<2?1:3+(o>>1),c=R(t)
for("H"!=c&&"k"!=c||(s=0);s-- >0;)r+="a"
for(;a-- >0;)r=c+r}else r+="J"===i?"H":i}return r}(m,this.locale))
var v={type:o.dateTime,pattern:g,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?E(g):{}}
return{val:{type:"date"===l?i.date:i.time,value:r,location:d,style:v},err:null}}return{val:{type:"number"===l?i.number:"date"===l?i.date:i.time,value:r,location:d,style:null!==(c=null==f?void 0:f.style)&&void 0!==c?c:null},err:null}
case"plural":case"selectordinal":case"select":var b=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS,x(b,(0,a.Cl)({},b)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),A=0
if("select"!==l&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,x(this.clonePosition(),this.clonePosition()))
var w
if(this.bumpSpace(),(w=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return w
this.bumpSpace(),y=this.parseIdentifierIfPossible(),A=w.val}var T,C=this.tryParsePluralOrSelectOptions(e,l,t,y)
if(C.err)return C
if((T=this.tryParseArgumentClose(s)).err)return T
var B=x(s,this.clonePosition())
return"select"===l?{val:{type:i.select,value:r,options:z(C.val),location:B},err:null}:{val:{type:i.plural,value:r,options:z(C.val),offset:A,pluralType:"plural"===l?"cardinal":"ordinal",location:B},err:null}
default:return this.error(n.INVALID_ARGUMENT_TYPE,x(u,h))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,x(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,x(r,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var r=[]
try{r=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],r=0,n=e.split(A).filter((function(e){return e.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,c=a;s<c.length;s++)if(0===c[s].length)throw new Error("Invalid number skeleton")
t.push({stem:o,options:a})}return t}(e)}catch(e){return this.error(n.INVALID_NUMBER_SKELETON,t)}return{val:{type:o.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?_(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,r,i){for(var o,a=!1,s=[],c=new Set,u=i.value,l=i.location;;){if(0===u.length){var h=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var f=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR,n.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(f.err)return f
l=x(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}if(c.has(u))return this.error("select"===t?n.DUPLICATE_SELECT_ARGUMENT_SELECTOR:n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l)
"other"===u&&(a=!0),this.bumpSpace()
var p=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,x(this.clonePosition(),this.clonePosition()))
var d=this.parseMessage(e+1,t,r)
if(d.err)return d
var m=this.tryParseArgumentClose(p)
if(m.err)return m
s.push([u,{value:d.val,location:x(p,this.clonePosition())}]),c.add(u),this.bumpSpace(),u=(o=this.parseIdentifierIfPossible()).value,l=o.location}return 0===s.length?this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR:n.EXPECT_PLURAL_ARGUMENT_SELECTOR,x(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(n.MISSING_OTHER_CLAUSE,x(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=x(n,this.clonePosition())
return i?V(o*=r)?{val:o,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=Z(this.message,e)
if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"))
return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char()
10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(W(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump()
return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),r=this.message.indexOf(e,t)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()))
for(e=Math.min(e,this.message.length);;){var t=this.offset()
if(t===e)break
if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&re(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null
var e=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(e>=65536?2:1))
return null!=r?r:null},e}()
function te(e){return e>=97&&e<=122||e>=65&&e<=90}function re(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function ne(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function ie(e){e.forEach((function(e){if(delete e.location,f(e)||p(e))for(var t in e.options)delete e.options[t].location,ie(e.options[t].value)
else u(e)&&g(e.style)||(l(e)||h(e))&&v(e.style)?delete e.style.location:m(e)&&ie(e.children)}))}function oe(e,t){void 0===t&&(t={}),t=(0,a.Cl)({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var r=new ee(e,t).parse()
if(r.err){var i=SyntaxError(n[r.err.kind])
throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==t?void 0:t.captureLocation)||ie(r.val),r.val}function ae(e,t){var r=t&&t.cache?t.cache:de,n=t&&t.serializer?t.serializer:he
return(t&&t.strategy?t.strategy:le)(e,{cache:r,serializer:n})}function se(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function ce(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function ue(e,t,r,n,i){return r.bind(t,e,n,i)}function le(e,t){return ue(e,this,1===e.length?se:ce,t.cache.create(),t.serializer)}var he=function(){return JSON.stringify(arguments)}
function fe(){this.cache=Object.create(null)}fe.prototype.get=function(e){return this.cache[e]},fe.prototype.set=function(e,t){this.cache[e]=t}
var pe,de={create:function(){return new fe}},me={variadic:function(e,t){return ue(e,this,ce,t.cache.create(),t.serializer)},monadic:function(e,t){return ue(e,this,se,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(pe||(pe={}))
var ge,ve=function(e){function t(t,r,n){var i=e.call(this,t)||this
return i.code=r,i.originalMessage=n,i}return(0,a.C6)(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),be=function(e){function t(t,r,n,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),pe.INVALID_VALUE,i)||this}return(0,a.C6)(t,e),t}(ve),ye=function(e){function t(t,r,n){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),pe.INVALID_VALUE,n)||this}return(0,a.C6)(t,e),t}(ve),Ee=function(e){function t(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),pe.MISSING_VALUE,r)||this}return(0,a.C6)(t,e),t}(ve)
function Ae(e){return"function"==typeof e}function we(e,t,r,n,i,o,a){if(1===e.length&&s(e[0]))return[{type:ge.literal,value:e[0].value}]
for(var b=[],y=0,E=e;y<E.length;y++){var A=E[y]
if(s(A))b.push({type:ge.literal,value:A.value})
else if(d(A))"number"==typeof o&&b.push({type:ge.literal,value:r.getNumberFormat(t).format(o)})
else{var w=A.value
if(!i||!(w in i))throw new Ee(w,a)
var T=i[w]
if(c(A))T&&"string"!=typeof T&&"number"!=typeof T||(T="string"==typeof T||"number"==typeof T?String(T):""),b.push({type:"string"==typeof T?ge.literal:ge.object,value:T})
else if(l(A)){var C="string"==typeof A.style?n.date[A.style]:v(A.style)?A.style.parsedOptions:void 0
b.push({type:ge.literal,value:r.getDateTimeFormat(t,C).format(T)})}else if(h(A))C="string"==typeof A.style?n.time[A.style]:v(A.style)?A.style.parsedOptions:n.time.medium,b.push({type:ge.literal,value:r.getDateTimeFormat(t,C).format(T)})
else if(u(A))(C="string"==typeof A.style?n.number[A.style]:g(A.style)?A.style.parsedOptions:void 0)&&C.scale&&(T*=C.scale||1),b.push({type:ge.literal,value:r.getNumberFormat(t,C).format(T)})
else{if(m(A)){var B=A.children,H=A.value,O=i[H]
if(!Ae(O))throw new ye(H,"function",a)
var S=O(we(B,t,r,n,i,o).map((function(e){return e.value})))
Array.isArray(S)||(S=[S]),b.push.apply(b,S.map((function(e){return{type:"string"==typeof e?ge.literal:ge.object,value:e}})))}if(f(A)){if(!(P=A.options[T]||A.options.other))throw new be(A.value,T,Object.keys(A.options),a)
b.push.apply(b,we(P.value,t,r,n,i))}else if(p(A)){var P
if(!(P=A.options["=".concat(T)])){if(!Intl.PluralRules)throw new ve('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',pe.MISSING_INTL_API,a)
var _=r.getPluralRules(t,{type:A.pluralType}).select(T-(A.offset||0))
P=A.options[_]||A.options.other}if(!P)throw new be(A.value,T,Object.keys(A.options),a)
b.push.apply(b,we(P.value,t,r,n,i,T-(A.offset||0)))}}}}return(L=b).length<2?L:L.reduce((function(e,t){var r=e[e.length-1]
return r&&r.type===ge.literal&&t.type===ge.literal?r.value+=t.value:e.push(t),e}),[])
var L}function Te(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(ge||(ge={}))
var Ce=function(){function e(t,r,n,i){var o,s,c,u=this
if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=u.formatToParts(e)
if(1===t.length)return t[0].value
var r=t.reduce((function(e,t){return e.length&&t.type===ge.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return we(u.ast,u.locales,u.formatters,u.formats,e,void 0,u.message)},this.resolvedOptions=function(){return{locale:u.resolvedLocale.toString()}},this.getAst=function(){return u.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=e.formats,(c=n)?Object.keys(s).reduce((function(e,t){var r,n
return e[t]=(r=s[t],(n=c[t])?(0,a.Cl)((0,a.Cl)((0,a.Cl)({},r||{}),n||{}),Object.keys(r).reduce((function(e,t){return e[t]=(0,a.Cl)((0,a.Cl)({},r[t]),n[t]||{}),e}),{})):r),e}),(0,a.Cl)({},s)):s),this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.NumberFormat).bind.apply(e,(0,a.fX)([void 0],t,!1)))}),{cache:Te(o.number),strategy:me.variadic}),getDateTimeFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.DateTimeFormat).bind.apply(e,(0,a.fX)([void 0],t,!1)))}),{cache:Te(o.dateTime),strategy:me.variadic}),getPluralRules:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.PluralRules).bind.apply(e,(0,a.fX)([void 0],t,!1)))}),{cache:Te(o.pluralRules),strategy:me.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){var t=Intl.NumberFormat.supportedLocalesOf(e)
return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])},e.__parse=oe,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
const Be=Ce},497:(e,t,r)=>{"use strict"
r.d(t,{C6:()=>i,Cl:()=>o,fX:()=>a})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function a(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}])
