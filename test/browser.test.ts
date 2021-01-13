/**
 * @jest-environment jsdom
 */

import getBrowserInfo from '../src/browser/getBrowserInfo'
import setCookie from '../src/browser/setCookie'
import removeCookie from '../src/browser/removeCookie'
import getCookie from '../src/browser/getCookie'

describe('Device API:', () => {
  describe('#getBrowserInfo()', () => {
    const browserInfo = getBrowserInfo()
    it('utilsLirary.getBrowserInfo() should return os string', () => {
      expect(['ios', 'android', 'windowsPhone', 'MacOSX', 'windows', 'linux', undefined]).toContain(browserInfo.type)
    })
  })

  describe('#getCookie()', () => {
    beforeAll(() => {
      setCookie('test', 'getTestValue', 1)
    })
    test('utilsLirary.getCookie(\'test\', \'getTestValue\') should return true', () => {
      expect(getCookie('test')).toBe('getTestValue')
    })
    test('utilsLirary.getCookie(\'empty\', \'\') should return true', () => {
      expect(getCookie('empty')).toBe('')
    })
    afterAll(() => {
      removeCookie('test')
    })
  })

  describe('#removeCookie()', () => {
    beforeAll(() => {
      setCookie('test', 'removeTestValue', 1)
    })
    test('utilsLirary.removeCookie(\'test\') should return false', () => {
      removeCookie('test')
      expect(getCookie('test')).not.toBe('removeTestValue')
    })
  })
})
