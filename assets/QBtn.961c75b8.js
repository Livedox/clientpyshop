import{c as o,h as d,F as M,k as Y,t as G,q as D,r as J,x as z,o as Z,y as ee,g as te,s as E,a3 as ne,l as ae,m as le}from"./index.2b038f88.js";import{k as j,c as I,d as ue,a as ie,l as re,u as se,m as oe,i as ce,Q as A,f as de}from"./use-router-link.979e086c.js";const fe={size:{type:[Number,String],default:"1em"},color:String};function ve(e){return{cSize:o(()=>e.size in j?`${j[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var be=I({name:"QSpinner",props:{...fe,thickness:{type:Number,default:5}},setup(e){const{cSize:a,classes:l}=ve(e);return()=>d("svg",{class:l.value+" q-spinner-mat",width:a.value,height:a.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function me(e,a=250){let l=!1,r;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},a),r=e.apply(this,arguments)),r}}function N(e,a,l,r){l.modifiers.stop===!0&&D(e);const i=l.modifiers.color;let h=l.modifiers.center;h=h===!0||r===!0;const m=document.createElement("span"),c=document.createElement("span"),x=J(e),{left:S,top:q,width:p,height:n}=a.getBoundingClientRect(),g=Math.sqrt(p*p+n*n),f=g/2,k=`${(p-g)/2}px`,u=h?k:`${x.left-S-f}px`,v=`${(n-g)/2}px`,R=h?v:`${x.top-q-f}px`;c.className="q-ripple__inner",ie(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${R},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${i?" text-"+i:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),a.appendChild(m);const _=()=>{m.remove(),clearTimeout($)};l.abort.push(_);let $=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${k},${v},0) scale3d(1,1,1)`,c.style.opacity=.2,$=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,$=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(_),1)},275)},250)},50)}function K(e,{modifiers:a,value:l,arg:r}){const i=Object.assign({},e.cfg.ripple,a,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var ge=ue({name:"ripple",beforeMount(e,a){const l=a.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const r={cfg:l,enabled:a.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&N(i,e,r,i.qKeyEvent===!0)},keystart:me(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&M(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&N(i,e,r,!0)},300)};K(r,a),e.__qripple=r,Y(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,a){if(a.oldValue!==a.value){const l=e.__qripple;l!==void 0&&(l.enabled=a.value!==!1,l.enabled===!0&&Object(a.value)===a.value&&K(l,a))}},beforeUnmount(e){const a=e.__qripple;a!==void 0&&(a.abort.forEach(l=>{l()}),G(a,"main"),delete e._qripple)}});const W={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ye=Object.keys(W),he={align:{type:String,validator:e=>ye.includes(e)}};function ke(e){return o(()=>{const a=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${W[a]}`})}const Q={none:0,xs:4,sm:8,md:16,lg:24,xl:32},qe={xs:8,sm:10,md:14,lg:20,xl:24},pe=["button","submit","reset"],xe=/[^\s]\/[^\s]/,Ee=["flat","outline","push","unelevated"],we=(e,a)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":a,Ce={...re,...se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ee.reduce((e,a)=>(e[a]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...he.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Le(e){const a=oe(e,qe),l=ke(e),{hasRouterLink:r,hasLink:i,linkTag:h,linkAttrs:m,navigateOnClick:c}=ce({fallbackTag:"button"}),x=o(()=>{const u=e.fab===!1&&e.fabMini===!1?a.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(v=>v in Q?Q[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):u}),S=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=o(()=>e.disable!==!0&&e.loading!==!0),p=o(()=>q.value===!0?e.tabindex||0:-1),n=o(()=>we(e,"standard")),g=o(()=>{const u={tabindex:p.value};return i.value===!0?Object.assign(u,m.value):pe.includes(e.type)===!0&&(u.type=e.type),h.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),r.value!==!0&&xe.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),f=o(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const v=e.round===!0?"round":`rectangle${S.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${v}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:f,style:x,innerClasses:k,attributes:g,hasLink:i,linkTag:h,navigateOnClick:c,isActionable:q}}const{passiveCapture:b}=ae;let w=null,C=null,L=null;var Te=I({name:"QBtn",props:{...Ce,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:a,emit:l}){const{proxy:r}=te(),{classes:i,style:h,innerClasses:m,attributes:c,hasLink:x,linkTag:S,navigateOnClick:q,isActionable:p}=Le(e),n=z(null),g=z(null);let f=null,k,u=null;const v=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=o(()=>({center:e.round})),$=o(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),F=o(()=>{if(e.loading===!0)return{onMousedown:B,onTouchstart:B,onClick:B,onKeydown:B,onKeyup:B};if(p.value===!0){const t={onClick:O,onKeydown:V,onMousedown:H};if(r.$q.platform.has.touch===!0){const s=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${s}`]=X}return t}return{onClick:E}}),U=o(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:h.value,...c.value,...F.value}));function O(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const s=document.activeElement;if(e.type==="submit"&&s!==document.body&&n.value.contains(s)===!1&&s.contains(n.value)===!1){n.value.focus();const P=()=>{document.removeEventListener("keydown",E,!0),document.removeEventListener("keyup",P,b),n.value!==null&&n.value.removeEventListener("blur",P,b)};document.addEventListener("keydown",E,!0),document.addEventListener("keyup",P,b),n.value.addEventListener("blur",P,b)}}q(t)}}function V(t){n.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&C!==n.value&&(C!==null&&T(),t.defaultPrevented!==!0&&(n.value.focus(),C=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),n.value.addEventListener("blur",y,b)),E(t)))}function X(t){n.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(w!==n.value&&(w!==null&&T(),w=n.value,f=t.target,f.addEventListener("touchcancel",y,b),f.addEventListener("touchend",y,b)),k=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,k=!1},200)))}function H(t){n.value!==null&&(t.qSkipRipple=k===!0,l("mousedown",t),t.defaultPrevented!==!0&&L!==n.value&&(L!==null&&T(),L=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,b)))}function y(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(C===n.value&&M(t,[13,32])===!0){const s=new MouseEvent("click",t);s.qKeyEvent=!0,t.defaultPrevented===!0&&le(s),t.cancelBubble===!0&&D(s),n.value.dispatchEvent(s),E(t),t.qKeyEvent=!0}l("keyup",t)}T()}}function T(t){const s=g.value;t!==!0&&(w===n.value||L===n.value)&&s!==null&&s!==document.activeElement&&(s.setAttribute("tabindex",-1),s.focus()),w===n.value&&(f!==null&&(f.removeEventListener("touchcancel",y,b),f.removeEventListener("touchend",y,b)),w=f=null),L===n.value&&(document.removeEventListener("mouseup",y,b),L=null),C===n.value&&(document.removeEventListener("keyup",y,!0),n.value!==null&&n.value.removeEventListener("blur",y,b),C=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function B(t){E(t),t.qSkipRipple=!0}return Z(()=>{T(!0)}),Object.assign(r,{click:O}),()=>{let t=[];e.icon!==void 0&&t.push(d(A,{name:e.icon,left:e.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"})),v.value===!0&&t.push(d("span",{class:"block"},[e.label])),t=de(a.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(d(A,{name:e.iconRight,right:e.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"}));const s=[d("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&s.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),s.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&s.push(d(ne,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},a.loading!==void 0?a.loading():[d(be)])]:null)),ee(d(S.value,U.value,s),[[ge,R.value,void 0,_.value]])}}});export{Te as Q,be as a};
