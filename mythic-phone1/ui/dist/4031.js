"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2923,4031,9911],{4031:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(55429),n=a(15647),l=a(42262),o=a(74268),c=a(40279),i=a(51959),s=a(39911),m=(0,i.A)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"90%",margin:"auto"}}}));const u=function(e){var t=e.jobData,a=e.playerJob,i=e.workplace,u=e.onEmployeeClick,d=(m(),(0,n.d4)((function(e){return e.com.roster}))),f=Array();return Boolean(d)&&d[t.Id]&&(f=i?d[t.Id].filter((function(e){var t;return(null===(t=e.JobData.Workplace)||void 0===t?void 0:t.Id)==i.Id})):d[t.Id]),0==f.length?null:r.createElement(l.A,null,i&&r.createElement(o.Ay,null,r.createElement(c.A,{primary:i.Name})),r.createElement(o.Ay,null,r.createElement(l.A,{style:{width:"100%"}},f.sort((function(e,t){return t.JobData.Grade.Level-e.JobData.Grade.Level})).map((function(e){return r.createElement(s.default,{key:e.SID,jobData:t,playerJob:a,employee:e,onClick:u})})))))}},39911:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var r=a(55429),n=a(15647),l=a(74268),o=a(52923),c=a(86979),i=a(40279),s=a(56977),m=a(44752),u=a(51959),d=a(59530),f=a(23470),p=(0,u.A)((function(e){return{item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}},avatar:{backgroundColor:e.palette.primary.main},myself:{fontSize:14,color:e.palette.info.main,marginRight:5},owner:{fontSize:14,color:"gold",marginRight:5}}}));const A=function(e){var t=e.jobData,a=e.playerJob,u=e.employee,A=e.onClick,v=p(),I=(0,f.Bm)(),E=((0,f.T1)(),(0,n.d4)((function(e){return e.data.data.player}))),y=E.SID==(null==t?void 0:t.Owner),b=I("JOB_MANAGEMENT",t.Id)||y,g=I("JOB_MANAGE_EMPLOYEES",t.Id)||y,w=(I("JOB_HIRE",t.Id),I("JOB_FIRE",t.Id)||y);return r.createElement(l.Ay,{className:v.item,button:((null==t?void 0:t.Owner)!=u.SID||y)&&(a.Grade.Level>u.JobData.Grade.Level||y)&&(b||g||w),onClick:((null==t?void 0:t.Owner)!=u.SID||y)&&(a.Grade.Level>u.JobData.Grade.Level||y)&&(b||g||w)?function(){return A(u)}:null},r.createElement(o.A,null,r.createElement(c.A,{className:v.avatar},r.createElement(d.g,{icon:["fas","user"]}))),r.createElement(i.A,{primary:r.createElement("span",null,E.SID==u.SID?r.createElement(s.A,{title:"You"},r.createElement("span",null,r.createElement(d.g,{className:v.myself,icon:["fas","user"]}))):(null==t?void 0:t.Owner)==u.SID?r.createElement(s.A,{title:"Business Owner"},r.createElement("span",null,r.createElement(d.g,{className:v.owner,icon:["fas","crown"]}))):null,"".concat(u.First," ").concat(u.Last)),secondary:"".concat(u.JobData.Grade.Name," - ").concat(u.Phone)}),t.Owner!=u._id&&(a.Grade.Level>u.JobData.Grade.Level||y)&&(b||g||w)&&r.createElement(m.A,null,r.createElement(d.g,{icon:["fas","pen-to-square"]})))}},52923:(e,t,a)=>{a.d(t,{A:()=>I});var r=a(86887),n=a(64180),l=a(55429),o=a(34164),c=a(7413),i=a(74024),s=a(23805),m=a(29115),u=a(52679),d=a(33899);function f(e){return(0,d.Ay)("MuiListItemAvatar",e)}(0,u.A)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var p=a(64922);const A=["className"],v=(0,s.Ay)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,n.A)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),I=l.forwardRef((function(e,t){const a=(0,m.b)({props:e,name:"MuiListItemAvatar"}),{className:s}=a,u=(0,r.A)(a,A),d=l.useContext(i.A),I=(0,n.A)({},a,{alignItems:d.alignItems}),E=(e=>{const{alignItems:t,classes:a}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,c.A)(r,f,a)})(I);return(0,p.jsx)(v,(0,n.A)({className:(0,o.A)(E.root,s),ownerState:I,ref:t},u))}))}}]);