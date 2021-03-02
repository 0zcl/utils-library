interface Cache {
  [index: string]: any
}
const cache: Cache = {} as Cache

function importAll (r: __WebpackModuleApi.RequireContext): void {
  r.keys().forEach((key: string) => {
    if (key === './index.ts') return
    const fnName: string = key.split('/').pop() || ''
    const fnKey: string = fnName.split('.')[0]
    cache[fnKey] = r(key).default
  })
}

importAll(require.context('./', true, /\.ts$/))

export default cache
