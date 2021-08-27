import { IntervalTimeFormat } from '../../types'

/**
 * ```
 * utilsLibrary.intervalTime(1614666607019, 1630056332000) // {h: 4274, m: 55, s: 25}
 * utilsLibrary.intervalTime(1630056332000, new Date()) // {h: 0, m: 24, s: "04"}
 * utilsLibrary.intervalTime(null, new Date()) // {}
 * ```
 * @param {Date | Number} beginTime 日期 | 时间戳
 * @param {Date | Number} endTime 日期 | 时间戳
 * @returns {IntervalTimeFormat}
 */
function intervalTime(beginTime: Date | number, endTime: Date | number): IntervalTimeFormat {
  const obj: IntervalTimeFormat = {}
  if (!beginTime || !endTime) return obj
  beginTime = typeof beginTime !== 'number' ? new Date(beginTime).getTime() : beginTime
  endTime = typeof endTime !== 'number' ? new Date(endTime).getTime() : endTime
  const intervalTime = endTime - beginTime
  if (intervalTime) {
    const second1 = intervalTime % (3600 * 1000) // 相差小时后剩余的毫秒数
    const second2 = second1 % (60 * 1000) // 相差分钟后剩余的毫秒数
    obj.h = Math.floor(intervalTime / (3600 * 1000)) // 相差小时数
    obj.m = Math.floor(second1 / (60 * 1000)) // 相差分钟
    obj.m = obj.m < 10 ? `0${obj.m}` : obj.m
    obj.s = Math.round(second2 / 1000)
    obj.s = obj.s < 10 ? `0${obj.s}` : obj.s
  }
  return obj
}

export default intervalTime
