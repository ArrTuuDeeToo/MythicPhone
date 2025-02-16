"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3685,4711,5048,9804],{23685:(o,e,t)=>{t.r(e),t.d(e,{default:()=>d});var n=t(73925),r=t(55429),c=t(15647),a=t(74552),l=t(59530),s=t(27043),u=(t(19804),t(14711)),i=(0,a.A)((function(o){return{wrapper:{height:"100%",background:o.palette.secondary.main,overflowY:"auto",overflowX:"hidden",padding:"8px 4px"},emptyWrapper:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:o.palette.text.secondary},emptyMsg:{width:"100%",textAlign:"center",fontSize:"1.25rem",fontWeight:600,color:"#f9a825",marginTop:"8px"},emptyIcon:{fontSize:"3rem",color:"#f9a825",opacity:.5,marginBottom:"16px"},emptySubtext:{fontSize:"0.875rem",color:o.palette.text.secondary,marginTop:"8px",textAlign:"center"},loadingWrapper:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},advertsWrapper:{"& > *:not(:last-child)":{marginBottom:"12px"}}}}));const d=(0,c.Ng)()((function(o){var e=o.del,t=i(),a=(0,c.d4)((function(o){return o.data.data.adverts})),d=(0,r.useState)(!0),k=(0,n.A)(d,2),m=k[0],p=k[1];(0,r.useEffect)((function(){var o=setTimeout((function(){p(!1)}),500);return function(){return clearTimeout(o)}}),[]);var b=Object.keys(a||{}).filter((function(o){return"0"!==o})),g=b.sort((function(o,e){var t=a[o];return a[e].time-t.time}));return m?r.createElement("div",{className:t.loadingWrapper},r.createElement(s.A,{style:{color:"#f9a825"}})):b.length?r.createElement("div",{className:t.wrapper},r.createElement("div",{className:t.advertsWrapper},g.map((function(o,t){return r.createElement(u.default,{key:"advert-".concat(t),advert:a[o],del:e})})))):r.createElement("div",{className:t.emptyWrapper},r.createElement(l.g,{icon:["fas","newspaper"],className:t.emptyIcon}),r.createElement("div",{className:t.emptyMsg},"No Advertisements"),r.createElement("div",{className:t.emptySubtext},"Be the first to post an advertisement!"))}))},14711:(o,e,t)=>{t.r(e),t.d(e,{default:()=>y});var n=t(28407),r=t(70232),c=t.n(r),a=t(55429),l=t(15647),s=t(64965),u=t(28744),i=t(79111),d=t(26573),k=t(74552),m=t(59530),p=t(51698),b=t.n(p),g=t(69796),v=t(23470),f=t(61541),h=(t(65048),(0,k.A)((function(o){return{convo:{width:"100%",background:o.palette.secondary.dark,padding:"12px 16px",margin:"12px auto",transition:"all 0.3s ease",borderRadius:"14px",border:"1px solid rgba(255,255,255,0.1)","&:hover":{transform:"translateY(-2px)",cursor:"pointer"}},title:{fontSize:"18px",fontWeight:500,color:"#f9a825",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},price:{color:"#4CAF50",fontSize:"16px",fontWeight:500,"&::before":{content:'"$"',marginRight:"2px"}},yours:{color:"#f9a825",fontSize:"14px",marginRight:"4px"},postedTime:{fontSize:"14px",color:"rgba(255,255,255,0.5)"},authorInfo:{display:"flex",alignItems:"center",justifyContent:"flex-end",fontSize:"14px",color:"rgba(255,255,255,0.7)"},actionButton:{padding:"8px",color:"rgba(255,255,255,0.7)","&:hover":{backgroundColor:"rgba(255,255,255,0.1)"}}}})));const y=(0,l.Ng)()((function(o){var e,t=o.advert,r=h(),k=(0,s.W6)(),p=(0,v.MW)(),y=(0,l.d4)((function(o){return o.data.data.player.Source})),w=(0,l.d4)((function(o){return o.call.call})),x=function(){var o=(0,n.A)(c().mark((function o(e){return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.stopPropagation(),t.id!==y){o.next=3;break}return o.abrupt("return");case 3:if(null!=w){o.next=17;break}return o.prev=4,o.next=7,f.A.send("CreateCall",{number:t.number,isAnon:!1});case 7:return o.next=9,o.sent.json();case 9:o.sent?k.push("/apps/phone/call/".concat(t.number)):p("Unable To Start Call"),o.next=17;break;case 13:o.prev=13,o.t0=o.catch(4),console.log(o.t0),p("Unable To Start Call");case 17:case"end":return o.stop()}}),o,null,[[4,13]])})));return function(e){return o.apply(this,arguments)}}(),A=(e=t.categories).includes("Services")?"rgba(76, 175, 80, 0.2)":e.includes("Want-To-Buy")?"rgba(244, 67, 54, 0.2)":e.includes("Want-To-Sell")?"rgba(33, 150, 243, 0.2)":e.includes("Help Wanted")?"rgba(255, 152, 0, 0.2)":"transparent";return a.createElement(u.A,{className:r.convo,onClick:function(o){o.target.closest("button")||k.push("/apps/adverts/view/".concat(t.id))},style:{backgroundColor:A}},a.createElement(i.Ay,{container:!0,spacing:2,alignItems:"center"},a.createElement(i.Ay,{item:!0,xs:12},a.createElement("div",{className:r.title},t.title)),a.createElement(i.Ay,{item:!0,xs:12,style:{textAlign:"right"}},t.price?a.createElement(g.A,{className:r.price,value:t.price,displayType:"text",thousandSeparator:!0}):null),a.createElement(i.Ay,{item:!0,xs:6},a.createElement(b(),{className:r.postedTime,interval:6e4,fromNow:!0,date:+t.time})),a.createElement(i.Ay,{item:!0,xs:6},a.createElement("div",{className:r.authorInfo},t.id===y&&a.createElement("span",{className:r.yours},"(Your Ad)"),a.createElement("span",{style:{marginRight:"8px"}},t.author),t.id!==y&&a.createElement(a.Fragment,null,a.createElement(d.A,{className:r.actionButton,onClick:x,size:"small"},a.createElement(m.g,{icon:["fas","phone"],size:"xs"})),a.createElement(d.A,{className:r.actionButton,onClick:function(o){o.stopPropagation(),t.id!==y&&k.push("/apps/messages/convo/".concat(t.number))},size:"small"},a.createElement(m.g,{icon:["fas","comment-sms"],size:"xs"})))))))}))},65048:(o,e,t)=>{t.r(e),t.d(e,{Categories:()=>l});var n=t(5573),r=t(8901),c=t(65412),a=t(25384),l=[{label:"Services",color:n.A[500]},{label:"Want-To-Buy",color:r.A[500]},{label:"Want-To-Sell",color:c.A[500]},{label:"Help Wanted",color:a.A[500]}]},74543:(o,e,t)=>{t.d(e,{A:()=>c});var n=t(81364),r=t.n(n)()((function(o){return o[1]}));r.push([o.id,":root {\n    /* Base settings */\n    --ck-border-radius: 4px;\n    --ck-font-size-base: 14px;\n    \n    /* Custom colors for yellow theme */\n    --ck-custom-yellow: #f9a825;\n    --ck-custom-yellow-dark: #f57f17;\n    --ck-custom-yellow-light: #ffd95b;\n    --ck-custom-background: hsl(270, 1%, 29%);\n    --ck-custom-foreground: hsl(255, 3%, 18%);\n    --ck-custom-border: hsl(45, 70%, 50%);\n    --ck-custom-white: hsl(0, 0%, 100%);\n\n    /* Base colors */\n    --ck-color-base-foreground: var(--ck-custom-background);\n    --ck-color-focus-border: var(--ck-custom-yellow);\n    --ck-color-text: hsl(0, 0%, 98%);\n    --ck-color-shadow-drop: hsla(45, 80%, 50%, 0.2);\n    --ck-color-shadow-inner: hsla(45, 80%, 50%, 0.1);\n\n    /* Button states */\n    --ck-color-button-default-background: var(--ck-custom-background);\n    --ck-color-button-default-hover-background: hsl(270, 1%, 22%);\n    --ck-color-button-default-active-background: hsl(270, 2%, 20%);\n    --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);\n    --ck-color-button-default-disabled-background: var(--ck-custom-background);\n\n    /* Borders */\n    --ck-color-base-border: var(--ck-custom-border);\n    --ck-color-base-background: var(--ck-custom-background);\n\n    /* Button states - ON */\n    --ck-color-button-on-background: var(--ck-custom-yellow);\n    --ck-color-button-on-hover-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-active-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-active-shadow: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-disabled-background: var(--ck-custom-yellow-light);\n\n    /* Action buttons */\n    --ck-color-button-action-background: var(--ck-custom-yellow);\n    --ck-color-button-action-hover-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-active-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-active-shadow: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-disabled-background: var(--ck-custom-yellow-light);\n    --ck-color-button-action-text: var(--ck-custom-white);\n\n    /* Save/Cancel buttons */\n    --ck-color-button-save: var(--ck-custom-yellow);\n    --ck-color-button-cancel: hsl(15, 100%, 56%);\n\n    /* Dropdown and panels */\n    --ck-color-dropdown-panel-background: var(--ck-custom-background);\n    --ck-color-dropdown-panel-border: var(--ck-custom-yellow);\n    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);\n    --ck-color-split-button-hover-border: var(--ck-custom-yellow);\n\n    /* Input states */\n    --ck-color-input-background: var(--ck-custom-foreground);\n    --ck-color-input-border: var(--ck-custom-yellow-light);\n    --ck-color-input-text: hsl(0, 0%, 98%);\n    --ck-color-input-disabled-background: hsl(255, 4%, 21%);\n    --ck-color-input-disabled-border: hsl(250, 3%, 38%);\n    --ck-color-input-disabled-text: hsl(0, 0%, 46%);\n\n    /* Lists */\n    --ck-color-list-background: var(--ck-custom-background);\n    --ck-color-list-button-hover-background: var(--ck-custom-yellow-light);\n    --ck-color-list-button-on-background: var(--ck-custom-yellow);\n    --ck-color-list-button-on-background-focus: var(--ck-custom-yellow-dark);\n    --ck-color-list-button-on-text: var(--ck-color-base-background);\n\n    /* Panels and toolbars */\n    --ck-color-panel-background: var(--ck-custom-background);\n    --ck-color-panel-border: var(--ck-custom-border);\n    --ck-color-toolbar-background: var(--ck-custom-background);\n    --ck-color-toolbar-border: var(--ck-custom-yellow-light);\n\n    /* Tooltips and misc */\n    --ck-color-tooltip-background: var(--ck-custom-yellow-dark);\n    --ck-color-tooltip-text: var(--ck-custom-white);\n    --ck-color-image-caption-background: var(--ck-custom-yellow-light);\n    --ck-color-image-caption-text: hsl(0, 0%, 20%);\n    --ck-color-widget-blurred-border: var(--ck-custom-yellow-light);\n    --ck-color-widget-hover-border: var(--ck-custom-yellow);\n    --ck-color-widget-editable-focus-background: var(--ck-custom-white);\n    --ck-color-link-default: var(--ck-custom-yellow);\n}",""]);const c=r},19804:(o,e,t)=>{t.r(e),t.d(e,{default:()=>v});var n=t(46186),r=t.n(n),c=t(82155),a=t.n(c),l=t(27433),s=t.n(l),u=t(88626),i=t.n(u),d=t(8990),k=t.n(d),m=t(89827),p=t.n(m),b=t(74543),g={};g.styleTagTransform=p(),g.setAttributes=i(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=k();r()(b.A,g);const v=b.A&&b.A.locals?b.A.locals:void 0}}]);