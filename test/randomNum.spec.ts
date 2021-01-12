import randomNum from '../src/random/randomNum'

test('init random number: ', () => {
  expect(randomNum(2, 4)).toBeLessThan(5)
  expect(randomNum(2, 4)).toBeGreaterThan(1)
})
