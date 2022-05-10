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
    let name = props.name || props.type;
    if (/\d/.test(name)){
      name.replace(/(\d)/)
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name];
    return <text style={{...props}} class={`${classPrefix} ${classPrefix}-font-icon-text ${props.class||props.className||''}`}>{char}</text>
  }
}
  
  