import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
Vue.directive('log', {
  inserted(el) {
    el.addEventListener('click', ()=>{
      console.log(el.innerText)
    })
  }
})
Vue.directive('on2', {
  inserted(el, info) {
    const {arg, value} = info
    el.addEventListener(arg, value)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
