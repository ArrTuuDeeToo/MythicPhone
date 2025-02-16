"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[1635,9169,9605],{68833:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(28407),r=a(73925),o=a(70232),c=a.n(o),l=a(55429),i=a(15647),s=a(64965),d=a(142),u=a(79111),m=a(32764),p=a(26573),f=a(74552),b=a(59530),h=a(84529),E=a(98433),g=a(87591),A=a(41655),v=a.n(A),k=a(61541),y=a(23470),w=a(84832),x=(0,f.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},item:{borderBottom:"1px solid ".concat(e.palette.border.divider)}}}));const N=function(e){var t=e.jobData,a=(e.playerJob,x()),o=(0,s.W6)(),f=(0,i.wA)(),A=(0,y.MW)(),N=(0,i.d4)((function(e){return e.com.timeWorked})),D=(0,i.d4)((function(e){return e.com.timeWorkedUpdated})),S=(0,i.d4)((function(e){return e.com.timeWorkedJob})),T=(0,l.useState)(!1),I=(0,r.A)(T,2),W=(I[0],I[1]),C=(0,l.useMemo)((function(){return(0,h.throttle)((0,n.A)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.prev=1,e.next=4,k.A.send("FetchTimeWorked",t.Id);case 4:return e.next=6,e.sent.json();case 6:if(!(a=e.sent)){e.next=11;break}f({type:"UPDATE_TIMEWORKED",payload:{timeWorked:a,timeWorkedJob:t.Id}}),e.next=12;break;case 11:throw a;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),A("Unable to Load Time Worked");case 18:W(!1);case 19:case"end":return e.stop()}}),e,null,[[1,14]])}))),5e3)}),[]);(0,l.useEffect)((function(){(!N||Date.now()-D>=12e4||S!=t.Id)&&C()}),[]);var M,U,B=(0,l.useState)(null),R=(0,r.A)(B,2),j=R[0],J=R[1];return l.createElement("div",{className:a.wrapper},l.createElement(d.A,{position:"static",className:a.header},l.createElement(u.Ay,{container:!0},l.createElement(u.Ay,{item:!0,xs:11},l.createElement(E.A,{lines:1},t.Name)),l.createElement(u.Ay,{item:!0,xs:1,className:a.headerAction},l.createElement(m.A,{title:"Home"},l.createElement(p.A,{onClick:function(){o.goBack()}},l.createElement(b.g,{icon:["fas","house"]})))))),N&&N.length>0?N.map((function(e){return l.createElement(w.default,{key:e.SID,employee:e,jobData:t,onClick:function(t){return J(e)}})})):l.createElement(g.aH,{static:!0,text:"Loading"}),l.createElement(g.aF,{open:null!=j,title:"View Time Worked",onClose:function(){return J(null)},onAccept:null,onDelete:null},null!=j&&l.createElement(l.Fragment,null,l.createElement("p",null,j.First," ",j.Last," (",j.SID,")"),l.createElement("p",null,"Last Went on Duty: ",(M=j.LastClockOn,U=t.Id,M&&M[U]?"".concat(v()(1e3*M[U]).format("LLL")," (").concat(v()(1e3*M[U]).fromNow(),")"):"Never")),l.createElement("p",null,"Has worked ",function(e,t){if(e&&e[t]){var a=v()().subtract(7,"days").unix(),n=0;return e[t].forEach((function(e){e.time>=a&&(n+=e.minutes)})),n>0?v().duration(n,"minutes").humanize():"0 minutes"}return"0 minutes"}(j.TimeClockedOn,t.Id)," in the last week."))))}},59605:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(55429),r=a(15647),o=a(64965),c=a(142),l=a(79111),i=a(32764),s=a(26573),d=a(48147),u=a(74552),m=a(98433),p=a(59530),f=a(21635),b=(0,u.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},list:{position:"inherit"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const h=function(e){var t=e.jobData,a=(e.playerJob,b()),u=(0,o.W6)(),h=(0,r.d4)((function(e){return e.data.data.companyUpgrades}));return n.createElement("div",{className:a.wrapper},n.createElement(c.A,{position:"static",className:a.header},n.createElement(l.Ay,{container:!0},n.createElement(l.Ay,{item:!0,xs:8},n.createElement(m.A,{lines:1},t.Name)),n.createElement(l.Ay,{item:!0,xs:4,className:a.headerAction},n.createElement(i.A,{title:"Home"},n.createElement(s.A,{onClick:function(){u.goBack()}},n.createElement(p.g,{icon:["fas","house"]})))))),n.createElement(d.A,{className:a.list},Boolean(h)?h.map((function(e,t){return n.createElement(f.default,{key:"upgrade-".concat(t),upgrade:e})})):n.createElement("div",{className:a.emptyMsg},"No Upgrades Available")))}},84832:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(55429),r=a(15647),o=a(44557),c=a(20346),l=a(44686),i=a(85220),s=a(32764),d=a(74552),u=a(59530),m=(a(23470),(0,d.A)((function(e){return{item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}},avatar:{backgroundColor:e.palette.primary.main},myself:{fontSize:14,color:e.palette.info.main,marginRight:5},owner:{fontSize:14,color:"gold",marginRight:5}}})));const p=function(e){var t=e.jobData,a=(e.playerJob,e.employee),d=e.onClick,p=m(),f=(0,r.d4)((function(e){return e.data.data.player}));return n.createElement(o.Ay,{className:p.item,button:!0,onClick:function(){return d(a)}},n.createElement(c.A,null,n.createElement(l.A,{className:p.avatar},n.createElement(u.g,{icon:["fas","user"]}))),n.createElement(i.A,{primary:n.createElement("span",null,f.SID==a.SID?n.createElement(s.A,{title:"You"},n.createElement("span",null,n.createElement(u.g,{className:p.myself,icon:["fas","user"]}))):(null==t?void 0:t.Owner)==a.SID?n.createElement(s.A,{title:"Business Owner"},n.createElement("span",null,n.createElement(u.g,{className:p.owner,icon:["fas","crown"]}))):null,"".concat(a.First," ").concat(a.Last)),secondary:"State ID: ".concat(a.SID)}))}},21635:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(28407),r=a(73925),o=a(70232),c=a.n(o),l=a(55429),i=a(44557),s=a(85220),d=a(68209),u=a(26573),m=a(74552),p=a(59530),f=a(23470),b=a(87591),h=a(61541),E=(0,m.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}}}}));const g=function(e){var t=e.upgrade,a=E(),o=(0,f.MW)(),m=(0,f.e9)()(t.value),g=(0,l.useState)(!1),A=(0,r.A)(g,2),v=A[0],k=A[1],y=function(){var e=(0,n.A)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.A.send("PurchaseUpgrade",t);case 3:return e.next=5,e.sent.json();case 5:if((a=e.sent).error){e.next=9;break}e.next=20;break;case 9:e.t0=a.code,e.next=1===e.t0?12:2===e.t0?14:3===e.t0?16:-1===e.t0?18:20;break;case 12:return o("Unable to Purchase Upgrade"),e.abrupt("break",20);case 14:return o("Not Authorized"),e.abrupt("break",20);case 16:return o("Unable to Purchase Upgrade"),e.abrupt("break",20);case 18:return o("Not Yet Implemented"),e.abrupt("break",20);case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(0),console.log(e.t1),o("Unable to Purchase Upgrade");case 26:k(!1);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}();return l.createElement("div",{className:a.wrapper},l.createElement(i.Ay,{className:a.item},l.createElement(s.A,{primary:t.label,secondary:m?"Owned":"$".concat(t.price)}),!m&&l.createElement(d.A,null,l.createElement(u.A,{edge:"end",onClick:function(){return k(!0)}},l.createElement(p.g,{icon:["fas","money-check-dollar-pen"]})))),l.createElement(b.pT,{title:"Purchase ".concat(t.label,"?"),open:v,confirm:"Yes",decline:"No",onConfirm:y,onDecline:function(){return k(!1)}},l.createElement("p",null,"Purchases may not be refunded, additional costs may be associated with using this purchase.")))}},49169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(28407),r=a(73925),o=a(70232),c=a.n(o),l=a(55429),i=a(15647),s=a(55834),d=a(59757),u=a(74552),m=a(64965),p=a(61541),f=a(84529),b=a(87591),h=a(23215),E=a(54747),g=(a(59605),a(68833)),A=a(23470),v=(0,u.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden",display:"flex",flexDirection:"column"},tabs:{borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:1,overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},tabPanel:{},phoneTab:{minWidth:"33.333%"},alert:{width:"fit-content",margin:"auto"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"35%"}}}));const k=function(e){var t=v(),a=(0,i.wA)(),o=(0,A.MW)(),u=(0,m.W6)(),k=(0,A.Bm)(),y=e.match.params.jobId,w=(0,l.useState)(!1),x=(0,r.A)(w,2),N=x[0],D=x[1],S=(0,l.useState)(!1),T=(0,r.A)(S,2),I=T[0],W=(T[1],(0,i.d4)((function(e){return e.data.data.player}))),C=(0,i.d4)((function(e){return e.data.data.JobData})),M=(0,i.d4)((function(e){return e.com.tab})),U=W.Jobs.find((function(e){return e.Id==y})),B=C.find((function(e){return e.Id==(null==U?void 0:U.Id)}));U&&B||u.goBack();var R=(0,l.useMemo)((function(){return(0,f.throttle)((0,n.A)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.prev=1,e.next=4,p.A.send("FetchRoster",{ReqUpdate:!0});case 4:return e.next=6,e.sent.json();case 6:if(!(t=e.sent)||!t.rosterData){e.next=12;break}a({type:"UPDATE_ROSTERS",payload:{roster:t.rosterData}}),t.jobData&&a({type:"SET_DATA",payload:{type:"JobData",data:t.jobData}}),e.next=13;break;case 12:throw t;case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),o("Unable to Load Roster's"),a({type:"UPDATE_ROSTERS",payload:{roster:!1}});case 20:D(!1);case 21:case"end":return e.stop()}}),e,null,[[1,15]])}))),5e3)}),[]);return N?l.createElement("div",{className:t.wrapper},l.createElement(b.aH,{static:!0,text:"Loading"})):l.createElement(l.Fragment,null,!I&&U?l.createElement("div",{className:t.wrapper},l.createElement("div",{className:t.tabs},l.createElement(s.A,{value:M,onChange:function(e,t){a({type:"SET_COM_TAB",payload:{tab:t}})},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",scrollButtons:!1},l.createElement(d.A,{className:t.phoneTab,label:"Roster"}),l.createElement(d.A,{className:t.phoneTab,disabled:!(k("JOB_MANAGEMENT",U.Id)||W.SID==(null==B?void 0:B.Owner)),label:"Manage"}),l.createElement(d.A,{className:t.phoneTab,disabled:!(k("JOB_MANAGEMENT",U.Id)||W.SID==(null==B?void 0:B.Owner)),label:"Time Worked"}))),l.createElement("div",{className:t.content},l.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==M,id:"notifications"},0===M&&l.createElement(E.default,{loading:N,refreshRoster:function(){return R()},jobData:B,playerJob:U})),l.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==M,id:"person"},1===M&&l.createElement(h.default,{refreshRoster:function(){return R()},jobData:B,playerJob:U})),l.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:2!==M,id:"timeworked"},2===M&&l.createElement(g.default,{refreshRoster:function(){return R()},jobData:B,playerJob:U})))):l.createElement("div",{className:t.wrapper},l.createElement("div",{className:t.emptyMsg},"Error")))}}}]);