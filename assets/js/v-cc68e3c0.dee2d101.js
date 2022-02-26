"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[850],{7971:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-cc68e3c0",path:"/en/types/dict.html",title:":dict",lang:"en-US",frontmatter:{lang:"en-US",title:":dict",description:"suchjs built-in type dict"},excerpt:"",headers:[],filePathRelative:"en/types/dict.md",git:{contributors:[]}}},6562:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const e={id:"dict-type-descscription",tabindex:"-1"},c=(0,t.Wm)("a",{class:"header-anchor",href:"#dict-type-descscription","aria-hidden":"true"},"#",-1),p=(0,t.Uk)(),o=(0,t.Wm)("code",null,":dict",-1),i=(0,t.Uk)(" type descscription "),l=(0,t.uE)('<p><code>:dict</code> it used to get an item from an array data, in the Nodejs environment and browser, there are some difference with where to get an array data。</p><h5 id="in-nodejs" tabindex="-1"><a class="header-anchor" href="#in-nodejs" aria-hidden="true">#</a> In Nodejs</h5><ul><li><code>&amp;</code> in Nodejs environment, you need set a path <code>data attribute</code>, the path pointed to a dict file。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Such as in your data directory &lt;dataDir&gt;\n * There&#39;s a dictionary file named &#39;dict.txt&#39; \n * It have many items like this:\n * ---------------\n * hello\n * world\n * ---------------\n */</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> Such<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">&quot;:dict:&amp;&lt;dataDir&gt;/dict.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `hello`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `hello`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `world`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="in-browser" tabindex="-1"><a class="header-anchor" href="#in-browser" aria-hidden="true">#</a> In browser</h5><ul><li><code>#[data=]</code> in browser, you need set a configuration <code>data attribute</code>, set a <code>data</code> field key, and set the value as a variable name what injected by the API <code>Such.assign</code>.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Assign a `dict` variable data </span>\nSuch<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&quot;dict&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Use the `dict` variable as the `:dict`&#39;s data field value</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> Such<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">&quot;:dict:#[data=dict]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `hello`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `hello`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `world`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',7),u={render:function(n,s){const a=(0,t.up)("Badge");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("h4",e,[c,p,o,i,(0,t.Wm)(a,{text:">= 1.0.0"})]),l],64)}}}}]);