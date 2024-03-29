import { Obj } from '../../types'

/**
  * 判断对象自身属性中是否具有指定的属性
  * ```
  * utilsLibrary.hasOwnProp({ 123: 'zcl', a: 1 }, 'zbl') // false
  * ```
  * @param {Object} obj 对象
  * @param {String/Number} key 键值
  * @return {Boolean}
  */
function hasOwnProp(obj: Obj, key: string | number): boolean {
  return typeof obj === 'object' ? Object.prototype.hasOwnProperty.call(obj, key) : false
}

export default hasOwnProp
