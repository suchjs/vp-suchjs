"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[625],{3917:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-c0d929fe",path:"/types/regexp.html",title:":regexp",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:":regexp",description:"suchjs内置类型regexp"},excerpt:"",headers:[],filePathRelative:"types/regexp.md",git:{contributors:[]}}},81:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});var e=a(6252);const p={id:"regexp-类型说明",tabindex:"-1"},c=(0,e.Wm)("a",{class:"header-anchor",href:"#regexp-类型说明","aria-hidden":"true"},"#",-1),t=(0,e.Uk)(" regexp 类型说明 "),l=(0,e.uE)('<p><code>:regexp</code> 类型是 <code>suchjs</code> 内置的十分强大的类型，很多类型都可以基于该类型来扩展，但也不能过度使用它，毕竟解析正则表达式并生成字符串是个相对比较费性能的事情。</p><ul><li><code>//[imdsguy]</code> 要生成的字符串需要匹配的正则表达式。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 输出3到5个英文字母，不区分大小写</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:regexp:/[a-z]{3,5}/i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 生成值类似 `aZFk`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>#[]</code> 正则表达式最强大功能在于，可以配置通过配置分组的值来修改生成的值。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 还以上面的例子作为参考，增加分组及配置</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:regexp:/(?&lt;ch&gt;[a-z]){3,5}/i:#[ch=&#39;k&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// 这样ch的命名分组就被配置的值，字母`k`所替代</span>\n<span class="token comment">// 注意这里的分组配置的值必须要满足分组的正则规则，否则会报错</span>\n<span class="token comment">// 最终生成的值就变成类似 `kKkk` 这样的值了 </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),o={render:function(s,n){const a=(0,e.up)("Badge");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("h4",p,[c,t,(0,e.Wm)(a,{text:">= 1.0.0"})]),l],64)}}}}]);