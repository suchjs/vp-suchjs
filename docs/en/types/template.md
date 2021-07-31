---
lang: zh-CN
title: template
description: suchjs built-in template literal
---

#### `template literal` type description <Badge text=">= 1.1.0" /> 

Template literal is a special type. It is mainly implemented based on the API `Such.template`. In terms of writing, it is based on the three colons `:::` as the start identifier of the template string. For more writing details, please refer to API [`Such .template`](../api.md#such-template) specific instructions.

- Usage

```javascript
// Start with three colons :::, if you need to add more data attributes later
// Also need to use three colons ::: as the terminator, otherwise it can be omitted
Such.as(":::it's a string-`:string`;it's a number-`:number`;");
// You can use backslashes to escape the symbols (`) and (:)
Such.as(":::\\`\\:::"); // Output: "`:::"
```

- `{min[,max]}` Template literal type support length `data attribute`, used to set the number of repetitions of the generated template string before.

```javascript
// repeat between 3 to 5 times
Such.as(":::it's a string-`:string`;it's a number-`:number`;:::{3,5}");
```
