---
lang: en-US
title: Mock API
description: how to mock in suchjs 
---

## In browser

The Suchjs library itself does not support intercepting requests and mock data, but provides a separate library [such-mock-browser](https://github.com/suchjs/such-mock-browser) to extend that ability.

```html
<script 
src="https://cdn.jsdelivr.net/gh/suchjs/such@master/dist/such.min.js"
></script>
<script 
src="https://cdn.jsdelivr.net/gh/suchjs/such-mock-browser@main/dist/such-mock-browser.min.js"
></script>
<script>
  // The 'target' and 'method' are enum constants mounted on the Such.mock.
  const { target, method } = Such.mock;
  /*
   * Such.mock(
   *    pathname: string | RegExp,
   *    matcher: RequestMethod | string | ((req, params) => boolean)),
   *    data: (req, params) => data | unkown,
   *    override?: (resp: MockResponse) => void | MockResponse
   * );
   * Such.mock accept three or for arguments
   * -----------------------------------------------
   * [pathname]: 
   *  - Corresponding to the path name to be intercepted, it can be a string or a regular expression
   * [matcher]:
   *  - Corresponds to the logic that needs further matching for the request in addition to the previous path name matching
   *  - The parameter can be a string or a combination of the values ​​of the method enumeration built in the library
   *  - It can also be a return boolean function that can get the request and path matching parameters
   * [data]:
   *  - It can be an object that directly needs to be called by `Such.as`
   *  - It can also be a function that provides request and path matching parameters, so that you can process the logic in the function and then return the data
   * [override]:
   *  - When the above [pathname] and [matcher] are matched, data will be generated according to the data parameter and returned in response
   *  - The default response is json format data
   *  - But sometimes the data returned in json format may not be what you want, so you can overwrite it here
   *  - The parameter can be a response object, thereby overwriting the default response data
   *  - The parameter can also be a function injected with the current default response data, and the response data can be modified in the function body
   */
  Such.mock("/a", method.GET, {
    a: ":uppercase:{3,5}",
  });
  Such.mock(/\/\w*/, "*", {
    any: "*",
  });
  // At the end, the interception method needs to be executed, and the accepted parameter is a target type that needs to be intercepted
  // The target currently mounted on Such.mock contains two types
  //   - XHR <intercepts XMLHttpRequest>
  //   - FETCH <intercepts window.fetch method>
  Such.mock.intercept(target.XHR | target.FETCH);
  // use jquery for example
  $.get("/a", function (res) {
    console.log(res);
  }); 
  // The above will output similar to: {a: 'LDFC'}
  window
    .fetch("/anything", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); 
  // The above will output: {any: '*'}
  // remove the intercept
  Such.mock.unintercept();
</script>
```

## Nodejs Environment

No corresponding library for Nodejs is provided for the time being.