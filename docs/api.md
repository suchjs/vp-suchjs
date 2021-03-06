---
lang: zh-CN
title: 接口API
description: suchjs接口
---

### `Such.define` <Badge text=">= 1.0.0" />

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
  Such.define("boolean", function (_, such) {
    // 第二个参数提供了 Such 类，方便用它上面挂载的utils方法
    // 也方便通过其它模拟数据来组合其它数据
    return such.utils.isOptional();
  });
  // 扩展一个rgb颜色类型
  Such.define("color$rgb", function (_, such) {
    // 因为rgb的值都是随机的0到255之间
    // 所以可以定义一个0到255值中间的随机实例
    const instance = such.instance(":int[0,255]");
    return "rgb(" + [instance.a(), instance.a(), instance.a()].join(",") + ")";
  });
  ```

- 第三种形式：通过提供完整的配置参数来创建一个新类型，该方式接近于 Suchjs 内置基础类型的定义方式。

  `Such.define(newType: string, config: TMFactoryOptions)`

  `TMFactoryOptions` 的定义如下：

  - `param` 可选，对应于第一种形式中的 `properties` 数据属性，相当于提供了默认的数据属性配置。
  - `init(utils: typeof Such.utils)` 可选，初始化时要执行的方法，主要针对参数的解析和参数数据的格式化，为了保证 this 的指向，请勿使用箭头函数，参数 `utils` 指向 Such.utils。
  - `genreate(options?: TSuchInject, such?: Such)` 必选，生成模拟数据最终要执行的方法，该方法接受一个 options 参数及 Such 类注入，其中 options `TSuchInject` 定义包含了以下参数：
    - `datas` 运行到当前模拟字段时已经生成的整个模拟数据，数据以深度优先的方式逐步生成。
    - `mocker` 当前数据使用的 mocker 对象实例，其上有 `parent` 父 mocker 对象，`root`根 mocker 对象，整个以树状的形式组织。同时对象上有 `storeData` 字段，可以用来存储 `mocker` 对象上需要保存的一些数据，比如 `:increment` 类型就会保存上次生成的 id 值，方便下次生成时能保持数据值的更新。
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

### `Such.parser` <Badge text=">= 1.0.0" />

Suchjs 中的 `parser` 是针对的数据属性的解析，目前已有的内置 `parser` 包括：

- `[min,max]` 用来解析大小范围，如 `[1,100]`
- `{least[,most]}` 用来解析长度大小，如 `{3}`, `{3,5}`
- `%` 用来解析格式化，后接 `format` 格式，如数字类型的 `%.2f`，日期类型的 `%yyyy-mm-dd`
- `/` 用来解析正则路径，后接 `pattern`，如正则的 `/\w/`
- `&` 用来传递路径，间隔符为英文逗号 `,`，如 `:ref` 类型的 `&./firstName,./lastName`，，或者词典类型的数据地址 `&<dataDir>/dict.txt`
- `@` 用来解析函数调用，间隔符为竖线 `|`，如 `@repeat(3)|join('')`
- `#[key=value]` 用来解析参数配置，间隔符为英文逗号 `,`，如 `:increment` 类型设置 `#[start=0,step=2]`

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

  - `setting` 配置对象，目前暂时就提供 `frozen` 的布尔类型配置参数，使用了 `frozen` 表明该数据属性不能被重复设置，可以重复设置的数据属性，比如配置属性，`#[a=1]:#[b=1]`，最终数据会进行 `merge` 合并。

现在按照上面的方式来新增一个 `parser`，代码如下：

```javascript
// 定义一个解析器来解析形如 `(1,2,"hello,world",3,'good job!')`
// 该格式以左小括号 `(` 开头，右小括号 `)` 结尾
// 以英文逗号 `,` 为分隔
// 因为字符串里可能存在英文逗号 `,`，所以需要设置 pattern 来做复杂匹配
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
      // 字符串形式
      let [value, quote] = match;
      value = value.trimStart();
      if (quote) {
        data.push(value);
      } else {
        // 数字形式
        data.push(Number(value));
      }
    });
    return data;
  },
  setting: {
    frozen: true,
  },
});
// 定义好 `parser` 后，我们来定义一个自定义类型，并解析该 `parser` 的数据。
Such.define("showdata", {
  init() {
    // 定义对解析器解析到的 numberAndString 做进一步处理
    // addRule 对应的第一个参数名与定义的 parser 名保持一致
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
    // 最终数据会被解析到params内，key为parser的name名称
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
// 现在就可以用自定义的类型来模拟数据了
Such.as(':showdata:(1, 2, "hello", 3, 4, "world")');
// 将输出 `number:1|string:world`，`number:4|string:hello` 等等
```

