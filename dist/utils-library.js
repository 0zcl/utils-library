!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.utilsLibrary=t():e.utilsLibrary=t()}(self,(function(){return(()=>{var e={974:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t,r={};return r.type=(e="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",t="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"",/iphone/i.test(e)||/ipad/i.test(e)||/ipod/i.test(e)?"ios":/android/i.test(e)?"android":/win/i.test(t)&&/phone/i.test(e)?"windowsPhone":/mac/i.test(t)?"MacOSX":/win/i.test(t)?"windows":/linux/i.test(t)?"linux":void 0),r}},970:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=document.cookie.replace(/\s/g,"").split(";"),r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===e)return decodeURIComponent(o[1])}return""}},808:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(587));t.default=function(e){n.default(e,"1",-1)}},587:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),document.cookie=e+"="+t+";expires="+o}},34:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var o;return void 0===r&&(r=!1),function(){for(var n=this,i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];if(o&&clearTimeout(o),r){var s=!o;o=setTimeout((function(){o=null}),t),s&&e.apply(this,i)}else o=setTimeout((function(){e.apply(n,i)}),t)}}},758:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r;return function(){for(var o=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];r||(r=setTimeout((function(){r=null,e.apply(o,n)}),t))}}},465:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n={};(o=r(99)).keys().forEach((function(e){if("./index.ts"!==e){var t=(e.split("/").pop()||"").split(".")[0];n[t]=o(e).default}})),t.default=n},841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return!(!e||!e.hasOwnProperty)&&Object.prototype.hasOwnProperty.call(e,t)}},476:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}},600:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},542:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(new Date).getTime()-e,r=Math.floor(t/864e5),o=Math.floor(t/36e5),n=Math.floor(t/6e4),i=Math.floor(r/30),u=Math.floor(i/12);return u?u+"年前":i?i+"个月前":r?r+"天前":o?o+"小时前":n?n+"分钟前":"刚刚"}},693:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0===t&&(t="yyyy-MM-dd"),!e)return"";"number"==typeof e&&(e=new Date(e));var r={y:e.getFullYear(),M:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()};return t.replace(/(y|M|d|h|i|s|a)+/g,(function(e,t){var o=r[t];return console.log(t,o),"a"===t&&0!==o?["一","二","三","四","五","六"][o-1]:"a"===t&&0===o?["日"][o]:e.length>0&&o<10?"0"+o:String(o)}))}},352:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0===e&&(e=window.location.href),-1===e.indexOf("?"))return{};var t="?"===e[0]?e.substr(1):e.substring(e.lastIndexOf("?")+1);if(""===t)return{};for(var r=t.split("&"),o={},n=0,i=r.length;n<i;n++){var u=r[n].split("=");o[decodeURIComponent(u[0])]=decodeURIComponent(u[1]||"")}return o}},99:(e,t,r)=>{var o={"./browser/getBrowserInfo.ts":974,"./browser/getCookie.ts":970,"./browser/removeCookie.ts":808,"./browser/setCookie.ts":587,"./function/debounce.ts":34,"./function/throttle.ts":758,"./index.ts":465,"./object/hasOwnProp.ts":841,"./random/randomColor.ts":476,"./random/randomNum.ts":600,"./time/formatPassTime.ts":542,"./time/formatTime.ts":693,"./url/parseQueryString.ts":352};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=99}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}return r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(465)})().default}));