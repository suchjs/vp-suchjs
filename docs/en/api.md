---
lang: zh-CN
title: APIs
description: APIs of suchjs
---

### `Such.define` <Badge text=">= 1.0.0" />

`Such.define` It is the entry method to difine a custom type, including a configuration data called by API `Such.config`, are called it to add data types. It accepts four kinds of parameters, corresponding to different situations.

- The first: Based on existing types, a new type is obtained by fixing certain data attributes. Most of the built-in extended types in library are defined in this way.

  `Such.define(newType: string, baseType: string, attributes: string)`

  ```javascript
  // example
  Such.define("integer", "number", "%d");
  ```

- The second: Define a new type by providing the `generate` function to generate data. This way is more suitable for types that do not need to provide any data attribute parameters.

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

- The third: Create a new type by providing complete configuration parameters, which is close to the definition how the library define built-in basic types.

  `Such.define(newType: string, config: TMFactoryOptions)`

  The definition of `TMFactoryOptions` is as follows:

  - `param` optional, corresponding to the `attributes` data attribute in the first form, which is equivalent to providing the default `data attribute`s.

  - `init(utils: typeof Such.utils)` optional, the method to be executed during initialization, is mainly for `data attribute` parsing and formatting. In order to ensure the scope of `this`, please do not use arrow functions. The parameter `utils` are injected by `Such.utils`.

  - `genreate(options?: TSuchInject, such?: Such)` required, the method to be finally executed to generate mocking data. This method accepts an options parameter and Such class injection. The definition of options `TSuchInject` contains the following parameters:

    - `datas` The entire mocking data that has been generated when the `mocker` runs to the current field, the data is gradually generated in a depth-first manner.

    - `mocker` The mocker object instance used by the current field, which has a `parent` mocker object and a `root` mocker object, organized in a tree-like structure. At the same time, there is a `storeData` field on the object, which can be used to store some data that needs to be saved on the `mocker` object. For example, the `:id` type will save the id value generated last time, so that the data value can be maintained during the next generation, keep the data in updated.

    - `dpath` The current path value of the data field to be generated, similar to xml's `xpath`.

  - `reGenerate` optional, this parameter will be ignored in this form, and the definition of next, the fourth form, can be used to override the `generate` method of the original type.

  - `configOptions` optional, corresponding to the configuration `data attribute` of `#[]`, which can be used to set the default value and data type of certain parameters, similar to the `vue` how to declares the accepted property parameters in the child components.

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

- The fourth: similar to the third form, but an additional inheritance type `baseType` parameter is added. This form is currently less used.

### `Such.parser` <Badge text=">= 1.0.0" />

The `parser` in Suchjs is for the analysis of `data attribute`s. The built-in `parser`s include:

- `[min,max]` is used to parse the size range, such as `[1,100]`

- `{least[,most]}` is used to parse the length, such as `{3}`, `{3,5}`

- `%` is used to parse and format, followed by the `format` string, such as `%.2f` for number type and `%yyyy-mm-dd` for date type

- `/` is used to parse the regular expression, followed by the `pattern` string, such as the regular expression `/\w/`

- `&` is used to parse the path, multiple paths can separate by the comma `,`, such as `&./firstName,./lastName` of the `:ref` type, or file path of dictionary type `&<dataDir>/dict.txt`

- `@` is used to parse function calls, and multiple functions separate by the vertical bar `|` as a pipe, such as `@repeat(3)|join('')`

- `#[key=value]` is used to parse the configuration, also can use a comma `,` to separate multiple key-value pairs, such as a `:id` type can set a configuration like `#[start=0,step=2]`

For general data types, these basic `data attribute`s are sufficient, but if you meet some needs can't cover them by those, you may need to add a new `data attribute` parser through the API `Such.parser`.

`Such.parser(name: string, params: {config: IParserConfig, parse: () => void, setting: TObj})`

The description of each parameter is as follows:

- `name` defines the name of the parser, it also used for the parsed result's key.

