---
lang: zh-CN
title: :number
description: suchjs内置类型number
---

#### number 类型说明

`:number` 类型是 `suchjs` 内置的另一最基本类型之一，它支持以下数据属性：

- `[min,max]` 大小范围，用来设置数字的最小值与最大值。

```javascript
// 设置大小范围为1到100的数字
Such.as(":number:[1,100]");
// 数字理论上默认是包含最大值与最小值的
// 因为随机值浮点数的关系，出现最大值与最小值的概率非常小
// 如果的确不想包含最大值或者最小值，可以加上配置属性exclude
// 配置为'min'为不包含最小值，配置为'max'为不包含最大值
// 配置为'min,max'或者'both'为最小值与最大值都不包含
Such.as(":number:[1,100]:#[exclude='max']");
```

- `%` 格式化，数字类型没有格式化时，小数部分形如`Math.random()`，但通常这不是我们想要的数据，一般情况下我们都会对其进行格式化，suchjs使用单独提取的库 `nprintf` 来对数字进行类似c语言的格式化。

```javascript
Such.as(":number:[1,100]:%.2f"); 
// 输出类似 `32.58`
```