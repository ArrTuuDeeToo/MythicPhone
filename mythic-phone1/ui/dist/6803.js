"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[6803],{26803:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(73925),r=n(55429),c=n(15647),l=n(24187),o=n(6129),s=n(40178),i=n(24209),u=n(48147),m=n(44557),d=n(85220),p=n(49999),y=n(74552),f=n(59530),E=n(41655),A=n.n(E),g=n(87591),h=(0,y.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,"& span":{marginLeft:5,fontSize:12,color:e.palette.text.alt,"&::before":{content:'"("'},"&::after":{content:'")"'}}},track:{background:e.palette.secondary.dark},youindic:{color:"gold"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},owned:{color:"gold",marginLeft:5}}}));const k=function(e){var t=h(),n=(0,c.d4)((function(e){var t;return null===(t=e.data.data.player.Alias)||void 0===t?void 0:t.redline})),y=(0,c.d4)((function(e){return e.data.data.tracks})),E=(0,c.d4)((function(e){return e.race.races})).filter((function(e){return 2==e.state})).sort((function(e,t){return t.time-e.time})),k=(0,r.useState)(null),v=(0,a.A)(k,2),S=v[0],w=v[1],N=(0,r.useState)(null),b=(0,a.A)(N,2),x=b[0],R=b[1];return r.createElement("div",{className:t.wrapper},r.createElement("div",null,E.length>0?E.map((function(e,a){var c=y.filter((function(t){return t._id==e.track}))[0];return c?r.createElement(l.A,{key:"race-".concat(a),className:t.track,expanded:x===a,onChange:x===a?function(){return R(null)}:function(){return R(a)}},r.createElement(o.A,{expandIcon:r.createElement(f.g,{icon:["fas","chevron-down"]})},r.createElement(s.A,{className:t.heading},e.name,null!=e.racers[n]&&r.createElement("span",{className:t.youindic},"*")),r.createElement(s.A,{className:t.secondaryHeading},c.Name)),r.createElement(i.A,null,r.createElement(u.A,null,r.createElement(m.Ay,null,r.createElement(d.A,{primary:"Name",secondary:e.name})),r.createElement(m.Ay,null,r.createElement(d.A,{primary:"Host",secondary:"".concat(e.host)})),r.createElement(m.Ay,null,r.createElement(d.A,{primary:"Track",secondary:"".concat(c.Name," (").concat(c.Distance,")")})),r.createElement(m.Ay,null,r.createElement(d.A,{primary:"# of Laps",secondary:e.laps})),r.createElement(m.Ay,null,r.createElement(d.A,{primary:"Racers",secondary:Object.keys(e.racers).length>0?"".concat(Object.keys(e.racers).length," Racers"):null})),r.createElement(m.Ay,null,r.createElement(u.A,null,r.createElement(m.Ay,null,r.createElement(p.A,{variant:"contained",color:"primary",onClick:function(){return w(e)}},"View Racers"))))))):null})):r.createElement("div",{className:t.emptyMsg},"No Recent Races"),r.createElement(g.aF,{open:null!=S,title:"Race Results",onClose:function(){return w(null)}},null!=S&&r.createElement(u.A,null,Object.keys(S.racers).filter((function(e){return S.racers[e].finished})).sort((function(e,t){var n,a;return(null===(n=S.racers[e])||void 0===n?void 0:n.place)-(null===(a=S.racers[t])||void 0===a?void 0:a.place)})).map((function(e){var n=A().duration(S.racers[e].fastest.lapEnd-S.racers[e].fastest.lapStart);return r.createElement(m.Ay,null,r.createElement(d.A,{primary:r.createElement("span",null,"#".concat(S.racers[e].place," ").concat(e),Boolean(S.racers[e].isOwned)&&r.createElement(f.g,{className:t.owned,icon:["fas","award"]})),secondary:r.createElement("div",null,r.createElement("span",null,"Cash: $".concat(S.racers[e].reward.cash).concat(S.racers[e].reward.crypto>0?", $".concat(S.racers[e].reward.coin,": ").concat(S.racers[e].reward.crypto):"")),r.createElement("div",null,"Fastest Lap:"," ","".concat(String(n.hours()).padStart(2,"0"),":").concat(String(n.minutes()).padStart(2,"0"),":").concat(String(n.seconds()).padStart(2,"0"),":").concat(String(n.milliseconds()).padStart(3,"0"))))}))})),Object.keys(S.racers).filter((function(e){return!S.racers[e].finished})).map((function(e){return r.createElement(m.Ay,null,r.createElement(d.A,{primary:"".concat(e),secondary:"DNF"}))}))))))}}}]);