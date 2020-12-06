
const state = {
  profile:[
    //
    { name: '拖著拉著', summary: '自動化流程專案，使用者能將要做的事項依照自己需求指定時間和順序執行。', key: 'web', show: true, img: require('@/assets/img/pic10.png'),
     detail: {
        introduce: '從視覺、使用者體驗、前端開發都獨自一人開發的自動化流程專案，因為屬於b2b的專案，所以這邊只有自己前端開發時的版本，資料改裝假資料。',
        titlePic:require('@/assets/img/pic1/titlePic1.png'),
        used: [
          { name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator/XD' },
           { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript/Vue/Vuex' },
            { name: '後端程式開發: ', work: '無' },
             { name: '套件: ', work: 'Bootstrap/diagram-js-minimap/jsplumb/vue-datetim' }],
        pics: [
          { name: require('@/assets/img/pic1/smalllPic1-1.png'),big:require('@/assets/img/pic1/smalllPic1-1.png') },
          { name: require('@/assets/img/pic1/smalllPic1-2.png'),big:require('@/assets/img/pic1/detailPic1-2.png') },
          { name: require('@/assets/img/pic1/smalllPic1-3.png'),big:require('@/assets/img/pic1/detailPic1-3.png') 
        }],

    }},
    //
    { name: '天哪vue3.0出了', summary: '用cdn的方式去體驗看看vue3.0到底改了哪些東西', key: 'test', show: true, img: require('@/assets/img/pic1.png'),
        detail: {
          introduce: '這是一個有一天腦洞大開寫的動物的交友網站，想著讓一個人寂寞在家無法出門的寵物，有一天也可以在家交朋友!',
          titlePic:require('@/assets/img/pic1/titlePic1.png'),
          used: [
            { name: '視覺/介面設計: ', work: 'XD' },
            { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript/Vue3.0(cdn)' },
            { name: '後端程式開發: ', work: '無' },
            { name: '套件', work: '無' }],
          pics: [
            { name: require('@/assets/img/pic1/smalllPic1-1.png'),big:require('@/assets/img/pic1/smalllPic1-1.png') },
            { name: require('@/assets/img/pic1/smalllPic1-2.png'),big:require('@/assets/img/pic1/detailPic1-2.png') },
            { name: require('@/assets/img/pic1/smalllPic1-3.png'),big:require('@/assets/img/pic1/detailPic1-3.png') }
          ],

    }},
    //
    { name: '一個實驗性質的網站', summary: '原本屬於公司網站，後來拿來改東改西實驗各種功能', key: 'web', show: true, img: require('@/assets/img/pic1.png'), detail: {} },
    
    { name: '簡單聊天室', summary: '練習nodejs，練習socketIo，試著做一個小小聊天室', key: 'web', show: true, img: require('@/assets/img/pic1.png'), detail: {} },
    
    { name: 'liteOn', summary: '用react這框架時做一個網頁', key: 'web', show: true, img: require('@/assets/img/pic1.png'),
     detail:{
        introduce: '這是一個有一天腦洞大開寫的動物的交友網站，想著讓一個人寂寞在家無法出門的寵物，有一天也可以在家交朋友!',
        titlePic:require('@/assets/img/pic1/titlePic1.png'),
        used: [{ name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator' }, { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript' }, { name: '後端程式開發: ', work: '無' }, { name: '套件', work: 'Bootstrap/Lightbox' }],
        pics: [{ name: require('@/assets/img/pic1/smalllPic1-1.png'),big:require('@/assets/img/pic1/smalllPic1-1.png') }, { name: require('@/assets/img/pic1/smalllPic1-2.png'),big:require('@/assets/img/pic1/detailPic1-2.png') }, { name: require('@/assets/img/pic1/smalllPic1-3.png'),big:require('@/assets/img/pic1/detailPic1-3.png') }],

    }},
    { name: '動物SINGLE50',
      summary: '一個人寂寞在家無法出門的寵物，是該讓他們在家也可以交朋友!',
      key: 'web',
      show: true,
      img: require('@/assets/img/pic1.png'),
      detail: {
        introduce: '這是一個有一天腦洞大開寫的動物的交友網站，想著讓一個人寂寞在家無法出門的寵物，有一天也可以在家交朋友!',
        titlePic:require('@/assets/img/pic1/titlePic1.png'),
        used: [{ name: '視覺/介面設計: ', work: 'PhotoShop/Illustrator' }, { name: '前端程式開發: ', work: 'Html5/Css3/JavaScript' }, { name: '後端程式開發: ', work: '無' }, { name: '套件', work: 'Bootstrap/Lightbox' }],
        pics: [{ name: require('@/assets/img/pic1/smalllPic1-1.png'),big:require('@/assets/img/pic1/smalllPic1-1.png') }, { name: require('@/assets/img/pic1/smalllPic1-2.png'),big:require('@/assets/img/pic1/detailPic1-2.png') }, { name: require('@/assets/img/pic1/smalllPic1-3.png'),big:require('@/assets/img/pic1/detailPic1-3.png') }],

    }},
    { name: '知音文創', summary: '知名文創品牌，模擬出一個後台網站!', key: 'web', show: true, img: require('@/assets/img/pic2.png'), detail: {} },
    { name: '專業經理人', summary: '實際臨摹一個網站!', key: 'cob', show: true, img: require('@/assets/img/pic3.png'), detail: {} },
    { name: 'GravityDaze', summary: '實際臨摹一個網站!', key: 'cob', show: true, img: require('@/assets/img/pic4.png'), detail: {} },
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
  marketList: state => state.marketList, //取得state裡面的內容

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}