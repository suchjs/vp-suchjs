---
lang: en-US
title: About
description: Design philosophy of Suchjs
---

### Design Goals

In the front-end, there are some mature libraries for mocking data, such as `mockjs`. Howerver, each library has its own design features and goals. The design goals of `suchjs` are mainly as follows:

- Expandability - For moking data, scalability is an important feature to maintain the vitality of a library, so `suchjs` has done as much work as possible in this regard.

- Easy to use - This is actually one of the benefits of the expandability. And more, `suchjs` use a declarative way for declaring a data, what named the `data attribute` in the library, a mocking type is a combinations of each of them.

### Data Attribute

Each data type has its own features. For example, numbers, it have sizes and formats; strings, it have length, and belong to some unicode code points. `suchjs` extracts the common feature of thoes data types, which we named `data attribute`s as mentioned above. Now, a mocking type is a combination of thoes `data attribute`, one or two or more. `suchjs` use the colon `:` to separate the `data attribute`s.(Note: For the convenience of writing, most time, you can drop the separator between the first two `data attribute`s, because the first `data attribute` is always a `type`, it can matched exactly, and won't affect the parsing).

The built-in `data attribute`s in `suchjs` include the following:

- Type -- First, you need to give the type of the data. It can be a built-in type of the library, and also can be a type you defined it yourself. The library built-in types contains: a string `:string`, a number `:number`, a date `:date`, a regular expression `:regexp`, a reference `:ref`, a self-increment number `:increment`, and also supports a dictionary `:dict`, a cascading menu `:cascader`, but they have a slight difference in use. In addition, it also includes built-in extension types such as `:boolean`, `:url`, `:email`, etc.

- Length -- The length `data attribute` use a format of `{min[,max]}`, which is usually used for the string and array data. For example, if the length of the string is 3, it can be represented by `{3}`, and the length is 10 up to 20, it can be represented by `{10,20}`

- Size -- The size `data attribute` use a format of `[min,max]`, which usually represents a range of values. For a number, it means the minimum and maximum value of the number. If the size of the number is 10 to 20, it is represented by `[10,20]`. If it represents a fixed number, such as the number 3, it is represented by `[3,3]`, of course, if there is no other `data attribute` configuration, it should be written directly with the number `3`. For character strings, it usually represents the unicode code point range of the character. For example, the code point range of uppercase letters is 65 to 90, it can be written as `[65,90]`, if there are multiple groups, the group writing syntax can be used, such as representing both uppercase and lowercase letters, it can be written as `[65-90,97-122]`. For a date, it means a date range, for example, from 2012 to 2022, it is expressed as `[2012,2022]`, `suchjs` has built-in support for a more powerful date formating similar to php's method `strtotime`, for example, 5 years before and after, can be expressed as `['-5 years','+5 years']`.

- Formatting -- The formatting `data attribute` starts with: `%`, followed by a `format` string. Formatting is usually more useful for numeric types and date types. For numeric types, `suchjs` has a built-in writing format that supports a c-style method `printf`. For example, `%.2f` means to convert a number to a floating point number with 2 decimal places (the `:number` type by default generate a number that the decimal part as well as the `Math.random`).

- Path -- The path `data attribute` starts with: `&`, followed by an `address` string. The path attribute is more useful for reference types, dictionary types, and so on. For reference types, the path address represents the data path of the mocked data. Note that the reference field corresponding to the path must appear before the reference type, otherwise the obtained data will be `undefined`. `{firstName:'hello', lastName:'man', fullName:':ref:&./firstName,./lastName'}`, so `fullName` will get an array: `['hello','man']` . For the dictionary type, it means the path address of the dictionary file `:dict:&<dataDir>/dict.txt`, which means obtaining data from the file `dict.txt` in the data directory.

- Regular expression -- The regular expression `data attribute` starts with: `/`, followed by the regular expression string. This `data attribute` is mainly for regular expression type. Regular expression type is a very powerful type, you can generate all kinds of string types as you want base on it.

- Function call -- The above `data attribute`s may not all required them for differenct data types, each data type may only support a few specific `data attribute`s, but the function call and the following configuration `data attribute`s are all types support by default. The function call `data attribute` starts with `@`, followed by a function call string list. The function to be used can be injected globally through the `Such.assign` static method, and the method that exists in the data type itself can be called directly. For example, for the string type: `:string:[65,90]:{3}:@repeat(3)|slice(-5)`, it means that after obtaining 3 uppercase letter strings, repeat 3 times, and then take the last 5 characters.

- Parameter configuration -- Parameter configuration is the same as function call, and it is also the data attribute that the type supports parsed and obtained by default. It is usually used to provide external data injection for some defined types. The parameter configuration use a format of `#[key=value,flag]`. For example, for the auto-increment id type, if we want to configure its `start` value and `step`, we can configure `:id:#[start=1,step=2]` like this.

### Mocking Data Example

With an understanding of the basics of the above `data attribute`s, we can now mock some data through the combination of these `data attribute`s.

- `:string:[65,90]:{3,10}` => output a string, and it's unicode point is between 65 to 90(that is,uppercase letters), and the length is between 3 to 10, it will get a result data such as `DUFCD`, `KASGDS`

- `:date:['-1 year','+1 year']:%yyyy-mm-dd HH\:MM\:ss` => output the date one year before and after the current date and format it as `year-month-day hour:minute:second`.

- `:number:[1,100]:%.2f` => output a number from 1 to 100, and format it to retain two decimal points.

- `:regexp:/[a-z]{3,5}/i` => output a string of 3 to 5 english letters.

For more data types or type customization methods, please continue to check the relevant chapters.
