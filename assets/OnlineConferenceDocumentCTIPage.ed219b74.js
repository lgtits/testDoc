import{a as d,ab as p,_ as y,d as w,r as i,l as C,o as l,e as _,g as e,u as g,t as h,f,F as D,aH as E,aI as U,aJ as A}from"./index.1965fc76.js";const M=d.BUILD_ENABLE_CTI_DUMMY_DATA_MODE,k=window.location.origin,N=async t=>M?(await p.get(`${k}/dummyData/cti/ctiGetUrlSample.json`)).result.url:(await p.get(`cti/${t}`)).result.url;var S={getCTIUrl:N};const v=t=>(U("data-v-a454ec98"),t=t(),A(),t),b={key:0,class:"cti-page"},O={class:"page-title"},x={key:0},L={class:"page-content row justify-center relative-position items-start"},P=v(()=>e("div",{class:"empty"},null,-1)),R={class:"content-wrapper"},j=["src"],B={class:"legend-area"},$=v(()=>e("div",{class:"legend-area__title"},"Legend",-1)),G={class:"legend-area__legends column"},F=["src"],H={class:"icon-name"},V=5,W="id1",J=w({__name:"OnlineConferenceDocumentCTIPage",setup(t){const a=i(!1),n=i(""),u=i(""),m=async(o=0)=>{try{const r=await S.getCTIUrl(W),c=(await p.get(r)).objects.find(T=>T.type==="report");if(c&&c.name)u.value=c.name;else throw new Error("No report found")}catch(r){console.error("Error fetching and parsing data:",r),o<V?(console.log(`Retrying... Attempt ${o+1}`),await new Promise(s=>setTimeout(s,1e3)),await m(o+1)):console.error("Max retries reached. Unable to fetch the page title.")}},I=[{name:"Report",path:"/icons/cti/report.png"},{name:"Identity",path:"/icons/cti/identity.png"},{name:"Attack pattern",path:"/icons/cti/attack_pattern.png"},{name:"Note",path:"/icons/cti/note.png"}];return C(async()=>{a.value=!0,n.value="https://raw.githubusercontent.com/lgtits/mkup/main/src/assets/stixTest.json",await m()}),(o,r)=>a.value?(l(),_("div",b,[e("h1",O,[g(d).RUNTIME_SHOW_CTI_PAGE_TITLE?(l(),_("span",x,h(u.value),1)):f("",!0)]),e("div",L,[P,e("div",R,[e("iframe",{frameborder:"0",style:{width:"100%",height:"100%"},src:`${g(d).RUNTIME_CTI_WIDGET_DOMAIN}?url=${n.value}`},null,8,j)]),e("div",B,[$,e("div",G,[(l(),_(D,null,E(I,s=>e("div",{class:"legend row items-center",key:s.name},[e("img",{src:s.path},null,8,F),e("span",H,h(s.name),1)])),64))])])])])):f("",!0)}});var Y=y(J,[["__scopeId","data-v-a454ec98"]]);export{Y as default};
