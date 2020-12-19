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
      work:[
        {name:'千康股份有限公司',date:'2013/07-2013/09',text:'擔任短期的美編設計(工讀)',css:''},
        {name:'新埔國民小學,',date:'2015/12-2017/01',text:'擔任各科代課老師、課後班老師',css:'colorBox2'},
        {name:'歡樂購股份有限公司,',date:'2017/03-2018/07',text:'在電商平台擔任美編設計，為大量商品後製和設計banner等，期間因為上 架需要接觸後台而有接觸程式語言， 對程式語言產生興趣，自學了半年後與同事聊過許久後決定到資策會學習更完整的前端技術。',css:'colorBox3'},
        {name:'創建雲端股份有限公司,',date:'2018/12-至今',text:'在與微軟合作的新創公司擔任前端工程師，主要使用前端框架vue.js，串聯後端做好的api，做到前後端分離。期間因為公司需求的緣故，也有使用AdobeXD製作app使用者頁介面。',css:'colorBox3'},
      ]
    }
  },
  methods: {}
}
</script>
