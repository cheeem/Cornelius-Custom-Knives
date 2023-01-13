(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=l(r);fetch(r.href,i)}})();function V(){}function Ee(t){return t()}function ve(){return Object.create(null)}function M(t){t.forEach(Ee)}function ue(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function P(t,e){return ee||(ee=document.createElement("a")),ee.href=e,t===ee.href}function Ie(t){return Object.keys(t).length===0}function O(t){return t??""}function D(t){return t&&ue(t.destroy)?t.destroy:V}function u(t,e){t.appendChild(e)}function L(t,e,l){t.insertBefore(e,l||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function g(t){return document.createElement(t)}function te(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function $(){return Q(" ")}function Ne(){return Q("")}function T(t,e,l,s){return t.addEventListener(e,l,s),()=>t.removeEventListener(e,l,s)}function n(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Me(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let fe;function z(t){fe=t}const Y=[],me=[],se=[],he=[],Oe=Promise.resolve();let ae=!1;function Pe(){ae||(ae=!0,Oe.then(Ve))}function oe(t){se.push(t)}const ie=new Set;let le=0;function Ve(){const t=fe;do{for(;le<Y.length;){const e=Y[le];le++,z(e),Se(e.$$)}for(z(null),Y.length=0,le=0;me.length;)me.pop()();for(let e=0;e<se.length;e+=1){const l=se[e];ie.has(l)||(ie.add(l),l())}se.length=0}while(Y.length);for(;he.length;)he.pop()();ae=!1,ie.clear(),z(t)}function Se(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}const ne=new Set;let qe;function H(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function J(t,e,l,s){if(t&&t.o){if(ne.has(t))return;ne.add(t),qe.c.push(()=>{ne.delete(t),s&&(l&&t.d(1),s())}),t.o(e)}else s&&s()}function U(t){t&&t.c()}function R(t,e,l,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,l),s||oe(()=>{const o=t.$$.on_mount.map(Ee).filter(ue);t.$$.on_destroy?t.$$.on_destroy.push(...o):M(o),t.$$.on_mount=[]}),i.forEach(oe)}function B(t,e){const l=t.$$;l.fragment!==null&&(M(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,l,s,r,i,o,v=[-1]){const c=fe;z(t);const a=t.$$={fragment:null,ctx:[],props:i,update:V,not_equal:r,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ve(),dirty:v,skip_bound:!1,root:e.target||c.$$.root};o&&o(a.root);let h=!1;if(a.ctx=l?l(t,e.props||{},(f,p,...y)=>{const _=y.length?y[0]:p;return a.ctx&&r(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),h&&He(t,f)),p}):[],a.update(),h=!0,M(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const f=Me(e.target);a.fragment&&a.fragment.l(f),f.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&H(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),Ve()}z(c)}class G{$destroy(){B(this,1),this.$destroy=V}$on(e,l){if(!ue(l))return V;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(l),()=>{const r=s.indexOf(l);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce="/assets/logo-40f8be76.svg";function pe(t,e,l){const s=t.slice();return s[6]=e[l].label,s[7]=e[l].id,s[9]=l,s}function _e(t){let e,l,s=t[6]+"",r,i,o,v,c;return{c(){e=g("a"),l=g("li"),r=Q(s),o=$(),n(l,"class",i=O(t[0]===t[9]&&"active")+" svelte-1pdxb5w"),n(e,"href",`#${t[7]}`),n(e,"class","svelte-1pdxb5w")},m(a,h){L(a,e,h),u(e,l),u(l,r),u(e,o),v||(c=T(e,"click",t[3]),v=!0)},p(a,h){h&1&&i!==(i=O(a[0]===a[9]&&"active")+" svelte-1pdxb5w")&&n(l,"class",i)},d(a){a&&C(e),v=!1,c()}}}function Re(t){let e,l,s,r,i,o,v,c,a,h,f,p,y,_,m,b,d,w,k,A,I,S,Z,N=t[2],j=[];for(let x=0;x<N.length;x+=1)j[x]=_e(pe(t,N,x));return{c(){e=g("nav"),l=g("a"),s=g("img"),i=$(),o=g("p"),o.textContent="Cornelius Custom Knives",v=$(),c=g("ul"),a=g("img"),f=$();for(let x=0;x<j.length;x+=1)j[x].c();y=$(),_=g("div"),m=g("a"),m.textContent="Contact Me",b=$(),d=g("button"),w=te("svg"),k=te("rect"),A=te("rect"),I=te("rect"),P(s.src,r=ce)||n(s,"src",r),n(s,"alt",""),n(s,"class","svelte-1pdxb5w"),n(o,"class","svelte-1pdxb5w"),n(l,"class","logo svelte-1pdxb5w"),n(l,"href","#home"),P(a.src,h=ce)||n(a,"src",h),n(a,"alt",""),n(a,"class","svelte-1pdxb5w"),n(c,"class",p=O(t[1]&&"mobile-expanded")+" svelte-1pdxb5w"),n(m,"class","contact-me svelte-1pdxb5w"),n(m,"href","#contact"),n(k,"width","80"),n(k,"height","10"),n(k,"x","10"),n(k,"y","25"),n(k,"rx","5"),n(k,"class","svelte-1pdxb5w"),n(A,"width","80"),n(A,"height","10"),n(A,"x","10"),n(A,"y","45"),n(A,"rx","5"),n(A,"class","svelte-1pdxb5w"),n(I,"width","80"),n(I,"height","10"),n(I,"x","10"),n(I,"y","65"),n(I,"rx","5"),n(I,"class","svelte-1pdxb5w"),n(w,"fill","var(--darkgrey)"),n(w,"viewBox","0 0 100 100"),n(w,"class","svelte-1pdxb5w"),n(d,"class","menu svelte-1pdxb5w"),n(d,"aria-expanded",t[1]),n(_,"class","svelte-1pdxb5w"),n(e,"class","svelte-1pdxb5w")},m(x,q){L(x,e,q),u(e,l),u(l,s),u(l,i),u(l,o),u(e,v),u(e,c),u(c,a),u(c,f);for(let E=0;E<j.length;E+=1)j[E].m(c,null);u(e,y),u(e,_),u(_,m),u(_,b),u(_,d),u(d,w),u(w,k),u(w,A),u(w,I),S||(Z=[T(d,"click",t[4]),T(d,"keydown",t[5])],S=!0)},p(x,[q]){if(q&7){N=x[2];let E;for(E=0;E<N.length;E+=1){const de=pe(x,N,E);j[E]?j[E].p(de,q):(j[E]=_e(de),j[E].c(),j[E].m(c,null))}for(;E<j.length;E+=1)j[E].d(1);j.length=N.length}q&2&&p!==(p=O(x[1]&&"mobile-expanded")+" svelte-1pdxb5w")&&n(c,"class",p),q&2&&n(d,"aria-expanded",x[1])},i:V,o:V,d(x){x&&C(e),X(j,x),S=!1,M(Z)}}}function Be(t,e,l){const s=[{label:"HOME",id:"home"},{label:"PRODUCTS",id:"products"},{label:"REVIEWS",id:"reviews"},{label:"CONTACT",id:"contact"}];let{active:r}=e,i=!1;const o=()=>l(1,i=!1),v=()=>l(1,i=!i),c=()=>l(1,i=!i);return t.$$set=a=>{"active"in a&&l(0,r=a.active)},[r,i,s,o,v,c]}class De extends G{constructor(e){super(),W(this,e,Be,Re,K,{active:0})}}const Fe="/assets/splash-979866c1.svg",Ke="/assets/knife11-6-d0d4e552.png";let re;const F=t=>(We(),re.observe(t),{destroy(){re.unobserve(t)}}),We=()=>{re||(re=new IntersectionObserver(t=>{t.forEach(e=>{const l=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(l))})}))};function be(t,e,l){const s=t.slice();return s[3]=e[l],s[5]=l,s}function we(t){let e;return{c(){e=g("div"),n(e,"style",`background-color: var(--${t[1][t[5]]?"white":"highlight"});`)},m(l,s){L(l,e,s)},p:V,d(l){l&&C(e)}}}function Ge(t){let e,l,s,r,i,o,v,c,a,h,f,p,y,_={length:t[1].length},m=[];for(let b=0;b<_.length;b+=1)m[b]=we(be(t,_,b));return{c(){e=g("div"),l=g("div");for(let b=0;b<m.length;b+=1)m[b].c();s=$(),r=g("img"),o=$(),v=g("a"),c=g("img"),h=$(),f=g("div"),f.innerHTML=`<h1 class="svelte-12xakv">Cornelius</h1> 
    <h4 class="svelte-12xakv">Invite <span class="svelte-12xakv">Color</span> To Your Kitchen</h4>`,n(l,"class","grid svelte-12xakv"),n(l,"style",`
    grid-template-columns: repeat(${t[1].length**.5}, 1fr);
  `),n(r,"class","splash svelte-12xakv"),P(r.src,i=Fe)||n(r,"src",i),n(r,"alt",""),P(c.src,a=Ke)||n(c,"src",a),n(c,"alt",""),n(c,"class","svelte-12xakv"),n(v,"href","#products"),n(v,"class","svelte-12xakv"),n(f,"class","heading svelte-12xakv"),n(e,"id","home"),n(e,"class","section svelte-12xakv")},m(b,d){L(b,e,d),u(e,l);for(let w=0;w<m.length;w+=1)m[w].m(l,null);u(e,s),u(e,r),u(e,o),u(e,v),u(v,c),u(e,h),u(e,f),p||(y=[D(F.call(null,e)),T(e,"enterViewport",t[2])],p=!0)},p(b,[d]){if(d&2){_={length:b[1].length};let w;for(w=0;w<_.length;w+=1){const k=be(b,_,w);m[w]?m[w].p(k,d):(m[w]=we(k),m[w].c(),m[w].m(l,null))}for(;w<m.length;w+=1)m[w].d(1);m.length=_.length}},i:V,o:V,d(b){b&&C(e),X(m,b),p=!1,M(y)}}}function Je(t,e,l){let{setActive:s}=e;const r=[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],i=()=>s(0);return t.$$set=o=>{"setActive"in o&&l(0,s=o.setActive)},[s,r,i]}class Ue extends G{constructor(e){super(),W(this,e,Je,Ge,K,{setActive:0})}}const Ce="/assets/knife11-53e4bbc9.jpg",Te="/assets/knife14-e678041d.jpg",Le="/assets/knife15-315fda41.jpg",Ye="/assets/knife16-c92bf643.jpg",ze="/assets/knife10-f3fac750.jpg";function ke(t,e,l){const s=t.slice();return s[7]=e[l],s[9]=l,s}function ye(t){let e,l,s,r,i;return{c(){e=g("li"),l=g("div"),s=$(),n(l,"class","card svelte-k4m9ru"),n(l,"style",`
          background-image: url(${t[7]});
        `),n(e,"class",r=O(t[1]?"knife viewed":"knife")+" svelte-k4m9ru"),n(e,"style",i=`
        rotate: ${-t[2]/(t[3].length/2)+t[2]/t[3].length*(t[3].length-1-t[9])}deg;
      `)},m(o,v){L(o,e,v),u(e,l),u(e,s)},p(o,v){v&2&&r!==(r=O(o[1]?"knife viewed":"knife")+" svelte-k4m9ru")&&n(e,"class",r),v&4&&i!==(i=`
        rotate: ${-o[2]/(o[3].length/2)+o[2]/o[3].length*(o[3].length-1-o[9])}deg;
      `)&&n(e,"style",i)},d(o){o&&C(e)}}}function Qe(t){let e,l,s,r,i,o,v,c,a,h,f,p,y,_,m=t[3],b=[];for(let d=0;d<m.length;d+=1)b[d]=ye(ke(t,m,d));return{c(){e=g("div"),l=g("div"),s=g("img"),i=$(),o=g("h1"),o.innerHTML="My <span>Creations</span>",v=$(),c=g("div"),c.innerHTML=`<div class="sidebar-line svelte-k4m9ru"></div> 
      <div class="sidebar-content svelte-k4m9ru"><p class="svelte-k4m9ru">One-of-a-kind knives handcrafted with durability, quality, and personality</p> 
        <p class="svelte-k4m9ru">Explore The Catalogue</p></div>`,a=$(),h=g("ul"),f=g("div"),p=$();for(let d=0;d<b.length;d+=1)b[d].c();P(s.src,r=ce)||n(s,"src",r),n(s,"alt",""),n(s,"class","svelte-k4m9ru"),n(o,"class","svelte-k4m9ru"),n(c,"class","sidebar-body svelte-k4m9ru"),n(l,"class","sidebar svelte-k4m9ru"),n(f,"class","vertex svelte-k4m9ru"),n(h,"class","svelte-k4m9ru"),n(e,"id","products"),n(e,"class","section svelte-k4m9ru")},m(d,w){L(d,e,w),u(e,l),u(l,s),u(l,i),u(l,o),u(l,v),u(l,c),u(e,a),u(e,h),u(h,f),u(h,p);for(let k=0;k<b.length;k+=1)b[k].m(h,null);y||(_=[D(F.call(null,f)),T(f,"enterViewport",t[4]),T(f,"exitViewport",t[5]),D(F.call(null,e)),T(e,"enterViewport",t[6])],y=!0)},p(d,[w]){if(w&14){m=d[3];let k;for(k=0;k<m.length;k+=1){const A=ke(d,m,k);b[k]?b[k].p(A,w):(b[k]=ye(A),b[k].c(),b[k].m(h,null))}for(;k<b.length;k+=1)b[k].d(1);b.length=m.length}},i:V,o:V,d(d){d&&C(e),X(b,d),y=!1,M(_)}}}function Xe(t,e,l){let s,{setActive:r}=e,i=!0;const o=[Ye,ze,Ce,Te,Le],v=()=>l(1,i=!0),c=()=>l(1,i=!1),a=()=>r(1);return t.$$set=h=>{"setActive"in h&&l(0,r=h.setActive)},t.$$.update=()=>{t.$$.dirty&2&&l(2,s=i?80:30)},[r,i,s,o,v,c,a]}class Ze extends G{constructor(e){super(),W(this,e,Xe,Qe,K,{setActive:0})}}const et="/assets/profile1-5ca349a8.png",tt="/assets/profile2-101a1f1e.png",lt="/assets/profile3-e02c83c8.png";function $e(t,e,l){const s=t.slice();return s[4]=e[l].pfp,s[5]=e[l].name,s[6]=e[l].body,s[7]=e[l].src,s[8]=e[l].viewed,s[9]=e,s[10]=l,s}function je(t){let e,l,s,r,i,o,v,c,a,h=t[5]+"",f,p,y,_=t[6]+"",m,b,d,w,k,A,I,S;function Z(){return t[2](t[8],t[9],t[10])}return{c(){e=g("li"),l=g("div"),s=g("div"),r=$(),i=g("div"),v=$(),c=g("div"),a=g("h3"),f=Q(h),p=$(),y=g("p"),m=Q(_),b=$(),d=g("div"),k=$(),n(s,"class","svelte-whxrgo"),n(i,"style",o=`
            background-image: url(${t[4]});
          `),n(i,"class","svelte-whxrgo"),n(l,"class","pfp svelte-whxrgo"),n(a,"class","svelte-whxrgo"),n(y,"class","svelte-whxrgo"),n(c,"class","content svelte-whxrgo"),n(d,"class","knife svelte-whxrgo"),n(d,"style",w=`
          background-image: url(${t[7]});
        `),n(e,"class",A=O(t[8]&&"viewed")+" svelte-whxrgo")},m(N,j){L(N,e,j),u(e,l),u(l,s),u(l,r),u(l,i),u(e,v),u(e,c),u(c,a),u(a,f),u(c,p),u(c,y),u(y,m),u(e,b),u(e,d),u(e,k),I||(S=[D(F.call(null,e)),T(e,"enterViewport",Z)],I=!0)},p(N,j){t=N,j&2&&o!==(o=`
            background-image: url(${t[4]});
          `)&&n(i,"style",o),j&2&&h!==(h=t[5]+"")&&ge(f,h),j&2&&_!==(_=t[6]+"")&&ge(m,_),j&2&&w!==(w=`
          background-image: url(${t[7]});
        `)&&n(d,"style",w),j&2&&A!==(A=O(t[8]&&"viewed")+" svelte-whxrgo")&&n(e,"class",A)},d(N){N&&C(e),I=!1,M(S)}}}function st(t){let e,l,s,r,i,o,v=t[1],c=[];for(let a=0;a<v.length;a+=1)c[a]=je($e(t,v,a));return{c(){e=g("div"),l=g("h1"),l.innerHTML=`REVIEWS
    <h1 class="watermark svelte-whxrgo">REVIEWS</h1>`,s=$(),r=g("ul");for(let a=0;a<c.length;a+=1)c[a].c();n(l,"class",O("heading")+" svelte-whxrgo"),n(r,"class","svelte-whxrgo"),n(e,"id","reviews"),n(e,"class","section svelte-whxrgo")},m(a,h){L(a,e,h),u(e,l),u(e,s),u(e,r);for(let f=0;f<c.length;f+=1)c[f].m(r,null);i||(o=[D(F.call(null,e)),T(e,"enterViewport",t[3])],i=!0)},p(a,[h]){if(h&2){v=a[1];let f;for(f=0;f<v.length;f+=1){const p=$e(a,v,f);c[f]?c[f].p(p,h):(c[f]=je(p),c[f].c(),c[f].m(r,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=v.length}},i:V,o:V,d(a){a&&C(e),X(c,a),i=!1,M(o)}}}function nt(t,e,l){let{setActive:s}=e;const r=[{name:"Sara Lund",pfp:et,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",src:Ce,viewed:!1},{name:"Justin Trosper",pfp:tt,body:"Nibh cras pulvinar mattis nunc sed blandit libero. Cursus mattis molestie a iaculis at erat. At in tellus integer feugiat scelerisque varius morbi enim nunc.",src:Te,viewed:!1},{name:"Vern Rumsey",pfp:lt,body:"Arcu odio ut sem nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Et molestie ac feugiat sed lectus vestibulum. Arcu cursus vitae congue mauris. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.",src:Le,viewed:!1}],i=(v,c,a)=>l(1,c[a].viewed=!0,r),o=()=>s(2);return t.$$set=v=>{"setActive"in v&&l(0,s=v.setActive)},[s,r,i,o]}class rt extends G{constructor(e){super(),W(this,e,nt,st,K,{setActive:0})}}const it="/assets/Envelope-ed1b72c1.svg",at="/assets/Phone-2b17345d.svg",ot="/assets/Facebook-25d4fe19.svg",ct="/assets/Instagram-482ecfe6.svg",ut="/assets/Twitter-e99e289c.svg",ft="/assets/Linkedin-46b3e600.svg";function xe(t,e,l){const s=t.slice();return s[6]=e[l].src,s[7]=e[l].href,s[8]=e[l].copy,s}function dt(t){let e,l,s,r,i,o;function v(){return t[2](t[8])}function c(){return t[3](t[8])}return{c(){e=g("div"),l=g("img"),r=$(),P(l.src,s=t[6])||n(l,"src",s),n(l,"alt",""),n(l,"class","svelte-1jogola"),n(e,"class","svelte-1jogola")},m(a,h){L(a,e,h),u(e,l),u(e,r),i||(o=[T(e,"click",v),T(e,"keydown",c)],i=!0)},p(a,h){t=a},d(a){a&&C(e),i=!1,M(o)}}}function vt(t){let e,l,s,r;return{c(){e=g("a"),l=g("img"),r=$(),P(l.src,s=t[6])||n(l,"src",s),n(l,"alt",""),n(l,"class","svelte-1jogola"),n(e,"href",t[7]),n(e,"class","svelte-1jogola")},m(i,o){L(i,e,o),u(e,l),u(e,r)},p:V,d(i){i&&C(e)}}}function Ae(t){let e;function l(i,o){return i[7]?vt:dt}let r=l(t)(t);return{c(){r.c(),e=Ne()},m(i,o){r.m(i,o),L(i,e,o)},p(i,o){r.p(i,o)},d(i){r.d(i),i&&C(e)}}}function gt(t){let e,l,s,r,i,o,v,c,a,h,f,p,y=t[1],_=[];for(let m=0;m<y.length;m+=1)_[m]=Ae(xe(t,y,m));return{c(){e=g("div"),l=g("div"),s=g("h1"),s.innerHTML='Let&#39;s <span class="svelte-1jogola">Get In Touch</span>',r=$(),i=g("div"),o=g("div");for(let m=0;m<_.length;m+=1)_[m].c();v=$(),c=g("form"),c.innerHTML=`<div class="field svelte-1jogola"><label for="name" class="svelte-1jogola">Name</label> 
          <input required="" type="text" id="name" name="name" placeholder=" " pattern=".{1,}" class="svelte-1jogola"/> 
          <p class="svelte-1jogola">Please Input a Valid Name</p></div> 
        <div class="field svelte-1jogola"><label for="email" class="svelte-1jogola">Email</label> 
          <input required="" type="email" id="email" name="email" placeholder=" " class="svelte-1jogola"/> 
          <p class="svelte-1jogola">Please Input a Valid Email Address</p></div> 
        <div class="field svelte-1jogola"><label for="body" class="svelte-1jogola">Message</label> 
          <textarea required="" id="body" name="body" rows="8" class="svelte-1jogola"></textarea> 
          <p class="svelte-1jogola">Please Input a Valid Message</p></div> 
        <input id="submit" type="submit" value="Send Message" class="svelte-1jogola"/>`,a=$(),h=g("div"),n(s,"class","svelte-1jogola"),n(o,"class","socials svelte-1jogola"),n(c,"class","svelte-1jogola"),n(i,"class","contact-body svelte-1jogola"),n(l,"class","contact svelte-1jogola"),n(h,"class","about-me"),n(e,"id","contact"),n(e,"class","section svelte-1jogola")},m(m,b){L(m,e,b),u(e,l),u(l,s),u(l,r),u(l,i),u(i,o);for(let d=0;d<_.length;d+=1)_[d].m(o,null);u(i,v),u(i,c),u(e,a),u(e,h),f||(p=[T(c,"submit",mt),D(F.call(null,e)),T(e,"enterViewport",t[4]),T(e,"exitViewport",t[5])],f=!0)},p(m,[b]){if(b&2){y=m[1];let d;for(d=0;d<y.length;d+=1){const w=xe(m,y,d);_[d]?_[d].p(w,b):(_[d]=Ae(w),_[d].c(),_[d].m(o,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=y.length}},i:V,o:V,d(m){m&&C(e),X(_,m),f=!1,M(p)}}}const mt=t=>t.preventDefault();function ht(t,e,l){let{setActive:s}=e;const r=[{label:"Email",src:it,href:"mailto:wernerjt@rfhstudent.org"},{label:"Phone Number",src:at,href:"tel:2025554502"},{label:"Facebook",src:ot,href:""},{label:"Instagram",src:ct,href:""},{label:"Twitter",src:ut,href:""},{label:"LinkedIn",src:ft,href:""}],i=a=>navigator.clipboard.writeText(a),o=a=>navigator.clipboard.writeText(a),v=()=>s(3),c=()=>s(2);return t.$$set=a=>{"setActive"in a&&l(0,s=a.setActive)},[s,r,i,o,v,c]}class pt extends G{constructor(e){super(),W(this,e,ht,gt,K,{setActive:0})}}function _t(t){let e,l,s,r,i,o,v,c,a,h,f;return e=new De({props:{active:t[0]}}),r=new Ue({props:{setActive:t[1]}}),o=new Ze({props:{setActive:t[1]}}),c=new rt({props:{setActive:t[1]}}),h=new pt({props:{setActive:t[1]}}),{c(){U(e.$$.fragment),l=$(),s=g("main"),U(r.$$.fragment),i=$(),U(o.$$.fragment),v=$(),U(c.$$.fragment),a=$(),U(h.$$.fragment),n(s,"class","svelte-1c8kdad")},m(p,y){R(e,p,y),L(p,l,y),L(p,s,y),R(r,s,null),u(s,i),R(o,s,null),u(s,v),R(c,s,null),u(s,a),R(h,s,null),f=!0},p(p,[y]){const _={};y&1&&(_.active=p[0]),e.$set(_)},i(p){f||(H(e.$$.fragment,p),H(r.$$.fragment,p),H(o.$$.fragment,p),H(c.$$.fragment,p),H(h.$$.fragment,p),f=!0)},o(p){J(e.$$.fragment,p),J(r.$$.fragment,p),J(o.$$.fragment,p),J(c.$$.fragment,p),J(h.$$.fragment,p),f=!1},d(p){B(e,p),p&&C(l),p&&C(s),B(r),B(o),B(c),B(h)}}}function bt(t,e,l){const s=i=>l(0,r=i);let r=0;return[r,s]}class wt extends G{constructor(e){super(),W(this,e,bt,_t,K,{})}}new wt({target:document.getElementById("app")});
