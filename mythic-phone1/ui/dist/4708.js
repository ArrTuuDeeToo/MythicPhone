"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[4708,5048,8637,9804],{14708:(o,t,n)=>{n.r(t),n.d(t,{default:()=>i});var e=n(55429),r=n(15647),c=n(51959),a=(n(59530),n(65048)),l=n(98637),s=(n(19804),(0,c.A)((function(o){return{wrapper:{height:"100%",background:o.palette.secondary.main,overflowY:"auto",overflowX:"hidden",padding:10}}})));const i=(0,r.Ng)()((function(o){var t=s();return e.createElement("div",{className:t.wrapper},a.Categories.map((function(o,t){return e.createElement(l.default,{key:"category-".concat(t),category:o})})))}))},19804:(o,t,n)=>{n.r(t),n.d(t,{default:()=>h});var e=n(46186),r=n.n(e),c=n(82155),a=n.n(c),l=n(27433),s=n.n(l),i=n(88626),d=n.n(i),u=n(8990),k=n.n(u),b=n(89827),m=n.n(b),g=n(74543),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=k();r()(g.A,v);const h=g.A&&g.A.locals?g.A.locals:void 0},32941:(o,t,n)=>{n.d(t,{A:()=>m});var e=n(64180),r=n(86887),c=n(55429),a=n(87279),l=n(22209),s=n(89437),i=n(86476),d=n(48942),u=n(64922);const k=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],b={entering:{transform:"none"},entered:{transform:"none"}},m=c.forwardRef((function(o,t){const n=(0,s.A)(),m={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:g,appear:v=!0,children:h,easing:p,in:f,onEnter:y,onEntered:w,onEntering:x,onExit:E,onExited:A,onExiting:C,style:T,timeout:N=m,TransitionComponent:S=a.Ay}=o,I=(0,r.A)(o,k),B=c.useRef(null),W=(0,d.A)(B,(0,l.A)(h),t),z=o=>t=>{if(o){const n=B.current;void 0===t?o(n):o(n,t)}},R=z(x),L=z(((o,t)=>{(0,i.q)(o);const e=(0,i.c)({style:T,timeout:N,easing:p},{mode:"enter"});o.style.webkitTransition=n.transitions.create("transform",e),o.style.transition=n.transitions.create("transform",e),y&&y(o,t)})),j=z(w),H=z(C),O=z((o=>{const t=(0,i.c)({style:T,timeout:N,easing:p},{mode:"exit"});o.style.webkitTransition=n.transitions.create("transform",t),o.style.transition=n.transitions.create("transform",t),E&&E(o)})),P=z(A);return(0,u.jsx)(S,(0,e.A)({appear:v,in:f,nodeRef:B,onEnter:L,onEntered:j,onEntering:R,onExit:O,onExited:P,onExiting:H,addEndListener:o=>{g&&g(B.current,o)},timeout:N},I,{children:(o,t)=>c.cloneElement(h,(0,e.A)({style:(0,e.A)({transform:"scale(0)",visibility:"exited"!==o||f?void 0:"hidden"},b[o],T,h.props.style),ref:W},t))}))}))},65048:(o,t,n)=>{n.r(t),n.d(t,{Categories:()=>l});var e=n(6436),r=n(57756),c=n(34603),a=n(70031),l=[{label:"Services",color:e.A[500]},{label:"Want-To-Buy",color:r.A[500]},{label:"Want-To-Sell",color:c.A[500]},{label:"Help Wanted",color:a.A[500]}]},74543:(o,t,n)=>{n.d(t,{A:()=>c});var e=n(81364),r=n.n(e)()((function(o){return o[1]}));r.push([o.id,":root {\n    /* Base settings */\n    --ck-border-radius: 4px;\n    --ck-font-size-base: 14px;\n    \n    /* Custom colors for yellow theme */\n    --ck-custom-yellow: #f9a825;\n    --ck-custom-yellow-dark: #f57f17;\n    --ck-custom-yellow-light: #ffd95b;\n    --ck-custom-background: hsl(270, 1%, 29%);\n    --ck-custom-foreground: hsl(255, 3%, 18%);\n    --ck-custom-border: hsl(45, 70%, 50%);\n    --ck-custom-white: hsl(0, 0%, 100%);\n\n    /* Base colors */\n    --ck-color-base-foreground: var(--ck-custom-background);\n    --ck-color-focus-border: var(--ck-custom-yellow);\n    --ck-color-text: hsl(0, 0%, 98%);\n    --ck-color-shadow-drop: hsla(45, 80%, 50%, 0.2);\n    --ck-color-shadow-inner: hsla(45, 80%, 50%, 0.1);\n\n    /* Button states */\n    --ck-color-button-default-background: var(--ck-custom-background);\n    --ck-color-button-default-hover-background: hsl(270, 1%, 22%);\n    --ck-color-button-default-active-background: hsl(270, 2%, 20%);\n    --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);\n    --ck-color-button-default-disabled-background: var(--ck-custom-background);\n\n    /* Borders */\n    --ck-color-base-border: var(--ck-custom-border);\n    --ck-color-base-background: var(--ck-custom-background);\n\n    /* Button states - ON */\n    --ck-color-button-on-background: var(--ck-custom-yellow);\n    --ck-color-button-on-hover-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-active-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-active-shadow: var(--ck-custom-yellow-dark);\n    --ck-color-button-on-disabled-background: var(--ck-custom-yellow-light);\n\n    /* Action buttons */\n    --ck-color-button-action-background: var(--ck-custom-yellow);\n    --ck-color-button-action-hover-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-active-background: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-active-shadow: var(--ck-custom-yellow-dark);\n    --ck-color-button-action-disabled-background: var(--ck-custom-yellow-light);\n    --ck-color-button-action-text: var(--ck-custom-white);\n\n    /* Save/Cancel buttons */\n    --ck-color-button-save: var(--ck-custom-yellow);\n    --ck-color-button-cancel: hsl(15, 100%, 56%);\n\n    /* Dropdown and panels */\n    --ck-color-dropdown-panel-background: var(--ck-custom-background);\n    --ck-color-dropdown-panel-border: var(--ck-custom-yellow);\n    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);\n    --ck-color-split-button-hover-border: var(--ck-custom-yellow);\n\n    /* Input states */\n    --ck-color-input-background: var(--ck-custom-foreground);\n    --ck-color-input-border: var(--ck-custom-yellow-light);\n    --ck-color-input-text: hsl(0, 0%, 98%);\n    --ck-color-input-disabled-background: hsl(255, 4%, 21%);\n    --ck-color-input-disabled-border: hsl(250, 3%, 38%);\n    --ck-color-input-disabled-text: hsl(0, 0%, 46%);\n\n    /* Lists */\n    --ck-color-list-background: var(--ck-custom-background);\n    --ck-color-list-button-hover-background: var(--ck-custom-yellow-light);\n    --ck-color-list-button-on-background: var(--ck-custom-yellow);\n    --ck-color-list-button-on-background-focus: var(--ck-custom-yellow-dark);\n    --ck-color-list-button-on-text: var(--ck-color-base-background);\n\n    /* Panels and toolbars */\n    --ck-color-panel-background: var(--ck-custom-background);\n    --ck-color-panel-border: var(--ck-custom-border);\n    --ck-color-toolbar-background: var(--ck-custom-background);\n    --ck-color-toolbar-border: var(--ck-custom-yellow-light);\n\n    /* Tooltips and misc */\n    --ck-color-tooltip-background: var(--ck-custom-yellow-dark);\n    --ck-color-tooltip-text: var(--ck-custom-white);\n    --ck-color-image-caption-background: var(--ck-custom-yellow-light);\n    --ck-color-image-caption-text: hsl(0, 0%, 20%);\n    --ck-color-widget-blurred-border: var(--ck-custom-yellow-light);\n    --ck-color-widget-hover-border: var(--ck-custom-yellow);\n    --ck-color-widget-editable-focus-background: var(--ck-custom-white);\n    --ck-color-link-default: var(--ck-custom-yellow);\n}",""]);const c=r},98637:(o,t,n)=>{n.r(t),n.d(t,{default:()=>b});var e=n(55429),r=n(15647),c=n(32941),a=n(31699),l=n(1310),s=n(20500),i=n(51959),d=n(59530),u=n(64965),k=(0,i.A)((function(o){return{wrapper:{height:"fit-content",borderRadius:"12px",marginBottom:"16px",transition:"all 0.3s ease",overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.1)","&:hover":{transform:"translateY(-2px)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)","& $chevronIcon":{transform:"translateX(2px)"}}},header:{width:"100%",padding:"16px",minHeight:"60px",borderBottom:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center"},title:{fontSize:"1.25rem",fontWeight:600,color:"white",display:"flex",alignItems:"center",gap:"8px"},body:{padding:"16px",backgroundColor:"rgba(0,0,0,0.1)"},countText:{fontSize:"1rem",fontWeight:500,color:"rgba(255,255,255,0.9)"},emptyText:{fontSize:"1rem",color:"rgba(255,255,255,0.7)",fontStyle:"italic"},btn:{color:"white",backgroundColor:"rgba(255,255,255,0.1)","&:hover":{backgroundColor:"rgba(255,255,255,0.2)"}},chevronIcon:{transition:"transform 0.3s ease"},categoryIcon:{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"6px",marginRight:"8px"}}}));const b=(0,r.Ng)()((function(o){var t=o.category,n=k(),i=(0,u.W6)(),b=(0,r.d4)((function(o){return o.data.data.adverts})),m=Object.keys(b||{}).filter((function(o){return"0"!==o})).filter((function(o){return b[o].categories.includes(t.label)}));return e.createElement(c.A,{in:!0,timeout:500},e.createElement(a.A,{className:n.wrapper,style:{backgroundColor:t.color,cursor:"pointer"},onClick:function(){i.push("/apps/adverts/category-view/".concat(t.label))}},e.createElement("div",{className:n.header},e.createElement("div",{className:n.title},e.createElement("div",{className:n.categoryIcon},e.createElement(d.g,{icon:["fas",function(o){switch(o){case"Services":return"briefcase";case"Want-To-Buy":return"shopping-cart";case"Want-To-Sell":return"tag";case"Help Wanted":return"users";default:return"folder"}}(t.label)],size:"sm"})),t.label)),e.createElement("div",{className:n.body},e.createElement(l.Ay,{container:!0,alignItems:"center"},e.createElement(l.Ay,{item:!0,xs:10},m.length>0?e.createElement("div",{className:n.countText},"".concat(m.length," ").concat(1===m.length?"Advertisement":"Advertisements")):e.createElement("div",{className:n.emptyText},"No Advertisements")),e.createElement(l.Ay,{item:!0,xs:2,style:{textAlign:"right"}},e.createElement(s.A,{className:n.btn,size:"small"},e.createElement(d.g,{icon:["fas","chevron-right"],className:n.chevronIcon})))))))}))}}]);