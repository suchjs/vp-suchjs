"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[163],{3721:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5e8823bc",path:"/types/date.html",title:":date",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:":date",description:"suchjs内置类型date"},excerpt:"",headers:[],filePathRelative:"types/date.md",git:{contributors:[]}}},1176:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const t={id:"date-类型说明",tabindex:"-1"},c=(0,e.Wm)("a",{class:"header-anchor",href:"#date-类型说明","aria-hidden":"true"},"#",-1),p=(0,e.Uk)(" date 类型说明 "),o=(0,e.uE)('<p><code>:date</code> 类型是我们经常遇到的数据类型之一，suchjs 对日期类型支持以下数据属性：</p><ul><li><code>[begin,end]</code> 日期大小范围，用来设置日期的开始与结束时间范围。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 在没有format数据属性时，返回一个Date对象</span>\n<span class="token comment">// 设置日期的时间范围为2010到2020年，注意范围英文`,`中间不要有空格</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[2010,2020]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// suchjs内部支持一个基础版的与php`strtotime`类似的方法</span>\n<span class="token comment">// 因此你能更方便的书写各种日期时间格式</span>\n<span class="token comment">// 如以下表示当前日期从明天开始到未来半年内</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[&#39;tomorrow&#39;,&#39;+6 months&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>%</code> 格式化，在没有格式化时，<code>:date</code> 类型返回一个 <code>Date</code> 对象，但这通常可能不是你想要的数据格式，所以我们需要对日期进行格式化配置。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 将日期设置为昨天到明天的范围，格式化为 年-月-日 时-分-秒 的格式</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[&#39;yesterday&#39;,&#39;tomorrow&#39;]:%yyyy-mm-dd HH\\\\:MM\\\\:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 当前输出类似 `2021-07-20 23:07:07`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),l={render:function(n,s){const a=(0,e.up)("Badge");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("h4",t,[c,p,(0,e.Wm)(a,{text:">= 1.0.0"})]),o],64)}}}}]);