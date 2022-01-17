---
lang: zh-CN
title: 扩展类型
description: suchjs内置扩展类型
---

## 布尔类型
### `:boolean` <Badge text=">= 1.0.0" />

返回一个布尔值，true 或者 false。

```javascript
Such.as(":boolean"); // true|false
```

### `:bool` <Badge text=">= 1.0.0" />

`:bool` 类型是 `:boolean` 的简写别名。别名通过 Suchjs 提供的 api `Such.alias` 来定义，比如`Such.alias("bool", "boolean")`。

```javascript
Such.as(":bool"); // true|false
```

## 数字类型
### `:integer` <Badge text=">= 1.0.0" />

返回一个整数值。

```javascript
Such.as(":integer:[100,200]"); // 125
```

`:integer` 类型继承自 `:number` 类型，它由 Suchjs 提供的 api `Such.define` 来定义，定义的方式形如，`Such.define("integer", "number", "%d")`，相当于在 number 类型的基础上固定了格式化属性参数。

### `:int` <Badge text=">= 1.0.0" />

`:int` 类型是 `:integer` 的简写别名。

```javascript
Such.as(":int:[100,200]"); // 125
```

### `:percent` <Badge text=">= 1.0.0" />

返回一个不带小数点的百分值，它的定义方式为 `Such.define('percent', 'number', '[1,100]:%d%')`，表示数字的范围在 1 到 100，同时格式化为整数后加 `%` 符号的形式。

```javascript
Such.as(":percent"); // '72%'
```

## 字符串类型

### `:alphaNumericDash`

返回一个由阿拉伯数字、英文字母和下划线组成的字符串，它的定义方式为 `Such.define('alphaNumericDash', 'string', '[48-57,97-122,65-90,95]')`，相当于在 string 字符串类型的基础上限制了 unicode 的码点范围数字、小写字母、大写字母、下划线\_，它等价于正则表达式的 `\w` 字符集。

```javascript
Such.as(":alphaNumericDash"); // 'A9dkI_1'
```
### `:alphaNumeric` <Badge text=">= 2.1.1" />

返回一个由字母、阿拉伯数字组成的字符串。

```javascript
Such.as(":alphaNumeric"); // '2aD3z'
```
### `:alpha` <Badge text=">= 2.1.1" />

返回一个由英文字母组成的字符串。

```javascript
Such.as(":alpha"); // 'ApkDi'
```

### `:numeric` <Badge text=">= 2.1.1" />

返回一个由阿拉伯数字组成的字符串。

```javascript
Such.as(":numeric"); // '39011'
```
### `:uppercase` <Badge text=">= 1.0.0" />

返回一个大写字母字符串，它的定义方式为 `Such.define('uppercase', 'string', '[65,90]')`，相当于在 string 字符串类型的基础上限制了 unicode 的码点范围为 65 到 90，也即大写字母。

```javascript
Such.as(":uppercase"); // 'IGSDLD'
```

### `:lowercase` <Badge text=">= 1.0.0" />

返回一个小写字母字符串，它的定义方式为 `Such.define('lowercase', 'string', '[97,122]')`，相当于在 string 字符串类型的基础上限制了 unicode 的码点范围为 97 到 122，也即小写字母。

```javascript
Such.as(":lowercase"); // 'augdkoa'
```

## 网络类型
### `:url` <Badge text=">= 1.0.0" />

返回一个 url 地址，它继承自 `:regexp`，在它的基础上固定了匹配的正则表达式。

```javascript
Such.as(":url");
// 输出类似：'https://x93m.cn/AD.htm?mn_u=kji&7__b_=%EA%BA#_===_v__'
// 如果想要控制精确的 url 值，可以增加针对分组的精确配置参数
// 更多的命名分组，可以查看extends/recommend.ts里 url 类型的定义
Such.as(':url:#[protocol="https",tld="com"]');
```

### `:email` <Badge text=">= 1.0.0" />

返回一个邮件地址，它同样继承自 `:regexp`。

```javascript
Such.as(":email"); // 生成类似：'3yh_meqy@o6tw1.com'
Such.as(':email:#[domain="gmail.com"]'); // 生成类似： `7z4@gmail.com`
```

