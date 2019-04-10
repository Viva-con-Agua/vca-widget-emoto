import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import en from '@/lang/en.json'
import de from '@/lang/de.json'
Vue.use(VueI18n)

Vue.config.productionTip = false

const locale = navigator.language
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'en-US': en,
    'de-DE': de,
    'de': de,
    'en': en
  }
})

// Vue.use(ElementUI, {
//  i18n: (key, value) => i18n.t(key, value)
// })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
