/*! For license information please see chunk.503.baae3d8323a07095bfb3.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[503],{202:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{afterMain:()=>_,afterRead:()=>b,afterWrite:()=>O,applyStyles:()=>R,arrow:()=>K,auto:()=>s,basePlacements:()=>u,beforeMain:()=>E,beforeRead:()=>g,beforeWrite:()=>A,bottom:()=>i,clippingParents:()=>f,computeStyles:()=>ee,createPopper:()=>Le,createPopperBase:()=>Ce,createPopperLite:()=>xe,detectOverflow:()=>me,end:()=>l,eventListeners:()=>re,flip:()=>ve,hide:()=>be,left:()=>a,main:()=>w,modifierPhases:()=>P,offset:()=>Ee,placements:()=>v,popper:()=>h,popperGenerator:()=>Se,popperOffsets:()=>we,preventOverflow:()=>_e,read:()=>y,reference:()=>d,right:()=>o,start:()=>c,top:()=>n,variationPlacements:()=>m,viewport:()=>p,write:()=>T})
var n="top",i="bottom",o="right",a="left",s="auto",u=[n,i,o,a],c="start",l="end",f="clippingParents",p="viewport",h="popper",d="reference",m=u.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+l])}),[]),v=[].concat(u,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+l])}),[]),g="beforeRead",y="read",b="afterRead",E="beforeMain",w="main",_="afterMain",A="beforeWrite",T="write",O="afterWrite",P=[g,y,b,E,w,_,A,T,O]
function S(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function L(e){return e instanceof C(e).Element||e instanceof Element}function x(e){return e instanceof C(e).HTMLElement||e instanceof HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof C(e).ShadowRoot||e instanceof ShadowRoot)}const R={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e]
x(i)&&S(i)&&(Object.assign(i.style,r),Object.keys(n).forEach((function(e){var t=n[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
x(n)&&S(n)&&(Object.assign(n.style,o),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function D(e){return e.split("-")[0]}var I=Math.max,k=Math.min,M=Math.round
function F(e,t){void 0===t&&(t=!1)
var r=e.getBoundingClientRect(),n=1,i=1
if(x(e)&&t){var o=e.offsetHeight,a=e.offsetWidth
a>0&&(n=M(r.width)/a||1),o>0&&(i=M(r.height)/o||1)}return{width:r.width/n,height:r.height/i,top:r.top/i,right:r.right/n,bottom:r.bottom/i,left:r.left/n,x:r.left/n,y:r.top/i}}function U(e){var t=F(e),r=e.offsetWidth,n=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function j(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&N(r)){var n=t
do{if(n&&e.isSameNode(n))return!0
n=n.parentNode||n.host}while(n)}return!1}function G(e){return C(e).getComputedStyle(e)}function V(e){return["table","td","th"].indexOf(S(e))>=0}function B(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function X(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(N(e)?e.host:null)||B(e)}function z(e){return x(e)&&"fixed"!==G(e).position?e.offsetParent:null}function W(e){for(var t=C(e),r=z(e);r&&V(r)&&"static"===G(r).position;)r=z(r)
return r&&("html"===S(r)||"body"===S(r)&&"static"===G(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&x(e)&&"fixed"===G(e).position)return null
var r=X(e)
for(N(r)&&(r=r.host);x(r)&&["html","body"].indexOf(S(r))<0;){var n=G(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q(e,t,r){return I(e,k(t,r))}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Z(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}const K={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,s=e.name,c=e.options,l=r.elements.arrow,f=r.modifiersData.popperOffsets,p=D(r.placement),h=H(p),d=[a,o].indexOf(p)>=0?"height":"width"
if(l&&f){var m=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Z(e,u))}(c.padding,r),v=U(l),g="y"===h?n:a,y="y"===h?i:o,b=r.rects.reference[d]+r.rects.reference[h]-f[h]-r.rects.popper[d],E=f[h]-r.rects.reference[h],w=W(l),_=w?"y"===h?w.clientHeight||0:w.clientWidth||0:0,A=b/2-E/2,T=m[g],O=_-v[d]-m[y],P=_/2-v[d]/2+A,S=q(T,P,O),C=h
r.modifiersData[s]=((t={})[C]=S,t.centerOffset=S-P,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&j(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function $(e){return e.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function J(e){var t,r=e.popper,s=e.popperRect,u=e.placement,c=e.variation,f=e.offsets,p=e.position,h=e.gpuAcceleration,d=e.adaptive,m=e.roundOffsets,v=e.isFixed,g=f.x,y=void 0===g?0:g,b=f.y,E=void 0===b?0:b,w="function"==typeof m?m({x:y,y:E}):{x:y,y:E}
y=w.x,E=w.y
var _=f.hasOwnProperty("x"),A=f.hasOwnProperty("y"),T=a,O=n,P=window
if(d){var S=W(r),L="clientHeight",x="clientWidth"
S===C(r)&&"static"!==G(S=B(r)).position&&"absolute"===p&&(L="scrollHeight",x="scrollWidth"),S=S,(u===n||(u===a||u===o)&&c===l)&&(O=i,E-=(v&&S===P&&P.visualViewport?P.visualViewport.height:S[L])-s.height,E*=h?1:-1),u!==a&&(u!==n&&u!==i||c!==l)||(T=o,y-=(v&&S===P&&P.visualViewport?P.visualViewport.width:S[x])-s.width,y*=h?1:-1)}var N,R=Object.assign({position:p},d&&Q),D=!0===m?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1
return{x:M(t*n)/n||0,y:M(r*n)/n||0}}({x:y,y:E}):{x:y,y:E}
return y=D.x,E=D.y,h?Object.assign({},R,((N={})[O]=A?"0":"",N[T]=_?"0":"",N.transform=(P.devicePixelRatio||1)<=1?"translate("+y+"px, "+E+"px)":"translate3d("+y+"px, "+E+"px, 0)",N)):Object.assign({},R,((t={})[O]=A?E+"px":"",t[T]=_?y+"px":"",t.transform="",t))}const ee={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,o=r.adaptive,a=void 0===o||o,s=r.roundOffsets,u=void 0===s||s,c={placement:D(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var te={passive:!0}
const re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=void 0===i||i,a=n.resize,s=void 0===a||a,u=C(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return o&&c.forEach((function(e){e.addEventListener("scroll",r.update,te)})),s&&u.addEventListener("resize",r.update,te),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",r.update,te)})),s&&u.removeEventListener("resize",r.update,te)}},data:{}}
var ne={left:"right",right:"left",bottom:"top",top:"bottom"}
function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"}
function ae(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function se(e){var t=C(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return F(B(e)).left+se(e).scrollLeft}function ce(e){var t=G(e),r=t.overflow,n=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+i+n)}function le(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:x(e)&&ce(e)?e:le(X(e))}function fe(e,t){var r
void 0===t&&(t=[])
var n=le(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),o=C(n),a=i?[o].concat(o.visualViewport||[],ce(n)?n:[]):n,s=t.concat(a)
return i?s:s.concat(fe(X(a)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return t===p?pe(function(e){var t=C(e),r=B(e),n=t.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,s=0
return n&&(i=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:i,height:o,x:a+ue(e),y:s}}(e)):L(t)?function(e){var t=F(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,r=B(e),n=se(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=I(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=I(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+ue(e),u=-n.scrollTop
return"rtl"===G(i||r).direction&&(s+=I(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:s,y:u}}(B(e)))}function de(e){var t,r=e.reference,s=e.element,u=e.placement,f=u?D(u):null,p=u?$(u):null,h=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2
switch(f){case n:t={x:h,y:r.y-s.height}
break
case i:t={x:h,y:r.y+r.height}
break
case o:t={x:r.x+r.width,y:d}
break
case a:t={x:r.x-s.width,y:d}
break
default:t={x:r.x,y:r.y}}var m=f?H(f):null
if(null!=m){var v="y"===m?"height":"width"
switch(p){case c:t[m]=t[m]-(r[v]/2-s[v]/2)
break
case l:t[m]=t[m]+(r[v]/2-s[v]/2)}}return t}function me(e,t){void 0===t&&(t={})
var r=t,a=r.placement,s=void 0===a?e.placement:a,c=r.boundary,l=void 0===c?f:c,m=r.rootBoundary,v=void 0===m?p:m,g=r.elementContext,y=void 0===g?h:g,b=r.altBoundary,E=void 0!==b&&b,w=r.padding,_=void 0===w?0:w,A=Y("number"!=typeof _?_:Z(_,u)),T=y===h?d:h,O=e.rects.popper,P=e.elements[E?T:y],C=function(e,t,r){var n="clippingParents"===t?function(e){var t=fe(X(e)),r=["absolute","fixed"].indexOf(G(e).position)>=0&&x(e)?W(e):e
return L(r)?t.filter((function(e){return L(e)&&j(e,r)&&"body"!==S(e)})):[]}(e):[].concat(t),i=[].concat(n,[r]),o=i[0],a=i.reduce((function(t,r){var n=he(e,r)
return t.top=I(n.top,t.top),t.right=k(n.right,t.right),t.bottom=k(n.bottom,t.bottom),t.left=I(n.left,t.left),t}),he(e,o))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(L(P)?P:P.contextElement||B(e.elements.popper),l,v),N=F(e.elements.reference),R=de({reference:N,element:O,strategy:"absolute",placement:s}),D=pe(Object.assign({},O,R)),M=y===h?D:N,U={top:C.top-M.top+A.top,bottom:M.bottom-C.bottom+A.bottom,left:C.left-M.left+A.left,right:M.right-C.right+A.right},V=e.modifiersData.offset
if(y===h&&V){var z=V[s]
Object.keys(U).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,r=[n,i].indexOf(e)>=0?"y":"x"
U[e]+=z[r]*t}))}return U}const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,l=e.name
if(!t.modifiersData[l]._skip){for(var f=r.mainAxis,p=void 0===f||f,h=r.altAxis,d=void 0===h||h,g=r.fallbackPlacements,y=r.padding,b=r.boundary,E=r.rootBoundary,w=r.altBoundary,_=r.flipVariations,A=void 0===_||_,T=r.allowedAutoPlacements,O=t.options.placement,P=D(O),S=g||(P!==O&&A?function(e){if(D(e)===s)return[]
var t=ie(e)
return[ae(e),t,ae(t)]}(O):[ie(O)]),C=[O].concat(S).reduce((function(e,r){return e.concat(D(r)===s?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?v:c,f=$(n),p=f?s?m:m.filter((function(e){return $(e)===f})):u,h=p.filter((function(e){return l.indexOf(e)>=0}))
0===h.length&&(h=p)
var d=h.reduce((function(t,r){return t[r]=me(e,{placement:r,boundary:i,rootBoundary:o,padding:a})[D(r)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:b,rootBoundary:E,padding:y,flipVariations:A,allowedAutoPlacements:T}):r)}),[]),L=t.rects.reference,x=t.rects.popper,N=new Map,R=!0,I=C[0],k=0;k<C.length;k++){var M=C[k],F=D(M),U=$(M)===c,j=[n,i].indexOf(F)>=0,G=j?"width":"height",V=me(t,{placement:M,boundary:b,rootBoundary:E,altBoundary:w,padding:y}),B=j?U?o:a:U?i:n
L[G]>x[G]&&(B=ie(B))
var X=ie(B),z=[]
if(p&&z.push(V[F]<=0),d&&z.push(V[B]<=0,V[X]<=0),z.every((function(e){return e}))){I=M,R=!1
break}N.set(M,z)}if(R)for(var W=function(e){var t=C.find((function(t){var r=N.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return I=t,"break"},H=A?3:1;H>0&&"break"!==W(H);H--);t.placement!==I&&(t.modifiersData[l]._skip=!0,t.placement=I,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ge(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ye(e){return[n,o,i,a].some((function(t){return e[t]>=0}))}const be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),u=ge(a,n),c=ge(s,i,o),l=ye(u),f=ye(c)
t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}},Ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,s=r.offset,u=void 0===s?[0,0]:s,c=v.reduce((function(e,r){return e[r]=function(e,t,r){var i=D(e),s=[a,n].indexOf(i)>=0?-1:1,u="function"==typeof r?r(Object.assign({},t,{placement:e})):r,c=u[0],l=u[1]
return c=c||0,l=(l||0)*s,[a,o].indexOf(i)>=0?{x:l,y:c}:{x:c,y:l}}(r,t.rects,u),e}),{}),l=c[t.placement],f=l.x,p=l.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=c}},we={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=de({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},_e={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,s=e.name,u=r.mainAxis,l=void 0===u||u,f=r.altAxis,p=void 0!==f&&f,h=r.boundary,d=r.rootBoundary,m=r.altBoundary,v=r.padding,g=r.tether,y=void 0===g||g,b=r.tetherOffset,E=void 0===b?0:b,w=me(t,{boundary:h,rootBoundary:d,padding:v,altBoundary:m}),_=D(t.placement),A=$(t.placement),T=!A,O=H(_),P="x"===O?"y":"x",S=t.modifiersData.popperOffsets,C=t.rects.reference,L=t.rects.popper,x="function"==typeof E?E(Object.assign({},t.rects,{placement:t.placement})):E,N="number"==typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0}
if(S){if(l){var F,j="y"===O?n:a,G="y"===O?i:o,V="y"===O?"height":"width",B=S[O],X=B+w[j],z=B-w[G],Y=y?-L[V]/2:0,Z=A===c?C[V]:L[V],K=A===c?-L[V]:-C[V],Q=t.elements.arrow,J=y&&Q?U(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[j],re=ee[G],ne=q(0,C[V],J[V]),ie=T?C[V]/2-Y-ne-te-N.mainAxis:Z-ne-te-N.mainAxis,oe=T?-C[V]/2+Y+ne+re+N.mainAxis:K+ne+re+N.mainAxis,ae=t.elements.arrow&&W(t.elements.arrow),se=ae?"y"===O?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(F=null==R?void 0:R[O])?F:0,ce=B+oe-ue,le=q(y?k(X,B+ie-ue-se):X,B,y?I(z,ce):z)
S[O]=le,M[O]=le-B}if(p){var fe,pe="x"===O?n:a,he="x"===O?i:o,de=S[P],ve="y"===P?"height":"width",ge=de+w[pe],ye=de-w[he],be=-1!==[n,a].indexOf(_),Ee=null!=(fe=null==R?void 0:R[P])?fe:0,we=be?ge:de-C[ve]-L[ve]-Ee+N.altAxis,_e=be?de+C[ve]+L[ve]-Ee-N.altAxis:ye,Ae=y&&be?function(e,t,r){var n=q(e,t,r)
return n>r?r:n}(we,de,_e):q(y?we:ge,de,y?_e:ye)
S[P]=Ae,M[P]=Ae-de}t.modifiersData[s]=M}},requiresIfExists:["offset"]}
function Ae(e,t,r){void 0===r&&(r=!1)
var n,i,o=x(t),a=x(t)&&function(e){var t=e.getBoundingClientRect(),r=M(t.width)/e.offsetWidth||1,n=M(t.height)/e.offsetHeight||1
return 1!==r||1!==n}(t),s=B(t),u=F(e,a),c={scrollLeft:0,scrollTop:0},l={x:0,y:0}
return(o||!o&&!r)&&(("body"!==S(t)||ce(s))&&(c=(n=t)!==C(n)&&x(n)?{scrollLeft:(i=n).scrollLeft,scrollTop:i.scrollTop}:se(n)),x(t)?((l=F(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=ue(s))),{x:u.left+c.scrollLeft-l.x,y:u.top+c.scrollTop-l.y,width:u.width,height:u.height}}function Te(e){var t=new Map,r=new Set,n=[]
function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"}
function Pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Se(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,o=void 0===i?Oe:i
return function(e,t,r){void 0===r&&(r=o)
var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,l={state:s,setOptions:function(r){var i="function"==typeof r?r(s.options):r
f(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:L(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)}
var a,c,p=function(e){var t=Te(e)
return P.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),c=a.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect
if("function"==typeof i){var o=i({state:s,name:t,instance:l,options:n})
u.push(o||function(){})}})),l.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,r=e.popper
if(Pe(t,r)){s.rects={reference:Ae(t,W(r),"fixed"===s.options.strategy),popper:U(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var i=s.orderedModifiers[n],o=i.fn,a=i.options,u=void 0===a?{}:a,f=i.name
"function"==typeof o&&(s=o({state:s,options:u,name:f,instance:l})||s)}else s.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),c=!0}}
if(!Pe(e,t))return l
function f(){u.forEach((function(e){return e()})),u=[]}return l.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var Ce=Se(),Le=Se({defaultModifiers:[re,we,ee,R,Ee,ve,_e,K,be]}),xe=Se({defaultModifiers:[re,we,ee,R]})},836:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>P})
var n=r(927),i=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=i.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=function(e,t,r){var n=Array.prototype.slice.apply(e.querySelectorAll(o))
return t&&a.call(e,o)&&n.unshift(e),n.filter(r)},u=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},f=function(e,t){return!(t.disabled||function(e){return l(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0
var r=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(r,"details:not([open]) *"))return!0
if(t&&"full"!==t){if("non-zero-area"===t){var n=e.getBoundingClientRect(),i=n.width,o=n.height
return 0===i&&0===o}}else for(;e;){if("none"===getComputedStyle(e).display)return!0
e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(l(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var n=t.children.item(r)
if("LEGEND"===n.tagName)return!n.contains(e)}return!0}t=t.parentElement}return!1}(t))},p=function(e,t){return!(!f(e,t)||function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||e.ownerDocument,n=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=n(window.CSS.escape(e.name))
else try{t=n(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!i||i===e}(e)}(t)||u(t)<0)},h=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,o)&&p(t,e)},d=i.concat("iframe").join(","),m=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,d)&&f(t,e)}
function v(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y,b=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1]
t!==e&&t.pause()}var r=y.indexOf(e);-1===r||y.splice(r,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),E=function(e){return setTimeout(e,0)},w=function(e,t){var r=-1
return e.every((function(e,n){return!t(e)||(r=n,!1)})),r},_=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return"function"==typeof e?e.apply(void 0,r):e},A=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},T=function(e,t){var r,n=(null==t?void 0:t.document)||document,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,r){return e&&void 0!==e[t]?e[t]:i[r||t]},l=function(e){return!(!e||!o.containers.some((function(t){return t.contains(e)})))},d=function(e){var t=i[e]
if("function"==typeof t){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a]
t=t.apply(void 0,o)}if(!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=n.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},y=function(){var e=d("initialFocus")
if(!1===e)return!1
if(void 0===e)if(l(n.activeElement))e=n.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||d("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},T=function(){if(o.tabbableGroups=o.containers.map((function(e){var t,r,n,i=(r=[],n=[],s(e,(t=t||{}).includeContainer,p.bind(null,t)).forEach((function(e,t){var i=u(e)
0===i?r.push(e):n.push({documentOrder:t,tabIndex:i,node:e})})),n.sort(c).map((function(e){return e.node})).concat(r)),o=function(e,t){return s(e,(t=t||{}).includeContainer,f.bind(null,t))}(e)
if(i.length>0)return{container:e,firstTabbableNode:i[0],lastTabbableNode:i[i.length-1],nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=o.findIndex((function(t){return t===e}))
return t?o.slice(r+1).find((function(e){return h(e)})):o.slice(0,r).reverse().find((function(e){return h(e)}))}}})).filter((function(e){return!!e})),o.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},O=function e(t){!1!==t&&t!==n.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(y()))},P=function(e){var t=d("setReturnFocus",e)
return t||!1!==t&&e},S=function(e){var t=A(e)
l(t)||(_(i.clickOutsideDeactivates,e)?r.deactivate({returnFocus:i.returnFocusOnDeactivate&&!m(t)}):_(i.allowOutsideClick,e)||e.preventDefault())},C=function(e){var t=A(e),r=l(t)
r||t instanceof Document?r&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),O(o.mostRecentlyFocusedNode||y()))},L=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==_(i.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=A(e)
T()
var r=null
if(o.tabbableGroups.length>0){var n=w(o.tabbableGroups,(function(e){return e.container.contains(t)})),i=n>=0?o.tabbableGroups[n]:void 0
if(n<0)r=e.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var a=w(o.tabbableGroups,(function(e){var r=e.firstTabbableNode
return t===r}))
if(a<0&&(i.container===t||m(t)&&!h(t)&&!i.nextTabbableNode(t,!1))&&(a=n),a>=0){var s=0===a?o.tabbableGroups.length-1:a-1
r=o.tabbableGroups[s].lastTabbableNode}}else{var u=w(o.tabbableGroups,(function(e){var r=e.lastTabbableNode
return t===r}))
if(u<0&&(i.container===t||m(t)&&!h(t)&&!i.nextTabbableNode(t))&&(u=n),u>=0){var c=u===o.tabbableGroups.length-1?0:u+1
r=o.tabbableGroups[c].firstTabbableNode}}}else r=d("fallbackFocus")
r&&(e.preventDefault(),O(r))}(e)},x=function(e){if(!_(i.clickOutsideDeactivates,e)){var t=A(e)
l(t)||_(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},N=function(){if(o.active)return b.activateTrap(r),o.delayInitialFocusTimer=i.delayInitialFocus?E((function(){O(y())})):O(y()),n.addEventListener("focusin",C,!0),n.addEventListener("mousedown",S,{capture:!0,passive:!1}),n.addEventListener("touchstart",S,{capture:!0,passive:!1}),n.addEventListener("click",x,{capture:!0,passive:!1}),n.addEventListener("keydown",L,{capture:!0,passive:!1}),r},R=function(){if(o.active)return n.removeEventListener("focusin",C,!0),n.removeEventListener("mousedown",S,!0),n.removeEventListener("touchstart",S,!0),n.removeEventListener("click",x,!0),n.removeEventListener("keydown",L,!0),r}
return(r={activate:function(e){if(o.active)return this
var t=a(e,"onActivate"),r=a(e,"onPostActivate"),i=a(e,"checkCanFocusTrap")
i||T(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,t&&t()
var s=function(){i&&T(),N(),r&&r()}
return i?(i(o.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!o.active)return this
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,R(),o.active=!1,o.paused=!1,b.deactivateTrap(r)
var t=a(e,"onDeactivate"),n=a(e,"onPostDeactivate"),i=a(e,"checkCanReturnFocus")
t&&t()
var s=a(e,"returnFocus","returnFocusOnDeactivate"),u=function(){E((function(){s&&O(P(o.nodeFocusedBeforeActivation)),n&&n()}))}
return s&&i?(i(P(o.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,R()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,T(),N(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?n.querySelector(e):e})),o.active&&T(),this}}).updateContainerElements(e),r}
let O
try{O=(0,n.capabilities)("3.22")}catch{O=(0,n.capabilities)("3.13")}var P=(0,n.setModifierManager)((()=>({capabilities:O,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,r){let{named:{isActive:n,isPaused:i,shouldSelfFocus:o,focusTrapOptions:a,_createFocusTrap:s}}=r
e.focusTrapOptions={...a}||{},void 0!==n&&(e.isActive=n),void 0!==i&&(e.isPaused=i),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&o&&(e.focusTrapOptions.initialFocus=t)
let u=T
s&&(u=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=u(t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,t){let{named:r}=t
const n=r.focusTrapOptions||{}
if(e.isActive&&!r.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&r.isActive&&e.focusTrap.activate()
e.isPaused&&!r.isPaused?e.focusTrap.unpause():!e.isPaused&&r.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==r.isActive&&(e.isActive=r.isActive),void 0!==r.isPaused&&(e.isPaused=r.isPaused)},destroyModifier(e){let{focusTrap:t}=e
t.deactivate()}})),class{})},721:e=>{function t(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function r(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function n(e,t,r,n,i){return r.bind(t,e,n,i)}function i(e,i){return n(e,this,1===e.length?t:r,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(e){return e in this.cache},a.prototype.get=function(e){return this.cache[e]},a.prototype.set=function(e,t){this.cache[e]=t}
var s={create:function(){return new a}}
e.exports=function(e,t){var r=t&&t.cache?t.cache:s,n=t&&t.serializer?t.serializer:o
return(t&&t.strategy?t.strategy:i)(e,{cache:r,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,r,t.cache.create(),t.serializer)},monadic:function(e,r){return n(e,this,t,r.cache.create(),r.serializer)}}},173:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{SKELETON_TYPE:()=>i,SyntaxError:()=>L,TYPE:()=>n,createLiteralElement:()=>g,createNumberElement:()=>y,isArgumentElement:()=>s,isDateElement:()=>c,isDateTimeSkeleton:()=>v,isLiteralElement:()=>a,isNumberElement:()=>u,isNumberSkeleton:()=>m,isPluralElement:()=>p,isPoundElement:()=>h,isSelectElement:()=>f,isTagElement:()=>d,isTimeElement:()=>l,parse:()=>D,pegParse:()=>x})
var n,i,o=r(480)
function a(e){return e.type===n.literal}function s(e){return e.type===n.argument}function u(e){return e.type===n.number}function c(e){return e.type===n.date}function l(e){return e.type===n.time}function f(e){return e.type===n.select}function p(e){return e.type===n.plural}function h(e){return e.type===n.pound}function d(e){return e.type===n.tag}function m(e){return!(!e||"object"!=typeof e||e.type!==i.number)}function v(e){return!(!e||"object"!=typeof e||e.type!==i.dateTime)}function g(e){return{type:n.literal,value:e}}function y(e,t){return{type:n.number,value:e,style:t}}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(i||(i={}))
var b=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,E=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,w=/^(@+)?(\+|#+)?$/g,_=/(\*)(0+)|(#+)(0+)|(0+)/g,A=/^(0+)$/
function T(e){var t={}
return e.replace(w,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function O(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function P(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!A.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function S(e){return O(e)||{}}function C(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
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
case"scientific":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),S(t))}),{}))
continue
case"engineering":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),S(t))}),{}))
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
i.options[0].replace(_,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(A.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(E.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(E,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),i.options.length&&(t=(0,o.pi)((0,o.pi)({},t),T(i.options[0])))}else if(w.test(i.stem))t=(0,o.pi)((0,o.pi)({},t),T(i.stem))
else{var a=O(i.stem)
a&&(t=(0,o.pi)((0,o.pi)({},t),a))
var s=P(i.stem)
s&&(t=(0,o.pi)((0,o.pi)({},t),s))}}return t}var L=function(e){function t(r,n,i,o){var a=e.call(this)||this
return a.message=r,a.expected=n,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return(0,o.ZT)(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){switch(e.type){case"literal":return'"'+n(e.text)+'"'
case"class":var t=e.parts.map((function(e){return Array.isArray(e)?i(e[0])+"-"+i(e[1]):i(e)}))
return"["+(e.inverted?"^":"")+t+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return e.description}}return"Expected "+function(e){var t,r,n=e.map(o)
if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+((a=t)?'"'+n(a)+'"':"end of input")+" found."
var a},t}(Error),x=function(e,t){t=void 0!==t?t:{}
var r,a={},s={start:We},u=We,c="<",l=je("<",!1),f=function(e){return e.join("")},p=je("#",!1),h=Ve("tagElement"),d=je("/>",!1),m=je(">",!1),v=je("</",!1),g=Ve("argumentElement"),y="{",E=je("{",!1),w="}",_=je("}",!1),A=Ve("numberSkeletonId"),T=/^['\/{}]/,O=Ge(["'","/","{","}"],!1,!1),P={type:"any"},S=Ve("numberSkeletonTokenOption"),x=je("/",!1),N=Ve("numberSkeletonToken"),R="::",D=je("::",!1),I=function(e){return gt.pop(),e.replace(/\s*$/,"")},k=",",M=je(",",!1),F="number",U=je("number",!1),j=function(e,t,r){return(0,o.pi)({type:"number"===t?n.number:"date"===t?n.date:n.time,style:r&&r[2],value:e},bt())},G="'",V=je("'",!1),B=/^[^']/,X=Ge(["'"],!0,!1),z=/^[^a-zA-Z'{}]/,W=Ge([["a","z"],["A","Z"],"'","{","}"],!0,!1),H=/^[a-zA-Z]/,q=Ge([["a","z"],["A","Z"]],!1,!1),Y="date",Z=je("date",!1),K="time",$=je("time",!1),Q="plural",J=je("plural",!1),ee="selectordinal",te=je("selectordinal",!1),re="offset:",ne=je("offset:",!1),ie="select",oe=je("select",!1),ae=je("=",!1),se=Ve("whitespace"),ue=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ce=Ge([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),le=Ve("syntax pattern"),fe=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,pe=Ge([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),he=Ve("optional whitespace"),de=Ve("number"),me=je("-",!1),ve=(Ve("apostrophe"),Ve("double apostrophes")),ge="''",ye=je("''",!1),be=je("\n",!1),Ee=Ve("argNameOrNumber"),we=Ve("validTag"),_e=Ve("argNumber"),Ae=je("0",!1),Te=/^[1-9]/,Oe=Ge([["1","9"]],!1,!1),Pe=/^[0-9]/,Se=Ge([["0","9"]],!1,!1),Ce=Ve("argName"),Le=Ve("tagName"),xe=0,Ne=0,Re=[{line:1,column:1}],De=0,Ie=[],ke=0
if(void 0!==t.startRule){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".')
u=s[t.startRule]}function Me(){return e.substring(Ne,xe)}function Fe(){return Xe(Ne,xe)}function Ue(e,t){throw function(e,t){return new L(e,[],"",t)}(e,t=void 0!==t?t:Xe(Ne,xe))}function je(e,t){return{type:"literal",text:e,ignoreCase:t}}function Ge(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Ve(e){return{type:"other",description:e}}function Be(t){var r,n=Re[t]
if(n)return n
for(r=t-1;!Re[r];)r--
for(n={line:(n=Re[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return Re[t]=n,n}function Xe(e,t){var r=Be(e),n=Be(t)
return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function ze(e){xe<De||(xe>De&&(De=xe,Ie=[]),Ie.push(e))}function We(){return He()}function He(){var e,t
for(e=[],t=qe();t!==a;)e.push(t),t=qe()
return e}function qe(){var t,r
return t=xe,Ne=xe,(At?a:void 0)!==a?(r=function(){var e,t,r,i,s,u,c
return ke++,(e=Ke())===a&&(e=xe,(t=$e())!==a&&(r=He())!==a&&(i=Qe())!==a?(Ne=e,u=r,(s=t)!==(c=i)&&Ue('Mismatch tag "'+s+'" !== "'+c+'"',Fe()),e=t=(0,o.pi)({type:n.tag,value:s,children:u},bt())):(xe=e,e=a)),ke--,e===a&&(t=a,0===ke&&ze(h)),e}(),r!==a?(Ne=t,t=r):(xe=t,t=a)):(xe=t,t=a),t===a&&(t=function(){var e,t,r
return e=xe,(t=Ye())!==a&&(Ne=e,r=t,t=(0,o.pi)({type:n.literal,value:r},bt())),t}())===a&&(t=function(){var t,r,i,s,u
return ke++,t=xe,123===e.charCodeAt(xe)?(r=y,xe++):(r=a,0===ke&&ze(E)),r!==a&&ut()!==a&&(i=ht())!==a&&ut()!==a?(125===e.charCodeAt(xe)?(s=w,xe++):(s=a,0===ke&&ze(_)),s!==a?(Ne=t,u=i,t=r=(0,o.pi)({type:n.argument,value:u},bt())):(xe=t,t=a)):(xe=t,t=a),ke--,t===a&&(r=a,0===ke&&ze(g)),t}())===a&&(t=function(){var t
return t=function(){var t,r,n,s,u,c,l,f,p
return t=xe,123===e.charCodeAt(xe)?(r=y,xe++):(r=a,0===ke&&ze(E)),r!==a&&ut()!==a&&(n=ht())!==a&&ut()!==a?(44===e.charCodeAt(xe)?(s=k,xe++):(s=a,0===ke&&ze(M)),s!==a&&ut()!==a?(e.substr(xe,6)===F?(u=F,xe+=6):(u=a,0===ke&&ze(U)),u!==a&&ut()!==a?(c=xe,44===e.charCodeAt(xe)?(l=k,xe++):(l=a,0===ke&&ze(M)),l!==a&&(f=ut())!==a?(p=function(){var t,r,n
return t=xe,e.substr(xe,2)===R?(r=R,xe+=2):(r=a,0===ke&&ze(D)),r!==a?(n=function(){var e,t,r,n
if(e=xe,t=[],(r=tt())!==a)for(;r!==a;)t.push(r),r=tt()
else t=a
return t!==a&&(Ne=e,n=t,t=(0,o.pi)({type:i.number,tokens:n,parsedOptions:Tt?C(n):{}},bt())),t}(),n!==a?(Ne=t,t=r=n):(xe=t,t=a)):(xe=t,t=a),t===a&&(t=xe,Ne=xe,gt.push("numberArgStyle"),(r=(r=!0)?void 0:a)!==a&&(n=Ye())!==a?(Ne=t,t=r=I(n)):(xe=t,t=a)),t}(),p!==a?c=l=[l,f,p]:(xe=c,c=a)):(xe=c,c=a),c===a&&(c=null),c!==a&&(l=ut())!==a?(125===e.charCodeAt(xe)?(f=w,xe++):(f=a,0===ke&&ze(_)),f!==a?(Ne=t,t=r=j(n,u,c)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a),t}(),t===a&&(t=function(){var t,r,n,s,u,c,l,f,p
return t=xe,123===e.charCodeAt(xe)?(r=y,xe++):(r=a,0===ke&&ze(E)),r!==a&&ut()!==a&&(n=ht())!==a&&ut()!==a?(44===e.charCodeAt(xe)?(s=k,xe++):(s=a,0===ke&&ze(M)),s!==a&&ut()!==a?(e.substr(xe,4)===Y?(u=Y,xe+=4):(u=a,0===ke&&ze(Z)),u===a&&(e.substr(xe,4)===K?(u=K,xe+=4):(u=a,0===ke&&ze($))),u!==a&&ut()!==a?(c=xe,44===e.charCodeAt(xe)?(l=k,xe++):(l=a,0===ke&&ze(M)),l!==a&&(f=ut())!==a?(p=function(){var t,r,n
return t=xe,e.substr(xe,2)===R?(r=R,xe+=2):(r=a,0===ke&&ze(D)),r!==a?(n=function(){var t,r,n,s,u,c,l
if(t=xe,r=xe,n=[],(s=rt())===a&&(s=nt()),s!==a)for(;s!==a;)n.push(s),(s=rt())===a&&(s=nt())
else n=a
return(r=n!==a?e.substring(r,xe):n)!==a&&(Ne=t,u=r,r=(0,o.pi)({type:i.dateTime,pattern:u,parsedOptions:Tt?(c=u,l={},c.replace(b,(function(e){var t=e.length
switch(e[0]){case"G":l.era=4===t?"long":5===t?"narrow":"short"
break
case"y":l.year=2===t?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":l.month=["numeric","2-digit","short","long","narrow"][t-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":l.day=["numeric","2-digit"][t-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":l.weekday=4===t?"short":5===t?"narrow":"short"
break
case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
l.weekday=["short","long","narrow","short"][t-4]
break
case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
l.weekday=["short","long","narrow","short"][t-4]
break
case"a":l.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":l.hourCycle="h12",l.hour=["numeric","2-digit"][t-1]
break
case"H":l.hourCycle="h23",l.hour=["numeric","2-digit"][t-1]
break
case"K":l.hourCycle="h11",l.hour=["numeric","2-digit"][t-1]
break
case"k":l.hourCycle="h24",l.hour=["numeric","2-digit"][t-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":l.minute=["numeric","2-digit"][t-1]
break
case"s":l.second=["numeric","2-digit"][t-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":l.timeZoneName=t<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),l):{}},bt())),r}(),n!==a?(Ne=t,t=r=n):(xe=t,t=a)):(xe=t,t=a),t===a&&(t=xe,Ne=xe,gt.push("dateOrTimeArgStyle"),(r=(r=!0)?void 0:a)!==a&&(n=Ye())!==a?(Ne=t,t=r=I(n)):(xe=t,t=a)),t}(),p!==a?c=l=[l,f,p]:(xe=c,c=a)):(xe=c,c=a),c===a&&(c=null),c!==a&&(l=ut())!==a?(125===e.charCodeAt(xe)?(f=w,xe++):(f=a,0===ke&&ze(_)),f!==a?(Ne=t,t=r=j(n,u,c)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a),t}()),t}(),t===a&&(t=function(){var t,r,i,s,u,c,l,f,p,h,d
if(t=xe,123===e.charCodeAt(xe)?(r=y,xe++):(r=a,0===ke&&ze(E)),r!==a)if(ut()!==a)if((i=ht())!==a)if(ut()!==a)if(44===e.charCodeAt(xe)?(s=k,xe++):(s=a,0===ke&&ze(M)),s!==a)if(ut()!==a)if(e.substr(xe,6)===Q?(u=Q,xe+=6):(u=a,0===ke&&ze(J)),u===a&&(e.substr(xe,13)===ee?(u=ee,xe+=13):(u=a,0===ke&&ze(te))),u!==a)if(ut()!==a)if(44===e.charCodeAt(xe)?(c=k,xe++):(c=a,0===ke&&ze(M)),c!==a)if(ut()!==a)if(l=xe,e.substr(xe,7)===re?(f=re,xe+=7):(f=a,0===ke&&ze(ne)),f!==a&&(p=ut())!==a&&(h=ct())!==a?l=f=[f,p,h]:(xe=l,l=a),l===a&&(l=null),l!==a)if((f=ut())!==a){if(p=[],(h=ot())!==a)for(;h!==a;)p.push(h),h=ot()
else p=a
p!==a&&(h=ut())!==a?(125===e.charCodeAt(xe)?(d=w,xe++):(d=a,0===ke&&ze(_)),d!==a?(Ne=t,r=function(e,t,r,i){return(0,o.pi)({type:n.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:i.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Ue('Duplicate option "'+r+'" in plural element: "'+Me()+'"',Fe()),e[r]={value:n,location:i},e}),{})},bt())}(i,u,l,p),t=r):(xe=t,t=a)):(xe=t,t=a)}else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
return t}(),t===a&&(t=function(){var t,r,i,s,u,c,l,f,p
if(t=xe,123===e.charCodeAt(xe)?(r=y,xe++):(r=a,0===ke&&ze(E)),r!==a)if(ut()!==a)if((i=ht())!==a)if(ut()!==a)if(44===e.charCodeAt(xe)?(s=k,xe++):(s=a,0===ke&&ze(M)),s!==a)if(ut()!==a)if(e.substr(xe,6)===ie?(u=ie,xe+=6):(u=a,0===ke&&ze(oe)),u!==a)if(ut()!==a)if(44===e.charCodeAt(xe)?(c=k,xe++):(c=a,0===ke&&ze(M)),c!==a)if(ut()!==a){if(l=[],(f=it())!==a)for(;f!==a;)l.push(f),f=it()
else l=a
l!==a&&(f=ut())!==a?(125===e.charCodeAt(xe)?(p=w,xe++):(p=a,0===ke&&ze(_)),p!==a?(Ne=t,r=function(e,t){return(0,o.pi)({type:n.select,value:e,options:t.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Ue('Duplicate option "'+r+'" in select element: "'+Me()+'"',Fe()),e[r]={value:n,location:i},e}),{})},bt())}(i,l),t=r):(xe=t,t=a)):(xe=t,t=a)}else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
else xe=t,t=a
return t}(),t===a&&(t=function(){var t,r
return t=xe,35===e.charCodeAt(xe)?(r="#",xe++):(r=a,0===ke&&ze(p)),r!==a&&(Ne=t,r=(0,o.pi)({type:n.pound},bt())),r}())))),t}function Ye(){var t,r,n,i
if(t=xe,Ne=xe,(r=(r=At)?void 0:a)!==a){if(n=[],(i=lt())===a&&(i=ft())===a&&(i=pt())===a&&(60===e.charCodeAt(xe)?(i=c,xe++):(i=a,0===ke&&ze(l))),i!==a)for(;i!==a;)n.push(i),(i=lt())===a&&(i=ft())===a&&(i=pt())===a&&(60===e.charCodeAt(xe)?(i=c,xe++):(i=a,0===ke&&ze(l)))
else n=a
n!==a?(Ne=t,t=r=f(n)):(xe=t,t=a)}else xe=t,t=a
if(t===a){if(t=xe,r=[],(n=lt())===a&&(n=ft())===a&&(n=pt())===a&&(n=Ze()),n!==a)for(;n!==a;)r.push(n),(n=lt())===a&&(n=ft())===a&&(n=pt())===a&&(n=Ze())
else r=a
r!==a&&(Ne=t,r=f(r)),t=r}return t}function Ze(){var t,r,n
return t=xe,r=xe,ke++,(n=$e())===a&&(n=Qe())===a&&(n=Ke()),ke--,n===a?r=void 0:(xe=r,r=a),r!==a?(60===e.charCodeAt(xe)?(n=c,xe++):(n=a,0===ke&&ze(l)),n!==a?(Ne=t,t=r="<"):(xe=t,t=a)):(xe=t,t=a),t}function Ke(){var t,r,i,s,u,f,p
return t=xe,r=xe,60===e.charCodeAt(xe)?(i=c,xe++):(i=a,0===ke&&ze(l)),i!==a&&(s=dt())!==a&&(u=ut())!==a?("/>"===e.substr(xe,2)?(f="/>",xe+=2):(f=a,0===ke&&ze(d)),f!==a?r=i=[i,s,u,f]:(xe=r,r=a)):(xe=r,r=a),r!==a&&(Ne=t,p=r,r=(0,o.pi)({type:n.literal,value:p.join("")},bt())),r}function $e(){var t,r,n,i
return t=xe,60===e.charCodeAt(xe)?(r=c,xe++):(r=a,0===ke&&ze(l)),r!==a&&(n=dt())!==a?(62===e.charCodeAt(xe)?(i=">",xe++):(i=a,0===ke&&ze(m)),i!==a?(Ne=t,t=r=n):(xe=t,t=a)):(xe=t,t=a),t}function Qe(){var t,r,n,i
return t=xe,"</"===e.substr(xe,2)?(r="</",xe+=2):(r=a,0===ke&&ze(v)),r!==a&&(n=dt())!==a?(62===e.charCodeAt(xe)?(i=">",xe++):(i=a,0===ke&&ze(m)),i!==a?(Ne=t,t=r=n):(xe=t,t=a)):(xe=t,t=a),t}function Je(){var t,r,n,i,o
if(ke++,t=xe,r=[],n=xe,i=xe,ke++,(o=at())===a&&(T.test(e.charAt(xe))?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(O))),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a),n!==a)for(;n!==a;)r.push(n),n=xe,i=xe,ke++,(o=at())===a&&(T.test(e.charAt(xe))?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(O))),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a)
else r=a
return t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(A)),t}function et(){var t,r,n
return ke++,t=xe,47===e.charCodeAt(xe)?(r="/",xe++):(r=a,0===ke&&ze(x)),r!==a&&(n=Je())!==a?(Ne=t,t=r=n):(xe=t,t=a),ke--,t===a&&(r=a,0===ke&&ze(S)),t}function tt(){var e,t,r,n,i
if(ke++,e=xe,(t=ut())!==a)if((r=Je())!==a){for(n=[],i=et();i!==a;)n.push(i),i=et()
n!==a?(Ne=e,t=function(e,t){return{stem:e,options:t}}(r,n),e=t):(xe=e,e=a)}else xe=e,e=a
else xe=e,e=a
return ke--,e===a&&(t=a,0===ke&&ze(N)),e}function rt(){var t,r,n,i
if(t=xe,39===e.charCodeAt(xe)?(r=G,xe++):(r=a,0===ke&&ze(V)),r!==a){if(n=[],(i=lt())===a&&(B.test(e.charAt(xe))?(i=e.charAt(xe),xe++):(i=a,0===ke&&ze(X))),i!==a)for(;i!==a;)n.push(i),(i=lt())===a&&(B.test(e.charAt(xe))?(i=e.charAt(xe),xe++):(i=a,0===ke&&ze(X)))
else n=a
n!==a?(39===e.charCodeAt(xe)?(i=G,xe++):(i=a,0===ke&&ze(V)),i!==a?t=r=[r,n,i]:(xe=t,t=a)):(xe=t,t=a)}else xe=t,t=a
if(t===a)if(t=[],(r=lt())===a&&(z.test(e.charAt(xe))?(r=e.charAt(xe),xe++):(r=a,0===ke&&ze(W))),r!==a)for(;r!==a;)t.push(r),(r=lt())===a&&(z.test(e.charAt(xe))?(r=e.charAt(xe),xe++):(r=a,0===ke&&ze(W)))
else t=a
return t}function nt(){var t,r
if(t=[],H.test(e.charAt(xe))?(r=e.charAt(xe),xe++):(r=a,0===ke&&ze(q)),r!==a)for(;r!==a;)t.push(r),H.test(e.charAt(xe))?(r=e.charAt(xe),xe++):(r=a,0===ke&&ze(q))
else t=a
return t}function it(){var t,r,n,i,s,u,c
return t=xe,ut()!==a&&(r=vt())!==a&&ut()!==a?(123===e.charCodeAt(xe)?(n=y,xe++):(n=a,0===ke&&ze(E)),n!==a?(Ne=xe,gt.push("select"),void 0!==a&&(i=He())!==a?(125===e.charCodeAt(xe)?(s=w,xe++):(s=a,0===ke&&ze(_)),s!==a?(Ne=t,u=r,c=i,gt.pop(),t=(0,o.pi)({id:u,value:c},bt())):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a),t}function ot(){var t,r,n,i,s,u,c
return t=xe,ut()!==a?(r=function(){var t,r,n,i
return t=xe,r=xe,61===e.charCodeAt(xe)?(n="=",xe++):(n=a,0===ke&&ze(ae)),n!==a&&(i=ct())!==a?r=n=[n,i]:(xe=r,r=a),(t=r!==a?e.substring(t,xe):r)===a&&(t=vt()),t}(),r!==a&&ut()!==a?(123===e.charCodeAt(xe)?(n=y,xe++):(n=a,0===ke&&ze(E)),n!==a?(Ne=xe,gt.push("plural"),void 0!==a&&(i=He())!==a?(125===e.charCodeAt(xe)?(s=w,xe++):(s=a,0===ke&&ze(_)),s!==a?(Ne=t,u=r,c=i,gt.pop(),t=(0,o.pi)({id:u,value:c},bt())):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a)):(xe=t,t=a),t}function at(){var t
return ke++,ue.test(e.charAt(xe))?(t=e.charAt(xe),xe++):(t=a,0===ke&&ze(ce)),ke--,t===a&&0===ke&&ze(se),t}function st(){var t
return ke++,fe.test(e.charAt(xe))?(t=e.charAt(xe),xe++):(t=a,0===ke&&ze(pe)),ke--,t===a&&0===ke&&ze(le),t}function ut(){var t,r,n
for(ke++,t=xe,r=[],n=at();n!==a;)r.push(n),n=at()
return t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(he)),t}function ct(){var t,r,n,i
return ke++,t=xe,45===e.charCodeAt(xe)?(r="-",xe++):(r=a,0===ke&&ze(me)),r===a&&(r=null),r!==a&&(n=mt())!==a?(Ne=t,t=r=(i=n)?r?-i:i:0):(xe=t,t=a),ke--,t===a&&(r=a,0===ke&&ze(de)),t}function lt(){var t,r
return ke++,t=xe,e.substr(xe,2)===ge?(r=ge,xe+=2):(r=a,0===ke&&ze(ye)),r!==a&&(Ne=t,r="'"),ke--,(t=r)===a&&(r=a,0===ke&&ze(ve)),t}function ft(){var t,r,n,i,o,s
if(t=xe,39===e.charCodeAt(xe)?(r=G,xe++):(r=a,0===ke&&ze(V)),r!==a)if(n=function(){var t,r,n,i,o
return t=xe,r=xe,e.length>xe?(n=e.charAt(xe),xe++):(n=a,0===ke&&ze(P)),n!==a?(Ne=xe,(i=(i="<"===(o=n)||">"===o||"{"===o||"}"===o||yt()&&"#"===o)?void 0:a)!==a?r=n=[n,i]:(xe=r,r=a)):(xe=r,r=a),r!==a?e.substring(t,xe):r}(),n!==a){for(i=xe,o=[],e.substr(xe,2)===ge?(s=ge,xe+=2):(s=a,0===ke&&ze(ye)),s===a&&(B.test(e.charAt(xe))?(s=e.charAt(xe),xe++):(s=a,0===ke&&ze(X)));s!==a;)o.push(s),e.substr(xe,2)===ge?(s=ge,xe+=2):(s=a,0===ke&&ze(ye)),s===a&&(B.test(e.charAt(xe))?(s=e.charAt(xe),xe++):(s=a,0===ke&&ze(X)));(i=o!==a?e.substring(i,xe):o)!==a?(39===e.charCodeAt(xe)?(o=G,xe++):(o=a,0===ke&&ze(V)),o===a&&(o=null),o!==a?(Ne=t,t=r=n+i.replace("''","'")):(xe=t,t=a)):(xe=t,t=a)}else xe=t,t=a
else xe=t,t=a
return t}function pt(){var t,r,n,i,o
return t=xe,r=xe,e.length>xe?(n=e.charAt(xe),xe++):(n=a,0===ke&&ze(P)),n!==a?(Ne=xe,(i=(i=!("<"===(o=n)||"{"===o||yt()&&"#"===o||gt.length>1&&"}"===o))?void 0:a)!==a?r=n=[n,i]:(xe=r,r=a)):(xe=r,r=a),r===a&&(10===e.charCodeAt(xe)?(r="\n",xe++):(r=a,0===ke&&ze(be))),r!==a?e.substring(t,xe):r}function ht(){var t,r
return ke++,t=xe,(r=mt())===a&&(r=vt()),t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(Ee)),t}function dt(){var t,r
return ke++,t=xe,(r=mt())===a&&(r=function(){var t,r,n,i,o
if(ke++,t=xe,r=[],45===e.charCodeAt(xe)?(n="-",xe++):(n=a,0===ke&&ze(me)),n===a&&(n=xe,i=xe,ke++,(o=at())===a&&(o=st()),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a)),n!==a)for(;n!==a;)r.push(n),45===e.charCodeAt(xe)?(n="-",xe++):(n=a,0===ke&&ze(me)),n===a&&(n=xe,i=xe,ke++,(o=at())===a&&(o=st()),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a))
else r=a
return t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(Le)),t}()),t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(we)),t}function mt(){var t,r,n,i,o
if(ke++,t=xe,48===e.charCodeAt(xe)?(r="0",xe++):(r=a,0===ke&&ze(Ae)),r!==a&&(Ne=t,r=0),(t=r)===a){if(t=xe,r=xe,Te.test(e.charAt(xe))?(n=e.charAt(xe),xe++):(n=a,0===ke&&ze(Oe)),n!==a){for(i=[],Pe.test(e.charAt(xe))?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(Se));o!==a;)i.push(o),Pe.test(e.charAt(xe))?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(Se))
i!==a?r=n=[n,i]:(xe=r,r=a)}else xe=r,r=a
r!==a&&(Ne=t,r=parseInt(r.join(""),10)),t=r}return ke--,t===a&&(r=a,0===ke&&ze(_e)),t}function vt(){var t,r,n,i,o
if(ke++,t=xe,r=[],n=xe,i=xe,ke++,(o=at())===a&&(o=st()),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a),n!==a)for(;n!==a;)r.push(n),n=xe,i=xe,ke++,(o=at())===a&&(o=st()),ke--,o===a?i=void 0:(xe=i,i=a),i!==a?(e.length>xe?(o=e.charAt(xe),xe++):(o=a,0===ke&&ze(P)),o!==a?n=i=[i,o]:(xe=n,n=a)):(xe=n,n=a)
else r=a
return t=r!==a?e.substring(t,xe):r,ke--,t===a&&(r=a,0===ke&&ze(Ce)),t}var gt=["root"]
function yt(){return"plural"===gt[gt.length-1]}function bt(){return t&&t.captureLocation?{location:Fe()}:{}}var Et,wt,_t,At=t&&t.ignoreTag,Tt=t&&t.shouldParseSkeleton
if((r=u())!==a&&xe===e.length)return r
throw r!==a&&xe<e.length&&ze({type:"end"}),Et=Ie,wt=De<e.length?e.charAt(De):null,_t=De<e.length?Xe(De,De+1):Xe(De,De),new L(L.buildMessage(Et,wt),Et,wt,_t)},N=/(^|[^\\])#/g
function R(e){e.forEach((function(e){(p(e)||f(e))&&Object.keys(e.options).forEach((function(t){for(var r,n=e.options[t],i=-1,s=void 0,u=0;u<n.value.length;u++){var c=n.value[u]
if(a(c)&&N.test(c.value)){i=u,s=c
break}}if(s){var l=s.value.replace(N,"$1{"+e.value+", number}"),f=x(l);(r=n.value).splice.apply(r,(0,o.ev)([i,1],f))}R(n.value)}))}))}function D(e,t){t=(0,o.pi)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},t||{})
var r=x(e,t)
return t.normalizeHashtagInPlural&&R(r),r}},606:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{ErrorCode:()=>fe,FormatError:()=>me,IntlMessageFormat:()=>_e,InvalidValueError:()=>ve,InvalidValueTypeError:()=>ge,MissingValueError:()=>ye,PART_TYPE:()=>de,default:()=>Ae,formatToParts:()=>Ee,isFormatXMLElementFn:()=>be})
var n,i,o,a=r(480)
function s(e){return e.type===i.literal}function u(e){return e.type===i.argument}function c(e){return e.type===i.number}function l(e){return e.type===i.date}function f(e){return e.type===i.time}function p(e){return e.type===i.select}function h(e){return e.type===i.plural}function d(e){return e.type===i.pound}function m(e){return e.type===i.tag}function v(e){return!(!e||"object"!=typeof e||e.type!==o.number)}function g(e){return!(!e||"object"!=typeof e||e.type!==o.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(n||(n={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(i||(i={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(o||(o={}))
var y=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,b=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function E(e){var t={}
return e.replace(b,(function(e){var r=e.length
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
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var w,_=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,A=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,T=/^(@+)?(\+|#+)?[rs]?$/g,O=/(\*)(0+)|(#+)(0+)|(0+)/g,P=/^(0+)$/
function S(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(T,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function C(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function L(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!P.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function x(e){return C(e)||{}}function N(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
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
case"scientific":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),x(t))}),{}))
continue
case"engineering":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),x(t))}),{}))
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
i.options[0].replace(O,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(P.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(A.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(A,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?t=(0,a.pi)((0,a.pi)({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=(0,a.pi)((0,a.pi)({},t),S(o)))}else if(T.test(i.stem))t=(0,a.pi)((0,a.pi)({},t),S(i.stem))
else{var s=C(i.stem)
s&&(t=(0,a.pi)((0,a.pi)({},t),s))
var u=L(i.stem)
u&&(t=(0,a.pi)((0,a.pi)({},t),u))}}return t}var R=new RegExp("^".concat(y.source,"*")),D=new RegExp("".concat(y.source,"*$"))
function I(e,t){return{start:e,end:t}}var k=!!String.prototype.startsWith,M=!!String.fromCodePoint,F=!!Object.fromEntries,U=!!String.prototype.codePointAt,j=!!String.prototype.trimStart,G=!!String.prototype.trimEnd,V=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},B=!0
try{B="a"===(null===(w=K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===w?void 0:w[0])}catch(e){B=!1}var X,z=k?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},W=M?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r,n="",i=e.length,o=0;i>o;){if((r=e[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},H=F?Object.fromEntries:function(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
t[o]=a}return t},q=U?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length
if(!(t<0||t>=r)){var n,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===r||(n=e.charCodeAt(t+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},Y=j?function(e){return e.trimStart()}:function(e){return e.replace(R,"")},Z=G?function(e){return e.trimEnd()}:function(e){return e.replace(D,"")}
function K(e,t){return new RegExp(e,t)}if(B){var $=K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
X=function(e,t){var r
return $.lastIndex=t,null!==(r=$.exec(e)[1])&&void 0!==r?r:""}}else X=function(e,t){for(var r=[];;){var n=q(e,t)
if(void 0===n||ee(n)||te(n))break
r.push(n),t+=n>=65536?2:1}return W.apply(void 0,r)}
var Q=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,r){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(e,r)).err)return s
o.push(s.val)}else{if(125===a&&e>0)break
if(35!==a||"plural"!==t&&"selectordinal"!==t){if(60===a&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(n.UNMATCHED_CLOSING_TAG,I(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&J(this.peek()||0)){if((s=this.parseTag(e,t)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(e,t)).err)return s
o.push(s.val)}}else{var u=this.clonePosition()
this.bump(),o.push({type:i.pound,location:I(u,this.clonePosition())})}}}return{val:o,err:null}},e.prototype.parseTag=function(e,t){var r=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:I(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0)
if(a.err)return a
var s=a.val,u=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!J(this.char()))return this.error(n.INVALID_TAG,I(u,this.clonePosition()))
var c=this.clonePosition()
return o!==this.parseTagName()?this.error(n.UNMATCHED_CLOSING_TAG,I(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:I(r,this.clonePosition())},err:null}:this.error(n.INVALID_TAG,I(u,this.clonePosition())))}return this.error(n.UNCLOSED_TAG,I(r,this.clonePosition()))}return this.error(n.INVALID_TAG,I(r,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var r=this.clonePosition(),n="";;){var o=this.tryParseQuote(t)
if(o)n+=o
else{var a=this.tryParseUnquoted(e,t)
if(a)n+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
n+=s}}}var u=I(r,this.clonePosition())
return{val:{type:i.literal,value:n,location:u},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(J(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
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
this.bump()}return W.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),W(r))},e.prototype.parseArgument=function(e,t){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,I(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(n.EMPTY_ARGUMENT,I(r,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(n.MALFORMED_ARGUMENT,I(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,I(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:I(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,I(r,this.clonePosition())):this.parseArgumentOptions(e,t,o,r)
default:return this.error(n.MALFORMED_ARGUMENT,I(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),r=X(this.message,t),n=t+r.length
return this.bumpTo(n),{value:r,location:I(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,r,s){var u,c=this.clonePosition(),l=this.parseIdentifierIfPossible().value,f=this.clonePosition()
switch(l){case"":return this.error(n.EXPECT_ARGUMENT_TYPE,I(c,f))
case"number":case"date":case"time":this.bumpSpace()
var p=null
if(this.bumpIf(",")){this.bumpSpace()
var h=this.clonePosition()
if((w=this.parseSimpleArgStyleIfPossible()).err)return w
if(0===(v=Z(w.val)).length)return this.error(n.EXPECT_ARGUMENT_STYLE,I(this.clonePosition(),this.clonePosition()))
p={style:v,styleLocation:I(h,this.clonePosition())}}if((_=this.tryParseArgumentClose(s)).err)return _
var d=I(s,this.clonePosition())
if(p&&z(null==p?void 0:p.style,"::",0)){var m=Y(p.style.slice(2))
if("number"===l)return(w=this.parseNumberSkeletonFromString(m,p.styleLocation)).err?w:{val:{type:i.number,value:r,location:d,style:w.val},err:null}
if(0===m.length)return this.error(n.EXPECT_DATE_TIME_SKELETON,d)
var v={type:o.dateTime,pattern:m,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?E(m):{}}
return{val:{type:"date"===l?i.date:i.time,value:r,location:d,style:v},err:null}}return{val:{type:"number"===l?i.number:"date"===l?i.date:i.time,value:r,location:d,style:null!==(u=null==p?void 0:p.style)&&void 0!==u?u:null},err:null}
case"plural":case"selectordinal":case"select":var g=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS,I(g,(0,a.pi)({},g)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),b=0
if("select"!==l&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,I(this.clonePosition(),this.clonePosition()))
var w
if(this.bumpSpace(),(w=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return w
this.bumpSpace(),y=this.parseIdentifierIfPossible(),b=w.val}var _,A=this.tryParsePluralOrSelectOptions(e,l,t,y)
if(A.err)return A
if((_=this.tryParseArgumentClose(s)).err)return _
var T=I(s,this.clonePosition())
return"select"===l?{val:{type:i.select,value:r,options:H(A.val),location:T},err:null}:{val:{type:i.plural,value:r,options:H(A.val),offset:b,pluralType:"plural"===l?"cardinal":"ordinal",location:T},err:null}
default:return this.error(n.INVALID_ARGUMENT_TYPE,I(c,f))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,I(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,I(r,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var r=[]
try{r=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],r=0,n=e.split(_).filter((function(e){return e.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,u=a;s<u.length;s++)if(0===u[s].length)throw new Error("Invalid number skeleton")
t.push({stem:o,options:a})}return t}(e)}catch(e){return this.error(n.INVALID_NUMBER_SKELETON,t)}return{val:{type:o.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?N(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,r,i){for(var o,a=!1,s=[],u=new Set,c=i.value,l=i.location;;){if(0===c.length){var f=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var p=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR,n.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(p.err)return p
l=I(f,this.clonePosition()),c=this.message.slice(f.offset,this.offset())}if(u.has(c))return this.error("select"===t?n.DUPLICATE_SELECT_ARGUMENT_SELECTOR:n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l)
"other"===c&&(a=!0),this.bumpSpace()
var h=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,I(this.clonePosition(),this.clonePosition()))
var d=this.parseMessage(e+1,t,r)
if(d.err)return d
var m=this.tryParseArgumentClose(h)
if(m.err)return m
s.push([c,{value:d.val,location:I(h,this.clonePosition())}]),u.add(c),this.bumpSpace(),c=(o=this.parseIdentifierIfPossible()).value,l=o.location}return 0===s.length?this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR:n.EXPECT_PLURAL_ARGUMENT_SELECTOR,I(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(n.MISSING_OTHER_CLAUSE,I(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=I(n,this.clonePosition())
return i?V(o*=r)?{val:o,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=q(this.message,e)
if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"))
return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char()
10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(z(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump()
return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),r=this.message.indexOf(e,t)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()))
for(e=Math.min(e,this.message.length);;){var t=this.offset()
if(t===e)break
if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ee(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null
var e=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(e>=65536?2:1))
return null!=r?r:null},e}()
function J(e){return e>=97&&e<=122||e>=65&&e<=90}function ee(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function te(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function re(e){e.forEach((function(e){if(delete e.location,p(e)||h(e))for(var t in e.options)delete e.options[t].location,re(e.options[t].value)
else c(e)&&v(e.style)||(l(e)||f(e))&&g(e.style)?delete e.style.location:m(e)&&re(e.children)}))}function ne(e,t){void 0===t&&(t={}),t=(0,a.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var r=new Q(e,t).parse()
if(r.err){var i=SyntaxError(n[r.err.kind])
throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==t?void 0:t.captureLocation)||re(r.val),r.val}function ie(e,t){var r=t&&t.cache?t.cache:pe,n=t&&t.serializer?t.serializer:ce
return(t&&t.strategy?t.strategy:ue)(e,{cache:r,serializer:n})}function oe(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function ae(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function se(e,t,r,n,i){return r.bind(t,e,n,i)}function ue(e,t){return se(e,this,1===e.length?oe:ae,t.cache.create(),t.serializer)}var ce=function(){return JSON.stringify(arguments)}
function le(){this.cache=Object.create(null)}le.prototype.get=function(e){return this.cache[e]},le.prototype.set=function(e,t){this.cache[e]=t}
var fe,pe={create:function(){return new le}},he={variadic:function(e,t){return se(e,this,ae,t.cache.create(),t.serializer)},monadic:function(e,t){return se(e,this,oe,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(fe||(fe={}))
var de,me=function(e){function t(t,r,n){var i=e.call(this,t)||this
return i.code=r,i.originalMessage=n,i}return(0,a.ZT)(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),ve=function(e){function t(t,r,n,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),fe.INVALID_VALUE,i)||this}return(0,a.ZT)(t,e),t}(me),ge=function(e){function t(t,r,n){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),fe.INVALID_VALUE,n)||this}return(0,a.ZT)(t,e),t}(me),ye=function(e){function t(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),fe.MISSING_VALUE,r)||this}return(0,a.ZT)(t,e),t}(me)
function be(e){return"function"==typeof e}function Ee(e,t,r,n,i,o,a){if(1===e.length&&s(e[0]))return[{type:de.literal,value:e[0].value}]
for(var y=[],b=0,E=e;b<E.length;b++){var w=E[b]
if(s(w))y.push({type:de.literal,value:w.value})
else if(d(w))"number"==typeof o&&y.push({type:de.literal,value:r.getNumberFormat(t).format(o)})
else{var _=w.value
if(!i||!(_ in i))throw new ye(_,a)
var A=i[_]
if(u(w))A&&"string"!=typeof A&&"number"!=typeof A||(A="string"==typeof A||"number"==typeof A?String(A):""),y.push({type:"string"==typeof A?de.literal:de.object,value:A})
else if(l(w)){var T="string"==typeof w.style?n.date[w.style]:g(w.style)?w.style.parsedOptions:void 0
y.push({type:de.literal,value:r.getDateTimeFormat(t,T).format(A)})}else if(f(w))T="string"==typeof w.style?n.time[w.style]:g(w.style)?w.style.parsedOptions:void 0,y.push({type:de.literal,value:r.getDateTimeFormat(t,T).format(A)})
else if(c(w))(T="string"==typeof w.style?n.number[w.style]:v(w.style)?w.style.parsedOptions:void 0)&&T.scale&&(A*=T.scale||1),y.push({type:de.literal,value:r.getNumberFormat(t,T).format(A)})
else{if(m(w)){var O=w.children,P=w.value,S=i[P]
if(!be(S))throw new ge(P,"function",a)
var C=S(Ee(O,t,r,n,i,o).map((function(e){return e.value})))
Array.isArray(C)||(C=[C]),y.push.apply(y,C.map((function(e){return{type:"string"==typeof e?de.literal:de.object,value:e}})))}if(p(w)){if(!(L=w.options[A]||w.options.other))throw new ve(w.value,A,Object.keys(w.options),a)
y.push.apply(y,Ee(L.value,t,r,n,i))}else if(h(w)){var L
if(!(L=w.options["=".concat(A)])){if(!Intl.PluralRules)throw new me('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',fe.MISSING_INTL_API,a)
var x=r.getPluralRules(t,{type:w.pluralType}).select(A-(w.offset||0))
L=w.options[x]||w.options.other}if(!L)throw new ve(w.value,A,Object.keys(w.options),a)
y.push.apply(y,Ee(L.value,t,r,n,i,A-(w.offset||0)))}}}}return(N=y).length<2?N:N.reduce((function(e,t){var r=e[e.length-1]
return r&&r.type===de.literal&&t.type===de.literal?r.value+=t.value:e.push(t),e}),[])
var N}function we(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(de||(de={}))
var _e=function(){function e(t,r,n,i){var o,s,u,c=this
if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=c.formatToParts(e)
if(1===t.length)return t[0].value
var r=t.reduce((function(e,t){return e.length&&t.type===de.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return Ee(c.ast,c.locales,c.formatters,c.formats,e,void 0,c.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(c.locales)[0]}},this.getAst=function(){return c.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=e.formats,(u=n)?Object.keys(s).reduce((function(e,t){var r,n
return e[t]=(r=s[t],(n=u[t])?(0,a.pi)((0,a.pi)((0,a.pi)({},r||{}),n||{}),Object.keys(r).reduce((function(e,t){return e[t]=(0,a.pi)((0,a.pi)({},r[t]),n[t]||{}),e}),{})):r),e}),(0,a.pi)({},s)):s),this.locales=r,this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ie((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.NumberFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:we(o.number),strategy:he.variadic}),getDateTimeFormat:ie((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.DateTimeFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:we(o.dateTime),strategy:he.variadic}),getPluralRules:ie((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.PluralRules).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:we(o.pluralRules),strategy:he.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=ne,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
const Ae=_e},22:(e,t,r)=>{"use strict"
function n(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}r.r(t),r.d(t,{EventTarget:()=>i,Promise:()=>x,all:()=>U,allSettled:()=>G,asap:()=>oe,async:()=>_e,cast:()=>we,configure:()=>a,default:()=>Se,defer:()=>Y,denodeify:()=>I,filter:()=>re,hash:()=>z,hashSettled:()=>H,map:()=>K,off:()=>Te,on:()=>Ae,race:()=>V,reject:()=>Q,resolve:()=>$,rethrow:()=>q})
var i={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var r=n(this),i=r[e]
i||(i=r[e]=[]),-1===i.indexOf(t)&&i.push(t)},off:function(e,t){var r=n(this)
if(t){var i=r[e],o=i.indexOf(t);-1!==o&&i.splice(o,1)}else r[e]=[]},trigger:function(e,t,r){var i=n(this)[e]
if(i)for(var o=0;o<i.length;o++)(0,i[o])(t,r)}},o={instrument:!1}
function a(e,t){if(2!==arguments.length)return o[e]
o[e]=t}i.mixin(o)
var s=[]
function u(e,t,r){1===s.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:Date.now(),error:o["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<s.length;e++){var t=s[e],r=t.payload
r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),o.trigger(t.name,t.payload)}s.length=0}),50)}function c(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var r=new this(l,t)
return y(r,e),r}function l(){}var f=void 0,p={error:null}
function h(e){try{return e.then}catch(e){return p.error=e,p}}var d=void 0
function m(){try{var e=d
return d=null,e.apply(this,arguments)}catch(e){return p.error=e,p}}function v(e){return d=e,m}function g(e,t,r){if(t.constructor===e.constructor&&r===O&&e.constructor.resolve===c)!function(e,t){1===t._state?E(e,t._result):2===t._state?(t._onError=null,w(e,t._result)):_(t,void 0,(function(r){t===r?E(e,r):y(e,r)}),(function(t){return w(e,t)}))}(e,t)
else if(r===p){var n=p.error
p.error=null,w(e,n)}else"function"==typeof r?function(e,t,r){o.async((function(e){var n=!1,i=v(r).call(t,(function(r){n||(n=!0,t===r?E(e,r):y(e,r))}),(function(t){n||(n=!0,w(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!n&&i===p){n=!0
var o=p.error
p.error=null,w(e,o)}}),e)}(e,t,r):E(e,t)}function y(e,t){var r,n
e===t?E(e,t):(n=typeof(r=t),null===r||"object"!==n&&"function"!==n?E(e,t):g(e,t,h(t)))}function b(e){e._onError&&e._onError(e._result),A(e)}function E(e,t){e._state===f&&(e._result=t,e._state=1,0===e._subscribers.length?o.instrument&&u("fulfilled",e):o.async(A,e))}function w(e,t){e._state===f&&(e._state=2,e._result=t,o.async(b,e))}function _(e,t,r,n){var i=e._subscribers,a=i.length
e._onError=null,i[a]=t,i[a+1]=r,i[a+2]=n,0===a&&e._state&&o.async(A,e)}function A(e){var t=e._subscribers,r=e._state
if(o.instrument&&u(1===r?"fulfilled":"rejected",e),0!==t.length){for(var n=void 0,i=void 0,a=e._result,s=0;s<t.length;s+=3)n=t[s],i=t[s+r],n?T(r,n,i,a):i(a)
e._subscribers.length=0}}function T(e,t,r,n){var i,o="function"==typeof r
if(i=o?v(r)(n):n,t._state!==f);else if(i===t)w(t,new TypeError("A promises callback cannot return that same promise."))
else if(i===p){var a=p.error
p.error=null,w(t,a)}else o?y(t,i):1===e?E(t,i):2===e&&w(t,i)}function O(e,t,r){var n=this,i=n._state
if(1===i&&!e||2===i&&!t)return o.instrument&&u("chained",n,n),n
n._onError=null
var a=new n.constructor(l,r),s=n._result
if(o.instrument&&u("chained",n,a),i===f)_(n,a,e,t)
else{var c=1===i?e:t
o.async((function(){return T(i,a,c,s)}))}return a}var P=function(){function e(e,t,r,n){this._instanceConstructor=e,this.promise=new e(l,n),this._abortOnReject=r,this._isUsingOwnPromise=e===x,this._isUsingOwnResolve=e.resolve===c,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var r=t.length||0
this.length=r,this._remaining=r,this._result=new Array(r),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,r=this.promise,n=0;r._state===f&&n<t;n++)this._eachEntry(e[n],n,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
E(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,r){var n=this._instanceConstructor
if(this._isUsingOwnResolve){var i=h(e)
if(i===O&&e._state!==f)e._onError=null,this._settledAt(e._state,t,e._result,r)
else if("function"!=typeof i)this._settledAt(1,t,e,r)
else if(this._isUsingOwnPromise){var o=new n(l)
g(o,e,i),this._willSettleAt(o,t,r)}else this._willSettleAt(new n((function(t){return t(e)})),t,r)}else this._willSettleAt(n.resolve(e),t,r)},e.prototype._eachEntry=function(e,t,r){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,r):this._setResultAt(1,t,e,r)},e.prototype._settledAt=function(e,t,r,n){var i=this.promise
i._state===f&&(this._abortOnReject&&2===e?w(i,r):(this._setResultAt(e,t,r,n),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,r,n){this._remaining--,this._result[t]=r},e.prototype._willSettleAt=function(e,t,r){var n=this
_(e,void 0,(function(e){return n._settledAt(1,t,e,r)}),(function(e){return n._settledAt(2,t,e,r)}))},e}()
function S(e,t,r){this._remaining--,this._result[t]=1===e?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}var C="rsvp_"+Date.now()+"-",L=0,x=function(){function e(t,r){this._id=L++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],o.instrument&&u("created",this),l!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var r=!1
try{t((function(t){r||(r=!0,y(e,t))}),(function(t){r||(r=!0,w(e,t))}))}catch(t){w(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
o.after((function(){t._onError&&o.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var r=this,n=r.constructor
return"function"==typeof e?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}()
function N(e,t){for(var r={},n=e.length,i=new Array(n),o=0;o<n;o++)i[o]=e[o]
for(var a=0;a<t.length;a++)r[t[a]]=i[a+1]
return r}function R(e){for(var t=e.length,r=new Array(t-1),n=1;n<t;n++)r[n-1]=e[n]
return r}function D(e,t){return{then:function(r,n){return e.call(t,r,n)}}}function I(e,t){var r=function(){for(var r=arguments.length,n=new Array(r+1),i=!1,o=0;o<r;++o){var a=arguments[o]
if(!i){if((i=F(a))===p){var s=p.error
p.error=null
var u=new x(l)
return w(u,s),u}i&&!0!==i&&(a=D(i,a))}n[o]=a}var c=new x(l)
return n[r]=function(e,r){e?w(c,e):void 0===t?y(c,r):!0===t?y(c,R(arguments)):Array.isArray(t)?y(c,N(arguments,t)):y(c,r)},i?M(c,n,e,this):k(c,n,e,this)}
return r.__proto__=e,r}function k(e,t,r,n){if(v(r).apply(n,t)===p){var i=p.error
p.error=null,w(e,i)}return e}function M(e,t,r,n){return x.all(t).then((function(t){return k(e,t,r,n)}))}function F(e){return null!==e&&"object"==typeof e&&(e.constructor===x||h(e))}function U(e,t){return x.all(e,t)}x.cast=c,x.all=function(e,t){return Array.isArray(e)?new P(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},x.race=function(e,t){var r=new this(l,t)
if(!Array.isArray(e))return w(r,new TypeError("Promise.race must be called with an array")),r
for(var n=0;r._state===f&&n<e.length;n++)_(this.resolve(e[n]),void 0,(function(e){return y(r,e)}),(function(e){return w(r,e)}))
return r},x.resolve=c,x.reject=function(e,t){var r=new this(l,t)
return w(r,e),r},x.prototype._guidKey=C,x.prototype.then=O
var j=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(P)
function G(e,t){return Array.isArray(e)?new j(x,e,t).promise:x.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function V(e,t){return x.race(e,t)}function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}j.prototype._setResultAt=S
var X=function(e){function t(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return B(this,e.call(this,t,r,n,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),r=t.length,n=this.promise
this._remaining=r
for(var i=void 0,o=void 0,a=0;n._state===f&&a<r;a++)o=e[i=t[a]],this._eachEntry(o,i,!0)
this._checkFullfillment()},t}(P)
function z(e,t){return x.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("Promise.hash must be called with an object")
return new X(x,e,t).promise}))}var W=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(X)
function H(e,t){return x.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("hashSettled must be called with an object")
return new W(x,e,!1,t).promise}))}function q(e){throw setTimeout((function(){throw e})),e}function Y(e){var t={resolve:void 0,reject:void 0}
return t.promise=new x((function(e,r){t.resolve=e,t.reject=r}),e),t}W.prototype._setResultAt=S
var Z=function(e){function t(t,r,n,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!0,i,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,r,n,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},t.prototype._setResultAt=function(e,t,r,n){if(n){var i=v(this._mapFn)(r,t)
i===p?this._settledAt(2,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,this._result[t]=r},t}(P)
function K(e,t,r){return"function"!=typeof t?x.reject(new TypeError("map expects a function as a second argument"),r):x.resolve(e,r).then((function(e){if(!Array.isArray(e))throw new TypeError("map must be called with an array")
return new Z(x,e,t,r).promise}))}function $(e,t){return x.resolve(e,t)}function Q(e,t){return x.reject(e,t)}function J(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ee={},te=function(e){function t(){return J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==ee}))
E(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,r,n){if(n){this._result[t]=r
var i=v(this._mapFn)(r,t)
i===p?this._settledAt(2,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,r||(this._result[t]=ee)},t}(Z)
function re(e,t,r){return"function"!=typeof t?x.reject(new TypeError("filter expects function as a second argument"),r):x.resolve(e,r).then((function(e){if(!Array.isArray(e))throw new TypeError("filter must be called with an array")
return new te(x,e,t,r).promise}))}var ne=0,ie=void 0
function oe(e,t){pe[ne]=e,pe[ne+1]=t,2===(ne+=2)&&Ee()}var ae="undefined"!=typeof window?window:void 0,se=ae||{},ue=se.MutationObserver||se.WebKitMutationObserver,ce="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),le="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function fe(){return function(){return setTimeout(he,1)}}var pe=new Array(1e3)
function he(){for(var e=0;e<ne;e+=2)(0,pe[e])(pe[e+1]),pe[e]=void 0,pe[e+1]=void 0
ne=0}var de,me,ve,ge,ye,be,Ee=void 0
ce?(ye=process.nextTick,be=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(be)&&"0"===be[1]&&"10"===be[2]&&(ye=setImmediate),Ee=function(){return ye(he)}):ue?(me=0,ve=new ue(he),ge=document.createTextNode(""),ve.observe(ge,{characterData:!0}),Ee=function(){return ge.data=me=++me%2}):le?((de=new MessageChannel).port1.onmessage=he,Ee=function(){return de.port2.postMessage(0)}):Ee=void 0===ae?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(ie=e.runOnLoop||e.runOnContext)?function(){ie(he)}:fe()}catch(e){return fe()}}():fe(),o.async=oe,o.after=function(e){return setTimeout(e,0)}
var we=$,_e=function(e,t){return o.async(e,t)}
function Ae(){o.on.apply(o,arguments)}function Te(){o.off.apply(o,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Oe=window.__PROMISE_INSTRUMENTATION__
for(var Pe in a("instrument",!0),Oe)Oe.hasOwnProperty(Pe)&&Ae(Pe,Oe[Pe])}const Se={asap:oe,cast:we,Promise:x,EventTarget:i,all:U,allSettled:G,race:V,hash:z,hashSettled:H,rethrow:q,defer:Y,denodeify:I,configure:a,on:Ae,off:Te,resolve:$,reject:Q,map:K,async:_e,filter:re}},480:(e,t,r)=>{"use strict"
r.d(t,{ZT:()=>i,ev:()=>a,pi:()=>o})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function a(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create}}])
