<template>
  <div class="body">
    <!-- //自我介紹 -->
    <nav-box @nav="nav"></nav-box>
    <!-- //右邊 -->
    <div class="rightBox">
        <div class="p">建議使用 Chrome 瀏覽器 1450 x 720以上 ，以確保最佳瀏覽效果</div>
        <div class="whiteBox">
          <about v-if="id"></about>
          <profile v-else></profile>
        </div>
        <div class="p pDown">建議使用 Chrome 瀏覽器 1450 x 720以上 ，以確保最佳瀏覽效果</div>
    </div>
  </div>
</template>

<script>
import NavBox from '@/components/Nav/index.vue'
import About from './About/index.vue'
import Profile from './Profile/index.vue'

export default {
  name: 'home',
  components: {
    NavBox,
    About,
    Profile
  },
  data () {
    return {
      id:true
    }
  },
  methods: {
    nav(val){
      this.id=val.click
    }
  }
}
</script>
