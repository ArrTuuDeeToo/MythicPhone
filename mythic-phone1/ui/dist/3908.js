"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3908],{3908:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(73925),i=n(55429),o=(n(15647),n(1310)),r=n(31699),l=n(86979),c=n(67987),s=n(29506),p=n(51959),d=n(59530),m=(0,p.A)((function(e){return{div:{width:"100%",textDecoration:"none",whiteSpace:"nowrap",verticalAlign:"middle",userSelect:"none","-webkit-user-select":"none",position:"relative"},rowWrapper:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},rowWrapperActive:{background:e.palette.secondary.light,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:e.palette.text.light,height:55,width:55,fontSize:35,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarIcon:{fontSize:35},sectionHeader:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"35px"},popup:{opacity:1,transition:"opacity 0.15s",position:"absolute",left:0,right:0,top:"90%",zIndex:"2",margin:0},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:-1},itemsList:{width:"100%",background:e.palette.secondary.light,minHeight:84,zIndex:999},arrow:{fontSize:25,position:"absolute",top:0,bottom:0,right:0,left:0,margin:"auto"},selectOption:{padding:10,background:e.palette.secondary.light,lineHeight:"50px",fontSize:20,fontWeight:"bold","&:hover":{filter:"brightness(0.7)",transition:"filter ease-in 0.15s",cursor:"pointer"}},selectedOption:{padding:10,background:e.palette.secondary.light,lineHeight:"50px",fontSize:20,fontWeight:"bold",border:"1px solid ".concat(e.palette.primary.main),"&:hover":{filter:"brightness(0.7)",transition:"filter ease-in 0.15s",cursor:"pointer"}},playBtn:{textAlign:"center",fontSize:20,lineHeight:"50px",fontWeight:"bold",position:"relative"},selectedItem:{color:e.palette.text.main,fontWeight:"bold"}}}));const u=function(e){var t=m(),n=(0,i.useState)(!1),p=(0,a.A)(n,2),u=p[0],g=p[1],h=(0,i.useState)(e.selected),f=(0,a.A)(h,2),b=f[0],y=f[1],v=function(){e.disabled||g(!u)},x=function(t){v(),y(t),e.onChange(t)},E=e.disabled?"".concat(t.div," disabled"):t.div,k=e.disabled?{opacity:.5}:{};return i.createElement("div",{className:E,style:k},i.createElement(o.Ay,{container:!0},i.createElement(r.A,{className:u?t.rowWrapperActive:t.rowWrapper,onClick:v},i.createElement(o.Ay,{item:!0,xs:12},i.createElement(o.Ay,{container:!0},i.createElement(o.Ay,{item:!0,xs:2,style:{position:"relative"}},i.createElement(l.A,{className:t.avatar,style:{backgroundColor:e.color}},i.createElement(d.g,{icon:["fas","music-note"],className:t.avatarIcon}))),i.createElement(o.Ay,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},i.createElement("span",{className:t.sectionHeader},e.label),i.createElement("span",{className:t.selectedItem},e.options.filter((function(e){return e.value===b}))[0].label)),i.createElement(o.Ay,{item:!0,xs:2,style:{position:"relative"}},u?i.createElement(d.g,{icon:["fas","chevron-up"],className:t.arrow}):i.createElement(d.g,{icon:["fas","chevron-down"],className:t.arrow})))))),i.createElement(c.A,{in:u},i.createElement(r.A,{className:t.popup},i.createElement("div",{className:t.cover,onClick:v}),i.createElement("div",{className:t.itemsList},e.options.map((function(n,a){return i.createElement(r.A,{key:"".concat(e.label,"-").concat(a),className:a===b?t.selectedOption:t.selectOption},i.createElement(o.Ay,{container:!0,style:{padding:"0 10px"}},i.createElement(o.Ay,{item:!0,xs:10,onClick:function(){x(n.value)}},n.label),i.createElement(o.Ay,{item:!0,xs:2,className:t.playBtn,onClick:function(){e.playSound(n.value)}},i.createElement(s.A,{className:t.arrow,variant:"outlined"},i.createElement(d.g,{icon:["fas","play"],className:t.arrow})))))}))))))}}}]);