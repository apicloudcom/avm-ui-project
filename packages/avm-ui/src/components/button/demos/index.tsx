import Button from "../";
import {DemoBlock} from "../../../demos";
import Space from "../../space";
import {Icon} from "../../icon";

const template =
  <>
    <DemoBlock title='不同颜色的按钮'>
      <Space wrap>
        <Button color='default'
          onClick={() => {
            alert('hello.')
          }}
        >
          Default
        </Button>
        <avm-button>Primary</avm-button>
        <Button color='success'>Success</Button>
        <Button color='danger'>Danger</Button>
        <Button color='warning'>Warning</Button>
      </Space>
    </DemoBlock>
    <DemoBlock title='块级按钮'>
      <Button block color='primary' size='large'>
        Block Button
      </Button>
    </DemoBlock>
    <DemoBlock title='填充模式'>
      <Space wrap>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        <Button color='primary' fill='outline'>
          Outline
        </Button>
        <Button color='primary' fill='none'>
          None
        </Button>
      </Space>
    </DemoBlock>
    <DemoBlock title='不同大小的按钮'>
      <Space wrap align='center'>
        <Button size='mini' color='primary'>
          Mini
        </Button>
        <Button size='small' color='primary'>
          Small
        </Button>
        <Button size='middle' color='primary'>
          Middle
        </Button>
        <Button size='large' color='primary'>
          Large
        </Button>
      </Space>
    </DemoBlock>
    <DemoBlock title='禁用状态'>
      <Space wrap>
        <Button disabled>Disabled</Button>
        <Button disabled color='primary'>
          Disabled
        </Button>
      </Space>
    </DemoBlock>
    <DemoBlock title='加载状态'>
      <Space wrap>
        <Button loading color='primary' loadingText='加载中'>
          Loading
        </Button>
        <Button loading loadingText="Loading...">Loading</Button>
      </Space>
    </DemoBlock>
    <DemoBlock title='带图标的按钮'>
      <Button>
        <Space>
          <Icon type={'SearchOutline'}/>
          <span>搜索</span>
        </Space>
      </Button>
    </DemoBlock>
    <DemoBlock title='不同类型圆角'>
      <Space wrap>
        <Button shape='default' color='primary'>
          Default Button
        </Button>
        <Button block shape='rounded' color='primary'>
          Rounded Button
        </Button>
        <Button block shape='rectangular' color='primary'>
          Rectangular Button
        </Button>
      </Space>
    </DemoBlock>
  </>

avm.render(template, "body");
