import {Ellipsis} from "../ellipsis";
import {DemoBlock} from "../../../demos";

const content =
  '啊啊啊啊啊啊啊啊啊啊哒哒哒哒哒哒是哒哒哒哒啊啊啊啊啊啊啊啊啊啊哒哒哒哒哒哒是哒哒哒哒'


const template =
  <>
    <DemoBlock title='ellipsis省略文本'>
        <Ellipsis content = {content} direction = "middle" expandText="展开" collapseText="收起" > Default</Ellipsis>
    </DemoBlock>
  </>

avm.render(template, "body");
