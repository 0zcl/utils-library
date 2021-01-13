import Vue from 'vue'

import utilsLibrary from '../../src/index'

const app1 = new Vue({
  el: '.app',
  data: {
    name: 'TypeScript && Vue'
  },
  template: '<h1>Hello {{ name }}</h1>'
})
console.log(utilsLibrary)
console.log(utilsLibrary.randomColor())
console.log(utilsLibrary.randomNum(2, 6))
console.log(utilsLibrary.getBrowserInfo())
utilsLibrary.setCookie('a', 'a', 0.0001)
console.log(utilsLibrary.getCookie('zcl'))
// utilsLibrary.removeCookie('a')
