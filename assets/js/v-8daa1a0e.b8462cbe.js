"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[495],{6464:(e,c,d)=>{d.r(c),d.d(c,{data:()=>o});const o={key:"v-8daa1a0e",path:"/",title:"关于本库",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"关于本库",description:"suchjs的设计指南"},excerpt:"",headers:[{level:3,title:"设计目标",slug:"设计目标",children:[]},{level:3,title:"数据属性",slug:"数据属性",children:[]},{level:3,title:"数据模拟示例",slug:"数据模拟示例",children:[]}],filePathRelative:"README.md",git:{contributors:[]}}},3411:(e,c,d)=>{d.r(c),d.d(c,{default:()=>i});const o=(0,d(6252).uE)('<h3 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标" aria-hidden="true">#</a> 设计目标</h3><p>在前端数据模拟库上，已经有像 <code>fakerjs</code>、<code>mockjs</code> 这种功能比较全的库，但每个库都有自己的设计风格和出发点。<code>suchjs</code> 的设计目标主要有如下两个方面：</p><ul><li><p>易扩展 —— 对于数据模拟来说，良好的扩展性是保持库的生命力的一个重要特性，所以<code>suchjs</code>在这方面做了尽可能多的设计和工作。</p></li><li><p>易使用 —— 这其实是易扩展带来的一个好处之一，另外 <code>suchjs</code> 采用声明式的写法，以多种<code>数据属性</code>配置组合的方式来声明数据，这种方式更便于理解。</p></li></ul><h3 id="数据属性" tabindex="-1"><a class="header-anchor" href="#数据属性" aria-hidden="true">#</a> 数据属性</h3><p>每种数据类型都有其具备的自身特性，比如数字，会有大小、会有格式；又比如字符串会有长度，会有字符语言的限制，或者说 unicode 码点的限制。<code>suchjs</code> 把这些通用特性提取出来，以数据属性的方式书写在类型描述中。也因此一个模拟数据可能是多个这样的数据属性的组合，多个数据属性通过间隔符 <code>:</code> 隔离开来（注：为有时候方便书写，第一个类型属性和紧接着的属性的分隔符可以省略）。<code>suchjs</code> 里内置的数据属性包含以下这些：</p><ul><li><p>类型 —— 首先需要书写数据的类型，这些类型可以是 <code>suchjs</code> 内置的，也可以是你自己定义的。默认的内置类型有字符串 <code>:string</code>，数字 <code>:number</code>，日期 <code>:date</code>，正则 <code>:regexp</code>，引用 <code>:ref</code>，自增 <code>:increment</code>，还支持词典 <code>:dict</code>，级联菜单 <code>:cascader</code>，不过这两个类型在 Nodejs 环境和浏览器环境使用上有稍许区别，在具体类型的条目上会有相关的说明。此外还包括内置的扩展类型如 <code>:bool</code>，<code>:int</code>，<code>:url</code>，<code>:email</code> 等，内置扩展类型可以也可以在源代码 <code>src/extends/recommend.ts</code> 查看。</p></li><li><p>长度 —— 长度属性以 <code>{min[,max]}</code> 的格式书写，它通常对于字符串和数组格式数据比较常用，如字符串长度为 3 则用 <code>{3}</code> 表示，长度为 10 到 20 则表示为 <code>{10,20}</code></p></li><li><p>大小 —— 大小属性以 <code>[min,max]</code> 的格式书写，通常表示一个数值范围。对于数字，就表示数字的最小值和最大值，如数字大小为 10 到 20，则用 <code>[10,20]</code> 表示，如果表示一个固定数字，比如数字 3，则用 <code>[3,3]</code> 表示，如果不是有其它的数据属性配置，则更应该直接用数字 3 直接书写。对于字符串，则通常表示字符的码点范围，比如大写字母的码点范围为 65-90，则可以书写为<code>[65,90]</code>，如果有多个分组，则可以用分组的书写语法，比如同时表示大写字母和小写字母，可以书写为<code>[65-90,97-122]</code>。对于日期，则表示一个日期范围，比如从 2012 到 2022，则表示为 <code>[2012,2022]</code>，<code>suchjs</code>内置了更强大的类似 php <code>strtotime</code> 日志格式的支持，比如以当前时间前后 5 年的范围，则可以表示为 <code>[&#39;-5 years&#39;,&#39;+5 years&#39;]</code>。</p></li><li><p>格式化 —— 格式化属性以 <code>%</code> 后面带上 <code>format</code> 格式的方式书写。格式化通常对于数字类型、日期类型比较有用，对于数字类型，<code>suchjs</code> 内置了支持 c 风格 <code>printf</code> 的书写格式，比如 <code>%.2f</code> 表示将数字转成 2 位小数点的浮点数（数字类型默认就是小数部分生成<code>Math.random</code>浮点数的格式）。</p></li><li><p>路径 —— 路径属性以 <code>&amp;</code> 后带上地址的形式书写。路径属性对引用类型、词典类型等比较有用。对于引用类型，路径地址代表着模拟对象的数据路径，注意路径对应的引用字段必须出现在该引用类型之前，否则获取到的数据将是<code>undefined</code>。<code>{firstName: &#39;你&#39;, lastName: &#39;好&#39;, fullName: &#39;:ref:&amp;./firstName,./lastName&#39;}</code>，这样 <code>fullName</code> 将得到 <code>[&#39;你&#39;,&#39;好&#39;]</code>的一个数组。对于词典类型，则表示词典文件的路径地址 <code>:dict:&amp;&lt;dataDir&gt;/dict.txt</code>，则表示从数据目录下的 <code>dict.txt</code> 文件获取数据。</p></li><li><p>正则 —— 匹配正则以 <code>/</code> 开头，后接正则表达式字符串。正则的属性配置主要针对正则类型。正则类型是一个很强大的类型，基于它能生成基本你想要的格式的所有类型。</p></li><li><p>函数调用 —— 以上的数据属性不同的数据类型可能并不是都需要，所以每个类型可能都只支持特定的几种数据属性的写法，但函数调用和下面的配置数据属性则是所有类型都支持解析的。函数属性以 <code>@</code> 开头，后面加上函数调用，要使用的函数可以通过<code>Such.assign</code>静态方法全局注入，对于数据类型自身存在的方法，则可以直接调用。比如对于字符串类型：<code>:string:[65,90]:{3}:@repeat(3)|slice(-5)</code>，则表示获取到 3 个大写字母字符串后、重复 3 遍，然后取最后倒数的 5 个字符。</p></li><li><p>参数配置 —— 参数配置和函数调用一样，也是类型默认都支持解析并获取到的数据属性。它通常用来为一些已定义类型提供外部数据的注入。参数配置以 <code>#[key=value,flag]</code>的格式书写。比如自增 id 类型，我们想配置它的开始值和步阶，则可以这样配置 <code>:increment:#[start=1,step=2]</code>。</p></li></ul><h3 id="数据模拟示例" tabindex="-1"><a class="header-anchor" href="#数据模拟示例" aria-hidden="true">#</a> 数据模拟示例</h3><p>有了对上面数据属性基础的了解，现在我们就可以来通过这些数据属性的组合，来模拟一些数据了。</p><ul><li><p><code>:string:[65,90]:{3,10}</code> =&gt; 输出一个字符串，字符串的码点范围为 65 到 90&lt;亦即大写字母&gt;，长度为 3 到 10 个，会生成形如 <code>DUFCD</code>，<code>KASGDS</code> 这样的字符串。</p></li><li><p><code>:date:[&#39;-1 year&#39;,&#39;+1 year&#39;]:%yyyy-mm-dd HH\\:MM\\:ss</code> =&gt; 输出当前日期前后一年的日期，并格式化为年月日时分秒的形式。</p></li><li><p><code>:number:[1,100]:%.2f</code> =&gt; 输出一个 1 到 100 内的数字，并且格式化为保留两个小数点。</p></li><li><p><code>:regexp:/[a-z]{3,5}/i</code> =&gt; 输出一个 3 到 5 个英文字母的字符串。</p></li></ul><p>更多的数据类型或者类型自定义方式请继续查看相关章节。</p>',10),i={render:function(e,c){return o}}}}]);