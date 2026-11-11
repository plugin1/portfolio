// Keep a stable desktop viewport inside each scaled experience.
(()=>{const stages=[...document.querySelectorAll('.stage')];
function fit(el){const frame=el.querySelector('iframe');if(!frame)return;const w=Number(el.dataset.viewWidth),h=Number(el.dataset.viewHeight),scale=Math.min(el.clientWidth/w,el.clientHeight/h);Object.assign(frame.style,{width:w+'px',height:h+'px',position:'absolute',left:(el.clientWidth-w*scale)/2+'px',top:(el.clientHeight-h*scale)/2+'px',transformOrigin:'top left',transform:'scale('+scale+')',maxWidth:'none'});}
const ro=new ResizeObserver(entries=>entries.forEach(entry=>fit(entry.target)));
for(const stage of stages){ro.observe(stage);new MutationObserver(()=>fit(stage)).observe(stage,{childList:true});}
document.addEventListener('fullscreenchange',()=>stages.forEach(fit));})();
