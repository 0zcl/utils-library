/**
 * ```
 * utilsLibrary.randomNum() // 2
 * ```
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default randomNum
