"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[536],{536:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(55429),n=a(15647),o=a(64965),l=a(31699),s=a(1310),i=a(86979),c=a(51959),m=a(51698),d=a.n(m),u=(0,c.A)((function(e){return{convo:{"&::before":{background:"transparent !important"},background:e.palette.secondary.dark,padding:"20px 12px",border:"1px solid rgba(0, 0, 0, .25)","&:not(:last-child)":{borderBottom:"none"},"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:"#fff",height:55,width:55,position:"relative",top:0},avatarFav:{color:"#fff",height:55,width:55,position:"relative",top:0,border:"2px solid gold"},number:{fontSize:16,fontWeight:"bold",color:e.palette.text.light},message:{fontSize:16,color:e.palette.text.light,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},time:{fontSize:12,color:e.palette.text.main},unread:{width:20,height:20,lineHeight:"23px",position:"absolute",bottom:"5%",right:"15%",textAlign:"center",background:e.palette.error.main,color:e.palette.text.light,borderRadius:100}}}));const p=function(e){var t=u(),a=(0,o.W6)(),c=(0,n.d4)((function(e){return e.data.data.contacts})).filter((function(t){return t.number===e.message.number}))[0];return r.createElement(l.A,{className:t.convo,onClick:function(){a.push("/apps/messages/convo/".concat(e.message.number))}},r.createElement(s.Ay,{container:!0},r.createElement(s.Ay,{item:!0,xs:2,style:{position:"relative"}},null!=c?null!=c.avatar&&""!==c.avatar?r.createElement(i.A,{className:c.favorite?t.avatarFav:t.avatar,src:c.avatar,alt:c.name.charAt(0)}):r.createElement(i.A,{className:c.favorite?t.avatarFav:t.avatar,style:{background:c.color}},c.name.charAt(0)):r.createElement(i.A,{className:t.avatar},"#"),e.unread>0?r.createElement("div",{className:t.unread},e.unread):null),r.createElement(s.Ay,{item:!0,xs:10},null!=c?r.createElement("div",{className:t.number},c.name):r.createElement("div",{className:t.number},e.message.number),r.createElement("div",{className:t.message},e.message.message),r.createElement("div",{className:t.time},r.createElement(d(),{fromNow:!0},+e.message.time)))))}}}]);