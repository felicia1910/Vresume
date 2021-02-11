<template>
    <div class="smallLeftBox">

      <div class="title">專業技能<span>Skill</span></div>
      <div class="mySkill">
        <div class="skillBox"  v-for="v in skill">
          <h4>{{v.name}}</h4>
          <div class="skillLine"><div :class="['skillColor',v.css]"></div></div>
          <p>{{v.text}}</p>
        </div>
      </div>

      <div class="title">語言能力<span>Language ability</span></div>
      <div class="mySkill">
        <div class="skillBox"  v-for="v in lang">
          <h4>{{v.name}}</h4>
          <div class="skillLine"><div :class="['skillColor',v.css]"></div></div>
        </div>
      </div>

      <div class="title">教育程度<span>Education</span></div>
      <div class="mySkill no-grid">
        <div class="eduText">
          {{$t('scholl.name')}}<span>{{$t('scholl.major')}}</span><span>( {{$t('scholl.high')}} )</span><span>2015/06/30</span>
          <div class="darkRed">{{$t('scholl.miror')}}</div>
        </div>
      </div>
      <div class="title">自我介紹<span>Self introduction</span></div>
      <div class="mySkill no-grid">
        <p v-html="$t('introduction')"></p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'AboutLeft',
  components: {
  },
  data () {
    return {
    }
  },
  computed:{
      skill(){ 
        return [
          { name: 'Photoshop/ illustrator/ XD', text:this.$t('skill.ui'), css: '' },
          { name: 'HTML5/ CSS3/ JavaScript', text: this.$t('skill.dom'), css: 'skillColor2' },
          { name: 'Axure/ Zeplin', text: this.$t('skill.ux'), css: 'skillColor3' },
          { name: 'React/Redux/ Node.js/ Vue/ Vuex', text:this.$t('skill.js'), css: 'skillColor4' }
        ]
      },
      lang(){ 
        return [
          { name: this.$t('lang.ch'), text: null, css: '' },
          { name: this.$t('lang.en'), text: null, css: 'skillColor6' }
        ]
      }
  },
  methods: {}
}
</script>
