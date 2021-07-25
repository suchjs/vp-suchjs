---
lang: zh-CN
title: :increment
description: suchjs built-in type increment
---

#### `:increment` type description

`:increment` the type can be used to mock the auto-increment data. If the length `data attribute` is also setted, it can be used to mock a `range` array.

- `#[start=1, step=2]` configure the `start` value and the `step`.

```javascript
// The configuration of `:increment` has two parameters
// start: represents the initial value, the default is 1
// step: represents the incremental step, the default is 1
// Indicates that the value starts from 0 and the step is 2
const instance = Such.instance(":increment:#[start=0,step=2]");
instance.a(); // `0`
instance.a(); // `2`
instance.a(); // `4`
```

- `{min[,max]}` set the count of numbers you want to make, return an array of multiple auto-increment data.

```javascript
// return an array of multiple auto-incrementing numbers
const instance = Such.instance(":increment:{3}");
instance.a(); // [1, 2, 3]
instance.a(); // [4, 5, 6]
instance.a(); // [7, 8, 9]
```
