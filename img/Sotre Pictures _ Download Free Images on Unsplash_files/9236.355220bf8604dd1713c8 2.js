"use strict";(globalThis.webpackChunkunsplash_web=globalThis.webpackChunkunsplash_web||[]).push([[9236],{58856:(e,o,a)=>{a.d(o,{Z:()=>l});var t=a(67294),i=a(76623);const n="rfzWF",r="PTz06",l=({type:e})=>t.createElement("div",{className:n},t.createElement(i.Z,{alt:"No content available",className:r,src:`/a/img/empty-states/${e}.png`}))},87124:(e,o,a)=>{a.d(o,{Z:()=>n});var t=a(67294);const i="rJ2xz bYpwS U8eXG M5vdR",n=({children:e})=>t.createElement("div",{className:i},e)},76905:(e,o,a)=>{a.d(o,{sF:()=>t,SN:()=>c.SN,v8:()=>d,$E:()=>c.$E,gw:()=>p});var t={};a.r(t),a.d(t,{forEachUrl:()=>l});var i=a(3735),n=a(31461),r=a(84162);const l=e=>(0,i.zG)(n.id(),n.vg("urls"),n.Pj(r.UI(e)));var s=a(60173),c=a(78260);const d=e=>(0,c.t2)(e)&&(()=>{switch(e.evaluation_status){case"in_review":case"approved":return!1;case"dmca_requested":case"dmca_pending_review":case"dmca_approved":return!0}})(),p=e=>(0,s.$K)(e.sponsorship)},19838:(e,o,a)=>{a.d(o,{ug:()=>t,aX:()=>M,hm:()=>L});var t={};a.r(t),a.d(t,{_y:()=>d,xP:()=>p,f5:()=>s,Sy:()=>h,US:()=>f,c3:()=>u,EJ:()=>c});var i=a(67294),n=a(13904),r=a.n(n),l=a(12164);const s=r()({Topic:(0,n.ofType)(),Collection:(0,n.ofType)(),Editorial:(0,n.ofType)(),Following:(0,n.ofType)(),UserProfile:(0,n.ofType)(),UserStats:(0,n.ofType)(),UserLikes:(0,n.ofType)(),RelatedPhotos:(0,n.ofType)(),VisualSearch:(0,n.ofType)(),Search:(0,n.ofType)(),Explore:(0,n.ofType)()}),c=r()({PhotoOfTheDay:(0,n.ofType)(),Photo:(0,n.ofType)(),CollectionThumbnail:(0,n.ofType)(),...s._Record}),d=i.createContext(l.YP);var p,f,h,u;!function(e){e.Topic="topic-feed",e.Collection="collection-page",e.CollectionThumbnail="collection-thumbnail"}(p||(p={})),function(e){e.Editorial="editorial-feed",e.KeywordSearch="search"}(f||(f={})),function(e){e.PhotoPage="photo-page",e.PhotoOfTheDay="photo-of-the-day"}(h||(h={})),function(e){e.Following="following-feed",e.UserProfile="profile-page",e.UserStats="profile-stats",e.UserLikes="profile-liked",e.RelatedPhotos="photo-related",e.Explore="explore-feed",e.VisualSearch="visual-search"}(u||(u={}));var m=a(3735),y=a(8585),T=a(43856),g=a(91361);const w=e=>T.Y3((()=>window.btoa(e)),(e=>new Error(`Encoding base64 failed: ${(0,g.e$)(e,{includeStack:!1})}`)));var v,k,P=a(63093),S=a(28486),U=a(62073),x=a(76905),E=a(94597),b=a(66510),I=a(99590);!function(e){e.English="en"}(v||(v={})),function(e){e[e.False=0]="False",e[e.True=1]="True"}(k||(k={}));const C={[I.KM.Relevant]:0,[I.KM.Latest]:2},F={[I.i5.Landscape]:0,[I.i5.Portrait]:1,[I.i5.Squareish]:2},_=e=>e?k.True:k.False,z=e=>F[e],R=e=>Math.max(0,e+1),G=e=>{const o=encodeURIComponent(e);return(0,m.zG)(w(o),T.UI((0,m.a9)(o)))},B=(0,b.FH)()(["version","appId","ad","fromApi","placement","position","deckId","keywords","language","safety","orientation","orderBy","color","timestamp"]),D=(0,m.ls)((e=>({version:2,appId:1207,ad:"ad"in e?e.ad:_(!1),fromApi:_(!1),placement:e.placement,position:"position"in e?e.position:null,deckId:"deckId"in e?e.deckId:null,keywords:"keywords"in e?e.keywords:null,language:v.English,safety:"safety"in e?e.safety:_(!1),orientation:"orientation"in e?e.orientation:null,orderBy:"orderBy"in e?e.orderBy:null,color:"color"in e?e.color:null,timestamp:null})),(e=>(0,m.zG)(B,E.UID((o=>e[o])),E.UID((e=>{if(null===e)return"";switch(typeof e){case"string":return e;case"number":return e.toString()}})),E.MJ0("|")))),L=c.match({Editorial:({ad:e,index:o})=>({placement:f.Editorial,ad:_(e),position:R(o)}),Collection:({id:e,index:o})=>({placement:p.Collection,deckId:e,position:R(o)}),CollectionThumbnail:({id:e})=>({placement:p.CollectionThumbnail,deckId:e}),Following:({index:e})=>({placement:u.Following,position:R(e)}),Photo:({ad:e})=>({placement:h.PhotoPage,ad:_(e)}),PhotoOfTheDay:({ad:e})=>({placement:h.PhotoOfTheDay,ad:_(e)}),RelatedPhotos:({index:e})=>({placement:u.RelatedPhotos,position:R(e)}),Topic:({id:e,index:o})=>({placement:p.Topic,deckId:e,position:R(o)}),UserLikes:({index:e})=>({placement:u.UserLikes,position:R(e)}),UserProfile:({index:e})=>({placement:u.UserProfile,position:R(e)}),UserStats:({index:e})=>({placement:u.UserStats,position:R(e)}),VisualSearch:({index:e})=>({placement:u.VisualSearch,position:R(e)}),Search:({keywords:e,orientation:o,orderBy:a,safety:t,color:i,index:n,ad:r})=>{return{placement:f.KeywordSearch,ad:_(r),position:R(n),keywords:(0,m.zG)(G(e),T.fS((e=>((0,P.wj)({error:e}),null)))),color:l.WG(i),safety:_(t),orderBy:(s=a,C[s]),orientation:(0,m.zG)(o,l.WA(z))};var s},Explore:({index:e})=>({placement:u.Explore,position:R(e)})}),N=(0,m.ls)(D,w),$=(0,m.ls)(N,T.gf),K=(0,S.cw)((e=>x.sF.forEachUrl(y.AQ({[U.Cr]:e})))),M=e=>(0,m.ls)($,K(e))}}]);
//# sourceMappingURL=9236.355220bf8604dd1713c8.js.map