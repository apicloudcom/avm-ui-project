import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-tabs`

export type TabProps = {
  title: HTMLElement
  disabled?: boolean
  forceRender?: boolean
}

export class Tab extends Component {
  // return null
}

export type TabsProps = {
  breakPoint?: number
  activeKey?: string | null
  defaultActiveKey?: string | null
  activeLineMode?: 'auto' | 'full' | 'fixed'
  onChange?: (key: string) => void
  children?: any
  fixedLineWidth?: number
}

interface PaneAttr {
  disabled?: boolean
  title?: any
  forceRender?: boolean
}

export type Pane = {
  key: string |number
  attributes: PaneAttr
  children?: AVMChild[]
}

const defaultProps = {
  activeLineMode: 'auto',
}

export class Tabs extends Component {
  data = {
    activeKey: '',
    width: 0,
    left: 0,
    scrollLeft: 0
  }
  
  ele:AVMElement[] = []
  scrollEle: AVMElement[] = []
  
  installed() {
    let index: string | number = 0
    const key = this.props.defaultActiveKey

    if (key) {
      this.props.children?.forEach((child) => {
        if (child.key === key) {
          return
        }
      })
    }
    
    this.data.activeKey = key || this.props.children[0].key
    setTimeout(() => {
      const width = this.ele[index].getBoundingClientRect().width
      const left = this.ele[index].getBoundingClientRect().left
      this.data.width = width
      this.data.left = left
    }, 5)
  }
  
  // 滚动事件
  scroll(e) {
    console.log(JSON.stringify(e))
    const {scrollLeft} = e.detail
    this.data.scrollLeft = scrollLeft
  }
  
  render = (p: TabsProps) => {
    const props = mergeProps(defaultProps, p)
    const leftMaskOpacity = 0
    const rightMaskOpacity = 0
    const breakPoint = props.breakPoint || 5

    const panes:any = []
    // index记录，避免默认情况下遇到非tab标签传入显示错误问题
    
    props.children.forEach(child => {
      const childName = child?.nodeName?.name || 'string'
      const key = child.key
        
      // 判断是否是元素
      if (childName !== 'Tab') return
      // 判断key是否是字符串类型
      if (typeof key !== 'string') return
      panes.push(child)
    })

    return (
      <div className={classPrefix}>
        <div className={`${classPrefix}-header`}>
          <div
            className={classNames(
              `${classPrefix}-header-mask`,
              `${classPrefix}-header-mask-left`
            )}
            style={{
              opacity: leftMaskOpacity,
            }}
          />
          <div
            className={classNames(
              `${classPrefix}-header-mask`,
              `${classPrefix}-header-mask-right`
            )}
            style={{
              opacity: rightMaskOpacity,
            }}
          />
          {props.children.length > breakPoint 
            ? <scroll-view
                ref={e => {this.scrollEle.push(e)}}
                className={`${classPrefix}-tab-list`} 
                scroll-x
                scroll-left={this.data.scrollLeft}
                scroll-y="false"
                show-scrollbar={false}
                onscroll={this.scroll.bind(this)}>
              <div
                className={`${classPrefix}-tab-line`}
                style={{
                  width:
                    props.activeLineMode === 'fixed'
                      ? `${props.fixedLineWidth || 30}px`
                      : this.data.width,
                  transform:
                    props.activeLineMode === 'fixed'
                      ? `translate(${(this.data.width - (props.fixedLineWidth || 30))/2 + this.data.left}px, 0px)`
                      : `translate(${this.data.left}px, 0px)`,
                }}
              />
              {panes.map((pane: Pane,index: string | number) => {
                return (
                  <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
                    <div
                      onClick={() => {
                        const {key} = pane
                        
                        if (pane.attributes.disabled) return
                        if (key === undefined || key === null) {
                          return
                        }
                        this.data.width = this.ele[index].getBoundingClientRect().width
                        this.data.left = this.ele[index].getBoundingClientRect().left + this.data.scrollLeft
                        this.data.activeKey = key.toString()
                        props.onChange?.(this.data.activeKey)
                      }}
                    >
                      <span
                        className={classNames(classNames(`${classPrefix}-tab`), {
                          [`${classPrefix}-tab-active`]: pane.key === this.data.activeKey,
                          [`${classPrefix}-tab-none`]: pane.key !== this.data.activeKey,
                          [`${classPrefix}-tab-disabled`]: pane.attributes?.disabled || false,
                        })}
                        ref={e => {this.ele.push(e)}}>{pane.attributes?.title}</span>
                    </div>
                  </div>
                )
              })}
            </scroll-view>
            : <div
              className={`${classPrefix}-tab-list`}
            >
              <div
                className={`${classPrefix}-tab-line`}
                style={{
                  width:
                    props.activeLineMode === 'fixed'
                      ? `${props.fixedLineWidth || 30}px`
                      : this.data.width,
                  transform: 
                    props.activeLineMode === 'fixed'
                      ? `translate(${(this.data.width - (props.fixedLineWidth || 30))/2 + this.data.left}px, 0px)`
                      : `translate(${this.data.left}px, 0px)`,
                }}
              />
              {panes.map((pane: Pane,index: string | number) => {
                return (
                  <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
                    <div
                      onClick={() => {
                        const {key} = pane
                        
                        if (pane.attributes.disabled) return
                        if (key === undefined || key === null) {
                          return
                        }
                        this.data.width = this.ele[index].getBoundingClientRect().width
                        this.data.left = this.ele[index].getBoundingClientRect().left
                        
                        this.data.activeKey = key.toString()
                        props.onChange?.(this.data.activeKey)
                      }}
                    >
                      <span
                        className={classNames(classNames(`${classPrefix}-tab`), {
                          [`${classPrefix}-tab-active`]: pane.key === this.data.activeKey,
                          [`${classPrefix}-tab-none`]: pane.key !== this.data.activeKey,
                          [`${classPrefix}-tab-disabled`]: pane.attributes?.disabled || false,
                        })}
                        ref={(e:AVMElement) => {this.ele.push(e)}}>{pane.attributes?.title}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          }
        </div>
        {panes.map((pane: Pane) => {
          if (pane.children === undefined) {
            return null
          }
          if (pane.key === this.data.activeKey) {
            return (
              <div key={pane.key} className={`${classPrefix}-content`}>
                <span>{pane.children}</span>
              </div>
            )
          }
          if (pane.attributes.forceRender) {
            return (
              <div key={pane.key} style={{ display: 'none' }}>
                <span>{pane.children}</span>
              </div>
            )
          }
          return null
        })}
      </div>
    )
  }
}
