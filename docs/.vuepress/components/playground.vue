<style>
.pg-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.pg-wrap .pg-input-wrap,
.pg-wrap .pg-output-wrap {
  width: 45%;
}
.pg-wrap textarea {
  border: 1px solid #ccc;
  background: none;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}
</style>

<template>
  <div class="pg-wrap">
    <div class="pg-input-wrap">
      <textarea
        v-model="code"
        placeholder="请输入要模拟的数据结构"
        class="pg-input"
        rows="60"
      ></textarea>
      <button @click="runCode">运行</button
      ><button @clear="clearCode">清空</button>
    </div>
    <div class="pg-output-wrap">
      <textarea
        readonly
        class="pg-output"
        rows="60"
        v-model="result"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const origCode = `
// assign the data
Such.assign('city', {
  'BeiJing': {
    'BeiJing': ['ChaoYang', 'HaiDian', 'DongCheng']
  },
  'ShangHai': {
    'ShangHai': ['JingAn', 'PuDong', 'PuTuo']
  },
  'GuangZhou': {
    'GuangZhou': ['PanYu', 'YueXiu', 'BaiYun']
  }
});
// define a new type
Such.define('mobile$china', 'regexp', '/(\\+86\\-)?(?<service>1[3-8][0-9])\\d{8}/');
// create an instance
const instance = Such.instance({
      errno: ':int:[0,1]',
      errmsg: ':string{0,20}:@concat("_ok")',
      'count?': ':number[1e5,1e6]:%d',
      'list{2,5}': {
        id: ':increment',
        range: ':increment:#[start=0]:{3}',
        province: ':cascader:#[root=true,data=city]',
        city: ':cascader:&./province',
        area: ':cascader:&./city',
        ref: ':ref:&./province,./city,./area:@join("/")',
        regexp: ':regexp:/\$[a-z]\w*/',
        email: ':email:#[domain="gmail.com"]',
        mobile: ':mobile$china',
        date: ':date:%yyyy-mm-dd HH\\:MM\\:ss',
        price: ':number[100,200]:%.2f',
        color: ':color$rgba',
        isNew: ':boolean',
      },
      'from{1}': ['Netflix', 'Disney'],
      'notranslate': '\\:number',
    });
// generate a fake data
const value = instance.a();
// show the data
console.log(value);
    `.trim();
    return {
      code: origCode,
      origCode,
      result,
    };
  },
  methods: {
    clearCode() {
      this.code = "";
    },
    runCode() {
      const result = new Function(
        "Such",
        this.code.replace("console.log(", "return (")
      )(Such);
      this.result = result;
    },
  },
  mounted() {},
};
</script>
