import{_ as q,a as L,b as j}from"./FilterBlockSide.7b93ef12.js";import{d as F,r as c,l as B,_ as T,m as W,o as u,e as g,g as i,q as w,w as $,x as k,t as y,n as H,F as A,aH as R,p as P,f as C,h as J,j as K,aL as I,v as Q}from"./index.fbe37504.js";import{S as _}from"./OnlineSearchServices.361916bd.js";import"./QPagination.ef0d7d2b.js";import"./format.962d7e57.js";import"./QSelect.a38dba8d.js";import"./QItemSection.7c33c23b.js";import"./QItemLabel.3b030de5.js";import"./QPopupProxy.624fab45.js";import"./QExpansionItem.ba9b2d6d.js";const U=F({name:"IssueCard",props:{uuid:{type:String,required:!0},issue:{type:Object,required:!0}},setup(){const e=c(),l=c(),d=c(!0),o=c(!0),p=()=>{d.value=!0,o.value=!0},n=()=>{e.value.clientHeight>28&&(d.value=!1),l.value.clientHeight>28&&(o.value=!1)};return B(()=>{n()}),{isShowAllComponents:d,isShowAllIssues:o,components:e,issues:l,showAllTags:p}}}),X={class:"issue-card"},Y={class:"issue-info"},Z={class:"issue-content"},x={class:"date"},ee={class:"tags"},se={class:"component-tags"},te={class:"issue-tags"};function ae(e,l,d,o,p,n){const r=W("router-link");return u(),g("div",X,[i("div",Y,[w(r,{to:`/${e.$i18n.locale}/issue/${e.issue.data_key}`,class:"issue-title cursor-pointer"},{default:$(()=>[k(y(e.issue.name),1)]),_:1},8,["to"]),i("div",Z,[i("span",x,y(e.issue.date),1)]),i("div",ee,[i("div",se,[i("div",{class:H(["tags-wrapper",{fixedHeight:!e.isShowAllComponents}]),ref:"components"},[(u(!0),g(A,null,R(e.issue.componentTags,s=>(u(),P(r,{class:"component-tag",key:s.name,to:s.data_key?`/${e.$i18n.locale}/component/${s.data_key}`:""},{default:$(()=>[k(y(s.name),1)]),_:2},1032,["to"]))),128))],2),e.isShowAllComponents?C("",!0):(u(),g("div",{key:0,class:"component-tag tag__more",onClick:l[0]||(l[0]=(...s)=>e.showAllTags&&e.showAllTags(...s))}," ... "))]),i("div",te,[i("div",{class:H(["tags-wrapper",{fixedHeight:!e.isShowAllIssues}]),ref:"issues"},[(u(!0),g(A,null,R(e.issue.issueTags,s=>(u(),P(r,{class:"issue-tag",key:s.name,to:s.data_key?`/${e.$i18n.locale}/issue/${s.data_key}`:""},{default:$(()=>[k(y(s.name),1)]),_:2},1032,["to"]))),128))],2),e.isShowAllIssues?C("",!0):(u(),g("div",{key:0,class:"issue-tag tag__more",onClick:l[1]||(l[1]=(...s)=>e.showAllTags&&e.showAllTags(...s))}," ... "))])])])])}var N=T(U,[["render",ae],["__scopeId","data-v-2c86eef0"]]);const oe=F({name:"IssueBlock",components:{IssueCard:N},props:{uuid:{type:String,required:!0},issues:{type:Array,required:!0}},setup(){return B(()=>{}),{}}}),ne={class:"issue-cards"};function re(e,l,d,o,p,n){const r=N;return u(),g("div",ne,[(u(!0),g(A,null,R(e.issues,s=>(u(),P(r,{key:s.data_key,issue:s,uuid:e.uuid},null,8,["issue","uuid"]))),128))])}var V=T(oe,[["render",re],["__scopeId","data-v-6cdf9507"]]);const ue=F({name:"IssuePage",components:{FilterBlockSide:q,ResultSumSort:L,IssueBlock:V,Pagination:j},setup(){const e=J(),l=K(),d=c(!1),o=I({currentPage:1,dataPerPage:10,lastPage:15,maxPage:5}),p=I({}),n=c(""),r=c(e.name?e.name.toString():""),s=I({sortRules:[],nowSort:""}),v=c(""),m=c([]),f=c(0),D=async()=>{const a=await _.getSortRules(r.value,n.value);s.sortRules=a.result,s.nowSort=a.result[0].sort_object,v.value=a.result[0].sort_name},O=async()=>{if(n.value=localStorage.getItem("uuid")||"",!n.value){l.replace({name:"index"});return}await D();const a=await _.getSearchResults(r.value,n.value,s.nowSort,o.currentPage);m.value=a.result.issues,f.value=a.result.totalAmount,Q.keyword=a.keyword,o.lastPage=a.result.page.lastPage,await M(),d.value=!0},E=async a=>{o.currentPage=a;const t=await _.getSearchResults(r.value,n.value,s.nowSort,o.currentPage,p);m.value=t.result.issues},G=async a=>{for(let h in a)p[h]=a[h];const t=await _.getSearchResults(r.value,n.value,s.nowSort,o.currentPage,p);m.value=t.result.issues,f.value=t.result.totalAmount,o.lastPage=t.result.page.lastPage},z=async a=>{s.nowSort=a;const t=await _.getSearchResults(r.value,n.value,s.nowSort,o.currentPage,p);m.value=t.result.issues,f.value=t.result.totalAmount,o.lastPage=t.result.page.lastPage},S=c([]),M=async()=>{let a=(await _.getSearchFilter("tag",n.value)).result;S.value=a,S.value&&S.value.forEach(async t=>{const h=await _.getSearchFilterObject("tag",t.filter_object,n.value),b=_.processFilterList(h.result);t.isTyping=!1,t.input="",t.addInput="",t.content=b,t.ogContent=b,t.isTree=!!t.content[0].layer})};return B(()=>{O()}),{filter:o,issues:m,totalAmount:f,uuid:n,sort:s,defaultSort:v,filterObjects:S,isLoaded:d,getPageResult:E,getFilterResult:G,pageInit:O,setSort:z}}}),le={class:"issues"},ie={class:"sidebar"},ce={class:"content"},de={class:"result-block"};function pe(e,l,d,o,p,n){const r=q,s=L,v=V,m=j;return u(),g("div",le,[i("div",ie,[w(r,{page:"component",onFilterResult:e.getFilterResult,onPageInit:e.pageInit,filterObjects:e.filterObjects},null,8,["onFilterResult","onPageInit","filterObjects"])]),i("div",ce,[i("div",de,[e.isLoaded?(u(),P(s,{key:0,totalAmount:e.totalAmount,sort:e.sort,defaultSort:e.defaultSort,onSetSort:e.setSort},null,8,["totalAmount","sort","defaultSort","onSetSort"])):C("",!0),w(v,{issues:e.issues,uuid:e.uuid},null,8,["issues","uuid"]),w(m,{currentPage:e.filter.currentPage,lastPage:e.filter.lastPage,onGoPage:e.getPageResult},null,8,["currentPage","lastPage","onGoPage"])])])])}var $e=T(ue,[["render",pe],["__scopeId","data-v-4a750d47"]]);export{$e as default};
