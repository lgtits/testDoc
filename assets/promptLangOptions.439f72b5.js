import{d,o,e as i,F as g,aH as v,g as p,t as u,_ as m,i as f,n as b,f as y,M as t,A as h,aF as C,aG as S}from"./index.1965fc76.js";import{F as N}from"./Format.45ca4c10.js";const M={class:"chatbot-options row"},x=["onClick"],w={class:"title"},k={class:"description"},B=d({__name:"ChatbotOptionsBlock",props:{options:{type:Array,required:!0}},emits:["submitOption"],setup(s,{emit:e}){const a=s,c=e,r=l=>{c("submitOption",l)};return(l,_)=>(o(),i("div",M,[(o(!0),i(g,null,v(a.options,n=>(o(),i("div",{class:"option cursor-pointer",key:n.description,onClick:F=>r(n.prompt)},[p("div",w,u(n.title),1),p("div",k,u(n.description),1)],8,x))),128))]))}});var I=m(B,[["__scopeId","data-v-0cd9cf84"]]);const O=d({__name:"MessageCardNew",props:{message:{type:String,default:null},role:{type:String,required:!0},selectedMessage:{type:Boolean,required:!0},messageId:{type:String,required:!0}},setup(s){const e=s,a=f(()=>{if(e.role==="user"){const r=e.message?.replace(/'/g,'"');return JSON.parse(r)[0]}else return N.removeChatbotResponseId(e.message)});return(c,r)=>e.message?(o(),i("div",{key:0,class:b(["message",{"user-message":e.role==="user","chatbot-message":e.role==="bot","selected-message":e.selectedMessage,"d-none":e.role==="id"}])},u(a.value),3)):y("",!0)}});var D=m(O,[["__scopeId","data-v-7ae43e26"]]);const z=[t("circle",{cx:"15",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),t("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[t("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),t("circle",{cx:"105",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var E=h({name:"QSpinnerDots",props:C,setup(s){const{cSize:e,classes:a}=S(s);return()=>t("svg",{class:a.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},z)}}),Q=[{value:"en-US",label:"en-US"},{value:"zh-TW",label:"zh-TW"},{value:"zh-CN",label:"zh-CN"}];export{E as Q,I as _,D as a,Q as p};
