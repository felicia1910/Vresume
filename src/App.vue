<template>
  <fragment>
    <!-- 自我介紹 -->
    <div class="body">
      <nav-box @nav="nav"></nav-box>
      <!-- 右邊 -->
      <div class="rightBox">
            <!-- 切換語系 UI -->
            <div class="label-box">
              <label
                v-for="(item, index) in optionsLang"
                v-bind:key="index"
                :class="[index==optionsLang.length-1 && 'label-left']"
              > 
                <input type="radio" v-model="$store.state.lang" :value="item.value" v-on:change="setLang(item.value)"> {{ item.text }}
              </label>
            </div>
        <div class="whiteBox">
          <router-view />
        </div>
        <div class="p pDown">{{ $t('alert')}}</div>
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
      id: true,
      optionsLang: [
        { text: '中文', value: 'ch' },
        { text: 'English', value: 'en' }
      ],
    };
  },
  methods: {
    nav(val) {
      this.$router.push({ name: val })
    },
    // 儲存切換的語系
    setLang (value) {
      this.$store.commit('setLang', value);
      this.$i18n.locale = value;
      localStorage.setItem('footmark-lang', value);
    }
  }
};
</script>
