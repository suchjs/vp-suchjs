---
lang: zh-CN
title: :regexp
description: suchjs built-in type regexp
---

#### `regexp` type description

`:regexp` type is a very powerful built-in type in suchjs. Many types can be extended based on this type, but it should not be overused. After all, parsing regular expressions and generating strings is a relatively expensive task.

- `//[imdsguy]` the string to be generated needs a matching regular expression.

```javascript
// Output 3 to 5 English letters, not case sensitive
Such.as(":regexp:/[a-z]{3,5}/i");
// The output value is similar to: `aZFk`
```

- `#[]` the most powerful function of regular expressions is that they can be configured to modify the generated value by configuring the value of the group.

```javascript
// Also take the above example as a reference, add grouping and configuration
Such.as(":regexp:/(?<ch>[a-z]){3,5}/i:#[ch='k']");
// In this way, the named group of 'ch' is replaced by the configured value, with the letter `k`
// Note that the value of the grouping configuration here must meet the regular rules of the grouping, otherwise an error will be reported
// The final generated value becomes a value like `kKkk`
```
