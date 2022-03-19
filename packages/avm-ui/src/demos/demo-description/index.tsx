export class DemoDescription extends Component {
  render = props => <div className={"demoDescription"}>
    {props.content || props.children}
  </div>
  css = () => `.demoDescription {color: #999999;}`
}
