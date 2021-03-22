/**
 * ```
 * utilsLibrary.formatTime(1614666607019, 'yyyy.MM.dd') // 2021.03.02
 * ```
 * @param {Date | Number} date 日期 | 时间戳
 * @param {String} fmt 格式
 * @returns {String}
 */
declare function formatTime(date: Date | number, fmt?: string): string;
export default formatTime;
