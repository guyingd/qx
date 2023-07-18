function ChucklePostAI(e){const t=document.querySelector(".post-ai");t&&t.parentElement.removeChild(t);const o=document.querySelector(e.el?e.el:"#post #article-container"),n=e.title_el?document.querySelector(e.title_el).textContent:document.title;if(!o)return void console.log("ai挂载失败!请检查挂载的容器是否正确。");const i=document.createElement("div");i.className="post-ai",o.insertBefore(i,o.firstChild),i.innerHTML='<div class="ai-title">\n      <div class="ai-title-text">QX-AI</div>\n      <div class="ai-tag">GPT-4</div>\n    </div>\n    <div class="ai-explanation">QX-AI初始化中...</div>\n    <div class="ai-btn-box">\n      <div class="ai-btn-item">介绍自己</div>\n      <div class="ai-btn-item">推荐相关文章</div>\n      <div class="ai-btn-item">生成AI简介</div>\n    </div>';let r=!0,s=document.querySelector(".ai-explanation"),a=document.querySelector(".post-ai"),c=document.querySelectorAll(".ai-btn-item"),l="",m="",u=600,d=0,h=0,p=[],f=0,g=!1,y=new AbortController,v=y.signal;const I="填入chatGPT的apiKey",S=`https://${window.location.host}/`,w=e.key?e.key:"123456",b=e=>{if(r)if(b.start||(b.start=e),f=e-b.start,f>=20){if(b.start=e,d<m-1){let e=l.charAt(d+1),t=/[,.，。!?！？]/.test(e)?150:20;s.firstElementChild&&s.removeChild(s.firstElementChild),s.innerHTML+=e;let o=document.createElement("div");o.className="ai-cursor",s.appendChild(o),d++,150===t&&(document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"),d===m-1&&(A.disconnect(),s.removeChild(s.firstElementChild)),p[0]=setTimeout((()=>{requestAnimationFrame(b)}),t)}}else requestAnimationFrame(b)},A=new IntersectionObserver((e=>{let t=e[0].isIntersecting;r=t,r&&(u=0===d?200:20,p[1]=setTimeout((()=>{h&&(d=0,h=0),0===d&&(s.innerHTML=l.charAt(0)),requestAnimationFrame(b)}),u))}),{threshold:0});function E(e=!0){d=0,h=1,p.length&&p.forEach((e=>{e&&clearTimeout(e)})),r=!1,f=0,s.innerHTML=e?"生成中. . .":"请等待. . .",g||y.abort(),l="",m="",A.disconnect()}function T(e,t=!0){E(t),l=e,m=l.length,A.observe(a)}function k(){T("我是文章辅助AI: QX-AI，点击下方的按钮，让我生成本文简介、推荐相关文章等。")}function C(){E(),p[2]=setTimeout((async()=>{let e=await async function(){g=!1,y=new AbortController,v=y.signal;let e="",t="",o="";const n={method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};if(sessionStorage.getItem("recommendList"))o=JSON.parse(sessionStorage.getItem("recommendList"));else{try{if(e=await fetch(`https://summary.tianli0.top/recommends?url=${encodeURIComponent("https://tianli-blog.club/cdn-auth/")}&author=all`,n),429===e.status&&T("请求过于频繁，请稍后再请求AI。"),!e.ok)throw new Error("Response not ok")}catch(e){console.error("Error occurred:",e),T("获取推荐出错了，请稍后再试。")}o=await e.json(),sessionStorage.setItem("recommendList",JSON.stringify(o))}if(g=!0,o.hasOwnProperty("success")&&!o.success)return!1;t="推荐文章：<br />",t+='<div class="ai-recommend">',o.forEach(((e,o)=>{t+=`<div class="ai-recommend-item"><span>推荐${o+1}：</span><a target="_blank" href="${e.url}" title="${e.title?e.title:"未获取到题目"}">${e.title?e.title:"未获取到题目"}</a></div>`})),t+="</div>";return t}();e?s.innerHTML=e:T("QX-AI未能找到任何可推荐的文章。")}),300)}async function x(){localStorage.setItem("aiTime",Date.now()),E();const e=function(e,t=!0){let o;o=t?`文章的各级标题：${N(e)}。文章内容的截取：${n=q(e),i=n.substring(0,500),r=n.substring(n.length-200),s=(n.length-300)/2,a=n.substring(s,s+300),i+a+r}`:`${q(e)}`;var n,i,r,s,a;return o}(o),t=await async function(e,t=!0){if(!w)return"没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。";if("123456"===w)return"请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。";g=!1,y=new AbortController,v=y.signal;let o="";if(sessionStorage.getItem("summary"))return sessionStorage.getItem("summary");if(t){try{if(o=await fetch("https://summary.tianli0.top/",{signal:v,method:"POST",headers:{"Content-Type":"application/json",Referer:S},body:JSON.stringify({content:e,key:w,title:n,url:window.location.href})}),429===o.status&&T("请求过于频繁，请稍后再请求AI。"),!o.ok)throw new Error("Response not ok")}catch(e){console.error("Error occurred:",e),T("QX-AI请求tianliGPT出错了，请稍后再试。")}const t=(await o.json()).summary;return g=!0,sessionStorage.setItem("summary",t),t}{const t=`你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，文章内容为：${e}`,n="https://api.openai.com/v1/chat/completions";try{if(o=await fetch(n,{signal:v,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:t}]})}),429===o.status&&T("请求过于频繁，请稍后再请求AI。"),!o.ok)throw new Error("Response not ok")}catch(e){console.error("Error occurred:",e),T("QX-AI请求chatGPT出错了，请稍后再试。")}const i=(await o.json()).choices[0].message.content;return g=!0,sessionStorage.setItem("summary",i),i}}(e,true);T(t)}function q(t){const o=e.exclude?e.exclude:["highlight","Copyright-Notice","post-ai","post-series","mini-sandbox"];let n="";for(let e of t.childNodes)if(e.nodeType===Node.TEXT_NODE)n+=e.textContent.trim();else if(e.nodeType===Node.ELEMENT_NODE){let t=!1;for(let n of e.classList)if(o.includes(n)){t=!0;break}if(!t){n+=q(e)}}return n.replace(/\s+/g,"")}function N(e){const t=e.querySelectorAll("h1, h2, h3, h4"),o=[];for(let e=0;e<t.length;e++){const n=t[e],i=n.textContent.trim();o.push(i);const r=N(n);o.push(...r)}return o.join(";")}!function(){sessionStorage.removeItem("recommendList"),sessionStorage.removeItem("summary"),s=document.querySelector(".ai-explanation"),a=document.querySelector(".post-ai"),c=document.querySelectorAll(".ai-btn-item");const e=[k,C,x];c.forEach(((t,o)=>{t.addEventListener("click",(()=>{e[o]()}))})),k()}()}window.pjax&&sessionStorage.getItem("aiExecuted")||(console.log("\n %c Post-Summary-AI 开源博客文章摘要AI生成工具 %c https://github.com/qxchuckle/Post-Summary-AI \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),sessionStorage.setItem("aiExecuted",!0)),"undefined"!=typeof ai_option&&(console.log("正在使用旧版本配置方式，请前往项目仓库查看最新配置写法"),new ChucklePostAI(ai_option));