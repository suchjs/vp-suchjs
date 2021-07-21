---
lang: zh-CN
title: :ref
description: suchjs内置类型ref
---

#### ref 类型说明

`:ref` 类型表示引用其它字段，一般用于组合多个字段的值。

- `&` 引用路径，`:ref` 类型主要数据属性就是引用的路径，路径以类似`xpath`的方式书写，多个路径之间以逗号分隔，如果引用单个路径，会直接将路径对应的值赋给`:ref`字段，如果是多个路径，则会生成一个多路径值的数组。另外特别需要注意的是，`:ref`具有即时性，这表示如果引用路径出现在`:ref`字段之后，将会得到`undefined`的值；如果引用的路径对应数组的同级字段，会获取到当前同级字段的值。

```javascript
Such.as({
  firstName: "Michael",
  lastName: "Jordan",
  fullName: ":ref:&./firstName,./lastName:@join(' ')",
});
// 生成值为
// {firstName: "Michael", lastName: "Jordan", fullName: "Michael Jordan"}
```
