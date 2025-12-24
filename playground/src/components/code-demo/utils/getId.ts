export function getId(src: string) {
  let _src = src
  if (_src.startsWith('/')) {
    _src = _src.slice(1)
  }
  if (_src.endsWith('.vue')) {
    _src = _src.slice(0, -4)
  }
  return _src.replace(/[/\\.]/g, '-')
}
