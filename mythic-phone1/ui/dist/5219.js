"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5219,9440],{29440:(e,t,n)=>{n.r(t),n.d(t,{getActualRemainingAmount:()=>r,getLoanIdentifierType:()=>o,getLoanTypeName:()=>a,getNextPaymentAmount:()=>i});var a=function(e){switch(e){case"vehicle":return"Vehicle";case"property":return"Property";default:return"Asset"}},o=function(e){switch(e){case"vehicle":return"Vehicle VIN";case"property":return"Property ID";default:return"Asset ID"}},r=function(e){if(e.Remaining>0){var t=(100+e.InterestRate)/100;return Math.ceil(e.Remaining*t)}return 0},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.Remaining>0){var n=(100+e.InterestRate)/100,a=e.TotalPayments-e.PaidPayments;e.MissedPayments>1&&1===t&&(t=e.MissedPayments),t>a&&(t=a);var o=e.Remaining/a*t*n;return Math.ceil(o)}return 0}},15219:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(28407),o=n(73925),r=n(68175),i=n(70232),s=n.n(i),l=n(55429),c=n(15647),m=n(142),u=n(79111),d=n(32764),p=n(26573),y=n(74552),g=n(64965),f=n(59530),h=n(87591),A=n(51698),x=n.n(A),b=n(61541),P=n(23470),k=n(29440);var E=(0,y.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#30518c"},titleBar:{padding:15,fontSize:20,lineHeight:"50px",height:78},subBar:{padding:15,textAlign:"left",lineHeight:"30px",backgroundColor:e.palette.secondary.light},accountBody:(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({padding:20,overflowY:"auto",overflowX:"hidden"},"padding",10),"&::-webkit-scrollbar",{width:6}),"&::-webkit-scrollbar-thumb",{background:"#ffffff52"}),"&::-webkit-scrollbar-thumb:hover",{background:e.palette.primary.main}),"&::-webkit-scrollbar-track",{background:"transparent"}),accountBtn:{width:"90%",padding:10,margin:"2.5% auto",position:"relative",height:75,background:e.palette.secondary.dark,willChange:"background",transition:"background 400ms",borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)","&:hover":{cursor:"pointer"},"&:hover:not(.disabled)":{background:"rgba(255, 255, 255, 0.01)"},"&.disabled":{opacity:"60%",color:e.palette.secondary.contrastText}},content:{position:"absolute",top:0,bottom:0,left:0,right:0,height:"fit-content",width:"100%",padding:"5px 7.5% 5px 2%",textAlign:"center",margin:"auto",fontSize:28,"& svg":{color:e.palette.primary.main,fontSize:35}},currency:{color:e.palette.success.main},editField:{marginBottom:20,width:"100%","& p":{marginTop:0}}}}));const v=function(e){var t,n=(0,P.MW)(),r=(0,g.W6)(),i=E(),y=e.match.params.loan,A=(0,c.d4)((function(e){return e.data.data.bankLoans.loans})),v=A&&A.find((function(e){return e._id==y}));if(!v)return null;var w=(0,l.useState)(!1),N=(0,o.A)(w,2),S=N[0],L=N[1],M=(0,l.useState)(!1),C=(0,o.A)(M,2),I=C[0],B=C[1],R=(0,l.useState)({}),T=(0,o.A)(R,2),D=T[0],z=T[1],$=function(e){if(e){var t=1;if(v.MissedPayments>1){var n=v.TotalPayments-v.PaidPayments;(t=v.MissedPayments)>n&&(t=n)}z({minWeeks:t,weeks:t,allowAhead:!0})}else z({minWeeks:1,weeks:1,allowAhead:!1});B(!0)},F=function(){var e=(0,a.A)(s().mark((function e(t){var a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),B(!1),L(!0),e.prev=3,e.next=6,b.A.send("Loans:Payment",{loan:v._id,weeks:D.weeks,paymentAhead:D.allowAhead});case 6:return e.next=8,e.sent.json();case 8:(a=e.sent)&&a.success?(a.paidOff?n("Loan Paid Off Completely!"):n("Loan Payment of $".concat(a.paymentAmount," Successful")),r.goBack()):n(null!==(o=a.message)&&void 0!==o?o:"Loan Payment Failed"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),n("Loan Payment Failed");case 15:L(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return l.createElement(l.Fragment,null,l.createElement("div",{className:i.wrapper},l.createElement(m.A,{position:"static",className:i.header},l.createElement(u.Ay,{container:!0,className:i.titleBar},l.createElement(u.Ay,{item:!0,xs:7,style:{lineHeight:"50px"}},"Loans - ",(0,k.getLoanTypeName)(v.Type)),l.createElement(u.Ay,{item:!0,xs:5,style:{textAlign:"right"}},l.createElement(d.A,{title:v._id},l.createElement("span",null,l.createElement(p.A,null,l.createElement(f.g,{icon:["fas",null!==(t={vehicle:"car-side",property:"house-building"}[v.Type])&&void 0!==t?t:"coin"]})))))),!S&&v&&l.createElement(u.Ay,{container:!0,className:i.subBar},l.createElement(u.Ay,{item:!0,xs:12},(0,k.getLoanIdentifierType)(v.Type),": ",v.AssetIdentifier),l.createElement(u.Ay,{item:!0,xs:6},"Remaining:"," ",l.createElement("span",{className:i.currency},"$",(0,k.getActualRemainingAmount)(v).toLocaleString("en-US"))),l.createElement(u.Ay,{item:!0,xs:6},"Paid:"," ",l.createElement("span",{className:i.currency},"$",v.Paid.toLocaleString("en-US"))),l.createElement(u.Ay,{item:!0,xs:6},"Payments Paid: ",v.PaidPayments),l.createElement(u.Ay,{item:!0,xs:6},"Payments Remaining: ",v.TotalPayments-v.PaidPayments),l.createElement(u.Ay,{item:!0,xs:6},"Interest Rate: ",v.InterestRate,"%"),v.MissablePayments>0&&l.createElement(u.Ay,{item:!0,xs:6},"Missed Payments: ",v.MissedPayments,"/",v.MissablePayments),l.createElement(u.Ay,{item:!0,xs:12},l.createElement("br",null)),l.createElement(u.Ay,{item:!0,xs:12},"Last Payment:"," ",v.LastPayment?l.createElement(x(),{unix:!0,date:v.LastPayment,calendar:!0}):"No Payments Have Been Made"),l.createElement(u.Ay,{item:!0,xs:12},"Next Payment Due:"," ",v.NextPayment?l.createElement(x(),{unix:!0,date:v.NextPayment,calendar:!0}):"No More Payments are Due"),v.Remaining>0&&v.NextPayment&&l.createElement(u.Ay,{item:!0,xs:12},"Next Payment Amount:"," ",l.createElement("span",{className:i.currency},"$",(0,k.getNextPaymentAmount)(v).toLocaleString("en-US"))),(v.Defaulted||v.MissedPayments>0)&&l.createElement(u.Ay,{item:!0,xs:12},l.createElement("br",null),l.createElement("b",null,v.Defaulted?"This loan has been defaulted because you missed to many payments. The asset(s) relating to this loan have been seized temporarily until you pay the amount missed. Failing to pay within a month of the loan being defaulted, your asset(s) are at high risk of being permanently seized.":v.MissedPayments>0&&"You have missed the last ".concat(v.MissedPayments>1?"".concat(v.MissedPayments," payments"):"payment"," for this loan. If ").concat(v.MissablePayments," consecutive payments are missed, the loan will be defaulted on and the asset(s) relating to this loan will be seized."))))),S?l.createElement(h.aH,{static:!0,text:"Completing Loan Payment..."}):v?l.createElement("div",{className:i.accountBody},v.Defaulted?l.createElement(u.Ay,{container:!0},l.createElement(u.Ay,{item:!0,xs:12,className:i.accountBtn,onClick:function(){return $()}},l.createElement("div",{className:i.content},l.createElement(u.Ay,{container:!0,direction:"row",justifyContent:"center",alignItems:"center"},l.createElement(u.Ay,{item:!0,xs:2},l.createElement(f.g,{icon:["fas","sack-dollar"]})),l.createElement(u.Ay,{item:!0,xs:10},"Pay Loan Debt"))))):l.createElement(u.Ay,{container:!0},l.createElement(u.Ay,{item:!0,xs:12,className:i.accountBtn,onClick:function(){return $()}},l.createElement("div",{className:i.content},l.createElement(u.Ay,{container:!0,direction:"row",justifyContent:"center",alignItems:"center"},l.createElement(u.Ay,{item:!0,xs:2},l.createElement(f.g,{icon:["fas","circle-dollar"]})),l.createElement(u.Ay,{item:!0,xs:10},"Make Next Payment")))))):l.createElement("p",null,"There was big fuckup oh no.")),l.createElement(h.aF,{form:!0,open:I,title:"Loan Payment - $".concat((0,k.getNextPaymentAmount)(v,D.weeks).toLocaleString("en-US")),submitLang:"Make Payment",closeLang:"Cancel",onAccept:F,onClose:function(){return B(!1)}},l.createElement("p",{className:i.editField},"Loan Payments are taken from your Personal Checking Account. Due Payment: $",(0,k.getNextPaymentAmount)(v,D.weeks).toLocaleString("en-US"),".")))}},142:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(86887),o=n(64180),r=n(55429),i=n(1551),s=n(50035),l=n(93119),c=n(88594),m=n(69921),u=n(28744),d=n(35457);function p(e){return(0,d.A)("MuiAppBar",e)}(0,n(40725).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var y=n(64922);const g=["className","color","enableColorOnDark","position"],f=(0,l.Ay)(u.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,m.A)(n.position)}`],t[`color${(0,m.A)(n.color)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:e.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),h=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiAppBar"}),{className:r,color:l="primary",enableColorOnDark:u=!1,position:d="fixed"}=n,h=(0,a.A)(n,g),A=(0,o.A)({},n,{color:l,position:d,enableColorOnDark:u}),x=(e=>{const{color:t,position:n,classes:a}=e,o={root:["root",`color${(0,m.A)(t)}`,`position${(0,m.A)(n)}`]};return(0,s.A)(o,p,a)})(A);return(0,y.jsx)(f,(0,o.A)({square:!0,component:"header",ownerState:A,elevation:4,className:(0,i.A)(x.root,r,"fixed"===d&&"mui-fixed"),ref:t},h))}))}}]);