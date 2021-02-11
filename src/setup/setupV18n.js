import Vue from 'vue'
import VueI18n from 'vue-i18n'  // 引入 Vue I18n
import ch from '@/i18n/ch'      // 存放中文語系檔
import en from '@/i18n/en'      // 存放英文語系檔
import store from '@/store'

Vue.use(VueI18n)

// 預設使用的語系
let locale = ch;

//檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem('footmark-lang')) {
    locale = localStorage.getItem('footmark-lang');
    store.commit('setLang', locale);
  } else {
    store.commit('setLang', locale);
}

const i18n = new VueI18n({
    locale: locale,
    messages: {
      'ch': ch,
      'en': en
    }
  });

export default i18n;

