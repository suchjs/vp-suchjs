---
lang: zh-CN
title: Extend types
description: suchjs built-in extend type
---

### `:boolean` <Badge text=">= 1.0.0" />

Returns a boolean value, true or false.

```javascript
Such.as(":boolean"); // true|false
```

### `:bool` <Badge text=">= 1.0.0" />

`:bool` type is a shorthand alias for `:boolean`. The alias is defined by the api `Such.alias` provided by Suchjs, such as `Such.alias("bool", "boolean")`。

```javascript
Such.as(":bool"); // true|false
```

### `:integer` <Badge text=">= 1.0.0" />

Returns an integer value.

```javascript
Such.as(":integer:[100,200]"); // 125
```

`:integer` the type inherits from the `:number` type, which is defined by the api `Such.define` provided by Suchjs, and the way of definition is like: `Such.define("integer", "number", "%d")`, which is equivalent to a number type with the formatting `data attribute` fixed by `%d`.

### `:int` <Badge text=">= 1.0.0" />

`:int` type is a shorthand alias for `:integer`.

```javascript
Such.as(":int:[100,200]"); // 125
```

### `:percent` <Badge text=">= 1.0.0" />

Returns a percentage value without a decimal point, which is defined as `Such.define('percent','number','[1,100]:%d%')`, which means that the number ranges from 1 to 100, and at the same time It is formatted as an integer followed by the `%` symbol.

```javascript
Such.as(":percent"); // '72%'
```

### `:uppercase` <Badge text=">= 1.0.0" />

Returns a string of uppercase letters, which is defined as `Such.define('uppercase','string','[65,90]')`, which is equivalent to a string type with the unicode code point from 65 to 90, that is, capital letters.

```javascript
Such.as(":uppercase"); // 'IGSDLD'
```

### `:lowercase` <Badge text=">= 1.0.0" />

Returns a lowercase letter string, which is defined as `Such.define('lowercase','string','[97,122]')`, which is equivalent to to a string type with the unicode code point from 97 to 122, that is, lowercase letters.

```javascript
Such.as(":lowercase"); // 'augdkoa'
```

### `:alphaNumericDash` <Badge text=">= 1.0.0" />

Return a string consisting of numbers, english letters and underscores, and its definition method is `Such.define('alphaNumericDash','string','[48-57,97-122,65-90,95]') `, which is equivalent to limiting the code point range of unicode based on the string type. Numbers, lowercase letters, uppercase letters, and underscores \_, which is equivalent to the `\w` character set of regular expressions.

```javascript
Such.as(":lowercase"); // 'A9dkI_1'
```

### `:url` <Badge text=">= 1.0.0" />

Return a url address, it inherits from `:regexp`, and the matching regular expression is fixed on the basis of it.

```javascript
Such.as(":url");
// The output is similar to：'https://x93m.cn/AD.htm?mn_u=kji&7__b_=%EA%BA#_===_v__'
// If you want to control the precise url value, you can add precise configuration parameters for grouping
// For more named groups, you can check the definition of url type in extends/recommend.ts
Such.as(':url:#[protocol="https",ltd="com"]');
```

### `:email` <Badge text=">= 1.0.0" />

Returns an email address, which also inherits from `:regexp`.

```javascript
Such.as(":email"); // The output is similar to: '3yh_meqy@o6tw1.com'
Such.as(':email:#[domain="gmail.com"]'); // The output is similar to: `7z4@gmail.com`
```

### `:color$hex` <Badge text=">= 1.0.0" />

Returns a hexadecimal color value, supports two parameter configuration, `lowercase`, how to generate the color value, when `true`, the value is lowercase, otherwise it is uppercase. `argb`, when it is `true`, returns 8-bit color value in `argb` format, otherwise, it returns 6-bit color value in `rgb` format.

```javascript
Such.as(":color$hex"); // The output is similar to: '#B22AB0'
Such.as(':color$hex:#[lowcase=true,argb=true]'); // The output is similar to: `#92131a73`
```


Because Suchjs itself has good extensibility, the embedding of built-in types is mainly based on some commonly used types, and more types may continue to be added in the future. For more specific types, please use the API to configure files, with the help of `Such.config` to achieve.
