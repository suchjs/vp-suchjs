---
lang: zh-CN
title: :date
description: suchjs内置类型date
---

#### date 类型说明

`:date` 类型是我们经常遇到的数据类型之一，suchjs 对日期类型支持以下数据属性：

- `[begin,end]` 日期大小范围，用来设置日期的开始与结束时间范围。

```javascript
// 在没有format数据属性时，返回一个Date对象
// 设置日期的时间范围为2010到2020年，注意范围英文`,`中间不要有空格
Such.as(":date:[2010,2020]");
// suchjs内部支持一个基础版的与php`strtotime`类似的方法
// 因此你能更方便的书写各种日期时间格式
// 如以下表示当前日期从明天开始到未来半年内
Such.as(":date:['tomorrow','+6 months']");
```

- `%` 格式化，在没有格式化时，`:date` 类型返回一个 `Date` 对象，但这通常可能不是你想要的数据格式，所以我们需要对日期进行格式化配置。

```javascript
// 将日期设置为昨天到明天的范围，格式化为 年-月-日 时-分-秒 的格式
Such.as(":date:['yesterday','tomorrow']:%yyyy-mm-dd HH\\:MM\\:ss");
// 当前输出类似 `2021-07-20 23:07:07`
```
