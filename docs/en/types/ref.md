---
lang: en-US
title: :ref
description: suchjs
---

#### `ref` type description <Badge text=">= 1.0.0" />

`:ref` type refers to other fields, and is generally used to combine the values ​​of multiple fields.

- `&`  followed by a reference path, the main `data attribute` of the `:ref` type is the referenced path. The path is written in a similar way to xml's `xpath`. Multiple paths are separated by commas `,`. If a single path is referenced, the value corresponding to the path will be directly assigned to the `:ref` field, if there are multiple paths, an array of multi-path values ​​will be generated. In addition, it is important to note that `:ref` is immediately-invoked value, which means that if the reference path appears after the `:ref` field, <del>the value of `undefined` will be obtained</del> will trigger an error after version `v1.1.1`; if the reference path corresponds to the same-level field of the array, it will get the value of the current sibling field in same indexed.

- From version `v1.1.1`, the path string supports `\` to escape special characters, so that it is convenient to support fields containing special characters when corresponding to data field paths.

```javascript
Such.as({
  firstName: "Michael",
  lastName: "Jordan",
  fullName: ":ref:&./firstName,./lastName:@join(' ')",
});
// Output is similar to below:
// {firstName: "Michael", lastName: "Jordan", fullName: "Michael Jordan"}
```
