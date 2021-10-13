---
lang: en-US
title: Installation
description: how to install suchjs
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

In the nodejs environment, suchjs has the ability to load configuration files, the format of the configuration file can be viewed in API [Such.config](./api.html#such-config)

## Browser

1. use npm

   - the installation is same as in the 'nodejs'

   - demo:

   ```javascript
   // here imported from the path 'suchjs/lib/browser', not 'suchjs'
   import globalSuch, { createNsSuch } from "suchjs/lib/browser";
   ```

2. use the CDN or local file

   Copy the `dist/such.min.js` file (or some other version) in the project to the local or upload to the CDN, use the script tag include to the html page, it will export a global `Such` object mounted by the `window`. The `window.Such` object look like below:

   ```javascript
   // the default is a global Such instance, and use `createNsSuch` you will get a namespace instance
   const { default: globalSuch, createNsSuch } = window.Such;
   ```

   if you use the tool `webpack`, then you can configure the 'externals':

   ```javascript
   // webpack
   module.exports = {
     // externals
     externals: {
       suchjs: "Such",
     },
   };
   ```

   then used in the javascript code like this:

   ```javascript
   import globalSuch, { createNsSuch } from "suchjs";
   ```
