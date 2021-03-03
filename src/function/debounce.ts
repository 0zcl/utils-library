/**
 * @description 防抖函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * 原理：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，
 * 总之，就是要等你触发完事件 n 秒内不再触发事件。
 */
function debounce(fn: (...args: any[]) => void, wait: number, immediate: boolean = false): () => void {
  let timeout: any
  return function(this: any, ...args: any[]) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow: boolean = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) fn.apply(this, args)
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}

export default debounce
