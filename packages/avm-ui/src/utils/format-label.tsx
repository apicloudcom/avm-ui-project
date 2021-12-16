export const checkLabelType = ele => {
    return Object.prototype.toString.call(ele)
}
  
export const formatLabel = (ele, cls?, style={}) => {
  if (checkLabelType(ele) === '[object Array]') {
    return ele.map(el => {
      return formatLabel(el, cls, style)
    })
  }
  return checkLabelType(ele) === '[object String]'
    ? <span className={cls} style={style}>{ele}</span>
    : <div className={cls} style={style}>{ele}</div>
}