import{d as $,r as g,l as w,m as L,o as l,e as u,g as n,q as j,w as R,F as D,aH as C,n as I,x as k,t as d,f as x,_ as B,aI as F,aJ as H,a as S,ab as a,p as N}from"./index.0032196a.js";import{D as M}from"./Dialog.fb7c28d9.js";import{N as O}from"./Notify.977ffcab.js";import{C as E}from"./index.f806eaa5.js";const G=e=>(F("data-v-460e1fc7"),e=e(),H(),e),P={class:"bookcase"},T={class:"bookcase__title flex justify-between"},U=G(()=>n("img",{src:"/images/icons/delete.svg",alt:""},null,-1)),V=[U],q={class:"bookcase__date"},z=$({__name:"BookcaseCard",props:{bookcase:{type:Object,required:!0}},emits:["deleteBookcase"],setup(e,{emit:t}){const s=e,i=t,o=()=>{i("deleteBookcase",s.bookcase)},p=g(!0),m=g(),_=g(!1);return w(()=>{m.value.clientHeight>60&&(_.value=!0,p.value=!1)}),(h,y)=>{const A=L("router-link");return l(),u("div",P,[n("div",T,[j(A,{to:`/${h.$i18n.locale}/bookcase/${s.bookcase.id}`,class:"cursor-pointer"},{default:R(()=>[k(d(s.bookcase.title),1)]),_:1},8,["to"]),n("div",{class:"delete cursor-pointer",onClick:o},V)]),n("div",{class:I(["bookcase__document-list",{folded:!p.value}]),ref_key:"documentList",ref:m},[(l(!0),u(D,null,C(s.bookcase.document_list,b=>(l(),u("span",{key:b.data_key},d(b.name),1))),128))],2),_.value?(l(),u("div",{key:0,class:"bookcase__show-more cursor-pointer",onClick:y[0]||(y[0]=b=>p.value=!p.value)},[k(" ....."),n("span",null,d(p.value?h.$t("$i18n_showLess_$i18n"):h.$t("$i18n_showMore_$i18n")),1)])):x("",!0),n("div",q,d(e.bookcase.updated_at),1)])}}});var J=B(z,[["__scopeId","data-v-460e1fc7"]]);const c=S.BUILD_ENABLE_CHATBOT_DUMMY_DATA_MODE,r=window.location.origin,v=S.BUILD_CHATBOT_API_DOMAIN_STAGING,W=async()=>(console.log("connect to : ",v),await E.connect(v)),Y=async()=>c?await a.get(`${r}/dummyData/chatbot/chatbotGetHistoryListSample.json`):await a.get("groups"),Z=async e=>c?await a.get(`${r}/dummyData/chatbot/chatbotDeleteHistorySample.json`):await a.del(`groups/${e}`),K=async(e,t)=>(console.log("patch bookcase: ",e,t),c?await a.get(`${r}/dummyData/chatbot/chatbotPatchHistorySample.json`):await a.patch(`groups/${e}`,t)),Q=async(e,t)=>{if(console.log("getHistoryMessages"),c){console.log("isAPp: ",e);const s=await e.predict("/get_history_messages",["docRL"]);return console.log("resp: ",s),s.data[0]}else{const s=await a.get(`${r}/dummyData/chatbot/chatbotGetHistorySampleWithReference.json`);return t!=="b1"?s:{result:{page_title:"No history",history_messages:[]}}}},X=async e=>{if(c){const t=e==="zh"?"Zh":e==="ja"?"Ja":"En";return await a.get(`${r}/dummyData/chatbot/chatbotGetRecommendSample${t}.json`)}},ee=async(e,t,s,i)=>{try{if(console.log("send message: ",[s.message,t,i]),c){const o=await e.predict("/messages",[[s.message,"docRLtest, docRL",i],s.history,2048,.7,.95,null]);return console.log("response: ",o),o.data[0]}else return(await a.get(`${r}/dummyData/chatbot/chatbotGetResponseSample.json`)).data[0]}catch(o){throw console.error("Error message:",o),o}},te=async e=>c?await a.get(`${r}/dummyData/chatbot/chatbotGetDirectoriesSample.json`):await a.get(`chatbot_directories/${e}`),se=async e=>(console.log("message: ",e),c?await a.get(`${r}/dummyData/chatbot/chatbotPostReportBadResponseSample.json`):await a.get(`chatbot_report/${e}`)),oe=e=>e.map(s=>({...s,nodes:s.nodes.map(i=>({...i,selected:!1}))})),ae=async e=>{console.log("setChatbotScope: ",e)},ne=async e=>c?await a.get(`${r}/dummyData/chatbot/chatbotGetReferencesSample.json`):await a.get(`references/${e}`);var f={initAppClient:W,getConversations:Y,deleteConversation:Z,patchConversation:K,getHistoryMessages:Q,getRecommendPrompts:X,postMessage:ee,getDirectories:te,processDirectories:oe,setChatbotScope:ae,getReferences:ne,reportBadResponse:se};const ce={class:"bookcase-page"},re={class:"bookcase-page__content"},ie={class:"bookcase-page__content__title text-secondary-900"},le={class:"bookcase-page__content__bookcase-list column"},pe=$({__name:"OnlineBookcaseListPage",setup(e){const t=g(),s=async()=>{console.log("page init");const o=await f.getConversations();t.value=o.result.groups},i=async o=>{M.confirm({title:`\u522A\u9664\u66F8\u6AC3(${o.title})\uFF1F`,message:"\u522A\u9664\u5F8C\u7121\u6CD5\u5FA9\u539F\u3002",onOk:async()=>{await f.deleteConversation(o.id),O.error("\u5DF2\u522A\u9664"),s()}})};return w(()=>{s()}),(o,p)=>{const m=J;return l(),u("div",ce,[n("div",re,[n("div",ie,d(o.$t("$i18n_bookcase_$i18n")),1),n("div",le,[(l(!0),u(D,null,C(t.value,_=>(l(),N(m,{key:_.id,bookcase:_,onDeleteBookcase:i},null,8,["bookcase"]))),128))])])])}}});var ge=B(pe,[["__scopeId","data-v-539ed665"]]);export{ge as default};
