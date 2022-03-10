/**
 * 返回 class 样式字符串
 * @param args
 */
export default function classNames(...args): string {
  const cls: string[] = [];
  args.forEach(arg => {
    if (typeof arg === 'string') {cls.push(arg)} else if (Object.prototype.toString.call(arg) === '[object Object]') {
      for (const argKey in arg) {arg[argKey] && cls.push(argKey);}
    } else if(arg){console.log(`arg ${arg} type not support`);}
  })
  return cls.join(' ');
}