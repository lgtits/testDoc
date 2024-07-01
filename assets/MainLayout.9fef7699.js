import{d as B,a as _,_ as S,o,e as $,n as C,f as t,F as z,g as n,u as a,h as F,i as E,j as T,k as N,r as A,l as R,m as H,p as l,w as r,q as k,Q as U,s as P,t as u,v as i,x as c,y as V,z as M}from"./index.0032196a.js";import{Q as G}from"./QSelect.de1123e8.js";import{S as g}from"./OnlineSearchServices.012bd9d3.js";import"./QItemSection.240099dc.js";import"./QItemLabel.522849c3.js";import"./format.fb4987c0.js";const Q=B({name:"LayoutFooter",props:{type:{type:String,required:!0}},setup(){return{buildConfig:_}}}),W=n("div",{class:"footer-wrap"},"Copyright \xA9 2024 POWERCABLE",-1),j=[W],Y=["src"];function q(h,b,s,p,v,m){return o(),$(z,null,[!h.buildConfig.BUILD_OFFLINE_MODE||!h.buildConfig.BUILD_OFFLINE_ENABLE_FOOTER_BY_IFRAME?(o(),$("div",{key:0,class:C(["layout-footer","footer-"+h.type])},j,2)):t("",!0),h.buildConfig.BUILD_OFFLINE_MODE&&h.buildConfig.BUILD_OFFLINE_ENABLE_FOOTER_BY_IFRAME?(o(),$("iframe",{key:1,src:h.buildConfig.BUILD_OFFLINE_FOOTER_IFRMAE_URL,frameborder:"0",scrolling:"no",width:"100%;",height:"38px",style:{display:"block",border:"0px",padding:"0px",margin:"0px"},ref:"iframeFooter"},`\r
  `,8,Y)):t("",!0)],64)}var J=S(Q,[["render",q]]);const K={class:"layout-header"},X=["src"],Z=B({__name:"LayoutHeaderOffline",setup(h){return(b,s)=>(o(),$("div",K,[n("iframe",{src:a(_).BUILD_OFFLINE_HEADER_IFRMAE_URL,frameborder:"0",style:{width:"100%",height:"93px",display:"block",border:"0px",padding:"0px",margin:"0px"},id:"iframeHeader"},`\r
    `,8,X)]))}});var x=S(Z,[["__scopeId","data-v-149df8a0"]]);const ee={class:"layout-header"},oe={class:"header-wrap flex justify-between items-center"},ae={class:"logo-search row"},se=["innerHTML"],te={key:2,class:"search-input-box"},ne={class:"search-input"},le={class:"search-select"},re={class:"menu-buttons"},ie={class:"links flex"},ue={href:"javascript:;",class:"link login"},_e=B({__name:"LayoutHeaderProposal",setup(h){const b=F(),s=E(()=>b.name),p=T(),{t:v}=N({useScope:"global"}),m="staging",w=E(()=>s.value==="ChatbotPageDir"||s.value==="ChatbotPageBookcase"||s.value==="BookcaseListPage"&&_.BUILD_SHOW_HEADER_CHATBOT?"powerTime":"default"),I=E(()=>s.value==="components"||s.value==="documents"||s.value==="tags"||s.value==="wikiComponent"||s.value==="wikiDocument"||s.value==="wikiTag"),D=async()=>{let e;switch(i.type){case"components":e=await g.searchComponent({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"components"});break;case"documents":e=await g.searchDocument({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"documents"});break;case"issues":e=await g.searchTag({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"issues"});break;default:e=await g.searchComponent({keyword:i.keyword})}},y=A(),O=A([{label:v("$i18n_component_$i18n"),value:"components"},{label:v("$i18n_document_$i18n"),value:"documents"},{label:v("$i18n_issue_$i18n"),value:"issues"}]);return R(async()=>{y.value=_.RUNTIME_ENABLE_SEARCH_HEADER}),(e,f)=>{const d=H("router-link");return o(),$("div",ee,[n("div",oe,[n("div",ae,[w.value==="default"?(o(),l(d,{key:0,to:`/${e.$i18n.locale}`,class:"logo"},{default:r(()=>[n("span",{innerHTML:a(_).BUILD_PROPOSAL_MODE_LOGO},null,8,se)]),_:1},8,["to"])):t("",!0),w.value==="powerTime"?(o(),l(d,{key:1,to:`/${e.$i18n.locale}`,class:"logo"},{default:r(()=>[c(u(a(_).BUILD_HEADER_CHATBOT_LOGO),1)]),_:1},8,["to"])):t("",!0),I.value?(o(),$("div",te,[n("div",ne,[k(U,{modelValue:a(i).keyword,"onUpdate:modelValue":f[0]||(f[0]=L=>a(i).keyword=L),"bg-color":"white",borderless:"",disable:!y.value},{prepend:r(()=>[k(V,{name:"sym_o_search",size:"20px"})]),_:1},8,["modelValue","disable"])]),n("div",le,[k(G,{borderless:"",modelValue:a(i).type,"onUpdate:modelValue":f[1]||(f[1]=L=>a(i).type=L),options:O.value,"emit-value":"","map-options":"",disable:!y.value},null,8,["modelValue","options","disable"])])])):t("",!0),n("div",{class:C(["search-send",{"d-none":!y.value}])},[k(P,{flat:"",class:"search-input__search-btn",onClick:D},{default:r(()=>[c(u(e.$t("$i18n_search_$i18n")),1)]),_:1})],2)]),n("div",re,[n("div",ie,[a(m)!=="demo"?(o(),l(d,{key:0,class:"link",to:`/${e.$i18n.locale}/supply-chain`},{default:r(()=>[c(u(e.$t("$i18n_Supply_Chain_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:1,class:"link",to:`/${e.$i18n.locale}/conference-list`},{default:r(()=>[c(u(e.$t("$i18n_OSINT_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:2,class:"link",to:`/${e.$i18n.locale}/dashboard`},{default:r(()=>[c(u(e.$t("$i18n_radar_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"||a(_).RUNTIME_SHOW_DEMO_SYSTEM_MANAGEMENT?(o(),l(d,{key:3,class:"link",to:`/${e.$i18n.locale}/systems/uncategorized`},{default:r(()=>[c(u(e.$t("$i18n_threatAnalysis_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:4,class:"link",to:`/${e.$i18n.locale}/bookcases`},{default:r(()=>[c(" RAG ")]),_:1},8,["to"])):t("",!0),n("a",ue,u(e.$t("$i18n_register_$i18n"))+"/"+u(e.$t("$i18n_login_$i18n")),1)])])])])}}});var de=S(_e,[["__scopeId","data-v-1b693be4"]]);const ce={class:"layout-header"},pe={class:"header-wrap flex justify-between items-center"},me={class:"logo-search row"},ye={key:2,class:"search-input-box"},he={class:"search-input"},$e={class:"search-select"},ve={class:"menu-buttons"},fe={class:"links flex"},ke={href:"javascript:;",class:"link login"},ge=B({__name:"LayoutHeaderDefault",setup(h){const b=F(),s=E(()=>b.name),p=T(),{t:v}=N({useScope:"global"}),m="staging",w=E(()=>s.value==="ChatbotPageDir"||s.value==="ChatbotPageBookcase"||s.value==="BookcaseListPage"&&_.BUILD_SHOW_HEADER_CHATBOT?"powerTime":"default"),I=E(()=>s.value==="components"||s.value==="documents"||s.value==="tags"||s.value==="wikiComponent"||s.value==="wikiDocument"||s.value==="wikiTag"),D=async()=>{let e;switch(i.type){case"components":e=await g.searchComponent({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"components"});break;case"documents":e=await g.searchDocument({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"documents"});break;case"issues":e=await g.searchTag({keyword:i.keyword}),localStorage.setItem("uuid",e.result.uuid),p.push({name:"issues"});break;default:e=await g.searchComponent({keyword:i.keyword})}},y=A(),O=A([{label:v("$i18n_component_$i18n"),value:"components"},{label:v("$i18n_document_$i18n"),value:"documents"},{label:v("$i18n_issue_$i18n"),value:"issues"}]);return R(async()=>{y.value=_.RUNTIME_ENABLE_SEARCH_HEADER}),(e,f)=>{const d=H("router-link");return o(),$("div",ce,[n("div",pe,[n("div",me,[w.value==="default"?(o(),l(d,{key:0,to:`/${e.$i18n.locale}`,class:"logo"},{default:r(()=>[c(u(a(_).BUILD_HOMEPAGE_LOGO),1)]),_:1},8,["to"])):t("",!0),w.value==="powerTime"?(o(),l(d,{key:1,to:`/${e.$i18n.locale}`,class:"logo"},{default:r(()=>[c(u(a(_).BUILD_HEADER_CHATBOT_LOGO),1)]),_:1},8,["to"])):t("",!0),I.value?(o(),$("div",ye,[n("div",he,[k(U,{modelValue:a(i).keyword,"onUpdate:modelValue":f[0]||(f[0]=L=>a(i).keyword=L),"bg-color":"white",borderless:"",disable:!y.value},{prepend:r(()=>[k(V,{name:"sym_o_search",size:"20px"})]),_:1},8,["modelValue","disable"])]),n("div",$e,[k(G,{borderless:"",modelValue:a(i).type,"onUpdate:modelValue":f[1]||(f[1]=L=>a(i).type=L),options:O.value,"emit-value":"","map-options":"",disable:!y.value},null,8,["modelValue","options","disable"])])])):t("",!0),n("div",{class:C(["search-send",{"d-none":!y.value}])},[k(P,{flat:"",class:"search-input__search-btn",onClick:D},{default:r(()=>[c(u(e.$t("$i18n_search_$i18n")),1)]),_:1})],2)]),n("div",ve,[n("div",fe,[a(m)!=="demo"?(o(),l(d,{key:0,class:"link",to:`/${e.$i18n.locale}/supply-chain/vehicle`},{default:r(()=>[c(u(e.$t("$i18n_Supply_Chain_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:1,class:"link",to:`/${e.$i18n.locale}/conference-list`},{default:r(()=>[c(u(e.$t("$i18n_OSINT_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:2,class:"link",to:`/${e.$i18n.locale}/dashboard`},{default:r(()=>[c(u(e.$t("$i18n_radar_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"||a(_).RUNTIME_SHOW_DEMO_SYSTEM_MANAGEMENT?(o(),l(d,{key:3,class:"link",to:`/${e.$i18n.locale}/systems/uncategorized`},{default:r(()=>[c(u(e.$t("$i18n_threatAnalysis_$i18n")),1)]),_:1},8,["to"])):t("",!0),a(m)!=="demo"?(o(),l(d,{key:4,class:"link",to:`/${e.$i18n.locale}/bookcases`},{default:r(()=>[c(" RAG ")]),_:1},8,["to"])):t("",!0),n("a",ke,u(e.$t("$i18n_register_$i18n"))+"/"+u(e.$t("$i18n_login_$i18n")),1)])])])])}}});var Ee=S(ge,[["__scopeId","data-v-e33957b0"]]);const be={class:"layout"},we={key:0,class:"layout__header"},Le={class:"layout__body"},Oe={class:"layout__footer"},Ie=B({__name:"MainLayout",setup(h){const b=F(),s=E(()=>b.name),p=E(()=>s.value==="WikiFormPage"||s.value==="ProductSearchingPage"||s.value==="ContactUsPage"||_.BUILD_OFFLINE_MODE&&_.BUILD_OFFLINE_ENABLE_HEADER_BY_IFRAME?"offline":_.BUILD_PROPOSAL_MODE&&!_.BUILD_OFFLINE_MODE?"proposal":"default");return console.log("show header: ",p.value),(v,m)=>{const w=Ee,I=de,D=x,y=H("router-view"),O=J;return o(),$("div",be,[a(M)?(o(),$("div",we,[p.value==="default"?(o(),l(w,{key:0})):t("",!0),p.value==="proposal"?(o(),l(I,{key:1})):t("",!0),p.value==="offline"?(o(),l(D,{key:2})):t("",!0)])):t("",!0),n("div",Le,[k(y)]),n("div",Oe,[a(M)?(o(),l(O,{key:0,type:"page"})):(o(),l(O,{key:1,type:"index"}))])])}}});var He=S(Ie,[["__scopeId","data-v-7a867c0d"]]);export{He as default};