### `Such.alias` <Badge text=">= 1.0.0" />

定义类型别名，它的调用方式比较简单，用来对一些长类型名增加简写别名。

`Such.alias(alias: string, fromType: string)`

```javascript
// 为integer类型增加一个别名int
Such.alias("int", "integer");
```

### `Such.config` <Badge text=">= 1.0.0" />

有了以上的三个方法，我们就可以很方便的对整个 Suchjs 支持的类型进行扩展了，为方便快速定义这些数据，Suchjs 提供了该方法来对数据进行加载。

`Such.config(settings: TSuchSettings)`

现在以示例代码的方式来描述 `settings` 的格式。

```javascript
Such.config({
  // 这里对应会使用 `Such.parser` 方法进行调用
  parsers: {
    // key 为对应parser的名称，值为第二个解析配置参数
    numberAndString: {
      config: {
        // ...代码可参考上方定义parser的章节
      },
    },
  },
  // 这里对应会使用 `Such.define` 方法进行调用
  // 其中 key 为定义的type类型名称
  // 对于数组value值，会以apply的方式进行参数展开
  types: {
    integer: ["number", "%d"],
    boolean: function (_, such) {
      return such.utils.isOptional();
    },
  },
  // 这里会调用 `Such.alias` 来创建别名
  // key为别名名称，value为原始类型名
  alias: {
    int: "integer",
    bool: "boolean",
  },
  // 以下配置仅在Node环境下使用
  // 对应的是一个与当前配置文件格式一致的导出文件
  // 格式可以是json，也可以是CMD模块，以'such:'开头的是内置模块
  extends: ["such:recommend"],
  // 文件路径、预加载配置
  config: {
    // 是否预加载所有数据文件，这里主要针对词典类型和级联类型
    // 可以是布尔型，true表示预加载所有文件
    // 也可以是个数组，指定要预加载的数据文件
    preload: false,
    // 在node环境下，Such.as('*.json') 会直接从该目录下获取json文件
    // 以该json文件为配置生成模拟数据
    suchDir: "suchas",
    // 存放数据文件的路径
    dataDir: "suchas/data",
  },
});
```

### `Such.assign` <Badge text=">= 1.0.0" />

前面提到我们所有的数据模拟都支持 `@` 开头的函数调用以及 `#[key=value]` 方式的配置属性，那么如果我们想从外部注入函数调用时要用到的函数名和配置属性中的 value 值，这时候就需要用到 `Such.assign` 了。

`Such.assign(key: string, value: unkown)`

```javascript
// 定义一个字符串的截字方法
Such.assign("truncate", function (str, len) {
  if (str.length > len) {
    return str.slice(0, len) + "...";
  }
  return str;
});
// 使用
Such.as(":string:{20}:@truncate(10)");
// 输出类似：'tALIHe(|ff...'
```

### `Such.instance` <Badge text=">= 1.0.0" />

提供了一个直接生成 Such 模拟对象实例的静态方法，如果你的数据需要多次生成，这样可以使用它来创建一个实例；静态方法 `Such.as(target, options?)` 其实就是使用该方法创建的一个语法糖，`Such.instance(target, options?).a()`。

```javascript
const IDGenerator = Such.instance(":increment");
// 实例上有 `a()` 方法
// 生成一个模拟数据
IDGenerator.a(); // 1
IDGenerator.a(); // 2
```

从 `v1.2.0` 版本后开始增加了调用 `a(instanceOptions?: IAInstanceOptions)` 方法时支持 `instanceOptions` 的可选参数，该参数目前支持 `keys` 字段的配置，通过数据的 path 路径作为 `key`，以 `{min?: number, max?: number}` 的值作为 `value`，用来精确每一次模拟数据使用不同的配置。目前它主要针对的是可选字段、以及数组字段。

