<template>
    <div>
        <i class="fas fa-bars" @click="openrwdShow"></i>
        <div class="leftBox" v-if="rwdShow">
            <div class="pic"><img :src="require('@/assets/img/ico.png')" alt="大頭貼"></div>
            <div class="myNameBox">
                <div class="name">{{name.ch}}<span>{{name.en}}</span></div>
                <div :class="['name-detail',v.css]" v-for="v in nameDetail">{{v.text}}</div>
                <div class="link-box-icon">
                  <a :href="v.text" :class="['linkBigBox-content']" target="_blank" v-for="v in content">
                    <i :class="[v.icon]"></i>
                  </a>
                </div>
                
            </div>
            <div class="linkBigBox">
                <div :class="['linkBox',k==0 &&'linkBox-border']" v-for="(val, k) in nav"  :key="k" @click="navFun(val)">
                    {{val.ch}}<br><span>{{val.en}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NavBox',
  components: {

  },
  data () {
    return {
      name: { ch: '陳欣詩', en: 'Shin Shri Chen' },
      nameDetail: [
        { css: 't-red', text: 'Front-End Developing Learner' },
        { css: '', text: '1993/03/19 Taipei, Taiwan' },
        { css: '', text: '從平面影像設計到網頁設計再到 網路前端製作，喜歡觀察人、喜 歡嘗試不同的東西，偶而繪製些 小插畫，畫些小故事。' }
      ],
      content: [
        { icon: 'far fa-envelope', text: 'mailto:flinder410010@gmail.com' },
        { icon: 'fab fa-github', text: 'https://github.com/felicia1910' }
      ],
      nav: [
        { ch: '關於我', en: 'About me',name:'home' },
        { ch: '作品集', en: 'Profolio',name:'profile' }
      ],
      navHan: [],
      rwdShow:true,
      windowWidth:null,
    }
  },
  created () {
    for (let i = 0; i < 3; i++) {
      this.navHan[i] = i
    }
  },
  mounted(){
    this.watchWidth()
  },
  watch:{
    windowWidth(val){
      if(val>1450 && !this.rwdShow){
        this.rwdShow=true
      }else if(val<=1450){
        this.rwdShow=false
      }
    },
    rwdShow(val){
      console.log('rwd:'+val)
    }
  },
  methods: {
    navFun (val) {
      this.$emit('nav', val.name)
      this.rwdShow=windowWidth<=1450?false:his.rwdShow
    },
    openrwdShow(){
      this.rwdShow=(this.rwdShow)?false:true
    },
    watchWidth(){
      let vi = this;
      vi.windowWidth = window.innerWidth;
      this.rwdShow=(vi.windowWidth>1450)?true:false
      window.onresize = () => {
        vi.windowWidth = window.innerWidth;

      };
    }
  }
}
</script>
