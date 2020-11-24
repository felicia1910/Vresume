<template>
  <fragment>
    <!-- //自我介紹 -->
    <div class="body">
      <nav-box @nav="nav"></nav-box>
      <!-- //右邊 -->
      <div class="rightBox">
        <div class="p">建議使用 Chrome 瀏覽器 1450 x 720以上 ，以確保最佳瀏覽效果</div>
        <div class="whiteBox">
          <router-view />
        </div>
        <div class="p pDown">建議使用 Chrome 瀏覽器 1450 x 720以上 ，以確保最佳瀏覽效果</div>
      </div>
    </div>
  </fragment>
</template>

<script>
import NavBox from "@/components/Nav/index.vue";
export default {
  name: "App",
  components: {
    NavBox
  },
  data() {
    return {
      id: true
    };
  },
  methods: {
    nav(val) {
      if(this.id!==val.click){
        this.id = val.click;
        if(val.click){
          this.$router.push({ name: 'home' })
        }else{
          this.$router.push({ name: 'profile' })
        }
      }
    }
  }
};
</script>
