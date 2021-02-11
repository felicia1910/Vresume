<template>
    <div>
      <dropdown :data="turnDropData" @change="changHandler"></dropdown>
      <!-- 篩選按鈕 -->
      <div class="longColorLine-box">
        <div class="longColorLine"></div>
        <div class="filterBox filterBoxClick">
          <div :class="['clickBox',nowClick!==v.key &&'op-0']" v-for="(v,k) in filter" :key="k"></div>
        </div>
        <div class="filterBox">
          <div :class="['filterItem',nowClick!==v.key &&'filterItem-click']" v-for="(v,k) in filter" :key="k" @click="filterFun(v,k)">{{v.name}}</div>
        </div>
      </div>

      <!-- 被顯示 -->
      <div class="allItemBox">
        <div class="ItemBox" v-for="(v,k) in datas.slice(pageStart, pageStart + perPage)" :key="k" v-show="v.show">
          <div class="itemPic" @click="routeFun(v)"><img :src="v.img" alt="截圖"></div>
          <div class="itemTitle">{{v.name}}</div>
          <div class="itemText">{{v.summary}}</div>
        </div>
      </div>
      <!-- 頁數 -->
      <div class="pagination">
        <div :class="['click-page',nowPage===1&amp;&amp;'disable']" @click.prevent="changePage(nowPage-1)">{{$t('up')}}</div>
        <div v-for="n in pageNumber" :class="['number',nowPage === (n) &amp;&amp; 'now-click']" @click.prevent="changePage(n)">{{n}}</div>
        <div :class="['click-page',nowPage===totalPage&amp;&amp;'disable']" @click.prevent="changePage(nowPage+1)">{{$t('down')}}</div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import dropdown from '@/components/Dropdown/index'
export default {
  name: 'profile',
  components: {
    dropdown
  },
  data () {
    return {
      allWorkTmp:null,
      datas: [], // 分頁篩選過
      offset: 4, // 跳多少
      firstPage: 1,
      lastPage: 11,
      totalPage: 0,
      nowPage: 1, // 現在第幾頁
      perPage: 10, // 一頁幾個
      canLook: true,
      turnDropData:[],
      nowClick:'all'
    }
  },
  computed: {
    ...mapGetters('Profile', {
      'allWork':'profile'
    }),
    filter(){ 
        return [
          { name:this.$t('categoryList[0].name'), key: 'all' },
          { name:this.$t('categoryList[1].name'), key: 'web' },
          { name:this.$t('categoryList[2].name'), key: 'cob' },
          { name:this.$t('categoryList[3].name'), key: 'test' },
          { name:this.$t('categoryList[4].name'), key: 'ui' }
        ]
    },
    pageNumber () {
      let arr = []
      if (this.canLook) {
        for (let i = this.firstPage; i <= this.lastPage; i++) { arr.push(i) }
      }
      return arr
    },
    pageStart: function () {
      return (this.nowPage - 1) * this.perPage
    }
  },
  async mounted () {
    this.allWorkTmp=this.$t('profile')//this.allWork
    await this.start()
  },
  watch:{
    '$store.state.lang'(val){
      this.allWorkTmp=this.$t('profile')//this.allWork
      this.nowClick='all'
      this.start ()
    }
  },
  methods: {
    start () {
      this.datas = this.allWorkTmp.filter(e => { return e.show })
      this.turnDropData=this.filter.map((e,k)=>{
        return{...e,text:e.name,value:k}
      })
      this.setInitPage()
    },
    changHandler(val){
      console.log(val)
      this.filterFun(val,val.value)
    },
    // 分頁一開始設定
    setInitPage () {
      let vi = this
      vi.totalPage = Math.ceil(vi.datas.length / vi.perPage)
      if (vi.totalPage > vi.offset * 2 + 1) {
        vi.lastPage = vi.offset * 2 + 1
      } else {
        vi.lastPage = vi.totalPage
      }
    },
    // 分頁
    changePage (page) {
      if (page <= 0 || page > this.totalPage) {
        return
      }
      this.nowPage = page
      if (this.nowPage + this.offset * 2 >= this.lastPage) {
        this.firstPage = this.nowPage - this.offset
        this.lastPage = this.nowPage + this.offset
      }
      // 最後一頁的頁碼設定
      if (this.firstPage > this.totalPage - this.offset * 2) {
        this.firstPage = this.totalPage - this.offset * 2
        this.lastPage = this.totalPage
      }
      // 不要變成負數
      if (this.firstPage < 1) { this.firstPage = 1 };
      // 第一頁的頁碼設定
      if (this.lastPage < this.offset * 2 + 1) { this.lastPage = this.offset * 2 + 1 };
      // 不要超出最大頁碼
      if (this.lastPage > this.totalPage) { this.lastPage = this.totalPage };
    },
    filterFun (val, key) {
      this.nowClick=val.key
      this.allWorkTmp = this.allWorkTmp.map((e, k) => {
        return {
          ...e,
          show: (val.key === 'all') ? true : (e.key === val.key)
        }
      })

      this.start()
    },
    routeFun (val) {
      this.$router.push({ name: 'page', params: { ...val } })
    }
  }
}
</script>
