// /**
//  *
//  * @desc  设置Cookie
//  * @param {String} name
//  * @param {String} value
//  * @param {Number} days
//  */
function setCookie(name: string, value: string, days: number): void {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + value + ';expires=' + date
}

export default setCookie
