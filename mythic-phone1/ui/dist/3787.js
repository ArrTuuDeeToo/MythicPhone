"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3787],{93787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(28407),r=a(73925),l=a(70232),i=a.n(l),c=a(55429),o=a(15647),u=a(33312),s=a(33268),d=a(49999),p=a(74552),m=a(35688),h=a.n(m),y=a(61541),f=a(23470),A=(0,p.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,textAlign:"center"},header:{fontSize:28,fontWeight:"bold",color:e.palette.primary.main},body:{padding:30}}}));const v=function(e){var t=A(),a=(0,f.MW)(),l=(0,o.wA)(),p=((0,o.d4)((function(e){return e.data.data.myState})),(0,o.d4)((function(e){var t;return null===(t=e.data.data.player.Alias)||void 0===t?void 0:t.redline})),(0,c.useState)(!1)),m=(0,r.A)(p,2),v=m[0],b=m[1],E=function(){var e=(0,n.A)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.alias.value,e.prev=2,e.next=5,y.A.send("UpdateAlias",{app:"redline",alias:n,unique:!0});case 5:return e.next=7,e.sent.json();case 7:r=e.sent,a(r?"Alias Created":"Unable to Create Alias"),r&&l({type:"UPDATE_DATA",payload:{type:"player",id:"Alias",key:"redline",data:n}}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),a("Unable to Create Alias");case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return c.createElement("div",{className:t.wrapper},c.createElement("div",{className:t.header},c.createElement(h(),{onTypingDone:function(){b(!0)}},c.createElement("span",null,"Welcome Racer"))),c.createElement(u.A,{in:v},c.createElement("div",{className:t.body},c.createElement("p",null,"Set your alias to get started"),c.createElement("form",{onSubmit:E},c.createElement(s.A,{className:t.creatorInput,fullWidth:!0,label:"Alias",name:"alias",variant:"outlined",required:!0,inputProps:{maxLength:32}}),c.createElement(d.A,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Submit")),c.createElement("p",null,c.createElement("code",null,"Think hard, you may not change this")))))}}}]);