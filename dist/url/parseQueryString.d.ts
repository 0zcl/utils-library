interface QueryObj {
    [x: string]: string;
}
/**
 * @description url参数转对象
 * @param {String} url 默认：window.location.href
 * @returns {Object}
 */
declare function parseQueryString(url?: string): QueryObj;
export default parseQueryString;
