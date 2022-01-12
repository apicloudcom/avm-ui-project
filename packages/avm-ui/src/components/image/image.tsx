import {mergeProps} from '../../utils/with-default-props'
import {toCSSLength} from '../../utils/to-css-length'
import { formatLabel } from '../../utils/format-label'

import outlineUrl from './img/loading.png'
import warnUrl from './img/warn.png'

const classPrefix = `adm-image`

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <img src={outlineUrl} className={`${classPrefix}-tip-icon`}/>
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <img src={warnUrl} className={`${classPrefix}-tip-icon`}/>
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
    props = mergeProps(defaultProps, props)

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
}
