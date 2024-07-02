import{i as w,aS as Ue,aT as Ct,A as Ge,Z as qt,G as kt,I as Ot,aU as It,r as F,aV as Tt,S as ee,M as h,aB as re,af as jt,L as Ke,aW as Vt,T as Qe,s as Z,aX as $t,a9 as Ft}from"./index.8bd4b53a.js";import{p as b,u as Et,a as At,Q as Nt}from"./format.50537e08.js";function Zt(){const e=new Map;return{getCache:function(r,s){return e[r]===void 0?e[r]=s:e[r]},getCacheWithFn:function(r,s){return e[r]===void 0?e[r]=s():e[r]}}}const L=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function pt(e,r,s){return Object.prototype.toString.call(e)==="[object Date]"&&(s=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Lt(qe(e,r,s))}function Pe(e,r,s){return tt(Pt(e,r,s))}function Bt(e){return Qt(e)===0}function fe(e,r){return r<=6?31:r<=11||Bt(e)?30:29}function Qt(e){const r=L.length;let s=L[0],u,d,o,M,l;if(e<s||e>=L[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(u=L[l],d=u-s,!(e<u));l+=1)s=u;return M=e-s,d-M<6&&(M=M-d+S(d+4,33)*33),o=V(V(M+1,33)-1,4),o===-1&&(o=4),o}function et(e,r){const s=L.length,u=e+621;let d=-14,o=L[0],M,l,m,C,v;if(e<o||e>=L[s-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<s&&(M=L[v],l=M-o,!(e<M));v+=1)d=d+S(l,33)*8+S(V(l,33),4),o=M;C=e-o,d=d+S(C,33)*8+S(V(C,33)+3,4),V(l,33)===4&&l-C===4&&(d+=1);const D=S(u,4)-S((S(u,100)+1)*3,4)-150,E=20+d-D;return r||(l-C<6&&(C=C-l+S(l+4,33)*33),m=V(V(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:E}}function Pt(e,r,s){const u=et(e,!0);return qe(u.gy,3,u.march)+(r-1)*31-S(r,7)*(r-7)+s-1}function Lt(e){const r=tt(e).gy;let s=r-621,u,d,o;const M=et(s,!1),l=qe(r,3,M.march);if(o=e-l,o>=0){if(o<=185)return d=1+S(o,31),u=V(o,31)+1,{jy:s,jm:d,jd:u};o-=186}else s-=1,o+=179,M.leap===1&&(o+=1);return d=7+S(o,30),u=V(o,30)+1,{jy:s,jm:d,jd:u}}function qe(e,r,s){let u=S((e+S(r-8,6)+100100)*1461,4)+S(153*V(r+9,12)+2,5)+s-34840408;return u=u-S(S(e+100100+S(r-8,6),100)*3,4)+752,u}function tt(e){let r=4*e+139361631;r=r+S(S(4*e+183187720,146097)*3,4)*4-3908;const s=S(V(r,1461),4)*5+308,u=S(V(s,153),5)+1,d=V(S(s,153),12)+1;return{gy:S(r,1461)-100100+S(8-d,6),gm:d,gd:u}}function S(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const Rt=["gregorian","persian"],zt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Rt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Xt=["update:modelValue"];function Q(e){return e.year+"/"+b(e.month)+"/"+b(e.day)}function Wt(e,r){const s=w(()=>e.disable!==!0&&e.readonly!==!0),u=w(()=>s.value===!0?0:-1),d=w(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function M(l){const m=new Date,C=l===!0?null:0;if(e.calendar==="persian"){const v=pt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:s,tabindex:u,headerClass:d,getLocale:o,getCurrentDate:M}}const at=864e5,Jt=36e5,Ce=6e4,nt="YYYY-MM-DDTHH:mm:ss.SSSZ",Ut=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Gt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,xe={};function Kt(e,r){const s="("+r.days.join("|")+")",u=e+s;if(xe[u]!==void 0)return xe[u];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",M="("+r.monthsShort.join("|")+")",l={};let m=0;const C=e.replace(Gt,D=>{switch(m++,D){case"YY":return l.YY=m,"(-?\\d{1,2})";case"YYYY":return l.YYYY=m,"(-?\\d{1,4})";case"M":return l.M=m,"(\\d{1,2})";case"MM":return l.M=m,"(\\d{2})";case"MMM":return l.MMM=m,M;case"MMMM":return l.MMMM=m,o;case"D":return l.D=m,"(\\d{1,2})";case"Do":return l.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=m,"(\\d{2})";case"H":return l.H=m,"(\\d{1,2})";case"HH":return l.H=m,"(\\d{2})";case"h":return l.h=m,"(\\d{1,2})";case"hh":return l.h=m,"(\\d{2})";case"m":return l.m=m,"(\\d{1,2})";case"mm":return l.m=m,"(\\d{2})";case"s":return l.s=m,"(\\d{1,2})";case"ss":return l.s=m,"(\\d{2})";case"S":return l.S=m,"(\\d{1})";case"SS":return l.S=m,"(\\d{2})";case"SSS":return l.S=m,"(\\d{3})";case"A":return l.A=m,"(AM|PM)";case"a":return l.a=m,"(am|pm)";case"aa":return l.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return s;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return l.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=m,"(-?\\d+)";case"x":return l.x=m,"(-?\\d{4,})";default:return m--,D[0]==="["&&(D=D.substring(1,D.length-1)),D.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:l,regex:new RegExp("^"+C)};return xe[u]=v,v}function rt(e,r){return e!==void 0?e:r!==void 0?r.date:Ct.date}function Le(e,r=""){const s=e>0?"-":"+",u=Math.abs(e),d=Math.floor(u/60),o=u%60;return s+b(d)+r+b(o)}function ea(e,r,s,u,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=nt);const M=rt(s,Ue.props),l=M.months,m=M.monthsShort,{regex:C,map:v}=Kt(r,M),D=e.match(C);if(D===null)return o;let E="";if(v.X!==void 0||v.x!==void 0){const I=parseInt(D[v.X!==void 0?v.X:v.x],10);if(isNaN(I)===!0||I<0)return o;const T=new Date(I*(v.X!==void 0?1e3:1));o.year=T.getFullYear(),o.month=T.getMonth()+1,o.day=T.getDate(),o.hour=T.getHours(),o.minute=T.getMinutes(),o.second=T.getSeconds(),o.millisecond=T.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(D[v.YYYY],10);else if(v.YY!==void 0){const I=parseInt(D[v.YY],10);o.year=I<0?I:2e3+I}if(v.M!==void 0){if(o.month=parseInt(D[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(D[v.MMM])+1:v.MMMM!==void 0&&(o.month=l.indexOf(D[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(D[v.D],10),o.year===null||o.month===null||o.day<1)return o;const I=u!=="persian"?new Date(o.year,o.month,0).getDate():fe(o.year,o.month);if(o.day>I)return o}v.H!==void 0?o.hour=parseInt(D[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(D[v.h],10)%12,(v.A&&D[v.A]==="PM"||v.a&&D[v.a]==="pm"||v.aa&&D[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(D[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(D[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(D[v.S],10)*10**(3-D[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(E=v.Z!==void 0?D[v.Z].replace(":",""):D[v.ZZ],o.timezoneOffset=(E[0]==="+"?-1:1)*(60*E.slice(1,3)+1*E.slice(3,5)))}return o.dateHash=b(o.year,6)+"/"+b(o.month)+"/"+b(o.day),o.timeHash=b(o.hour)+":"+b(o.minute)+":"+b(o.second)+E,o}function Re(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const s=new Date(r.getFullYear(),0,4);s.setDate(s.getDate()-(s.getDay()+6)%7+3);const u=r.getTimezoneOffset()-s.getTimezoneOffset();r.setHours(r.getHours()-u);const d=(r-s)/(at*7);return 1+Math.floor(d)}function p(e,r,s){const u=new Date(e),d=`set${s===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${d}Month`](0);case"month":case"months":u[`${d}Date`](1);case"day":case"days":case"date":u[`${d}Hours`](0);case"hour":case"hours":u[`${d}Minutes`](0);case"minute":case"minutes":u[`${d}Seconds`](0);case"second":case"seconds":u[`${d}Milliseconds`](0)}return u}function ve(e,r,s){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/s}function ot(e,r,s="days"){const u=new Date(e),d=new Date(r);switch(s){case"years":case"year":return u.getFullYear()-d.getFullYear();case"months":case"month":return(u.getFullYear()-d.getFullYear())*12+u.getMonth()-d.getMonth();case"days":case"day":case"date":return ve(p(u,"day"),p(d,"day"),at);case"hours":case"hour":return ve(p(u,"hour"),p(d,"hour"),Jt);case"minutes":case"minute":return ve(p(u,"minute"),p(d,"minute"),Ce);case"seconds":case"second":return ve(p(u,"second"),p(d,"second"),1e3)}}function ze(e){return ot(e,p(e,"year"),"days")+1}function Xe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const We={YY(e,r,s){const u=this.YYYY(e,r,s)%100;return u>=0?b(u):"-"+b(Math.abs(u))},YYYY(e,r,s){return s??e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return b(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Xe(this.Q(e))},D(e){return e.getDate()},Do(e){return Xe(e.getDate())},DD(e){return b(e.getDate())},DDD(e){return ze(e)},DDDD(e){return b(ze(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Re(e)},ww(e){return b(Re(e))},H(e){return e.getHours()},HH(e){return b(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return b(this.h(e))},m(e){return e.getMinutes()},mm(e){return b(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return b(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return b(Math.floor(e.getMilliseconds()/10))},SSS(e){return b(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,s,u){const d=u??e.getTimezoneOffset();return Le(d,":")},ZZ(e,r,s,u){const d=u??e.getTimezoneOffset();return Le(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ta(e,r,s,u,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=nt);const M=rt(s,Ue.props);return r.replace(Ut,(l,m)=>l in We?We[l](o,M,u,d):m===void 0?l:m.split("\\]").join("]"))}const X=20,aa=["Calendar","Years","Months"],Je=e=>aa.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),K=" \u2014 ";function P(e){return e.year+"/"+b(e.month)}var oa=Ge({name:"QDate",props:{...zt,...qt,...kt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Je}},emits:[...Xt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:s}){const{proxy:u}=Ke(),{$q:d}=u,o=Ot(e,d),{getCache:M}=Zt(),{tabindex:l,headerClass:m,getLocale:C,getCurrentDate:v}=Wt(e,d);let D;const E=It(e),I=Vt(E),T=F(null),x=F(Fe()),H=F(C()),lt=w(()=>Fe()),ut=w(()=>C()),N=w(()=>v()),g=F(Ee(x.value,H.value)),j=F(e.defaultView),ke=d.lang.rtl===!0?"right":"left",oe=F(ke.value),me=F(ke.value),he=g.value.year,le=F(he-he%X-(he<0?X:0)),O=F(null),st=w(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),R=w(()=>e.color||"primary"),W=w(()=>e.textColor||"white"),ue=w(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=w(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),A=w(()=>ge.value.filter(t=>typeof t=="string").map(t=>we(t,x.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),J=w(()=>{const t=a=>we(a,x.value,H.value);return ge.value.filter(a=>Tt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),se=w(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Pe(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=w(()=>e.calendar==="persian"?Q:(t,a,n)=>ta(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?x.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),te=w(()=>A.value.length+J.value.reduce((t,a)=>t+1+ot(se.value(a.to),se.value(a.from)),0)),Oe=w(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(O.value!==null){const n=O.value.init,c=se.value(n);return H.value.daysShort[c.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+K+"?"}if(te.value===0)return K;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=A.value[0],a=se.value(t);return isNaN(a.valueOf())===!0?K:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),it=w(()=>A.value.concat(J.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),ct=w(()=>A.value.concat(J.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=w(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return K;if(te.value>1){const t=it.value,a=ct.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+K+n[a.month-1]+" ":t.month!==a.month?K+n[a.month-1]:"")+" "+a.year}return A.value[0].year}),ie=w(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Te=w(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),dt=w(()=>{const t=H.value.daysShort,a=Te.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=w(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():fe(t.year,t.month)}),vt=w(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=w(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=w(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Me=w(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=w(()=>{const t={};return A.value.forEach(a=>{const n=P(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),je=w(()=>{const t={};return J.value.forEach(a=>{const n=P(a.from),c=P(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===c?a.to.day:void 0,range:a}),n<c){let i;const{year:Y,month:f}=a.from,y=f<12?{year:Y,month:f+1}:{year:Y+1,month:1};for(;(i=P(y))<=c;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===c?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=w(()=>{if(O.value===null)return;const{init:t,initHash:a,final:n,finalHash:c}=O.value,[i,Y]=a<=c?[t,n]:[n,t],f=P(i),y=P(Y);if(f!==$.value&&y!==$.value)return;const _={};return f===$.value?(_.from=i.day,_.includeFrom=!0):_.from=1,y===$.value?(_.to=Y.day,_.includeTo=!0):_.to=B.value,_}),$=w(()=>P(g.value)),ft=w(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const c=$.value+"/"+b(n);t[n]=a(c)}return t}),mt=w(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const c=$.value+"/"+b(n);t[n]=a(c)===!0&&vt.value(c)}}return t}),ht=w(()=>{let t,a;const{year:n,month:c}=g.value;if(e.calendar!=="persian")t=new Date(n,c-1,1),a=new Date(n,c-1,0).getDate();else{const i=Pe(n,c,1);t=new Date(i.gy,i.gm-1,i.gd);let Y=c-1,f=n;Y===0&&(Y=12,f--),a=fe(f,Y)}return{days:t.getDay()-Te.value-1,endDay:a}}),Ve=w(()=>{const t=[],{days:a,endDay:n}=ht.value,c=a<0?a+7:a;if(c<6)for(let f=n-c;f<=n;f++)t.push({i:f,fill:!0});const i=t.length;for(let f=1;f<=B.value;f++){const y={i:f,event:mt.value[f],classes:[]};ft.value[f]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ce.value[$.value]!==void 0&&ce.value[$.value].forEach(f=>{const y=i+f-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:R.value,textColor:W.value})}),je.value[$.value]!==void 0&&je.value[$.value].forEach(f=>{if(f.from!==void 0){const y=i+f.from-1,_=i+(f.to||B.value)-1;for(let ne=y;ne<=_;ne++)Object.assign(t[ne],{range:f.range,unelevated:!0,color:R.value,textColor:W.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const y=i+f.to-1;for(let _=i;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:R.value,textColor:W.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=i+B.value-1;for(let _=i;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:R.value,textColor:W.value})}}),ae.value!==void 0){const f=i+ae.value.from-1,y=i+ae.value.to-1;for(let _=f;_<=y;_++)t[_].color=R.value,t[_].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===N.value.year&&g.value.month===N.value.month&&(t[i+N.value.day-1].today=!0);const Y=t.length%7;if(Y>0){const f=7-Y;for(let y=1;y<=f;y++)t.push({i:y,fill:!0})}return t.forEach(f=>{let y="q-date__calendar-item ";f.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(y+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(y+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(y+=` text-${f.color}`)),f.classes=y}),t}),gt=w(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});ee(()=>e.modelValue,t=>{if(D===t)D=0;else{const a=Ee(x.value,H.value);U(a.year,a.month,a)}}),ee(j,()=>{T.value!==null&&u.$el.contains(document.activeElement)===!0&&T.value.focus()}),ee(()=>g.value.year+"|"+g.value.month,()=>{s("navigation",{year:g.value.year,month:g.value.month})}),ee(lt,t=>{Be(t,H.value,"mask"),x.value=t}),ee(ut,t=>{Be(x.value,t,"locale"),H.value=t});function $e(){const t=N.value,a=ce.value[P(t)];(a===void 0||a.includes(t.day)===!1)&&be(t),De(t.year,t.month)}function yt(t){Je(t)===!0&&(j.value=t)}function Mt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:Ye)(a===!0?-1:1)}function De(t,a){j.value="Calendar",U(t,a)}function Dt(t,a){if(e.range===!1||!t){O.value=null;return}const n=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):n;O.value={init:n,initHash:Q(n),final:c,finalHash:Q(c)},De(n.year,n.month)}function Fe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function we(t,a,n){return ea(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ee(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ae();const c=n[n.length-1],i=we(c.from!==void 0?c.from:c,t,a);return i.dateHash===null?Ae():i}function Ae(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=N.value!==void 0?N.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+b(a)+"/01"}}function Ne(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),U(a,n),ue.value===!0&&de("month")}function Ye(t){const a=Number(g.value.year)+t;U(a,g.value.month),ue.value===!0&&de("year")}function wt(t){U(t,g.value.month),j.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function Yt(t){U(g.value.year,t),j.value="Calendar",ue.value===!0&&de("month")}function bt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?_e:be)(t)}function z(t){return{year:t.year,month:t.month,day:t.day}}function U(t,a,n){if(q.value!==null&&t<=q.value.year&&((a<q.value.month||t<q.value.year)&&(a=q.value.month),t=q.value.year),k.value!==null&&t>=k.value.year&&((a>k.value.month||t>k.value.year)&&(a=k.value.month),t=k.value.year),n!==void 0){const{hour:i,minute:Y,second:f,millisecond:y,timezoneOffset:_,timeHash:ne}=n;Object.assign(g.value,{hour:i,minute:Y,second:f,millisecond:y,timezoneOffset:_,timeHash:ne})}const c=t+"/"+b(a)+"/01";c!==g.value.dateHash&&(oe.value=g.value.dateHash<c==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(me.value=oe.value),Qe(()=>{le.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:c})}))}function Ze(t,a,n){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;D=c;const{reason:i,details:Y}=pe(a,n);s("update:modelValue",c,i,Y)}function de(t){const a=A.value[0]!==void 0&&A.value[0].dateHash!==null?{...A.value[0]}:{...g.value};Qe(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():fe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const c=G(a);D=c;const{details:i}=pe("",a);s("update:modelValue",c,t,i)})}function pe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...z(a.target),from:z(a.from),to:z(a.to)}}:{reason:`${t}-day`,details:z(a)}}function G(t,a,n){return t.from!==void 0?{from:ye.value(t.from,a,n),to:ye.value(t.to,a,n)}:ye.value(t,a,n)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=Q(t.from),c=Q(t.to),i=A.value.filter(f=>f.dateHash<n||f.dateHash>c),Y=J.value.filter(({from:f,to:y})=>y.dateHash<n||f.dateHash>c);a=i.concat(Y).concat(t).map(f=>G(f))}else{const n=ge.value.slice();n.push(G(t)),a=n}else a=G(t);Ze(a,"add",t)}function _e(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==n.from&&c.to!==n.to:!0):a=e.modelValue.filter(c=>c!==n),a.length===0&&(a=null)}Ze(a,"remove",t)}function Be(t,a,n){const c=A.value.concat(J.value).map(i=>G(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);s("update:modelValue",(e.multiple===!0?c:c[0])||null,n)}function _t(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(j.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...M("vY",{onClick(){j.value="Years"},onKeyup(t){t.keyCode===13&&(j.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(j.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...M("vC",{onClick(){j.value="Calendar"},onKeyup(t){t.keyCode===13&&(j.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?h(Z,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:$e}):null])])}function Se({label:t,type:a,key:n,dir:c,goTo:i,boundaries:Y,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(Z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:l.value,disable:Y.prev===!1,...M("go-#"+a,{onClick(){i(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(re,{name:"q-transition--jump-"+c},()=>h("div",{key:n},[h(Z,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...M("view#"+a,{onClick:()=>{j.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(Z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:l.value,disable:Y.next===!1,...M("go+#"+a,{onClick(){i(1)}})})])]}const St={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:oe.value,goTo:Ne,boundaries:Me.value.month,cls:" col"}).concat(Se({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:Ye,boundaries:Me.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},dt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(re,{name:"q-transition--slide-"+oe.value},()=>h("div",{key:$.value,class:"q-date__calendar-days fit"},Ve.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(Z,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...M("day#"+t.i,{onClick:()=>{xt(t.i)},onMouseover:()=>{Ht(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===N.value.year,a=c=>q.value!==null&&g.value.year===q.value.year&&q.value.month>c||k.value!==null&&g.value.year===k.value.year&&k.value.month<c,n=H.value.monthsShort.map((c,i)=>{const Y=g.value.month===i+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(Z,{class:t===!0&&N.value.month===i+1?"q-date__today":null,flat:Y!==!0,label:c,unelevated:Y,color:Y===!0?R.value:null,textColor:Y===!0?W.value:null,tabindex:l.value,disable:a(i+1),...M("month#"+i,{onClick:()=>{Yt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[Se({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:Ye,boundaries:Me.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=le.value,a=t+X,n=[],c=i=>q.value!==null&&q.value.year>i||k.value!==null&&k.value.year<i;for(let i=t;i<=a;i++){const Y=g.value.year===i;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(Z,{key:"yr"+i,class:N.value.year===i?"q-date__today":null,flat:!Y,label:i,dense:!0,unelevated:Y,color:Y===!0?R.value:null,textColor:Y===!0?W.value:null,tabindex:l.value,disable:c(i),...M("yr#"+i,{onClick:()=>{wt(i)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(Z,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:l.value,disable:c(t),...M("y-",{onClick:()=>{le.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(Z,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:l.value,disable:c(a),...M("y+",{onClick:()=>{le.value+=X}})})])])}};function xt(t){const a={...g.value,day:t};if(e.range===!1){bt(a,$.value);return}if(O.value===null){const n=Ve.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){_e({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){_e(a);return}const c=Q(a);O.value={init:a,initHash:c,final:a,finalHash:c},s("rangeStart",z(a))}else{const n=O.value.initHash,c=Q(a),i=n<=c?{from:O.value.init,to:a}:{from:a,to:O.value.init};O.value=null,be(n===c?a:{target:a,...i}),s("rangeEnd",{from:z(i.from),to:z(i.to)})}}function Ht(t){if(O.value!==null){const a={...g.value,day:t};Object.assign(O.value,{final:a,finalHash:Q(a)})}}return Object.assign(u,{setToday:$e,setView:yt,offsetCalendar:Mt,setCalendarTo:De,setEditingRange:Dt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(re,{name:"q-transition--fade"},St[j.value])])],a=jt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&I(t,"push"),h("div",{class:st.value,...gt.value},[_t(),h("div",{ref:T,class:"q-date__main col column",tabindex:-1},t)])}}}),la=Ge({name:"QPopupProxy",props:{...Et,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:s,attrs:u}){const{proxy:d}=Ke(),{$q:o}=d,M=F(!1),l=F(null),m=w(()=>parseInt(e.breakpoint,10)),{canShow:C}=At({showing:M});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const D=F(v()),E=w(()=>D.value==="menu"?{maxHeight:"99vh"}:{});ee(()=>v(),x=>{M.value!==!0&&(D.value=x)});function I(x){M.value=!0,s("show",x)}function T(x){M.value=!1,D.value=v(),s("hide",x)}return Object.assign(d,{show(x){C(x)===!0&&l.value.show(x)},hide(x){l.value.hide(x)},toggle(x){l.value.toggle(x)}}),$t(d,"currentComponent",()=>({type:D.value,ref:l.value})),()=>{const x={ref:l,...E.value,...u,onShow:I,onHide:T};let H;return D.value==="dialog"?H=Ft:(H=Nt,Object.assign(x,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(H,x,r.default)}}});export{la as Q,oa as a};
