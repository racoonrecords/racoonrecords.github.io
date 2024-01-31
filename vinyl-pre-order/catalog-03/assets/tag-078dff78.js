import{p as B,v as T,y as E,a8 as se,C as D,z as ue,aw as X,ax as F,Z as j,q as l,_ as z,x as H,Q as W,Y,s as $,a1 as ie,X as le,aO as re,aP as ce}from"./index-c74f6cb3.js";const pe=B({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function me(e){const s=T("useRender");s.render=e}function ve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const v=E(),i=E();if(se){const o=new ResizeObserver(a=>{e==null||e(a,o),a.length&&(s==="content"?i.value=a[0].contentRect:i.value=a[0].target.getBoundingClientRect())});D(()=>{o.disconnect()}),ue(v,(a,r)=>{r&&(o.unobserve(X(r)),i.value=void 0),a&&o.observe(X(a))},{flush:"post"})}return{resizeRef:v,contentRect:F(i)}}const O=Symbol.for("vuetify:layout"),Q=Symbol.for("vuetify:layout-item"),_=1e3,ge=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),he=B({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ie(){const e=j(O);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function be(e){const s=j(O);if(!s)throw new Error("[Vuetify] Could not find injected layout");const v=e.id??`layout-item-${le()}`,i=T("useLayoutItem");Y(Q,{id:v});const o=H(!1);re(()=>o.value=!0),ce(()=>o.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:r}=s.register(i,{...e,active:l(()=>o.value?!1:e.active.value),id:v});return D(()=>s.unregister(v)),{layoutItemStyles:a,layoutRect:s.layoutRect,layoutItemScrimStyles:r}}const de=(e,s,v,i)=>{let o={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...o}}];for(const r of e){const p=s.get(r),g=v.get(r),L=i.get(r);if(!p||!g||!L)continue;const h={...o,[p.value]:parseInt(o[p.value],10)+(L.value?parseInt(g.value,10):0)};a.push({id:r,layer:h}),o=h}return a};function xe(e){const s=j(O,null),v=l(()=>s?s.rootZIndex.value-100:_),i=E([]),o=z(new Map),a=z(new Map),r=z(new Map),p=z(new Map),g=z(new Map),{resizeRef:L,contentRect:h}=ve(),k=l(()=>{const n=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,u]=t.split(":");if(!i.value.includes(c)||!i.value.includes(u))continue;const y=o.get(c),m=o.get(u),S=a.get(c),R=a.get(u);!y||!m||!S||!R||(n.set(u,{position:y.value,amount:parseInt(S.value,10)}),n.set(c,{position:m.value,amount:-parseInt(R.value,10)}))}return n}),I=l(()=>{const n=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of n){const c=i.value.filter(u=>{var y;return((y=r.get(u))==null?void 0:y.value)===t});d.push(...c)}return de(d,o,a,p)}),N=l(()=>!Array.from(g.values()).some(n=>n.value)),b=l(()=>I.value[I.value.length-1].layer),G=l(()=>({"--v-layout-left":$(b.value.left),"--v-layout-right":$(b.value.right),"--v-layout-top":$(b.value.top),"--v-layout-bottom":$(b.value.bottom),...N.value?void 0:{transition:"none"}})),x=l(()=>I.value.slice(1).map((n,d)=>{let{id:t}=n;const{layer:c}=I.value[d],u=a.get(t),y=o.get(t);return{id:t,...c,size:Number(u.value),position:y.value}})),Z=n=>x.value.find(d=>d.id===n),A=T("createLayout"),q=H(!1);W(()=>{q.value=!0}),Y(O,{register:(n,d)=>{let{id:t,order:c,position:u,layoutSize:y,elementSize:m,active:S,disableTransitions:R,absolute:te}=d;r.set(t,c),o.set(t,u),a.set(t,y),p.set(t,S),R&&g.set(t,R);const K=ie(Q,A==null?void 0:A.vnode).indexOf(n);K>-1?i.value.splice(K,0,t):i.value.push(t);const U=l(()=>x.value.findIndex(w=>w.id===t)),C=l(()=>v.value+I.value.length*2-U.value*2),oe=l(()=>{const w=u.value==="left"||u.value==="right",P=u.value==="right",ae=u.value==="bottom",V={[u.value]:0,zIndex:C.value,transform:`translate${w?"X":"Y"}(${(S.value?0:-110)*(P||ae?-1:1)}%)`,position:te.value||v.value!==_?"absolute":"fixed",...N.value?void 0:{transition:"none"}};if(!q.value)return V;const f=x.value[U.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const M=k.value.get(t);return M&&(f[M.position]+=M.amount),{...V,height:w?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:P?void 0:`${f.left}px`,right:P?`${f.right}px`:void 0,top:u.value!=="bottom"?`${f.top}px`:void 0,bottom:u.value!=="top"?`${f.bottom}px`:void 0,width:w?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ne=l(()=>({zIndex:C.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:C}},unregister:n=>{r.delete(n),o.delete(n),a.delete(n),p.delete(n),g.delete(n),i.value=i.value.filter(d=>d!==n)},mainRect:b,mainStyles:G,getLayoutItem:Z,items:x,layoutRect:h,rootZIndex:v});const J=l(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=l(()=>({zIndex:s?v.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:J,layoutStyles:ee,getLayoutItem:Z,items:x,layoutRect:h,layoutRef:L}}function Se(){const e=H(!1);return W(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:l(()=>e.value?void 0:{transition:"none !important"}),isBooted:F(e)}}const Re=B({tag:{type:String,default:"div"}},"tag");export{Re as a,Se as b,me as c,ge as d,xe as e,he as f,be as g,ve as h,pe as m,Ie as u};
