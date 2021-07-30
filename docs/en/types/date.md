---
lang: zh-CN
title: :date
description: suchjs built-in type 'date'
---

#### `:date` type description <Badge text=">= 1.0.0" />

`:date` type is one of the most common data types. It supports the following data attributes:

- `[begin,end]` date range, used to set the begin and end time range of the date.

```javascript
// It will return a `Date` object, if you don't use the 'formatting' 
// Set the date and time range from 2010 to 2020
// Pay attention to the range in symbol `,` without spaces in between
Such.as(":date:[2010,2020]");
// Suchjs internally supports a basic version similar to php's method `strtotime
// So you can write various date and time formats more conveniently
// As shown below, the current date starts from tomorrow to the next six months
Such.as(":date:['tomorrow','+6 months']");
```

- `%` formatting, by default, the `:date` type will return a `Date` object, but this may usually not what you want to get, so you need to set a formatting to get a formated date string.

```javascript
// set the date to the range from yesterday to tomorrow,
// formatted as year-month-day hour-minute-second format
Such.as(":date:['yesterday','tomorrow']:%yyyy-mm-dd HH\\:MM\\:ss");
// The current output is similar to: `2021-07-20 23:07:07`
```
