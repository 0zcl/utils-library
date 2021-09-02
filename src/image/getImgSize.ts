/**
 * 获取图片的长与宽
 * ```
 * utilsLibrary.getImgSize('//media-oss.61info.cn/homework_review/teacher_comment/image/cfd43d53-eb85-4e60-806e-a4ff27bb60b9.png')
 * // {width: 519, height: 396}
 * ```
 * @param  {String} src url链接
 * @returns
 */
function getImgSize(src: string): Promise<{ width: number, height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = function() {
      resolve({ width: img.width, height: img.height })
    }
    img.onerror = function(e) {
      reject(e)
    }
  })
}

export default getImgSize
