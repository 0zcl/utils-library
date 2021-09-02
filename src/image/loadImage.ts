/**
 * 加载图片
 * ```
 * utilsLibrary.loadImage('//media-oss.61info.cn/homework_review/teacher_comment/image/cfd43d53-eb85-4e60-806e-a4ff27bb60b9.png')
 * ```
 * @param  {String} src url链接
 * @returns
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img: HTMLImageElement = new Image()
    img.src = src
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = e => {
      reject(e)
    }
  })
}

export default loadImage
