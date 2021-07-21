---
lang: en-US
title: About Suchjs
description: Design philosophy of Suchjs
---

### Design goals

In the front-end data simulation library, there are libraries with more complete functions like `mockjs`, but each library has its own design style and starting point. The design goals of suchjs are mainly as follows:

- Easy to expand-For data simulation, good scalability is an important feature to maintain the vitality of the library, so `suchjs` has done as much design and work as possible in this regard.

- Ease of use-This is actually one of the benefits of easy extension. In addition, `suchjs` adopts a declarative way to declare data in a variety of `data attribute` configuration combinations.

### Data Attribute

Each data type has its own characteristics, such as numbers, which have sizes and formats; for example, strings have length, character language restrictions, or unicode code point restrictions. `suchjs` extracts these common characteristics and writes them in the type description in the form of data attributes. Therefore, a simulation data may be a combination of multiple such data attributes, and multiple data attributes are separated by the separator `:` (Note: For the convenience of writing sometimes, the first type attribute is separated from the next attribute The character can be omitted). The built-in data attributes in suchjs include the following:

- Type -- First, you need to write the type of the data. These types can be built-in in suchjs or you can define them yourself. The default built-in types are string `:string`, number `:number`, date `:date`, regular `:regexp`, reference `:ref`, self-increment id `:id`, in the nodejs environment, also Supports dictionary `:dict`, cascading menu `:cascader`, etc. In addition, it also includes built-in extension types such as `:boolean`, `:url`, `:email`, etc.

- Length -- The length attribute is written in the format of `{min[,max]}`, which is usually used for string and array format data. For example, the length of the string is 3, it is represented by `{3}`, and the length is 10. Up to 20 is expressed as `{10,20}`

- Size -- The size attribute is written in the format of `[min,max]`, which usually represents a range of values. For a number, it means the minimum and maximum value of the number. If the size of the number is 10 to 20, it is represented by `[10,20]`. If it represents a fixed number, such as the number 3, it is represented by `[3,3] `Means that if there is no other data attribute configuration, it should be written directly with the number 3. For character strings, it usually represents the code point range of the character. For example, the code point range of uppercase letters is 65-90, it can be written as `[65,90]`, if there are multiple groups, the group writing syntax can be used , Such as representing both uppercase and lowercase letters, it can be written as `[65-90,97-122]`. For a date, it means a date range, for example, from 2012 to 2022, it is expressed as `[2012,2022]`, `suchjs` has built-in support for a more powerful log format similar to php `strtotime`, for example, 5 before and after the current time The range of years can be expressed as `['-5 years','+5 years']`.

- Formatting -- The formatting attribute is written in the form of `%` followed by `format` format. Formatting is usually more useful for numeric types and date types. For numeric types, `suchjs` has a built-in writing format that supports c-style `printf`. For example, `%.2f` means to convert a number to a floating point number with 2 decimal places (number The default type is the decimal part to generate `Math.random` floating-point number format).

- Path -- The path attribute is written in the form of `&` followed by the address. The path attribute is more useful for reference types, dictionary types, and so on. For reference types, the path address represents the data path of the simulation object. Note that the reference field corresponding to the path must appear before the reference type, otherwise the obtained data will be `undefined`. `{firstName:'hello', lastName:'man', fullName:':ref:&./firstName,./lastName'}`, so `fullName` will get an array: `['hello','man']` . For the dictionary type, it means the path address of the dictionary file `:dict:&<dataDir>/dict.txt`, which means obtaining data from the file `dict.txt` in the data directory.

- Regular expression -- The matching regular starts with `/`, followed by the regular expression string. The attribute configuration of regular is mainly for regular type. Regular type is a very powerful type, based on it can generate all types of basic format you want.

- Function call -- The above data attributes and different data types may not be required, so each type may only support a few specific data attributes, but the function call and the following configuration data attributes are all types Support analysis. The function attribute starts with `@`, followed by a function call. The function to be used can be injected globally through the `Such.assign` static method, and the method that exists in the data type itself can be called directly. For example, for the string type: `:string:[65,90]:{3}:@repeat(3)|slice(-5)`, it means that after obtaining 3 uppercase letter strings, repeat 3 times, and then Take the last 5 characters from the countdown.

- Parameter configuration -- Parameter configuration is the same as function call, and it is also the data attribute that the type supports parsed and obtained by default. It is usually used to provide external data injection for some defined types. The parameter configuration is written in the format of `#[key=value,flag]`. For example, for the auto-increment id type, if we want to configure its start value and step, we can configure `:id:#[start=1,step=2]` like this.

### Data simulation example

With an understanding of the basics of the above data attributes, we can now simulate some data through the combination of these data attributes.

- `:string:[65,90]:{3,10}` => output 3 to 10 uppercase letters, such as `DUFCD`, `KASGDS`

- `:date:['-1 year','+1 year']:%yyyy-mm-dd HH\:MM\:ss` => output the date one year before and after the current date and format it as year and month Day, hour, minute and second format.

- `:number:[1,100]:%.2f` => output a number from 1 to 100, and format it to retain two decimal points.

- `:regexp:/[a-z]{3,5}/i` => output a string of 3 to 5 English letters.

For more data types or type customization methods, please continue to check the relevant chapters.
