import{b9 as s}from"./index.1965fc76.js";const l=new URL(window.location.href),t=l.pathname.split("/"),a=t[1],n={unelevated:!0,color:"primary",label:a==="zh"?"\u78BA\u8A8D":"Submit"},c={flat:!0,color:"primary-text",label:a==="zh"?"\u53D6\u6D88":"Cancel"},o=e=>{s.create({title:e.title,message:e.message,ok:n}).onOk(()=>{e.onOk?.()}).onCancel(()=>{e.onCancel?.()}).onDismiss(()=>{e.onDismiss?.()})},r=e=>{s.create({title:e.title,message:e.message,ok:n,cancel:c}).onOk(()=>{e.onOk?.()}).onCancel(()=>{e.onCancel?.()}).onDismiss(()=>{e.onDismiss?.()})};var i={alert:o,confirm:r};export{i as D};
