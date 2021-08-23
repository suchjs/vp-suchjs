---
lang: zh-CN
title: enum
description: suchjs枚举类型
---

#### 枚举类型说明 <Badge text=">= 1.1.0" />

Suchjs 内并没有真实的 `:enum` 枚举类型，但我们很容易实现枚举类型，因为 `Suchjs` 遇到模拟的字段值为数组类型时，会随机挑选数组中的值做为生成数据的项（当字段个数为数组且大于 1 的时候）或值（当字段个数值为 1 的时候）。

- 使用方式

```javascript
// 限制字段的出现次数为1，值为枚举值的数组
const instance = Such.instance({
  "enum{1}": [true, false],
});
instance.a();
// 将输出 {enum: true} 或者 {enum: false}
// 枚举值的好处在于，可以通过参数 options 的 keys 配置索引 index 值来决定想要生成的具体枚举值
instance.a({
  keys: {
    "/enum": {
      index: 0,
    },
  },
});
// 以上将输出 {enum: true}
```
