"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[661],{3067:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-6ca815f4",path:"/installation.html",title:"安装使用",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"安装使用",description:"suchjs如何安装使用"},excerpt:"",headers:[{level:2,title:"Nodejs",slug:"nodejs",children:[]},{level:2,title:"Browser",slug:"browser",children:[]}],filePathRelative:"installation.md",git:{contributors:[]}}},4314:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});var e=a(6252);const p=(0,e.uE)('<h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> Nodejs</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save suchjs\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> suchjs\n\n<span class="token comment"># pnpm</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> suchjs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// CMD</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> globalSuch<span class="token punctuation">,</span> createNsSuch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;suchjs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 module</span>\n<span class="token keyword">import</span> globalSuch<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNsSuch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;suchjs&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',3),c=(0,e.Uk)("在 nodejs 环境下，suchjs 具备加载配置文件的能力，配置文件的格式可以查看 API "),t=(0,e.Uk)("Such.config"),o=(0,e.uE)('<h2 id="browser" tabindex="-1"><a class="header-anchor" href="#browser" aria-hidden="true">#</a> Browser</h2><ol><li><p>通过 npm 安装</p><ul><li><p>安装方式与 nodejs 中一样</p></li><li><p>引用示例：</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 注意这里引入的是browser的导出</span>\n<span class="token comment">// 如果使用了webpack打包工具，建议分割库单独打包</span>\n<span class="token keyword">import</span> globalSuch<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNsSuch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;suchjs/lib/browser&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>通过 CDN 或者本地文件加载</p><p>将项目中 <code>dist</code> 目录下对应版本的文件（最新版本为<code>such.min.js</code>）， 拷贝到本地或上传到 CDN，然后在页面中直接引入。导出的对象为 <code>window.Such</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 全局导出的Such对象上包含default及createNsSuch两个字段，对应如下</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> globalSuch<span class="token punctuation">,</span> createNsSuch <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>Such<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果有使用 <code>webpack</code> 打包工具，可以进行如下配置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack配置</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 配置externals</span>\n  externals<span class="token operator">:</span> <span class="token punctuation">{</span>\n    suchjs<span class="token operator">:</span> <span class="token string">&quot;Such&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>随后在代码中可以直接使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> globalSuch<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNsSuch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;suchjs&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol>',2),l={render:function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[c,(0,e.Wm)(a,{to:"/api.html#such-config"},{default:(0,e.w5)((()=>[t])),_:1})]),o],64)}}}}]);