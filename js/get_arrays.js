hexo.extend.helper.register("getarray_bar",(function(e){e||(e="category");return"category"==e?function(e){if(!e||!e.length)return"";const t=[];hexo.locals.get("categories").map((function(e){t.push({name:e.name,value:e.length})})),t.sort(((e,t)=>t.value-e.value));let a="";for(let n=0;n<e.length;n++)strTemp=`\n        <div class="category-bar-item" id="${t[n].name}">\n        <a href="/categories/${t[n].name}/">${t[n].name}</a>\n        </div>`,a+=strTemp;return a}(this.site.categories):"tag"==e?function(e){if(!e||!e.length)return"";const t=[];hexo.locals.get("tags").map((function(e){t.push({name:e.name,value:e.length})})),t.sort(((e,t)=>t.value-e.value));let a="";for(let n=0;n<e.length;n++)strTemp=`\n        <div class="category-bar-item" id="${t[n].name}">\n        <a href="/tags/${t[n].name}/">${t[n].name}</a>\n        </div>`,a+=strTemp;return a}(this.site.tags):void 0}));