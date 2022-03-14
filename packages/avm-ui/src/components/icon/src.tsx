// @ts-ignore
import {fontName} from './icon.config.json';
import {tag} from "../../utils/tag";

export type IconProps = {
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

@tag('avm-icon')
export class Icon extends Component {
  code = 59913;

  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: ${fontName};}`;
  }


  render = props => {
    const code = props.code || this.code;
    const name = props.name || this.constructor.name;

    return <text _code={code} _name={name} style={{...props}}
                 class={`${classPrefix} ${classPrefix}-font-icon-text`}>
      {String.fromCharCode(code)}
    </text>
  }
}
  
  