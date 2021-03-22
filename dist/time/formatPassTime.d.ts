/**
 * ```
 * utilsLibrary.formatPassTime(1614666607019) // 8分钟前
 * ```
 * @description 格式化${startTime}距现在的已过时间
 * @param {Number} startTime
 * @returns {String} [x年前 | x个月前 | x天前 | x小时前 | x分钟前 | 刚刚]
 */
declare function formatPassTime(startTime: number): string;
export default formatPassTime;
