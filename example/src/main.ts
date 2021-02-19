import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import utilsLibrary from '../../dist/utils-library.js'

// new Vue({
//   el: '.app',
//   data: {
//     name: 'TypeScript && Vue'
//   },
//   template: '<h1>Hello {{ name }}</h1>'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log('utilsLibrary', utilsLibrary)
// console.log(utilsLibrary.randomColor())
// console.log(utilsLibrary.randomNum(2, 6))
// console.log(utilsLibrary.getBrowserInfo())
// utilsLibrary.setCookie('a', 'a', 0.0001)
// console.log(utilsLibrary.getCookie('zcl'))
// console.log(utilsLibrary.hasOwnProp({ 123: 'zcl', a: 1 }, 'zbl'))
