<template>
    <div>
      <!-- 篩選按鈕 -->
      <div class="longColorLine"></div>
      <div class="filterBox filterBoxClick">
        <div :class="['clickBox',!v.click &&'op-0']" v-for="(v,k) in filter" :key="k"></div>
      </div>
      <div class="filterBox">
        <div :class="['filterItem',,v.click &&'filterItem-click']" v-for="(v,k) in filter" :key="k" @click="filterFun(v,k)">{{v.name}}</div>
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
        <div :class="['click-page',nowPage===1&amp;&amp;'disable']" @click.prevent="changePage(nowPage-1)">上一頁</div>
        <div v-for="n in pageNumber" :class="['number',nowPage === (n) &amp;&amp; 'now-click']" @click.prevent="changePage(n)">{{n}}</div>
        <div :class="['click-page',nowPage===totalPage&amp;&amp;'disable']" @click.prevent="changePage(nowPage+1)">下一頁</div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'profile',
  components: {
  },
  data () {
    return {
      filter: [
        { name: '全部', click: true, key: 'all' },
        { name: '網頁設計', click: false, key: 'web' },
        { name: '臨摹網站', click: false, key: 'cob' },
        { name: '功能實作', click: false, key: 'test' },
        { name: '平面設計', click: false, key: 'ui' }
      ],
      datas: [], // 分頁篩選過
      offset: 4, // 跳多少
      firstPage: 1,
      lastPage: 11,
      totalPage: 0,
      nowPage: 1, // 現在第幾頁
      perPage: 10, // 一頁幾個
      canLook: true
    }
  },
  computed: {
    ...mapGetters('Profile', {
      'allWork':'profile'
    }),
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
    await this.start()
  },
  methods: {
    start () {
      this.datas = this.allWork.filter(e => { return e.show })
      this.setInitPage()
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
      console.log(val)
      this.filter = this.filter.map((e, k) => {
        return { ...e, click: k == key? true:false  }
      })
      this.allWork = this.allWork.map((e, k) => {
        return {
          ...e,
          show: (val.key === 'all') ? true : (e.key === val.key)
        }
      })
      console.log(this.filter)
      this.$forceUpdate()
      this.start(val)
    },
    routeFun (val) {
      this.$router.push({ name: 'page', params: { ...val } })
    }
  }
}
</script>
