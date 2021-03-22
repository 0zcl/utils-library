/**
 * ```
 * utilsLibrary.setCookie('a', 'a', 0.0001)
 * ```
 * @desc  设置Cookie
 * @param {String} name cookie的key
 * @param {String} value cookie的value
 * @param {Number} days cookie的有效期(单位：天)
 */
declare function setCookie(name: string, value: string, days: number): void;
export default setCookie;
