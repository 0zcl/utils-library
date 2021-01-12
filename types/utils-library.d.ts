declare namespace utilsLibrary {
  function randomColor(): string
  function randomNum(min: number, max: number): number
}

export as namespace utilsLibrary // UMD 库声明全局变量

export = utilsLibrary
