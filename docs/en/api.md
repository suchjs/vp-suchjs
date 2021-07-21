---
lang: zh-CN
title: APIs
description: APIs of suchjs
---

### `Such.define`

`Such.define` It is the entry method of the Suchjs custom type, including the configuration file, which is called to add the custom type. It accepts four types of parameters, corresponding to different situations.

- The first form: Based on existing types, a new type is obtained by fixing certain data attributes. Most of the built-in extended types are defined in this way.

  `Such.define(newType: string, baseType: string, properties: string)`

  ```javascript
  // example
  Such.define("integer", "number", "%d");
  ```

- The second form: define a new type by providing the `generate` function to generate data. This case is more suitable for types that do not need to provide any data attribute parameters.

  `Such.define(newType: string, generate: (options: TSuchInject) => unkown)`

  ```javascript
  // Extended boolean type
  Such.define("boolean", function (_, such) {
    // The second parameter provides the Such class, 
    // which is convenient to use the utils method mounted on it
    // It is also convenient to combine other data through other simulation data
    return such.utils.isOptional();
  });
  // Extend an rgb color type
  Such.define("color$rgb", function (_, such) {
    // Because the value of rgb is random between 0 and 255
    // So you can define a random instance between 0 and 255
    const instance = such.instance(":int[0,255]");
    return "rgb(" + [instance.a(), instance.a(), instance.a()].join(",") + ")";
  });
  ```

- The third form: Create a new type by providing complete configuration parameters, which is close to the definition of Suchjs built-in basic types.

  `Such.define(newType: string, config: TMFactoryOptions)`

  The definition of `TMFactoryOptions` is as follows:

  - `param` is optional, corresponding to the `properties` data attribute in the first form, which is equivalent to providing the default data attribute configuration.
  
  - `init(utils: typeof Such.utils)` is optional. The method to be executed during initialization is mainly for parameter parsing and parameter data formatting. In order to ensure the direction of this, please do not use arrow functions. The parameter `utils` Point to Such.utils.
  
  - `genreate(options?: TSuchInject, such?: Such)` Mandatory, the method to be finally executed to generate simulated data. This method accepts an options parameter and Such class injection. The definition of options `TSuchInject` contains the following parameters:
    
    - The entire simulation data that has been generated when `datas` runs to the current simulation field, the data is gradually generated in a depth-first manner.
  
    - The mocker object instance used by the current data of `mocker`, on which there is a parent mocker object of parent and a root mocker object of root, which are organized in a tree-like form. At the same time, there is a `storeData` field on the object, which can be used to store some data that needs to be saved on the `mocker` object. For example, the `:id` type will save the id value generated last time, so that the data value can be maintained during the next generation. Update.
    
    - `dpath` The current path value of the data field to be generated, similar to the form of `xpath`.
  
  - `reGenerate` is optional, this parameter will be ignored in this form, and the definition of the fourth form can be used to override the `generate` method of the original type.
  
  - `configOptions` is optional, corresponding to the configuration properties of `#[]`, which can be used to set the default value and data type of certain parameters, similar to the case when `vue` declares the accepted property parameters.

    ```javascript
    Such.define("datetime", {
      param: "%yyyy-mm-dd HH\\:MM\\:ss",
      init(utils) {
        // range
        this.addRule("$size", function ($size) {
          if (!$size) {
            return;
          }
          const { range } = $size;
          const makeDate = (param) => {
            let date;
            if (!isNaN(param)) {
              date = new Date(param);
            } else if (strRule.test(param)) {
              date = utils.strtotime(RegExp.$2);
            } else {
              throw new Error(`invalid date:${param}`);
            }
            return date;
          };
          if (range.length !== 2) {
            throw new Error(
              `the time range should supply 2 arguments,but got ${range.length}`
            );
          } else {
            const [start, end] = range;
            const startdate = makeDate(start);
            const enddate = makeDate(end);
            const starttime = startdate.getTime();
            const endtime = enddate.getTime();
            if (endtime < starttime) {
              throw new Error(
                `the time range of start time ${start} is big than end time ${end}.`
              );
            } else {
              return {
                range: [starttime, endtime],
              };
            }
          }
        });
        // $format rule
        this.addRule("$format", function ($format) {
          // nothing
          let { format } = $format;
          format = utils.decodeTrans(format.slice(1));
          return {
            format,
          };
        });
        // modifier
        this.addModifier("$format", function (result, $format) {
          const { format } = $format;
          return utils.dateformat(format, result);
        });
      },
      generate(_, such) {
        const { $size } = this.params;
        const { utils } = such;
        const range = (
          $size ?? {
            range: [
              utils.strtotime("-10 year").getTime(),
              utils.strtotime("+10 year").getTime(),
            ],
          }
        ).range;
        const time = utils.makeRandom(range[0], range[1]);
        return new Date(time);
      },
    });
    ```

