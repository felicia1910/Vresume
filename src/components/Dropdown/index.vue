<template>
  <div class="drop">
    <label class="labelStyle">分類:</label>
    <div class="dropdown">
      <input
        class="dropdown-input"
        @focus="showOptions()"
        @blur="exit()"
        v-model="text"
        autocomplete="off"
      />
      <i class="fas fa-sort-down"></i>
      <div class="dropdown-content" v-show="optionsShown">
        <a
          v-for="(value,key) in data"
          :key="key"
          class="dropdown-item"
          href="javascript:;"
          @mousedown="changeHandler(value)"
        >{{value.text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: {
    data: {}
  },
  data() {
    return {
      text: "",
      optionsShown:false
    };
  },
  methods:{
    //點擊選項的反應
    changeHandler(val) {
      this.text = val.text;
      this.$emit("change",val);
    },
    //點擊input的反應
    showOptions() {
      this.optionsShown = true; //show下拉
    },
    //離開input
    exit() {
      this.optionsShown = false; //hide下拉
    }
  }
};
</script>
