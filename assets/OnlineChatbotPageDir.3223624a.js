import{Q as me,_ as ge,p as he,a as fe}from"./promptLangOptions.439f72b5.js";import{_ as ye,d as be,k as Ce,r as n,h as we,i as Te,a as v,S as Ae,l as ke,be as Ee,o as l,e as r,g as a,n as N,t as m,q as g,y as D,f as u,F as y,aH as I,u as b,bj as Me,w as L,s as X,x as Y,p as V,a$ as Oe,bh as Ne,aO as Z,bi as Ie,b3 as Re,aI as Se,aJ as Be}from"./index.1965fc76.js";import{Q as He}from"./QSelect.0c87cb15.js";import{F as j}from"./Format.45ca4c10.js";import{N as De}from"./Notify.4932b398.js";import{C as h}from"./OnlineChatbotServices.b2deeda5.js";import"./QItemSection.8ebc5b3b.js";import"./QItemLabel.8fb6ffef.js";import"./format.743e8b2a.js";const ee=R=>(Se("data-v-69ef9b62"),R=R(),Be(),R),$e={key:0,class:"chatbot-page"},Pe={class:"chatbot-header"},xe={class:"title"},Ue={key:0,class:"chatbot-header__expand row justify-between"},qe={class:"left-part col-10"},Le={class:"chatbot-header__expand__title row items-center"},Ve={class:"routes"},je={class:"route-index q-mr-sm col"},ze={class:"nodes col row items-center"},Qe=["onClick"],Fe={key:0,class:"q-mx-xs"},Ge=ee(()=>a("span",{class:"material-symbols-outlined"}," chevron_right ",-1)),We=[Ge],Je={class:"right-part col-2"},Ke={key:0,class:"toggle-on-demand row justify-end"},Xe={key:1,class:"apply-button row justify-end"},Ye={class:"chatbot-page__message-area column"},Ze=ee(()=>a("div",{class:"sidebar-title q-mb-sm"},"References:",-1)),es={class:"sources q-ml-sm column"},ss={href:"",class:""},ts={class:"q-mr-xs icon-wrapper"},as=["href"],os={class:"report-button"},ls={key:0,class:"message user-message"},ns={key:1,class:"row items-center justify-end"},rs={class:"q-ml-xs text-negative"},is={key:2,class:"message"},cs={class:"chatbot-footer"},us={key:0,class:"lang-select row justify-end"},ds={class:"chatbot-footer__content"},_s={class:"chatbot-footer__content__input row w-100 full-width justify-between items-center"},ps=["placeholder","onKeydown"],vs=be({__name:"OnlineChatbotPageDir",setup(R){const{t:se,locale:te}=Ce(),ae=n(!1),f=n(),A=n(),z=n(!1),Q=n(""),p=n(""),oe=we(),S=Te(()=>oe.params.bookcaseId.toString()),le=n(),d=n(),$=n(),k=n(),P=n(!1),C=n(!0),F=n(),w=n([]),x=n([]),B=n(""),U=n(v.BUILD_CHATBOT_TEXTAREA_LANGUAGE),E=n(),H=n(!0),M=n(v.RUNTIME_EXPAND_CHATBOT_DATA_SCOPE_MENU&&v.RUNTIME_ENABLE_CHATBOT_DATA_SCOPE_MODIFICATION),G=n(v.RUNTIME_ENABLE_CHATBOT_DATA_SCOPE_MODIFICATION),ne=()=>{G.value&&(M.value=!M.value)},O=async s=>{if(!C.value)return;$.value=s,p.value="",P.value=!0,C.value=!1;const e=w.value.join(",");try{const o=await h.postMessage(le.value,e,{message:s,history:d.value},U.value);d.value=o,P.value=!1,k.value=""}catch(o){k.value=o.message||"Error"}finally{C.value=!0}A.value.scrollTop=A.value.scrollHeight},re=async s=>{const e=await h.getRecommendPrompts(s);F.value=e.result.recommend_prompts},ie=async s=>{const e=await h.getHistoryMessages(s);d.value=e.result.history_messages,Q.value=e.result.page_title},ce=async s=>{if(v.RUNTIME_SHOW_CHATBOT_DATA_SCOPE_REFERENCES){B.value=s;const e=await h.getReferences(s);x.value=e.result.references}},ue=async()=>{w.value=[S.value];const e=(await h.getDirectories(S.value)).result.data;E.value=h.processDirectories(e)},W=async()=>{w.value=[],E.value?.forEach(s=>{let e=s.nodes.find(o=>o.selected===!0);e&&w.value.push(e.id)}),w.value.length||(w.value=[S.value])},de=async(s,e,o)=>{o||(E.value=E.value?.map((i,t)=>{if(t===s){let _=!1,c=!1,T=!1;return{...i,nodes:i.nodes.map((q,K)=>(K===e&&(_=!0,c=!q.selected),_&&K>e&&(T=c),{...q,selected:c,prevNodeSelected:T}))}}return i}),H.value&&(W(),await _e()))};Ae(()=>p.value,s=>{f.value.style.height="25px";const e=v.RUNTIME_CHATBOT_TEXTAREA_HEIGHT;if(s){if(f.value.clientHeight>=e)return;const o=f.value.scrollHeight>=e?e:f.value.scrollHeight;f.value.style.height="25px",f.value.style.height=o+"px"}});const _e=async()=>{console.log("resend request");let s="";for(let o=d.value.length-1;o>=0;o--){const i=d.value[o]?.[0];if(i){const t=i.replace(/'/g,'"');s=JSON.parse(t)[0];break}}const e=o=>{for(let i=o.length-1;i>=0;i--)if(o[i][0]!==null)return o.slice(0,i);return o};d.value=e(d.value),await O(s)},pe=()=>{if(!p.value)for(let s=d.value.length-1;s>=0;s--){const e=d.value[s]?.[0];if(e){const o=e.replace(/'/g,'"'),t=JSON.parse(o)[0];p.value=t;return}}},J=async s=>{console.log("page init: ",s),await ue(),await ie(s),await re(te.value),z.value=!0},ve=async s=>{console.log("report: ",s);const e=await h.reportBadResponse(s);console.log(e),De.error(se("$i18n_Reported_$i18n"))};return ke(async()=>{await h.initAppClient(),await J(S.value),A.value.scrollTop=A.value.scrollHeight}),Ee(async(s,e,o)=>{o(),await J(s.params.bookcaseId.toString())}),(s,e)=>{const o=fe,i=ge;return z.value?(l(),r("div",$e,[a("div",Pe,[a("div",{class:N(["document-title row justify-center items-center",{"q-mb-sm":M.value}])},[a("span",xe,m(Q.value),1),G.value?(l(),r("div",{key:0,class:"row expand-scope items-center cursor-pointer",onClick:ne},[g(D,{name:M.value?"sym_o_expand_circle_up":"sym_o_expand_circle_down",class:"",size:"sm"},null,8,["name"])])):u("",!0)],2),M.value?(l(),r("div",Ue,[a("div",qe,[a("div",Le,m(s.$t("$i18n_RAG_data_scope_$i18n"))+": ",1),a("div",Ve,[(l(!0),r(y,null,I(E.value,(t,_)=>(l(),r("div",{class:"route row items-center q-mb-sm",key:t.id},[a("div",je,m(_+1)+".",1),a("div",ze,[(l(!0),r(y,null,I(t.nodes,(c,T)=>(l(),r(y,{key:c.id},[a("div",{class:N(["node",{active:c.selected,disabled:c.prevNodeSelected}]),onClick:q=>de(_,T,c.prevNodeSelected)},m(c.name),11,Qe),T<t.nodes.length-1?(l(),r("div",Fe,We)):u("",!0)],64))),128))])]))),128))])]),a("div",Je,[b(v).RUNTIME_ENABLE_CHATBOT_DATA_SCOPE_ON_DEMAND?(l(),r("div",Ke,[g(Me,{modelValue:H.value,"onUpdate:modelValue":e[0]||(e[0]=t=>H.value=t),label:`On-demand ${s.$t("$i18n_Mode_$i18n")}`,"left-label":"",color:"indigo-7",disable:""},null,8,["modelValue","label"])])):u("",!0),H.value?u("",!0):(l(),r("div",Xe,[g(X,{style:{background:"#3e52b5",color:"white"},push:"",size:"md",onClick:W},{default:L(()=>[Y(m(s.$t("$i18n_APPLY_$i18n")),1)]),_:1})]))])])):u("",!0)]),a("div",Ye,[x.value.length?(l(),r("div",{key:0,class:N(["chatbot-page__sidebar customized-scrollbar column justify-between",{collapse:ae.value}])},[Ze,a("div",es,[(l(!0),r(y,null,I(x.value,(t,_)=>(l(),r("div",{class:"source",key:t.referenceId},[a("a",ss,[a("span",ts," ["+m(_+1)+"] ",1),a("a",{href:t.url,target:"_blank",class:"origin-name"},m(t.name),9,as)])]))),128))]),a("div",os,[g(X,{icon:"report",color:"primary",label:"Bad Response",onClick:e[1]||(e[1]=t=>ve(B.value))})])],2)):u("",!0),a("div",{class:"chatbot-message-wrapper customized-scrollbar column",ref_key:"messageWrapper",ref:A},[(l(!0),r(y,null,I(d.value,t=>(l(),r(y,{key:t},[(l(!0),r(y,null,I(t,(_,c)=>(l(),V(o,{key:_,message:_,role:c===0?"user":c===1?"bot":"id",messageId:b(j).getChatbotResponseId(t[1]),selectedMessage:!!(B.value&&b(j).getChatbotResponseId(t[1])===B.value&&c===1),onClick:T=>ce(b(j).getChatbotResponseId(t[1]))},null,8,["message","role","messageId","selectedMessage","onClick"]))),128))],64))),128)),P.value?(l(),r("div",ls,[Y(m($.value)+" ",1),k.value?(l(),V(D,{key:0,class:"restart-btn",name:"sym_o_restart_alt",size:"md",onClick:e[2]||(e[2]=t=>O($.value))})):u("",!0)])):u("",!0),k.value?(l(),r("div",ns,[g(D,{name:"sym_o_error",color:"negative"}),a("span",rs,m(k.value),1)])):u("",!0),C.value?u("",!0):(l(),r("div",is,[g(me,{color:"primary",size:"2em"})]))],512),!d.value.length&&b(v).RUNTIME_SHOW_CHATBOT_RECOMMEND_PROMPT?(l(),V(i,{key:1,options:F.value,onSubmitOption:O},null,8,["options"])):u("",!0),a("div",cs,[b(v).RUNTIME_SHOW_CHATBOT_PROMPT_LANGUAGE?(l(),r("div",us,[g(He,{dense:"",borderless:"",modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=t=>U.value=t),options:b(he),behavior:"menu","emit-value":""},{prepend:L(()=>[g(Ie,null,{default:L(()=>[g(D,{name:"sym_o_language",size:"sm"})]),_:1})]),_:1},8,["modelValue","options"])])):u("",!0),a("div",ds,[a("div",_s,[Oe(a("textarea",{rows:"1",class:"customized-scrollbar",placeholder:s.$t("$i18n_Input_problem_$i18n"),ref_key:"textareaBlock",ref:f,"onUpdate:modelValue":e[4]||(e[4]=t=>p.value=t),onKeydown:[Z(pe,["up"]),e[5]||(e[5]=Z(Re(t=>O(p.value),["alt"]),["enter"]))]},null,40,ps),[[Ne,p.value]]),a("div",{class:N(["submit-btn",{"cursor-pointer":p.value&&C.value}]),onClick:e[6]||(e[6]=t=>O(p.value))},[a("img",{src:"/images/icons/submit_btn.svg",alt:"",class:N({empty:!p.value||!C.value})},null,2)],2)])])])])])):u("",!0)}}});var As=ye(vs,[["__scopeId","data-v-69ef9b62"]]);export{As as default};
