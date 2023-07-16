import{u as se,w as Z,a as ae,o as re,Z as Me,g as W,x as N,c as x,$ as Ve,a0 as qe,a1 as Ee,s as de,n as Y,f as Re,a2 as Fe,C as _e,h as M,m as ee,a3 as Be,a4 as $e,d as Pe,q as he,A as Oe,v as X,z as Te,B as Ie}from"./index.2b038f88.js";import{Q as pe,h as G,c as ge,b as je}from"./use-router-link.979e086c.js";import{a as ze}from"./QBtn.961c75b8.js";import{u as De,a as Le}from"./use-dark.bee4bffd.js";function Ne({validate:e,resetValidation:t,requiresQForm:u}){const i=se(Me,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),Z(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.bindComponent(d)}),re(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ye=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>ye.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>be.test(e)||te.test(e),hexaOrRgbaColor:e=>ye.test(e)||ne.test(e),anyColor:e=>xe.test(e)||te.test(e)||ne.test(e)},Ze=[!0,!1,"ondemand"],Ke={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ze.includes(e)}};function Ue(e,t){const{props:u,proxy:i}=W(),f=N(!1),d=N(null),c=N(null);Ne({validate:A,resetValidation:v});let m=0,_;const q=x(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),k=x(()=>u.disable!==!0&&q.value===!0),g=x(()=>u.error===!0||f.value===!0),U=x(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);Z(()=>u.modelValue,()=>{D()}),Z(()=>u.reactiveRules,j=>{j===!0?_===void 0&&(_=Z(()=>u.rules,()=>{D(!0)})):_!==void 0&&(_(),_=void 0)},{immediate:!0}),Z(e,j=>{j===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,k.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function v(){m++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function A(j=u.modelValue){if(k.value!==!0)return!0;const $=++m,F=t.value!==!0?()=>{c.value=!0}:()=>{},V=(w,C)=>{w===!0&&F(),f.value=w,d.value=C||null,t.value=!1},E=[];for(let w=0;w<u.rules.length;w++){const C=u.rules[w];let T;if(typeof C=="function"?T=C(j,ue):typeof C=="string"&&ue[C]!==void 0&&(T=ue[C](j)),T===!1||typeof T=="string")return V(!0,T),!1;T!==!0&&T!==void 0&&E.push(T)}return E.length===0?(V(!1),!0):(t.value=!0,Promise.all(E).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return $===m&&V(!1),!0;const C=w.find(T=>T===!1||typeof T=="string");return $===m&&V(C!==void 0,C),C===void 0},w=>($===m&&(console.error(w),V(!0)),!1)))}function D(j){k.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&j!==!0)&&I()}const I=Ve(A,0);return re(()=>{_!==void 0&&_(),I.cancel()}),Object.assign(i,{resetValidation:v,validate:A}),qe(i,"hasError",()=>g.value),{isDirtyModel:c,hasRules:q,hasError:g,errorMessage:U,validate:A,resetValidation:v}}const ke=/^on[A-Z]/;function He(e,t){const u={listeners:N({}),attributes:N({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ke.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ke.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Ee(i),i(),u}let ie,oe=0;const z=new Array(256);for(let e=0;e<256;e++)z[e]=(e+256).toString(16).substring(1);const Qe=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),Ce=4096;function Ye(){(ie===void 0||oe+16>Ce)&&(oe=0,ie=Qe(Ce));const e=Array.prototype.slice.call(ie,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,z[e[0]]+z[e[1]]+z[e[2]]+z[e[3]]+"-"+z[e[4]]+z[e[5]]+"-"+z[e[6]]+z[e[7]]+"-"+z[e[8]]+z[e[9]]+"-"+z[e[10]]+z[e[11]]+z[e[12]]+z[e[13]]+z[e[14]]+z[e[15]]}let fe=[],We=[];function me(e){We.length===0?e():fe.push(e)}function Je(e){fe=fe.filter(t=>t!==e)}function ce(e){return e===void 0?`f_${Ye()}`:e}function ve(e){return e!=null&&(""+e).length!==0}const Xe={...De,...Ke,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ge=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function et(){const{props:e,attrs:t,proxy:u,vnode:i}=W();return{isDark:Le(e,u.$q),editable:x(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:He(t,i),targetUid:N(ce(e.for)),rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function tt(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=W(),{$q:c}=d;let m=null;e.hasValue===void 0&&(e.hasValue=x(()=>ve(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=x(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:_,hasRules:q,hasError:k,errorMessage:g,resetValidation:U}=Ue(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?x(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):x(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=x(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),D=x(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=x(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=x(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=x(()=>t.labelSlot===!0||t.label!==void 0),F=x(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),V=x(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=x(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});Z(()=>t.for,n=>{e.targetUid.value=ce(n)});function w(){const n=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(n===null||n.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==n&&y.focus({preventScroll:!0}))}function C(){me(w)}function T(){Je(w);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function r(n){m!==null&&(clearTimeout(m),m=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,y){m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),y!==void 0&&y())})}function s(n){de(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{U(),c.platform.is.mobile!==!0&&(_.value=!1)})}function a(){const n=[];return i.prepend!==void 0&&n.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ee},i.prepend())),n.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},p())),k.value===!0&&t.noErrorIcon===!1&&n.push(R("error",[M(pe,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(R("inner-loading-append",i.loading!==void 0?i.loading():[M(ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(R("inner-clearable-append",[M(pe,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ee},i.append())),e.getInnerAppend!==void 0&&n.push(R("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function p(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(V.value))),$.value===!0&&n.push(M("div",{class:F.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(G(i.default))}function h(){let n,y;k.value===!0?g.value!==null?(n=[M("div",{role:"alert"},g.value)],y=`q--slot-error-${g.value}`):(n=G(i.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[M("div",t.hint)],y=`q--slot-hint-${t.hint}`):(n=G(i.hint),y="q--slot-hint"));const H=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&H===!1&&n===void 0)return;const S=M("div",{key:y,class:"q-field__messages col"},n);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ee},[t.hideBottomSpace===!0?S:M(Be,{name:"q-transition--field-message"},()=>S),H===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function R(n,y){return y===null?null:M("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}let b=!1;return Re(()=>{b=!0}),Fe(()=>{b===!0&&t.autofocus===!0&&d.focus()}),ae(()=>{_e.value===!0&&t.for===void 0&&(e.targetUid.value=ce()),t.autofocus===!0&&d.focus()}),re(()=>{m!==null&&clearTimeout(m)}),Object.assign(d,{focus:C,blur:T}),function(){const y=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return M("label",{ref:e.rootRef,class:[I.value,f.class],style:f.style,...y},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ee},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},a()),A.value===!0?h():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ee},i.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ae=Object.keys(le);Ae.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const nt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ae.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,P=String.fromCharCode(1),ot={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function lt(e,t,u,i){let f,d,c,m,_,q;const k=N(null),g=N(v());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,D),Z(()=>e.mask,r=>{if(r!==void 0)I(g.value,!0);else{const l=C(g.value);D(),e.modelValue!==l&&t("update:modelValue",l)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&I(g.value,!0)}),Z(()=>e.unmaskedValue,()=>{k.value===!0&&I(g.value)});function v(){if(D(),k.value===!0){const r=E(C(e.modelValue));return e.fillMask!==!1?T(r):r}return e.modelValue}function A(r){if(r<f.length)return f.slice(-r);let l="",s=f;const a=s.indexOf(P);if(a>-1){for(let p=r-s.length;p>0;p--)l+=P;s=s.slice(0,a)+l+s.slice(a)}return s}function D(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&U(),k.value===!1){m=void 0,f="",d="";return}const r=we[e.mask]===void 0?e.mask:we[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(Se,"\\$&"),a=[],p=[],h=[];let R=e.reverseFillMask===!0,b="",n="";r.replace(nt,(O,o,B,Q,K)=>{if(Q!==void 0){const L=le[Q];h.push(L),n=L.negate,R===!0&&(p.push("(?:"+n+"+)?("+L.pattern+"+)?(?:"+n+"+)?("+L.pattern+"+)?"),R=!1),p.push("(?:"+n+"+)?("+L.pattern+")?")}else if(B!==void 0)b="\\"+(B==="\\"?"":B),h.push(B),a.push("([^"+b+"]+)?"+b+"?");else{const L=o!==void 0?o:K;b=L==="\\"?"\\\\\\\\":L.replace(Se,"\\\\$&"),h.push(L),a.push("([^"+b+"]+)?"+b+"?")}});const y=new RegExp("^"+a.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),H=p.length-1,S=p.map((O,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+O):o===H?new RegExp("^"+O+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+O));c=h,m=O=>{const o=y.exec(e.reverseFillMask===!0?O:O.slice(0,h.length+1));o!==null&&(O=o.slice(1).join(""));const B=[],Q=S.length;for(let K=0,L=O;K<Q;K++){const J=S[K].exec(L);if(J===null)break;L=L.slice(J.shift().length),B.push(...J)}return B.length!==0?B.join(""):O},f=h.map(O=>typeof O=="string"?O:P).join(""),d=f.split(P).join(l)}function I(r,l,s){const a=i.value,p=a.selectionEnd,h=a.value.length-p,R=C(r);l===!0&&D();const b=E(R),n=e.fillMask!==!1?T(b):b,y=g.value!==n;a.value!==n&&(a.value=n),y===!0&&(g.value=n),document.activeElement===a&&Y(()=>{if(n===d){const S=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=a.selectionEnd;let O=p-1;for(let o=_;o<=O&&o<S;o++)f[o]!==P&&O++;$.right(a,O);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const S=e.reverseFillMask===!0?p===0?n.length>b.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(b.length,h)+1))+1:p;a.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(y===!0){const S=Math.max(0,n.length-(n===d?0:Math.min(b.length,h+1)));S===1&&p===1?a.setSelectionRange(S,S,"forward"):$.rightReverse(a,S)}else{const S=n.length-h;a.setSelectionRange(S,S,"backward")}else if(y===!0){const S=Math.max(0,f.indexOf(P),Math.min(b.length,p)-1);$.right(a,S)}else{const S=p-1;$.right(a,S)}});const H=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==H&&u(H,!0)}function j(r,l,s){const a=E(C(r.value));l=Math.max(0,f.indexOf(P),Math.min(a.length,l)),_=l,r.setSelectionRange(l,s,"forward")}const $={left(r,l){const s=f.slice(l-1).indexOf(P)===-1;let a=Math.max(0,l-1);for(;a>=0;a--)if(f[a]===P){l=a,s===!0&&l++;break}if(a<0&&f[l]!==void 0&&f[l]!==P)return $.right(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},right(r,l){const s=r.value.length;let a=Math.min(s,l+1);for(;a<=s;a++)if(f[a]===P){l=a;break}else f[a-1]===P&&(l=a);if(a>s&&f[l-1]!==void 0&&f[l-1]!==P)return $.left(r,s);r.setSelectionRange(l,l,"forward")},leftReverse(r,l){const s=A(r.value.length);let a=Math.max(0,l-1);for(;a>=0;a--)if(s[a-1]===P){l=a;break}else if(s[a]===P&&(l=a,a===0))break;if(a<0&&s[l]!==void 0&&s[l]!==P)return $.rightReverse(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},rightReverse(r,l){const s=r.value.length,a=A(s),p=a.slice(0,l+1).indexOf(P)===-1;let h=Math.min(s,l+1);for(;h<=s;h++)if(a[h-1]===P){l=h,l>0&&p===!0&&l--;break}if(h>s&&a[l-1]!==void 0&&a[l-1]!==P)return $.leftReverse(r,s);r.setSelectionRange(l,l,"forward")}};function F(r){t("click",r),q=void 0}function V(r){if(t("keydown",r),$e(r)===!0)return;const l=i.value,s=l.selectionStart,a=l.selectionEnd;if(r.shiftKey||(q=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&q===void 0&&(q=l.selectionDirection==="forward"?s:a);const p=$[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),p(l,q===s?a:s),r.shiftKey){const h=l.selectionStart;l.setSelectionRange(Math.min(q,h),Math.max(q,h),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===a?($.left(l,s),l.setSelectionRange(l.selectionStart,a,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===a&&($.rightReverse(l,a),l.setSelectionRange(s,l.selectionEnd,"forward"))}function E(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return w(r);const l=c;let s=0,a="";for(let p=0;p<l.length;p++){const h=r[s],R=l[p];if(typeof R=="string")a+=R,h===R&&s++;else if(h!==void 0&&R.regex.test(h))a+=R.transform!==void 0?R.transform(h):h,s++;else return a}return a}function w(r){const l=c,s=f.indexOf(P);let a=r.length-1,p="";for(let h=l.length-1;h>=0&&a>-1;h--){const R=l[h];let b=r[a];if(typeof R=="string")p=R+p,b===R&&a--;else if(b!==void 0&&R.regex.test(b))do p=(R.transform!==void 0?R.transform(b):b)+p,a--,b=r[a];while(s===h&&b!==void 0&&R.regex.test(b));else return p}return p}function C(r){return typeof r!="string"||m===void 0?typeof r=="number"?m(""+r):r:m(r)}function T(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:g,hasMask:k,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:V,onMaskedClick:F}}const at={name:String};function rt(e){return x(()=>e.name||e.for)}function ut(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?x(()=>{if(e.type==="file")return u()}):x(u)}const it=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,st=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,dt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ft=/[a-z0-9_ -]$/i;function ct(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Pe.is.firefox===!0?ft.test(u.data)===!1:it.test(u.data)===!0||st.test(u.data)===!0||dt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var pt=ge({name:"QInput",inheritAttrs:!1,props:{...Xe,...ot,...at,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ge,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:f}=i,d={};let c=NaN,m,_,q=null,k;const g=N(null),U=rt(e),{innerValue:v,hasMask:A,moveCursorForPaste:D,updateMaskValue:I,onMaskedKeydown:j,onMaskedClick:$}=lt(e,t,b,g),F=ut(e,!0),V=x(()=>ve(v.value)),E=ct(h),w=et(),C=x(()=>e.type==="textarea"||e.autogrow===!0),T=x(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),r=x(()=>{const o={...w.splitAttrs.listeners.value,onInput:h,onPaste:p,onChange:y,onBlur:H,onFocus:he};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=E,A.value===!0&&(o.onKeydown=j,o.onClick=$),e.autogrow===!0&&(o.onAnimationend=R),o}),l=x(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});Z(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),Z(()=>e.modelValue,o=>{if(A.value===!0){if(_===!0&&(_=!1,String(o)===c))return;I(o)}else v.value!==o&&(v.value=o,e.type==="number"&&d.hasOwnProperty("value")===!0&&(m===!0?m=!1:delete d.value));e.autogrow===!0&&Y(n)}),Z(()=>e.autogrow,o=>{o===!0?Y(n):g.value!==null&&u.rows>0&&(g.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){me(()=>{const o=document.activeElement;g.value!==null&&g.value!==o&&(o===null||o.id!==w.targetUid.value)&&g.value.focus({preventScroll:!0})})}function a(){g.value!==null&&g.value.select()}function p(o){if(A.value===!0&&e.reverseFillMask!==!0){const B=o.target;D(B,B.selectionStart,B.selectionEnd)}t("paste",o)}function h(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const B=o.target.value;if(o.target.qComposing===!0){d.value=B;return}if(A.value===!0)I(B,!1,o.inputType);else if(b(B),T.value===!0&&o.target===document.activeElement){const{selectionStart:Q,selectionEnd:K}=o.target;Q!==void 0&&K!==void 0&&Y(()=>{o.target===document.activeElement&&B.indexOf(o.target.value)===0&&o.target.setSelectionRange(Q,K)})}e.autogrow===!0&&n()}function R(o){t("animationend",o),n()}function b(o,B){k=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==o&&c!==o&&(c=o,B===!0&&(_=!0),t("update:modelValue",o),Y(()=>{c===o&&(c=NaN)})),k=void 0},e.type==="number"&&(m=!0,d.value=o),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=o,q=setTimeout(k,e.debounce)):k()}function n(){requestAnimationFrame(()=>{const o=g.value;if(o!==null){const B=o.parentNode.style,{scrollTop:Q}=o,{overflowY:K,maxHeight:L}=f.platform.is.firefox===!0?{}:window.getComputedStyle(o),J=K!==void 0&&K!=="scroll";J===!0&&(o.style.overflowY="hidden"),B.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",J===!0&&(o.style.overflowY=parseInt(L,10)<o.scrollHeight?"auto":"hidden"),B.marginBottom="",o.scrollTop=Q}})}function y(o){E(o),q!==null&&(clearTimeout(q),q=null),k!==void 0&&k(),t("change",o.target.value)}function H(o){o!==void 0&&he(o),q!==null&&(clearTimeout(q),q=null),k!==void 0&&k(),m=!1,_=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=v.value!==void 0?v.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}re(()=>{H()}),ae(()=>{e.autogrow===!0&&n()}),Object.assign(w,{innerValue:v,fieldClass:x(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:x(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:b,hasValue:V,floatingLabel:x(()=>V.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||ve(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...r.value,...e.type!=="file"?{value:S()}:F.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},S()),M("span",e.shadowText)])});const O=tt(w);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>g.value}),qe(i,"nativeEl",()=>g.value),O}}),bt=ge({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=W(),f=N(null);let d=0;const c=[];function m(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,D=++d,I=(F,V)=>{u("validation"+(F===!0?"Success":"Error"),V)},j=F=>{const V=F.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:F}),E=>({valid:!1,comp:F,err:E})):Promise.resolve({valid:V,comp:F})};return(e.greedy===!0?Promise.all(c.map(j)).then(F=>F.filter(V=>V.valid!==!0)):c.reduce((F,V)=>F.then(()=>j(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return D===d&&I(!0),!0;if(D===d){const{comp:V,err:E}=F[0];if(E!==void 0&&console.error(E),I(!1,V),A===!0){const w=F.find(({comp:C})=>typeof C.focus=="function"&&je(C.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function _(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function q(v){v!==void 0&&de(v);const A=d+1;m().then(D=>{A===d&&D===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function k(v){v!==void 0&&de(v),u("reset"),Y(()=>{_(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){me(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}Oe(Me,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A>-1&&c.splice(A,1)}});let U=!1;return Re(()=>{U=!0}),Fe(()=>{U===!0&&e.autofocus===!0&&g()}),ae(()=>{e.autofocus===!0&&g()}),Object.assign(i.proxy,{validate:m,resetValidation:_,submit:q,reset:k,focus:g,getValidationComponents:()=>c}),()=>M("form",{class:"q-form",ref:f,onSubmit:q,onReset:k},G(t.default))}}),yt=ge({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:u}}=W(),i=se(Te,X);if(i===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(se(Ie,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const d=x(()=>{const m=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const _=i.isContainer.value===!0?i.containerHeight.value:u.screen.height;return e.styleFn(m,_)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-m+"px":u.screen.height===0?m!==0?`calc(100vh - ${m}px)`:"100vh":u.screen.height-m+"px"}}),c=x(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>M("main",{class:c.value,style:d.value},G(t.default))}});export{yt as Q,pt as a,bt as b};
