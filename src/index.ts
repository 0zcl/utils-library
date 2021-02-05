interface Cache {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any
}
const cache: Cache = {} as Cache

function importAll (r: __WebpackModuleApi.RequireContext): void {
  r.keys().forEach((key: string) => {
    if (key === './index.ts') return
    cache[r(key).default.name] = r(key).default
  })
}

importAll(require.context('./', true, /\.ts$/))

export default cache
