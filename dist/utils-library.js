!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define([], t) : typeof exports === 'object' ? exports.utilsLibrary = t() : e.utilsLibrary = t()
}(self, function () {
  return (() => {
    const e = {
      974: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function () {
          let e; let t; const r = {}
          return r.type = (e = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '', t = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '', /iphone/i.test(e) || /ipad/i.test(e) || /ipod/i.test(e) ? 'ios' : /android/i.test(e) ? 'android' : /win/i.test(t) && /phone/i.test(e) ? 'windowsPhone' : /mac/i.test(t) ? 'MacOSX' : /win/i.test(t) ? 'windows' : /linux/i.test(t) ? 'linux' : void 0), r
        }
      },
      970: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function (e) {
          for (let t = document.cookie.replace(/\s/g, '').split(';'), r = 0; r < t.length; r++) {
            const o = t[r].split('=')
            if (o[0] === e) return decodeURIComponent(o[1])
          }
          return ''
        }
      },
      808: function (e, t, r) {
        'use strict'
        const o = this && this.__importDefault || function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e
              }
        }
        Object.defineProperty(t, '__esModule', {
          value: !0
        })
        const n = o(r(587))
        t.default = function (e) {
          n.default(e, '1', -1)
        }
      },
      587: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function (e, t, r) {
          const o = new Date()
          o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), document.cookie = e + '=' + t + ';expires=' + o
        }
      },
      465: (e, t, r) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        })
        let o; const n = {};
        (o = r(99)).keys().forEach(function (e) {
          if (e !== './index.ts') {
            const t = (e.split('/').pop() || '').split('.')[0]
            n[t] = o(e).default
          }
        }), t.default = n
      },
      841: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function (e, t) {
          return !(!e || !e.hasOwnProperty) && Object.prototype.hasOwnProperty.call(e, t)
        }
      },
      476: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function () {
          return '#' + ('00000' + (16777216 * Math.random() << 0).toString(16)).slice(-6)
        }
      },
      600: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', {
          value: !0
        }), t.default = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e
        }
      },
      99: (e, t, r) => {
        const o = {
          './browser/getBrowserInfo.ts': 974,
          './browser/getCookie.ts': 970,
          './browser/removeCookie.ts': 808,
          './browser/setCookie.ts': 587,
          './index.ts': 465,
          './object/hasOwnProp.ts': 841,
          './random/randomColor.ts': 476,
          './random/randomNum.ts': 600
        }

        function n(e) {
          const t = i(e)
          return r(t)
        }

        function i(e) {
          if (!r.o(o, e)) {
            const t = new Error("Cannot find module '" + e + "'")
            throw t.code = 'MODULE_NOT_FOUND', t
          }
          return o[e]
        }
        n.keys = function () {
          return Object.keys(o)
        }, n.resolve = i, e.exports = n, n.id = 99
      }
    }
    const t = {}

    function r(o) {
      if (t[o]) return t[o].exports
      const n = t[o] = {
        exports: {}
      }
      return e[o].call(n.exports, n, n.exports, r), n.exports
    }
    return r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r(465)
  })().default
}))
