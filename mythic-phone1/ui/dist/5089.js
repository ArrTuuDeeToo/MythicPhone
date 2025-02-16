"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[304,808,3953,5089,5253],{33953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(73925),r=n(68175),a=n(55429),i=(n(15647),n(74552)),l=n(48147),c=n(44557),s=n(85220),d=(n(59530),n(90304)),p=n(87591),u=(n(51698),(0,i.A)((function(e){return(0,r.A)({wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"auto"},header:{background:"#696969",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"},body:{padding:10}},"emptyMsg",{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"})})));const m=function(e){var t=e.chopList,n=u(),r=(0,a.useState)(null),i=(0,o.A)(r,2),m=i[0],h=i[1];return a.createElement("div",{className:n.wrapper},a.createElement(l.A,{className:n.body},Object.keys(t).map((function(e){var n;return a.createElement(c.Ay,{key:"choplist-".concat(e),button:!0,divider:!0,onClick:function(){return h(e)}},a.createElement(s.A,{primary:Boolean(null===(n=t[e])||void 0===n?void 0:n.id)?e:"".concat(e," Chop List"),secondary:a.createElement(a.Fragment,null,Boolean(t[e].public)?a.createElement("span",null,"Shared Chop List -"," ",t[e].list.length," ","Remaining",t[e].list.length>1?" Vehicles":" Vehicle"):Boolean(t[e].id)?a.createElement("span",null,"Personal Chop List -"," ",t[e].list.length," ","Remaining",t[e].list.length>1?" Vehicles":" Vehicle"):null)}))}))),Boolean(m)&&a.createElement(p.aF,{open:Boolean(m),title:"".concat(m," Chop List"),closeLang:"Close",maxWidth:"xs",onClose:function(){return h(null)}},t[m].list.sort((function(e,t){return t.hv-e.hv})).map((function(e,t){return a.createElement(d.default,{key:"chopitem-".concat(t),chopRequest:e})}))))}},25253:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(55429),r=(n(15647),n(74552)),a=(n(59530),n(87591)),i=n(50808),l=(0,r.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const c=function(e){var t=e.myReputations,n=e.loading,r=(e.onRefresh,l());return o.createElement("div",{className:r.wrapper},o.createElement("div",{className:r.body},Boolean(t)?t.length>0?t.map((function(e){return o.createElement(i.default,{key:"lsu-".concat(e.id),rep:e,disabled:n})})):o.createElement("div",{className:r.emptyMsg},"No Reputation Built"):o.createElement(a.aH,{static:!0,text:"Loading"})))}},90304:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(55429),r=(n(15647),n(28744)),a=n(79111),i=n(74552),l=n(59530),c=(n(61541),n(23470),(0,i.A)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold","& svg":{marginRight:6,color:"gold"}}}})));const s=function(e){var t=e.chopRequest,n=c();return o.createElement(r.A,{className:n.wrapper},o.createElement(a.Ay,{container:!0},o.createElement(a.Ay,{item:!0,xs:12,style:{position:"relative",height:38}},o.createElement("div",{className:n.details},o.createElement("div",{className:n.title},t.hv&&o.createElement(l.g,{icon:["fas","triangle-exclamation"]}),t.name)))))}},50808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(55429),r=n(15647),a=n(28744),i=n(79111),l=n(69484),c=n(74552),s=(n(59530),n(61541),n(23470)),d=(0,c.A)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold",textAlign:"center"},progressLabel:{fontSize:16,textAlign:"center"},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},progressContainer:{padding:10}}}));const p=function(e){var t,n,c,p,u=e.rep,m=(e.myGroup,e.disabled,d());(0,r.wA)(),(0,s.MW)();return o.createElement(a.A,{className:m.wrapper},o.createElement(i.Ay,{container:!0},o.createElement(i.Ay,{item:!0,xs:12,style:{position:"relative",height:38}},o.createElement("div",{className:m.details},o.createElement("div",{className:m.title},u.label)))),o.createElement(i.Ay,{container:!0},o.createElement(i.Ay,{item:!0,xs:2,style:{position:"relative"}},o.createElement("div",{className:m.progressLabel},null!==(t=null===(n=u.current)||void 0===n?void 0:n.label)&&void 0!==t?t:"No Rank")),o.createElement(i.Ay,{item:!0,xs:8,style:{position:"relative"}},o.createElement("div",{className:m.progressContainer},o.createElement(l.A,{variant:"determinate",value:function(){var e,t,n,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,a=null!==(e=null==u||null===(t=u.current)||void 0===t?void 0:t.value)&&void 0!==e?e:0;return 100*(r-a)/((null!==(n=null==u||null===(o=u.next)||void 0===o?void 0:o.value)&&void 0!==n?n:1e3)-a)}(u.value)}))),o.createElement(i.Ay,{item:!0,xs:2,style:{position:"relative"}},o.createElement("div",{className:m.progressLabel},null!==(c=null===(p=u.next)||void 0===p?void 0:p.label)&&void 0!==c?c:"Unknown"))))}},75089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(28407),r=n(73925),a=n(70232),i=n.n(a),l=n(55429),c=n(15647),s=n(74552),d=n(66567),p=n(64965),u=n(55834),m=n(59757),h=n(142),g=n(79111),f=n(32764),b=n(26573),v=n(59530),A=n(84529),y=n(33953),E=n(25253),x=n(23470),k=n(61541),w=(0,s.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#E95200",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"}}})),N=(0,d.A)((function(e){return{root:{borderBottom:"1px solid #E95200"},indicator:{backgroundColor:"#E95200"}}}))((function(e){return l.createElement(u.A,e)})),S=(0,d.A)((function(e){return{root:{width:"50%","&:hover":{color:"#E95200",transition:"color ease-in 0.15s"},"&$selected":{color:"#E95200",transition:"color ease-in 0.15s"},"&:focus":{color:"#E95200",transition:"color ease-in 0.15s"}},selected:{},disabled:{color:"#333333 !important",transition:"color ease-in 0.15s"}}}))((function(e){return l.createElement(m.A,e)}));const C=function(e){var t=w(),n=((0,c.wA)(),(0,p.W6)(),(0,x.BR)(),(0,l.useState)(!1)),a=(0,r.A)(n,2),s=a[0],d=a[1],u=(0,l.useState)(0),m=(0,r.A)(u,2),C=m[0],z=m[1],B=(0,l.useState)(Array()),R=(0,r.A)(B,2),L=R[0],M=R[1],W=(0,l.useState)(Array()),I=(0,r.A)(W,2),D=I[0],T=I[1],P=(0,l.useMemo)((function(){return(0,A.throttle)((0,o.A)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,e.next=6,k.A.send("GetLSUDetails");case 6:return e.next=8,e.sent.json();case 8:(t=e.sent)?(M(t.chopList),T(t.reputations)):(M(Array()),T(Array())),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),M(Array()),T(Array());case 17:d(!1);case 18:case"end":return e.stop()}}),e,null,[[3,12]])}))),1e3)}),[]);(0,l.useEffect)((function(){P()}),[]);return l.createElement("div",{className:t.wrapper},l.createElement(h.A,{position:"static",className:t.header},l.createElement(g.Ay,{container:!0},l.createElement(g.Ay,{item:!0,xs:7,style:{lineHeight:"50px"}},"LS Underground"),l.createElement(g.Ay,{item:!0,xs:5,style:{textAlign:"right"}},l.createElement(f.A,{title:"Refresh"},l.createElement("span",null,l.createElement(b.A,{className:t.headerAction,onClick:P},l.createElement(v.g,{className:"fa ".concat(s?"fa-spin":""),icon:["fas","arrows-rotate"]}))))))),l.createElement("div",{className:t.content},l.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==C,id:"latest"},0===C&&l.createElement(y.default,{chopList:L})),l.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==C,id:"categories"},1===C&&l.createElement(E.default,{myReputations:D}))),l.createElement("div",{className:t.tabs},l.createElement(N,{value:C,onChange:function(e,t){z(t)},scrollButtons:!1,centered:!0},l.createElement(S,{icon:l.createElement(v.g,{icon:["fas","screwdriver-wrench"]})}),l.createElement(S,{icon:l.createElement(v.g,{icon:["fas","list"]})}))))}},142:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(86887),r=n(64180),a=n(55429),i=n(1551),l=n(50035),c=n(93119),s=n(88594),d=n(69921),p=n(28744),u=n(35457);function m(e){return(0,u.A)("MuiAppBar",e)}(0,n(40725).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var h=n(64922);const g=["className","color","enableColorOnDark","position"],f=(0,c.Ay)(p.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,d.A)(n.position)}`],t[`color${(0,d.A)(n.color)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:e.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,r.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),b=a.forwardRef((function(e,t){const n=(0,s.A)({props:e,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:p=!1,position:u="fixed"}=n,b=(0,o.A)(n,g),v=(0,r.A)({},n,{color:c,position:u,enableColorOnDark:p}),A=(e=>{const{color:t,position:n,classes:o}=e,r={root:["root",`color${(0,d.A)(t)}`,`position${(0,d.A)(n)}`]};return(0,l.A)(r,m,o)})(v);return(0,h.jsx)(f,(0,r.A)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.A)(A.root,a,"fixed"===u&&"mui-fixed"),ref:t},b))}))}}]);