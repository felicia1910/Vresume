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
          東華大學<span>藝術與設計學系</span><span>( 學士 )</span><span>2015/06/30</span>
          <div class="darkRed">副修小學教育學程</div>
        </div>
      </div>
      <div class="title">自我介紹<span>Special</span></div>
      <div class="mySkill no-grid">
        <p>
          在轉職成為前端工程師之前是個平面設計師，擔任期間覺得純粹的平面設計師對我來說挑戰性不夠，所以在接觸到些許程式語言後決定轉職，在2018年7月到資策會接受完整的課程去學習。
          在這學習過程中，深覺不管是UI/UX還有前端的開發過程都是充滿苦惱，但也帶來相當大的樂趣，可以研究的範圍很廣很深，也不斷的在更新，期許未來在工作上可以不斷的精進自己，與他人的討論合作上迸出新想法，逐步解決問題。<br /><br />
          在資策會上了半年課，結業同時很幸運的直接進到創建雲端公司，因為過往主要重心都在後端，所以我成為這間公司第一個也是唯一一個前端工程師，除了負責設計UI介面之外，UX流程也是和同事討論過後獨自完成，再來切版和與各個後端溝通並做資料串接也是我在這間公司的負責項目。並且因為公司不會限制太多，讓我不管是VUE還是REACT都能有機會在專案中自由選擇使用。累積實戰經驗很快也收穫很多。<br/><br />
          在進到這行的同時也意識到這行的技術跑得相當快，所以每年我也都會安排讀書計畫，近期學習的項目是vue3.0，而在之後也安排了要學習nodejs的後端技術、nuxt、自動化前端測試的讀書計畫，雖然一直追著技術跑有些辛苦，但卻也享受著這份學習後帶來的成就感，我會繼續努力跑下去的。
        </p>
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
      skill: [
        { name: 'Photoshop/ illustrator/ XD', text: '設計科系出生，能夠針對不同需求使用工具。XD繪製使用者介面圖像設計、illustrator 向量圖形、Photoshop 相片後製及平面廣告。', css: '' },
        { name: 'HTML5/ CSS3/ JavaScript', text: '能夠使用 HTML、CSS（RWD) 、 Javascript製作出網頁，看到特殊網站會點開發人員工具去觀摩研究。', css: 'skillColor2' },
        { name: 'Axure/ Zeplin', text: '開始接觸前端後，發現單純的頁面設計是無法和工程師溝通的，運用適合的工具能夠加速工程師知道設計師的需求。', css: 'skillColor3' },
        { name: 'React/Redux/ Node.js/ Vue/ Vuex', text: '了解SPA的方便性，能與後端做資料串接，理解到盡可能地精簡程式碼會讓未來的自己感謝過去的自己。', css: 'skillColor4' }
      ],
      lang: [
        { name: '中文能力', text: null, css: '' },
        { name: '英文能力', text: null, css: 'skillColor6' }
      ]
    }
  },
  methods: {}
}
</script>
