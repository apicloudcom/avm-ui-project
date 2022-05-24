

const classPrefix = `adm-page-indicator`

export type PageIndicatorProps = {
  total: number
  current: number
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'white'
}

const defaultProps = {
  direction: 'horizontal',
  style: {},
  color: 'primary',
  total: 5,
  current: 0
}

const colorMapping = {
  primary: '#9AC200',
  white: '#fff'
}

export class PageIndicator extends Component {
  
  render = props => {
    props = Object.assign({}, defaultProps, props)
    const {
      direction,
      dotColor = '#ddd',
      activeDotColor = ['primary', 'white'].includes(props.color) ? colorMapping[props.color] : props.color,
      dotSize = '6px',
      activeDotSize = '6px',
      dotBorderRadius = '3px',
      activeDotBorderRadius = '3px',
      dotSpacing = '8px'
    } = props

    const isHorizontal = direction === 'horizontal';

    const dots: any[] = []
    for (let i = 0; i < props.total; i++) {
      dots.push(
        <div
          key={i}
          className={classNames(`${classPrefix}-dot`, {
            [`${classPrefix}-dot-active`]: props.current === i,
          })}
          style={{
            background: props.current === i ? activeDotColor : dotColor,
            width: props.current === i ? (isHorizontal ? activeDotSize : dotSize) : dotSize,
            height: props.current === i ? (!isHorizontal ? activeDotSize : dotSize) : dotSize,
            borderRadius: props.current === i ? activeDotBorderRadius : dotBorderRadius,
            marginRight: isHorizontal ? dotSpacing : 0,
            marginBottom: !isHorizontal ? dotSpacing : 0
          }}
        />
      )
    }

    return <div
      className={classNames(
        classPrefix,
        props.className,
        `${classPrefix}-${props.direction}`,
        `${classPrefix}-color-${props.color}`
      )}
      style={props.style}
    >
      {dots}
    </div>
  }

  css = () => {
    return `
      .adm-page-indicator {
        display: flex;
        width: fit-content;
        padding:12px;
      }
      .adm-page-indicator-dot {
        display: block;
      }
      .adm-page-indicator-dot:last-child {
        margin-right: 0;
      }
      .adm-page-indicator-color-white .adm-page-indicator-dot-active {
        background: #fff;
      }
      .adm-page-indicator-horizontal {
        flex-direction: row;
      }
      .adm-page-indicator-vertical {
        flex-direction: column;
      }
    `
  }
}
