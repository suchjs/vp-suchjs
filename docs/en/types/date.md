---
lang: zh-CN
title: :date
description: suchjs built-in type 'date'
---

#### `:date` type description

`:date` type is one of the data types we encounter. This type of js supports the following data attributes for the type:

- `[begin,end]` date range, used to set the start and end time range of the date.

```javascript
// Set the date and time range from 2010 to 2020
// pay attention to the range in symbol `,` without spaces in between
Such.as(":date:[2010,2020]");
// Suchjs internally supports a basic version similar to php`strtotime
// So you can write various date and time formats more conveniently
// As shown below, the current date starts from tomorrow to the next six months
Such.as(":date:['tomorrow','+6 months']");
```

- `%` formatting, the date type is formatted as `yyyy-mm-dd` year, month, and day by default, but this may not usually be the desired data format, so you need to format the date.

```javascript
// set the date to the range from yesterday to tomorrow,
// formatted as year-month-day hour-minute-second format
Such.as(":date:['yesterday','tomorrow']:%yyyy-mm-dd HH\\:MM\\:ss");
// The current output is similar to: `2021-07-20 23:07:07`
```
