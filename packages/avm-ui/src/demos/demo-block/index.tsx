

export class DemoBlock extends Component {
  render = props => {
    return (
      <div className={"demo-block"}>
        <span className={"demo-block__title"}>{props.title}</span>
        <div
          className={"demo-block__content"}
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

  css = () => `
  .demo-block:last-of-type {
  padding-bottom: 32px;
}
.demo-block__title {
  padding: 12px 8px 6px;
  color: #969696;
  font-size: 14px;
}
.demo-block__content {
  border: solid 1px #eee;
  border-right: none;
  border-left: none;
}
  `
}