- `params` the main parameter to define how the parser parsing data.

  - `config` is a typescript type `IParserConfig`, which is defined as:

    - `startTag` string array type, representing the start tag of `parser`

    - `endTag` string array type, representing the end tag of `parser`

    - `separator` If the data supports grouping, the separator between multiple groups, note that the separator can't be the same as the separator `:` that has ever used by the `data attribute`s

    - `pattern` a regular expression, for grouping, if a simple `separator` parameter can't simply separate the groups, you can set a `pattern` to separate the groups

    - `rule` a regular expression, if you can't simply use the start and end tags to match the entire data attribute value, you can set the `rule` to match the whole.

  - `parse: () => void` After the parsed string data is obtained through the above configuration, the `parse` method is further parsed into usable data, because in the `parse` method, it will need to be used The general method of the inherited parent class `Parser`, so the `parse` method should not use arrow functions to ensure the correct point of `this`.

  - `setting` a configuration object. Currently, just a boolean field `frozen` is provided. if the `frozen` is true, then the `data attribute` can't be set repeatedly, otherwise the `data attribute` can be set twice more, such as the configuration attribute, `#[a=1]:#[b=1]`, the final data will be merged the same to `#[a=1,b=1]`.

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

### `Such.alias` <Badge text=">= 1.0.0" />

Define type alias, it's just need provide two arguments, one is the abbreviated alias name, the other is the actual existing long type name.

`Such.alias(alias: string, fromType: string)`

```javascript
// Add an alias int for the integer type
Such.alias("int", "integer");
```

### `Such.config` <Badge text=">= 1.0.0" />

With the above three methods, we can easily extend the types supported by Suchjs. In order to quickly define these data all, Suchjs provides this method:

`Such.config(settings: TSuchSettings)`

What the `settings` look like is shown in the below code.

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
  // The following configuration is only used in the Node environment
  // 'extends' it's an array list of config file should loaded first.
  // The config file use the same format as the current config parameter
  // It can be a json file or a CMD module 
  // The ones beginning with 'such:' are built-in config modules
  extends: ['such:recommend'],
  // The file paths & preload configuration
  config: {
    // Whether to preload all data files, this is mainly for ':dict' data type and ':cascade' data type
    // Can be boolean, true means preload all files
    // It can also be an array, specifying the data file need to be preloaded
    preload: false,
    // In the node environment, Such.as('*.json') will get the json file directly from this directory
    // Generate simulation data with the json file as the data configuration
    suchDir:'suchas',
    // The path to store the data file
    dataDir:'suchas/data',
  },
});
```

### `Such.instance`

It's a static method to directly generate a `Such` object instance instead of `new Such`, it is recommended, mainly to facilitate some cache optimizations that may be done later.

```javascript
const IDGenerator = Such.instance(":id");
// Generate a simulation data
IDGenerator.a(); // 1
IDGenerator.a(); // 2
```

### `Such.assign` <Badge text=">= 1.0.0" />

As mentioned earlier, all of our data mocking support function calls `data attribute` starting with `@` and data configuration `data attribute` like `#[key=value]`, so if you want to inject your own function call names and data configuration's value data variable, you need to use `Such.assign`.

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

### `Such.template` <Badge text=">= 1.1.0" />

This method is also the method actually called by the [template literal type](./types/template.md). The difference is that it does not require the leading three colons `:::` as the type identifier. It accepts a string template, if it is a data type variable, it can be wrapped with the (backtick => "\`") symbol. If there are other data attribute parameters, the three colons `:::` are still used to indicate that the template literal is end, and the following string will be parsed as the type of `data attribute`s. The `data attribute`s supported by the current version only includes length `data attribute` like `{3}`, indicating how many times the previous template string is repeated. If you need to output the normal backtick \` symbol, or the three colons `:::`, please add a backslash `\\` in front of it to escape.

`Such.template(key: string, path?: TFieldPath)`

```javascript
// When only call itself, no need to provide the path parameter like a xpath of data
// The path parameter is mainly provided when using the template string type to facilitate better prompts for errors
Such.assign('dict', ['bear', 'rabbit']);
Such.template("i spent `:number:[50,100]` dollars to buy a `:dict:#[data=dict]` toy.");
Such.template("`:uppercase:{3}`:::{3}"); // Output: "ACDACDACD"
```

The above is basically the main APIs provided by `Suchjs`, and other APIs may be added and changed as the library's version changes. If you have any good comments, please feel free to provide feedback `in github`.

There are also some APIs based on data caching, loading and updating in the Nodejs environment, which will be explained in a separate chapter.