- The fourth form: similar to the third method, but an additional inheritance type `baseType` parameter is added, and the writing method is similar to the third form. This situation is currently less used.
### `Such.parser`

The `parser` in Suchjs is for the analysis of data attributes. The existing built-in `parser` include:

- `[min,max]` is used to parse the size range, such as `[1,100]`
- `{least[,most]}` is used to parse the length, such as `{3}`, `{3,5}`
- `%` is used to parse and format, followed by `format` format, such as `%.2f` for number type and `%yyyy-mm-dd` for date type
- `/` is used to parse the regular path, followed by `pattern`, such as the regular `/\w/`
- `&` is used to pass the path, the separator is English comma`,`, such as `&./firstName,./lastName` of type `:ref`, or data address of dictionary type `&<dataDir>/dict .txt`
- `@` is used to parse function calls, and the spacer is a vertical bar `|`, such as `@repeat(3)|join('')`
- `#[key=value]` is used to parse the parameter configuration, the spacer is English comma `,`, such as `:id` type setting `#[start=0,step=2]`

For general data types, these basic data attributes are sufficient, but if the configuration of these attributes does not meet your needs, you can add a new data attribute through `Such.parser`.

`Such.parser(name: string, params: {config: IParserConfig, parse: () => void, setting: TObj})`

The description of each parameter is as follows:

-`name` defines the name of the parser

- The relevant configuration used by the `params` parser when parsing

  - The type of `config` is `IParserConfig`, which is defined as:

    - `startTag` string array type, representing the start tag of `parser`

    - `endTag` string array type, representing the end tag of `parser`

    - `separator` If the data supports grouping, the separator between multiple groups, note that the separator cannot be the same as the separator `:` used by multiple data attributes

    - `pattern` regular expression, for grouping, if a simple `separator` cannot simply separate the groups, you can set `pattern` to separate the groups

    - `rule` regular expression, if you can't simply use the start and end tags to match the entire data attribute value, you can set the `rule` to match the whole.

  - `parse: () => void` After the parsed string data is obtained through the above configuration, the `parse` method is further parsed into usable data, because in the `parse` method, it will need to be used The general method of the inherited parent class `Parser`, so the `parse` method should not use arrow functions to ensure the correct point of `this`.

  - The `setting` configuration object. Currently, the boolean configuration parameter of `frozen` is provided temporarily. The use of `frozen` indicates that the data attribute cannot be set repeatedly, and the data attribute that can be set repeatedly, such as the configuration attribute, `#[a= 1]:#[b=1]`, the final data will be merged by `merge`.

Now add a `parser` according to the above method, the code is as follows:

