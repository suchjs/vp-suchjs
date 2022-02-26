"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[272],{6674:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-67b5eca6",path:"/en/types/increment.html",title:":increment",lang:"en-US",frontmatter:{lang:"en-US",title:":increment",description:"suchjs built-in type increment"},excerpt:"",headers:[],filePathRelative:"en/types/increment.md",git:{contributors:[]}}},517:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(6252);const e={id:"increment-type-description",tabindex:"-1"},p=(0,t.Wm)("a",{class:"header-anchor",href:"#increment-type-description","aria-hidden":"true"},"#",-1),c=(0,t.Uk)(),o=(0,t.Wm)("code",null,":increment",-1),u=(0,t.Uk)(" type description "),i=(0,t.uE)('<p><code>:increment</code> the type can be used to mock the auto-increment data. If the length <code>data attribute</code> is also setted, it can be used to mock a <code>range</code> array.</p><ul><li><code>#[start=1, step=2]</code> configure the <code>start</code> value and the <code>step</code>.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// The configuration of `:increment` has two parameters</span>\n<span class="token comment">// start: represents the initial value, the default is 1</span>\n<span class="token comment">// step: represents the incremental step, the default is 1</span>\n<span class="token comment">// Indicates that the value starts from 0 and the step is 2</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> Such<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">&quot;:increment:#[start=0,step=2]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `0`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `2`</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// `4`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>{min[,max]}</code> set the count of numbers you want to make, return an array of multiple auto-increment data.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// return an array of multiple auto-incrementing numbers</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> Such<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">&quot;:increment:{3}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 5, 6]</span>\ninstance<span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [7, 8, 9]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),l={render:function(n,s){const a=(0,t.up)("Badge");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("h4",e,[p,c,o,u,(0,t.Wm)(a,{text:">= 1.0.0"})]),i],64)}}}}]);