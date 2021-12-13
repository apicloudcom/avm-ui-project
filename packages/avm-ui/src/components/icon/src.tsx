// @ts-ignore
import {fontName} from 'icon.config.json';

export type IconProps = {
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

export class Icon extends Component {
  code = 59913;

  css() {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/act/a-iconfont/fonts/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: iconfont;}`;
  }


  render = props => {
    return <text _code={this.code} _name={this.constructor.name}
                 style={{...props}}
                 class={`${classPrefix} ${classPrefix}-font-icon-text`}>
      {String.fromCharCode(this.code)}
    </text>
  }
}
  
  