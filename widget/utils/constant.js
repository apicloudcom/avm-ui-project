export const avmContentList = [{
    type: 'base',
    text: '容器组件',
    tab: 'baseContainer',
    icon: 'avm_base_icon',
    children: [{
      text: 'view',
      component: 'avm-base-view'
    }, {
      text: 'swiper',
      component: 'avm-base-swiper'
    }, {
      text: 'scroll-view',
      component: 'avm-base-scroll-view'
    }, {
      text: 'list-view',
      component: 'avm-base-list-view'
    }, {
      text: 'grid-view',
      component: 'avm-base-grid-view'
    }, {
      text: 'refresh',
      component: 'avm-base-refresh'
    }, {
      text: 'frame',
      component: 'avm-base-frame'
    }, {
      text: 'frame-group',
      component: 'avm-base-frame-group'
    }]
  }, {
    type: 'base',
    text: '表单组件',
    tab: 'baseForm',
    icon: 'avm_form_icon',
    children: [{
      text: 'input',
      component: 'avm-base-input'
    }, {
      text: 'textarea',
      component: 'avm-base-textarea'
    }, {
      text: 'switch',
      component: 'avm-base-switch'
    }, {
      text: 'slider',
      component: 'avm-base-slider'
    }, {
      text: 'picker',
      component: 'avm-base-picker'
    }, {
      text: 'checkbox',
      component: 'avm-base-checkbox'
    }, {
      text: 'checkbox-group',
      component: 'avm-base-checkbox-group'
    }, {
      text: 'radio',
      component: 'avm-base-radio'
    }, {
      text: 'radio-group',
      component: 'avm-base-radio-group'
    }, {
      text: 'form',
      component: 'avm-base-form'
    }]
  }, {
    type: 'base',
    text: '展示组件',
    tab: 'baseShow',
    icon: 'avm_show_icon',
    children: [{
      text: 'text',
      component: 'avm-base-text'
    }, {
      text: 'image',
      component: 'avm-base-image'
    }, {
      text: 'button',
      component: 'avm-base-button'
    }, {
      text: 'rich-text',
      component: 'avm-base-rich-text'
    }, {
      text: 'video',
      component: 'avm-base-video'
    }, {
      text: 'progress',
      component: 'avm-base-progress'
    }, {
      text: 'camera',
      component: 'avm-base-camera'
    }]
  }, {
    type: 'avm',
    text: '基础组件',
    tab: 'avmBase',
    icon: 'avm_base_icon',
    children: [{
      text: 'Button 按钮',
      component: 'demo-button'
    },
    // {
    //   text: 'icon 图标',
    //   component: 'demo-icon'
    // },
    {
      text: 'List 列表',
      component: 'demo-list'
    }, {
      text: 'Space 间距',
      component: 'demo-space'
    }]
  }, {
    type: 'avm',
    text: '数据展示',
    tab: 'avmDataShow',
    icon: 'avm_form_icon',
    children: [{
      text: 'Badge 徽标',
      component: 'demo-badge'
    }, {
      text: 'Card 卡片',
      component: 'demo-card'
    }, {
      text: 'Image 图片',
      component: 'demo-image'
    }, {
      text: 'ImageViewer 图片查看器',
      component: 'demo-image-viewer'
    }, {
      text: 'InfiniteScroll 无限滚动',
      component: 'demo-infinite-scroll'
    }, {
      text: 'Steps步骤条',
      component: 'demo-steps'
    }, {
      text: 'Swiper 走马灯',
      component: 'demo-swiper'
    }, {
      text: 'Tag 标签',
      component: 'demo-tag'
    }, {
      text: 'Popover 气泡弹出框',
      component: 'demo-popover'
    }]
  }, {
    type: 'avm',
    text: '数据录入',
    tab: 'avmDataEntry',
    icon: 'avm_show_icon',
    children: [{
      text: 'CheckList 可勾选列表',
      component: 'demo-checklist'
    }, {
      text: 'Checkbox 复选框',
      component: 'demo-checkbox'
    }, {
      text: 'Input 输入框',
      component: 'demo-input'
    }, {
      text: 'Radio 单选框',
      component: 'demo-radio'
    }, {
      text: 'Rate 评分',
      component: 'demo-rate'
    }, {
      text: 'Search 搜索框',
      component: 'demo-search'
    }, {
      text: 'Selector 选择组',
      component: 'demo-selector'
    }, {
      text: 'Stepper 步进器',
      component: 'demo-stepper'
    }, {
      text: 'Switch 开关',
      component: 'demo-switch'
    }, {
      text: 'TextArea 文本域',
      component: 'demo-textarea'
    }]
  }, {
    type: 'avm',
    text: '反馈',
    tab: 'avmTickling',
    icon: 'avm_tick_icon',
    children: [{
      text: 'ActionSheet 动作面板',
      component: 'demo-action-sheet'
    }, {
      text: 'Empty 空状态',
      component: 'demo-empty'
    }, {
      text: 'ErrorBlock 异常',
      component: 'demo-error-block'
    }, {
      text: 'Loading 加载中',
      component: 'demo-loading'
    }, {
      text: 'Mask 遮罩层',
      component: 'demo-mask'
    }, {
      text: 'ProgressBar 进度条',
      component: 'demo-progress-bar'
    }, {
      text: 'Result 结果',
      component: 'demo-result'
    }]
  }, {
    type: 'avm',
    text: '布局和导航',
    tab: 'avmLayout',
    icon: 'avm_layout_icon',
    children: [{
      text: 'Collapse 折叠面板',
      component: 'demo-collapse'
    }, {
      text: 'Divider 分割线',
      component: 'demo-divider'
    }, {
      text: 'FloatingPanel 浮动面板',
      component: 'demo-floating-panel'
    }, {
      text: 'Grid 栅格',
      component: 'demo-grid'
    }, {
      text: 'NavBar 导航栏',
      component: 'demo-nav-bar'
    }, {
      text: 'Popup 弹出层',
      component: 'demo-popup'
    }, {
      text: 'SideBar 侧边导航',
      component: 'demo-side-bar'
    }, {
      text: 'TabBar 标签栏',
      component: 'demo-tab-bar'
    }, {
      text: 'Tabs 标签页',
      component: 'demo-tabs'
    }]
  }, {
    type: 'avm',
    text: '其他',
    tab: 'avmOther',
    icon: 'avm_other_icon',
    children: [{
      text: 'DesenseText 脱敏',
      component: 'demo-desense-text'
    }, {
      text: 'Dropdown 下拉菜单',
      component: 'demo-dropdown'
    },
    // {
    //   text: 'Ellipsis 文本省略',
    //   component: 'demo-ellipsis'
    // }, 
    {
      text: 'ImageUploader 图片上传',
      component: 'demo-image-uploader'
    }, {
      text: 'NumberKeyboard 数字键盘',
      component: 'demo-number-keyboard'
    }, {
      text: 'TreeSelect 级联选择器',
      component: 'demo-tree-select'
    }]
  }]