/**
 * ```
 * equal(0.1-0.2, -0.1) // true
 * ```
 * @description 判断left 与 right 是否相等
 * @param left
 * @param right
 * @returns
 */
function equal(left: number, right: number): boolean {
  return Math.abs(left - right) < Number.EPSILON
}

export default equal
