/**
 * ```
 * utilsLibrary.formatPassTime(1614666607019) // 8分钟前
 * ```
 * @description 格式化${startTime}距现在的已过时间
 * @param {Number} startTime
 * @returns {String} [x年前 | x个月前 | x天前 | x小时前 | x分钟前 | 刚刚]
 */
function formatPassTime(startTime: number): string {
  const currentTime = new Date().getTime()
  const time: number = currentTime - startTime
  const day = Math.floor(time / (1000 * 60 * 60 * 24))
  const hour = Math.floor(time / (1000 * 60 * 60))
  const min = Math.floor(time / (1000 * 60))
  const month = Math.floor(day / 30)
  const year = Math.floor(month / 12)
  if (year) return year + '年前'
  if (month) return month + '个月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  else return '刚刚'
}

export default formatPassTime
