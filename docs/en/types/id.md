---
lang: zh-CN
title: :id
description: suchjs built-in type id
---

#### `:id` type description

`:id` the type can be used to simulate the auto-increment id of the database. After the length parameter property is configured, it can also be used to simulate a `range` range array.

- `#[start=1, step=2]` configure the start value and step.

```javascript
// The configuration of `:id` has two parameters
// start: represents the initial value, the default is 1
// step: represents the incremental step, the default is 1
// Indicates that the value starts from 0 and the step is 2
const instance = Such.instance(":id:#[start=0,step=2]");
instance.a(); // `0`
instance.a(); // `2`
instance.a(); // `4`
```

- `{min[,max]}` set the number of id, the data returned at this time is an array of multiple auto-increment id.

```javascript
// return an array of multiple auto-incrementing ids
const instance = Such.instance(":id:{3}");
instance.a(); // [1, 2, 3]
instance.a(); // [4, 5, 6]
instance.a(); // [7, 8, 9]
```
