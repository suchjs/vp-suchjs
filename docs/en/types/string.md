---
lang: zh-CN
title: :string
description: suchjs built-in type string
---

#### `:string` type description

`:string` type is one of the most basic built-in types, and it supports the following data attributes:

- `{min[,max]}` the length `data attribute` is used to set the length of the string.

```javascript
// Set the length to 3 to 5 characters
Such.as(":string:{3,5}");
// Set the length to 10 characters
Such.as(":string:{10}");
```

- `[]` the size range `data attribute`, used to set the range of the unicode code point.

```javascript
// Set the code point range from 65 to 90, that is, capital letters
Such.as(":string:[65,90]"); // The output is similar to：'XMSGDULDD'
// Set multiple code point ranges, 65 to 90 are uppercase letters,
// 95 corresponds to English underscore _, 97 to 122 are lowercase letters
Such.as(":string:[65-90,95,97-122]"); // The output is similar to: 'lDc_aKlP'
// You can also use 4-bit or 6-bit unicode encoding to directly represent the code point range
Such.as(":string:[\\u0041,\\u005a]"); // The output is similar to: 'LIDPDKGCJE'
```

- `@` set function calls

```javascript
Such.as(":string:[65,90]:{3,5}:@concat('_')|repeat(3)|slice(0,-1)");
// The output is similar to: `TSQ_TSQ_TSQ`
```
