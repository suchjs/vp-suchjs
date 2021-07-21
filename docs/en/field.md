---
lang: zh-CN
title: Field configure
description: how to set the field
---

## How to configure the fields

Usually our actual data mocking is based on the `json` object, then we need configure the `key` of the data field. Suchjs supports the following configuration for the field key:

- `?` indicates that a field is not required, that is, the field may not be included in the generated data.

- `{min[,max]}` represents the number of occurrences of the field, it is usually used in array configuration, but pay attention to some details of the configuration:

  1. When `min` is `0`, the field value may get a `undefined`. If the `min` did hits `0`, and you still want to get a field value of an empty array, you can use `+0` instead of `0`. Similarly, when the value of `min` is `1`, `Suchjs` will also generate the primitive type of `value` instead of generating an array. If you still want to generate an array of `value` values, you need to use `+1` instead. The meaning of `+` plus sign here means that the generated data is always an array.

  2. When the filed value itself is an array, the generated data will generate values ​​one by one in the order of appearance of the array. If you want to generate an array which it's items are all the same type by one of the field value's items, you can add the identifier colon `:` before the `{`, such as `key:{3,5}`, which means to take one item of the field value array and generate an array of 3 to 5 items by the item.

  3. If this array field is also optional, you can add a `?` symbol after the closing curly brace `}` at the end.

  4. Note that the minimum number `0` and the optional symbol `?` have different meanings. When the minimum number is `0`, the field will always exist, even the value is `undefined`, while the field is setted by symobol `?`, the field may exist, and may not.

  5. If the field value is not an array type, an array of the field value will be generated. This may be different from the behavior of the `mockjs` library, for example, in `mockjs`, the result will be a string with the value repeated multiple times, instead of an array of the value with a length same as the times.

  ```javascript
  Such.as({
    // The name field is optional
    "title?": ":string:{3,10}",
    // The books field must be an array, the size of the array is 0 to 5
    "books{+0,5}": {
      date: ":date",
      author: ":string:{10,20}",
    },
    // The tags field is optional. If it exists, it is an array of 3 strings
    "tags{3}?": ":string:{5,10}",
    // The firm field is not required, if it exists, pick one from the array value
    // There is no `+` in front of the number 1, so the generated firm field data is a string
    "firm:{1}?": ["Netflix", "Disney"],
  });
  // The generated data is similar to the following json
  {
    title: "H(@L@8",
    books: [
      {
        date: "2013-07-19",
        author: "1Lsy.k:;,RL`w~3RH%G2",
      },
    ],
    tags: [")K2:\\", "x:fYEZ8U", "+PcO7S^aK"],
    firm: "Disney",
  };
  ```

## Special value generation

Since the data mocking of Suchjs is described in string format, how to distinguish between normal strings and data types & attributes becomes important. The data types in Suchjs all start with `:`, If you have a normal string also starting with a colon `:`, now you need to convert `:` with escaped `\\`. The escape character will be removed from the generated string at last. Examples are as follows:

```javascript
Such.as("\\:number"); // => ':number'
Such.as(":number"); // => -31.50614310483728
```