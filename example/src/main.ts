import Vue from 'vue'
import App from './App'
import router from './router/index'

// import utilsLibrary from '../../dist/utils-library.js'
import utilsLibrary from '../../src/index'

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

const randomNum = utilsLibrary.randomColor()
console.log('utilsLibrary', utilsLibrary)
console.log(randomNum)
console.log(utilsLibrary.randomNum(2, 6))
console.log(utilsLibrary.getBrowserInfo())
utilsLibrary.setCookie('zcl', randomNum)
console.log(utilsLibrary.getCookie('zcl'))
console.log(utilsLibrary.hasOwnProp({ 123: 'zcl', a: 1 }, 'zbl'))
