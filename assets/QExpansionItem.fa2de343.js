import{A as j,Y as $,M as a,aB as J,aY as W,ac as N,an as X,G as p,ap as ee,I as te,r as Q,aZ as A,at as ne,i as v,S as _,L as ae,a_ as B,a$ as ie,b0 as oe,af as le,y as E,O as ue}from"./index.19f0df06.js";import{a as re,Q as k}from"./QItemSection.63da68ae.js";import{Q as H}from"./QItemLabel.45d3c46b.js";var se=j({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:I,emit:T}){let r=!1,m,i,o=null,s=null,d,S;function b(){m&&m(),m=null,r=!1,o!==null&&(clearTimeout(o),o=null),s!==null&&(clearTimeout(s),s=null),i!==void 0&&i.removeEventListener("transitionend",d),d=null}function l(n,u,g){u!==void 0&&(n.style.height=`${u}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,m=g}function c(n,u){n.style.overflowY=null,n.style.height=null,n.style.transition=null,b(),u!==S&&T(u)}function L(n,u){let g=0;i=n,r===!0?(b(),g=n.offsetHeight===n.scrollHeight?0:void 0):(S="hide",n.style.overflowY="hidden"),l(n,g,u),o=setTimeout(()=>{o=null,n.style.height=`${n.scrollHeight}px`,d=f=>{s=null,(Object(f)!==f||f.target===n)&&c(n,"show")},n.addEventListener("transitionend",d),s=setTimeout(d,e.duration*1.1)},100)}function w(n,u){let g;i=n,r===!0?b():(S="show",n.style.overflowY="hidden",g=n.scrollHeight),l(n,g,u),o=setTimeout(()=>{o=null,n.style.height=0,d=f=>{s=null,(Object(f)!==f||f.target===n)&&c(n,"hide")},n.addEventListener("transitionend",d),s=setTimeout(d,e.duration*1.1)},100)}return $(()=>{r===!0&&b()}),()=>a(J,{css:!1,appear:e.appear,onEnter:L,onLeave:w},I.default)}});const x=W({}),de=Object.keys(N);var he=j({name:"QExpansionItem",props:{...N,...X,...p,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ee,"click","afterShow","afterHide"],setup(e,{slots:I,emit:T}){const{proxy:{$q:r}}=ae(),m=te(e,r),i=Q(e.modelValue!==null?e.modelValue:e.defaultOpened),o=Q(null),s=A(),{show:d,hide:S,toggle:b}=ne({showing:i});let l,c;const L=v(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),w=v(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),u=v(()=>{const t={};return de.forEach(h=>{t[h]=e[h]}),t}),g=v(()=>n.value===!0||e.expandIconToggle!==!0),f=v(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),P=v(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),R=v(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:b,show:d,hide:S})),q=v(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":s,"aria-label":t}});_(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&O()});function Y(t){n.value!==!0&&b(t),T("click",t)}function D(t){t.keyCode===13&&C(t,!0)}function C(t,h){h!==!0&&o.value!==null&&o.value.focus(),b(t),ue(t)}function G(){T("afterShow")}function M(){T("afterHide")}function O(){l===void 0&&(l=A()),i.value===!0&&(x[e.group]=l);const t=_(i,y=>{y===!0?x[e.group]=l:x[e.group]===l&&delete x[e.group]}),h=_(()=>x[e.group],(y,Z)=>{Z===l&&y!==void 0&&y!==l&&S()});c=()=>{t(),h(),x[e.group]===l&&delete x[e.group],c=void 0}}function K(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},h=[a(E,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:f.value})];return P.value===!0&&(Object.assign(t,{tabindex:0,...q.value,onClick:C,onKeyup:D}),h.unshift(a("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(k,t,()=>h)}function U(){let t;return I.header!==void 0?t=[].concat(I.header(R.value)):(t=[a(k,()=>[a(H,{lines:e.labelLines},()=>e.label||""),e.caption?a(H,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(k,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(E,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](K()),t}function F(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return g.value===!0&&(t.clickable=!0,t.onClick=Y,Object.assign(t,n.value===!0?u.value:q.value)),a(re,t,U)}function V(){return ie(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:w.value,id:s},le(I.default)),[[oe,i.value]])}function z(){const t=[F(),a(se,{duration:e.duration,onShow:G,onHide:M},V)];return e.expandSeparator===!0&&t.push(a(B,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),a(B,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&O(),$(()=>{c!==void 0&&c()}),()=>a("div",{class:L.value},[a("div",{class:"q-expansion-item__container relative-position"},z())])}});export{he as Q};
