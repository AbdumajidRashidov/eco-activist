(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[86],{1321:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(3),o=a(37),r=a(24),n=a(414),i=a(206),s=a(1292),l=a(34),d=a(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,u=e.moreLink,h=void 0===u?[]:u,p=e.sx,O=Object(o.a)(e,b);return Object(d.jsxs)(n.a,{sx:Object(c.a)({mb:5},p),children:[Object(d.jsxs)(n.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(c.a)({links:t},O))]}),a&&Object(d.jsx)(n.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(n.a,{sx:{mt:2},children:Object(r.isString)(h)?Object(d.jsx)(s.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1326:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var c=a(3),o=a(206),r=a(1316),n=a(1331),i=a(414),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(o.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,o=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(n.a,{title:t}),Object(s.jsx)(i.a,{sx:Object(c.a)({p:3,minHeight:180},a),children:o})]})}},1331:function(e,t,a){"use strict";var c=a(7),o=a(6),r=a(2),n=a(1),i=(a(10),a(12)),s=a(167),l=a(206),d=a(13),b=a(8),j=a(141),u=a(168);function h(e){return Object(j.a)("MuiCardHeader",e)}var p=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(c.a)(a,"& .".concat(p.title),t.title),Object(c.a)(a,"& .".concat(p.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=n.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),c=a.action,n=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,p=a.disableTypography,y=void 0!==p&&p,k=a.subheader,w=a.subheaderTypographyProps,C=a.title,S=a.titleTypographyProps,P=Object(o.a)(a,m),R=Object(r.a)({},a,{component:u,disableTypography:y}),z=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(R),M=C;null==M||M.type===l.a||y||(M=Object(O.jsx)(l.a,Object(r.a)({variant:n?"body2":"h5",className:z.title,component:"span",display:"block"},S,{children:M})));var N=k;return null==N||N.type===l.a||y||(N=Object(O.jsx)(l.a,Object(r.a)({variant:n?"body2":"body1",className:z.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:N}))),Object(O.jsxs)(x,Object(r.a)({className:Object(i.default)(z.root,b),as:u,ref:t,styleProps:R},P,{children:[n&&Object(O.jsx)(f,{className:z.avatar,styleProps:R,children:n}),Object(O.jsxs)(v,{className:z.content,styleProps:R,children:[M,N]}),c&&Object(O.jsx)(g,{className:z.action,styleProps:R,children:c})]}))}));t.a=y},1367:function(e,t,a){"use strict";var c=a(7),o=a(6),r=a(2),n=a(1),i=(a(10),a(12)),s=a(167),l=a(65),d=a(16),b=a(253),j=a(13),u=a(8),h=a(141),p=a(168);function O(e){return Object(h.a)("MuiSwitch",e)}var m=Object(p.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),x=a(0),f=["className","color","edge","size","sx"],g=Object(u.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.styleProps;return Object(r.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(c.a)(t,"& .".concat(m.thumb),{width:16,height:16}),Object(c.a)(t,"& .".concat(m.switchBase),Object(c.a)({padding:4},"&.".concat(m.checked),{transform:"translateX(16px)"})),t))})),v=Object(u.a)(b.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.styleProps;return[t.switchBase,t.input,"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300],transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(c.a)(t,"&.".concat(m.checked),{transform:"translateX(20px)"}),Object(c.a)(t,"&.".concat(m.disabled),{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}),Object(c.a)(t,"&.".concat(m.checked," + .").concat(m.track),{opacity:.5}),Object(c.a)(t,"&.".concat(m.disabled," + .").concat(m.track),{opacity:"light"===a.palette.mode?.12:.2}),Object(c.a)(t,"& .".concat(m.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,o=e.styleProps;return Object(r.a)({"&:hover":{backgroundColor:Object(l.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},Object(c.a)(t,"&.".concat(m.checked),Object(c.a)({color:a.palette[o.color].main,"&:hover":{backgroundColor:Object(l.a)(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(m.disabled),{color:"light"===a.palette.mode?Object(l.i)(a.palette[o.color].main,.62):Object(l.b)(a.palette[o.color].main,.55)})),Object(c.a)(t,"&.".concat(m.checked," + .").concat(m.track),{backgroundColor:a.palette[o.color].main}),t))})),y=Object(u.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),k=Object(u.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),w=n.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiSwitch"}),c=a.className,n=a.color,l=void 0===n?"primary":n,b=a.edge,u=void 0!==b&&b,h=a.size,p=void 0===h?"medium":h,m=a.sx,w=Object(o.a)(a,f),C=Object(r.a)({},a,{color:l,edge:u,size:p}),S=function(e){var t=e.classes,a=e.edge,c=e.size,o=e.color,n=e.checked,i=e.disabled,l={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(c))],switchBase:["switchBase","color".concat(Object(d.a)(o)),n&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=Object(s.a)(l,O,t);return Object(r.a)({},t,b)}(C),P=Object(x.jsx)(k,{className:S.thumb,styleProps:C});return Object(x.jsxs)(g,{className:Object(i.default)(S.root,c),sx:m,styleProps:C,children:[Object(x.jsx)(v,Object(r.a)({type:"checkbox",icon:P,checkedIcon:P,ref:t,styleProps:C},w,{classes:Object(r.a)({},S,{root:S.switchBase})})),Object(x.jsx)(y,{className:S.track,styleProps:C})]})}));t.a=w},2603:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var c=a(8),o=a(414),r=a(1303),n=a(1198),i=a(1367),s=a(1314),l=a(1311),d=a(1213),b=a(45),j=a(416),u=a(1321),h=a(1326),p=a(0),O={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},m=Object(c.a)(j.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function x(){return Object(p.jsxs)(m,{title:"Components: Switches | Minimal-UI",children:[Object(p.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(r.a,{maxWidth:"lg",children:Object(p.jsx)(u.a,{heading:"Switches",links:[{name:"Components",href:b.c.components},{name:"Switches"}],moreLink:"https://next.material-ui.com/components/alert"})})}),Object(p.jsx)(r.a,{maxWidth:"lg",children:Object(p.jsxs)(n.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(p.jsxs)(n.a,{spacing:3,sx:{width:1},children:[Object(p.jsxs)(h.a,{title:"Basic",sx:O,children:[Object(p.jsx)(i.a,{defaultChecked:!0}),Object(p.jsx)(i.a,{}),Object(p.jsx)(i.a,{disabled:!0}),Object(p.jsx)(i.a,{disabled:!0,checked:!0}),Object(p.jsx)(i.a,{defaultChecked:!0,color:"default"})]}),Object(p.jsxs)(h.a,{title:"Sizes",sx:O,children:[Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{size:"small"}),label:"Small"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{}),label:"Normal"})]}),Object(p.jsx)(h.a,{title:"Placement",sx:O,children:Object(p.jsx)(l.a,{component:"fieldset",children:Object(p.jsxs)(d.a,{row:!0,children:[Object(p.jsx)(s.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(p.jsx)(i.a,{})}),Object(p.jsx)(s.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(p.jsx)(i.a,{})}),Object(p.jsx)(s.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(p.jsx)(i.a,{})}),Object(p.jsx)(s.a,{value:"end",label:"End",labelPlacement:"end",control:Object(p.jsx)(i.a,{})})]})})})]}),Object(p.jsx)(h.a,{title:"Adding Colors",children:Object(p.jsx)(l.a,{component:"fieldset",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"default"}),label:"Default"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0}),label:"Primary"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"info"}),label:"Info"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"success"}),label:"Success"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"warning"}),label:"Warning"}),Object(p.jsx)(s.a,{control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"error"}),label:"Error"}),Object(p.jsx)(s.a,{disabled:!0,control:Object(p.jsx)(i.a,{defaultChecked:!0,color:"error"}),label:"Disabled"}),Object(p.jsx)(s.a,{disabled:!0,control:Object(p.jsx)(i.a,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=86.6d675a65.chunk.js.map