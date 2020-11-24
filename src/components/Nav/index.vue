<template>
    <div>
        <div class="leftBox">
            <div class="pic"><img :src="require('@/assets/img/ico.png')" alt="大頭貼"></div>
            <div class="myNameBox">
                <div class="name">{{name.ch}}<span>{{name.en}}</span></div>
                <div :class="['name-detail',v.css]" v-for="v in nameDetail">{{v.text}}</div>
            </div>
            <div class="linkBigBox">
                <div class="linkBigBox-content" v-for="v in content">
                    <i :class="[v.icon]"></i>
                    <p>{{v.text}}</p>
                </div>

                <div class="linkBox" v-for="val in nav" @click="navFun(val)">
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
        { icon: 'far fa-envelope', text: 'flinder410010@gmail.com' },
        { icon: 'fas fa-mobile-alt', text: '0925-752-586' }
      ],
      nav: [
        { ch: '關於我', en: 'About me', click: true },
        { ch: '作品集', en: 'Profolio', click: false }
      ],
      navHan: []
    }
  },
  created () {
    for (let i = 0; i < 3; i++) {
      this.navHan[i] = i
    }
  },
  methods: {
    navFun (val) {
      this.$emit('nav', val)
    }
  }
}
</script>
