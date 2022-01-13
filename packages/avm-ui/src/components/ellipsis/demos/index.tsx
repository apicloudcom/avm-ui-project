import { Ellipsis } from "../ellipsis";
import { DemoBlock } from "../../../demos";

const content =
  'APICloud是国内较早布局低代码开发的平台之一，其发布的低代码效率工具Plus Mode，为IT项目中每个角色提供专业工具，将需求分析、产品原型、UI设计、前端开发、后端开发紧密衔接，并基于行业大数据对前置环节进行复用，最终缩减大量重复性工作，有效提升30%-60% IT项目效率.'


const template =
  <>
    <DemoBlock title='尾部省略'>
      <Ellipsis direction='end' content={content} />
    </DemoBlock>

    <DemoBlock title='头部省略'>
      <Ellipsis direction='start' content={content} />
    </DemoBlock>

    <DemoBlock title='中间省略'>
      <Ellipsis direction='middle' content={content} />
    </DemoBlock>

    <DemoBlock title='多行省略'>
      <Ellipsis direction='end' rows={3} content={content} />
    </DemoBlock>

    <DemoBlock title='展开收起'>
      <Ellipsis
        direction='end'
        content={content}
        expandText='展开'
        collapseText='收起'
      />
    </DemoBlock>

    <DemoBlock title='仅展开'>
        <Ellipsis direction='end' content={content} expandText='展开' />
        <Ellipsis direction='start' content={content} expandText='展开' />
        <Ellipsis direction='middle' content={content} expandText='展开' />
    </DemoBlock>
  </>


avm.render(template, "body");
