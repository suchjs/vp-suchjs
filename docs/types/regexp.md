---
lang: zh-CN
title: :regexp
description: suchjs内置类型regexp
---

#### regexp 类型说明 <Badge text=">= 1.0.0" /> 

`:regexp` 类型是 `suchjs` 内置的十分强大的类型，很多类型都可以基于该类型来扩展，但也不能过度使用它，毕竟解析正则表达式并生成字符串是个相对比较费性能的事情。

- `//[imdsguy]` 要生成的字符串需要匹配的正则表达式。

```javascript
// 输出3到5个英文字母，不区分大小写
Such.as(":regexp:/[a-z]{3,5}/i");
// 生成值类似 `aZFk`
```

- `#[]` 正则表达式最强大功能在于，可以配置通过配置分组的值来修改生成的值。

```javascript
// 还以上面的例子作为参考，增加分组及配置
Such.as(":regexp:/(?<ch>[a-z]){3,5}/i:#[ch='k']"); 
// 这样ch的命名分组就被配置的值，字母`k`所替代
// 注意这里的分组配置的值必须要满足分组的正则规则，否则会报错
// 最终生成的值就变成类似 `kKkk` 这样的值了 
```