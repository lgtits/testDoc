import{d as o,r as p,m as c,o as i,e as n,g as a,F as d,aH as m,p as u,w as l,aK as g,q as _,x as y,t as h}from"./index.461fd5f5.js";const $={class:"supply-chain-page"},v={class:"supply-chain-page__content"},f={class:"card-wrapper row justify-center"},j={class:"link text-center"},w=o({__name:"OnlineSupplyChainPage",setup(C){const r=p([{name:"Cryptographic_Module",id:"cryptographicModule",imageUrl:"/images/supply-chain/cryptographicModule.jpg"},{name:"Satellite",id:"satellite",imageUrl:"/images/supply-chain/satellite.jpg"},{name:"Drone",id:"drone",imageUrl:"/images/supply-chain/drone.jpg"},{name:"Radar",id:"radar",imageUrl:"/images/supply-chain/radar.jpg"},{name:"Missile",id:"missile",imageUrl:"/images/supply-chain/missile.jpg"}]);return(s,U)=>{const t=c("router-link");return i(),n("div",$,[a("div",v,[a("div",f,[(i(!0),n(d,null,m(r.value,e=>(i(),u(t,{to:`/${s.$i18n.locale}/supply-chain/${e.id}`,class:"category-card column",key:e.id},{default:l(()=>[a("div",{class:"image-wrapper",style:g({backgroundImage:`url('${e.imageUrl}')`})},null,4),a("div",j,[_(t,{to:`/${s.$i18n.locale}/supply-chain/${e.id}`},{default:l(()=>[y(h(s.$t(`$i18n_${e.name}_$i18n`)),1)]),_:2},1032,["to"])])]),_:2},1032,["to"]))),128))])])])}}});export{w as default};
