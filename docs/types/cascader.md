---
lang: zh-CN
title: :cascader
description: suchjs内置类型cascader
---

#### cascader 类型说明 <Badge text=">= 1.0.0" /> 

`:cascader` 类型用来模拟一个多级联动的数据，针对 Nodejs 环境和浏览器环境，配置上有细微差别。

- 根节点书写方式

  ##### 针对 Nodejs 环境

  `:cascader:&<dataDir>/cascader.json:#[root=true]`

  - `&` 路径数据属性配置，后接需要指向的联动数据

  - `#[]` 配置参数数据属性，包含两个参数

    - `root` 必选，需要标记为 true。

    - `handle` 可选，处理级联的函数句柄，函数包含两个参数，第一个参数为从路径获取到的联动数据，第二个参数为已经获取到的从第一层到当前层的数据数组。如不提供，Suchjs 默认提供了一个处理对象形式数据的处理函数。可以参见源代码里的 src/helpers/utils.ts

  ##### 针对浏览器环境

  `:cascader:#[root=true,data=xxx]` 注：从v2.1.7后，`root` 配置参数不再必须，更加简洁。

  和 Nodejs 环境不一样，浏览器下需要和 dict 词典一样主动注入一个 data 参数数据，以替代 Nodejs 环境下通过文件路径获取数据的形式。

  - `#[]` 配置参数数据属性，和 Nodejs 环境一样，但多增加了一个 data 参数配置。

- 联动子节点书写方式

  联动子节点的书写方式在 Nodejs 环境和浏览器端没有什么差别，它们都只需要像 `:ref` 类型一样，提供一个路径引用。

  - `&` 路径数据属性，后接一个上一级数据的字段。

```javascript
// 联动菜单json数据，在 Nodejs 下提供结构类似浏览器示例下的city变量的json文件
// Nodejs 环境
const instance = Such.instance({
  province: ":cascader:&<dataDir>/city.json:#[root=true]",
  city: ":cascader:&./province",
  area: ":cascader:&./city",
});
// 浏览器下
const city = {
  北京市: {
    北京市: ["朝阳区", "海淀区"],
  },
  湖北省: {
    武汉市: ["洪湖区", "东西湖区"],
  },
};
Such.assign('city', city);
const instance = Such.instance({
  province: ":cascader:#[root=true,data=city]",
  city: ":cascader:&./province",
  area: ":cascader:&./city",
});
// 模拟数据
instance.a();
// 输出数据类似：
/*
{
  province: "北京市", 
  city: "北京市", 
  area: "朝阳区"
}
*/
```