```typescript
// 该参数的格式为
type IAInstanceOptions = {
  keys?: {
    [key: string]: {
      min?: number;
      max?: number;
      exist?: boolean;
      index?: number;
    };
  };
};
// 对应的 `key` 为 path 路径，指定该路径对应的字段的出现次数
```

```javascript
// 配置可选字段示例
const genOptional = Such.instance({
  "optional?": ":boolean",
});
// 直接调用不带参数，这里上面的optional字段可能存在也可能不存在
genOptional.a();
// 增加instanceOptions参数
// 以下调用 optional 字段一直不会存在
genOptional.a({
  keys: {
    "/optional": {
      // max 为 0，表示 optional 字段出现次数只能为0
      // 这里等价于 exist: false
      // 如果字段为可选，同时具备数组长度值的话，应直接使用exist
      max: 0,
    },
  },
});
// 以下调用 optional 字段将一直存在
genOptional.a({
  keys: {
    "/optional": {
      // min 为 1，表示 optional 字段出现次数只能为1
      // 这里等价于 exist: true
      // 如果字段为可选，同时具备数组长度值的话，应直接使用exist
      min: 1,
    },
  },
});
```

```javascript
// 配置数组字段示例
const genArray = Such.instance({
  "array{5,10}": ":number",
});
// 直接调用不带参数，这样数组的长度为 5 到 10
genArray.a();
// 增加instanceOptions参数
// 下面的参数将把 array 数组的长度限制在 6 到 8
// 注意该参数的范围只能在原始范围内收窄，而不能拓宽
genOptional.a({
  keys: {
    "/array": {
      min: 6,
      max: 8,
    },
  },
});
// 以下调用将把 array 数组的长度确定为 6 条
genOptional.a({
  keys: {
    "/array": {
      min: 6,
      max: 6,
    },
  },
});
// 针对枚举类型，还可以指定枚举的index值
const genResult = Such.instance({
  "errno{1}": [0, 1],
});
genResult.a({
  keys: {
    "/errno": {
      index: 0,
    },
  },
});
// 以上示例生成 {errno: 0}
```

### `Such.as` <Badge text=">= 1.0.0" />

如上 `Such.instance` 静态方法所说，该方法提供了仅需要一次调用生成一次模拟数据的快速方法入口。

### `Such.template` <Badge text=">= 1.1.0" />

该方法也是[`模板字符串类型`](./types/template.md)实际调用的方法，不同的是它不需要前导的三冒号 `:::` 作为类型标识。它接受一个字符串模板，如果是数据类型变量，可以用（backtick => "\`"） 符号进行包裹。如果后面还有其它的模板字符串类型参数，仍然使用三冒号 `:::` 标识模板字符串已经书写结束，后面的字符串将作为类型的 `data attributes` 进行解析。目前版本支持的 `data attributes` 只包括 `{3}` 这样的长度属性，表示对前面的模板字符串进行多少次重复。如果需要输出正常的 backtick \` 符号，或者正常的三冒号，请在前面加上反斜杠 `\\` 进行转义。

`Such.template(key: string, path?: TFieldPath): Template`

```javascript
// 单独调用时，不需要提供第二个类xpath路径的path参数
// 该参数主要在使用模板字符串类型时提供，方便对错误进行更好提示
Such.assign("dict", ["bear", "rabbit"]);
const tmpl = Such.template(
  "i spent `:number:[50,100]` dollars to buy a `:dict:#[data=dict]` toy."
);
// 和such的实例一样，上面有 a() 方法，调用a方法输出模拟数据
tmpl.a();
const ucaseTmpl = Such.template("`:uppercase:{3}`:::{3}");
ucaseTmpl.a(); // 输出类似 "ACDACDACD"
```

以上基本就是 Suchjs 提供的主要 API 了，其它的 API 可能会随着版本的更迭进行增改。如果有好的意见，欢迎在 github 里提供反馈。

Nodejs 环境下还有些基于数据缓存、加载与更新的一些 API，将会有单独的章节来说明。
