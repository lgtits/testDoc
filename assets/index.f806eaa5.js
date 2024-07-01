import{b1 as X}from"./index.0032196a.js";var we=Object.defineProperty,ye=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t,s)=>(ye(e,typeof t!="symbol"?t+"":t,s),s),Y=new Intl.Collator(0,{numeric:1}).compare;function ce(e,t,s){return e=e.split("."),t=t.split("."),Y(e[0],t[0])||Y(e[1],t[1])||(t[2]=t.slice(2).join("."),s=/[.-]/.test(e[2]=e.slice(2).join(".")),s==/[.-]/.test(t[2])?Y(e[2],t[2]):s?-1:1)}const ve="upload",be="config",Ee="info",Se="runtime",$e="sleeptime",Oe="https://gradio-space-api-fetcher-v2.hf.space/api",le="This application is currently busy. Please try again. ",x="Connection errored out. ",F="Could not resolve app config. ",De="Could not get space status. ",Pe="Could not get API info. ",Ne="Space metadata could not be loaded. ";function ue(e,t,s){return t.startsWith("http://")||t.startsWith("https://")?s?e:t:e+t}async function Ae(e,t){try{return(await(await fetch(`https://huggingface.co/api/spaces/${e}/jwt`,{headers:{Authorization:`Bearer ${t}`}})).json()).token||!1}catch{return!1}}function je(e){let t={};return e.forEach(({api_name:s},r)=>{s&&(t[s]=r)}),t}async function ke(e){const t=this.options.hf_token?{Authorization:`Bearer ${this.options.hf_token}`}:{};if(t["Content-Type"]="application/json",typeof window<"u"&&window.gradio_config&&location.origin!=="http://localhost:9876"&&!window.gradio_config.dev_mode){const s=window.gradio_config.root,r=window.gradio_config;let n=ue(e,r.root,!1);return r.root=n,{...r,path:s}}else if(e){const s=await this.fetch(`${e}/${be}`,{headers:t});if(s?.status===200){let r=await s.json();return r.path=r.path??"",r.root=e,r}throw new Error(F)}throw new Error(F)}function Z(e){if(e.startsWith("http")){const{protocol:t,host:s}=new URL(e);return s.endsWith("hf.space")?{ws_protocol:"wss",host:s,http_protocol:t}:{ws_protocol:t==="https:"?"wss":"ws",http_protocol:t,host:s}}else if(e.startsWith("file:"))return{ws_protocol:"ws",http_protocol:"http:",host:"lite.local"};return{ws_protocol:"wss",http_protocol:"https:",host:e}}const pe=/^[^\/]*\/[^\/]*$/,qe=/.*hf\.space\/{0,1}$/;async function fe(e,t){const s={};t&&(s.Authorization=`Bearer ${t}`);const r=e.trim();if(pe.test(r))try{const o=(await(await fetch(`https://huggingface.co/api/spaces/${r}/host`,{headers:s})).json()).host;return{space_id:e,...Z(o)}}catch(n){throw new Error("Space metadata could not be loaded. "+n.message)}if(qe.test(r)){const{ws_protocol:n,http_protocol:o,host:i}=Z(r);return{space_id:i.replace(".hf.space",""),ws_protocol:n,http_protocol:o,host:i}}return{space_id:!1,...Z(r)}}function Te(e,t,s){const r={named_endpoints:{},unnamed_endpoints:{}};return Object.keys(e).forEach(n=>{(n==="named_endpoints"||n==="unnamed_endpoints")&&(r[n]={},Object.entries(e[n]).forEach(([o,{parameters:i,returns:a}])=>{var l,d;const h=t.dependencies.findIndex(g=>g.api_name===o||g.api_name===o.replace("/",""))||s[o.replace("/","")]||-1,c=h!==-1?t.dependencies[h].types:{continuous:!1,generator:!1};if(h!==-1&&((d=(l=t.dependencies[h])==null?void 0:l.inputs)==null?void 0:d.length)!==i.length){const g=t.dependencies[h].inputs.map(P=>{var j;return(j=t.components.find(q=>q.id===P))==null?void 0:j.type});try{g.forEach((P,j)=>{if(P==="state"){const q={component:"state",example:null,parameter_default:null,parameter_has_default:!0,parameter_name:null,hidden:!0};i.splice(j,0,q)}})}catch{}}const p=(g,P,j,q)=>({...g,description:Ie(g?.type,j),type:Ce(g?.type,P,j,q)||""});r[n][o]={parameters:i.map(g=>p(g,g?.component,g?.serializer,"parameter")),returns:a.map(g=>p(g,g?.component,g?.serializer,"return")),type:c}}))}),r}function Ce(e,t,s,r){switch(e?.type){case"string":return"string";case"boolean":return"boolean";case"number":return"number"}if(s==="JSONSerializable"||s==="StringSerializable")return"any";if(s==="ListStringSerializable")return"string[]";if(t==="Image")return r==="parameter"?"Blob | File | Buffer":"string";if(s==="FileSerializable")return e?.type==="array"?r==="parameter"?"(Blob | File | Buffer)[]":"{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]":r==="parameter"?"Blob | File | Buffer":"{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";if(s==="GallerySerializable")return r==="parameter"?"[(Blob | File | Buffer), (string | null)][]":"[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]"}function Ie(e,t){return t==="GallerySerializable"?"array of [file, label] tuples":t==="ListStringSerializable"?"array of strings":t==="FileSerializable"?"array of files or single file":e?.description}function ee(e,t){switch(e.msg){case"send_data":return{type:"data"};case"send_hash":return{type:"hash"};case"queue_full":return{type:"update",status:{queue:!0,message:le,stage:"error",code:e.code,success:e.success}};case"heartbeat":return{type:"heartbeat"};case"unexpected_error":return{type:"unexpected_error",status:{queue:!0,message:e.message,stage:"error",success:!1}};case"estimation":return{type:"update",status:{queue:!0,stage:t||"pending",code:e.code,size:e.queue_size,position:e.rank,eta:e.rank_eta,success:e.success}};case"progress":return{type:"update",status:{queue:!0,stage:"pending",code:e.code,progress_data:e.progress_data,success:e.success}};case"log":return{type:"log",data:e};case"process_generating":return{type:"generating",status:{queue:!0,message:e.success?null:e.output.error,stage:e.success?"generating":"error",code:e.code,progress_data:e.progress_data,eta:e.average_duration},data:e.success?e.output:null};case"process_completed":return"error"in e.output?{type:"update",status:{queue:!0,message:e.output.error,stage:"error",code:e.code,success:e.success}}:{type:"complete",status:{queue:!0,message:e.success?void 0:e.output.error,stage:e.success?"complete":"error",code:e.code,progress_data:e.progress_data},data:e.success?e.output:null};case"process_starts":return{type:"update",status:{queue:!0,stage:"pending",code:e.code,size:e.rank,position:0,success:e.success,eta:e.eta}}}return{type:"none",status:{stage:"error",queue:!0}}}const Re=(e,t)=>{const s=Object.values(t.named_endpoints).flatMap(o=>o.parameters);if(Array.isArray(e))return e.length>s.length&&console.warn("Too many arguments provided for the endpoint."),e;const r=[],n=Object.keys(e);return s.forEach((o,i)=>{if(e.hasOwnProperty(o.parameter_name))r[i]=e[o.parameter_name];else if(o.parameter_has_default)r[i]=o.parameter_default;else throw new Error(`No value provided for required parameter: ${o.parameter_name}`)}),n.forEach(o=>{if(!s.some(i=>i.parameter_name===o))throw new Error(`Parameter \`${o}\` is not a valid keyword argument. Please refer to the API for usage.`)}),r.forEach((o,i)=>{if(o===void 0&&!s[i].parameter_has_default)throw new Error(`No value provided for required parameter: ${s[i].parameter_name}`)}),r};async function Ue(){if(this.api_info)return this.api_info;const{hf_token:e}=this.options,{config:t}=this,s={"Content-Type":"application/json"};if(e&&(s.Authorization=`Bearer ${e}`),!!t)try{let r;if(ce(t?.version||"2.0.0","3.30")<0?r=await this.fetch(Oe,{method:"POST",body:JSON.stringify({serialize:!1,config:JSON.stringify(t)}),headers:s}):r=await this.fetch(`${t?.root}/${Ee}`,{headers:s}),!r.ok)throw new Error(x);let n=await r.json();return"api"in n&&(n=n.api),n.named_endpoints["/predict"]&&!n.unnamed_endpoints[0]&&(n.unnamed_endpoints[0]=n.named_endpoints["/predict"]),Te(n,t,this.api_map)}catch(r){""+r.message}}async function ze(e,t,s){var r;const n={};(r=this==null?void 0:this.options)!=null&&r.hf_token&&(n.Authorization=`Bearer ${this.options.hf_token}`);const o=1e3,i=[];let a;for(let l=0;l<t.length;l+=o){const d=t.slice(l,l+o),h=new FormData;d.forEach(p=>{h.append("files",p)});try{const p=s?`${e}/upload?upload_id=${s}`:`${e}/${ve}`;a=await this.fetch(p,{method:"POST",body:h,headers:n})}catch(p){throw new Error(x+p.message)}if(!a.ok){const p=await a.text();return{error:`HTTP ${a.status}: ${p}`}}const c=await a.json();c&&i.push(...c)}return{files:i}}async function Be(e,t,s,r){let n=(Array.isArray(e)?e:[e]).map(i=>i.blob);const o=n.filter(i=>i.size>(r??1/0));if(o.length)throw new Error(`File size exceeds the maximum allowed size of ${r} bytes: ${o.map(i=>i.name).join(", ")}`);return await Promise.all(await this.upload_files(t,n,s).then(async i=>{if(i.error)throw new Error(i.error);return i.files?i.files.map((a,l)=>new de({...e[l],path:a,url:t+"/file="+a})):[]}))}class de{constructor({path:t,url:s,orig_name:r,size:n,blob:o,is_stream:i,mime_type:a,alt_text:l}){_(this,"path"),_(this,"url"),_(this,"orig_name"),_(this,"size"),_(this,"blob"),_(this,"is_stream"),_(this,"mime_type"),_(this,"alt_text"),_(this,"meta",{_type:"gradio.FileData"}),this.path=t,this.url=s,this.orig_name=r,this.size=n,this.blob=s?void 0:o,this.is_stream=i,this.mime_type=a,this.alt_text=l}}function re(e,t,s){for(;s.length>1;){const n=s.shift();if(typeof n=="string"||typeof n=="number")e=e[n];else throw new Error("Invalid key type")}const r=s.shift();if(typeof r=="string"||typeof r=="number")e[r]=t;else throw new Error("Invalid key type")}async function te(e,t=void 0,s=[],r=!1,n=void 0){if(Array.isArray(e)){let o=[];return await Promise.all(e.map(async i=>{var a;let l=s.slice();l.push(i);const d=await te(e[i],r?((a=n?.parameters[i])==null?void 0:a.component)||void 0:t,l,!1,n);o=o.concat(d)})),o}else{if(globalThis.Buffer&&e instanceof globalThis.Buffer||e instanceof Blob)return[{path:s,blob:t==="Image"?!1:new ne([e]),type:t}];if(typeof e=="object"&&e!==null){let o=[];for(const i of Object.keys(e)){const a=[...s,i],l=e[i];o=o.concat(await te(l,void 0,a,!1,n))}return!o.length&&!(e instanceof Blob||e instanceof ArrayBuffer||e instanceof Uint8Array)?[{path:s,blob:new ne([JSON.stringify(e)]),type:typeof e}]:o}}return[]}function xe(e,t){var s,r;return((r=(s=t?.dependencies)==null?void 0:s[e])==null?void 0:r.queue)!==null?!t.dependencies[e].queue:!t.enable_queue}function Le(e,t){return new Promise((s,r)=>{const n=new MessageChannel;n.port1.onmessage=({data:o})=>{n.port1.close(),s(o)},window.parent.postMessage(e,t,[n.port2])})}async function Fe(e,t,s){const r=this,n=await te(t,void 0,[],!0,s);return(await Promise.all(n.map(async({path:i,blob:a,type:l})=>{if(!a)return{path:i,type:l};const d=await r.upload_files(e,[a]),h=d.files&&d.files[0];return{path:i,file_url:h,type:l,name:a instanceof File?a?.name:void 0}}))).forEach(({path:i,file_url:a,type:l,name:d})=>{if(l==="Gallery")re(t,a,i);else if(a){const h=new de({path:a,orig_name:d});re(t,h,i)}}),t}async function Ge(e,t,s){const r={"Content-Type":"application/json"};this.options.hf_token&&(r.Authorization=`Bearer ${this.options.hf_token}`);try{var n=await this.fetch(e,{method:"POST",body:JSON.stringify(t),headers:{...r,...s}})}catch{return[{error:x},500]}let o,i;try{o=await n.json(),i=n.status}catch(a){o={error:`Could not parse server response: ${a}`},i=500}return[o,i]}async function Me(e,t){let s=!1,r=!1,n;if(!this.config)throw new Error("Could not resolve app config");if(typeof e=="number")n=this.config.dependencies[e];else{const o=e.replace(/^\//,"");n=this.config.dependencies[this.api_map[o]]}if(n?.types.continuous)throw new Error("Cannot call predict on this function as it may run forever. Use submit instead");return new Promise(async(o,i)=>{const a=this.submit(e,t);let l;a.on("data",d=>{r&&(a.destroy(),o(d)),s=!0,l=d}).on("status",d=>{d.stage==="error"&&i(d),d.stage==="complete"&&(r=!0,s&&(a.destroy(),o(l)))})})}async function se(e,t,s){let r=t==="subdomain"?`https://huggingface.co/api/spaces/by-subdomain/${e}`:`https://huggingface.co/api/spaces/${e}`,n,o;try{if(n=await fetch(r),o=n.status,o!==200)throw new Error;n=await n.json()}catch{s({status:"error",load_status:"error",message:De,detail:"NOT_FOUND"});return}if(!n||o!==200)return;const{runtime:{stage:i},id:a}=n;switch(i){case"STOPPED":case"SLEEPING":s({status:"sleeping",load_status:"pending",message:"Space is asleep. Waking it up...",detail:i}),setTimeout(()=>{se(e,t,s)},1e3);break;case"PAUSED":s({status:"paused",load_status:"error",message:"This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",detail:i,discussions_enabled:await oe(a)});break;case"RUNNING":case"RUNNING_BUILDING":s({status:"running",load_status:"complete",message:"",detail:i});break;case"BUILDING":s({status:"building",load_status:"pending",message:"Space is building...",detail:i}),setTimeout(()=>{se(e,t,s)},1e3);break;default:s({status:"space_error",load_status:"error",message:"This space is experiencing an issue.",detail:i,discussions_enabled:await oe(a)});break}}const Je=/^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;async function oe(e){try{const s=(await fetch(`https://huggingface.co/api/spaces/${e}/discussions`,{method:"HEAD"})).headers.get("x-error-message");return!(s&&Je.test(s))}catch{return!1}}async function We(e,t){const s={};t&&(s.Authorization=`Bearer ${t}`);try{const r=await fetch(`https://huggingface.co/api/spaces/${e}/${Se}`,{headers:s});if(r.status!==200)throw new Error("Space hardware could not be obtained.");const{hardware:n}=await r.json();return n.current}catch(r){throw new Error(r.message)}}async function He(e,t,s){const r={};s&&(r.Authorization=`Bearer ${s}`);const n={seconds:t};try{const o=await fetch(`https://huggingface.co/api/spaces/${e}/${$e}`,{method:"POST",headers:{"Content-Type":"application/json",...r},body:JSON.stringify(n)});if(o.status!==200)throw new Error("Could not set sleep timeout on duplicated Space. Please visit *ADD HF LINK TO SETTINGS* to set a timeout manually to reduce billing charges.");return await o.json()}catch(o){throw new Error(o.message)}}const ie=["cpu-basic","cpu-upgrade","cpu-xl","t4-small","t4-medium","a10g-small","a10g-large","a10g-largex2","a10g-largex4","a100-large","zero-a10g","h100","h100x8"];async function Ve(e,t){const{hf_token:s,private:r,hardware:n,timeout:o}=t;if(n&&!ie.includes(n))throw new Error(`Invalid hardware type provided. Valid types are: ${ie.map(p=>`"${p}"`).join(",")}.`);const i={Authorization:`Bearer ${s}`,"Content-Type":"application/json"},a=(await(await fetch("https://huggingface.co/api/whoami-v2",{headers:i})).json()).name,l=e.split("/")[1],d={repository:`${a}/${l}`};r&&(d.private=!0);let h;try{n||(h=await We(e,s))}catch(p){throw Error(Ne+p.message)}const c=n||h||"cpu-basic";d.hardware=c;try{const p=await fetch(`https://huggingface.co/api/spaces/${e}/duplicate`,{method:"POST",headers:i,body:JSON.stringify(d)});if(p.status===409)try{return await ae.connect(`${a}/${l}`,t)}catch(P){throw console.error("Failed to connect Client instance:",P),P}else if(p.status!==200)throw new Error(p.statusText);const g=await p.json();return await He(`${a}/${l}`,o||300,s),await ae.connect(Ke(g.url),t)}catch(p){throw new Error(p)}}function Ke(e){const t=/https:\/\/huggingface.co\/spaces\/([^/]+\/[^/]+)/,s=e.match(t);if(s)return s[1]}async function Qe(){let{event_callbacks:e,unclosed_events:t,pending_stream_messages:s,stream_status:r,config:n,jwt:o}=this;if(!n)throw new Error("Could not resolve app config");r.open=!0;let i=null,a=new URLSearchParams({session_hash:this.session_hash}).toString(),l=new URL(`${n.root}/queue/data?${a}`);if(o&&l.searchParams.set("__sign",o),i=await this.stream(l),!i){console.warn("Cannot connect to SSE endpoint: "+l.toString());return}i.onmessage=async function(d){let h=JSON.parse(d.data);if(h.msg==="close_stream"){M(r,i);return}const c=h.event_id;if(!c)await Promise.all(Object.keys(e).map(p=>e[p](h)));else if(e[c]&&n){h.msg==="process_completed"&&["sse","sse_v1","sse_v2","sse_v2.1"].includes(n.protocol)&&(t.delete(c),t.size===0&&M(r,i));let p=e[c];typeof window<"u"?window.setTimeout(p,0,h):setImmediate(p,h)}else s[c]||(s[c]=[]),s[c].push(h)},i.onerror=async function(){await Promise.all(Object.keys(e).map(d=>e[d]({msg:"unexpected_error",message:x}))),M(r,i)}}function M(e,t){e&&t&&(e.open=!1,t?.close())}function Xe(e,t,s){!e[t]?(e[t]=[],s.data.forEach((n,o)=>{e[t][o]=n})):s.data.forEach((n,o)=>{let i=Ye(e[t][o],n);e[t][o]=i,s.data[o]=i})}function Ye(e,t){return t.forEach(([s,r,n])=>{e=Ze(e,r,s,n)}),e}function Ze(e,t,s,r){if(t.length===0){if(s==="replace")return r;if(s==="append")return e+r;throw new Error(`Unsupported action: ${s}`)}let n=e;for(let i=0;i<t.length-1;i++)n=n[t[i]];const o=t[t.length-1];switch(s){case"replace":n[o]=r;break;case"append":n[o]+=r;break;case"add":Array.isArray(n)?n.splice(Number(o),0,r):n[o]=r;break;case"delete":Array.isArray(n)?n.splice(Number(o),1):delete n[o];break;default:throw new Error(`Unknown action: ${s}`)}return e}function et(e,t,s,r){try{let n=function(w){const O=L[w.type]||[];O?.forEach(m=>m(w))},o=function(w,E){const O=L,m=O[w]||[];return O[w]=m,m?.push(E),{on:o,off:i,cancel:K,destroy:a}},i=function(w,E){const O=L;let m=O[w]||[];return m=m?.filter(C=>C!==E),O[w]=m,{on:o,off:i,cancel:K,destroy:a}},a=function(){var w;for(const E in L)L&&((w=L[E])==null||w.forEach(O=>{i(E,O)}))};const{hf_token:l}=this.options,{fetch:d,app_reference:h,config:c,session_hash:p,api_info:g,api_map:P,stream_status:j,pending_stream_messages:q,pending_diff_streams:J,event_callbacks:W,unclosed_events:he,post_data:H}=this;if(!g)throw new Error("No API found");if(!c)throw new Error("Could not resolve app config");let{fn_index:u,endpoint_info:_e,dependency:ge}=tt(g,e,P,c),me=Re(t,g),S,N,T=c.protocol??"ws";const f=typeof e=="number"?"/predict":e;let G,b=null,$=!1;const L={};let V={},B=typeof window<"u"?new URLSearchParams(window.location.search).toString():"";async function K(){const w={stage:"complete",queue:!1,time:new Date};$=w,n({...w,type:"status",endpoint:f,fn_index:u});let E={};T==="ws"?(S&&S.readyState===0?S.addEventListener("open",()=>{S.close()}):S.close(),E={fn_index:u,session_hash:p}):(N?.close(),E={event_id:b});try{if(!c)throw new Error("Could not resolve app config");await d(`${c.root}/reset`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(E)})}catch{console.warn("The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable.")}}return this.handle_blob(c.root,me,_e).then(async w=>{var E;if(G={data:w||[],event_data:s,fn_index:u,trigger_id:r},xe(u,c))n({type:"status",endpoint:f,stage:"pending",queue:!1,fn_index:u,time:new Date}),H(`${c.root}/run${f.startsWith("/")?f:`/${f}`}${B?"?"+B:""}`,{...G,session_hash:p}).then(([m,C])=>{const I=m.data;C==200?(n({type:"data",endpoint:f,fn_index:u,data:I,time:new Date,event_data:s,trigger_id:r}),n({type:"status",endpoint:f,fn_index:u,stage:"complete",eta:m.average_duration,queue:!1,time:new Date})):n({type:"status",stage:"error",endpoint:f,fn_index:u,message:m.error,queue:!1,time:new Date})}).catch(m=>{n({type:"status",stage:"error",message:m.message,endpoint:f,fn_index:u,queue:!1,time:new Date})});else if(T=="ws"){const{ws_protocol:m,host:C}=await fe(h,l);n({type:"status",stage:"pending",queue:!0,endpoint:f,fn_index:u,time:new Date});let I=new URL(`${m}://${ue(C,c.path,!0)}/queue/join${B?"?"+B:""}`);this.jwt&&I.searchParams.set("__sign",this.jwt),S=new WebSocket(I),S.onclose=k=>{k.wasClean||n({type:"status",stage:"error",broken:!0,message:x,queue:!0,endpoint:f,fn_index:u,time:new Date})},S.onmessage=function(k){const A=JSON.parse(k.data),{type:v,status:D,data:R}=ee(A,V[u]);if(v==="update"&&D&&!$)n({type:"status",endpoint:f,fn_index:u,time:new Date,...D}),D.stage==="error"&&S.close();else if(v==="hash"){S.send(JSON.stringify({fn_index:u,session_hash:p}));return}else v==="data"?S.send(JSON.stringify({...G,session_hash:p})):v==="complete"?$=D:v==="log"?n({type:"log",log:R.log,level:R.level,endpoint:f,fn_index:u}):v==="generating"&&n({type:"status",time:new Date,...D,stage:D?.stage,queue:!0,endpoint:f,fn_index:u});R&&(n({type:"data",time:new Date,data:R.data,endpoint:f,fn_index:u,event_data:s,trigger_id:r}),$&&(n({type:"status",time:new Date,...$,stage:D?.stage,queue:!0,endpoint:f,fn_index:u}),S.close()))},ce(c.version||"2.0.0","3.6")<0&&addEventListener("open",()=>S.send(JSON.stringify({hash:p})))}else if(T=="sse"){n({type:"status",stage:"pending",queue:!0,endpoint:f,fn_index:u,time:new Date});var O=new URLSearchParams({fn_index:u.toString(),session_hash:p}).toString();let m=new URL(`${c.root}/queue/join?${B?B+"&":""}${O}`);if(this.jwt&&m.searchParams.set("__sign",this.jwt),N=await this.stream(m),!N)return Promise.reject(new Error("Cannot connect to SSE endpoint: "+m.toString()));N.onmessage=async function(C){const I=JSON.parse(C.data),{type:k,status:A,data:v}=ee(I,V[u]);if(k==="update"&&A&&!$)n({type:"status",endpoint:f,fn_index:u,time:new Date,...A}),A.stage==="error"&&N?.close();else if(k==="data"){b=I.event_id;let[D,R]=await H(`${c.root}/queue/data`,{...G,session_hash:p,event_id:b});R!==200&&(n({type:"status",stage:"error",message:x,queue:!0,endpoint:f,fn_index:u,time:new Date}),N?.close())}else k==="complete"?$=A:k==="log"?n({type:"log",log:v.log,level:v.level,endpoint:f,fn_index:u}):k==="generating"&&n({type:"status",time:new Date,...A,stage:A?.stage,queue:!0,endpoint:f,fn_index:u});v&&(n({type:"data",time:new Date,data:v.data,endpoint:f,fn_index:u,event_data:s,trigger_id:r}),$&&(n({type:"status",time:new Date,...$,stage:A?.stage,queue:!0,endpoint:f,fn_index:u}),N?.close()))}}else if(T=="sse_v1"||T=="sse_v2"||T=="sse_v2.1"||T=="sse_v3"){n({type:"status",stage:"pending",queue:!0,endpoint:f,fn_index:u,time:new Date});let m="";typeof window<"u"&&(m=(E=window?.location)==null?void 0:E.hostname);let C="dev.spaces.huggingface.tech";const I=m.includes(".dev.")?`https://moon-${m.split(".")[1]}.${C}`:"https://huggingface.co";(ge.zerogpu&&window.parent!=window&&c.space_id?Le("zerogpu-headers",I):Promise.resolve(null)).then(v=>H(`${c.root}/queue/join?${B}`,{...G,session_hash:p},v)).then(async([v,D])=>{if(D===503)n({type:"status",stage:"error",message:le,queue:!0,endpoint:f,fn_index:u,time:new Date});else if(D!==200)n({type:"status",stage:"error",message:x,queue:!0,endpoint:f,fn_index:u,time:new Date});else{b=v.event_id;let R=async function(Q){try{const{type:U,status:y,data:z}=ee(Q,V[u]);if(U=="heartbeat")return;if(U==="update"&&y&&!$)n({type:"status",endpoint:f,fn_index:u,time:new Date,...y});else if(U==="complete")$=y;else if(U=="unexpected_error")console.error("Unexpected error",y?.message),n({type:"status",stage:"error",message:y?.message||"An Unexpected Error Occurred!",queue:!0,endpoint:f,fn_index:u,time:new Date});else if(U==="log"){n({type:"log",log:z.log,level:z.level,endpoint:f,fn_index:u});return}else U==="generating"&&(n({type:"status",time:new Date,...y,stage:y?.stage,queue:!0,endpoint:f,fn_index:u}),z&&["sse_v2","sse_v2.1","sse_v3"].includes(T)&&Xe(J,b,z));z&&(n({type:"data",time:new Date,data:z.data,endpoint:f,fn_index:u}),z.render_config&&n({type:"render",data:z.render_config,endpoint:f,fn_index:u}),$&&n({type:"status",time:new Date,...$,stage:y?.stage,queue:!0,endpoint:f,fn_index:u})),(y?.stage==="complete"||y?.stage==="error")&&(W[b]&&delete W[b],b in J&&delete J[b])}catch(U){console.error("Unexpected client exception",U),n({type:"status",stage:"error",message:"An Unexpected Error Occurred!",queue:!0,endpoint:f,fn_index:u,time:new Date}),["sse_v2","sse_v2.1"].includes(T)&&(M(j,N),j.open=!1)}};b in q&&(q[b].forEach(Q=>R(Q)),delete q[b]),W[b]=R,he.add(b),j.open||await this.open_stream()}})}}),{on:o,off:i,cancel:K,destroy:a}}catch(n){throw console.error("Submit function encountered an error:",n),n}}function tt(e,t,s,r){let n,o,i;if(typeof t=="number")n=t,o=e.unnamed_endpoints[n],i=r.dependencies[t];else{const a=t.replace(/^\//,"");n=s[a],o=e.named_endpoints[t.trim()],i=r.dependencies[s[a]]}if(typeof n!="number")throw new Error("There is no endpoint matching that name of fn_index matching that number.");return{fn_index:n,endpoint_info:o,dependency:i}}class ne extends Blob{constructor(t,s){super(t,s)}}class ae{constructor(t,s={}){_(this,"app_reference"),_(this,"options"),_(this,"config"),_(this,"api_info"),_(this,"api_map",{}),_(this,"session_hash",Math.random().toString(36).substring(2)),_(this,"jwt",!1),_(this,"last_status",{}),_(this,"stream_status",{open:!1}),_(this,"pending_stream_messages",{}),_(this,"pending_diff_streams",{}),_(this,"event_callbacks",{}),_(this,"unclosed_events",new Set),_(this,"heartbeat_event",null),_(this,"view_api"),_(this,"upload_files"),_(this,"upload"),_(this,"handle_blob"),_(this,"post_data"),_(this,"submit"),_(this,"predict"),_(this,"open_stream"),_(this,"resolve_config"),this.app_reference=t,this.options=s,this.view_api=Ue.bind(this),this.upload_files=ze.bind(this),this.handle_blob=Fe.bind(this),this.post_data=Ge.bind(this),this.submit=et.bind(this),this.predict=Me.bind(this),this.open_stream=Qe.bind(this),this.resolve_config=ke.bind(this),this.upload=Be.bind(this)}fetch(t,s){return fetch(t,s)}async stream(t){if(typeof window>"u"||typeof EventSource>"u")try{const s=await X(()=>import("./eventsource.4deb033a.js").then(function(r){return r.e}),["assets/eventsource.4deb033a.js","assets/__vite-browser-external.afb582f8.js","assets/_commonjsHelpers.294d03c4.js"]);return new s.default(t.toString())}catch(s){throw console.error("Failed to load EventSource module:",s),s}else return new EventSource(t.toString())}async init(){var t;if((typeof window>"u"||!("WebSocket"in window))&&!global.WebSocket){const s=await X(()=>import("./wrapper-CviSselG.60495582.js"),["assets/wrapper-CviSselG.60495582.js","assets/__vite-browser-external.afb582f8.js"]);ne=(await X(()=>import("./__vite-browser-external.afb582f8.js").then(function(r){return r._}),[])).Blob,global.WebSocket=s.WebSocket}try{await this._resolve_config().then(async({config:s})=>{if(this.config=s,s.space_id&&this.options.hf_token&&(this.jwt=await Ae(s.space_id,this.options.hf_token)),this.config&&this.config.connect_heartbeat){const r=new URL(`${this.config.root}/heartbeat/${this.session_hash}`);this.jwt&&r.searchParams.set("__sign",this.jwt),this.heartbeat_event=await this.stream(r)}})}catch(s){throw Error(F+s.message)}this.api_info=await this.view_api(),this.api_map=je(((t=this.config)==null?void 0:t.dependencies)||[])}static async connect(t,s={}){const r=new this(t,s);return await r.init(),r}close(){var t;(t=this.heartbeat_event)==null||t.close()}static async duplicate(t,s={}){return Ve(t,s)}async _resolve_config(){const{http_protocol:t,host:s,space_id:r}=await fe(this.app_reference,this.options.hf_token),{status_callback:n}=this.options;let o;try{if(o=await this.resolve_config(`${t}//${s}`),!o)throw new Error(F);return this.config_success(o)}catch(i){console.error(i),r?se(r,pe.test(r)?"space_name":"subdomain",this.handle_space_success):n&&n({status:"error",message:"Could not load this space.",load_status:"error",detail:"NOT_FOUND"})}}async config_success(t){if(this.config=t,typeof window<"u"&&window.location.protocol==="https:"&&(this.config.root=this.config.root.replace("http://","https://")),this.config.auth_required)return this.prepare_return_obj();try{this.api_info=await this.view_api()}catch(s){console.error(Pe+s.message)}return this.prepare_return_obj()}async handle_space_success(t){const{status_callback:s}=this.options;if(s&&s(t),t.status==="running")try{if(this.config=await this._resolve_config(),!this.config)throw new Error(F);return await this.config_success(this.config)}catch(r){console.error(r),s&&s({status:"error",message:"Could not load this space.",load_status:"error",detail:"NOT_FOUND"})}}async component_server(t,s,r){var n;if(!this.config)throw new Error(F);const o={},{hf_token:i}=this.options,{session_hash:a}=this;i&&(o.Authorization=`Bearer ${this.options.hf_token}`);let l,d=this.config.components.find(c=>c.id===t);(n=d?.props)!=null&&n.root_url?l=d.props.root_url:l=this.config.root;let h;if("binary"in r){h=new FormData;for(const c in r.data)c!=="binary"&&h.append(c,r.data[c]);h.set("component_id",t.toString()),h.set("fn_name",s),h.set("session_hash",a)}else h=JSON.stringify({data:r,component_id:t,fn_name:s,session_hash:a}),o["Content-Type"]="application/json";i&&(o.Authorization=`Bearer ${i}`);try{const c=await this.fetch(`${l}/component_server/`,{method:"POST",body:h,headers:o});if(!c.ok)throw new Error("Could not connect to component server: "+c.statusText);return await c.json()}catch(c){console.warn(c)}}prepare_return_obj(){return{config:this.config,predict:this.predict,submit:this.submit,view_api:this.view_api,component_server:this.component_server}}}export{ae as C};
