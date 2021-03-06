
const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
}

const defaultProps = {
  contentPosition: 'center',
  color: '#999999',
  borderColor: '#eeeeee',
  borderStyle: 'solid',
  borderTopWidth: '1px'
}


export class Divider extends Component {

  render = props => {
    // props = mergeProps(defaultProps, props)
    props = Object.assign({},defaultProps, props)
    const { color, borderStyle, borderColor, borderTopWidth,contentPosition,children} = props
    const fontContentSty = {
      color: color,
      flex: 'none'
    }
    const dividerLineSty = {
      borderStyle:  borderStyle,
      borderColor: borderColor,
      borderTopWidth: borderTopWidth,
      flex: 'auto'
    }
    const dividerLeftSty = Object.assign({
      maxWidth:contentPosition === 'left'? '10%': 'auto'
    },dividerLineSty)
    const dividerRightSty = Object.assign({
      maxWidth:contentPosition === 'right'? '10%': 'auto'
    },dividerLineSty)
    return (
      <div
        className={classNames(
          classPrefix,
          `${classPrefix}-${contentPosition}`
        )}
      >
        <div style={dividerLeftSty}></div>
        {children.length > 0 && (
          <text className={`${classPrefix}-content`} style={fontContentSty}>{children}</text>
        )}
        <div style={dividerRightSty}></div>
      </div>
    )
  }
  css = () => {
    return `
    .adm-divider {
      align-items: center;
      margin: 16px 0;
      font-size: 14px;
      flex-direction: row;
      width: 100%;
    }
    .adm-divider-content {
      flex: none;
      padding: 0 16px;
    }
    `
  }
}

