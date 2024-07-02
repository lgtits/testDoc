import{a as g,ab as t}from"./index.1965fc76.js";const o=g.BUILD_ENABLE_SEARCH_DUMMY_DATA_MODE,a=window.location.origin,l=e=>o?t.get(`${a}/dummyData/search/getHintSample.json`):t.post("/search/hint",e),p=e=>o?t.get(`${a}/dummyData/search/getTerminologySample.json`):t.post("/search/terminology",e),h=(e={keyword:"",type:"Component"})=>t.post("/search/component",e),d=(e={keyword:"",type:"Tag"})=>t.post("/search/tag",e),$=(e={keyword:"",type:"Document"})=>t.post("/search/document",e),S=(e,r)=>o?t.get(`${a}/dummyData/search/getSearchUUIDSample.json`):t.post(`/search/${e}`,r),y=(e,r)=>o?t.get(`${a}/dummyData/search/getSearchFilterSample.json`):t.get(`/filter/${e}?uuid=${r}`),f=(e,r,s)=>o?t.get(`${a}/dummyData/search/getSearchFilterObjectSample.json`):t.get(`/filter/${e}/${r}?uuid=${s}`),D=e=>e.map(s=>m(s)),m=e=>{const r=e;if(r.checked=!1,r.hidden=!1,r.layer)for(const s of r.layer)m(s);return r},j=(e,r,s,c,u)=>{let n="";switch(e){case"components":n="component";break;case"documents":n="document";break;case"tags":n="tag";break;default:n="component"}if(o)return n==="component"?t.get(`${a}/dummyData/search/getSearchComponentsResultSample.json`):n==="tag"?t.get(`${a}/dummyData/search/getSearchTagsResultSample.json`):t.get(`${a}/dummyData/search/getSearchDocumentsResultSample.json`);if(u){const i=encodeURIComponent(JSON.stringify(u));return t.get(`/search/${n}/result?uuid=${r}&sorted=${s}&page=${c}&filter=${i}`)}else return t.get(`/search/${n}/result?uuid=${r}&sorted=${s}&page=${c}`)},b=(e,r)=>{let s="";switch(e){case"components":s="component";break;case"documents":s="document";break;case"issues":s="tag";break;default:s="component"}return o?t.get(`${a}/dummyData/search/getSortRuleSample.json`):t.get(`sort/${s}?uuid=${r}`)};var R={getHint:l,getTerminology:p,searchComponent:h,searchDocument:$,getResultUUID:S,searchTag:d,getSearchFilter:y,getSearchFilterObject:f,processFilterList:D,getSearchResults:j,getSortRules:b};export{R as S};
