---
lang: en-US
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


- Note: The template literal type was added in the `v1.1.0` version. This version does not support the `:ref` reference data type, but it has been repaired and supplemented in `v1.1.1`. Now, you can use a normal data path to reference data like before, and a special path with index number like `/${0}`, `/${1}` and  a named reference like `/${name}` is added to support to reference the data type used in template literal itself by index. The named data type uses a pair of angle brackets `<>` with a wrap name, then the `:ref` data type can reference the named data type by it's wrap name. 

```javascript
Such.as({
  hello: 'hello',
  world: 'world',
  say: ':::`<say>:ref:&./hello`,`<say>:ref:&./world`!`:ref:&/${0}`,`:ref:&/${1}`!`:ref:&/${say}:@join(",")`!'
});
// will output
{
  hello: 'hello',
  world: 'world',
  say: 'hello,world!hello,world!hello,world!'
}
```