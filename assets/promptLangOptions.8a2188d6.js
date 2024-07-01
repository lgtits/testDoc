import{d as y,o as l,e as u,F as w,aH as S,g as _,t as d,_ as b,i as D,n as M,f as N,a as f,ab as a,M as r,A,aF as $,aG as B}from"./index.5c0f2128.js";import{F as R}from"./Format.45ca4c10.js";import{C as x}from"./index.9dbe458e.js";const O={class:"chatbot-options row"},G=["onClick"],I={class:"title"},L={class:"description"},j=y({__name:"ChatbotOptionsBlock",props:{options:{type:Array,required:!0}},emits:["submitOption"],setup(t,{emit:e}){const s=t,n=e,o=m=>{n("submitOption",m)};return(m,C)=>(l(),u("div",O,[(l(!0),u(w,null,S(s.options,p=>(l(),u("div",{class:"option cursor-pointer",key:p.description,onClick:Z=>o(p.prompt)},[_("div",I,d(p.title),1),_("div",L,d(p.description),1)],8,G))),128))]))}});var te=b(j,[["__scopeId","data-v-0cd9cf84"]]);const k=y({__name:"MessageCardNew",props:{message:{type:String,default:null},role:{type:String,required:!0},selectedMessage:{type:Boolean,required:!0},messageId:{type:String,required:!0}},setup(t){const e=t,s=D(()=>{if(e.role==="user"){const o=e.message?.replace(/'/g,'"');return JSON.parse(o)[0]}else return R.removeChatbotResponseId(e.message)});return(n,o)=>e.message?(l(),u("div",{key:0,class:M(["message",{"user-message":e.role==="user","chatbot-message":e.role==="bot","selected-message":e.selectedMessage,"d-none":e.role==="id"}])},d(s.value)+" ",3)):N("",!0)}});var se=b(k,[["__scopeId","data-v-68c16e94"]]);const c=f.BUILD_ENABLE_CHATBOT_DUMMY_DATA_MODE,i=window.location.origin,h=f.BUILD_CHATBOT_API_DOMAIN_STAGING;let v;const g=async(t,e)=>(await v.predict(t,e)).data[0],E=async()=>{console.log("connect to : ",h),v=await x.connect(h)},H=async()=>c?await a.get(`${i}/dummyData/chatbot/chatbotGetHistoryListSample.json`):await a.get("groups"),T=async t=>c?await a.get(`${i}/dummyData/chatbot/chatbotDeleteHistorySample.json`):await a.del(`groups/${t}`),z=async(t,e)=>(console.log("patch bookcase: ",t,e),c?await a.get(`${i}/dummyData/chatbot/chatbotPatchHistorySample.json`):await a.patch(`groups/${t}`,e)),U=async t=>{if(c){const e=await a.get(`${i}/dummyData/chatbot/chatbotGetHistorySampleWithReference.json`);return t!=="b1"?e:{result:{page_title:"No history",history_messages:[]}}}else return await g("/get_history_messages",["docRL"])},F=async t=>{if(c)return await g("/recommend_prompts",["docRL",t]);{const e=t==="zh"?"Zh":t==="ja"?"Ja":"En";return await a.get(`${i}/dummyData/chatbot/chatbotGetRecommendSample${e}.json`)}},P=async(t,e,s,n)=>{try{return console.log("send message: ",[s.message,e,n]),c?await g("/messages",[[s.message,"docRLtest, docRL",n],s.history,2048,.7,.95,null]):(await a.get(`${i}/dummyData/chatbot/chatbotGetResponseSample.json`)).data[0]}catch(o){throw console.error("Error message:",o),o}},q=async t=>c?await a.get(`${i}/dummyData/chatbot/chatbotGetDirectoriesSample.json`):await a.get(`chatbot_directories/${t}`),Q=t=>t.map(s=>({...s,nodes:s.nodes.map(n=>({...n,selected:!1}))})),W=async t=>{console.log("setChatbotScope: ",t)},J=async t=>c?await a.get(`${i}/dummyData/chatbot/chatbotGetReferencesSample.json`):await a.get(`references/${t}`),V=async t=>{console.log("report: ",t)};var ae={initAppClient:E,getConversations:H,deleteConversation:T,patchConversation:z,getHistoryMessages:U,getRecommendPrompts:F,postMessage:P,getDirectories:q,processDirectories:Q,setChatbotScope:W,getReferences:J,reportBadResponse:V};const Y=[r("circle",{cx:"15",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[r("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"105",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var re=A({name:"QSpinnerDots",props:$,setup(t){const{cSize:e,classes:s}=B(t);return()=>r("svg",{class:s.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},Y)}}),oe=[{value:"en-US",label:"en-US"},{value:"zh-TW",label:"zh-TW"},{value:"zh-CN",label:"zh-CN"}];export{ae as C,re as Q,te as _,se as a,oe as p};