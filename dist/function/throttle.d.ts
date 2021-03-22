/**
 * @description 节流函数
 * 当持续触发事件时，每隔一段时间，只执行一次事件
 * 适用于`resize`和`scroll`等函数的调用频率
 */
declare function throttle(fn: (...args: any[]) => void, wait: number): () => void;
export default throttle;
