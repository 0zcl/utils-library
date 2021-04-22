interface QueryObj {
  [x: string]: string
}

/**
 * @description url参数转对象。【url参数会做一次decodeURIComponent】
 * @param {String} url 默认：window.location.href
 * @returns {Object}
 */
function parseQueryString(url: string = window.location.href): QueryObj {
  if (url.indexOf('?') === -1) return {}
  const search: string = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') return {}
  const queryArr: string[] = search.split('&')
  const queryObj: QueryObj = {}
  for (let i = 0, len = queryArr.length; i < len; i++) {
    const pair: string[] = queryArr[i].split('=')
    queryObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return queryObj
}

export default parseQueryString
