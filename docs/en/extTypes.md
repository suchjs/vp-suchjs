---
lang: en-US
title: Extend types
description: suchjs built-in extend type
---

## Boolean types
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

## Number types
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

## String types

### `:alphaNumericDash` <Badge text=">= 1.0.0" />

Return a string consisting of numbers, english letters and underscores, and its definition method is `Such.define('alphaNumericDash','string','[48-57,97-122,65-90,95]') `, which is equivalent to limiting the code point range of unicode based on the string type. Numbers, lowercase letters, uppercase letters, and underscores \_, which is equivalent to the `\w` character set of regular expressions.

### `:alphaNumeric` <Badge text=">= 2.1.1" />

Returns a string consisting of English letters and Arabic numerals.

```javascript
Such.as(":alphaNumeric"); // '2aD3z'
```
### `:alpha` <Badge text=">= 2.1.1" />

Returns a string consisting of English letters.

```javascript
Such.as(":alpha"); // 'ApkDi'
```

### `:numeric` <Badge text=">= 2.1.1" />

Returns a string of Arabic numerals.

```javascript
Such.as(":numeric"); // '39011'
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

```javascript
Such.as(":lowercase"); // 'A9dkI_1'
```

## Network types

### `:protocol` <Badge text=">= 2.1.1" />

Returns a protocol header, such as `https` `ftp`, etc.

```javascript
Such.as(":protocol"); // The output is similar to: "telnet"
```

### `:tld` <Badge text=">= 2.1.1" />

Returns a top-level domain address, such as `.com` `.net`, etc.

```javascript
Such.as(":tld"); // The output is similar to: ".org"
```

### `:domain` <Badge text=">= 2.1.1" />

Returns a domain name address, supports configuring `tld` or `domainLabel` to generate a specific top-level domain or domain name label.

```javascript
Such.as(":doamin"); // The output is similar to: "a2j.org"
Such.as(":doamin#[tld='.com']"); // The output is similar to: "3cf.com" "ku2l.com"
Such.as(":domain#[domainLabel='google']"); // The output is similar to: "google.com" "google.net"
```
### `:url` <Badge text=">= 1.0.0" />

Return a url address, it inherits from `:regexp`, and the matching regular expression is fixed on the basis of it.

```javascript
Such.as(":url");
// The output is similar to：'https://x93m.cn/AD.htm?mn_u=kji&7__b_=%EA%BA#_===_v__'
// If you want to control the precise url value, you can add precise configuration parameters for grouping
// For more named groups, you can check the definition of url type in extends/recommend.ts
Such.as(':url:#[protocol="https",tld="com"]');
```

### `:email` <Badge text=">= 1.0.0" />

Returns an email address, which also inherits from `:regexp`.

```javascript
Such.as(":email"); // The output is similar to: '3yh_meqy@o6tw1.com'
Such.as(':email:#[domain="gmail.com"]'); // The output is similar to: `7z4@gmail.com`
```

### `:ipv4` <Badge text=">= 2.1.1" />

Returns a v4 ip address, such as `255.255.230.2` `120.53.2.8`, etc. It supports three configurations, `min` specifies the minimum value of ip, `max` specifies the maximum value of ip, and `type` specifies  `ABCDE` which type of address, it can be used in combination with `min` or `max`.

```javascript
Such.as(":ipv4"); // The output is similar to: "124.25.30.111"
Such.as(":ipv4#[min='10.120.2.5',max='10.120.2.7']"); // The output is similar to "10.120.2.5" "10.120.2.6" "10.120.2.7"
Such.as(":ipv4#[type='A']"); // The output is similar to: "127.2.2.1" etc.
Such.as(":ipv4#[type='A',max='127.0.0.0']"); // The output is similar to: "11.252.10.11" etc.
```

### `:ipv6` <Badge text=">= 2.1.1" />

Returns a v6 version of the ip address, which supports a parameter, `compress` is a value between 0 and 1, specifying the degree of compression possible, 0 means no compression at all, 1 means fully compressed.

```javascript
Such.as(":ipv6"); // The output is similar to: "abcd:ef01:2345:6789:abcd:ef01:2345:6789"
Such.as(":ipv6#[compress=0.5]"); // The output is similar to: "abcd::ef01:0:0:3cf"
```

### `:ip` <Badge text=">= 2.1.1" />

Returns an ip address, which can specify a `v6` parameter, which is represented as an ipv6 address, otherwise it is ipv4, and the corresponding other parameters can be seen in the ipv4 and ipv6 configurations above.

```javascript
Such.as(":ip"); // The output is similar to: "192.10.25.37"
Such.as(":ip#[v6]"); // The output is similar to: "abcd:ef01:2345:6789:abcd:ef01:2345:6789"
```

## Color types
### `:color$hex` <Badge text=">= 1.0.0" />

Returns a hexadecimal color value, supports two parameter configuration, `lowercase`, how to generate the color value, when `true`, the value is lowercase, otherwise it is uppercase. `argb`, when it is `true`, returns 8-bit color value in `argb` format, otherwise, it returns 6-bit color value in `rgb` format.

```javascript
Such.as(":color$hex"); // The output is similar to: '#B22AB0'
Such.as(':color$hex:#[lowcase=true,argb=true]'); // The output is similar to: `#92131a73`
```
### `:color$rgb` <Badge text=">= 1.0.0" />

Returns an rgb color value.

```javascript
Such.as(":color$rgb"); // The output is similar to: 'rgb(255,0,122)'
```

### `:color$rgba` <Badge text=">= 1.0.0" />

Returns an rgba color value.

```javascript
Such.as(":color$rgba"); // The output is similar to: 'rgba(255,0,122,0.25)'
```

### `:color$hsl` <Badge text=">= 1.0.0" />

Returns an hsl color value.

```javascript
Such.as(":color$hsl"); // The output is similar to: 'hsl(240,30%,60%)'
```

### `:color$hsla` <Badge text=">= 1.0.0" />

Returns an hsla color value.

```javascript
Such.as(":color$hsla"); // The output is similar to: 'hsl(240,30%,60%,0.55)'
```



Because Suchjs itself has good extensibility, the embedding of built-in types is mainly based on some commonly used types, and more types may continue to be added in the future. For more specific types, please use the API to configure files, with the help of `Such.config` to achieve.
