---
lang: en-US
title: :dict
description: suchjs built-in type dict
---

#### `:dict` type descscription <Badge text=">= 1.0.0" />

`:dict` it used to get an item from an array data, in the Nodejs environment and browser, there are some difference with where to get an array data。

##### In Nodejs

- `&` in Nodejs environment, you need set a path `data attribute`, the path pointed to a dict file。

```javascript
/**
 * Such as in your data directory <dataDir>
 * There's a dictionary file named 'dict.txt' 
 * It have many items like this:
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

##### In browser

- `#[data=]` in browser, you need set a configuration `data attribute`, set a `data` field key, and set the value as a variable name what injected by the API `Such.assign`.

```javascript
// Assign a `dict` variable data 
Such.assign("dict", ["hello", "world"]);
// Use the `dict` variable as the `:dict`'s data field value
const instance = Such.instance(":dict:#[data=dict]");
instance.a(); // `hello`
instance.a(); // `hello`
instance.a(); // `world`
```

