import{d as f,r as _,S as v,l as b,a3 as g,o as h,p as C,w as u,a9 as N,q as i,g as a,t as d,a$ as w,s as q,Q as y,b8 as D}from"./index.5760d8ee.js";import{C as $}from"./ClosePopup.460f652a.js";import{F as x}from"./Format.45ca4c10.js";const Q={class:"modal__header row items-center q-pt-none q-pb-none justify-between"},S=a("div",null,null,-1),B={class:"title"},F={class:"modal__content"},I=f({__name:"CommonModal",props:{title:{type:String,required:!1},placeholder:{type:String,required:!1},defaultName:{type:String,required:!1}},emits:["submitInput"],setup(l,{emit:r}){const s=l,t=_(""),m=r,c=e=>{m("submitInput",e),t.value=""},p=()=>{const e=x.getNowDateTime();t.value=`\u66F8\u6AC3 ${e}`};return v(()=>s.defaultName,e=>{e&&(t.value=e)}),b(()=>{s.defaultName&&(t.value=s.defaultName)}),g(()=>{s.title==="\u66F8\u6AC3\u540D\u7A31"&&p()}),(e,o)=>(h(),C(N,{class:"modal"},{default:u(()=>[i(D,null,{default:u(()=>[a("div",Q,[S,a("div",B,d(l.title),1),w(i(q,{icon:"close",flat:"",round:"",dense:""},null,512),[[$]])]),a("div",F,[i(y,{borderless:"",class:"text-input bg-gray border-4px",placeholder:l.placeholder,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},null,8,["placeholder","modelValue"])]),a("div",{class:"modal__submit cursor-pointer",onClick:o[1]||(o[1]=n=>c(t.value))},d(e.$t("$i18n_submit_$i18n")),1)]),_:1})]),_:1}))}});export{I as _};
