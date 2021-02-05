/**
 * ```
 * utilsLibrary.setCookie('a', 'a', 0.0001)
 * ```
 * @desc  设置Cookie
 * @param {String} name cookie的key
 * @param {String} value cookie的value
 * @param {Number} days cookie的有效期(单位：天)
 */
function setCookie(name: string, value: string, days: number): void {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + value + ';expires=' + date
}

export default setCookie
