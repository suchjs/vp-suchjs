"use strict";(self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[]).push([[74],{9788:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-771935b0",path:"/en/types/date.html",title:":date",lang:"en-US",frontmatter:{lang:"en-US",title:":date",description:"suchjs built-in type 'date'"},excerpt:"",headers:[],filePathRelative:"en/types/date.md",git:{contributors:[]}}},6809:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(6252);const e={id:"date-type-description",tabindex:"-1"},o=(0,t.Wm)("a",{class:"header-anchor",href:"#date-type-description","aria-hidden":"true"},"#",-1),p=(0,t.Uk)(),c=(0,t.Wm)("code",null,":date",-1),r=(0,t.Uk)(" type description "),i=(0,t.uE)('<p><code>:date</code> type is one of the most common data types. It supports the following data attributes:</p><ul><li><code>[begin,end]</code> date range, used to set the begin and end time range of the date.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// It will return a `Date` object, if you don&#39;t use the &#39;formatting&#39; </span>\n<span class="token comment">// Set the date and time range from 2010 to 2020</span>\n<span class="token comment">// Pay attention to the range in symbol `,` without spaces in between</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[2010,2020]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Suchjs internally supports a basic version similar to php&#39;s method `strtotime</span>\n<span class="token comment">// So you can write various date and time formats more conveniently</span>\n<span class="token comment">// As shown below, the current date starts from tomorrow to the next six months</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[&#39;tomorrow&#39;,&#39;+6 months&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>%</code> formatting, by default, the <code>:date</code> type will return a <code>Date</code> object, but this may usually not what you want to get, so you need to set a formatting to get a formated date string.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// set the date to the range from yesterday to tomorrow,</span>\n<span class="token comment">// formatted as year-month-day hour-minute-second format</span>\nSuch<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;:date:[&#39;yesterday&#39;,&#39;tomorrow&#39;]:%yyyy-mm-dd HH\\\\:MM\\\\:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// The current output is similar to: `2021-07-20 23:07:07`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',5),l={render:function(n,s){const a=(0,t.up)("Badge");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("h4",e,[o,p,c,r,(0,t.Wm)(a,{text:">= 1.0.0"})]),i],64)}}}}]);