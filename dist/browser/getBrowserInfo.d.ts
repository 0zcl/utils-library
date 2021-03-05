interface BrowserInfo {
    /** 浏览器类型 */
    type: 'ios' | 'android' | 'windowsPhone' | 'MacOSX' | 'windows' | 'linux' | undefined;
}
/**
 * ```typescript
 * utilsLibrary.getBrowserInfo() // {type: "windows"}
 * ```
 * @desc 获取浏览器类型
 * @return {BrowserInfo} 类型为{ type: 'xxx' }
 */
declare function getBrowserInfo(): BrowserInfo;
export default getBrowserInfo;
