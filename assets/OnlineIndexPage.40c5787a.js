import{M as t,A as H,aF as T,aG as O,_ as P,d as U,j,k as z,z as A,a as R,r as c,S as D,l as L,o as d,e as v,g as i,t as l,q as r,w as u,Q as M,f as p,F as q,aH as G,y as f,n as C,x as h,p as g,aI as J,aJ as K}from"./index.0032196a.js";import{a as k,Q as _}from"./QItemSection.240099dc.js";import{S}from"./OnlineSearchServices.012bd9d3.js";const Y=[t("g",{"stroke-width":"4","stroke-linecap":"round"},[t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})])])];var I=H({name:"QSpinnerIos",props:T,setup(e){const{cSize:s,classes:y}=O(e);return()=>t("svg",{class:y.value,width:s.value,height:s.value,stroke:"currentColor",fill:"currentColor",viewBox:"0 0 64 64"},Y)}});const W=U({name:"IndexPage",components:{},setup(){const e=j(),{locale:s}=z({useScope:"global"});console.log("local: ",s.value),A.value=!1;const y=R.BUILD_HOMEPAGE_LOGO,m=c(""),w=c(),$=o=>{m.value=o},n=c([]),a=c({components:{amount:0},documents:{amount:0},tags:{amount:0},isFinished:!1}),F=()=>{clearTimeout(w.value),w.value=setTimeout(async()=>{a.value.isFinished=!1,a.value.tags.amount=0,a.value.components.amount=0,a.value.documents.amount=0,await b(),await Q()},R.RUNTIME_SEARCH_DELAY*1e3)},Q=async()=>{n.value=[],(await S.getTerminology({keyword:m.value})).result.keyword_full.forEach(B=>{n.value.push(B.keyword)})},b=async()=>{const o=await S.getHint({keyword:m.value});if(a.value.tags.amount=o.result.hint[0].count,a.value.components.amount=o.result.hint[1].count,a.value.documents.amount=o.result.hint[2].count,a.value.isFinished=o.result.finished,!a.value.isFinished)await b();else return},V=c({component:!1,document:!1,tag:!1}),E=async o=>{const N=await S.getResultUUID(o,{keyword:m.value});localStorage.setItem("uuid",N?.result.uuid),e.push({params:{lang:s.value},name:o+"s"})};return D(()=>m.value,o=>{o===""?(a.value.isFinished=!1,a.value.tags.amount=0,a.value.components.amount=0,a.value.documents.amount=0,n.value=[]):o&&F()}),L(async()=>{}),{logo:y,keyword:m,isFetching:V,terminologies:n,searchResult:a,setInputValue:$,goSearch:E,getHint:b}}}),X=e=>(J("data-v-909513ea"),e=e(),K(),e),Z={class:"index column items-center"},x={class:"index-box"},ee={class:"logo font-outfit"},te={class:"search"},ae={class:"option-panel"},se={key:0,class:"result"},ne={key:1,class:"result-options"},oe=X(()=>i("hr",{class:"option-hr secondary-100 q-px-md"},null,-1)),re={class:"secondary-600 q-px-md"};function ie(e,s,y,m,w,$){return d(),v("div",Z,[i("div",x,[i("div",ee,l(e.logo),1),i("div",te,[r(M,{modelValue:e.keyword,"onUpdate:modelValue":s[0]||(s[0]=n=>e.keyword=n),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu","hide-dropdown-icon":"","bg-color":"white",borderless:""},{prepend:u(()=>[r(f,{name:"sym_o_search",size:"20px"})]),_:1},8,["modelValue"])]),i("div",ae,[e.keyword?(d(),v("div",se,[r(k,{clickable:"","option-value":"modelNumber"},{default:u(()=>[r(_,{class:"","option-value":"modelNumber"},{default:u(()=>[i("div",{class:C(["row justify-between items-center",{"secondary-400":e.searchResult.components.amount===0,disabled:e.searchResult.components.amount===0}]),onClick:s[1]||(s[1]=n=>e.goSearch("component"))},[i("div",null,[h(l(e.$t("$i18n_component_$i18n"))+"("+l(e.searchResult.components.amount)+") ",1),e.searchResult.isFinished?p("",!0):(d(),g(I,{key:0,color:"grey",style:{"margin-left":"8px"}}))]),r(f,{name:"sym_o_chevron_right"})],2)]),_:1})]),_:1}),r(k,{clickable:""},{default:u(()=>[r(_,{class:""},{default:u(()=>[i("div",{class:C(["row justify-between items-center",{"secondary-400":e.searchResult.documents.amount===0,disabled:e.searchResult.documents.amount===0}]),onClick:s[2]||(s[2]=n=>e.goSearch("document"))},[i("div",null,[h(l(e.$t("$i18n_document_$i18n"))+"("+l(e.searchResult.documents.amount)+") ",1),e.searchResult.isFinished?p("",!0):(d(),g(I,{key:0,color:"grey",style:{"margin-left":"8px"}}))]),r(f,{name:"sym_o_chevron_right"})],2)]),_:1})]),_:1}),r(k,{class:"option-issue",clickable:""},{default:u(()=>[r(_,{class:""},{default:u(()=>[i("div",{class:C(["row justify-between items-center",{"secondary-400":e.searchResult.tags.amount===0,disabled:e.searchResult.tags.amount===0}]),onClick:s[3]||(s[3]=n=>e.goSearch("tag"))},[i("div",null,[h(l(e.$t("$i18n_issue_$i18n"))+"("+l(e.searchResult.tags.amount)+") ",1),e.searchResult.isFinished?p("",!0):(d(),g(I,{key:0,color:"grey",style:{"margin-left":"8px"}}))]),r(f,{name:"sym_o_chevron_right"})],2)]),_:1})]),_:1})])):p("",!0),e.terminologies.length&&e.keyword?(d(),v("div",ne,[oe,i("span",re,l(e.$t("$i18n_suggestedKeywords_$i18n")),1),(d(!0),v(q,null,G(e.terminologies,n=>(d(),g(k,{key:n},{default:u(()=>[r(_,{class:"cursor-pointer",onClick:a=>e.setInputValue(n)},{default:u(()=>[h(l(n),1)]),_:2},1032,["onClick"])]),_:2},1024))),128))])):p("",!0)])])])}var me=P(W,[["render",ie],["__scopeId","data-v-909513ea"]]);export{me as default};
