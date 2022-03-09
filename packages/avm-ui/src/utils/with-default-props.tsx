export function mergeProps<A, B>(a: A, b: B): B & A

export function mergeProps(defaultProps, props) {
  return Object.assign(defaultProps,props);
}