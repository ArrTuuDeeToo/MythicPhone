"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[4709],{64709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(28407),c=n(68175),a=n(73925),l=n(70232),i=n.n(l),o=n(55429),s=n(15647),u=n(48147),m=n(44557),p=n(85220),d=n(68209),f=n(26573),A=n(43502),g=n(78060),h=n(32455),b=n(23173),y=n(74552),v=n(59530),E=n(51698),w=n.n(E),x=n(61541),k=n(23470),B=n(87591);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=(0,y.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},emptyLogo:{width:"100%",fontSize:170,textAlign:"center",marginTop:"25%",color:"#30518c29"},emptyMsg:{color:e.palette.text.alt,width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"},listItem:{background:e.palette.secondary.dark,borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)",marginBottom:"5%"},successText:{color:e.palette.success.main},errorText:{color:e.palette.error.light},editField:{marginBottom:20,width:"100%"}}}));const N=(0,s.Ng)()((function(e){var t,n=D(),l=(0,k.MW)(),y=(0,s.d4)((function(e){return e.data.data.bankAccounts})),E=null==y?void 0:y.accounts,O=null==y?void 0:y.pendingBills,N=E&&E.filter((function(e){return"personal"==e.Type}))[0],T=(0,o.useState)(!1),j=(0,a.A)(T,2),I=j[0],L=j[1],S=(0,o.useState)({bill:0,withAccount:N.Account}),C=(0,a.A)(S,2),W=C[0],F=C[1],H=function(){var t=(0,r.A)(i().mark((function t(n){var r,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e.setLoading("Accepting Bill"),!((r=E&&E.filter((function(e){return e.Account==W.withAccount}))[0])&&r.Balance>=(null==W?void 0:W.billData.Amount))){t.next=22;break}return t.prev=4,t.next=7,x.A.send("Banking:AcceptBill",{bill:W.billId,account:W.withAccount});case 7:return t.next=9,t.sent.json();case 9:c=t.sent,l(c?"Bill Has Been Paid":"Error Paying Bill"),setTimeout((function(){return e.refreshAccounts()}),750),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),l("Error Paying Bill"),e.setLoading(!1);case 18:L(!1),F({bill:0,withAccount:N.Account}),t.next=24;break;case 22:l("Insufficient Funds to Pay Bill"),e.setLoading(!1);case 24:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=(0,r.A)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading("Dismissing Bill"),t.prev=1,t.next=4,x.A.send("Banking:DismissBill",{bill:n.Id});case 4:return t.next=6,t.sent.json();case 6:t.sent?(l("Bill Has Been Dismissed"),setTimeout((function(){e.refreshAccounts()}),750)):(l("Error Dismissing Bill"),e.setLoading(!1)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),l("Error Dismissing Bill"),e.setLoading(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return O.length>0?o.createElement("div",{className:n.wrapper},o.createElement("div",null,o.createElement(u.A,null,O.sort((function(e,t){return t.Timestamp-e.Timestamp})).map((function(e){return o.createElement(m.Ay,{key:e.Id,className:n.listItem},o.createElement(p.A,{primary:o.createElement("span",null,o.createElement("span",{className:n.successText},"$",e.Amount)," - ",e.Name),secondary:o.createElement("span",null,e.Account&&o.createElement("span",null,"Account Number: ",e.Account,".",o.createElement("br",null)),"Received ",o.createElement(w(),{unix:!0,date:e.Timestamp,fromNow:!0}),".",o.createElement("br",null),o.createElement("br",null),e.Description),secondaryTypographyProps:{maxWidth:"85%"}}),o.createElement(d.A,null,o.createElement(f.A,{className:n.errorText,onClick:function(){return M(e)}},o.createElement(v.g,{icon:["fas","xmark"]})),o.createElement(f.A,{className:n.successText,onClick:function(){return function(e){F({billData:e,billId:e.Id,withAccount:N.Account}),L(!0)}(e)}},o.createElement(v.g,{icon:["fas","check"]}))))})))),o.createElement(B.aF,{form:!0,open:I,title:"Accept Bill of $".concat(null===(t=W.billData)||void 0===t?void 0:t.Amount),submitLang:"Accept Bill",onAccept:H,onClose:function(){return L(!1)}},o.createElement(A.A,{className:n.editField},o.createElement(g.A,{id:"withAccount",name:"withAccount",value:W.withAccount,onChange:function(e){F(P(P({},W),{},(0,c.A)({},e.target.name,e.target.value)))}},E.map((function(e){var t;return o.createElement(h.A,{key:e.Account,value:e.Account,disabled:!(null!==(t=e.Permissions)&&void 0!==t&&t.WITHDRAW)},"".concat(function(e){switch(e.Type){case"personal":return"Personal Account";case"personal_savings":return"Personal Savings Account";default:return e.Name}}(e)," - ").concat(e.Account))}))),o.createElement(b.A,null,"Select the account that you wish to pay with.")))):o.createElement("div",{className:n.wrapper},o.createElement("div",{className:n.emptyLogo},o.createElement(v.g,{icon:["fas","tree-palm"]})),o.createElement("div",{className:n.emptyMsg},"No Pending Bills"))}))}}]);