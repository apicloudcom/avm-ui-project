#!/usr/bin/env node
import {Command} from 'commander'
import {onCreate} from "./commands/create.js";
import {onGenIcon} from "./commands/genIcon.js";
import {onWidget} from "./commands/widget.js";
import {onBuild} from "./commands/build.js";
import {onPreview} from "./commands/preview.js";
import {onJSON} from "./commands/json.js";


export const uiDir = `packages/avm-ui`;
export const dist = 'widget';

// 创建命令对象
const program = new Command()

// 注册命令、参数、回调
program
  // 注册 create 命令
  .command('create')
  // 添加命令描述
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option('-t --type <type>', `创建类型，可选值：component, lib-entry`)
  .alias('C')
  // 注册命令回调
  .action(onCreate)


program.command('icon')
  .description('生成 icon 组件源码')
  .alias('I')
  .action(onGenIcon)


program.command('widget')
  .description('生成 widget 演示包')
  .alias('W')
  .action(onWidget)


program.command('build')
  .description('生成 avm-ui 组件源码')
  .option('-t --type <type>', `创建类型 默认 single`)
  .option('-p --path <path>', `输出路径`)
  .option('-d --dev <true>', `是否输出的是 dev 未压缩`)
  .alias('B')
  .action(onBuild)

program.command('preview')
  .description('在 APP 中预览一个 demo 页面')
  .option('<page>', '预览的页面')
  .alias('P')
  .action(onPreview)

program.command('json')
  .description('生成组件的 json 文件')
  .alias("J")
  .action(onJSON)

// 执行命令行参数解析
program.parse();


