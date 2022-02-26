"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[835],{2308:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-2d0a870d",path:"/en/",title:"About",lang:"en-US",frontmatter:{lang:"en-US",title:"About",description:"Design philosophy of Suchjs"},excerpt:"",headers:[{level:3,title:"Design Goals",slug:"design-goals",children:[]},{level:3,title:"Data Attribute",slug:"data-attribute",children:[]},{level:3,title:"Mocking Data Example",slug:"mocking-data-example",children:[]}],filePathRelative:"en/README.md",git:{contributors:[]}}},5636:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const o=(0,a(6252).uE)('<h3 id="design-goals" tabindex="-1"><a class="header-anchor" href="#design-goals" aria-hidden="true">#</a> Design Goals</h3><p>In the front-end, there are some mature libraries for mocking data, such as <code>mockjs</code>. Howerver, each library has its own design features and goals. The design goals of <code>suchjs</code> are mainly as follows:</p><ul><li><p>Expandability - For moking data, scalability is an important feature to maintain the vitality of a library, so <code>suchjs</code> has done as much work as possible in this regard.</p></li><li><p>Easy to use - This is actually one of the benefits of the expandability. And more, <code>suchjs</code> use a declarative way for declaring a data, what named the <code>data attribute</code> in the library, a mocking type is a combinations of each of them.</p></li></ul><h3 id="data-attribute" tabindex="-1"><a class="header-anchor" href="#data-attribute" aria-hidden="true">#</a> Data Attribute</h3><p>Each data type has its own features. For example, numbers, it have sizes and formats; strings, it have length, and belong to some unicode code points. <code>suchjs</code> extracts the common feature of thoes data types, which we named <code>data attribute</code>s as mentioned above. Now, a mocking type is a combination of thoes <code>data attribute</code>, one or two or more. <code>suchjs</code> use the colon <code>:</code> to separate the <code>data attribute</code>s.(Note: For the convenience of writing, most time, you can drop the separator between the first two <code>data attribute</code>s, because the first <code>data attribute</code> is always a <code>type</code>, it can matched exactly, and won&#39;t affect the parsing).</p><p>The built-in <code>data attribute</code>s in <code>suchjs</code> include the following:</p><ul><li><p>Type -- First, you need to give the type of the data. It can be a built-in type of the library, and also can be a type you defined it yourself. The library built-in types contains: a string <code>:string</code>, a number <code>:number</code>, a date <code>:date</code>, a regular expression <code>:regexp</code>, a reference <code>:ref</code>, a self-increment number <code>:increment</code>, and also supports a dictionary <code>:dict</code>, a cascading menu <code>:cascader</code>, but they have a slight difference in use. In addition, it also includes built-in extension types such as <code>:boolean</code>, <code>:url</code>, <code>:email</code>, etc.</p></li><li><p>Length -- The length <code>data attribute</code> use a format of <code>{min[,max]}</code>, which is usually used for the string and array data. For example, if the length of the string is 3, it can be represented by <code>{3}</code>, and the length is 10 up to 20, it can be represented by <code>{10,20}</code></p></li><li><p>Size -- The size <code>data attribute</code> use a format of <code>[min,max]</code>, which usually represents a range of values. For a number, it means the minimum and maximum value of the number. If the size of the number is 10 to 20, it is represented by <code>[10,20]</code>. If it represents a fixed number, such as the number 3, it is represented by <code>[3,3]</code>, of course, if there is no other <code>data attribute</code> configuration, it should be written directly with the number <code>3</code>. For character strings, it usually represents the unicode code point range of the character. For example, the code point range of uppercase letters is 65 to 90, it can be written as <code>[65,90]</code>, if there are multiple groups, the group writing syntax can be used, such as representing both uppercase and lowercase letters, it can be written as <code>[65-90,97-122]</code>. For a date, it means a date range, for example, from 2012 to 2022, it is expressed as <code>[2012,2022]</code>, <code>suchjs</code> has built-in support for a more powerful date formating similar to php&#39;s method <code>strtotime</code>, for example, 5 years before and after, can be expressed as <code>[&#39;-5 years&#39;,&#39;+5 years&#39;]</code>.</p></li><li><p>Formatting -- The formatting <code>data attribute</code> starts with: <code>%</code>, followed by a <code>format</code> string. Formatting is usually more useful for numeric types and date types. For numeric types, <code>suchjs</code> has a built-in writing format that supports a c-style method <code>printf</code>. For example, <code>%.2f</code> means to convert a number to a floating point number with 2 decimal places (the <code>:number</code> type by default generate a number that the decimal part as well as the <code>Math.random</code>).</p></li><li><p>Path -- The path <code>data attribute</code> starts with: <code>&amp;</code>, followed by an <code>address</code> string. The path attribute is more useful for reference types, dictionary types, and so on. For reference types, the path address represents the data path of the mocked data. Note that the reference field corresponding to the path must appear before the reference type, otherwise the obtained data will be <code>undefined</code>. <code>{firstName:&#39;hello&#39;, lastName:&#39;man&#39;, fullName:&#39;:ref:&amp;./firstName,./lastName&#39;}</code>, so <code>fullName</code> will get an array: <code>[&#39;hello&#39;,&#39;man&#39;]</code> . For the dictionary type, it means the path address of the dictionary file <code>:dict:&amp;&lt;dataDir&gt;/dict.txt</code>, which means obtaining data from the file <code>dict.txt</code> in the data directory.</p></li><li><p>Regular expression -- The regular expression <code>data attribute</code> starts with: <code>/</code>, followed by the regular expression string. This <code>data attribute</code> is mainly for regular expression type. Regular expression type is a very powerful type, you can generate all kinds of string types as you want base on it.</p></li><li><p>Function call -- The above <code>data attribute</code>s may not all required them for differenct data types, each data type may only support a few specific <code>data attribute</code>s, but the function call and the following configuration <code>data attribute</code>s are all types support by default. The function call <code>data attribute</code> starts with <code>@</code>, followed by a function call string list. The function to be used can be injected globally through the <code>Such.assign</code> static method, and the method that exists in the data type itself can be called directly. For example, for the string type: <code>:string:[65,90]:{3}:@repeat(3)|slice(-5)</code>, it means that after obtaining 3 uppercase letter strings, repeat 3 times, and then take the last 5 characters.</p></li><li><p>Parameter configuration -- Parameter configuration is the same as function call, and it is also the data attribute that the type supports parsed and obtained by default. It is usually used to provide external data injection for some defined types. The parameter configuration use a format of <code>#[key=value,flag]</code>. For example, for the auto-increment id type, if we want to configure its <code>start</code> value and <code>step</code>, we can configure <code>:increment:#[start=1,step=2]</code> like this.</p></li></ul><h3 id="mocking-data-example" tabindex="-1"><a class="header-anchor" href="#mocking-data-example" aria-hidden="true">#</a> Mocking Data Example</h3><p>With an understanding of the basics of the above <code>data attribute</code>s, we can now mock some data through the combination of these <code>data attribute</code>s.</p><ul><li><p><code>:string:[65,90]:{3,10}</code> =&gt; output a string, and it&#39;s unicode point is between 65 to 90(that is,uppercase letters), and the length is between 3 to 10, it will get a result data such as <code>DUFCD</code>, <code>KASGDS</code></p></li><li><p><code>:date:[&#39;-1 year&#39;,&#39;+1 year&#39;]:%yyyy-mm-dd HH\\:MM\\:ss</code> =&gt; output the date one year before and after the current date and format it as <code>year-month-day hour:minute:second</code>.</p></li><li><p><code>:number:[1,100]:%.2f</code> =&gt; output a number from 1 to 100, and format it to retain two decimal points.</p></li><li><p><code>:regexp:/[a-z]{3,5}/i</code> =&gt; output a string of 3 to 5 english letters.</p></li></ul><p>For more data types or type customization methods, please continue to check the relevant chapters.</p>',11),i={render:function(e,t){return o}}}}]);