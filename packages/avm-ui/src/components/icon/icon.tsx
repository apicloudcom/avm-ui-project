// @ts-ignore
import {fontName} from './icon.config.json';
import {tag} from "../../utils/tag";
import {icons} from './icons.json';

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
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[props.name || props.type];
    return <text style={{...props}} class={`${classPrefix} ${classPrefix}-font-icon-text ${props.class||props.className||''}`}>{char}</text>
  }
}
  
  