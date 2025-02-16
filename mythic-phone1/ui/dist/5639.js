"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5639,8137],{65639:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(73925),r=a(55429),o=a(15647),i=a(64965),s=a(33268),l=a(18137),c=a(26573),p=a(79111),m=a(44686),d=a(74552),u=a(62258),h=a.n(u),g=a(23470),v=a(59530),b=(0,d.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},newNumber:{marginTop:"1%",height:"9%",padding:"0 25px"},searchField:{width:"100%"},contactsList:{"&::before":{content:'"OR"',display:"block",position:"absolute",left:0,right:0,margin:"auto",width:"fit-content",top:"17.75%",background:e.palette.secondary.main},borderTop:"1px solid ".concat(e.palette.primary.main),height:"90%",padding:"15px 25px",overflow:"hidden"},contactWrapper:{width:"100%",padding:"20px 12px",background:e.palette.secondary.dark,border:"1px solid rgba(0, 0, 0, .25)","&:not(:last-child)":{borderBottom:"none"},"&:hover":{filter:"brightness(0.75)",transition:"filter ease-in 0.15s",cursor:"pointer"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},noContacts:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",color:e.palette.error.main},contactsFilter:{height:"11%",overflow:"hidden"},contactsBody:{height:"89%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const f=function(e){var t=(0,g.MW)(),a=(0,i.W6)(),d=(0,o.d4)((function(e){return e.data.data.contacts})),u=b(),f=(0,r.useState)(d),A=(0,n.A)(f,2),y=A[0],E=A[1],w=(0,r.useState)(""),N=(0,n.A)(w,2),x=N[0],k=N[1],S=(0,r.useState)(""),C=(0,n.A)(S,2),L=C[0],W=C[1];(0,r.useEffect)((function(){E(d.filter((function(e){return e.name.toUpperCase().includes(L.toUpperCase())})))}),[L]);var B=function(e){a.push("/apps/messages/convo/".concat(e.number))},P=function(){null!=/([0-9]){3}\-([0-9]){3}\-([0-9]){4}/gm.exec(x)?a.push("/apps/messages/convo/".concat(x)):t("Not A Valid Number")};return r.createElement("div",{className:u.wrapper},r.createElement("div",{className:u.newNumber},r.createElement(h(),{mask:"999-999-9999",value:x,onChange:function(e){k(e.target.value)}},(function(){return r.createElement(s.A,{className:u.searchField,label:"Enter Number",name:"number",type:"text",variant:"outlined",InputProps:{endAdornment:r.createElement(l.A,{position:"end"},r.createElement(c.A,{"aria-label":"toggle password visibility",onClick:P},r.createElement(v.g,{icon:["fas","paper-plane-top"]})))},InputLabelProps:{style:{fontSize:16}}})}))),r.createElement("div",{className:u.contactsList},d.length>0?r.createElement("div",{style:{height:"100%"}},r.createElement("div",{className:u.contactsFilter},r.createElement(s.A,{className:u.searchField,label:"Search Contacts",name:"number",type:"text",variant:"outlined",value:L,onChange:function(e){W(e.target.value)},style:{marginTop:5},InputLabelProps:{style:{fontSize:16}}})),r.createElement("div",{className:u.contactsBody},y.filter((function(e){return e.favorite})).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})).map((function(e){return r.createElement(p.Ay,{container:!0,key:e._id,className:u.contactWrapper,onClick:function(){return B(e)}},r.createElement(p.Ay,{item:!0,xs:2},null!=e.avatar&&""!==e.avatar?r.createElement(m.A,{className:u.avatarFav,src:e.avatar,alt:e.name.charAt(0)}):r.createElement(m.A,{className:u.avatarFav,style:{background:e.color}},e.name.charAt(0))),r.createElement(p.Ay,{item:!0,xs:10},r.createElement("div",{className:u.contactData},r.createElement("div",{className:u.name},e.name),r.createElement("div",{className:u.number},e.number))))})),y.filter((function(e){return!e.favorite})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})).map((function(e){return r.createElement(p.Ay,{container:!0,key:e._id,className:u.contactWrapper,onClick:function(){return B(e)}},r.createElement(p.Ay,{item:!0,xs:2},null!=e.avatar&&""!==e.avatar?r.createElement(m.A,{className:u.avatar,src:e.avatar,alt:e.name.charAt(0)}):r.createElement(m.A,{className:u.avatar,style:{background:e.color}},e.name.charAt(0))),r.createElement(p.Ay,{item:!0,xs:10},r.createElement("div",{className:u.contactData},r.createElement("div",{className:u.name},e.name),r.createElement("div",{className:u.number},e.number))))})))):r.createElement("div",{className:u.noContacts},"You Have No Contacts")))}},18137:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(86887),r=a(64180),o=a(55429),i=a(1551),s=a(50035),l=a(69921),c=a(40178),p=a(36187),m=a(93283),d=a(93119),u=a(35457);function h(e){return(0,u.A)("MuiInputAdornment",e)}const g=(0,a(40725).A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v=a(88594),b=a(64922);const f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],A=(0,d.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`position${(0,l.A)(a.position)}`],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]}})((({theme:e,ownerState:t})=>(0,r.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},"filled"===t.variant&&{[`&.${g.positionStart}&:not(.${g.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"}))),y=o.forwardRef((function(e,t){const a=(0,v.A)({props:e,name:"MuiInputAdornment"}),{children:d,className:u,component:g="div",disablePointerEvents:y=!1,disableTypography:E=!1,position:w,variant:N}=a,x=(0,n.A)(a,f),k=(0,m.A)()||{};let S=N;N&&k.variant,k&&!S&&(S=k.variant);const C=(0,r.A)({},a,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:y,position:w,variant:S}),L=(e=>{const{classes:t,disablePointerEvents:a,hiddenLabel:n,position:r,size:o,variant:i}=e,c={root:["root",a&&"disablePointerEvents",r&&`position${(0,l.A)(r)}`,i,n&&"hiddenLabel",o&&`size${(0,l.A)(o)}`]};return(0,s.A)(c,h,t)})(C);return(0,b.jsx)(p.A.Provider,{value:null,children:(0,b.jsx)(A,(0,r.A)({as:g,ownerState:C,className:(0,i.A)(L.root,u),ref:t},x,{children:"string"!=typeof d||E?(0,b.jsxs)(o.Fragment,{children:["start"===w?(0,b.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,d]}):(0,b.jsx)(c.A,{color:"text.secondary",children:d})}))})}))},40178:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(86887),r=a(64180),o=a(55429),i=a(1551),s=a(18862),l=a(50035),c=a(93119),p=a(88594),m=a(69921),d=a(35457);function u(e){return(0,d.A)("MuiTypography",e)}(0,a(40725).A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(64922);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,m.A)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.A)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=o.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTypography"}),o=(e=>f[e]||e)(a.color),c=(0,s.A)((0,r.A)({},a,{color:o})),{align:d="inherit",className:A,component:y,gutterBottom:E=!1,noWrap:w=!1,paragraph:N=!1,variant:x="body1",variantMapping:k=b}=c,S=(0,n.A)(c,g),C=(0,r.A)({},c,{align:d,color:o,className:A,component:y,gutterBottom:E,noWrap:w,paragraph:N,variant:x,variantMapping:k}),L=y||(N?"p":k[x]||b[x])||"span",W=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:r,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,m.A)(t)}`,a&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,l.A)(s,u,i)})(C);return(0,h.jsx)(v,(0,r.A)({as:L,ref:t,ownerState:C,className:(0,i.A)(W.root,A)},S))}))}}]);