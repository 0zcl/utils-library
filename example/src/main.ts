import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// import utilsLibrary from '../../dist/utils-library.js'
import utilsLibrary from '../../src/index'

// new Vue({
//   el: '#app',
//   data: {
//     name: 'TypeScript && Vue'
//   },
//   template: '<h1>Hello {{ name }}</h1>'
// })
Vue.prototype.utilsLibrary = utilsLibrary

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
console.log(utilsLibrary.formatPassTime(1614666607019))
console.log(utilsLibrary.formatTime(1614666607019, 'yyyy.MM.dd.a'))
console.log(utilsLibrary.formatTime(1614666607019, 'yyyy-MM-dd HH:mm:ss'))
console.log(utilsLibrary.parseQueryString())
console.log(utilsLibrary.filterObj({ a: 1, b: 2, c: 'c', d: { a: 1 }, e: [1, 2, 3], f: 'f' }, ['a', 'd', 'e', 'g'], { nullType: '' }))
console.log(utilsLibrary.filterObj({ a: 1, b: 2, c: 'c', d: { a: 1 }, e: [1, 2, 3], f: 'f' }, ['a', 'd', 'e', 'g'], { nullType: undefined }))
console.log(utilsLibrary.intervalTime(1614666607019, 1630056332000))
console.log(utilsLibrary.intervalTime(1630056332000, new Date()))
console.log(utilsLibrary.intervalTime(null, new Date()))
console.log(utilsLibrary.equal(0.1 + 0.2, 0.3))
console.log('getImgSize', utilsLibrary.getImgSize('//media-oss.61info.cn/homework_review/teacher_comment/image/cfd43d53-eb85-4e60-806e-a4ff27bb60b9.png').then(res => {
  console.log('res', res)
}))
utilsLibrary.downloadFunc('{hello: "world"}', 'zcl.txt')
console.log(utilsLibrary.loadImage('//media-oss.61info.cn/homework_review/teacher_comment/image/cfd43d53-eb85-4e60-806e-a4ff27bb60b9.png').then(res => {
  console.log('res', res)
}))
