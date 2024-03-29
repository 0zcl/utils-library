import { Options, Obj } from '../../types'

/**
 * 判断对象自身属性中是否具有指定的属性
 * ```
 * utilsLibrary.filterObj(
 *  { a: 1, b: 2, 'c': 'c', d: {a: 1}, e: [1,2,3], f: 'f'},
 *  ['a', 'd', 'e', 'g'],
 *  { nullType: '' }
 * ) // { a: 1, d: {a: 1}, e: [1,2,3], g: ''}
 * ```
 * @param obj 待过滤的对象
 * @param filterArr 由obj中要过滤的key组成的数组
 * @param options 参数配置，传nullType: null | undefined | '' 默认为空字符''
 * @returns 过滤后的对象. 注：key-value. vulue为0. 过滤后value也为0
 */
function filterObj(obj: Obj, filterArr: string[], options: Options = { nullType: '' }): Obj {
  const resObj = {} as Obj
  filterArr.forEach(item => {
    const filterItem = obj[item]
    resObj[item] = filterItem === 0 || filterItem ? filterItem : options.nullType
  })
  return resObj
}

export default filterObj
