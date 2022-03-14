import {toCSSLength} from '../../utils/to-css-length'
import { formatLabel } from '../../utils/format-label'

// import outlineUrl from './img/loading.png'
// import warnUrl from './img/warn.png'
import {PictureOutline, PictureWrongOutline} from '../icon/icon'

const classPrefix = `adm-image`

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      {/* <img src={outlineUrl} className={`${classPrefix}-tip-icon`}/> */}
      <PictureOutline className={`${classPrefix}-tip-icon`}/>
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      {/* <img src={warnUrl} className={`${classPrefix}-tip-icon`}/> */}
      <PictureWrongOutline className={`${classPrefix}-tip-icon`}/>
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

    const style = {};
    if (props.width) {
      style['width'] = toCSSLength(props.width)
    }
    if (props.height) {
      style['height'] = toCSSLength(props.height)
    }

    let src = props.src
    let srcSet = props.srcSet

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
            ...style,
            ...props.style
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
        height: 100%;
        min-height: 24px;
        min-width: 24px;
      }
      .adm-image-tip-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
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
