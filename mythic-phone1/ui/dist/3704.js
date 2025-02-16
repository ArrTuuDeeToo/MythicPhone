"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[152,3704,6432,7081,9395],{70152:(e,t,a)=>{a.r(t),a.d(t,{TestSound:()=>l,UpdateSetting:()=>r});var n=a(61541),r=function(e,t){return function(a){n.A.send("UpdateSetting",{type:e,val:t}).then((function(n){a({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},l=function(e,t){return function(a){n.A.send("TestSound",{type:e,val:t})}}},86432:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(73925),r=a(55429),l=a(15647),o=a(28744),i=a(27043),c=a(79771),p=a(33268),s=a(74552),d=a(59530),u=(a(63159),a(70152)),m=a(23470),g=a(87591),h=a(48602),b=(0,s.A)((function(e){return{wrapper:{background:"#1e1f24",height:"100%",userSelect:"none",padding:10,textAlign:"center",borderRadius:7,"-webkit-user-select":"none",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.4)","&:hover":{background:"#3A3A3C",borderColor:"#007AFF",transition:"background 0.3s, border-color 0.3s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",padding:10,userSelect:"none",border:"2px solid ".concat(e.palette.primary.main),textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"},addContainer:{height:"90%",lineHeight:"200px",position:"relative",width:"100%",display:"block",backgroundColor:e.palette.primary.main,marginBottom:7},addIcon:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",fontSize:35},editField:{width:"100%",marginBottom:20,fontSize:20},buttons:{width:"100%",display:"flex",margin:"auto"},buttonNeg:{width:"-webkit-fill-available",padding:20,color:e.palette.error.main,"&:hover":{backgroundColor:"".concat(e.palette.error.main,"14")}},buttonPos:{width:"-webkit-fill-available",padding:20,color:e.palette.success.main,"&:hover":{backgroundColor:"".concat(e.palette.success.main,"14")}},customPH:{position:"relative",height:425,width:250,margin:"auto",background:e.palette.secondary.dark,marginBottom:25},customImg:{display:"block",height:425,width:250,margin:"auto",marginBottom:25},label:{color:"#F2F2F7",fontSize:"14px",marginTop:"0px",fontWeight:"bold"}}}));const f=(0,l.Ng)(null,{UpdateSetting:u.UpdateSetting})((function(e){var t=(0,m.MW)(),a=b(),s=(0,l.d4)((function(e){return e.data.data.player.PhoneSettings})),u=null==h._[s.wallpaper],f=(0,r.useState)(!1),w=(0,n.A)(f,2),k=w[0],v=w[1],y=(0,r.useState)(""),A=(0,n.A)(y,2),S=A[0],E=(A[1],(0,r.useState)(!1)),x=(0,n.A)(E,2),C=x[0],N=x[1],U=(0,r.useState)(u?s.wallpaper:""),W=(0,n.A)(U,2),F=W[0],P=W[1],D=function(e){C&&k||v(e)};return r.createElement(r.Fragment,null,r.createElement(o.A,{className:u?a.wrapperActive:a.wrapper,onClick:function(){return D(!0)}},u?r.createElement("img",{className:a.img,src:s.wallpaper,alt:"Custom Wallpaper"}):r.createElement("div",{className:a.addContainer},r.createElement(d.g,{icon:["fas","plus"],className:a.addIcon})),r.createElement("div",{className:a.label},"Custom")),k?r.createElement(g.aF,{open:k,title:"Custom Wallpaper",onClose:function(){return D(!1)},onDelete:u?function(a){a.preventDefault(),D(!1),P(""),e.UpdateSetting("wallpaper","wallpaper"),t("Wallpaper Deleted")}:null,onAccept:function(){N(!1),D(!1),""!==F&&(e.UpdateSetting("wallpaper",F),t("Custom Wallpaper Saved"))},acceptLang:"Save"},C?r.createElement("div",null,r.createElement("div",{className:a.customPH},r.createElement(i.A,{size:70,className:a.addIcon})),r.createElement("div",null,"Checking Link")):r.createElement("div",null,""!=F?r.createElement("img",{className:a.customImg,src:F,alt:"Custom Wallpaper"}):r.createElement("div",{className:a.customPH},r.createElement(d.g,{icon:["fas","plus"],className:a.addIcon})),""!==S?r.createElement(c.A,{variant:"filled",severity:"error",elevation:6,className:a.error},S):null,r.createElement(p.A,{className:a.editField,label:"Wallpaper Link",name:"wallpaper",type:"text",onChange:function(e){e.preventDefault(),P(e.target.value)},value:F,InputLabelProps:{style:{fontSize:20}}}))):null)}))},97081:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(55429),r=a(64965),l=(0,a(74552).A)((function(e){return{phoneVers:{height:40,lineHeight:"40px",textAlign:"center",fontFamily:"Aclonica",width:"100%",userSelect:"none","-webkit-user-select":"none"}}}));const o=function(e){var t=l(),a=(0,r.W6)();(0,n.useEffect)((function(){return function(){clearTimeout(o)}}),[]);var o=null,i=function(){clearTimeout(o)};return n.createElement("div",{className:t.phoneVers,onMouseDown:function(){o=setTimeout((function(){a.push("/apps/settings/software")}),2e3)},onMouseUp:i,onMouseLeave:i},"Angry Boi OS ",n.createElement("small",null,"v","1.0.0"))}},19395:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(55429),r=a(15647),l=a(28744),o=a(74552),i=a(70152),c=a(23470),p=(0,o.A)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",border:"2px solid ".concat(e.palette.secondary.dark),padding:10,textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",padding:10,textAlign:"left",border:"2px solid ".concat(e.palette.primary.main),"-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"}}}));const s=(0,r.Ng)(null,{UpdateSetting:i.UpdateSetting})((function(e){var t=(0,c.MW)(),a=p(),o=(0,r.d4)((function(e){return e.data.data.player.PhoneSettings}));return(0,n.useEffect)((function(){if(o.wallpaper===e.item){var t=document.querySelector("#".concat(o.wallpaper));t&&t.scrollIntoView({block:"end",behavior:"smooth"})}}),[o.wallpaper]),n.createElement(l.A,{className:o.wallpaper===e.item?a.wrapperActive:a.wrapper,onClick:function(a){a.preventDefault(),e.UpdateSetting("wallpaper",e.item),t("Wallpaper Updated")},id:e.item},n.createElement("img",{className:a.img,src:e.wallpaper.file,alt:e.wallpaper.label}),e.wallpaper.label)}))},31323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(55429),r=a(79111),l=a(74552),o=a(19395),i=a(86432),c=(a(97081),a(48602)),p=(0,l.A)((function(e){return{wrapper:{height:"100vh",background:"linear-gradient(180deg, #000000 0%, #1C1C1E 100%)",textAlign:"center",padding:"10px"},wallpaperList:{height:"calc(100% - 60px)",overflowY:"auto",overflowX:"hidden",padding:"10px 0","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#888"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const s=function(e){var t=p();return n.createElement("div",{className:t.wrapper},n.createElement(r.Ay,{container:!0,spacing:1,className:t.wallpaperList},n.createElement(r.Ay,{item:!0,xs:4},n.createElement(i.default,null)),Object.keys(c._).map((function(e,t){return n.createElement(r.Ay,{key:"wallpaper-".concat(t),item:!0,xs:4},n.createElement(o.default,{item:e,wallpaper:c._[e]}))}))))}}}]);