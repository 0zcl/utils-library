import Vue from 'vue'

let app1 = new Vue({
    el: '.app',
    data: {
        name: 'TypeScript && Vue'
    },
    template: `<h1>Hello {{ name }}</h1>`
});

import utilsLibrary from '../../src/index'
console.log(utilsLibrary)
console.log(utilsLibrary.randomColor())
console.log(utilsLibrary.randomNum(2, 6))



