import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as S,i as C}from"./assets/vendor-77e16229.js";const u=document.querySelector("[data-start]"),x=document.querySelector("#datetime-picker"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");document.querySelector(".timer");let d;const N={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<Date.now()?(C.error({message:"Please choose a date in the future",position:"topRight"}),u.disabled=!0):u.disabled=!1}};let a;function g(){a=setInterval(q,1e3,d)}function q(t){const l=Date.now(),r=t-l,{days:c,hours:i,minutes:e,seconds:o}=s(r);!isNaN(c)&&!isNaN(i)&&!isNaN(e)&&!isNaN(o)&&(m.textContent=n(c),f.textContent=n(i),h.textContent=n(e),y.textContent=n(o)),r<=0&&T()}function T(){a&&(clearInterval(a),m.textContent="00",f.textContent="00",h.textContent="00",y.textContent="00",a=null)}function s(t){const e=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:o,minutes:p,seconds:D}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));u.addEventListener("click",()=>{g()});function n(t){return String(t).padStart(2,"0")}S(x,N);
//# sourceMappingURL=commonHelpers.js.map