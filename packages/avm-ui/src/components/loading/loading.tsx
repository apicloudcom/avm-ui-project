// import LoopOutline from "../icon"
const classPrefix = `adm-loading`

export type LoadingProps = {
  color?: string,
  size?: string
}

export class Loading extends Component {
  render = (props) => {
    const { color = '#1677ff', size = 'default' } = props
    return <div

      className={classPrefix}
    >
      {/*<span className={*/}
      {/*  `${classPrefix}-${color}`*/}
      {/*}>*/}
      {/*  <LoopOutline />*/}
      {/*</span>*/}
      <div className={`${classPrefix}-loading ${classPrefix}-${size}` } style={{ borderColor: color, borderTopColor: 'transparent' }}></div>
    </div>
  }
}
