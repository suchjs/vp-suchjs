---
lang: zh-CN
title: Field configure
description: how to set the field
---

## How to configure the fields

Usually our actual data simulation is based on the `json` object format, then we must configure the `key` of the data field. Suchjs supports the following configuration for the key:

- `?` indicates that a field is not required, that is, the field may not be included in the generated data.

- `{min[,max]}` represents the number of occurrences of the field, it is usually used in array configuration, but pay attention to some details of array field configuration:

  1. When `min` is `0`, the entire field value will become `undefined`. If the array hits `0`, you still want to generate an empty array, you can use `+0` instead of `0`. Similarly, when the value of `min` is `1`, Suchjs will also generate the primitive type of `value` instead of generating an array. If you still want to generate an array of `value` values, you need to use `+1` instead . The meaning of `+` plus sign here means that the generated data is always an array.

  2. When the `value` value of the field itself is also an array, the generated data will generate values ​​one by one in the order of appearance of the array. If you want to define the meaning of the array value is to take one of the items to generate, you can precede the `{` Add the identifier English colon `:`, such as `key:{3,5}`, which means to take one item of the array value and simulate an array of 3 to 5 items.

  3. If this field is also optional, you can add a `?` symbol after the closing curly brace `}` at the end.

  4. Note that the minimum number `0` and the optional symbol `?` have different meanings. The field of `0` will always exist, while the field of `?` is not necessarily.

  5. For the value of `value` that is not an array type, the data of the array type is finally generated according to the value of `value`. This may be different from the behavior of the `mockjs` library, for example, `mockjs` for string types, the result will be a string with the value repeated multiple times.

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

Since the analog data of Suchjs is described in string format, how to distinguish between normal strings and data types and attributes becomes more important. The analog data types agreed in Suchjs all start with `:`. If you have a string starting with a real colon `:`, you don’t want to be parsed as the start character of the data type. At this time, you need to convert `:` The escape character will be removed from the generated string. Examples are as follows:

```javascript
Such.as("\\:number"); // => ':number'
Such.as(":number"); // => -31.50614310483728
```
