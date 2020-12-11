
const state = {
  profile:[
    //
    { name: '拖著拉著', summary: '自動化流程專案，使用者能將要做的事項依照自己需求指定時間和順序執行。', key: 'web', show: true, img: require('@/assets/img/pic10.png'),
     detail: {
        introduce: '從視覺、使用者體驗、前端開發都獨自一人開發的自動化流程專案，因為屬於b2b的專案，所以這邊只有自己前端開發時的版本，資料改裝假資料。',
        titlePic:require('@/assets/img/pic10/titlePic1.png'),
        url:'https://felicia1910.github.io/flowCartViewPage/',
        gitHub:null,
        used: [
          { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator/XD' },
          { name: '前端程式開發: ', work: 'Vue/Vuex/SCSS' },
          { name: '後端程式開發: ', work: '無' },
          { name: '套件: ', work: 'Bootstrap/diagram-js-minimap/jsplumb/vue-datetim' }],
        pics: [
          { name: require('@/assets/img/pic10/smalllPic1-1.png'),big:require('@/assets/img/pic10/smalllPic1-1.png') },
          { name: require('@/assets/img/pic10/smalllPic1-2.png'),big:require('@/assets/img/pic10/detailPic1-2.png') },
          { name: require('@/assets/img/pic10/smalllPic1-3.png'),big:require('@/assets/img/pic10/detailPic1-3.png') 
        }],
        team:null,
        color:null,
    }},
    //
    { name: '天哪vue3.0出了', summary: '用cdn的方式去體驗看看vue3.0到底改了哪些東西', key: 'test', show: true, img: require('@/assets/img/notYet.png'),
        detail: {
          introduce: '公司專案之一，在還未串接api之前的時候。改用VUE3.0的主因是因為之後串接api的資料會相當龐大，vue2的dom渲染會無法負荷，所以改用vue3.0，效能改善非常多。',
          titlePic:require('@/assets/img/pic13/titlePic1.png'),
          url:'',
          gitHub:'',
          used: [
            { name: '視覺/介面設計: ', work: 'XD' },
            { name: '前端程式開發: ', work: 'Vue3.0(cdn)' },
            { name: '後端程式開發: ', work: '無' },
            { name: '套件: ', work: '無' }],
          pics: [],
          team:null,
          color:null,
    }},
    //
    { name: '台灣創建雲端', summary: '原本屬於公司網站，後來拿來改東改西實驗各種功能', key: 'web', show: true, img: require('@/assets/img/pic11.png'),
      detail: {
          introduce: '台灣創建雲端原本要上線的公司網站，從UI到切版都是由我一人完成，後來由香港團隊接手去製作官網，被未正式上線。',
          titlePic:require('@/assets/img/pic1/titlePic1.png'),
          url:'https://cnfofficialuat.azurewebsites.net/',
          gitHub:null,
          used: [
            { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator/XD' },
            { name: '前端程式開發: ', work: 'Vue/Vuex/SCSS' },
            { name: '後端程式開發: ', work: '無' },
            { name: '套件: ', work: 'Bootstrap/vue2-google-maps/vue-typer/vue-particles' }],
          pics: [
            { name: require('@/assets/img/pic11/smalllPic1-1.png'),big:require('@/assets/img/pic11/smalllPic1-1.png') },
            { name: require('@/assets/img/pic11/smalllPic1-2.png'),big:require('@/assets/img/pic11/detailPic1-2.png') },
            { name: require('@/assets/img/pic11/smalllPic1-3.png'),big:require('@/assets/img/pic11/detailPic1-3.png') 
          }],
          team:null,
          color:null,
        }

    },
    //
    { name: '簡單聊天室', summary: '練習nodejs，練習socketIo，試著做一個小小聊天室', key: 'test', show: true, img: require('@/assets/img/notYet.png'),
      detail: {
        introduce: '純粹的練習。',
        titlePic:require('@/assets/img/pic13/titlePic1.png'),
        url:'',
        gitHub:'',
        used: [
          { name: '視覺/介面設計: ', work: 'XD' },
          { name: '前端程式開發: ', work: 'html/Css' },
          { name: '後端程式開發: ', work: 'nodejs' },
          { name: '套件: ', work: 'socketIo' }],
        pics: [],
        team:null,
        color:null,
      }
    },
    //
    { name: 'liteOn', summary: '用react這框架時做一個網頁', key: 'web', show: true, img: require('@/assets/img/pic12.png'),
     detail:{
        introduce: '公司專案之一，主要給使用者方便看項目的執行內容，但這是將api拔除後的版本，目前內容都是hardcode',
        titlePic:require('@/assets/img/pic12/titlePic1.png'),
        url:'https://felicia1910.github.io/liteon-view/',
        gitHub:'https://github.com/felicia1910/liteon-view',
        used: [
          { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator' },
          { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript/SCSS' },
          { name: '後端程式開發: ', work: '無' },
          { name: '套件: ', work: 'Bootstrap/Lightbox' }
        ],
        pics: [
          { name: require('@/assets/img/pic12/smalllPic1-1.png'),big:require('@/assets/img/pic12/smalllPic1-1.png') },
           { name: require('@/assets/img/pic12/smalllPic1-2.png'),big:require('@/assets/img/pic12/detailPic1-2.png') },
            { name: require('@/assets/img/pic12/smalllPic1-3.png'),big:require('@/assets/img/pic12/detailPic1-3.png') }
        ],
        team:null,
        color:null,
    }},
    //
    { name: '動物SINGLE50',summary: '一個人寂寞在家無法出門的寵物，是該讓他們在家也可以交朋友!',key: 'web',show: true,
      img: require('@/assets/img/pic1.png'),
      detail: {
        introduce: '這是一個有一天腦洞大開寫的動物的交友網站，想著讓一個人寂寞在家無法出門的寵物，有一天也可以在家交朋友!',
        titlePic:require('@/assets/img/pic1/titlePic1.png'),
        url:'https://felicia1910.github.io/personal_practice/index.html',
        gitHub:'https://github.com/felicia1910/personal_practice',
        used: [
          { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator' },
          { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript' },
          { name: '後端程式開發: ', work: '無' },
          { name: '套件: ', work: 'Bootstrap/Lightbox' }],
        pics: [
          { name: require('@/assets/img/pic1/smalllPic1-1.png'),big:require('@/assets/img/pic1/smalllPic1-1.png') },
          { name: require('@/assets/img/pic1/smalllPic1-2.png'),big:require('@/assets/img/pic1/detailPic1-2.png') },
          { name: require('@/assets/img/pic1/smalllPic1-3.png'),big:require('@/assets/img/pic1/detailPic1-3.png') }
        ],
        team:null,
        color:null,
    }},
    { name: '知音文創', summary: '知名文創品牌，模擬出一個後台網站!', key: 'web', show: true, img: require('@/assets/img/pic2.png'),
      detail: {
        introduce: '(團隊專案)以原本就存在的知音文創的網站作原型，我們改變了網站的主色系和大部分的網路地圖， 加入了可以讓使用者成為會員並在知音文創上購買東西的功能外，為了可以增加與使用者 的互動性和親密性，我們也加入了桌面佈置和客製音樂鈴的功能，目的是想讓使用者在使 用我們的網站時可以對我們的網站有更深刻的記憶連結。',
        titlePic:require('@/assets/img/pic2/titlePic1.png'),
        url:'https://felicia1910.github.io/personal_practice/index.html',
        gitHub:'https://github.com/felicia1910/personal_practice',
        used: [
          { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator/Zeplin' },
          { name: '前端程式開發: ', work: 'React/SCSS' },
          { name: '後端程式開發: ', work: 'PHP/MySQL' },
        ],
        pics: [
          { name: require('@/assets/img/pic2/smalllPic1-1.png'),big:require('@/assets/img/pic2/smalllPic1-1.png') },
          { name: require('@/assets/img/pic2/smalllPic1-2.png'),big:require('@/assets/img/pic2/detailPic1-2.png') },
          { name: require('@/assets/img/pic2/smalllPic1-3.png'),big:require('@/assets/img/pic2/detailPic1-3.png') },
          { name: require('@/assets/img/pic2/smalllPic1-4.png'),big:require('@/assets/img/pic2/smalllPic1-4.png') },
          { name: require('@/assets/img/pic2/smalllPic1-5.png'),big:require('@/assets/img/pic2/detailPic1-5.png') },
          { name: require('@/assets/img/pic2/smalllPic1-6.png'),big:require('@/assets/img/pic1/detailPic1-6.png') },
        ],
        team:{title:'團隊負責事項',
          li:[
            { name: '視覺/介面設計: ', work: '首頁/關於知音/最新消息/玩玩知音/會員登入註冊頁面' },
            { name: '前端程式開發: ', work: ' 首頁/關於知音/玩玩知音-客製音樂鈴頁面與功能製作/銷售通路/聯絡我們' },
            { name: '後端程式開發: ', work: '後端資料庫及API建置' },
          ]},
        color:{title:'顏色配置',pic:require('@/assets/img/pic2/color.png'),text:'>色彩可以引發情緒、產生聯想，我們網站的色彩主要以這四種顏色為主，依序是為襯托其他顏色的低調白、抹茶綠、寧靜灰與最具代表此網站的主體色-小丑魚橘。 選擇小丑魚橘是以採用知音文創最具商標性的木製商品來當原型，接近木製質感但又不失可愛感，再以抹茶綠這個與小丑魚橘相差兩個色階的顏色當主配色去拉扯小丑魚橘的熱度，讓整個網站充滿趣味但不至於讓人疲乏。'},
      }
    },
    { name: '專業經理人', summary: '實際臨摹一個網站!', key: 'cob', show: true, img: require('@/assets/img/pic3.png'),
     detail: {
        introduce: '從臨摹他人的網站開始踏進前端的領域。',
        titlePic:require('@/assets/img/pic3/titlePic.png'),
        url:'https://felicia1910.github.io/imitateSmallWeb/',
        gitHub:null,
        used: [
          { name: '臨摹網站： ', work: '經理人商學院',a:'https://edm.managertoday.com.tw/lead/?_ga=2.61159720.587748734.1544692507-1192771633.1532401977' },
          { name: '前端程式開發: ', work: 'Html5/Css3' },
          { name: '後端程式開發: ', work: '無' }],
        pics: null,
        team:null,
        color:null,
     } 
    },
    { name: 'GravityDaze', summary: '實際臨摹一個網站!', key: 'cob', show: true, img: require('@/assets/img/pic4.png'),
      detail: {
        introduce: '從臨摹他人的網站開始踏進前端的領域。',
        titlePic:require('@/assets/img/pic4/titlePic.png'),
        url:'https://felicia1910.github.io/ps4girl/',
        gitHub:null,
        used: [
          { name: '臨摹網站： ', work: 'GravityDaze',a:'https://www.jp.playstation.com/scej/title/gravitydaze/' },
          { name: '前端程式開發: ', work: 'Html5/Css3' },
          { name: '後端程式開發: ', work: '無' }],
        pics: null,
        team:null,
        color:null,
      }  
    },
    { name: 'livetools', summary: '實際臨摹一個網站!', key: 'cob', show: true, img: require('@/assets/img/pic5.png'), detail: {} },
    { name: '天氣盒子', summary: '用CodePen實作一個小頁面', key: 'test', show: true, img: require('@/assets/img/pic6.png'), detail: {} },
    { name: '模擬一支手機', summary: '用CodePen實作一個小頁面', key: 'test', show: true, img: require('@/assets/img/pic7.png'), detail: {} },
    { name: 'App音樂平台設計', summary: '平面設計，設計一個app頁面', key: 'ui', show: true, img: require('@/assets/img/pic8.png'), detail: {} },
    { name: '平面設計整合', summary: '平面設計各類細項整理', key: 'ui', show: true, img: require('@/assets/img/pic9.png'), detail: {} }
  ]
}

const actions = {

}

const mutations = {

}

const getters = {
  profile: state => state.profile, //取得state裡面的內容

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}