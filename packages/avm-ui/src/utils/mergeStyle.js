export default function mergeStyle(...args) {
  let style = [];
  args.forEach(arg => {
    if (typeof arg === 'string') {
      style.push(arg.replace(/;$/gm, ''))
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      for (let key in arg) {
        arg[key] && style.push(key.replace(/([A-Z])/, str => '-' + str.toLowerCase()) + ':' + arg[key])
      }
    }
  })
  return style.join(';') + ';'
}