<template>
  <div>
    <div class="upBox">
      <i class="fas fa-chevron-left"></i>
      <p class="upText">回上一頁</p>
    </div>

    <div class="pigPic">
      <img :src="data.titlePic" alt="作品主圖" />
    </div>
    <div class="textBox">
      <div class="smallTextBox">
        <div class="titleText">{{title}}</div>
        <a
          href="https://felicia1910.github.io/personal_practice/index.html"
          class="btn"
          target="_blank"
        >
          <div class="watchBtn">點我到連結</div>
        </a>
      </div>
      <div class="detailText">
        <div class="textIn">{{data.introduce}}</div>
        <div class="useTitle">使用技術</div>
        <div class="use">
          <ul>
            <li v-for="(v,k) in data.used" :key="k">{{v.name}}{{v.work}}</li>
          </ul>
        </div>
      </div>
      <div class="detailPicBox">
        <div v-for="(v,k) in pics" :key="k">
          <img class="pic-small" :src="v.name" alt="預覽圖" @click="openBigPic(v,k)" />
          <div class="picBoxForDetail" v-show="v.check">
            <div class="del" @click="openBigPic(v,k)">X</div>
            <img :src="v.big" alt="詳細圖" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      data: {},
      title: "",
      pics: []
    };
  },
  computed: {},
  async mounted() {
    console.log(this.$route.params);
    this.start();
  },
  methods: {
    start() {
      if (this.$route.params) {
        this.data = this.$route.params.detail;
        this.title = this.$route.params.name;
        console.log(this.$route.params.detail.pics);
        this.pics = this.$route.params.detail.pics.map((e, k) => {
          return { ...e, check: false };
        });
      }
    },
    openBigPic(val, key) {
      this.pics[key].check = this.pics[key].check ? false : true;
    }
  }
};
</script>