### `:protocol` <Badge text=">= 2.1.1" />

返回一个协议头，如 `https` `ftp`等。

```javascript
Such.as(":protocol"); // 生成类似: "telnet"
```

### `:tld` <Badge text=">= 2.1.1" />

返回一个顶级域名地址，如 `.com` `.net`等。

```javascript
Such.as(":tld"); // 生成类似: ".org"
```

### `:domain` <Badge text=">= 2.1.1" />

返回一个域名地址，支持配置 `tld` 或者 `domainLabel` 来生成特定的顶级域或者域名标签。

```javascript
Such.as(":doamin"); // 生成类似: "a2j.org"
Such.as(":doamin#[tld='.com']"); // 生成类似: "3cf.com" "ku2l.com"
Such.as(":domain#[domainLabel='google']"); // 生成类似: "google.com" "google.net"
```

### `:ipv4` <Badge text=">= 2.1.1" />

返回一个v4版本的ip地址，如 `255.255.230.2` `120.53.2.8`等，它支持三个配置，`min` 指定ip的最小值，`max` 指定ip的最大值，`type` 指定是 `ABCDE` 哪类地址，它可以和 `min` 或 `max` 结合使用。

```javascript
Such.as(":ipv4"); // 生成类似: "124.25.30.111"
Such.as(":ipv4#[min='10.120.2.5',max='10.120.2.7']"); // 生成类似 "10.120.2.5" "10.120.2.6" "10.120.2.7"
Such.as(":ipv4#[type='A']"); // 生成类似: "127.2.2.1" 等
Such.as(":ipv4#[type='A',max='127.0.0.0']"); // 生成类似: "11.252.10.11"等
```

### `:ipv6` <Badge text=">= 2.1.1" />

返回一个v6版本的ip地址，它支持一个参数，`compress` 为0到1之间的值，指定可能压缩的程度，0表示完全不压缩，1表示完全压缩。

```javascript
Such.as(":ipv6"); // 生成类似: "abcd:ef01:2345:6789:abcd:ef01:2345:6789"
Such.as(":ipv6#[compress=0.5]"); // 生成类似： "abcd::ef01:0:0:3cf" 
```

### `:ip` <Badge text=">= 2.1.1" />

返回一个ip地址，它可以指定一个 `v6` 参数，表示为ipv6地址，否则为ipv4，对应的其它参数可见上面的ipv4及ipv6配置。

```javascript
Such.as(":ip"); // 生成类似: "192.10.25.37"
Such.as(":ip#[v6]"); // 生成类似： "abcd:ef01:2345:6789:abcd:ef01:2345:6789" 
```


## 颜色类型
### `:color$hex` <Badge text=">= 1.0.0" />

返回一个16进制的颜色值，支持两个参数配置，`lowercase`，为`true`时生成的颜色值为小写，否则为大写。`argb`，为`true`时，返回8位的`argb`格式颜色值，否则为`rgb`格式的6位颜色值。

```javascript
Such.as(":color$hex"); // 生成类似：'#B22AB0'
Such.as(':color$hex:#[lowcase=true,argb=true]'); // 生成类似： `#92131a73`
```

### `:color$rgb` <Badge text=">= 1.0.0" />

返回一个rgb颜色值。

```javascript
Such.as(":color$rgb"); // 生成类似：'rgb(255,0,122)'
```

### `:color$rgba` <Badge text=">= 1.0.0" />

返回一个rgba颜色值。

```javascript
Such.as(":color$rgba"); // 生成类似：'rgba(255,0,122,0.25)'
```

### `:color$hsl` <Badge text=">= 1.0.0" />

返回一个hsl颜色值。

```javascript
Such.as(":color$hsl"); // 生成类似：'hsl(240,30%,60%)'
```

### `:color$hsla` <Badge text=">= 1.0.0" />

返回一个hsla颜色值。

```javascript
Such.as(":color$hsla"); // 生成类似：'hsl(240,30%,60%,0.55)'
```


因为 Suchjs 本身具备较好的扩展性，所以内置类型的嵌入主要以常用的一些类型为主，后续可能会继续加入更多类型，更多特定的类型请通过 API 以配置文件的方式，借助`Such.config`来实现。

