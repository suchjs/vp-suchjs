---
lang: zh-CN
title: Mock接口
description: suchjs如何mock数据
---

## 浏览器环境

Suchjs 库本身不支持拦截请求、mock 数据，但提供了单独的库扩展方法 [such-mock-browser](https://github.com/suchjs/such-mock-browser) 来对数据接口进行扩展。

```html
<script 
src="https://cdn.jsdelivr.net/gh/suchjs/such@master/dist/such.min.js"
></script>
<script 
src="https://cdn.jsdelivr.net/gh/suchjs/such-mock-browser@main/dist/such-mock-browser.min.js"
></script>
<script>
  const globalSuch = Such.default;
  // 挂载在Such类prototype方法mock上的常量
  const { target, method } = globalSuch.mock;
  /*
   * 以下注释的Such指的Such对象的实例
   * Such.mock(
   *    pathname: string | RegExp,
   *    matcher: RequestMethod | string | ((req, params) => boolean)),
   *    data: (req, params) => data | unkown,
   *    responseOptions?: {
   *      timeout?: number,
   *      transformer?: (resp: MockedResponse) => void | MockedResponse
   *    }
   * );
   * Such.mock 接受三到四个参数
   * -----------------------------------------------
   * pathname: 对应要拦截的路径，可以是字符串也可以是正则
   * matcher:
   *   - 对应除了路径匹配之外，针对请求还需要进一步匹配的逻辑
   *   - 该参数可以是字符串，也可以库里内置的 method 枚举的值的组合
   *   - 也可以是一个能获取到请求与路径参数的返回布尔值函数
   * data:
   *   - 可以是直接需要被 `Such.as` 调用的对象
   *   - 也可是一个提供了请求与路径参数的函数，这样可以在函数里处理逻辑再返回数据
   * responseOptions:
   *   - 因为当以上pathname和matcher都匹配到后，就会按照data参数生成数据进行响应返回
   *   - 默认的响应是json格式数据
   *   - 但有时返回json格式数据可能不是你想要的，因此可以通过这里来进行覆写
   *   - 参数可以是一个响应对象，从而对默认响应数据进行覆盖
   *   - 参数也可以是一个注入了当前默认响应数据的函数，在函数体内可以对响应数据进行修改
   */
  globalSuch.mock("/a", method.GET, {
    a: ":uppercase:{3,5}",
  });
  globalSuch.mock(/\/\w*/, "*", {
    any: "*",
  }, {
    // 这里将覆盖intercept时指定timeout
    // 可以为每个接口指定不同的响应时间范围
    timeout: 6000
  });
  // 在最后需要执行拦截方法，接受的参数为一个需要被拦截的target类型
  // 目前挂载在Such.mock上的target包含两种类型
  // - XHR 拦截XMLHttpRequest
  // - FETCH 拦截window.fetch方法
  globalSuch.mock.intercept(target.XHR | target.FETCH, {
    // 可以指定响应时间参数
    // [1000, 3000] 表示响应随机在1秒到3秒之间
    // 也可以是具体的数字，如 5000，5秒
    timeout: [1000, 3000] 
  });
  // 以使用jQuery为例
  $.get("/a", function (res) {
    console.log(res);
  }); 
  // 以上将输出类似 {a: 'LDFC'}
  window
    .fetch("/anything", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); 
  // 以上将输出 {any: '*'}
  // 解除拦截
  globalSuch.mock.unintercept();
</script>
```

## Nodejs 环境

在 `nodejs` 环境下，可在项目中安装 `such-cli` 包，在本地来启动一个 `mock server` 服务。详细的介绍可以参看[such-cli命令行工具](https://github.com/suchjs/such-cli)。
