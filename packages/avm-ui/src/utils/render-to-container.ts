import { resolveContainer } from './get-container'
import { canUseDom } from './can-use-dom'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export function renderToContainer(
  getContainer: GetContainer,
  node: HTMLElement
) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer)
    // return createPortal(node, container)\
    avm.render(node, container)
    return 
  }
  return node
}