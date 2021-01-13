
// /**
//  *
//  * @desc 获取浏览器类型和版本
//  * @return {String}
//  */
function getOS() {
  const userAgent: string = ('navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase()) || ''
  const appVersion = ('navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase()) || ''
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
}

interface BrowserInfo {
    type: 'ios' | 'android' | 'windowsPhone' | 'MacOSX' | 'windows' | 'linux' | undefined
}

function getBrowserInfo(): BrowserInfo {
  const os: BrowserInfo = {} as BrowserInfo
  os.type = getOS()
  return os
}

export default getBrowserInfo
