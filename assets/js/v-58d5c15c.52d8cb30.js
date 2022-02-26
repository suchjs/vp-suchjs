"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[509],{3566:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-58d5c15c",path:"/en/types/template.html",title:"template",lang:"en-US",frontmatter:{lang:"en-US",title:"template",description:"suchjs built-in template literal"},excerpt:"",headers:[],filePathRelative:"en/types/template.md",git:{contributors:[]}}},9072:(n,e,s)=>{s.r(e),s.d(e,{default:()=>g});var a=s(6252);const t={id:"template-literal-type-description",tabindex:"-1"},p=(0,a.Wm)("a",{class:"header-anchor",href:"#template-literal-type-description","aria-hidden":"true"},"#",-1),l=(0,a.Uk)(),o=(0,a.Wm)("code",null,"template literal",-1),c=(0,a.Uk)(" type description "),r=(0,a.Uk)("Template literal is a special type. It is mainly implemented based on the API "),i=(0,a.Wm)("code",null,"Such.template",-1),u=(0,a.Uk)(". In terms of writing, it is based on the three colons "),d=(0,a.Wm)("code",null,":::",-1),m=(0,a.Uk)(" as the start identifier of the template string. For more writing details, please refer to API "),b=(0,a.Wm)("code",null,"Such .template",-1),k=(0,a.Uk)(" specific instructions."),h=(0,a.uE)('<ul><li>Usage</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Start with three colons :::, if you need to add more data attributes later</span>\n<span class="token comment">// Also need to use three colons ::: as the terminator, otherwise it can be omitted</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:::it&#39;s a string-`:string`;it&#39;s a number-`:number`;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// You can use backslashes to escape the symbols (`) and (:)</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:::\\\\`\\\\:::&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: &quot;`:::&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><code>{min[,max]}</code> Template literal type support length <code>data attribute</code>, used to set the number of repetitions of the generated template string before.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// repeat between 3 to 5 times</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:::it&#39;s a string-`:string`;it&#39;s a number-`:number`;:::{3,5}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Note: The template literal type was added in the <code>v1.1.0</code> version. This version does not support the <code>:ref</code> reference data type, but it has been repaired and supplemented in <code>v1.1.1</code>. Now, you can use a normal data path to reference data like before, and a special path with index number like <del><code>/${0}</code>, <code>/${1}</code></del><sup>before v3.0</sup><code>//${0}</code>,<code>//${1}</code> and a named reference like <del><code>/${name}</code></del><sup>before v3.0</sup><code>//${name}</code> is added to support to reference the data type used in template literal itself by index. The named data type uses a pair of angle brackets <code>&lt;&gt;</code> with a wrap name, then the <code>:ref</code> data type can reference the named data type by it&#39;s wrap name.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Such<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  hello<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  world<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>\n  say<span class="token operator">:</span> <span class="token string">&#39;:::`&lt;say&gt;:ref:&amp;./hello`,`&lt;say&gt;:ref:&amp;./world`!`:ref:&amp;//${0}`,`:ref:&amp;//${1}`!`:ref:&amp;//${say}:@join(&quot;,&quot;)`!&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// will output</span>\n<span class="token punctuation">{</span>\n  hello<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  world<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>\n  say<span class="token operator">:</span> <span class="token string">&#39;hello,world!hello,world!hello,world!&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',6),g={render:function(n,e){const s=(0,a.up)("Badge"),g=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("h4",t,[p,l,o,c,(0,a.Wm)(s,{text:">= 1.1.0"})]),(0,a.Wm)("p",null,[r,i,u,d,m,(0,a.Wm)(g,{to:"/en/api.html#such-template"},{default:(0,a.w5)((()=>[b])),_:1}),k]),h],64)}}}}]);