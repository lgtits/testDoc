import{a as i,ab as o}from"./index.5760d8ee.js";const a=i.BUILD_ENABLE_CHATBOT_DUMMY_DATA_MODE,r=window.location.origin,m=i.BUILD_CHATBOT_API_DOMAIN_STAGING;let u;const n=async(e,t)=>(await u.predict(e,t)).data[0],l=async()=>{console.log("connect to : ",m)},g=async()=>a?await o.get(`${r}/dummyData/chatbot/chatbotGetHistoryListSample.json`):await n("/get_groups",["updated_at"]),d=async e=>a?await n("/delete_group",["group_id"]):await o.get(`${r}/dummyData/chatbot/chatbotDeleteHistorySample.json`),h=async(e,t)=>(console.log("patch bookcase: ",e,t),a?await o.get(`${r}/dummyData/chatbot/chatbotPatchHistorySample.json`):await n("/patch_group",["group_id","\u65B0\u7684\u66F8\u6AC3\u540D\u7A31"])),y=async e=>{if(a){const t=await o.get(`${r}/dummyData/chatbot/chatbotGetHistorySampleWithReference.json`);return e!=="b1"?t:{result:{page_title:"No history",history_messages:[]}}}else return await n("/get_history_messages",["docRL"])},b=async e=>{if(a){const t=e==="zh"?"Zh":e==="ja"?"Ja":"En";return await o.get(`${r}/dummyData/chatbot/chatbotGetRecommendSample${t}.json`)}else return await n("/recommend_prompts",["docRL",e])},D=async(e,t,s,c)=>{try{return console.log("send message: ",[s.message,t,c]),a?(await o.get(`${r}/dummyData/chatbot/chatbotPostMessageSample.json`)).data[0]:await n("/messages",[[s.message,"docRLtest, docRL",c],s.history,2048,.7,.95,null])}catch(p){throw console.error("Error message:",p),p}},_=async e=>{if(a)return await o.get(`${r}/dummyData/chatbot/chatbotGetDirectoriesSample.json`);{const t=await n("/get_directories",[e]);return console.log("resp: ",t),t}},w=e=>e.map(s=>({...s,nodes:s.nodes.map(c=>({...c,selected:!1}))})),f=async e=>{console.log("setChatbotScope: ",e)},C=async e=>a?await o.get(`${r}/dummyData/chatbot/chatbotGetReferencesSample.json`):await n("/get_references",[e]),S=async e=>(console.log("report: ",e),a?await o.get(`${r}/dummyData/chatbot/chatbotPostReportBadResponseSample.json`):await n("/report_message",["message_id_1"]));var R={initAppClient:l,getConversations:g,deleteConversation:d,patchConversation:h,getHistoryMessages:y,getRecommendPrompts:b,postMessage:D,getDirectories:_,processDirectories:w,setChatbotScope:f,getReferences:C,reportBadResponse:S};export{R as C};
