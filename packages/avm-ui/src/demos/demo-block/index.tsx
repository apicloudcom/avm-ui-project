import './index.less'

// interface Props {
//   title: string
//   padding?: string
//   border?: string
//   background?: string
// }

export class DemoBlock extends Component {
  render = props => {
    return (
      <div className={"demoBlock"}>
        <span className={"title"}>{props.title}</span>
        <div
          className={"content"}
          style={{
            padding: props.padding || '12px 12px',
            background: props.background || '#ffffff',
            border: props.border,
          }}
        >
          {props.children}
        </div>
      </div>
    )
  }
}

