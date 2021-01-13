import randomNum from '../src/random/randomNum'
import randomColor from '../src/random/randomColor'

describe('Random API:', () => {
  describe('#randomColor()', () => {
    test('/^#[0-9a-fA-F]+$/.test(utilsLibrary.randomColor()) should return true', () => {
      expect(randomColor()).toMatch(/^#[0-9a-fA-F]+$/)
    })
  })

  describe('#randomNum()', () => {
    test('10 <= utilsLibrary.randomNum(10, 1000) <= 100 should return true', () => {
      const num = randomNum(10, 1000)
      expect(num).toBeGreaterThanOrEqual(10)
      expect(num).toBeLessThanOrEqual(1000)
    })
  })
})
