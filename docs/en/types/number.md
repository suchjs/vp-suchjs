---
lang: zh-CN
title: :number
description: suchjs built-in type number
---

#### `:number` type description

`:number` type is another one of the most basic built-in types. It supports the following data attributes:

- `[min,max]` the size range is used to set the minimum and maximum values ​​of the number.

```javascript
// Set a number ranging from 1 to 100
Such.as(":number:[1,100]");
// Numbers theoretically contain the maximum and minimum values ​​by default
// Because of the random value floating point number, the probability of the maximum and minimum values ​​is very small
// If you really do not want to include the maximum or minimum value, you can add the configuration attribute `exclude`
// Configured as 'min' to not include the minimum value, and configured as 'max' to not include the maximum value
// Configured as 'min,max' or 'both' as ​​the minimum and maximum values ​​are both not included
Such.as(":number:[1,100]:#[exclude='max']");
```

- `%` formatting, when the number type is not formatted, the decimal part is like `Math.random()`, but usually this is not the data we want. Under normal circumstances, we will format it, suchjs uses a separate extraction library` nprintf` to format numbers similar to c language.

```javascript
Such.as(":number:[1,100]:%.2f");
// The output is similar to: `32.58`
```
