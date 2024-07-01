import{_ as I,d as N,h as $,r as f,i as v,l as O,m as b,o as t,e as n,f as a,g as o,t as y,F as D,aH as P,u as S,a as T,q as c,y as _,p as h,w as d,x as U}from"./index.012de2e5.js";import{c as V}from"./copy-to-clipboard.e02750fc.js";import{N as C}from"./Notify.bbd61ef5.js";import{C as x}from"./OnlineConferenceServices.57663ace.js";const E={key:0,class:"conference"},j={key:0,class:"no-result"},B={key:1,class:"content-wrapper"},L={class:"page-title row justify-between items-center"},z={class:"title"},F={key:0},M={key:1},q={class:"documents"},H=["id"],R={key:0,class:"icons q-mr-sm column items-center justify-center",style:{height:"80px"}},A={class:"icon"},Q={class:"content"},W={class:"document-title row justify-between items-center"},Y={class:"title row justify-between"},G={class:"row items-center"},J=N({__name:"OnlineConferencePage",setup(K){const p=$(),r=f(),m=f(!1),i=v(()=>p.params.year.toString()),l=v(()=>p.params.conferenceId.toString()),k=s=>{w(window.location+"#"+s)},w=(s="")=>{!s||V(s).then(()=>{C.success(`COPIED: ${s}`)}).catch(()=>{C.error("COPY FAILED")})},g=async()=>{const s=await x.getConference(i.value,l.value);r.value=s?.data};return O(async()=>{await g(),m.value=!0}),(s,X)=>{const u=b("router-link");return m.value?(t(),n("div",E,[r.value?a("",!0):(t(),n("div",j,"No result.")),r.value?(t(),n("div",B,[o("section",L,[o("h1",z,[o("span",null,y(r.value.conferenceName),1),r.value.isVehicleOnly?(t(),n("span",F," (Vehicle-only)")):a("",!0),r.value.isPreprint?(t(),n("span",M," (Preprint)")):a("",!0)])]),o("section",q,[(t(!0),n(D,null,P(r.value.conferenceDocuments,e=>(t(),n("div",{class:"document row-reverse",key:e.documentId,id:e.documentId},[S(T).RUNTIME_SHOW_DOCUMENT_LIST_ICONS?(t(),n("div",R,[o("div",A,[c(_,{name:"sym_o_share",size:"sm",color:"primary",class:"cursor-pointer",onClick:Z=>k(e.documentId)},null,8,["onClick"])]),e.paperUrl?(t(),h(u,{key:0,to:e.paperUrl,class:"icon"},{default:d(()=>[c(_,{name:"sym_o_article",size:"sm",class:"cursor-pointer",color:"blue-10"})]),_:2},1032,["to"])):a("",!0),e.slideUrl?(t(),h(u,{key:1,to:e.slideUrl,class:"icon"},{default:d(()=>[c(_,{name:"sym_o_monitor",size:"sm",color:"blue-10"})]),_:2},1032,["to"])):a("",!0)])):a("",!0),o("div",Q,[o("div",W,[o("div",Y,[o("div",G,[c(u,{to:e.documentType==="paper"?`/${s.$i18n.locale}/conference/${i.value}/${l.value}/papers#${e.documentId}`:`/${s.$i18n.locale}/conference/${i.value}/${l.value}/${e.documentId}`,class:"document-name link"},{default:d(()=>[U(y(e.documentName),1)]),_:2},1032,["to"])])])])])],8,H))),128))])])):a("",!0)])):a("",!0)}}});var ne=I(J,[["__scopeId","data-v-95d9bfa6"]]);export{ne as default};
