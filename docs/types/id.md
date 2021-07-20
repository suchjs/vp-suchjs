---
lang: zh-CN
title: :id
description: suchjs内置类型id
---

#### id 类型说明

`:id` 类型可以用来模拟数据库的自增id，在配置了长度个数参数属性后，也可以用来模拟一个 `range` 范围数组。

- `#[start=1, step=2]` 配置开始值和步阶。

```javascript
// id的配置有两个参数
// start: 表示初始值，默认为1
// step: 表示递增的步阶，默认为1
// 表示值从0开始，步阶为2
const instance = Such.instance(":id:#[start=0,step=2]"); 
instance.a(); // `0`
instance.a(); // `2` 
instance.a(); // `4`
```

- `{min[,max]}` 设置id的个数，这时返回的数据是多个自增id的数组。

```javascript
// 返回多个自增id的数组
const instance = Such.instance(":id:{3}");
instance.a(); // [1, 2, 3]
instance.a(); // [4, 5, 6] 
instance.a(); // [7, 8, 9]
```