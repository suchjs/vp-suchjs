---
lang: zh-CN
title: enum
description: suchjs enum type
---

#### Enum type description <Badge text=">= 1.1.0" />

There is no real `:enum` enumeration type in Suchjs, but we can easily build one. In `Suchjs`, if the data target's field's value is an array, it will randomly select the item in the array as the generated data's array item (when the field's length is greater than 1) or value (when the field's length is 1).

- Usage

```javascript
// Limit the number of occurrences of the field to 1, and set the value to an array of enumerated values
const instance = Such.instance({
  "enum{1}": [true, false],
});
instance.a();
// The above will output {enum: true} or {enum: false}
// The advantage of the enumeration value is that you can generate a specific enumeration value you want by set the enumeration value's index of the field in the keys of the parameter options
instance.a({
  keys: {
    "/enum": {
      index: 0,
    },
  },
});
// The above will output: {enum: true}
```
