"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[67],{3473:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5892c2b6",path:"/mock.html",title:"Mock接口",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"Mock接口",description:"suchjs如何mock数据"},excerpt:"",headers:[{level:2,title:"浏览器环境",slug:"浏览器环境",children:[]},{level:2,title:"Nodejs 环境",slug:"nodejs-环境",children:[]}],filePathRelative:"mock.md",git:{contributors:[]}}},3369:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var p=a(6252);const t=(0,p.Wm)("h2",{id:"浏览器环境",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#浏览器环境","aria-hidden":"true"},"#"),(0,p.Uk)(" 浏览器环境")],-1),e=(0,p.Uk)("Suchjs 库本身不支持拦截请求、mock 数据，但提供了单独的库扩展方法 "),c={href:"https://github.com/suchjs/such-mock-browser",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("such-mock-browser"),l=(0,p.Uk)(" 来对数据接口进行扩展。"),u=(0,p.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> \n<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/gh/suchjs/such@master/dist/such.min.js<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> \n<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/gh/suchjs/such-mock-browser@main/dist/such-mock-browser.min.js<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> globalSuch <span class="token operator">=</span> Such<span class="token punctuation">.</span>default<span class="token punctuation">;</span>\n  <span class="token comment">// 挂载在Such类prototype方法mock上的常量</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> target<span class="token punctuation">,</span> method <span class="token punctuation">}</span> <span class="token operator">=</span> globalSuch<span class="token punctuation">.</span>mock<span class="token punctuation">;</span>\n  <span class="token comment">/*\n   * 以下注释的Such指的Such对象的实例\n   * Such.mock(\n   *    pathname: string | RegExp,\n   *    matcher: RequestMethod | string | ((req, params) =&gt; boolean)),\n   *    data: (req, params) =&gt; data | unkown,\n   *    responseOptions?: {\n   *      timeout?: number,\n   *      transformer?: (resp: MockedResponse) =&gt; void | MockedResponse\n   *    }\n   * );\n   * Such.mock 接受三到四个参数\n   * -----------------------------------------------\n   * pathname: 对应要拦截的路径，可以是字符串也可以是正则\n   * matcher:\n   *   - 对应除了路径匹配之外，针对请求还需要进一步匹配的逻辑\n   *   - 该参数可以是字符串，也可以库里内置的 method 枚举的值的组合\n   *   - 也可以是一个能获取到请求与路径参数的返回布尔值函数\n   * data:\n   *   - 可以是直接需要被 `Such.as` 调用的对象\n   *   - 也可是一个提供了请求与路径参数的函数，这样可以在函数里处理逻辑再返回数据\n   * responseOptions:\n   *   - 因为当以上pathname和matcher都匹配到后，就会按照data参数生成数据进行响应返回\n   *   - 默认的响应是json格式数据\n   *   - 但有时返回json格式数据可能不是你想要的，因此可以通过这里来进行覆写\n   *   - 参数可以是一个响应对象，从而对默认响应数据进行覆盖\n   *   - 参数也可以是一个注入了当前默认响应数据的函数，在函数体内可以对响应数据进行修改\n   */</span>\n  globalSuch<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&quot;/a&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    a<span class="token operator">:</span> <span class="token string">&quot;:uppercase:{3,5}&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  globalSuch<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\w*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    any<span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这里将覆盖intercept时指定timeout</span>\n    <span class="token comment">// 可以为每个接口指定不同的响应时间范围</span>\n    timeout<span class="token operator">:</span> <span class="token number">6000</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 在最后需要执行拦截方法，接受的参数为一个需要被拦截的target类型</span>\n  <span class="token comment">// 目前挂载在Such.mock上的target包含两种类型</span>\n  <span class="token comment">// - XHR 拦截XMLHttpRequest</span>\n  <span class="token comment">// - FETCH 拦截window.fetch方法</span>\n  globalSuch<span class="token punctuation">.</span>mock<span class="token punctuation">.</span><span class="token function">intercept</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token constant">XHR</span> <span class="token operator">|</span> target<span class="token punctuation">.</span><span class="token constant">FETCH</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以指定响应时间参数</span>\n    <span class="token comment">// [1000, 3000] 表示响应随机在1秒到3秒之间</span>\n    <span class="token comment">// 也可以是具体的数字，如 5000，5秒</span>\n    timeout<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">]</span> \n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 以使用jQuery为例</span>\n  $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/a&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n  <span class="token comment">// 以上将输出类似 {a: &#39;LDFC&#39;}</span>\n  window\n    <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/anything&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      method<span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n  <span class="token comment">// 以上将输出 {any: &#39;*&#39;}</span>\n  <span class="token comment">// 解除拦截</span>\n  globalSuch<span class="token punctuation">.</span>mock<span class="token punctuation">.</span><span class="token function">unintercept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="nodejs-环境" tabindex="-1"><a class="header-anchor" href="#nodejs-环境" aria-hidden="true">#</a> Nodejs 环境</h2>',2),r=(0,p.Uk)("在 "),i=(0,p.Wm)("code",null,"nodejs",-1),k=(0,p.Uk)(" 环境下，可在项目中安装 "),m=(0,p.Wm)("code",null,"such-cli",-1),b=(0,p.Uk)(" 包，在本地来启动一个 "),h=(0,p.Wm)("code",null,"mock server",-1),g=(0,p.Uk)(" 服务。详细的介绍可以参看"),d={href:"https://github.com/suchjs/such-cli",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("such-cli命令行工具"),j=(0,p.Uk)("。"),q={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",c,[o,(0,p.Wm)(a)]),l]),u,(0,p.Wm)("p",null,[r,i,k,m,b,h,g,(0,p.Wm)("a",d,[f,(0,p.Wm)(a)]),j])],64)}}}}]);