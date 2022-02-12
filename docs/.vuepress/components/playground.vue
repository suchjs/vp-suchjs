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
.pg-wrap textarea,
.pg-output-wrap {
  border: 1px solid #ccc;
  background: none;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  height: 610px;
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Courier New", Courier, monospace;
}
.pg-wrap .pg-output-wrap {
  overflow-x: auto;
}
.pg-wrap textarea {
  line-height: 2;
  word-break: break-all;
  font-size: 16px;
}
.pg-wrap textarea::placeholder {
  color: #ccc;
}
.pg-buttons {
  text-align: center;
  margin: 0 10px;
}
.pg-buttons .btn {
  border: none;
  background-color: #666;
  color: #fff;
  display: block;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  min-width: 100%;
  cursor: pointer;
}
.pg-buttons .btn-clear {
  background-color: #09f;
}
.pg-buttons .btn-run {
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
      <button class="btn btn-run" @click="runCode">
        {{ texts.btnTexts.run }}
      </button>
      <button class="btn btn-clear" @click="clearCode">
        {{ texts.btnTexts.clear }}
      </button>
      <button class="btn btn-revert" @click="revCode">
        {{ texts.btnTexts.revert }}
      </button>
    </div>
    <div class="pg-output-wrap"></div>
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
Such.define('mobile$china', 'regexp', '/(\\\\+86\\\\-)?(?<service>1[3-8][0-9])\\\\d{8}/');
// assign data
Such.define('who', ["I'm", "He's", "She's"]);
`;
const globalSuch = Such.default;
export default {
  props: {
    lang: {
      type: String,
      default: "zh",
    },
  },
  data() {
    const origJson = {
      string: ":string:[65,121]:{10,20}:@concat('_suffix')",
      number: ":number:[100,200]:%.2f",
      date: ":date:['-1 week','+1 week']:%yyyy-mm-dd HH\\:MM\\:ss",
      regexp: ":regexp:/[a-z]{1,3}[0-9]{2,10}/",
      range: ":increment:{2,3}:#[start=2,step=3]",
      "menu{2}": {
        id:":increment",
        title: ":uppercase:{5,10}",
        "childs{2}": {
          "cid": ":increment",
          "refPid":":ref:&../id",
          title: ":lowercase:{5,10}"
        }
      },
      cascader: {
        province: ":cascader:#[root=true,data=city]",
        city: ":cascader:&./province",
        area: ":cascader:&./city",
      },
      "enum:{1}": ["one", "two"],
      template: ":::`:who` coming from `:ref:&./cascader/province`-`:ref:&./cascader/city`-`:ref:&./cascader/area`",
      diy: ":mobile$china",
      escape: "\\:number",
      extends: {
        bool: ":bool",
        int: ":int",
        percent: ":percent",
        uppercase: ":uppercase:{2,4}",
        lowercase: ':lowercase:{2,4}',
        alpha: ":alpha:{3,6}",
        alphaNumeric: ":alphaNumeric:{3,6}",
        alphaNumericDash: ":alphaNumericDash:{3,6}",
        tld: ":tld",
        domain: ":domain",
        protocol: ":protocol",
        url: ":url",
        email: ":email:#[domain='163.com']",
        ipv4: ":ipv4",
        ipv6: ":ipv6",
        color$hex: ":color$hex",
        color$rgb: ":color$rgb",
        color$rgba: ":color$rgba",
        color$hsl: ":color$hsl",
        color$hsla: ":color$hsla",
      }
    };
    const origCode = JSON.stringify(origJson, null, 4);
    const i18n = {
      zh: {
        inputPlaceholder: "页面默认已经运行以下代码",
        outputPlacehoder: "在此显示输出结果",
        btnTexts: {
          run: "运行",
          clear: "清空",
          revert: "还原",
        },
      },
      en: {
        inputPlaceholder: "The below code was run when page loaded:",
        outputPlacehoder: "The result output here",
        btnTexts: {
          run: "run",
          clear: "clear",
          revert: "revert",
        },
      },
    };
    return {
      code: origCode,
      prevCode: origCode,
      origCode,
      origJson,
      defRunCode,
      instance: null,
      result: "",
      texts: i18n[this.lang],
      JSONFormatter: null,
    };
  },
  methods: {
    clearCode() {
      this.code = "";
      document.querySelector(".pg-output-wrap").innerHTML = "";
    },
    revCode() {
      this.code = this.origCode;
    },
    runCode() {
      let lastCode = this.code.trim();
      let context;
      // json data
      if (
        lastCode.startsWith("{") &&
        (lastCode.endsWith("}") ||
          (lastCode = lastCode.replace(/;+$/, "")).endsWith("}"))
      ) {
        context = "return Such.instance(" + lastCode + ");";
      } else {
        context = lastCode.replace("console.log(", "return (");
      }
      if(!this.instance || this.code !== this.prevCode){
        this.instance = new Function("Such", context)(globalSuch);
      }
      this.prevCode = this.code;
      const { JSONFormatter } = this;
      const domOutputWrap = document.querySelector(".pg-output-wrap");
      const formatter = new JSONFormatter(this.instance.a(), 3);
      domOutputWrap.innerHTML = "";
      domOutputWrap.appendChild(formatter.render());
      formatter.openAtDepth(Infinity);
    },
  },
  mounted() {
    import("json-formatter-js").then((module) => {
      this.JSONFormatter = module.default;
    });
    new Function("Such", defRunCode)(globalSuch);
  },
};
</script>
