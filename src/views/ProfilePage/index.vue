<template>
  <div>
    <div class="upBox" @click="goBack">
      <i class="fas fa-chevron-left"></i>
      <p class="upText">{{$t('up')}}</p>
    </div>

    <div class="pigPic">
      <img :src="data.titlePic" :alt="$t('imgTitle')" />
    </div>
    <div class="textBox">
      <div class="smallTextBox">
        <div class="titleText">{{title}}</div>
        <div v-if="data.url!=='no'">
          <a :href="data.url" class="btn" target="_blank" v-if="data.url">
            <div class="watchBtn">{{$t('clickUrl')}}</div>
          </a>
          <div class="watchBtn" v-else>{{$t('workNotYet')}}</div>
        </div>
      </div>

      <div class="detailText">
        <div class="textIn">{{data.introduce}}</div>

        <div v-if="data.color">
          <div class="useTitle">{{$t('colorTitle')}}</div>
          <div class="use useColor" v-if="data.color.pic.length>0">
            <div v-for="v in data.color.pic" :style="v.style"></div>
          </div>
          <div :class="['use useText',data.color.pic.length==0 &&'useText-no-color']">{{data.color.text}}</div>
        </div>
        
        <div class="useTitle">{{$t('technologyTitle')}}</div>
        <div class="use">
          <ul>
            <li v-for="(v,k) in data.used" :key="k">
              <a :href="v.a" target="_blank" v-if="v.a">{{v.name}}<span>{{v.work}}</span></a>
              <div v-else>{{v.name}}{{v.work}}</div>
            </li>
            <li v-if="data.gitHub">
              <a :href="data.gitHub" target="_blank">github: <span>{{$t('clickUrl')}}</span></a>
            </li>
          </ul>
        </div>

        <div v-if="data.team">
          <div class="useTitle">{{$t('teamTitle')}}</div>
          <div class="use">
            <ul>
              <li v-for="(v,k) in data.team.li" :key="k">{{v.name}}{{v.work}}</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="detailPicBox" v-if="pics.length > 0">
        <div class="detailPicBox-box" v-for="(v,k) in pics" :key="k">
          <img class="pic-small" :src="v.name" :alt="$t('imgWatch')" @click="openBigPic(v,k)" />
          <div class="picBoxForDetail" v-show="v.check">
            <div class="del" @click="openBigPic(v,k)">X</div>
            <img :src="v.big" :alt="$t('imgDetail')" />
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
        console.log(this.$route.params);
        this.pics = this.$route.params.detail.pics?this.$route.params.detail.pics.map((e, k) => {
          return { ...e, check: false };
        }):[]
      }
    },
    openBigPic(val, key) {
      this.pics[key].check = this.pics[key].check ? false : true;
    },
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>
