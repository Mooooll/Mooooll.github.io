import{y as D,r as f,z as S,o as X,e as w,f as _,i as K,w as U,k as v,g as s,u as o,t as O,v as k,T as Y,q as j,a as P,F,h as G,A as Z,B as ee,C as te,D as ne,E as le,j as ae}from"./index-c5cfbbbf.js";import{t as re}from"./type-59002135.js";import{m as B}from"./mes-f465af02.js";import"./utils-783da8a8.js";const ie=["id"],oe={class:"absolute top-0 left-0 w-full h-full bg-neutral-50/70 dark:bg-neutral-900/70 flex flex-wrap overflow-hidden"},se=["id"],ue=["value"],ce={__name:"player",props:{player:{type:Object,default:()=>{}},cnn:{type:Boolean,default:!1},headcount:{type:Number,default:2},working:{type:Boolean,default:!1}},emits:["change","lose","win","get-out","nothing","enqueue"],setup(p,{emit:g}){const a=p,e=u=>{let c=u.target.value;c.length>10&&(B({type:"error",text:"少点字儿吧",time:2e3}),c=u.target.value=c.slice(0,10).trim()),g("change",c,a.player.id)};D(()=>a.cnn,(u,c)=>{!u&&a.player.nickname.length<=0&&(B({type:"error",text:"昵称怎么能空着呢",time:2e3}),g("change",`昵称${a.player.id.slice(-6)}`,a.player.id))});let i=f(!1),y=f(!1),m=S(()=>`dapai${a.player.id}`),E=S(()=>`tc${a.player.id}`),L=S(()=>!a.cnn&&!i.value&&!a.player.bedoing),r=u=>{let c=document.getElementById(m.value);c&&(c.contains(u.target)&&!a.player.bedoing&&!y.value&&i.value?y.value=!0:(i.value=!1,y.value=!1))};D(i,(u,c)=>{setTimeout(()=>{u?window.addEventListener("click",r):window.removeEventListener("click",r)},0)});const q=()=>{a.cnn||a.player.bedoing||(a.working?g("enqueue",a.player.id):i.value=!0)},N=()=>{g("lose",a.player.nickname,a.player.id)},b=()=>{g("win",a.player.nickname,a.player.id)},$=async()=>{if(a.headcount<=2){B({type:"error",text:"玩家人数过少",time:2e3}),i.value=!1;return}y.value&&g("get-out",a.player.nickname,a.player.id,a.player.jetton)},h=()=>{g("nothing",a.player.nickname,a.player.id)};return X(()=>{window.removeEventListener("click",r)}),(u,c)=>(w(),_("div",{onClickCapture:q,id:o(m),class:j(["relative w-5/12 md:w-1/3 min-h-24 border select-none transition-all flex justify-center items-center flex-col gap-2",{"cursor-pointer":o(L)},p.player.bedoing?"opacity-60 cursor-not-allowed border-purple-600":a.player.me?"border-amber-600":""])},[K(Y,{name:"fade"},{default:U(()=>[v(s("div",oe,[s("div",{onClick:N,class:"doing-btn border-r border-b cursor-pointer"},"支出"),s("div",{onClick:b,class:"doing-btn border-l border-b cursor-pointer"},"通吃"),s("div",{onClick:$,id:o(E),class:"doing-btn border-r border-t cursor-pointer"},O(o(y)?"确认":"退出"),9,se),s("div",{onClick:h,class:"doing-btn border-l border-t"})],512),[[k,o(i)]])]),_:1}),v(s("span",{class:"basis-1/3 text-2xl w-3/4 flex justify-center items-center"},O(p.player.nickname),513),[[k,!p.cnn]]),v(s("input",{type:"text",value:p.player.nickname,onInput:e,class:"basis-1/3 text-2xl text-center w-full border-none outline-none p-0 bg-white dark:bg-neutral-900"},null,40,ue),[[k,p.cnn]]),s("span",{class:j(["break-all text-center",p.player.jetton>0?"text-emerald-500 dark:text-emerald-300":p.player.jetton==0?"":"text-rose-600 dark:text-rose-500"])},O(p.player.jetton),3)],42,ie))}};const de={key:0,class:"min-h-[80vh] text-2xl flex flex-col justify-center items-center gap-8"},fe={class:"relative w-9/12 max-w-xs flex flex-wrap justify-evenly gap-2"},pe=["onClick"],ge={key:1,class:"w-full flex flex-col items-center"},he={class:"btnbox w-full max-w-5xl flex justify-evenly items-start gap-2 select-none"},ve={class:"fixed top-0 left-0 w-full max-w-5xl h-full p-2 bg-neutral-800/20"},ye=["placeholder","onKeyup"],me={class:"w-full max-w-5xl my-6 flex flex-col justify-start items-center gap-2"},be=s("div",{class:"text-lg"},"历史",-1),xe={class:"w-full p-2 text-center"},Ce={__name:"dapai",setup(p){let g=f(!1),a=f(2),e=P([]),i=f(!1);const y=l=>{a.value=l,g.value=!0;for(let n=0;n<l;n++)e.push({id:n.toString(),nickname:`好运${n+1}号`,jetton:0,bedoing:!1,me:!1})};let m=f(!1);const E=()=>{if(i.value){B({type:"error",text:"非法操作",time:2e3});return}m.value=!0},L=()=>{m.value=!1,r.length>0&&r[0]!=""&&x.unshift(`"${r[r.length-1]}" 改名为 "${r[0]}"`),r=[]};let r=[];const q=(l,n)=>{let t=e.indexOf(e.find(C=>C.id==n));r.length>=2&&(e[t].nickname==r[0]?(r.shift(),r.unshift(l)):(x.unshift(`"${r[r.length-1]}" 改名为 "${r[0]}"`),r.length=0)),r.length==0&&(r.unshift(e[t].nickname),r.unshift(l)),e[t].nickname=l},N=()=>{if(i.value){B({type:"error",text:"非法操作",time:2e3});return}e.push({id:new Date().getTime().toString(),nickname:`天问${e.length+1}号`,jetton:0,bedoing:!1,me:!1}),a.value++,x.unshift(`"天问${e.length}号" 加入`)};let b=f(0),$=f("");D(b,(l,n)=>{switch(b.value){case 1:$.value="支出点数";break;case 2:$.value="通吃点数";break;default:$.value="点数";break}});let h;const u=[];let c=f(null);const W=(l,n)=>{i.value=!0,b.value=1;for(let t=0;t<e.length;t++)e[t].id===n&&(e[t].bedoing=!0,h=t)},A=l=>{for(let n=0;n<e.length;n++)e[n].id===l&&(e[n].me=!e[n].me)};let T=f(!1),d=f();D(d,(l,n)=>{l>999&&(d.value=999)});const H=()=>{if(!i.value){B({type:"warn",text:"温馨提示：用于确认收款人",time:2e3});return}for(let l=0;l<e.length;l++)e[l].me===!0&&u.push(e[l].id);for(let l=0;l<e.length&&e[l].me!=!0;l++)if(l>=e.length-1){I();return}T.value=!0,V()},M=(l,n)=>{i.value=!0,b.value=2;for(let t=0;t<e.length;t++)e[t].id===n&&(e[t].bedoing=!0,h=t);T.value=!0,V()},R=(l,n,t)=>{e.splice(e.indexOf(e.find(C=>C.id==n)),1),a.value--,x.unshift(`"${l}" 退出 金额为 ${t}`)},J=(l,n)=>{for(let t=0;t<e.length;t++)e[t].id===n&&(e[t].bedoing=!0,setTimeout(()=>{e[t].bedoing=!1},0))},Q=()=>{switch(b.value){case 1:let l=[];for(let n=0;n<u.length;n++){let t=e.indexOf(e.find(C=>C.id==u[n]));e[t].jetton+=d.value,e[t].me=!1,l.push(e[t].nickname)}e[h].jetton-=d.value*u.length,z(e[h].nickname,d.value,l);break;case 2:for(let n=0;n<e.length;n++)e[n].jetton-=d.value;e[h].jetton+=d.value*a.value,z(e[h].nickname,d.value);break}I()},V=async()=>{await le(),c.value.focus()},x=P([]),z=(l,n,t)=>{switch(b.value){case 1:x.unshift(`${l} 支付给 ${t} ${n}`);break;case 2:x.unshift(`${l} 通吃 ${n}`);break;default:console.error("???");break}},I=()=>{d.value="",T.value=!1,u.length=0,i.value=!1,e[h].bedoing=!1,h=-1};return(l,n)=>o(g)?(w(),_("div",ge,[K(Z,{name:"list",tag:"div",class:"playerbox w-full max-w-5xl min-h-[80vh] mt-1 mb-8 flex flex-wrap justify-around gap-y-2"},{default:U(()=>[(w(!0),_(F,null,G(o(e),t=>(w(),ae(ce,{key:t,player:t,cnn:o(m),headcount:o(a),working:o(i),onChange:q,onLose:W,onWin:M,onGetOut:R,onNothing:J,onEnqueue:A},null,8,["player","cnn","headcount","working"]))),128))]),_:1}),s("div",he,[v(s("div",{onClick:E,class:j(["btn",o(i)?"opacity-50 cursor-not-allowed":"cursor-pointer"])}," 修改昵称",2),[[k,!o(m)]]),v(s("div",{onClick:L,class:j(["btn",o(i)?"opacity-50 cursor-not-allowed":"cursor-pointer"])}," 完成 ",2),[[k,o(m)]]),v(s("div",{onClick:N,class:j(["btn",o(i)?"opacity-50 cursor-not-allowed":"cursor-pointer"])},"加入 ",2),[[k,o(a)<10]]),s("div",{onClick:H,class:j(["btn",o(i)?"cursor-pointer":"opacity-50 cursor-not-allowed"])},"确认",2)]),v(s("div",ve,[v(s("input",{ref_key:"iptPaying",ref:c,type:"number",pattern:"\\d*",placeholder:o($),"onUpdate:modelValue":n[0]||(n[0]=t=>ee(d)?d.value=t:d=t),onKeyup:te(Q,["enter"]),class:"mt-12 text-2xl text-center w-full border-none rounded-lg outline-none py-2 bg-white/90 dark:bg-neutral-900/90"},null,40,ye),[[ne,o(d)]])],512),[[k,o(T)]]),v(s("div",me,[be,(w(!0),_(F,null,G(x,t=>(w(),_("div",xe,O(t),1))),256))],512),[[k,x.length>0]])])):(w(),_("div",de,[K(re,{list:["请选择参与人数"],loop:!1,speed:50}),s("div",fe,[(w(),_(F,null,G(9,t=>s("div",{key:t,onClick:C=>y(t+1),class:"w-1/4 text-center leading-10 hover:text-yali-yel cursor-pointer transition-all duration-300 border border-dotted select-none"},O(t+1),9,pe)),64))])]))}};export{Ce as default};