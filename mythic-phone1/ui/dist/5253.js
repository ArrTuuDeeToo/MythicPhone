"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[808,5253],{25253:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(55429),i=(n(15647),n(51959)),o=(n(59530),n(987)),r=n(50808),l=(0,i.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const s=function(e){var t=e.myReputations,n=e.loading,i=(e.onRefresh,l());return a.createElement("div",{className:i.wrapper},a.createElement("div",{className:i.body},Boolean(t)?t.length>0?t.map((function(e){return a.createElement(r.default,{key:"lsu-".concat(e.id),rep:e,disabled:n})})):a.createElement("div",{className:i.emptyMsg},"No Reputation Built"):a.createElement(o.aH,{static:!0,text:"Loading"})))}},50808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(55429),i=n(15647),o=n(31699),r=n(1310),l=n(57129),s=n(51959),c=(n(59530),n(61541),n(23470)),d=(0,s.A)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold",textAlign:"center"},progressLabel:{fontSize:16,textAlign:"center"},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},progressContainer:{padding:10}}}));const m=function(e){var t,n,s,m,u=e.rep,p=(e.myGroup,e.disabled,d());(0,i.wA)(),(0,c.MW)();return a.createElement(o.A,{className:p.wrapper},a.createElement(r.Ay,{container:!0},a.createElement(r.Ay,{item:!0,xs:12,style:{position:"relative",height:38}},a.createElement("div",{className:p.details},a.createElement("div",{className:p.title},u.label)))),a.createElement(r.Ay,{container:!0},a.createElement(r.Ay,{item:!0,xs:2,style:{position:"relative"}},a.createElement("div",{className:p.progressLabel},null!==(t=null===(n=u.current)||void 0===n?void 0:n.label)&&void 0!==t?t:"No Rank")),a.createElement(r.Ay,{item:!0,xs:8,style:{position:"relative"}},a.createElement("div",{className:p.progressContainer},a.createElement(l.A,{variant:"determinate",value:function(){var e,t,n,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,o=null!==(e=null==u||null===(t=u.current)||void 0===t?void 0:t.value)&&void 0!==e?e:0;return 100*(i-o)/((null!==(n=null==u||null===(a=u.next)||void 0===a?void 0:a.value)&&void 0!==n?n:1e3)-o)}(u.value)}))),a.createElement(r.Ay,{item:!0,xs:2,style:{position:"relative"}},a.createElement("div",{className:p.progressLabel},null!==(s=null===(m=u.next)||void 0===m?void 0:m.label)&&void 0!==s?s:"Unknown"))))}}}]);