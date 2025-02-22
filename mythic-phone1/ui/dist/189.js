"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[189],{20111:(t,e,a)=>{a.d(e,{A:()=>C});var o=a(86887),r=a(64180),n=a(55429),i=a(34164),s=a(96121),l=a(7413),c=a(23805),m=a(29115),p=a(10016),d=a(52679),g=a(33899);function u(t){return(0,g.Ay)("MuiTypography",t)}(0,d.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(64922);const A=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,a.variant&&e[a.variant],"inherit"!==a.align&&e[`align${(0,p.A)(a.align)}`],a.noWrap&&e.noWrap,a.gutterBottom&&e.gutterBottom,a.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,r.A)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=n.forwardRef((function(t,e){const a=(0,m.b)({props:t,name:"MuiTypography"}),n=(t=>f[t]||t)(a.color),c=(0,s.A)((0,r.A)({},a,{color:n})),{align:d="inherit",className:g,component:C,gutterBottom:M=!1,noWrap:b=!1,paragraph:w=!1,variant:N="body1",variantMapping:B=y}=c,x=(0,o.A)(c,A),R=(0,r.A)({},c,{align:d,color:n,className:g,component:C,gutterBottom:M,noWrap:b,paragraph:w,variant:N,variantMapping:B}),k=C||(w?"p":B[N]||y[N])||"span",S=(t=>{const{align:e,gutterBottom:a,noWrap:o,paragraph:r,variant:n,classes:i}=t,s={root:["root",n,"inherit"!==t.align&&`align${(0,p.A)(e)}`,a&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,l.A)(s,u,i)})(R);return(0,h.jsx)(v,(0,r.A)({as:k,ref:e,ownerState:R,className:(0,i.A)(S.root,g)},x))}))},20189:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});var o=a(55429),r=a(64180),n=a(86887),i=a(34164),s=a(7413),l=a(23805),c=a(29115),m=a(31699),p=a(52679),d=a(33899);function g(t){return(0,d.Ay)("MuiCard",t)}(0,p.A)("MuiCard",["root"]);var u=a(64922);const h=["className","raised"],A=(0,l.Ay)(m.A,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({overflow:"hidden"}))),v=o.forwardRef((function(t,e){const a=(0,c.b)({props:t,name:"MuiCard"}),{className:o,raised:l=!1}=a,m=(0,n.A)(a,h),p=(0,r.A)({},a,{raised:l}),d=(t=>{const{classes:e}=t;return(0,s.A)({root:["root"]},g,e)})(p);return(0,u.jsx)(A,(0,r.A)({className:(0,i.A)(d.root,o),elevation:l?8:void 0,ref:e,ownerState:p},m))}));function y(t){return(0,d.Ay)("MuiCardMedia",t)}(0,p.A)("MuiCardMedia",["root","media","img"]);const f=["children","className","component","image","src","style"],C=(0,l.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t,{isMediaComponent:o,isImageComponent:r}=a;return[e.root,o&&e.media,r&&e.img]}})((({ownerState:t})=>(0,r.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"}))),M=["video","audio","picture","iframe","img"],b=["picture","img"],w=o.forwardRef((function(t,e){const a=(0,c.b)({props:t,name:"MuiCardMedia"}),{children:o,className:l,component:m="div",image:p,src:d,style:g}=a,h=(0,n.A)(a,f),A=-1!==M.indexOf(m),v=!A&&p?(0,r.A)({backgroundImage:`url("${p}")`},g):g,w=(0,r.A)({},a,{component:m,isMediaComponent:A,isImageComponent:-1!==b.indexOf(m)}),N=(t=>{const{classes:e,isMediaComponent:a,isImageComponent:o}=t,r={root:["root",a&&"media",o&&"img"]};return(0,s.A)(r,y,e)})(w);return(0,u.jsx)(C,(0,r.A)({className:(0,i.A)(N.root,l),as:m,role:!A&&p?"img":void 0,ref:e,style:v,ownerState:w,src:A?p||d:void 0},h,{children:o}))}));function N(t){return(0,d.Ay)("MuiCardContent",t)}(0,p.A)("MuiCardContent",["root"]);const B=["className","component"],x=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),R=o.forwardRef((function(t,e){const a=(0,c.b)({props:t,name:"MuiCardContent"}),{className:o,component:l="div"}=a,m=(0,n.A)(a,B),p=(0,r.A)({},a,{component:l}),d=(t=>{const{classes:e}=t;return(0,s.A)({root:["root"]},N,e)})(p);return(0,u.jsx)(x,(0,r.A)({as:l,className:(0,i.A)(d.root,o),ownerState:p,ref:e},m))}));var k=a(20111),S=a(60350),E=a(20500),W=a(51959),I=a(59530),j=a(31632),T=a(57756),O=(0,W.A)((function(t){return{card:{maxWidth:345,margin:t.spacing(2)},media:{height:140},button:{marginTop:t.spacing(1)},installBtn:{backgroundColor:j.A[500],color:"white"},uninstallBtn:{backgroundColor:T.A[500],color:"white"},progress:{margin:t.spacing(2)}}}));const $=function(t){var e=t.title,a=t.image,r=t.onInstall,n=t.onUninstall,i=t.installing,s=t.uninstalling,l=O();return o.createElement(v,{className:l.card},o.createElement(w,{className:l.media,image:a,title:e}),o.createElement(R,null,o.createElement(k.A,{variant:"h5",component:"h2"},e),i||s?o.createElement(S.A,{className:l.progress}):o.createElement("div",null,o.createElement(E.A,{className:l.installBtn,onClick:r},o.createElement(I.g,{icon:["fas","download"]})),o.createElement(E.A,{className:l.uninstallBtn,onClick:n},o.createElement(I.g,{icon:["fas","x"]})))))}}}]);