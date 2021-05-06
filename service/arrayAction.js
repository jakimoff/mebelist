export function arrayChunk(arr, size) {
  if (size < 1) throw new Error('Size must be positive')

  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export function arrayColumn(input, ColumnKey, IndexKey = null) {
  if (input !== null && (typeof input === 'object' || Array.isArray(input))) {
    const newarray = []
    if (typeof input === 'object') {
      const temparray = []
      for (const key of Object.keys(input)) {
        temparray.push(input[key])
      }
      input = temparray
    }
    if (Array.isArray(input)) {
      for (const key of input.keys()) {
        if (IndexKey && input[key][IndexKey]) {
          if (ColumnKey) {
            newarray[input[key][IndexKey]] = input[key][ColumnKey]
          } else {
            newarray[input[key][IndexKey]] = input[key]
          }
        } else if (ColumnKey) {
          newarray.push(input[key][ColumnKey])
        } else {
          newarray.push(input[key])
        }
      }
    }
    return newarray
  }
}
