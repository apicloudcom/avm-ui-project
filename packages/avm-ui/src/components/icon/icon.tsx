// @ts-ignore
import {fontName} from './icon.config.json';
import {tag} from "../../utils/tag";

export type IconProps = {
  code: number,
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

@tag('avm-icon')
export class Icon extends Component {
  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/icon/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: ${fontName};}`;
  }

  render = props => {
    const char = String.fromCharCode(props.code) || props.children;
    return <text style={{...props}} class={`${classPrefix} ${classPrefix}-font-icon-text`}>{char}</text>
  }
}
  
  