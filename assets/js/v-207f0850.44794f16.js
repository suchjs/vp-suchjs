"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[532],{6560:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-207f0850",path:"/field.html",title:"字段配置",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"字段配置",description:"suchjs如何配置字段"},excerpt:"",headers:[{level:2,title:"如何配置字段",slug:"如何配置字段",children:[]},{level:2,title:"特殊值生成",slug:"特殊值生成",children:[]}],filePathRelative:"field.md",git:{contributors:[]}}},2524:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252);const p={id:"如何配置字段",tabindex:"-1"},t=(0,e.Wm)("a",{class:"header-anchor",href:"#如何配置字段","aria-hidden":"true"},"#",-1),o=(0,e.Uk)(" 如何配置字段 "),c=(0,e.Wm)("p",null,[(0,e.Uk)("通常我们实际的数据模拟都是基于"),(0,e.Wm)("code",null,"json"),(0,e.Uk)("对象格式的，那么我们就必须对数据字段的"),(0,e.Wm)("code",null,"key"),(0,e.Uk)("进行配置，Suchjs 对 key 支持以下的配置：")],-1),l=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"?"),(0,e.Uk)(" 表示一个字段非必须，即生成的数据里可能不包含该字段。")])],-1),u=(0,e.uE)('<p><code>{min[,max]}</code> 表示该字段出现的个数，它通常用在数组配置上，但注意数组字段配置的一些细节：</p><ol><li><p>当 <code>min</code> 为 <code>0</code> 时候，整个字段值会变成 <code>undefined</code>，如果数组命中 <code>0</code> 个时，仍想生成空数组，可以使用 <code>+0</code> 代替 <code>0</code>。同样的，当 <code>min</code> 值为 <code>1</code> 时，Suchjs 也会将生成 <code>value</code> 的原始类型，而不是生成数组，如果仍然想生成 <code>value</code> 值的数组，也需要用 <code>+1</code> 代替。<code>+</code> 加号在这里的含义表示生成的数据一直是数组。</p></li><li><p>当字段的<code>value</code>值本身也是数组时，生成的数据项每项都会从数组中随机挑选一条，如果你想定义数组值的含义是表示取其中一个项进行生成，可以在 <code>{</code> 前面加上标识符英文冒号 <code>:</code>，如 <code>key:{3,5}</code>，表示取数组值其中的一个项，模拟一个 3 到 5 项的数组。</p></li><li><p>如果该字段也是可选的，可以在末尾右花括号 <code>}</code> 后加上 <code>?</code> 符号。</p></li><li><p>注意最小个数 <code>0</code> 和可选符号 <code>?</code> 意义是不一样的，<code>0</code> 的字段会一直存在，<code>?</code> 的则不一定。</p></li><li><p>对于 <code>value</code> 值为非数组类型，最终都是按 <code>value</code> 值生成数组类型数据。这可能与 <code>mockjs</code> 库表现不一样，比如<code>mockjs</code> 对于字符串类型，生成的结果会是一个将值重复多次的字符串。</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Such<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// name字段可有可无</span>\n  <span class="token string">&quot;title?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;:string:{3,10}&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// books字段一定为数组，数组大小为0到5</span>\n  <span class="token string">&quot;books{+0,5}&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    date<span class="token operator">:</span> <span class="token string">&quot;:date&quot;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&quot;:string:{10,20}&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// tags字段非必须，如果存在，就是一个3个字符串组成的数组</span>\n  <span class="token string">&quot;tags{3}?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;:string:{5,10}&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// firm字段非必须，如果存在，就从数组值中挑选一个</span>\n  <span class="token comment">// 这里数字1前面没有使用`+`，所以生成的firm字段数据是个字符串</span>\n  <span class="token string">&quot;firm:{1}?&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Netflix&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Disney&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 生成的数据类似如下json</span>\n<span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">&quot;H(@L@8&quot;</span><span class="token punctuation">,</span>\n  books<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      date<span class="token operator">:</span> <span class="token string">&quot;2013-07-19&quot;</span><span class="token punctuation">,</span>\n      author<span class="token operator">:</span> <span class="token string">&quot;1Lsy.k:;,RL`w~3RH%G2&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;)K2:\\\\&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;x:fYEZ8U&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;+PcO7S^aK&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  firm<span class="token operator">:</span> <span class="token string">&quot;Disney&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',3),i=(0,e.Uk)("通常，我们的模拟数据会生成多次，但有时我们需要精确控制可选字段是否存在，数组字段的具体长度值等，这时候我们就需要在生成模拟数据时，提供具体的 "),r=(0,e.Wm)("code",null,"keys",-1),k=(0,e.Uk)(" 参数值，可以参看 "),d=(0,e.Uk)("keys 配置"),m={id:"特殊值生成",tabindex:"-1"},b=(0,e.Wm)("a",{class:"header-anchor",href:"#特殊值生成","aria-hidden":"true"},"#",-1),g=(0,e.Uk)(" 特殊值生成 "),q=(0,e.uE)('<p>由于 Suchjs 的模拟数据都是以字符串格式描述的，所以如何区分正常的字符串还是数据类型及属性就变得比较重要。Suchjs 里约定的模拟数据类型都是以<code>:</code>开头，如果你有真实的冒号<code>:</code>开头的字符串，不希望被当成数据类型的开始符被解析，这时候需要对<code>:</code>进行转义，生成的字符串里会将转义符去掉。示例如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Such<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\:number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 生成 &#39;:number&#39;</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 生成 -31.50614310483728</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',2),h={render:function(n,s){const a=(0,e.up)("Badge"),h=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("h2",p,[t,o,(0,e.Wm)(a,{text:">= 1.0.0"})]),c,(0,e.Wm)("ul",null,[l,(0,e.Wm)("li",null,[u,(0,e.Wm)("p",null,[i,r,k,(0,e.Wm)(h,{to:"/api.html#such-instance"},{default:(0,e.w5)((()=>[d])),_:1})])])]),(0,e.Wm)("h2",m,[b,g,(0,e.Wm)(a,{text:">= 1.0.0"})]),q],64)}}}}]);