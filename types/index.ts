export * from './time'
export * from './object'
export * from './browser'

export interface Obj {
  [key: string]: any
}

declare const utilsLibrary: Obj

export default utilsLibrary
