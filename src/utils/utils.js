export const debounce = (fn, gatTime = 800) => {
  let _lastTime
  return () => {
    clearTimeout(_lastTime)
    _lastTime = setTimeout(() => {
      fn.apply(this, arguments)
    }, gatTime)
  }
}
