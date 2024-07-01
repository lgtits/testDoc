import{ag as ye,r as q,a7 as be,a4 as _,T as pe,ah as G,S as H,l as we,Y as j,L as ae,ai as Te,aj as D,ak as U,al as Ee,am as Ce,A as He,an as Me,G as Se,ao as ke,ap as We,i as C,I as qe,aq as Pe,ar as Ae,as as Le,at as Be,au as ze,av as Re,aw as Fe,ax as $e,ay as J,az as De,aA as Ke,M as Z,af as je,aB as Oe,aC as Ie,aD as Qe,aE as Ve,O as Ye}from"./index.0032196a.js";function Ne(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ye.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Xe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _e({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:c}=ae(),i=q(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),_(a),pe(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:_,mobileTouch(a){if(s.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const r=a.target;G(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Ne()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],G(s,"anchor",r)});function d(){Te(s,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function x(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)g(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>n.target,()=>{i.value!==null&&d(),x()}),H(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),we(()=>{x(),t!==!0&&n.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),j(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:s}}function Ge(e,t){const o=q(null);let n;function l(f,h){const s=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:n;f!==window&&f[s]("scroll",d,D.passive),window[s]("scroll",d,D.passive),n=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),t())});return j(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:P}=D,T=[];function A(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=U.length-1;for(;o>=0;){const n=U[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=T.length-1;n>=0;n--){const l=T[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ue(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",A,P),document.addEventListener("touchstart",A,P))}function ee(e){const t=T.findIndex(o=>o===e);t>-1&&(T.splice(t,1),T.length===0&&(document.removeEventListener("mousedown",A,P),document.removeEventListener("touchstart",A,P)))}let te,ne;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Je(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function le(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:K[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function Ze(e,t){let{top:o,left:n,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],c+=t[1],l+=t[0],i+=t[0],f+=t[1]),{top:o,bottom:c,height:f,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(c-o)/2}}function et(e,t,o){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function tt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ie(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function ue(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:s,maxHeight:d,maxWidth:g}=e;if(Ee.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:y,offsetTop:b}=window.visualViewport;y!==te&&(E.setProperty("--q-pe-left",y+"px"),te=y),b!==ne&&(E.setProperty("--q-pe-top",b+"px"),ne=b)}const{scrollLeft:x,scrollTop:a}=o,r=f===void 0?Ze(l,s===!0?[0,0]:n):et(l,f,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:M}=o,{elWidth:W,elHeight:L}=h===!0||s===!0?{elWidth:Math.max(r.width,k),elHeight:s===!0?Math.max(r.height,M):M}:{elWidth:k,elHeight:M};let v={maxWidth:g,maxHeight:d};(h===!0||s===!0)&&(v.minWidth=r.width+"px",s===!0&&(v.minHeight=r.height+"px")),Object.assign(o.style,v);const p=tt(W,L);let m=ie(r,p,c,i);if(f===void 0||n===void 0)$(m,r,p,c,i);else{const{top:E,left:y}=m;$(m,r,p,c,i);let b=!1;if(m.top!==E){b=!0;const w=2*n[1];r.center=r.top-=w,r.bottom-=w+2}if(m.left!==y){b=!0;const w=2*n[0];r.middle=r.left-=w,r.right-=w+2}b===!0&&(m=ie(r,p,c,i),$(m,r,p,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(o.style,v),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==x&&(o.scrollLeft=x)}function $(e,t,o,n,l){const c=o.bottom,i=o.right,f=Ce(),h=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=t[n.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(t[n.vertical]>h/2){const d=Math.min(h,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),l.horizontal==="middle")e.left=t[n.horizontal]>s/2?Math.max(0,s-i):0;else if(t[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,s-e.left)}var ot=He({name:"QMenu",inheritAttrs:!1,props:{...Xe,...Me,...Se,...ke,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Je},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,c,i,f;const h=ae(),{proxy:s}=h,{$q:d}=s,g=q(null),x=q(!1),a=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=qe(e,d),{registerTick:k,removeTick:M}=Pe(),{registerTimeout:W}=Ae(),{transitionProps:L,transitionStyle:v}=Le(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:E}=Ge(e,N),{anchorEl:y,canShow:b}=_e({showing:x}),{hide:w}=Be({showing:x,canShow:b,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:O,hidePortal:I,renderPortal:re}=ze(h,g,ve,"menu"),B={anchorEl:y,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ye(u),!0}},Q=C(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),se=C(()=>e.cover===!0?Q.value:le(e.self||"top start",d.lang.rtl)),ce=C(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),de=C(()=>e.autoClose===!0?{onClick:me}:{}),V=C(()=>x.value===!0&&e.persistent!==!0);H(V,u=>{u===!0?(Ie(R),Ue(B)):(J(R),ee(B))});function z(){Qe(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,Re(X),O(),N(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=Fe(u);if(F.left!==void 0){const{top:ge,left:xe}=y.value.getBoundingClientRect();c={left:F.left-xe,top:F.top-ge}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),k(()=>{S(),e.noFocus!==!0&&z()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),S(),O(!0),o("show",u)},e.transitionDuration)}function he(u){M(),I(),Y(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),W(()=>{I(!0),o("hide",u)},e.transitionDuration)}function Y(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&($e(X),E(),ee(B),J(R)),u!==!0&&(l=null)}function N(){(y.value!==null||e.scrollTarget!==void 0)&&(p.value=De(y.value,e.scrollTarget),m(p.value,S))}function me(u){f!==!0?(Ke(s,u),o("click",u)):f=!1}function X(u){V.value===!0&&e.noFocus!==!0&&Ve(g.value,u.target)!==!0&&z()}function R(u){o("escapeKey"),w(u)}function S(){ue({targetEl:g.value,offset:e.offset,anchorEl:y.value,anchorOrigin:Q.value,selfOrigin:se.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return Z(Oe,L.value,()=>x.value===!0?Z("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,n.class],style:[n.style,v.value],...de.value},je(t.default)):null)}return j(Y),Object.assign(s,{focus:z,updatePosition:S}),re}});function lt(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function it(e,t,o){if(o<=t)return t;const n=o-t+1;let l=t+(e-t)%n;return l<t&&(l=n+l),l===0?0:l}function at(e,t=2,o="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(o)+n}export{ot as Q,_e as a,lt as b,it as n,at as p,Xe as u};