```javascript
// Define a parser to parse the form `(1,2,"hello,world",3,'good job!')`
// This format starts with a left parenthesis `(` and ends with a right parenthesis `)`
// Separate by comma `,`
// Because there may be English commas `,` in the string, you need to set the pattern to do complex matching
Such.parser("numberAndString", {
  config: {
    startTag: ["("],
    endTag: [")"],
    separator: ",",
    pattern: /^\s*(?:(['"])(?:(?!\1)[^\\]|\\.)*\1|\d+)/,
  },
  parse() {
    const { patterns } = this;
    const data = [];
    patterns.map((match) => {
      let [value, quote] = match;
      value = value.trimStart();
      if (quote) {
        // is a string
        data.push(value);
      } else {
        // is a number
        data.push(Number(value));
      }
    });
    return data;
  },
  setting: {
    frozen: true,
  },
});
// After defining `parser`, let's define a custom type and parse the data of the `parser`.
Such.define("showdata", {
  init() {
    // Define further processing of the numberAndString parsed by the parser
    // The first parameter name corresponding to addRule is consistent with the defined parser name
    this.addRule("numberAndString", function (numAndStr) {
      if (!numAndStr) {
        return;
      }
      const numbers = [];
      const strings = [];
      numAndStr.map((val) => {
        if (typeof val === "string") {
          strings.push(val);
        } else {
          numbers.push(val);
        }
      });
      return {
        numbers,
        strings,
      };
    });
  },
  generate(_, such) {
    // The final data will be parsed into params, the key is the name of the parser
    const { numberAndString } = this.params;
    const { numbers, strings } = numberAndString;
    let ret = [];
    const totalNum = numbers.length;
    if (totalNum) {
      const index = such.utils.makeRandom(0, totalNum - 1);
      ret.push(`number:${numbers[index]}`);
    }
    const totalStr = strings.length;
    if (totalStr) {
      const index = such.utils.makeRandom(0, totalStr - 1);
      ret.push(`string:${strings[index]}`);
    }
    return ret.join("|");
  },
});
// Now you can use custom types to simulate data
Such.as(':showdata:(1, 2, "hello", 3, 4, "world")');
// Will output `number:1|string:world`, `number:4|string:hello` etc.
```

### `Such.alias`

Define type alias, its calling method is relatively simple, used to add abbreviated alias to some long type names.

`Such.alias(alias: string, fromType: string)`

```javascript
// Add an alias int for the integer type
Such.alias("int", "integer");
```

### `Such.config`

With the above three methods, we can easily extend the types supported by Suchjs. In order to quickly define these data, Suchjs provides this method to load the data.

`Such.config(settings: TSuchSettings)`

Now describe the format of `settings` in the form of sample code.

```javascript
Such.config({
  // Here the corresponding call will be made using the `Such.parser` method
  parsers: {
    // key is the name of the corresponding parser, and the value is the second parsing configuration parameter
    numberAndString: {
      config: {
        // ...The code can refer to the chapter defining the parser above
      },
    },
  },
  // Correspondingly, the `Such.define` method will be used to call
  // where key is the name of the defined type
  // For the array value value, the parameter will be expanded in the apply way
  types: {
    integer: ["number", "%d"],
    boolean: function (_, such) {
      return such.utils.isOptional();
    },
  },
  // This will call `Such.alias` to create an alias
  // key is the alias name, value is the original type name
  alias: {
    int: "integer",
    bool: "boolean",
  },
  // extends: ['such:recommend'],
  // If in the nodejs environment, the configuration of extends extension will also be supported
  // Corresponds to a configuration file module
});
```

### `Such.instance`

Provides a static method to directly generate Such simulation object instance, it is recommended to use it to create an instance, mainly to facilitate some cache optimizations that may be done later.

```javascript
const IDGenerator = Such.instance(":id");
// Generate a simulation data
IDGenerator.a(); // 1
IDGenerator.a(); // 2
```

### `Such.assign`

As mentioned earlier, all of our data simulations support function calls starting with `@` and configuration properties in the way of `#[key=value]`, so if we want to inject the function names and configuration properties that are used when function calls are externally injected At this time, you need to use `Such.assign`.

`Such.assign(key: string, value: unkown)`

```javascript
// Define a string truncation method
Such.assign("truncate", function (str, len) {
  if (str.length > len) {
    return str.slice(0, len) + "...";
  }
  return str;
});
// use it
Such.as(":string:{20}:@truncate(10)");
// Output is similar to：'tALIHe(|ff...'
```

The above is basically the main API provided by Suchjs, and other APIs may be added and changed as the version changes. If you have any good comments, please feel free to provide feedback in github.

There are also some APIs based on data caching, loading and updating in the Nodejs environment, which will be explained in a separate chapter.