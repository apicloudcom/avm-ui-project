export function tag(name) {
  return function(target) {
    avm.define(name, target)
  }
}