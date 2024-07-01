import{bq as R,ab as x,d as C,o as m,e as v,g as e,t as d,x as S,q as _,u as i,Q as p,f as E,F as Q,_ as L,aI as j,aJ as M,n as Y,p as h,r as I,w as V,y as J,a$ as K,s as O,A as z,bd as G,W as H,X,l as Z,M as ee,af as oe,L as te,br as ne,O as A,T as se,aD as ie,bs as ae,k as le}from"./index.5c0f2128.js";import{Q as re,a as de}from"./QPopupProxy.86e04c98.js";import{C as _e}from"./ClosePopup.c2f3296b.js";import{D as ce}from"./Dialog.13779dff.js";import{N as ue}from"./Notify.7f17a196.js";import"./format.74b9b324.js";const P=R("wikiForm",{state:()=>({form:{title:"",info_link:"",info_conferenceName:"",info_conferenceDate:"",componentTags_firstTag:"",componentTags_secondTag:"",componentTags_thirdTag:"",issueTags_firstTag:"",issueTags_secondTag:"",issueTags_thirdTag:"",documentLink_name:"",documentLink_link:"",mediaLink_name:"",mediaLink_link:""},googleFormUrl:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSeveuFrCAhOUZENMakwNdxhfnMCNDMLBpld1JbKO84xywajxQ/formResponse"}),getters:{},actions:{async submitForm(){const l=["entry.313648501","entry.2082854393","entry.32777664","entry.1925978773","entry.1432668595","entry.56895813","entry.494589223","entry.1993763848","entry.591726256","entry.1222500645","entry.1013957812","entry.1070103033","entry.1056526353","entry.1452332189"],o=new FormData;for(const[n,a]of l.entries())o.append(a,this.form[Object.keys(this.form)[n]]);await x.post(this.googleFormUrl,o)}}});const D=l=>(j("data-v-246ca3c4"),l=l(),M(),l),me={key:0,id:"documents-links",class:"documents-links"},pe={class:"block__title"},fe={class:"block__documents"},$e={class:"example q-mr-lg"},ve={class:"block__documents__document justify-start"},ge=D(()=>e("div",{class:"title"}," Fault Injection on Automotive Diagnostic Protocols 2018.pdf ",-1)),ke={class:"link"},he=D(()=>e("span",{class:"material-symbols-outlined"},"description",-1)),ye={class:"document-inputs"},be={class:"label"},Ve={class:"label"},Te={key:1,id:"documents-links",class:"documents-links"},Fe={class:"block__title"},we={class:"block__links"},Se={class:"example q-mr-lg"},Ce={class:"block__documents__document"},Pe=D(()=>e("div",{class:"title"},"RH850 Automotive MCUs",-1)),De={class:"link"},Le=D(()=>e("span",{class:"material-symbols-outlined"},"link",-1)),Ie={class:"media-inputs"},Ue={class:"label"},We={class:"label"},qe=C({__name:"WikiFormPageDocumentsLinks",props:{type:{type:String,required:!0}},setup(l){const o=P();return(n,a)=>(m(),v(Q,null,[l.type==="attachments"?(m(),v("div",me,[e("div",pe,d(n.$t("$i18n_Document_Links_$i18n")),1),e("div",fe,[e("span",$e,d(n.$t("$i18n_Example_$i18n"))+":",1),e("div",ve,[ge,e("div",ke,[S(d(n.$t("$i18n_download_$i18n"))+" ",1),he])])]),e("div",ye,[e("div",be,d(n.$t("$i18n_Name_$i18n")),1),e("div",null,[_(p,{placeholder:n.$t("$i18n_enter_name_$i18n"),filled:"",modelValue:i(o).form.documentLink_name,"onUpdate:modelValue":a[0]||(a[0]=t=>i(o).form.documentLink_name=t)},null,8,["placeholder","modelValue"])]),e("div",Ve,d(n.$t("$i18n_Link_$i18n")),1),e("div",null,[_(p,{placeholder:n.$t("$i18n_enter_link_$i18n"),filled:"",modelValue:i(o).form.documentLink_link,"onUpdate:modelValue":a[1]||(a[1]=t=>i(o).form.documentLink_link=t)},null,8,["placeholder","modelValue"])])])])):E("",!0),l.type==="links"?(m(),v("div",Te,[e("div",Fe,d(n.$t("$i18n_Media_Links_$i18n")),1),e("div",we,[e("span",Se,d(n.$t("$i18n_Example_$i18n"))+":",1),e("div",Ce,[Pe,e("div",De,[S(d(n.$t("$i18n_Link_$i18n"))+" ",1),Le])])]),e("div",Ie,[e("div",Ue,d(n.$t("$i18n_Name_$i18n")),1),e("div",null,[_(p,{placeholder:n.$t("$i18n_enter_name_$i18n"),filled:"",modelValue:i(o).form.mediaLink_name,"onUpdate:modelValue":a[2]||(a[2]=t=>i(o).form.mediaLink_name=t)},null,8,["placeholder","modelValue"])]),e("div",We,d(n.$t("$i18n_Link_$i18n")),1),e("div",null,[_(p,{placeholder:n.$t("$i18n_enter_link_$i18n"),filled:"",modelValue:i(o).form.mediaLink_link,"onUpdate:modelValue":a[3]||(a[3]=t=>i(o).form.mediaLink_link=t)},null,8,["placeholder","modelValue"])])])])):E("",!0)],64))}});var Ne=L(qe,[["__scopeId","data-v-246ca3c4"]]);const Be={id:"components-tag-block",class:"components-tag-block"},Ee={class:"tags__title"},Ae={class:"tags__block component__tags__block"},Qe={class:"tags__wrapper component__tags__wrapper"},je={class:"q-mr-lg"},Me={key:0},Oe={key:1},Re={class:"tag-input row justify-between"},xe={class:"tag-input"},Ye={class:"tag-input"},Je={class:"tag-input"},Ke=C({__name:"WikiFormPageRelatedTagBlock",props:{type:{type:String,required:!0}},setup(l){const o=P(),n=l;return(a,t)=>(m(),v("div",Be,[e("div",Ee,d(n.type==="components"?a.$t("$i18n_Component_Tags_$i18n"):a.$t("$i18n_Issue_Tags_$i18n")),1),e("div",Ae,[e("div",Qe,[e("span",je,d(a.$t("$i18n_Example_$i18n"))+": ",1),e("div",{class:Y(["tag",{"security-tag":n.type==="issues"}])},[n.type==="components"?(m(),v("span",Me,"STM32")):(m(),v("span",Oe,"Fault Injection"))],2)]),e("div",Re,[e("div",xe,[n.type==="components"?(m(),h(p,{key:0,filled:"",modelValue:i(o).form.componentTags_firstTag,"onUpdate:modelValue":t[0]||(t[0]=s=>i(o).form.componentTags_firstTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"])):(m(),h(p,{key:1,filled:"",modelValue:i(o).form.issueTags_firstTag,"onUpdate:modelValue":t[1]||(t[1]=s=>i(o).form.issueTags_firstTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"]))]),e("div",Ye,[n.type==="components"?(m(),h(p,{key:0,filled:"",modelValue:i(o).form.componentTags_secondTag,"onUpdate:modelValue":t[2]||(t[2]=s=>i(o).form.componentTags_secondTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"])):(m(),h(p,{key:1,filled:"",modelValue:i(o).form.issueTags_secondTag,"onUpdate:modelValue":t[3]||(t[3]=s=>i(o).form.issueTags_secondTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"]))]),e("div",Je,[n.type==="components"?(m(),h(p,{key:0,filled:"",modelValue:i(o).form.componentTags_thirdTag,"onUpdate:modelValue":t[4]||(t[4]=s=>i(o).form.componentTags_thirdTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"])):(m(),h(p,{key:1,filled:"",modelValue:i(o).form.issueTags_thirdTag,"onUpdate:modelValue":t[5]||(t[5]=s=>i(o).form.issueTags_thirdTag=s),placeholder:a.$t("$i18n_enter_tag_name_$i18n")},null,8,["modelValue","placeholder"]))])])])]))}});const ze={},Ge={class:"related-document-card cursor-pointer"},He={class:"document-title"},Xe={class:"conference-name"},Ze=e("div",{class:"document-source"},[e("span",{class:"date"},"2024-03-01")],-1);function eo(l,o){return m(),v("div",Ge,[e("div",He,[e("div",Xe,d(l.$t("$i18n_ConferenceName_$i18n"))+"\uFF1AVehicleSec 2024 ",1)]),Ze])}var oo=L(ze,[["render",eo]]);const to={class:"wiki-block"},no={class:"wiki__title"},so={class:"wiki__infos"},io={class:"example"},ao={class:"info-inputs"},lo={class:"label"},ro={class:"label"},_o={class:"label"},co={class:"row items-center justify-end"},uo=C({__name:"WikiFormPageWikiBlock",setup(l){const o=P(),n=I(),a=()=>{n.value?.hide()};return(t,s)=>(m(),v("div",to,[e("div",no,d(t.$t("$i18n_documentInfo_$i18n")),1),e("div",so,[e("div",io,d(t.$t("$i18n_Example_$i18n"))+":",1),_(oo)]),e("div",ao,[e("div",lo,d(t.$t("$i18n_Link_$i18n")),1),e("div",null,[_(p,{filled:"",placeholder:t.$t("$i18n_enter_link_$i18n"),modelValue:i(o).form.info_link,"onUpdate:modelValue":s[0]||(s[0]=c=>i(o).form.info_link=c)},null,8,["placeholder","modelValue"])]),e("div",ro,d(t.$t("$i18n_ConferenceName_$i18n")),1),e("div",null,[_(p,{filled:"",placeholder:t.$t("$i18n_enter_conference_name_$i18n"),modelValue:i(o).form.info_conferenceName,"onUpdate:modelValue":s[1]||(s[1]=c=>i(o).form.info_conferenceName=c)},null,8,["placeholder","modelValue"])]),e("div",_o,d(t.$t("$i18n_ConferenceDate_$i18n")),1),e("div",null,[_(p,{filled:"",modelValue:i(o).form.info_conferenceDate,"onUpdate:modelValue":s[3]||(s[3]=c=>i(o).form.info_conferenceDate=c)},{prepend:V(()=>[_(J,{name:"event",class:"cursor-pointer"},{default:V(()=>[_(re,{ref_key:"refPopupProxy",ref:n,cover:"","transition-show":"scale","transition-hide":"scale"},{default:V(()=>[_(de,{modelValue:i(o).form.info_conferenceDate,"onUpdate:modelValue":[s[2]||(s[2]=c=>i(o).form.info_conferenceDate=c),a],mask:"YYYY-MM-DD"},{default:V(()=>[e("div",co,[K(_(O,{label:"Close",color:"primary",flat:""},null,512),[[_e]])])]),_:1},8,["modelValue"])]),_:1},512)]),_:1})]),_:1},8,["modelValue"])])])]))}});var mo=z({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(l,{slots:o,emit:n}){const a=te(),t=I(null);let s=0;const c=[];function T(r){const g=typeof r=="boolean"?r:l.noErrorFocus!==!0,w=++s,W=(u,f)=>{n("validation"+(u===!0?"Success":"Error"),f)},q=u=>{const f=u.validate();return typeof f.then=="function"?f.then($=>({valid:$,comp:u}),$=>({valid:!1,comp:u,err:$})):Promise.resolve({valid:f,comp:u})};return(l.greedy===!0?Promise.all(c.map(q)).then(u=>u.filter(f=>f.valid!==!0)):c.reduce((u,f)=>u.then(()=>q(f).then($=>{if($.valid===!1)return Promise.reject($)})),Promise.resolve()).catch(u=>[u])).then(u=>{if(u===void 0||u.length===0)return w===s&&W(!0),!0;if(w===s){const{comp:f,err:$}=u[0];if($!==void 0&&console.error($),W(!1,f),g===!0){const N=u.find(({comp:B})=>typeof B.focus=="function"&&ne(B.$)===!1);N!==void 0&&N.comp.focus()}}return!1})}function y(){s++,c.forEach(r=>{typeof r.resetValidation=="function"&&r.resetValidation()})}function b(r){r!==void 0&&A(r);const g=s+1;T().then(w=>{g===s&&w===!0&&(l.onSubmit!==void 0?n("submit",r):r!==void 0&&r.target!==void 0&&typeof r.target.submit=="function"&&r.target.submit())})}function k(r){r!==void 0&&A(r),n("reset"),se(()=>{y(),l.autofocus===!0&&l.noResetFocus!==!0&&F()})}function F(){ie(()=>{if(t.value===null)return;const r=t.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(t.value.querySelectorAll("[tabindex]"),g=>g.tabIndex>-1);r?.focus({preventScroll:!0})})}G(ae,{bindComponent(r){c.push(r)},unbindComponent(r){const g=c.indexOf(r);g>-1&&c.splice(g,1)}});let U=!1;return H(()=>{U=!0}),X(()=>{U===!0&&l.autofocus===!0&&F()}),Z(()=>{l.autofocus===!0&&F()}),Object.assign(a.proxy,{validate:T,resetValidation:y,submit:b,reset:k,focus:F,getValidationComponents:()=>c}),()=>ee("form",{class:"q-form",ref:t,onSubmit:b,onReset:k},oe(o.default))}});const po=l=>(j("data-v-0399b06f"),l=l(),M(),l),fo={class:"wiki-form"},$o={class:"form-title w-100 text-center"},vo={class:"page-title no-sidebar q-mb-sm"},go={class:"page-title-wrap column"},ko={class:"title row items-center",id:"pageTitle",ref:"title"},ho=po(()=>e("span",{class:"required-star q-ml-sm"},"*",-1)),yo={class:"wiki-wrap"},bo={class:"content no-sidebar"},Vo={class:"template"},To={class:"template"},Fo={class:"template"},wo={class:"template"},So={class:"template"},Co={class:"btns w-100 row items-center justify-center"},Po=C({__name:"OnlineWikiFormPage",setup(l){const o=P(),n=I(),{t:a}=le(),t=()=>{ce.confirm({title:`${a("$i18n_Confirm_submit_$i18n")} \uFF1F`,message:"",onOk:async()=>{n?.value?.submit(),ue.success(a("$i18n_submitted_$i18n"))}})};return(s,c)=>{const T=uo,y=Ke,b=Ne;return m(),v(Q,null,[_(mo,{ref_key:"refForm",ref:n,onSubmit:i(o).submitForm},null,8,["onSubmit"]),e("div",fo,[e("div",$o,[e("h1",null,d(s.$t("$i18n_crowdSourcing_$i18n")),1)]),e("div",vo,[e("div",go,[e("div",ko,[S(d(s.$t("$i18n_Title_$i18n"))+" ",1),ho],512),e("div",null,[_(p,{filled:"",placeholder:s.$t("$i18n_enter_title_$i18n"),modelValue:i(o).form.title,"onUpdate:modelValue":c[0]||(c[0]=k=>i(o).form.title=k),rules:[k=>!!k||"Field is required"]},null,8,["placeholder","modelValue","rules"])])])]),e("div",yo,[e("div",bo,[e("div",Vo,[_(T)]),e("div",To,[_(y,{type:"components"})]),e("div",Fo,[_(y,{type:"issues"})]),e("div",wo,[_(b,{type:"attachments"})]),e("div",So,[_(b,{type:"links"})])])]),e("div",Co,[_(O,{class:"bg-primary text-white",onClick:t},{default:V(()=>[S(d(s.$t("$i18n_Add_$i18n")),1)]),_:1})])])],64)}}});var Bo=L(Po,[["__scopeId","data-v-0399b06f"]]);export{Bo as default};
