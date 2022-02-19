import {Loading} from "../loading";
import '../loading.less';
import {DemoBlock} from "../../../demos";

const template =
  
  <>
    <DemoBlock title='默认'>
      <Loading />
    </DemoBlock>
    <DemoBlock title='黑色的 Loading'>
      <Loading color='#333' />
    </DemoBlock>
    <DemoBlock title='白色的 Loading' background='#a5a5a5'>
      <Loading color='white' />
    </DemoBlock>
    <DemoBlock title='自动适配当前字号'>
        <Loading size='small' />
        <Loading />
        <Loading size='big' />
    </DemoBlock>
    <DemoBlock title='自动适配当前文本颜色'>
      <div>
        <Loading color='#00b578' />
        <span>绿色文字</span>
      </div>
      <div>
        <Loading color='#ff3141' />
        <span>红色文字</span>
      </div>
    </DemoBlock>
  </>

avm.render(template, "body");