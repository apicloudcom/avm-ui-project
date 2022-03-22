import {toCSSLength} from '../../utils/to-css-length'
import { formatLabel } from '../../utils/format-label'
import Icon from '../icon'

const classPrefix = `adm-image`

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <Icon code={60009} color="#ddd"/>
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <Icon code={60010} color="#ddd"/>
    </div>
  )
}

export class Image extends Component {
  install = () => {
    console.log('Image!');
  }

  data = {
    loaded: false,
    failed: false
  }

  setLoaded = status => {
    this.data.loaded = status;
  }

  setFailed = status => {
    this.data.failed = status;
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)
    const {width='238px', height='165px', src, srcSet, isRound=false, isSquare=false} = props;

    const style = {};
    style['width'] = toCSSLength(width)
    style['height'] = toCSSLength(height)
    if (isRound) {
      style['borderRadius'] = '50%'
      style['width'] = '120px'
      style['height'] = '120px'
    }
    if (isSquare) {
      style['borderRadius'] = '4px'
      style['width'] = '120px'
      style['height'] = '120px'
    }

    const renderInner = () => {
      if (this.data.failed) {
        return formatLabel(props.fallback)
      }
      const imgs = () => (
        <img
          className={`${classPrefix}-img`}
          src={src}
          alt={props.alt}
          onClick={props.onClick}
          onLoad={() => {
            this.setLoaded(true)
          }}
          onError={e => {
            this.setFailed(true)
            props.onError?.(e)
          }}
          style={{
            objectFit: props.fit,
            ...props.style,
            ...style
          }}
          crossOrigin={props.crossOrigin}
          decoding={props.decoding}
          loading={props.loading}
          referrerPolicy={props.referrerPolicy}
          sizes={props.sizes}
          srcSet={srcSet}
          useMap={props.useMap}
        />
      )
      return (
        <view className={`${classPrefix}-wrapper`}>
          {imgs()}
          <div className={!this.data.loaded ? `${classPrefix}-placeholder-wrapper` : ''}>
            {!this.data.loaded && props.placeholder}
          </div>
        </view>
      )
    }
    return (
      <div className={classPrefix} style={style}>
        {renderInner()}
      </div>
    )
  }

  css = () => {
    return `
      .adm-image {
        display: inline-block;
        overflow: hidden;
      }
      .adm-image-wrapper {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .adm-image-img {
        z-index: 1;
      }
      .adm-image-tip {
        position: relative;
        background-color: #f3f3f3;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .adm-image-placeholder-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }
    `
  }
}
