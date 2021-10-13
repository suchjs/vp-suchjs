---
lang: zh-CN
title: 安装使用
description: suchjs如何安装使用
---

## Nodejs

```shell
# npm
npm install --save suchjs

# yarn
yarn add suchjs

# pnpm
pnpm add suchjs
```

```javascript
// CMD
const { default: globalSuch, createNsSuch } = require("suchjs");
// ES6 module
import globalSuch, { createNsSuch } from "suchjs";
```

在 nodejs 环境下，suchjs 具备加载配置文件的能力，配置文件的格式可以查看 API [Such.config](./api.html#such-config)

## Browser

1. 通过 npm 安装

   - 安装方式与 nodejs 中一样

   - 引用示例：

   ```javascript
   // 注意这里引入的是browser的导出
   // 如果使用了webpack打包工具，建议分割库单独打包
   import globalSuch, { createNsSuch } from "suchjs/lib/browser";
   ```

2. 通过 CDN 或者本地文件加载

   将项目中 `dist` 目录下对应版本的文件（最新版本为`such.min.js`）， 拷贝到本地或上传到 CDN，然后在页面中直接引入。导出的对象为 `window.Such`:

   ```javascript
   // 全局导出的Such对象上包含default及createNsSuch两个字段，对应如下
   const { default: globalSuch, createNsSuch } = window.Such;
   ```

   如果有使用 `webpack` 打包工具，可以进行如下配置：

   ```javascript
   // webpack配置
   module.exports = {
     // 配置externals
     externals: {
       suchjs: "Such",
     },
   };
   ```

   随后在代码中可以直接使用：

   ```javascript
   import globalSuch, { createNsSuch } from "suchjs";
   ```
