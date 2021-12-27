// import { resolveContainer } from '../../utils/get-container'
import { InternalToast, ToastProps } from './toast'
import { mergeProps } from '../../utils/with-default-props'

const containers = [] as HTMLDivElement[]

// 卸载移除元素
// function unmount(container: HTMLDivElement) {
//   console.log('unmount container=', container)
//   const unmountResult = ReactDOM.unmountComponentAtNode(container)
//   if (unmountResult && container.parentNode) {
//     container.parentNode.removeChild(container)
//   }
// }

export type ToastShowProps = Omit<ToastProps, 'visible'>

const defaultProps = {
  duration: 2000,
}

export function show(p: any) {
  const props = mergeProps(defaultProps, typeof p === 'string' ? { content: p } : p)
  let timer = 0
  let visible = true

  const setVisible = v => {
    visible = v
  }

  // const {getContainer = () => document.body} = props
  // const container = document.createElement('div')
  // const bodyContainer = resolveContainer(getContainer)
  // bodyContainer.appendChild(container)
  // clear()
  // containers.push(container)

  const TempToast = () => {
    if (props.duration === 0) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      setVisible(false)
      props.afterClose?.()
    }, props.duration)
    return (
      <InternalToast
        {...props}
        getContainer={() => document.getElementById('toast-box')}
        visible={visible}
        afterClose={() => {
          // unmount(container)
        }}
      />
    )
  }
  avm.render(<TempToast />, '#toast-box')
}

export function clear() {
  while (true) {
    const container = containers.pop()
    if (!container) break
    // unmount(container)
  }
}
