---
lang: zh-CN
title: :string
description: suchjs内置类型string
---

#### string 类型说明 <Badge text=">= 1.0.0" /> 

`:string` 类型是 `suchjs` 内置的最基本类型之一，它支持以下数据属性：

- `{min[,max]}` 长度属性，用来设置字符串的长度。

```javascript
// 设置长度为3到5个字符
Such.as(":string:{3,5}");
// 设置长度为10个字符
Such.as(":string:{10}");
```

- `[]` 大小范围属性，用来设置 unicode 码点范围

```javascript
// 设置码点范围为65到90，也即大写字母
Such.as(":string:[65,90]"); // 输出类似：'XMSGDULDD'
// 设置多个码点范围，65到90为大写字母，95对应英文下划线_，97到122为小写字母
Such.as(":string:[65-90,95,97-122]"); // 输出类似：'lDc_aKlP'
// 也可以使用4位或者6位的unicode编码来直接表示码点范围
Such.as(":string:[\\u0041,\\u005a]"); // 输出类似：'LIDPDKGCJE'
```

- `@` 运用函数

```javascript
Such.as(":string:[65,90]:{3,5}:@concat('_')|repeat(3)|slice(0,-1)"); 
// 输出类似 `TSQ_TSQ_TSQ`
```
