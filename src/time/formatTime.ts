interface Format {
  y: number,
  M: number,
  d: number,
  h: number,
  i: number,
  s: number,
  a: number
}
/**
 * ```
 * utilsLibrary.formatTime(1614666607019, 'yyyy.MM.dd') // 2021.03.02
 * ```
 * @param {Date | Number} date 日期 | 时间戳
 * @param {String} fmt 格式
 * @returns {String}
 */
function formatTime(date: Date | number, fmt: string = 'yyyy-MM-dd'): string {
  if (!date) {
    return ''
  } else if (typeof date === 'number') {
    date = new Date(date)
  }
  const formatObj: Format = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return fmt.replace(/(y|M|d|h|i|s|a)+/g, (result: string, key: keyof Format): string => {
    const value: number = formatObj[key]
    console.log(key, value)
    if (key === 'a' && value !== 0) return ['一', '二', '三', '四', '五', '六'][value - 1]
    if (key === 'a' && value === 0) return ['日'][value]
    return result.length > 0 && value < 10 ? '0' + value : String(value)
  })
}

export default formatTime
