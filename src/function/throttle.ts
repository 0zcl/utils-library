/**
 * @description 节流函数
 * 当持续触发事件时，每隔一段时间，只执行一次事件
 * 适用于`resize`和`scroll`等函数的调用频率
 */
function throttle(fn: (...args: any[]) => void, wait: number): () => void {
  let timeout: any
  return function(this: any, ...args: any[]) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, args)
      }, wait)
    }
  }
}

export default throttle
