interface DataTest {
  one: number
  two?: number
}

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('object assignment', () => {
  const data: DataTest = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n: null = null
  expect(n).toBeNull()
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  expect(value).not.toBe(0.3) // It isn't! Because rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
  expect('team').toMatch(/[a-z]+/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

function compileAndroidCode() : never {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)
  expect(compileAndroidCode).toThrow('you are using the wrong JD')
})

// describe('outer', () => {
//   console.log('describe outer-a')

//   describe('describe inner 1', () => {
//     console.log('describe inner 1')
//     test('test 1', () => {
//       console.log('test for describe inner 1')
//       expect(true).toEqual(true)
//     })
//   })

//   console.log('describe outer-b')

//   test('test 1', () => {
//     console.log('test for describe outer')
//     expect(true).toEqual(true)
//   })

//   describe('describe inner 2', () => {
//     console.log('describe inner 2')
//     test('test for describe inner 2', () => {
//       console.log('test for describe inner 2')
//       expect(false).toEqual(false)
//     })
//   })

//   console.log('describe outer-c')
// })

const arr = [1, [2, 3], [4, [5, 6], 7]]
const flatFn = arr => arr.flat(2)
test('flat函数：', () => {
  expect(flatFn(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
})
