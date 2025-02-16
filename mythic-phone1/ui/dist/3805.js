"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2288,3805],{3805:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var a=n(55429),o=(n(15647),n(74552)),r=n(87591),i=n(12288),c=(0,o.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},body:{padding:10,height:"100%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const l=function(t){var e=t.jobs,n=(t.groups,t.myGroup),o=t.loading,l=(t.onRefresh,c());return a.createElement("div",{className:l.wrapper},a.createElement("div",{className:l.body},Boolean(e)?Object.keys(e).length>0?Object.keys(e).map((function(t){return a.createElement(i.default,{key:"labor-".concat(t),job:e[t],myGroup:n,disabled:o})})):a.createElement("div",{className:l.emptyMsg},"No Jobs Available"):a.createElement(r.aH,{static:!0,text:"Loading"})))}},12288:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var a=n(28407),o=n(70232),r=n.n(o),i=n(55429),c=n(15647),l=n(28744),s=n(79111),u=n(49999),m=n(74552),d=(n(59530),n(61541)),p=n(23470),b=(0,m.A)((function(t){return{wrapper:{padding:10,background:t.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"fit-content",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:t.palette.primary.main,fontWeight:"bold"},pay:{fontSize:16,color:t.palette.success.main},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"}}}));const f=function(t){var e=t.job,n=t.myGroup,o=t.disabled,m=b(),f=((0,c.wA)(),(0,p.MW)()),h=(0,c.d4)((function(t){return t.data.data.player})),g=function(){var t=(0,a.A)(r().mark((function t(){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.A.send("StartLaborJob",{job:e.Id,isWorkgroup:Boolean(n)});case 3:return t.next=5,t.sent.json();case 5:a=t.sent,f(a?"Started ".concat(e.Name):"Unable to Start Job"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),f("Unable to Start Job");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=(0,a.A)(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.A.send("QuitLaborJob",e.Id);case 3:return t.next=5,t.sent.json();case 5:n=t.sent,f(n?"Quit ".concat(e.Name):"Unable to Quit Job"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),f("Unable to Quit Job");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return i.createElement(l.A,{className:m.wrapper},i.createElement(s.Ay,{container:!0},i.createElement(s.Ay,{item:!0,xs:7,style:{position:"relative",height:65}},i.createElement("div",{className:m.details},i.createElement("div",{className:m.title},e.Name),e.Salary>0&&i.createElement("div",{className:m.pay},"$",e.Salary))),i.createElement(s.Ay,{item:!0,xs:2,style:{position:"relative"}},i.createElement("div",{className:m.duty},0==e.Limit?e.OnDuty.length:"".concat(e.OnDuty.length," / ").concat(e.Limit))),i.createElement(s.Ay,{item:!0,xs:3,style:{position:"relative"}},e.OnDuty.filter((function(t){return t.Joiner==h.Source})).length>0||Boolean(n)&&e.OnDuty.filter((function(t){return t.Joiner==n.Creator.ID})).length>0?i.createElement(u.A,{variant:"text",className:m.actions,disabled:Boolean(n)&&n.Creator.ID!=h.Source||o,onClick:y},"Quit"):i.createElement(u.A,{variant:"text",className:m.actions,disabled:Boolean(n)&&n.Creator.ID!=h.Source||Boolean(h.TempJob)||o,onClick:g},"Start"))))}}}]);