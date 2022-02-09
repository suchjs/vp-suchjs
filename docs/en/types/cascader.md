---
lang: en-US
title: :cascader
description: suchjs built-in type cascader
---

#### `:cascader` type description <Badge text=">= 1.0.0" />

`:cascader` can use it to mock a multilevel linkage data, there are also some difference between Nodejs environment and browser.

- how to write the linkage root node

  ##### In Nodejs

  `:cascader:&<dataDir>/cascader.json:#[root=true]`

  - `&` a path `data attribute` , followed by linkage data that needs to be pointed

  - `#[]` a configuration `data attribute`, contains two fields:

    - `root` required, need be set `true`

    - `handle` optional,the function handle to process the cascaded. The function contains two parameters: the first parameter is the linkage data obtained from the path, and the second parameter is the data array from the first level to the current level that has been obtained. If the handle is not provided, Suchjs provides a default function handle for processing object. You can see in the source code in `src/helpers/utils.ts`

  ##### In browser

  `:cascader:#[root=true,data=xxx]` Note: After v2.1.7, the `root` configuration parameter is no longer necessary, more concise.

  Unlike the Nodejs environment, the browser needs to actively inject a `data` field by set a configuration `data attribute`.

  - `#[]` the configuration `data attribute`s are the same as the Nodejs environment, but an additional `data` field need be set。

- how to write a linkage child node

  There is no difference between the writing method of the linkage child node in the Nodejs environment and the browser side. Both of them only need to provide a path reference like the `:ref` type.

  - `&` path `data attribute`, followed by a field of the upper level data.

```javascript
// Nodejs environment
// Provide a json file with a structure similar to the `countries` variable 
// in the browser example under Nodejs
const instance = Such.instance({
  country: ":cascader:&<dataDir>/country.json:#[root=true]",
  city: ":cascader:&./country",
});
// browser
const countries = {
  'China': ['BeiJing', 'ShangHai'],
  'America': ['New York', 'Los Angeles']
};
Such.assign('counties', counties);
const instance = Such.instance({
  country: ":cascader:#[root=true,data=counties]",
  city: ":cascader:&./country",
});
// mock a data
instance.a();
instance.a();
// the output is similar to：
/*
// one
{
  country: "China", 
  city: "BeiJing",
}
// two
{
  country: "America", 
  city: "Los Angeles",
}
*/
```
