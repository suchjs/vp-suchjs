---
lang: zh-CN
title: :dict
description: suchjs内置类型dict
---

#### dict 类型说明

`:dict` 用来模拟一些从数组中随机挑选一些值的类型，针对 Nodejs 环境和浏览器参数配置有所差别。

##### 针对 Nodejs 环境

- `&path` 在 Nodejs 环境下，接受一个路径的数据属性，该路径指向一个每行一条数据的字典文件。

```javascript
/**
 * 假设在数据目录<dataDir>下，有一个 dict.txt 的字典文件
 * 字典文件的内容如下：
 * ---------------
 * hello
 * world
 * ---------------
 */
const instance = Such.instance(":dict:&<dataDir>/dict.txt");
instance.a(); // `hello`
instance.a(); // `hello`
instance.a(); // `world`
```

##### 针对浏览器环境

- `#[data=]` 在浏览器环境下，接受一个 data 的数组参数配置，对应的数据字段需要通过调用 `Such.assign` 来注入。

```javascript
// 注入变量
Such.assign("dict", ["hello", "world"]);
// 将 `data` 字段的值指向注入的变量
const instance = Such.instance(":dict:#[data=dict]");
instance.a(); // `hello`
instance.a(); // `hello`
instance.a(); // `world`
```

