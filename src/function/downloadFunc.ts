/**
 * 用于B端下载文件
 * ```
 * utilsLibrary.downloadFunc('{hello: "world"}', 'zcl.txt')
 * ```
 * @param {BlobPart} data https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob
 * @param {String} filename 文件名
 */
function downloadFunc(data: BlobPart, filename: string): void {
  const b = new Blob([data])
  const url = URL.createObjectURL(b)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
}

export default downloadFunc
