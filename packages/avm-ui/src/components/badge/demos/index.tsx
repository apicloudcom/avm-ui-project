import {Badge, dot} from "../badge";
import './index.less';
import {DemoBlock} from "../../../demos";
import Space from "../../space";
import CFImg from  './img/cf.svg'
const template =
  <>
    <DemoBlock title='基本用法'>
      <Space>
        <Badge color='#108ee9' content='5'>
          <div className="box"/>
        </Badge>
        <Badge content='新'>
          <div className="box"/>
        </Badge>
        <Badge content='更新'>
          <div className="box"/>
        </Badge>
        <Badge>
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='自定义颜色和偏移量'>
      <Space style={{ '--gap': '24px' }}>
        <Badge
          color='#108ee9'
          content={dot}
          right='100%'
          top='100%'>
          <div className="box"/>
        </Badge>
        <Badge
          color='#87d068'
          content={dot}
          right="100%"
        >
          <div className="box"/>
        </Badge>
        <Badge content={dot}>
          <div className="box"/>
        </Badge>
        <Badge color='orange' content={dot} top="100%">
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='自定义徽标内容'>
      <Space>
        <Badge content={<img src={CFImg}></img>}>
          <div className="box"/>
        </Badge>
      </Space>
    </DemoBlock>
    <DemoBlock title='独立展示'>
      <Space>
        <Badge content='99+'/>
        <Badge content='新消息!'/>
      </Space>
    </DemoBlock>
  </>

avm.render(template, "body");
