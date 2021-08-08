---
lang: en-US
title: :regexp
description: suchjs built-in type regexp
---

#### `regexp` type description <Badge text=">= 1.0.0" />

`:regexp` type is a very powerful built-in type in the library. Many types can be extended based on this type, but it should not be overused. After all, parsing regular expressions and generating strings what matched the regexp is a relatively expensive task.

- `//[imdsguy]` a regular expression `data attribute`, the mocked string should match the rule.

```javascript
// Output 3 to 5 English letters, not case sensitive
Such.as(":regexp:/[a-z]{3,5}/i");
// The output value is similar to: `aZFk`
```

- `#[]` the most powerful function of regular expression data type is that you can configure a named group value by the configuration `data attribute`, override the value what should the regulare expression generate in the name group.

```javascript
// Also take the above example as a reference, add grouping and configuration
Such.as(":regexp:/(?<ch>[a-z]){3,5}/i:#[ch='k']");
// In this way, the named group of 'ch' is replaced by the configured value, with the letter `k`
// Note that the value of the grouping configuration here must match the regular rule's named group, otherwise an error will be thrown.
// The final generated value becomes a value like this: `kKkk`
```
