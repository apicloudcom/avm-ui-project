#!/usr/bin/env node
import {Command} from 'commander'
import {onCreate} from "./commands/create.js";
import {onGenIcon} from "./commands/genIcon.js";
import {onBuild} from "./commands/build.js";

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
  // 注册命令回调
  .action(onCreate)


program.command('icon')
  .description('生成 icon 组件源码')
  .action(onGenIcon)


program.command('widget')
  .description('生成 icon 组件源码')
  .action(onBuild)

// 执行命令行参数解析
program.parse()

