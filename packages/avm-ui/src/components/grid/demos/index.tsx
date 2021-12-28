import { Grid, GridItem } from '../grid'
import { DemoBlock } from '../../../demos'
import '../grid.less'
import './index.less'
const onClick = () => {
  alert('点击啦')
}
const template = 
<>
  <DemoBlock title='基础用法'>
    <Grid columns={3}>
      <GridItem>
        <div className={'grid-demo-item-block'}>A</div>
      </GridItem>
      <GridItem>
        <div className={'grid-demo-item-block'}>B</div>
      </GridItem>
      <GridItem>
        <div className={'grid-demo-item-block'}>C</div>
      </GridItem>
      <GridItem>
        <div className={'grid-demo-item-block'}>D</div>
      </GridItem>
      <GridItem>
        <div className={'grid-demo-item-block'}>E</div>
      </GridItem>
    </Grid>
  </DemoBlock>
  <DemoBlock title='控制格子的跨度'>
    <Grid columns={3}>
      <GridItem>
        <div className={'grid-demo-item-block'}>A</div>
      </GridItem>
      <GridItem span={2}>
        <div className={'grid-demo-item-block'}>B</div>
      </GridItem>
      <GridItem span={2}>
        <div className={'grid-demo-item-block'}>C</div>
      </GridItem>
      <GridItem>
        <div className={'grid-demo-item-block'}>D</div>
      </GridItem>
      <GridItem span={3}  onClick={onClick}>
        <div className={'grid-demo-item-block'}>E</div>
      </GridItem>
    </Grid>
  </DemoBlock>
</>

avm.render(template, 'body')
