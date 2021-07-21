---
lang: zh-CN
title: 接口API
description: suchjs接口
---

### `Such.define`

`Such.define` 是 Suchjs 自定义类型的入口方法，包括配置文件，都是调用该方法来增加自定义类型。它接受四种形式的参数，分别对应不同的情形。

- 第一种形式：基于已有类型，通过固定某些数据属性来获得一种新类型，内置的扩展类型大多是通过这种方式来定义的。

  `Such.define(newType: string, baseType: string, properties: string)`

  ```javascript
  // 示例
  Such.define("integer", "number", "%d");
  ```

- 第二种形式：通过提供生成数据的 `generate` 函数来定义新类型，这种情况比较适合不需要提供任何数据属性参数的类型。

  `Such.define(newType: string, generate: (options: TSuchInject) => unkown)`

  ```javascript
  // 扩展的boolean类型
  Such.define("boolean", function (options) {
    // options提供了小写 `such` 对应 `Such` 类，上面挂载了内置的utils方法等。
    const { such } = options;
    return such.utils.isOptional();
  });
  ```

- 第三种形式：通过提供完整的配置参数来创建一个新类型，该方式接近于 Suchjs 内置基础类型的定义方式。

  `Such.define(newType: string, config: TMFactoryOptions)`

  `TMFactoryOptions` 的定义如下：

  - `param` 可选，对应于第一种形式中的 `properties` 数据属性，相当于提供了默认的数据属性配置。
  - `init(utils: typeof Such.utils)` 可选，初始化时要执行的方法，主要针对参数的解析和参数数据的格式化，为了保证 this 的指向，请勿使用箭头函数，参数 `utils` 指向 Such.utils。
  - `genreate(options?: TSuchInject, such?: Such)` 必选，生成模拟数据最终要执行的方法，该方法接受一个 options 参数及 Such 类注入，其中 options `TSuchInject` 定义包含了以下参数：
    - `datas` 运行到当前模拟字段时已经生成的整个模拟数据，数据以深度优先的方式逐步生成。
    - `mocker` 当前数据使用的 mocker 对象实例，其上有 `parent` 父 mocker 对象，`root`根 mocker 对象，整个以树状的形式组织。同时对象上有 `storeData` 字段，可以用来存储 `mocker` 对象上需要保存的一些数据，比如 `:id` 类型就会保存上次生成的 id 值，方便下次生成时能保持数据值的更新。
    - `dpath` 当前要生成的数据字段的路径值，类似于 `xpath` 的形式。
  - `reGenerate` 可选，该种形式中会忽略该参数，第四种形式的定义方式可以用来覆盖原类型的 `generate` 方法。
  - `configOptions` 可选，对应 `#[]` 的配置属性，可以用来设置某些参数的默认值和数据类型，与 `vue` 声明接受的属性参数时类似。

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

  - 第四种形式：与第三种方式类似，不过多增加了一个继承类型`baseType`参数，书写方式与第三种类似，这种情形目前比较少用。

    `Such.define(newType: string, baseType: string, config: TMFactoryOptions)`

    `config` 参数可以参考第三种形式的说明，在该方式定义下，`reGenerate` 的数据生成函数将可以替代 `baseType` 的生成函数，这样基本完全覆写了 `baseType`，这种需求一般比较少见，但接口依然给予了可以操作的可能性。

### `Such.parser`

Suchjs 中的 `parser` 是针对的数据属性的解析，目前已有的内置 `parser` 包括：

- `[min,max]` 用来解析大小范围，如 `[1,100]`
- `{least[,most]}` 用来解析长度大小，如 `{3}`, `{3,5}`
- `%` 用来解析格式化，后接 `format` 格式，如数字类型的 `%.2f`，日期类型的 `%yyyy-mm-dd`
- `/` 用来解析正则路径，后接 `pattern`，如正则的 `/\w/`
- `&` 用来传递路径，间隔符为英文逗号 `,`，如 `:ref` 类型的 `&./firstName,./lastName`，，或者词典类型的数据地址 `&<dataDir>/dict.txt`
- `@` 用来解析函数调用，间隔符为竖线 `|`，如 `@repeat(3)|join('')`
- `#[key=value]` 用来解析参数配置，间隔符为英文逗号 `,`，如 `:id` 类型设置 `#[start=0,step=2]`

一般数据类型，这些基本的数据属性已经够用，但如果这些属性配置还不能满足你的需求，你就可以通过 `Such.parser` 新增一种数据属性。

`Such.parser(name: string, params: {config: IParserConfig, parse: () => void, setting: TObj})`

各个参数的说明如下：

- `name` 定义解析器的名称

- `params` 解析器解析时用到的相关配置

  - `config` 类型为 `IParserConfig`，该类型的定义为：

    - `startTag` 字符串数组类型，表示 `parser` 的开始标记符

    - `endTag` 字符串数组类型，表示 `parser` 的结束标记符

    - `separator` 如果数据要支持分组，多个分组之间的间隔符，注意间隔符不能和多个数据属性自身使用的分隔符 `:` 相同

    - `pattern` 正则表达式，对于分组，如果单纯的 `separator` 不能简单的分隔分组，就可以设置 `pattern` 来分隔分组

    - `rule` 正则表达式，如果不能简单的使用开始和结束标记符来匹配到整个数据属性值，就可以设置 `rule` 来整体匹配。

  - `parse: () => void` 在通过以上配置，获得解析后的字符串数据之后，由该 `parse` 方法进一步解析成可用的数据，由于在该 `parse` 方法中，会需要用到继承的父类 `Parser` 的通用方法，所以该 `parse` 方法不要使用箭头函数，以保证 `this` 的正确指向。

  - `setting` 配置对象，目前暂时就提供 `frozen` 的布尔类型配置参数，使用了 `frozen` 表明该数据属性不能被重复设置。
