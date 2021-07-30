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
  font-family: 'Courier New', Courier, monospace;
}
.pg-wrap textarea::placeholder{
  color:#ccc;
}
.pg-buttons{
  text-align: center;
  margin:0 10px;
}
.pg-buttons .btn{
  border:none;
  background-color: #666;
  color: #fff;
  display: block;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  min-width: 100%;
  cursor: pointer;
}
.pg-buttons .btn-clear{
  background-color: #09f;
}
.pg-buttons .btn-run{
  background-color: #0c3;
}
</style>

<template>
  <div class="pg-wrap">
    <div class="pg-input-wrap">
      <textarea
        v-model="code"
        :placeholder="`//${texts.inputPlaceholder}\n${defRunCode}`"
        class="pg-input"
        rows="40"
      ></textarea>
    </div>
    <div class="pg-buttons">
      <button class="btn btn-run" @click="runCode">{{texts.btnTexts.run}}</button>
      <button class="btn btn-clear" @click="clearCode">{{texts.btnTexts.clear}}</button>
      <button class="btn btn-revert" @click="revCode">{{texts.btnTexts.revert}}</button>
    </div>
    <div class="pg-output-wrap">
      <textarea
        readonly
        class="pg-output"
        rows="40"
        :placeholder="texts.outputPlacehoder"
        v-model="result"
      ></textarea>
    </div>
  </div>
</template>

<script>
const defRunCode = `
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
Such.define('mobile$china', 'regexp', '/(\\\\+86\\\\-)?(?<service>1[3-8][0-9])\\d{8}/');
`;
export default {
  props: {
    lang: {
      type: String,
      default: 'zh'
    }
  },
  data() {
    const origCode = `
{
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
    regexp: ':regexp:/\\$[a-z]\\w*/',
    email: ':email:#[domain="gmail.com"]',
    mobile: ':mobile$china',
    date: ':date:%yyyy-mm-dd HH\\\\:MM\\\\:ss',
    price: ':number[100,200]:%.2f',
    color: ':color$rgba',
    isNew: ':boolean',
  },
  'from{1}': ['Netflix', 'Disney'],
  'notranslate': '\\:number',
};
    `.trim();
    const i18n = {
        zh: {
          inputPlaceholder: '页面默认已经运行以下代码',
          outputPlacehoder: '在此显示输出结果',
          btnTexts: {
            run: '运行',
            clear: '清空',
            revert: '还原'
          }
        },
        en: {
          inputPlaceholder: 'The below code was run when page loaded:',
          outputPlacehoder: 'The result output here',
          btnTexts: {
            run: 'run',
            clear: 'clear',
            revert: 'revert'
          }
        }
      };
    return {
      code: origCode,
      origCode,
      defRunCode,
      result: '',
      texts: i18n[this.lang]
    };
  },
  methods: {
    clearCode() {
      this.code = '';
      this.result = '';
    },
    revCode(){
      this.code = this.origCode;
    },
    runCode() {
      const lastCode = this.code.trim();
      let context;
      // json data
      if(lastCode.startsWith('{') && (lastCode.endsWith('}') || lastCode.replace(/\;*$/, '').endsWith('}'))){
        context = 'return Such.as(' + lastCode + ');';
      }else{
        context = lastCode.replace("console.log(", "return (");
      }
      console.log(context);
      const result = new Function(
        "Such",
        context
      )(Such);
      this.result = JSON.stringify(result, null, 2);
    },
  },
  mounted() {
    (new Function('Such', defRunCode)(Such));
  },
};
</script>
