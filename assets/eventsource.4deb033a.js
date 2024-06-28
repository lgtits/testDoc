import{_ as X}from"./__vite-browser-external.afb582f8.js";import{g as Z}from"./_commonjsHelpers.294d03c4.js";function k(a,r){return r.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(i){if(i!=="default"&&!(i in a)){var y=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(a,i,y.get?y:{enumerable:!0,get:function(){return e[i]}})}})}),Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var j=Z(X),H=j.parse,D=j,ee=j,re=j,te=j,ae=["pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","secureProtocol","servername","checkServerIdentity"],K=[239,187,191],ne=58,oe=32,S=10,se=13,Y=1024*256,ie=/^(cookie|authorization)$/i;function fe(a){return K.every(function(r,e){return a[e]===r})}function o(a,r){var e=o.CONNECTING,i=r&&r.headers,y=!1;Object.defineProperty(this,"readyState",{get:function(){return e}}),Object.defineProperty(this,"url",{get:function(){return a}});var f=this;f.reconnectInterval=1e3,f.connectionInProgress=!1;function _(n){e!==o.CLOSED&&(e=o.CONNECTING,E("error",new P("error",{message:n})),T&&(a=T,T=null,y=!1),setTimeout(function(){e!==o.CONNECTING||f.connectionInProgress||(f.connectionInProgress=!0,M())},f.reconnectInterval))}var v,N="";i&&i["Last-Event-ID"]&&(N=i["Last-Event-ID"],delete i["Last-Event-ID"]);var G=!1,A="",I="",T=null;function M(){var n=H(a),l=n.protocol==="https:";if(n.headers={"Cache-Control":"no-cache",Accept:"text/event-stream"},N&&(n.headers["Last-Event-ID"]=N),i){var d=y?ve(i):i;for(var m in d){var w=d[m];w&&(n.headers[m]=w)}}n.rejectUnauthorized=!(r&&!r.rejectUnauthorized),r&&r.createConnection!==void 0&&(n.createConnection=r.createConnection);var U=r&&r.proxy;if(U){var c=H(r.proxy);l=c.protocol==="https:",n.protocol=l?"https:":"http:",n.path=a,n.headers.Host=n.host,n.hostname=c.hostname,n.host=c.host,n.port=c.port}if(r&&r.https){for(var h in r.https)if(ae.indexOf(h)!==-1){var x=r.https[h];x!==void 0&&(n[h]=x)}}r&&r.withCredentials!==void 0&&(n.withCredentials=r.withCredentials),v=(l?ee:re).request(n,function(t){if(f.connectionInProgress=!1,t.statusCode===500||t.statusCode===502||t.statusCode===503||t.statusCode===504){E("error",new P("error",{status:t.statusCode,message:t.statusMessage})),_();return}if(t.statusCode===301||t.statusCode===302||t.statusCode===307){var g=t.headers.location;if(!g){E("error",new P("error",{status:t.statusCode,message:t.statusMessage}));return}var V=new URL(a).origin,W=new URL(g).origin;y=V!==W,t.statusCode===307&&(T=a),a=g,process.nextTick(M);return}if(t.statusCode!==200)return E("error",new P("error",{status:t.statusCode,message:t.statusMessage})),f.close();e=o.OPEN,t.on("close",function(){t.removeAllListeners("close"),t.removeAllListeners("end"),_()}),t.on("end",function(){t.removeAllListeners("close"),t.removeAllListeners("end"),_()}),E("open",new P("open"));var s,$,F=0,q=-1,L=0,p=0;t.on("data",function(C){s?(C.length>s.length-p&&(L=s.length*2+C.length,L>Y&&(L=s.length+C.length+Y),$=Buffer.alloc(L),s.copy($,0,0,p),s=$),C.copy(s,p),p+=C.length):(s=C,fe(s)&&(s=s.slice(K.length)),p=s.length);for(var u=0,z=p;u<z;){G&&(s[u]===S&&++u,G=!1);for(var b=-1,B=q,R,O=F;b<0&&O<z;++O)R=s[O],R===ne?B<0&&(B=O-u):R===se?(G=!0,b=O-u):R===S&&(b=O-u);if(b<0){F=z-u,q=B;break}else F=0,q=-1;Q(s,u,B,b),u+=b+1}u===z?(s=void 0,p=0):u>0&&(s=s.slice(u,p),p=s.length)})}),v.on("error",function(t){f.connectionInProgress=!1,_(t.message)}),v.setNoDelay&&v.setNoDelay(!0),v.end()}M();function E(){f.listeners(arguments[0]).length>0&&f.emit.apply(f,arguments)}this._close=function(){e!==o.CLOSED&&(e=o.CLOSED,v.abort&&v.abort(),v.xhr&&v.xhr.abort&&v.xhr.abort())};function Q(n,l,d,m){if(m===0){if(A.length>0){var w=I||"message";E(w,new ue(w,{data:A.slice(0,-1),lastEventId:N,origin:new URL(a).origin})),A=""}I=void 0}else if(d>0){var U=d<0,c=0,h=n.slice(l,l+(U?m:d)).toString();U?c=m:n[l+d+1]!==oe?c=d+1:c=d+2,l+=c;var x=m-c,t=n.slice(l,l+x).toString();if(h==="data")A+=t+`
`;else if(h==="event")I=t;else if(h==="id")N=t;else if(h==="retry"){var g=parseInt(t,10);Number.isNaN(g)||(f.reconnectInterval=g)}}}}var J=o;te.inherits(o,D.EventEmitter);o.prototype.constructor=o;["open","error","message"].forEach(function(a){Object.defineProperty(o.prototype,"on"+a,{get:function(){var e=this.listeners(a)[0];return e?e._listener?e._listener:e:void 0},set:function(e){this.removeAllListeners(a),this.addEventListener(a,e)}})});Object.defineProperty(o,"CONNECTING",{enumerable:!0,value:0});Object.defineProperty(o,"OPEN",{enumerable:!0,value:1});Object.defineProperty(o,"CLOSED",{enumerable:!0,value:2});o.prototype.CONNECTING=0;o.prototype.OPEN=1;o.prototype.CLOSED=2;o.prototype.close=function(){this._close()};o.prototype.addEventListener=function(r,e){typeof e=="function"&&(e._listener=e,this.on(r,e))};o.prototype.dispatchEvent=function(r){if(!r.type)throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");this.emit(r.type,r.detail)};o.prototype.removeEventListener=function(r,e){typeof e=="function"&&(e._listener=void 0,this.removeListener(r,e))};function P(a,r){if(Object.defineProperty(this,"type",{writable:!1,value:a,enumerable:!0}),r)for(var e in r)r.hasOwnProperty(e)&&Object.defineProperty(this,e,{writable:!1,value:r[e],enumerable:!0})}function ue(a,r){Object.defineProperty(this,"type",{writable:!1,value:a,enumerable:!0});for(var e in r)r.hasOwnProperty(e)&&Object.defineProperty(this,e,{writable:!1,value:r[e],enumerable:!0})}function ve(a){var r={};for(var e in a)ie.test(e)||(r[e]=a[e]);return r}var de=k({__proto__:null,default:J},[J]);export{de as e};
