"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[592],{5486:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-09fc4136",path:"/en/types/string.html",title:":string",lang:"en-US",frontmatter:{lang:"en-US",title:":string",description:"suchjs built-in type string"},excerpt:"",headers:[],filePathRelative:"en/types/string.md",git:{contributors:[]}}},6595:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const e={id:"string-type-description",tabindex:"-1"},p=(0,t.Wm)("a",{class:"header-anchor",href:"#string-type-description","aria-hidden":"true"},"#",-1),c=(0,t.Uk)(),o=(0,t.Wm)("code",null,":string",-1),i=(0,t.Uk)(" type description "),l=(0,t.uE)('<p><code>:string</code> type is one of the most basic built-in types, and it supports the following data attributes:</p><ul><li><code>{min[,max]}</code> the length <code>data attribute</code> is used to set the length of the string.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Set the length to 3 to 5 characters</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:{3,5}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Set the length to 10 characters</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:{10}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>[]</code> the size range <code>data attribute</code>, used to set the range of the unicode code point.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Set the code point range from 65 to 90, that is, capital letters</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:[65,90]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The output is similar to：&#39;XMSGDULDD&#39;</span>\n<span class="token comment">// Set multiple code point ranges, 65 to 90 are uppercase letters,</span>\n<span class="token comment">// 95 corresponds to English underscore _, 97 to 122 are lowercase letters</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:[65-90,95,97-122]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The output is similar to: &#39;lDc_aKlP&#39;</span>\n<span class="token comment">// You can also use 4-bit or 6-bit unicode encoding to directly represent the code point range</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:[\\\\u0041,\\\\u005a]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The output is similar to: &#39;LIDPDKGCJE&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>@</code> set function calls</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Such<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:string:[65,90]:{3,5}:@concat(&#39;_&#39;)|repeat(3)|slice(0,-1)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The output is similar to: `TSQ_TSQ_TSQ`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',7),u={render:function(n,s){const a=(0,t.up)("Badge");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("h4",e,[p,c,o,i,(0,t.Wm)(a,{text:">= 1.0.0"})]),l],64)}}}}]);