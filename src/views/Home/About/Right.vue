<template>
  <div class="smallRightBox">
    <div class="title titleLicense">技能證照<span>License</span></div>
    <div class="myLicense">
      <ul v-for="v in card">
        <li>{{v.name}}</li>
      </ul>
    </div>

    <div class="title">工作經歷<span>Experience / Works</span></div>
    <div class="myWorks">
      <div v-for="v in work" class="workBox">
        <div :class="['colorBox',v.css]"></div>
        <div class="company-samll-box">
          <div class="company">{{v.name}}<br />{{v.date}}</div>
          <div class="work">{{v.text}}</div>
        </div>
      </div>
    </div>

    <div class="title">聯絡資訊<span>Contact me</span></div>
    <div class="myWorks">
      <div class="pingMe">
        <div class="work">flinder410010@gmail.com</div>
        <div class="work">(09)2575-2586</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutRight',
  components: {

  },
  data () {
    return {
      card:[
        {name:'Microsoft Professional Orientation : Front-End Web Developer'},
        {name:'Advanced CSS'},
        {name:'Asynchronous Programming with Javascript'},
        {name:'Building Functional Prototypes using Node.js'},
        {name:'Introduction to HTML and Javascript'},
        {name:'Building Interactive Prototypes using JavaScript'},
      ],
    }
  },
  computed:{
      work(){
        return [
        {name:this.$t('work[0].name'),date:'2013/07-2013/09',text:this.$t('work[0].text'),css:''},
        {name:this.$t('work[1].name'),date:'2015/12-2017/01',text:this.$t('work[1].text'),css:'colorBox2'},
        {name:this.$t('work[2].name'),date:'2017/03-2018/07',text:this.$t('work[2].text'),css:'colorBox3'},
        {name:this.$t('work[3].name'),date:'2018/12-至今',text:this.$t('work[3].text'),css:'colorBox3'},
      ]
      }
  },
  methods: {}
}
</script>
