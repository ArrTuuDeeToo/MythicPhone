"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[822],{30822:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(28407),c=a(70232),o=a.n(c),r=a(55429),l=a(15647),s=a(64965),i=a(386),m=a(31699),p=a(94356),d=a(1310),u=a(86979),h=a(57936),x=a(45984),f=a(51959),v=a(59530),b=a(61541),A=(0,x.A)({root:{border:"1px solid rgba(0, 0, 0, .25)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(i.A),g=(0,f.A)((function(e){return{contact:{background:e.palette.secondary.dark,"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},paper:{background:e.palette.secondary.dark},expandoContainer:{textAlign:"center",fontSize:30},expandoItem:{"&:hover":{color:e.palette.primary.main,transition:"color ease-in 0.15s"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},contactName:{fontSize:18,color:e.palette.text.light},contactNumber:{fontSize:16,color:e.palette.text.main},expanded:{margin:0}}}));const E=function(e){var t=g(),a=(0,s.W6)(),c=(0,l.d4)((function(e){return e.call.call})),i=function(){var t=(0,n.A)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=c){t.next=14;break}return t.prev=1,t.next=4,b.A.send("CreateCall",{number:e.contact.number,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?a.push("/apps/phone/call/".concat(e.contact.number)):showAlert("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),showAlert("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return r.createElement(m.A,{className:t.paper},r.createElement(A,{className:t.contact,expanded:e.expanded==e.index,onChange:e.onClick},r.createElement(p.A,{expandIcon:r.createElement(v.g,{icon:["fas","chevron-down"]}),style:{padding:"0 12px"}},r.createElement(d.Ay,{container:!0},r.createElement(d.Ay,{item:!0,xs:2},null!=e.contact.avatar&&""!==e.contact.avatar?r.createElement(u.A,{className:e.contact.favorite?t.avatarFav:t.avatar,src:e.contact.avatar,alt:e.contact.name.charAt(0)}):r.createElement(u.A,{className:e.contact.favorite?t.avatarFav:t.avatar,style:{background:e.contact.color}},e.contact.name.charAt(0))),r.createElement(d.Ay,{item:!0,xs:10},r.createElement("div",{className:t.contactName},e.contact.name),r.createElement("div",{className:t.contactNumber},e.contact.number)))),r.createElement(h.A,null,r.createElement(d.Ay,{container:!0,className:t.expandoContainer},r.createElement(d.Ay,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:i},r.createElement(v.g,{icon:"phone"})),r.createElement(d.Ay,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){a.push("/apps/messages/convo/".concat(e.contact.number))}},r.createElement(v.g,{icon:"comment-sms"})),r.createElement(d.Ay,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){a.push("/apps/contacts/edit/".concat(e.contact._id))}},r.createElement(v.g,{icon:"user-pen"})),null!=e.onDelete?r.createElement(d.Ay,{item:!0,xs:3,className:t.expandoItem,onClick:e.onDelete},r.createElement(v.g,{icon:"user-minus"})):null))))}}}]);