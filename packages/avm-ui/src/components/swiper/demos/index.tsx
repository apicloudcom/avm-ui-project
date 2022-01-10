import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import {DemoBlock, DemoDescription} from '../../../demos'
import {Space} from '../../space/space'
import {Button} from '../../button/button'
import {Popup} from '../../popup/popup'

import './index.less'
import '../swiper.less'
import '../../space/space.less'
import '../../button/button.less'
import '../../popup/popup.less'
import '../../page-indicator/page-indicator.less'

const popupBodyStyle = {
    height: '100%'
}

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const indicatorProps = {
    color: 'white'
}

class Demo extends Component {
    data = {
        current: 0,
        visiable: false
    }

    onchange = v => {
        api.alert({
            msg: v
        })
        this.data.current = v;
    }

    setVisible = v => {
        this.data.visiable = v
    }

    render = () => {
        return (
            <div>
                <DemoBlock title='基础用法'>
                    <Swiper>
                        {
                            colors.map((color, index) => {
                                const styles = {
                                    background: color
                                }
                                return (
                                    <SwiperItem key={index}>
                                        <span
                                            className='contents'
                                            style={styles}
                                            onClick={() => api.alert({msg: `你点击了卡片 ${index + 1}`})}>{index + 1}</span>
                                    </SwiperItem>
                                )
                            })
                        }
                    </Swiper>
                </DemoBlock>
                <DemoBlock title='自动播放'>
                    <Swiper autoplay>
                        {
                            colors.map((color, index) => {
                                const styles = {
                                    background: color
                                }
                                return (
                                    <SwiperItem key={index}>
                                        <span className='contents' style={styles}>{index + 1}</span>
                                    </SwiperItem>
                                )
                            })
                        }
                    </Swiper>
                </DemoBlock>
                <DemoBlock title='自定义圆角样式'>
                    <Space direction='vertical' block>
                        <Swiper borderRadius="10px" defaultIndex={2}>
                            {
                                colors.map((color, index) => {
                                    const styles = {
                                        background: color
                                    }
                                    return (
                                        <SwiperItem key={index}>
                                            <span className='contents' style={styles}>{index + 1}</span>
                                        </SwiperItem>
                                    )
                                })
                            }
                        </Swiper>
                    </Space>
                </DemoBlock>
                <DemoBlock title='指示器颜色'>
                    <Space direction='vertical' block>
                        <Swiper indicatorProps={indicatorProps} defaultIndex={1}>
                            {
                                colors.map((color, index) => {
                                    const styles = {
                                        background: color
                                    }
                                    return (
                                        <SwiperItem key={index}>
                                            <span className='contents' style={styles}>{index + 1}</span>
                                        </SwiperItem>
                                    )
                                })
                            }
                        </Swiper>
                        <DemoDescription content='通过indicatorProps可以控制指示器的外观' />
                    </Space>
                </DemoBlock>
                <DemoBlock title='指示器在滑块外面'>
                    <Space direction='vertical' block>
                    <Swiper trackPadding="0 0 32px">
                        {
                            colors.map((color, index) => {
                                const styles = {
                                    background: color
                                }
                                return (
                                    <SwiperItem key={index}>
                                        <span className='contents' style={styles}>{index + 1}</span>
                                    </SwiperItem>
                                )
                            })
                        }
                    </Swiper>
                    <DemoDescription content='通过 trackPadding 可以控制滑动轨道区域的 padding，从而实现指示器和滑块"分离"的效果' />
                    </Space>
                </DemoBlock>
                <DemoBlock title='自定义指示器'>
                    <Space direction='vertical' block>
                        <Swiper indicator={data => (<span className='customIndicator'>{`${data.current + 1} / ${data.total}`}</span>)}>
                            {
                                colors.map((color, index) => {
                                    const styles = {
                                        background: color
                                    }
                                    return (
                                        <SwiperItem key={index}>
                                            <span className='contents' style={styles}>{index + 1}</span>
                                        </SwiperItem>
                                    )
                                })
                            }
                        </Swiper>
                        <DemoDescription content='你可以完全自定义指示器的渲染，甚至改变指示器的位置' />
                    </Space>
                </DemoBlock>
                <DemoBlock title='无指示器'>
                    <Swiper indicator={() => null}>
                        {
                            colors.map((color, index) => {
                                const styles = {
                                    background: color
                                }
                                return (
                                    <SwiperItem key={index}>
                                        <span className='contents' style={styles}>{index + 1}</span>
                                    </SwiperItem>
                                )
                            })
                        }
                    </Swiper>
                </DemoBlock>
                <DemoBlock title="全屏引导">
                    <Button onClick={() => this.setVisible(true)}>显示弹出层</Button>
                    <DemoDescription content='配合 Popup 组件可以实现全屏引导'/>
                </DemoBlock>
                <Popup position='bottom' visible={this.data.visiable} bodyStyle={popupBodyStyle}>
                    <Swiper loop={false} height="100%">
                        <SwiperItem>
                            <span className='contentFull' style={{background: '#ace0ff'}}>1</span>
                        </SwiperItem>
                        <SwiperItem>
                            <span className='contentFull' style={{background: '#bcffbd'}}>2</span>
                        </SwiperItem>
                        <SwiperItem>
                            <div className='contentFull' style={{background: '#fff'}}>
                                <Button onClick={() => this.setVisible(false)}>开始使用</Button>
                            </div>
                        </SwiperItem>
                    </Swiper>
                </Popup>
            </div>
        )
    }
}

avm.render(<Demo/>, 'body')