
/**
 *```
 * utilsLibrary.getCookie('zcl')
 *```
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
function getCookie(name: string): string {
  const arr: string[] = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0; i < arr.length; i++) {
    const tempArr: string[] = arr[i].split('=')
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

export default getCookie
