(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[10],{1416:function(e,t,a){"use strict";t.a={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},2650:function(e,t,a){"use strict";var r=a(7),n=a(20),o=a(6),i=a(2),l=a(1),c=a(10),s=a.n(c),u=a(12),b=a(168),d=a(155),m=a(141);function v(e){return Object(m.a)("MuiSlider",e)}var p=Object(b.a)("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]),f=a(0);var h=function(e){var t=e.children,a=e.className,r=e.value,n=e.theme,o=function(e){var t=e.open;return{offset:Object(u.default)(t&&p.valueLabelOpen),circle:p.valueLabelCircle,label:p.valueLabelLabel}}(e);return l.cloneElement(t,{className:Object(u.default)(t.props.className)},Object(f.jsxs)(l.Fragment,{children:[t.props.children,Object(f.jsx)("span",{className:Object(u.default)(o.offset,a),theme:n,"aria-hidden":!0,children:Object(f.jsx)("span",{className:o.circle,children:Object(f.jsx)("span",{className:o.label,children:r})})})]}))},O=a(17),j=a(241),g=a(1205),y=a(1193),x=a(413),k=a(1194),L=a(237),w=a(1416),R=a(167),P=["aria-label","aria-labelledby","aria-valuetext","className","component","classes","defaultValue","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"];function S(e,t){return e-t}function z(e,t,a){return null==e?t:Math.min(Math.max(t,e),a)}function C(e,t){return e.reduce((function(e,a,r){var n=Math.abs(t-a);return null===e||n<e.distance||n===e.distance?{distance:n,index:r}:e}),null).index}function A(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var r=e.changedTouches[a];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function M(e,t,a){return 100*(e-t)/(a-t)}function N(e,t,a){var r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var r=e.toString().split(".")[1];return r?r.length:0}(t)))}function T(e){var t=e.values,a=e.source,r=e.newValue,n=e.index;if(a[n]===r)return a;var o=t.slice();return o[n]=r,o}function V(e){var t=e.sliderRef,a=e.activeIndex,r=e.setActive,n=Object(j.a)(t.current);t.current.contains(n.activeElement)&&Number(n.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[type="range"][data-index="'.concat(a,'"]')).focus(),r&&r(a)}var E,I={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},F=function(e){return e};function D(){if(void 0===E){var e=document.createElement("div");e.style.touchAction="none",document.body.appendChild(e),E="none"===window.getComputedStyle(e).touchAction,e.parentElement.removeChild(e)}return E}var Y=function(e){return e.children},X=l.forwardRef((function(e,t){var a=e["aria-label"],r=e["aria-labelledby"],c=e["aria-valuetext"],s=e.className,b=e.component,m=void 0===b?"span":b,p=e.classes,E=e.defaultValue,X=e.disableSwap,B=void 0!==X&&X,q=e.disabled,J=void 0!==q&&q,W=e.getAriaLabel,H=e.getAriaValueText,G=e.marks,K=void 0!==G&&G,Q=e.max,U=void 0===Q?100:Q,Z=e.min,$=void 0===Z?0:Z,_=e.name,ee=e.onChange,te=e.onChangeCommitted,ae=e.onMouseDown,re=e.orientation,ne=void 0===re?"horizontal":re,oe=e.scale,ie=void 0===oe?F:oe,le=e.step,ce=void 0===le?1:le,se=e.tabIndex,ue=e.track,be=void 0===ue?"normal":ue,de=e.value,me=e.valueLabelDisplay,ve=void 0===me?"off":me,pe=e.valueLabelFormat,fe=void 0===pe?F:pe,he=e.isRtl,Oe=void 0!==he&&he,je=e.components,ge=void 0===je?{}:je,ye=e.componentsProps,xe=void 0===ye?{}:ye,ke=Object(o.a)(e,P),Le=l.useRef(),we=l.useState(-1),Re=Object(O.a)(we,2),Pe=Re[0],Se=Re[1],ze=l.useState(-1),Ce=Object(O.a)(ze,2),Ae=Ce[0],Me=Ce[1],Ne=l.useState(!1),Te=Object(O.a)(Ne,2),Ve=Te[0],Ee=Te[1],Ie=l.useRef(0),Fe=Object(g.a)({controlled:de,default:null!=E?E:$,name:"Slider"}),De=Object(O.a)(Fe,2),Ye=De[0],Xe=De[1],Be=ee&&function(e,t,a){var r=e.nativeEvent||e,n=new r.constructor(r.type,r);Object.defineProperty(n,"target",{writable:!0,value:{value:t,name:_}}),ee(n,t,a)},qe=Array.isArray(Ye),Je=qe?Ye.slice().sort(S):[Ye];Je=Je.map((function(e){return z(e,$,U)}));var We=!0===K&&null!==ce?Object(n.a)(Array(Math.floor((U-$)/ce)+1)).map((function(e,t){return{value:$+ce*t}})):K||[],He=Object(y.a)(),Ge=He.isFocusVisibleRef,Ke=He.onBlur,Qe=He.onFocus,Ue=He.ref,Ze=l.useState(-1),$e=Object(O.a)(Ze,2),_e=$e[0],et=$e[1],tt=l.useRef(),at=Object(x.a)(Ue,tt),rt=Object(x.a)(t,at),nt=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Qe(e),!0===Ge.current&&et(t),Me(t)})),ot=Object(k.a)((function(e){Ke(e),!1===Ge.current&&et(-1),Me(-1)})),it=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Me(t)})),lt=Object(k.a)((function(){Me(-1)}));Object(L.a)((function(){J&&tt.current.contains(document.activeElement)&&document.activeElement.blur()}),[J]),J&&-1!==Pe&&Se(-1),J&&-1!==_e&&et(-1);var ct=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index")),a=Je[t],r=We.map((function(e){return e.value})),n=r.indexOf(a),o=e.target.valueAsNumber;if(We&&null==ce&&(o=o<a?r[n-1]:r[n+1]),o=z(o,$,U),We&&null==ce){var i=We.map((function(e){return e.value})),l=i.indexOf(Je[t]);o=o<Je[t]?i[l-1]:i[l+1]}if(qe){B&&(o=z(o,Je[t-1]||-1/0,Je[t+1]||1/0));var c=o;o=T({values:Je,source:Ye,newValue:o,index:t}).sort(S);var s=t;B||(s=o.indexOf(c)),V({sliderRef:tt,activeIndex:s})}Xe(o),et(t),Be&&Be(e,o,t),te&&te(e,o)})),st=l.useRef(),ut=ne;Oe&&"vertical"!==ne&&(ut+="-reverse");var bt=function(e){var t,a,r=e.finger,n=e.move,o=void 0!==n&&n,i=e.values,l=e.source,c=tt.current.getBoundingClientRect(),s=c.width,u=c.height,b=c.bottom,d=c.left;if(t=0===ut.indexOf("vertical")?(b-r.y)/u:(r.x-d)/s,-1!==ut.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,$,U),ce)a=N(a,ce,$);else{var m=We.map((function(e){return e.value}));a=m[C(m,a)]}a=z(a,$,U);var v=0;if(qe){v=o?st.current:C(i,a),B&&(a=z(a,i[v-1]||-1/0,i[v+1]||1/0));var p=a;a=T({values:i,source:l,newValue:a,index:v}).sort(S),B&&o||(v=a.indexOf(p),st.current=v)}return{newValue:a,activeIndex:v}},dt=Object(k.a)((function(e){var t=A(e,Le);if(t)if(Ie.current+=1,"mousemove"!==e.type||0!==e.buttons){var a=bt({finger:t,move:!0,values:Je,source:Ye}),r=a.newValue,n=a.activeIndex;V({sliderRef:tt,activeIndex:n,setActive:Se}),Xe(r),!Ve&&Ie.current>2&&Ee(!0),Be&&Be(e,r,n)}else mt(e)})),mt=Object(k.a)((function(e){var t=A(e,Le);if(Ee(!1),t){var a=bt({finger:t,values:Je,source:Ye}).newValue;Se(-1),"touchend"===e.type&&Me(-1),te&&te(e,a),Le.current=void 0,pt()}})),vt=Object(k.a)((function(e){D()||e.preventDefault();var t=e.changedTouches[0];null!=t&&(Le.current=t.identifier);var a=A(e,Le),r=bt({finger:a,values:Je,source:Ye}),n=r.newValue,o=r.activeIndex;V({sliderRef:tt,activeIndex:o,setActive:Se}),Xe(n),Be&&Be(e,n,o),Ie.current=0;var i=Object(j.a)(tt.current);i.addEventListener("touchmove",dt),i.addEventListener("touchend",mt)})),pt=l.useCallback((function(){var e=Object(j.a)(tt.current);e.removeEventListener("mousemove",dt),e.removeEventListener("mouseup",mt),e.removeEventListener("touchmove",dt),e.removeEventListener("touchend",mt)}),[mt,dt]);l.useEffect((function(){var e=tt.current;return e.addEventListener("touchstart",vt,{passive:D()}),function(){e.removeEventListener("touchstart",vt,{passive:D()}),pt()}}),[pt,vt]),l.useEffect((function(){J&&pt()}),[J,pt]);var ft=Object(k.a)((function(e){if(ae&&ae(e),0===e.button){e.preventDefault();var t=A(e,Le),a=bt({finger:t,values:Je,source:Ye}),r=a.newValue,n=a.activeIndex;V({sliderRef:tt,activeIndex:n,setActive:Se}),Xe(r),Be&&Be(e,r,n),Ie.current=0;var o=Object(j.a)(tt.current);o.addEventListener("mousemove",dt),o.addEventListener("mouseup",mt)}})),ht=M(qe?Je[0]:$,$,U),Ot=M(Je[Je.length-1],$,U)-ht,jt=Object(i.a)({},I[ut].offset(ht),I[ut].leap(Ot)),gt=ge.Root||m,yt=xe.root||{},xt=ge.Rail||"span",kt=xe.rail||{},Lt=ge.Track||"span",wt=xe.track||{},Rt=ge.Thumb||"span",Pt=xe.thumb||{},St=ge.ValueLabel||h,zt=xe.valueLabel||{},Ct=ge.Mark||"span",At=xe.mark||{},Mt=ge.MarkLabel||"span",Nt=xe.markLabel||{},Tt=Object(i.a)({},e,{classes:p,disabled:J,dragging:Ve,isRtl:Oe,marked:We.length>0&&We.some((function(e){return e.label})),max:U,min:$,orientation:ne,scale:ie,step:ce,track:be,valueLabelDisplay:ve,valueLabelFormat:fe}),Vt=function(e){var t=e.disabled,a=e.dragging,r=e.marked,n=e.orientation,o=e.track,i=e.classes,l={root:["root",t&&"disabled",a&&"dragging",r&&"marked","vertical"===n&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Object(R.a)(l,v,i)}(Tt);return Object(f.jsxs)(gt,Object(i.a)({ref:rt,onMouseDown:ft},yt,!Object(d.a)(gt)&&{as:m,styleProps:Object(i.a)({},Tt,yt.styleProps)},ke,{className:Object(u.default)(Vt.root,yt.className,s),children:[Object(f.jsx)(xt,Object(i.a)({},kt,!Object(d.a)(xt)&&{styleProps:Object(i.a)({},Tt,kt.styleProps)},{className:Object(u.default)(Vt.rail,kt.className)})),Object(f.jsx)(Lt,Object(i.a)({},wt,!Object(d.a)(Lt)&&{styleProps:Object(i.a)({},Tt,wt.styleProps)},{className:Object(u.default)(Vt.track,wt.className),style:Object(i.a)({},jt,wt.style)})),We.map((function(e,t){var a,r=M(e.value,$,U),n=I[ut].offset(r);return a=!1===be?-1!==Je.indexOf(e.value):"normal"===be&&(qe?e.value>=Je[0]&&e.value<=Je[Je.length-1]:e.value<=Je[0])||"inverted"===be&&(qe?e.value<=Je[0]||e.value>=Je[Je.length-1]:e.value>=Je[0]),Object(f.jsxs)(l.Fragment,{children:[Object(f.jsx)(Ct,Object(i.a)({"data-index":t},At,!Object(d.a)(Ct)&&{styleProps:Object(i.a)({},Tt,At.styleProps,{markActive:a})},{style:Object(i.a)({},n,At.style),className:Object(u.default)(Vt.mark,At.className,a&&Vt.markActive)})),null!=e.label?Object(f.jsx)(Mt,Object(i.a)({"aria-hidden":!0,"data-index":t},Nt,!Object(d.a)(Mt)&&{styleProps:Object(i.a)({},Tt,Nt.styleProps,{markLabelActive:a})},{style:Object(i.a)({},n,Nt.style),className:Object(u.default)(Vt.markLabel,Nt.className,a&&Vt.markLabelActive),children:e.label})):null]},e.value)})),Je.map((function(t,n){var o=M(t,$,U),s=I[ut].offset(o),b="off"===ve?Y:St;return Object(f.jsx)(l.Fragment,{children:Object(f.jsx)(b,Object(i.a)({valueLabelFormat:fe,valueLabelDisplay:ve,value:"function"===typeof fe?fe(ie(t),n):fe,index:n,open:Ae===n||Pe===n||"on"===ve,disabled:J},zt,{className:Object(u.default)(Vt.valueLabel,zt.className)},!Object(d.a)(St)&&{styleProps:Object(i.a)({},Tt,zt.styleProps)},{children:Object(f.jsx)(Rt,Object(i.a)({"data-index":n,onMouseOver:it,onMouseLeave:lt},Pt,{className:Object(u.default)(Vt.thumb,Pt.className,Pe===n&&Vt.active,_e===n&&Vt.focusVisible)},!Object(d.a)(Rt)&&{styleProps:Object(i.a)({},Tt,Pt.styleProps)},{style:Object(i.a)({},s,{pointerEvents:B&&Pe!==n?"none":void 0},Pt.style),children:Object(f.jsx)("input",{tabIndex:se,"data-index":n,"aria-label":W?W(n):a,"aria-labelledby":r,"aria-orientation":ne,"aria-valuemax":ie(U),"aria-valuemin":ie($),"aria-valuenow":ie(t),"aria-valuetext":H?H(ie(t),n):c,onFocus:nt,onBlur:ot,name:_,type:"range",min:e.min,max:e.max,step:e.step,disabled:J,value:Je[n],onChange:ct,style:Object(i.a)({},w.a,{direction:Oe?"rtl":"ltr",width:"100%",height:"100%"})})}))}))},n)}))]}))})),B=a(65),q=a(13),J=a(8),W=a(52),H=a(16),G=["components","componentsProps","color","size"],K=Object(i.a)({},p,Object(b.a)("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),Q=Object(J.a)("span",{name:"MuiSlider",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps,r=!0===a.marksProp&&null!==a.step?Object(n.a)(Array(Math.floor((a.max-a.min)/a.step)+1)).map((function(e,t){return{value:a.min+a.step*t}})):a.marksProp||[],o=r.length>0&&r.some((function(e){return e.label}));return[t.root,t["color".concat(Object(H.a)(a.color))],"medium"!==a.size&&t["size".concat(Object(H.a)(a.size))],o&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse]}})((function(e){var t,a=e.theme,n=e.styleProps;return Object(i.a)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:a.palette[n.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===n.orientation&&Object(i.a)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===n.size&&{height:2},n.marked&&{marginBottom:20}),"vertical"===n.orientation&&Object(i.a)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===n.size&&{width:2},n.marked&&{marginRight:44}),(t={"@media print":{colorAdjust:"exact"}},Object(r.a)(t,"&.".concat(K.disabled),{pointerEvents:"none",cursor:"default",color:a.palette.grey[400]}),Object(r.a)(t,"&.".concat(K.dragging),Object(r.a)({},"& .".concat(K.thumb,", & .").concat(K.track),{transition:"none"})),t))})),U=Object(J.a)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:function(e,t){return t.rail}})((function(e){var t=e.styleProps;return Object(i.a)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===t.track&&{opacity:1})})),Z=Object(J.a)("span",{name:"MuiSlider",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme,a=e.styleProps,r="light"===t.palette.mode?Object(B.i)(t.palette[a.color].main,.62):Object(B.b)(t.palette[a.color].main,.5);return Object(i.a)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{border:"none"},"horizontal"===a.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===a.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===a.track&&{display:"none"},"inverted"===a.track&&{backgroundColor:r,borderColor:r})})),$=Object(J.a)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:function(e,t){var a=e.styleProps;return[t.thumb,t["thumbColor".concat(Object(H.a)(a.color))],"medium"!==a.size&&t["thumbSize".concat(Object(H.a)(a.size))]]}})((function(e){var t,a=e.theme,n=e.styleProps;return Object(i.a)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:a.transitions.create(["box-shadow","left","bottom"],{duration:a.transitions.duration.shortest})},"small"===n.size&&{width:12,height:12},"horizontal"===n.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===n.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},(t={"&:before":Object(i.a)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:a.shadows[2]},"small"===n.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},Object(r.a)(t,"&:hover, &.".concat(K.focusVisible),{boxShadow:"0px 0px 0px 8px ".concat(Object(B.a)(a.palette[n.color].main,.16)),"@media (hover: none)":{boxShadow:"none"}}),Object(r.a)(t,"&.".concat(K.active),{boxShadow:"0px 0px 0px 14px ".concat(Object(B.a)(a.palette[n.color].main,.16))}),Object(r.a)(t,"&.".concat(K.disabled),{"&:hover":{boxShadow:"none"}}),t))})),_=Object(J.a)(h,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:function(e,t){return t.valueLabel}})((function(e){var t,a=e.theme,n=e.styleProps;return Object(i.a)((t={},Object(r.a)(t,"&.".concat(K.valueLabelOpen),{transform:"translateY(-100%) scale(1)"}),Object(r.a)(t,"zIndex",1),Object(r.a)(t,"whiteSpace","nowrap"),t),a.typography.body2,{fontWeight:500,transition:a.transitions.create(["transform"],{duration:a.transitions.duration.shortest}),top:-10,transformOrigin:"bottom center",transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:a.palette.grey[600],borderRadius:2,color:a.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"small"===n.size&&{fontSize:a.typography.pxToRem(12),padding:"0.25rem 0.5rem"},{"&:before":{position:"absolute",content:'""',width:8,height:8,bottom:0,left:"50%",transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit"}})})),ee=Object(J.a)("span",{name:"MuiSlider",slot:"Mark",overridesResolver:function(e,t){return t.mark}})((function(e){var t=e.theme,a=e.styleProps;return Object(i.a)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},a.markActive&&{backgroundColor:t.palette.background.paper,opacity:.8})})),te=Object(J.a)("span",{name:"MuiSlider",slot:"MarkLabel",overridesResolver:function(e,t){return t.markLabel}})((function(e){var t=e.theme,a=e.styleProps;return Object(i.a)({},t.typography.body2,{color:t.palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===a.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===a.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},a.markLabelActive&&{color:t.palette.text.primary})}));Q.propTypes={children:s.a.node,styleProps:s.a.shape({"aria-label":s.a.string,"aria-labelledby":s.a.string,"aria-valuetext":s.a.string,classes:s.a.object,color:s.a.oneOf(["primary","secondary"]),defaultValue:s.a.oneOfType([s.a.arrayOf(s.a.number),s.a.number]),disabled:s.a.bool,getAriaLabel:s.a.func,getAriaValueText:s.a.func,isRtl:s.a.bool,marks:s.a.oneOfType([s.a.arrayOf(s.a.shape({label:s.a.node,value:s.a.number.isRequired})),s.a.bool]),max:s.a.number,min:s.a.number,name:s.a.string,onChange:s.a.func,onChangeCommitted:s.a.func,orientation:s.a.oneOf(["horizontal","vertical"]),scale:s.a.func,step:s.a.number,track:s.a.oneOf(["inverted","normal",!1]),value:s.a.oneOfType([s.a.arrayOf(s.a.number),s.a.number]),valueLabelDisplay:s.a.oneOf(["auto","off","on"]),valueLabelFormat:s.a.oneOfType([s.a.func,s.a.string])})};var ae=function(e){return!e||!Object(d.a)(e)},re=l.forwardRef((function(e,t){var a,r,n,l,c=Object(q.a)({props:e,name:"MuiSlider"}),s="rtl"===Object(W.a)().direction,b=c.components,d=void 0===b?{}:b,m=c.componentsProps,p=void 0===m?{}:m,h=c.color,O=void 0===h?"primary":h,j=c.size,g=void 0===j?"medium":j,y=Object(o.a)(c,G),x=function(e){var t=e.color,a=e.size,r=e.classes,n=void 0===r?{}:r;return Object(i.a)({},n,{root:Object(u.default)(n.root,v("color".concat(Object(H.a)(t))),n["color".concat(Object(H.a)(t))],a&&[v("size".concat(Object(H.a)(a))),n["size".concat(Object(H.a)(a))]]),thumb:Object(u.default)(n.thumb,v("thumbColor".concat(Object(H.a)(t))),n["thumbColor".concat(Object(H.a)(t))],a&&[v("thumbSize".concat(Object(H.a)(a))),n["thumbSize".concat(Object(H.a)(a))]])})}(Object(i.a)({},c,{color:O,size:g}));return Object(f.jsx)(X,Object(i.a)({},y,{isRtl:s,components:Object(i.a)({Root:Q,Rail:U,Track:Z,Thumb:$,ValueLabel:_,Mark:ee,MarkLabel:te},d),componentsProps:Object(i.a)({},p,{root:Object(i.a)({},p.root,ae(d.Root)&&{styleProps:Object(i.a)({},null==(a=p.root)?void 0:a.styleProps,{color:O,size:g})}),thumb:Object(i.a)({},p.thumb,ae(d.Thumb)&&{styleProps:Object(i.a)({},null==(r=p.thumb)?void 0:r.styleProps,{color:O,size:g})}),track:Object(i.a)({},p.track,ae(d.Track)&&{styleProps:Object(i.a)({},null==(n=p.track)?void 0:n.styleProps,{color:O,size:g})}),valueLabel:Object(i.a)({},p.valueLabel,ae(d.ValueLabel)&&{styleProps:Object(i.a)({},null==(l=p.valueLabel)?void 0:l.styleProps,{color:O,size:g})})}),classes:x,ref:t}))}));t.a=re}}]);
//# sourceMappingURL=10.b1d5220b.chunk.js.map