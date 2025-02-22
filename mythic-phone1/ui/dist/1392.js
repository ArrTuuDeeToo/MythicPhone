"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[1392,4362],{21392:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var o=r(73925),a=r(55429),n=r(15647),l=r(64965),i=r(57527),c=r(1310),s=r(20500),p=r(86979),d=r(72856),u=r(75586),m=r(31699),f=r(51959),g=r(51698),v=r.n(g),k=r(26324),b=r(59530),h=r(44362),A=r(23470),y=(0,f.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},titleBar:{padding:15,textAlign:"center"},senderBar:{padding:15,textAlign:"left",lineHeight:"30px",backgroundColor:e.palette.secondary.light},sendTime:{margin:"0",marginTop:"10px",color:e.palette.text.main},expireBar:{padding:15,textAlign:"center",background:e.palette.error.main},emailTitle:{fontSize:20,fontWeight:"bold",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"46px"},avatar:{color:e.palette.text.light,height:55,width:55,position:"relative",top:0},sender:{fontSize:18,color:e.palette.text.light},recipient:{fontSize:14,color:e.palette.text.main},emailBody:{padding:20,background:e.palette.secondary.dark,overflowX:"hidden",overflowY:"auto","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},actionButtons:{right:0}}})),E={lastDay:"[Yesterday at] LT",sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",lastWeek:"[last] dddd [at] LT",nextWeek:"dddd [at] LT",sameElse:"L"};const x=(0,n.Ng)(null,{ReadEmail:h.ReadEmail,DeleteEmail:h.DeleteEmail,GPSRoute:h.GPSRoute,Hyperlink:h.Hyperlink})((function(e){var t,r,f,g,h,x=(0,A.MW)(),w=y(),B=(0,l.W6)(),D=e.match.params.id,O=(0,n.d4)((function(e){return e.data.data.emails})).filter((function(e){return e._id===D}))[0];(0,a.useEffect)((function(){var t,r=null;return O||(x("Email Has Been Deleted"),B.goBack()),null!=O&&O.unread&&e.ReadEmail(O),null!=(null==O||null===(t=O.flags)||void 0===t?void 0:t.expires)&&(O.flags.expires<Date.now()?(x("Email Has Expired"),e.DeleteEmail(O._id),B.goBack()):r=setInterval((function(){O.flags.expires<Date.now()&&(x("Email Has Expired"),e.DeleteEmail(O._id),B.goBack())}),2500)),function(){clearInterval(r)}}),[O]);var S=(0,a.useState)(!1),C=(0,o.A)(S,2),T=C[0],R=C[1],P=(0,a.useState)({left:110,top:0}),N=(0,o.A)(P,2),_=N[0],j=N[1],H=function(){R(!1)};return a.createElement("div",{className:w.wrapper},a.createElement(i.A,{position:"static"},a.createElement(c.Ay,{container:!0,className:w.titleBar},a.createElement(c.Ay,{item:!0,xs:2,style:{textAlign:"left"}},a.createElement(s.A,{onClick:function(){return B.goBack()}},a.createElement(b.g,{icon:["fas","arrow-left"]}))),a.createElement(c.Ay,{item:!0,xs:8,className:w.emailTitle,title:null==O?void 0:O.subject},null==O?void 0:O.subject),a.createElement(c.Ay,{item:!0,xs:2,style:{textAlign:"right"}},a.createElement(s.A,{onClick:function(e){e.preventDefault(),j({left:e.clientX-2,top:e.clientY-4}),R(!0)}},a.createElement(b.g,{icon:["fas","ellipsis-vertical"]})))),a.createElement(c.Ay,{container:!0,className:w.senderBar},a.createElement(c.Ay,{item:!0,xs:2},a.createElement(p.A,{className:w.avatar},null==O||null===(t=O.sender)||void 0===t?void 0:t.charAt(0))),a.createElement(c.Ay,{item:!0,xs:10,style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},a.createElement("div",{className:w.sender},null==O?void 0:O.sender),a.createElement("div",{className:w.recipient},"to: me")),a.createElement(c.Ay,{item:!0,xs:8,style:{textAlign:"left",position:"relative"}},a.createElement("p",{className:w.sendTime},"Received ",a.createElement(v(),{interval:6e4,fromNow:!0},+(null==O?void 0:O.time)),".")),a.createElement(c.Ay,{item:!0,xs:4,style:{textAlign:"right",position:"relative"}},a.createElement("div",{className:w.actionButtons},null!=(null==O||null===(r=O.flags)||void 0===r?void 0:r.location)?a.createElement(s.A,{onClick:function(){var t;null!=(null==O||null===(t=O.flags)||void 0===t?void 0:t.location)&&e.GPSRoute(O._id,O.flags.location)}},a.createElement(b.g,{icon:["fas","location-crosshairs"]})):null,null!=(null==O||null===(f=O.flags)||void 0===f?void 0:f.hyperlink)?a.createElement(s.A,{onClick:function(){var t;null!=(null==O||null===(t=O.flags)||void 0===t?void 0:t.hyperlink)&&e.Hyperlink(O._id,O.flags.hyperlink)}},a.createElement(b.g,{icon:["fas","link"]})):null)))),a.createElement(d.A,{anchorReference:"anchorPosition",anchorPosition:_,keepMounted:!0,open:T,onClose:H},a.createElement(u.A,{onClick:function(){H(),x("Email Deleted"),e.DeleteEmail(O._id),B.goBack()}},"Delete Email")),null!=(null==O||null===(g=O.flags)||void 0===g?void 0:g.expires)?a.createElement(i.A,{className:w.expireBar,position:"static"},a.createElement("div",null,"Email expires"," ",a.createElement(v(),{interval:1e4,calendar:E,fromNow:!0},+O.flags.expires))):null,a.createElement(m.A,{className:w.emailBody,style:{height:null!=(null==O||null===(h=O.flags)||void 0===h?void 0:h.expires)?"66.6%":"73.5%"}},(0,k.WX)(null==O?void 0:O.body)))}))},44362:(e,t,r)=>{r.r(t),r.d(t,{DeleteEmail:()=>c,GPSRoute:()=>s,Hyperlink:()=>p,ReadEmail:()=>i});var o=r(68175),a=r(61541);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=function(e){return function(t){a.A.send("ReadEmail",e._id).then((function(r){t({type:"UPDATE_DATA",payload:{type:"emails",id:e._id,data:l(l({},e),{},{unread:!1})}})})).catch((function(e){}))}},c=function(e){return function(t){a.A.send("DeleteEmail",e).then((function(){return t({type:"REMOVE_DATA",payload:{type:"emails",id:e}}),!0})).catch((function(e){return!1}))}},s=function(e,t){return function(r){a.A.send("GPSRoute",{id:e,location:t}).then((function(e){r({type:"ALERT_SHOW",payload:{alert:"GPS Marked"}})})).catch((function(e){r({type:"ALERT_SHOW",payload:{alert:"Unable To Mark Location On GPS"}})}))}},p=function(e,t){return function(r){a.A.send("Hyperlink",{id:e,hyperlink:t}).catch((function(e){r({type:"ALERT_SHOW",payload:{alert:"Unable To Open Hyperlink"}})}))}}},57527:(e,t,r)=>{r.d(t,{A:()=>h});var o=r(86887),a=r(64180),n=r(55429),l=r(34164),i=r(7413),c=r(23805),s=r(29115),p=r(10016),d=r(31699),u=r(52679),m=r(33899);function f(e){return(0,m.Ay)("MuiAppBar",e)}(0,u.A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var g=r(64922);const v=["className","color","enableColorOnDark","position"],k=(e,t)=>e?`${null==e?void 0:e.replace(")","")}, ${t})`:t,b=(0,c.Ay)(d.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`position${(0,p.A)(r.position)}`],t[`color${(0,p.A)(r.color)}`]]}})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,a.A)({},"default"===t.color&&{backgroundColor:r,color:e.palette.getContrastText(r)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,a.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.A)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:k(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:k(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:k(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:k(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},!["inherit","transparent"].includes(t.color)&&{backgroundColor:"var(--AppBar-background)"},{color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),h=n.forwardRef((function(e,t){const r=(0,s.b)({props:e,name:"MuiAppBar"}),{className:n,color:c="primary",enableColorOnDark:d=!1,position:u="fixed"}=r,m=(0,o.A)(r,v),k=(0,a.A)({},r,{color:c,position:u,enableColorOnDark:d}),h=(e=>{const{color:t,position:r,classes:o}=e,a={root:["root",`color${(0,p.A)(t)}`,`position${(0,p.A)(r)}`]};return(0,i.A)(a,f,o)})(k);return(0,g.jsx)(b,(0,a.A)({square:!0,component:"header",ownerState:k,elevation:4,className:(0,l.A)(h.root,n,"fixed"===u&&"mui-fixed"),ref:t},m))}))}}]);