import { ImageUploader } from '../image-uploader'
import {Space} from '../../space/space'
import { DemoBlock, DemoDescription } from '../../../demos'
import pictureIcon from '../img/picture.png'

import '../image-uploader.less'
import '../../space/space.less'

// 基础用法
class Basic extends Component {
  data = {
    fileList: [
      {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'},
    ]
  }

  setFileList = imgs => {
    console.log(JSON.stringify(imgs))
    this.data.fileList = imgs
  }

  render = () => {
    return (
      <ImageUploader
        defaultValue={this.data.fileList}
        onChange={imgs => this.setFileList(imgs)}
      />
    )
  }
}
// 上传状态
class UploadStatus extends Component {
  data = {
    fileList: [
      {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'},
    ]
  }

  setFileList = imgs => {
    console.log(JSON.stringify(imgs))
    this.data.fileList = imgs
  }
  
  render = () => {
    return (
      <ImageUploader
        value={this.data.fileList}
        onChange={imgs => this.setFileList(imgs)}
      />
    )
  }
}
// 限制上传大小
class LimitSize extends Component {
  data = {
    fileList: [
      {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'},
    ]
  }

  setFileList = imgs => {
    console.log(JSON.stringify(imgs))
    this.data.fileList = imgs
  }

  beforeUpload = (files: File[]) => {
    return files.filter(file => {
      if (file.size > 1024 * 1024) {
        api.alert({msg: '请选择小于 1M 的图片'})
        return false
      }
      return true
    })
  }

  render = () => {
    return (
      <ImageUploader
        value={this.data.fileList}
        onChange={imgs => this.setFileList(imgs)}
        beforeUpload={this.beforeUpload}
      />
    )
  }
}
// 限制图片数量
class LimitCount extends Component {
  data = {
    maxCount: 3,
    fileList: [
      {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
    ]
  }

  setFileList = imgs => {
    console.log(JSON.stringify(imgs))
    this.data.fileList = imgs
  }

  render = () => {
    return (
      <ImageUploader
        value={this.data.fileList}
        onChange={imgs => this.setFileList(imgs)}
        multiple
        maxCount={3}
        showUpload={this.data.fileList.length < this.data.maxCount}
        onCountExceed={exceed => {
          api.alert({msg: `最多选择 ${this.data.maxCount} 张图片，你多选了 ${exceed} 张`})
        }}
      />
    )
  }

  
}
// 删除确认
class DeleteImage extends Component {
    data = {
        fileList: [
            {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        ]
    }

    setFileList = imgs => {
      console.log(JSON.stringify(imgs))
      this.data.fileList = imgs
    }

    render = () => {
        return (
            <ImageUploader
            value={this.data.fileList}
            onChange={imgs => this.setFileList(imgs)}
            onDelete={() => {
                return api.alert({
                    msg: '是否确定删除？'
                })
            }}
            />
        )
    }
}
// 自定义大小
class CustomeSize extends Component {
    data = {
        fileList: [
            {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        ]
    }

    setFileList = imgs => {
      console.log(JSON.stringify(imgs))
      this.data.fileList = imgs
    }

    render = () => {
        return (
            <ImageUploader
              cellSize="90px"
              value={this.data.fileList}
              onChange={imgs => this.setFileList(imgs)}
            />
        )
    }
}
// 自定义上传按钮
class CustomUploadButton extends Component {
    data = {
        fileList: [
            {url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        ]
    }

    setFileList = imgs => {
      console.log(JSON.stringify(imgs))
      this.data.fileList = imgs
    }

    render = () => {
        return (
            <ImageUploader value={this.data.fileList} onChange={imgs => this.setFileList(imgs)}>
            <div
                style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#999999',
                }}>
                <img src={pictureIcon} alt="自定义"/>
            </div>
            </ImageUploader>
        )
    }
}

const template =
<>
    <DemoBlock title='基础用法'>
    <Basic />
    </DemoBlock>
    <DemoBlock title='上传状态'>
    <Space direction='vertical'>
        <UploadStatus />
        <DemoDescription content='尝试上传几张图片，可以看到上传中和失败的效果' />
    </Space>
    </DemoBlock>
    <DemoBlock title='限制上传大小'>
    <Space direction='vertical'>
        <LimitSize />
        <DemoDescription content='当用户选择的文件超过 1M 时，跳过上传并提示用户' />
    </Space>
    </DemoBlock>
    <DemoBlock title='限制图片数量'>
    <Space direction='vertical'>
        <LimitCount />
        <DemoDescription content='限制用户最多上传 3 张图片，当达到最大数量时隐藏掉上传按钮' />
    </Space>
    </DemoBlock>
    <DemoBlock title='删除图片确认'>
    <Space direction='vertical'>
        <DeleteImage />
        <DemoDescription content='当用户删除图片时，进行确认，确认后可删除图片' />
    </Space>
    </DemoBlock>
    <DemoBlock title='自定义大小'>
    <CustomeSize />
    </DemoBlock>
    <DemoBlock title='自定义上传按钮'>
    <CustomUploadButton />
    </DemoBlock>
</>

avm.render(template, 'body')
