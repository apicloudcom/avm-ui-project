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

export const apiList = [{
  name: '属性',
  icon: 'api_property_icon',
  children: [{
    name: 'appId',
    desc: ['应用的 ID，可以在网站控制台概览里面查看，字符串类型'],
    sampleCode: ['var appId = api.appId; //比如： A6980386445546'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appName',
    desc: ['应用在桌面显示名称，字符串类型'],
    sampleCode: ['var appName = api.appName; //比如： AppLoader'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appVersion',
    desc: ['应用版本号，字符串类型'],
    sampleCode: ['var appVersion = api.appVersion; // 比如： 1.0.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'systemType',
    desc: ['系统类型，字符串类型'],
    enum: [{
      name: 'ios',
      desc: 'iOS系统',
    }, {
      name: 'android',
      desc: 'Android系统',
    }, {
      name: 'win',
      desc: 'Windows系统',
    }, {
      name: 'wp',
      desc: 'Windows Phone系统',
    }],
    sampleCode: ['var systemType = api.systemType; // 比如： ios'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'systemVersion',
    desc: ['手机平台的系统版本，字符串类型'],
    sampleCode: ['var systemVersion = api.systemVersion;  // 比如： 8.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'version',
    desc: ['引擎版本信息，字符串类型'],
    sampleCode: ['var version = api.version;  //比如： 1.0.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'language',
    desc: ['当前系统语言，字符串类型'],
    sampleCode: ['var language = api.language;  //比如： zh-cn'],
    usability: ['iOS系统，Android系统', '可提供的3.0.13及更高版本']
  }, {
    name: 'deviceId',
    desc: ['设备唯一标识，字符串类型', '因系统限制，iOS系统上面无法获取设备唯一标识udid、IMEI号、Mac地址等信息，这里返回的是与证书相关联的uuid，即使应用卸载了重新安装值也不会变化。', '安卓部分系统也存在限制，一些设备上无法获取IMEI号、Mac地址等信息：安卓9.0及之前的系统中，在动态申请“获取手机信息”权限后，可获得IMEI号，而安卓10及以上版本，系统则完全禁止获取IMEI。因此，综合安卓系统的实际情况，deviceId的返回值优先级如下：若当前设备能正常获取IMEI，则返回IMEI号；若IMEI号异常，则返回系统安全码ANDROID_ID；若ANDROID_ID异常，则返回设备MAC地址；若MAC地址异常，则返回设备序列号；若序列号异常，则随机生成一个UUID。该UUID的生命周期自生成起，直至APP被卸载，若APP在同一个设备中被重新安装，将生成新的UUID。'],
    sampleCode: ['var deviceId = api.deviceId;  //比如： FC408F8B-9598-48B6-A740-B9037ADCXXXE'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceToken',
    desc: ['iOS中用于推送的DeviceToken，如果未添加相关推送模块，或者云编译的mobileprovision证书未开启推送功能，则可能会返回空字符串，字符串类型'],
    sampleCode: ['var deviceToken = api.deviceToken;  //比如： a22241adab6c68b3687a9f0f086c540341f4b3f010546d4af4834ada32281615'],
    usability: ['iOS系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceModel',
    desc: ['设备型号，字符串类型', '注：对于2017年秋之前发布的iOS设备，引擎对原始的型号值做了映射，比如iPhone 7上面会直接返回iPhone 7；而对于2017年秋及之后发布的iOS设备，返回的值则是原始的设备型号值，比如在iPhone 8上面返回的可能是iPhone10,1而不是iPhone 8。可以在<a>https://www.theiphonewiki.com/wiki/Models</a>查询iOS设备型号。'],
    sampleCode: ['var deviceModel = api.deviceModel;  // 比如iPhone X的型号： iPhone10,3'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceName',
    desc: ['设备名称，字符串类型'],
    sampleCode: ['var deviceName = api.deviceName;  // 比如：“柚子”的 iPhone'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'uiMode',
    desc: ['设备类型，字符串类型'],
    enum: [{
      name: 'pad'
    }, {
      name: 'phone'
    }, {
      name: 'tv'
    }, {
      name: 'car'
    }, {
      name: 'desk'
    }, {
      name: 'watch'
    }],
    sampleCode: ['var uiMode = api.uiMode;  // 比如：phone'],
    usability: ['iOS系统，Android系统', '可提供的1.2.10及更高版本']
  }, {
    name: 'platform',
    desc: ['当前运行平台，字符串类型'],
    enum: [{
      name: 'app',
      desc: '表示当前运行环境为 App 端'
    }, {
      name: 'web',
      desc: '表示当前运行环境为 Web 端'
    }, {
      name: 'mp',
      desc: '表示当前运行环境为小程序端'
    }],
    sampleCode: ['var platform = api.platform;  // 比如：app'],
    usability: ['iOS系统，Android系统', '可提供的1.3.68及更高版本']
  }, {
    name: 'operator',
    desc: ['运营商名称，若未获取到则返回none，字符串类型'],
    sampleCode: 'var operator = api.operator;  // 比如：中国移动',
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'connectionType',
    desc: ['当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型'],
    enum: [{
      name: 'unknown',
      desc: '未知'
    }, {
      name: 'ethernet',
      desc: '以太网'
    }, {
      name: 'wifi',
      desc: 'wifi'
    }, {
      name: '2g',
      desc: '2G网络'
    }, {
      name: '3g',
      desc: '3G网络'
    }, {
      name: '4g',
      desc: '4G网络'
    }, {
      name: 'none',
      desc: '无网络'
    }],
    sampleCode: 'var connectionType = api.connectionType;  //比如： wifi',
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'fullScreen',
    desc: ['应用是否全屏，布尔类型，只支持iOS'],
    sampleCode: ['var fullScreen = api.fullScreen;  // 比如： true'],
    usability: ['iOS系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'screenWidth',
    desc: ['屏幕分辨率宽，数字类型'],
    sampleCode: ['var screenWidth = api.screenWidth;  // 比如： 640'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'screenHeight',
    desc: ['屏幕分辨率高，数字类型'],
    sampleCode: ['var screenHeight = api.screenHeight;  // 比如：960'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winName',
    desc: ['当前 window 名称，字符串类型', '该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root'],
    sampleCode: ['var winName = api.winName;  //比如： root'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winWidth',
    desc: ['当前 window 宽度，数字类型', '此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局'],
    sampleCode: ['var winWidth = api.winWidth;  // 比如： 320'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winHeight',
    desc: ['当前 window 高度，数字类型', '此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局'],
    sampleCode: ['var winHeight = api.winHeight;  // 比如： 568'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameName',
    desc: ['frame 名称，字符串类型', '若当前环境为 window 中，则该属性值为空字符串'],
    sampleCode: ['var frameName = api.frameName;  //比如： trans-con'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameWidth',
    desc: ['frame 宽度，数字类型', '若当前环境为 window 中，则值和 winWidth 相同'],
    sampleCode: ['var frameWidth = api.frameWidth;  // 比如： 320'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameHeight',
    desc: ['frame 高度，数字类型', '若当前环境为 window 中，则值和 winHeight 相同'],
    sampleCode: ['var frameHeight = api.frameHeight;  // 比如： 504'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'safeArea',
    desc: ['页面不被其它内容（如状态栏）遮住的区域，JSON对象', '通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。'],
    enum: [{
      name: 'top',
      desc: '安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）'
    }, {
      name: 'left',
      desc: '安全区域左边缘，通常为0（iPhone X横屏时为44）'
    }, {
      name: 'bottom',
      desc: '安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）'
    }, {
      name: 'right',
      desc: '安全区域右边缘，通常为0（iPhone X横屏时为44）'
    }],
    sampleCode: 'var safeArea = api.safeArea;        // JSON对象，如{top:20, left:0, bottom:0, right:0}',
    usability: ['iOS系统，Android系统', '可提供的1.2.33及更高版本']
  }, {
    name: 'pageParam',
    desc: ['页面参数，JSON 对象类型', '用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值'],
    sampleCode: ['var pageParam = api.pageParam; //比如： {"name" : "tans-con"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'wgtParam',
    desc: ['widget 参数，JSON 对象类型', '用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值'],
    sampleCode: ['var wgtParam = api.wgtParam;  //比如： {"name": "API Demo"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appParam',
    desc: ['当应用被第三方应用打开时，传递过来的参数，字符串类型', '建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。'],
    sampleCode: ['var appParam = api.appParam;  //比如： {"name": "API Demo"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'statusBarAppearance',
    desc: ['当前应用状态栏是否支持沉浸式效果，布尔类型'],
    sampleCode: ['var statusBarAppearance = api.statusBarAppearance; // 比如： true'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'wgtRootDir',
    desc: ['widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型', '注意该目录为只读，不要往该目录下面写文件'],
    sampleCode: ['var wgtRootDir = api.wgtRootDir;', '/*', '比如：', '/private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'fsDir',
    desc: ['fs: //协议对应地真实目录，字符串类型'],
    sampleCode: ['var fsDir = api.fsDir; ', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/A123456789', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'cacheDir',
    desc: ['cache://协议对应的真实目录，字符串类型', 'iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份'],
    sampleCode: ['var cacheDir = api.cacheDir;', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'boxDir',
    desc: ['box://协议对应的真实目录，字符串类型', 'iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。'],
    sampleCode: ['var boxDir = api.boxDir; ', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/box', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'debug',
    desc: ['获取config.xml配置的debug字段的值。'],
    sampleCode: ['var debug = api.debug;  // 比如： true'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'channel',
    desc: ['渠道号，字符串类型'],
    sampleCode: ['var channel = api.channel; //如：Apple App Store'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'jailbreak',
    desc: ['设备是否越狱，布尔类型'],
    sampleCode: ['var jailbreak = api.jailbreak; //如：false']
  }, {
    name: 'isRecoveryMode',
    desc: ['使用WKWebView加载页面时，若配置了WKWebView渲染进程崩溃后刷新当前页面，则刷新后该属性值为true。只支持iOS，布尔类型'],
    sampleCode: ['if (api.isRecoveryMode) {', ' // to do', '}'],
    usability: ['iOS系统，Android系统', '可提供的1.2.9及更高版本']
  }]
}, {
  name: '窗口系统',
  icon: 'api_win_icon',
  children: [
    {
    name: 'openWin',
    desc: ['打开window, 窗口操作', '若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。', 'openWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window名字'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }, {
      tip: 'headers',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）请求头'
      }]
    }, {
      tip: 'singleInstance',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。'
      }]
    }, {
      tip: 'avm',
      desc: [{
        type: '布尔',
        default: '若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false',
        desc: '（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。'
      }]
    }, {
      tip: 'useWKWebView',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html'
      }]
    }, {
      tip: 'allowAccessFromFile',
      desc: [{
        type: '布尔',
        default: '全局加密下为false',
        desc: '（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'historyGestureEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'syncCookie',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'pageParam',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面参数，新页面中可以通过 api.pageParam 获取'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明',
        desc: '（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'hideTopBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏原生navigationBar控件，该字段只 iOS 有效'
      }]
    }, {
      tip: 'hideBottomBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏原生tabBar控件，该字段只 iOS 有效'
      }]
    }, {
      tip: 'slidBackEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效'
      }]
    }, {
      tip: 'slidBackType',
      desc: [{
        type: '字符串',
        default: 'full',
        desc: '（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",         //动画类型（详见动画类型常量）
  subType:"from_right",//动画子类型（详见动画子类型常量）
  duration:300         //动画过渡时间，默认300毫秒
}

type 取值范围：
none     //无动画效果
push     //新视图将旧视图推开
movein   //新视图移到旧视图上面
fade     //交叉淡化过渡（不支持过渡方向）
flip     //翻转效果
reveal   //将旧视图移开,显示下面的新视图
ripple   //滴水效果（不支持过渡方向）
curl     //向上翻一页
un_curl  //向下翻一页
suck     //收缩效果（不支持过渡方向）
cube     //立方体翻滚效果

subType 取值范围：
from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画
（Android系统flip，ripple，curl，un_curl，suck，cube 类型不支持）`
      }]
    }, {
      tip: 'progress',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面加载进度配置信息，若不传则无加载进度效果',
        fields: `{
  type:    //加载进度效果类型，默认值为 default，取值范围为 default|page，为 page 时，进度效果为仿浏览器类型，固定在页面的顶部
  title:   //type 为 default 时显示的加载框标题，字符串类型
  text:    //type 为 default 时显示的加载框内容，字符串类型
  color:   //type 为 page 时进度条的颜色，默认值为 #45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
  height:  //type 为 page 时进度条高度，默认值为3，数字类型
}`
      }]
    }, {
      tip: 'delay',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性'
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize    //若键盘盖住输入框，页面会自动上移
pan        //若键盘盖住输入框，页面不会自动上移
auto       //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }, {
      tip: 'softInputDismissMode',
      desc: [{
        type: '字符串数组',
        default: "['tap']",
        desc: '（可选项）收起键盘的方式，只iOS有效。',
        fields: `tap       //点击页面收起键盘，可以和drag或interactive同时使用
drag         //拖拽页面时收起键盘，可以和tap同时使用
interactive  //在键盘和页面交界处上下滑动收起键盘，可以和tap同时使用`
      }]
    }, {
      tip: 'softInputBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示键盘上方的工具条。只支持iOS'
      }]
    }, {
      tip: 'overScrollMode',
      desc: [{
        type: '字符串',
        default: 'never',
        desc: '（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。',
        fields: `never            //永远不显示
always           //总是显示
scrolls          //只有当页面内容超出设备屏幕大小，发生滚动行为时显示，建议设置为该模式。`
      }]
    }, {
      tip: 'dragAndDrop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS'
      }]
    }, {
      tip: 'hideHomeIndicator',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS'
      }]
    }, {
      tip: 'defaultRefreshHeader',
      desc: [{
        type: '字符串',
        default: 'pull',
        desc: '（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe'
      }]
    }, {
      tip: 'customRefreshHeader',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用'
      }]
    }],
    sampleCode: [`api.openWin({
      name: 'page1',
      url: './page1.html',
      pageParam: {
          name: 'test'
      }
    });`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeWin',
    desc: ['关闭 window', 'closeWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名字，不传时关闭当前 window，为 root 时无效'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：

from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: [`//关闭当前window，使用默认动画
      api.closeWin();

      //关闭指定window，若待关闭的window不在最上面，则无动画
      api.closeWin({
        name: 'page1'
    });`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeToWin',
    desc: ['关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。', 'closeToWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window 名字'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：


from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: ["api.closeToWin({ name: 'root' });"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'windows',
    desc: ['获取当前所有打开的window。该方法为同步方法。', 'windows()'],
    sampleCode: ['var windows = api.windows();'],
    usability: ['iOS系统，Android系统', '可提供的1.2.95及更高版本']
  }, {
    name: 'setWinAttr',
    desc: ['设置 window 属性', 'setWinAttr({params})'],
    params: [{
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面是否弹动'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'slidBackEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效'
      }]
    }, {
      tip: 'hideHomeIndicator',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式；只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize            //若键盘盖住输入框，页面会自动上移
pan               //若键盘盖住输入框，页面不会自动上移
auto              //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }],
    sampleCode: ['api.setWinAttr({ bounces: true });'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openFrame',
    desc: ['打开 frame', '若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新', '此方法对 frameGroup 里面的 frame 不起作用', 'openFrame({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window名字'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }, {
      tip: 'headers',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）请求头'
      }]
    }, {
      tip: 'avm',
      desc: [{
        type: '布尔',
        default: '若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false',
        desc: '（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。'
      }]
    }, {
      tip: 'useWKWebView',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html'
      }]
    }, {
      tip: 'allowAccessFromFile',
      desc: [{
        type: '布尔',
        default: '全局加密下为false',
        desc: '（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'historyGestureEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'syncCookie',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'pageParam',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面参数，新页面中可以通过 api.pageParam 获取'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明',
        desc: '（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'fixedOn',
      desc: [{
        type: '字符串',
        default: '若当前在tabLayout组件中为ui_layout，否则为ui_window',
        desc: '（可选项）frame所要添加到的目标页面。 ui_window：页面添加到当前window中。若当前在tabLayout组件中，页面只能添加到navigationBar和tabBar之间的区域，无法覆盖在navigationBar、tabBar之上。、ui_layout：页面添加到当前tabLayout中。此时页面能够添加到tabLayout中任意位置，能够覆盖在navigationBar、tabBar之上，只在tabLayout组件中有效。'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '充满整个父页面',
        desc: '（可选项）设置页面的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。',
        fields: `{
x:,             //左上角x坐标，数字类型
y:,             //左上角y坐标，数字类型
w:,             //宽度，若传'auto'，页面从x位置开始自动充满父页面宽度，数字或固定值'auto'
h:,             //高度，若传'auto'，页面从y位置开始自动充满父页面高度，数字或固定值'auto'

marginLeft:,    //相对父页面左外边距的距离，数字类型
marginTop:,     //相对父页面上外边距的距离，数字类型
marginBottom:,  //相对父页面下外边距的距离，数字类型
marginRight:    //相对父页面右外边距的距离，数字类型
        }`
      }]
    }, {
      tip: 'progress',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面加载进度配置信息，若不传则无加载进度效果',
        fields: `{
  type:            //加载进度效果类型，默认值为 default，取值范围为 default|page，为 page 时，进度效果为仿浏览器类型，固定在页面的顶部
  title:           //type 为 default 时显示的加载框标题，字符串类型
  text:            //type 为 default 时显示的加载框内容，字符串类型
  color:           //type 为 page 时进度条的颜色，默认值为 #45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
  height:          //type 为 page 时进度条高度，默认值为3，数字类型
}`
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面已经打开时，是否重新加载页面'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'slidBackType',
      desc: [{
        type: '字符串',
        default: 'full',
        desc: '（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用'
      }]
    }, {
      tip: 'softInputDismissMode',
      desc: [{
        type: '字符串数组',
        default: "['tap']",
        desc: '（可选项）收起键盘的方式，只iOS有效。',
        fields: `tap              //点击页面收起键盘，可以和drag或interactive同时使用
drag             //拖拽页面时收起键盘，可以和tap同时使用
interactive      //在键盘和页面交界处上下滑动收起键盘，可以和tap同时使用`
      }]
    }, {
      tip: 'softInputBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示键盘上方的工具条。只支持iOS'
      }]
    }, {
      tip: 'overScrollMode',
      desc: [{
        type: '字符串',
        default: 'never',
        desc: '（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。',
        fields: `never            //永远不显示
always           //总是显示
scrolls          //只有当页面内容超出设备屏幕大小，发生滚动行为时显示，建议设置为该模式。`
      }]
    }, {
      tip: 'dragAndDrop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时无动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：

from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }, {
      tip: 'defaultRefreshHeader',
      desc: [{
        type: '字符串',
        default: 'pull',
        desc: '（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe'
      }]
    }, {
      tip: 'customRefreshHeader',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件'
      }]
    }],
    sampleCode: [`api.openFrame({
  name: 'page2',
  url: './page2.html',
  rect: {
      x: 0,
      y: 0,
      w: 'auto',
      h: 'auto'
  },
  pageParam: {
      name: 'test'
  }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeFrame',
    desc: ['关闭frame', 'closeFrame({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时关闭当前 frame'
      }]
    }],
    sampleCode: ['api.closeFrame({ name: "page2" });'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'frames',
    desc: ['获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。', 'frames()'],
    sampleCode: ['var frames = api.frames();'],
    usability: ['iOS系统，Android系统', '可提供的1.2.95及更高版本']
  }, {
    name: 'setFrameAttr',
    desc: ['设置frame属性', 'setFrameAttr({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名称'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面是否弹动'
      }]
    }, {
      tip: 'hidden',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）窗口区域 x：左上角x坐标； y：左上角y坐标； w：宽度，若传auto，页面从x位置开始自动充满父页面宽度； h：高度，若传auto，页面从y位置开始自动充满父页面高度'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize            //若键盘盖住输入框，页面会自动上移
pan               //若键盘盖住输入框，页面不会自动上移
auto              //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }],
    sampleCode: [`api.setFrameAttr({
  name: 'page2',
  bounces: true
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'bringFrameToFront',
    desc: ['调整 frame 到前面', 'bringFrameToFront({params})'],
    params: [{
      tip: 'from',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '待调整显示顺序的 frame 名字'
      }]
    }, {
      tip: 'to',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时调整 from 对应 frame 到最前面，否则调整 from 对应 frame 到此 frame 前面'
      }]
    }],
    sampleCode: ["api.bringFrameToFront({ from: 'page1', to: 'page2'});"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'sendFrameToBack',
    desc: ['调整 frame 到后面', 'sendFrameToBack({params})'],
    params: [{
      tip: 'from',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名字'
      }]
    }, {
      tip: 'to',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时调整 from 对应 frame 到最后面，否则调整 from 对应 frame 到此 frame 后面'
      }]
    }],
    sampleCode: ["api.sendFrameToBack({ from: 'page1', to: 'page2' });"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameClient',
    desc: ['设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。', 'setFrameClient({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名字'
      }]
    }],
    sampleCode: [`api.setFrameClient({
  frameName: 'webpage'
}, function(ret, err) {
    switch (ret.state) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            break;
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'animation',
    desc: ['frame 动画，支持平移，缩放，旋转和透明度变化', '仅支持 frame，不支持 window 以及 frameGroup 里面的 frame', 'animation({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '当前 frame',
        desc: 'frame 名字'
      }]
    }, {
      tip: 'delay',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画延迟时间，单位毫秒，默认立即开始'
      }]
    }, {
      tip: 'duration',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画过渡时间，单位毫秒'
      }]
    }, {
      tip: 'curve',
      desc: [{
        type: '字符串',
        default: 'ease_in_out',
        desc: '（可选项）动画曲线类型，指定动画开始和结束时的快慢',
        fields: `ease_in_out     //开始和结束时慢
ease_in         //开始时慢
ease_out        //结束时慢
linear          //整个动画过程速率一样`
      }]
    }, {
      tip: 'repeatCount',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画次数，默认不重复，为-1时无限重复'
      }]
    }, {
      tip: 'autoreverse',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）一次动画结束后是否自动反转动画'
      }]
    }, {
      tip: 'alpha',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）整个页面的透明度，介于0 1之间，Android 不支持'
      }]
    }, {
      tip: 'translation',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）位置平移参数',
        fields: `{
  x: 0,         //x轴方向上的平移距离，默认为0
  y: 0,         //y轴方向上的平移距离，默认为0
  z: 0          //z轴方向上的平移距离，默认为0，Android不支持
}`
      }]
    }, {
      tip: 'scale',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）页面缩放参数，Android 不支持',
        fields: `{
  x: 1,         //x轴方向上的放大倍率，默认为1
  y: 1,         //y轴方向上的放大倍率，默认为1
  z: 1          //z轴方向上的放大倍率，默认为1
}`
      }]
    }, {
      tip: 'rotation',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）页面旋转参数，Android 不支持',
        fields: `{
  degree:0,     //旋转角度，默认0
  x: 0,         //绕x轴旋转，默认为0
  y: 0,         //绕y轴旋转，默认为0
  z: 1          //绕z轴旋转，默认为1
}`
      }]
    }],
    sampleCode: [`api.animation({
    name: 'page1',
    delay: 1000,
    duration: 3000,
    curve: 'ease_in',
    repeatCount: 2,
    autoreverse: true,
    alpha: 0.6,
    translation: {
        x: 0,
        y: 100,
        z: 0
    },
    scale: {
        x: 1.2,
        y: 1,
        z: 1
    },
    rotation: {
        degree: 45,
        x: 0,
        y: 0,
        z: 1
    }
}, function(ret, err) {
    api.alert({
        msg:'动画结束'
    });
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openFrameGroup',
    desc: ['打开frame组', '若frame组已存在，则会把该frame组显示到最前面。frame组打开后，当前页面加载完成后，页面会预加载后面指定个数页面', 'openFrameGroup({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'background',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 组背景，颜色（#fff,#ffffff,rgba(r,g,b,a)）或图片（支持文件路径协议和相对路径）'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）frame 组是否能够左右滚动'
      }]
    }, {
      tip: 'frames',
      desc: [{
        type: '数组',
        default: '无',
        desc: 'frame 数组',
        fields: `[{
    name:'',                                //frame名字，字符串类型，不能为空字符串
    url:'',                                 //页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。字符串类型
    data:'',                                //（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据
    headers:{},                             //（可选项）请求头
    avm:false,                              //（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。
    useWKWebView:false,                     //（可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。
    allowAccessFromFile:false,              //（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。
    historyGestureEnabled:false,            //（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。
    pageParam:{},                           //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
    bounces:true,                           //（可选项）是否弹动，布尔型，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为true。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。
    bgColor:'#fff',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
    scrollToTop:true                        //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
    scrollEnabled:true                      //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
    vScrollBarEnabled:true,                 //（可选项）是否显示垂直滚动条，布尔型，默认值：true
    hScrollBarEnabled:false,                //（可选项）是否显示水平滚动条，布尔型，默认值：false
    scaleEnabled:true,                      //（可选项）页面是否可以缩放，布尔型，默认值：false
    allowEdit:false,                        //（可选项）是否允许长按页面时弹出选择菜单
    softInputMode:'auto'                    //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效。
                                            //取值范围：
                                            //resize    //若键盘盖住输入框，页面会自动上移
                                            //pan       //若键盘盖住输入框，页面不会自动上移
                                            //auto      //默认值，由系统决定如何处理，iOS平台该字段等同于resize
    softInputBarEnabled:false,              //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
    overScrollMode,                         //（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。取值范围：never，always，scrolls
    defaultRefreshHeader:''                 //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
    customRefreshHeader:''                  //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}]`
      }]
    }, {
      tip: 'fixedOn',
      desc: [{
        type: '字符串',
        default: '若当前在tabLayout组件中为ui_layout，否则为ui_window',
        desc: '（可选项）frameGroup所要添加到的目标页面。',
        fields: `ui_window    //页面添加到当前window中。若当前在tabLayout组件中，页面只能添加到navigationBar和tabBar之间的区域，无法覆盖在navigationBar、tabBar之上。
ui_layout    //页面添加到当前tabLayout中。此时页面能够添加到tabLayout中任意位置，能够覆盖在navigationBar、tabBar之上，只在tabLayout组件中有效。`
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '充满整个父页面',
        desc: '（可选项）设置frameGroup的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。',
        fields: `{
  x:,             //左上角x坐标，数字类型
  y:,             //左上角y坐标，数字类型
  w:,             //宽度，若传'auto'，页面从x位置开始自动充满父页面宽度，数字或固定值'auto'
  h:,             //高度，若传'auto'，页面从y位置开始自动充满父页面高度，数字或固定值'auto'

  marginLeft:,    //相对父页面左外边距的距离，数字类型
  marginTop:,     //相对父页面上外边距的距离，数字类型
  marginBottom:,  //相对父页面下外边距的距离，数字类型
  marginRight:    //相对父页面右外边距的距离，数字类型
}`
      }]
    }, {
      tip: 'index',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）默认显示的页面索引'
      }]
    }, {
      tip: 'preload',
      desc: [{
        type: '数字',
        default: '1',
        desc: '（可选项）预加载的 frame 个数，默认加载当前页后面一个'
      }]
    }],
    sampleCode: [`api.openFrameGroup({
  name: 'group1',
  rect: {
      x: 0,
      y: 0,
      w: 'auto',
      h: 'auto'
  },
  frames: [{
      name: 'frame1',
      url: 'frame1.html',
      bgColor: '#fff'
  }, {
      name: 'frame2',
      url: 'frame2.html',
      bgColor: '#fff'
  }]
}, function(ret, err) {
  var index = ret.index;
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeFrameGroup',
    desc: ['关闭frame组', 'closeFrameGroup({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }],
    sampleCode: [`api.closeFrameGroup({
  name: 'group1'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameGroupAttr',
    desc: ['设置 frame 组属性', 'setFrameGroupAttr({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'hidden',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）frame 组是否隐藏，设置显示隐藏并不会改变frame组在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）frame 组区域',
        fields: `{
  x:0,             //左上角x坐标
  y:0,             //左上角y坐标
  w:320,           //宽度，若传'auto'，frame组从x位置开始自动充满父页面宽度
  h:240            //高度，若传'auto'，frame组从y位置开始自动充满父页面高度
}`
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）frame 组是否能够左右滚动'
      }]
    }],
    sampleCode: [`api.setFrameGroupAttr({
  name: 'group1',
  hidden: true
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameGroupIndex',
    desc: ['设置 frame 组当前可见 frame', 'setFrameGroupIndex({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'index',
      desc: [{
        type: '数字',
        default: '无',
        desc: 'frame 索引'
      }]
    }, {
      tip: 'scroll',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否平滑滚动至目标窗口，即是否带有动画'
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否刷新 frame'
      }]
    }],
    sampleCode: [`api.setFrameGroupIndex({
  name: 'group1',
  index: 2
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openPopoverWin',
    desc: ['打开弹出层窗口，只支持iPad', '在弹出层窗口里面不能再打开弹出窗口，页面可以使用所有的 window 和 frame 相关操作，如 openWin、openFrame 等，此方法能够使用openWin方法的所有参数', '使用 execScript() 方法时，引擎只会在整个弹出层里面的窗口中去寻找要执行脚本的窗口，如果要和弹出层下面的窗口间进行通信，可以使用 sendEvent() 方法实现', 'openPopoverWin({params})'],
    params: [{
      tip: 'style',
      desc: [{
        type: '字符串',
        default: 'default',
        desc: '（可选项）弹出窗口展示类型 default：弹出层从底部往上弹出，显示在屏幕中间一片指定区域，周围为黑色半透明； popover：弹出层带指示箭头，可设置箭头方向和位置',
        fields: `default         // 弹出层从底部往上弹出，显示在屏幕中间一片指定区域，周围为黑色半透明
popover         // 弹出层带指示箭头，可设置箭头方向和位置`
      }]
    }, {
      tip: 'width',
      desc: [{
        type: '数字',
        default: '540',
        desc: '（可选项）弹出窗口显示的宽度'
      }]
    }, {
      tip: 'height',
      desc: [{
        type: '数字',
        default: '620',
        desc: '（可选项）弹出窗口显示的高度'
      }]
    }, {
      tip: 'arrowRect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）当style为popover时，箭头指向的位置',
        fields: `{
    x:0,                  //左上角x坐标，数字类型
    y:0,                  //左上角y坐标，数字类型
    w:0,                  //宽度，数字类型
    h:0,                  //高度，数字类型
}`
      }]
    }, {
      tip: 'arrowDirection',
      desc: [{
        type: '字符串',
        default: 'any',
        desc: '（可选项）当style为popover时，箭头指向的方向',
        fields: `left          // 指向左边
right         // 指向右边
up            // 指向上边
down          // 指向下边
any           // 系统根据页面情况选择合适的方向`
      }]
    }],
    sampleCode: [`api.openPopoverWin({
  width: 480,
  height: 400,
  name: 'page1',
  url: './page1.html'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closePopoverWin',
    desc: ['关闭整个弹出层窗口，只 iPad 上面有效', '在当前弹出层里面的任意页面里面调用都会关闭整个弹出层', 'closePopoverWin()'],
    sampleCode: ["api.closePopoverWin();"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openSlidLayout',
    desc: ['打开侧滑式布局', "打开后，其所在 window 的 name 默认为 slidLayout，所以关闭整个侧滑布局可以通过 api.closeWin({name:'slidLayout'}) 实现，同时可以通过 api.openWin({name:'slidLayout'})来把整个侧滑显示到最前面", 'openSlidLayout({params}, callback(ret, err))'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: 'all',
        desc: '（可选项）侧滑类型（left：左侧滑、right：右侧滑、all：左右侧滑）。安卓暂只支持left。'
      }]
    }, {
      tip: 'leftEdge',
      desc: [{
        type: '数字',
        default: '60',
        desc: '（可选项）左侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 leftEdge 参数代替'
      }]
    }, {
      tip: 'rightEdge',
      desc: [{
        type: '数字',
        default: '60',
        desc: '（可选项）右侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 rightEdge 参数代替'
      }]
    }, {
      tip: 'slidPaneStyle',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '侧滑层 window 样式',
        fields: `{
  leftEdge:           //（可选项）左侧滑时，侧滑window停留时露出的宽度，默认60，数字类型
  rightEdge:          //（可选项）右侧滑时，侧滑window停留时露出的宽度，默认60，数字类型
  leftScale:          //（可选项）左侧滑时，侧滑window移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  rightScale:         //（可选项）右侧滑时，侧滑window移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
}`
      }]
    }, {
      tip: 'fixedPaneStyle',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '底部固定层 window 样式',
        fields: `{
  leftEdge:           //（可选项）左侧滑时，固定window能向左移动的最大宽度，默认0，数字类型，只支持iOS
  rightEdge:          //（可选项）右侧滑时，固定window能向右移动的最大宽度，默认0，数字类型，只支持iOS
  leftScale:          //（可选项）左侧滑时，固定window向左移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  rightScale:         //（可选项）右侧滑时，固定window向右移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  leftMaskBg:         //（可选项）左侧滑时，固定window上面的遮罩层背景，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  rightMaskBg:        //（可选项）右侧滑时，固定window上面的遮罩层背景，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  leftBg:             //（可选项）左侧滑时，固定window后面的背景，缩放过程中后面的背景将会显示出来，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  rightBg:            //（可选项）右侧滑时，固定window后面的背景，缩放过程中后面的背景将会显示出来，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
}`
      }]
    }, {
      tip: 'fixedPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '底部固定层 window',
        fields: `{
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize      //若键盘盖住输入框，页面会自动上移
                                      //pan         //若键盘盖住输入框，页面不会自动上移
                                      //auto        //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'slidPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '侧滑层window',
        fields: `{
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize       //若键盘盖住输入框，页面会自动上移
                                      //pan          //若键盘盖住输入框，页面不会自动上移
                                      //auto         //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }],
    sampleCode: [`api.openSlidLayout({
  type: 'left',
  fixedPane: {
      name: 'win1',
      url: 'win1.html'
  },
  slidPane: {
      name: 'win2',
      url: 'win2.html'
  }
}, function(ret, err) {

});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openSlidPane',
    desc: ['向左或右进行侧滑', 'openSlidPane({params})'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '侧滑类型，left 或 right'
      }]
    }],
    sampleCode: [`api.openSlidPane({
  type: 'left'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeSlidPane',
    desc: ['当 SlidPane 处于左或右侧滑状态时，将其收起', 'closeSlidPane()'],
    sampleCode: ['api.closeSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'lockSlidPane',
    desc: ['锁住 SlidPane，使其不能跟随手指滑动而移动', 'lockSlidPane()'],
    sampleCode: ['api.lockSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'unlockSlidPane',
    desc: ['解锁 SlidPane，使其能跟随手指滑动而移动', 'unlockSlidPane()'],
    sampleCode: ['api.unlockSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openDrawerLayout',
    desc: ['打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。', '此方法能够使用 openWin 方法的所有参数，在此基础上增加了 leftPane、rightPane 等参数，可以通过 api.closeWin()方法来关闭整个抽屉式侧滑。', 'openDrawerLayout({params})'],
    params: [{
      tip: 'leftPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '左边侧滑 window',
        fields: `{
  edge:60,                            // 左边侧滑打开后，漏出的半透明区域宽度，默认值为60。此时左边侧滑window的宽度为屏幕宽度减去edge
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false,                  //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto',               //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize      //若键盘盖住输入框，页面会自动上移
                                      //pan         //若键盘盖住输入框，页面不会自动上移
                                      //auto        //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'rightPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '右边侧滑 window',
        fields: `{
  edge:60,                            // 右边侧滑打开后，漏出的半透明区域宽度，默认值为60。此时右边侧滑window的宽度为屏幕宽度减去edge
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize       //若键盘盖住输入框，页面会自动上移
                                      //pan          //若键盘盖住输入框，页面不会自动上移
                                      //auto         //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'slidToOpenPane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否支持在页面边缘处滑动打开drawerPane'
      }]
    }, {
      tip: 'slidToClosePane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）在打开的drawerPane页面，是否支持滑动关闭drawerPane'
      }]
    }, {
      tip: 'tapToClosePane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）在打开的drawerPane页面，是否支持点击遮罩部分关闭drawerPane'
      }]
    }],
    sampleCode: [`api.openDrawerLayout({
  name: 'main',
  url: './main.html',
  animation: {
      type: 'none'
  },
  leftPane: {
      name: 'leftPane',
      url: 'leftPane.html'
  }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'openDrawerPane',
    desc: ['打开抽屉式侧滑Pane', 'openDrawerPane({params})'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '侧滑类型，left 或 right'
      }]
    }],
    sampleCode: [`api.openDrawerPane({
  type: 'left'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'closeDrawerPane',
    desc: ['关闭抽屉式侧滑Pane', 'closeDrawerPane()'],
    sampleCode: [`api.closeDrawerPane();`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'loadData',
    desc: ['在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。', 'loadData({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名称，若要跨 window ，该字段必须指定，首页的名称为 root'
      }]
    }, {
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame名称'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）做为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }],
    sampleCode: [`//在当前window中加载HTML数据
var data = 'hello world';
api.loadData({
    data: data
});

//在当前window中找到名为frmName的frame，并在该frame中加载HTML数据
var data = 'hello world';
api.loadData({
    frameName: 'frmName',
    data: data
});

//在名为winName的window中加载HTML数据
var data = 'hello world';
api.loadData({
    name: 'winName',
    data: data
});

//在名为winName的window中找到名为frmName的frame，并在该frame中加载HTML数据
var data = 'hello world';
api.loadData({
    name: 'winName',
    frameName: 'frmName',
    data: data
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.9及更高版本']
  }, {
    name: 'execScript',
    desc: ['在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。', 'execScript({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名称，若要跨 window 执行脚本，该字段必须指定，首页的名称为 root'
      }]
    }, {
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame名称'
      }]
    }, {
      tip: 'script',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'js代码'
      }]
    }],
    sampleCode: [`//在当前window中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    script: jsfun
});

//在当前window中找到名为frmName的frame，并在该frame中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    frameName: 'frmName',
    script: jsfun
});

//在名为winName的window中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    name: 'winName',
    script: jsfun
});

//在名为winName的window中找到名为frmName的frame，并在该frame中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    name: 'winName',
    frameName: 'frmName',
    script: jsfun
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setBlurEffect',
    desc: ['对当前页面或应用设置模糊效果', '该方法只支持iOS 8及以上系统', 'setBlurEffect({params})'],
    params: [{
      tip: 'style',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '模糊效果风格样式，传none时表示移除模糊效果',
        fields: `none            //移除模糊效果
extra_light     //模糊区域比底层视图的颜色更淡
light           //模糊区域与底层视图的色调近似
dark            //模糊区域比底层视图的颜色更深
regular         //适应界面风格的常规模糊样式，只支持iOS 10及以上系统
prominent       //适应界面风格，使内容更加突出，只支持iOS 10及以上系统`
      }]
    }, {
      tip: 'global',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）false时表示对当前页面添加模糊效果，true时表示对整个应用窗口添加模糊效果'
      }]
    }, {
      tip: 'alpha',
      desc: [{
        type: '数字',
        default: '1',
        desc: '（可选项）模糊区域透明度，介于0和1之间'
      }]
    }, {
      tip: 'borderRadius',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）模糊区域圆角半径'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，设置模糊渐变效果，只支持iOS 9及以上系统',
        fields: `{
  delay:               //动画延迟执行时间，单位毫秒，默认值0，数字类型
  duration:            //动画执行时间，单位毫秒，默认值0，数字类型
  curve:               //动画曲线类型，默认值ease_in_out，字符串类型
}

curve 取值范围：

ease_in_out     //开始和结束时慢
ease_in         //开始时慢
ease_out        //结束时慢
linear          //整个动画过程速率一样`
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '页面区域',
        desc: '（可选项）模糊区域',
        fields: `{
  x:,                  //左上角x坐标，数字类型
  y:,                  //左上角y坐标，数字类型
  w:,                  //宽度，数字类型
  h:,                  //高度，数字类型
}`
      }]
    }],
    sampleCode: [`// 设置应用模糊效果：
api.addEventListener({
  name: 'pause'
}, function(){
  api.setBlurEffect({
      style: 'light',
      global: true
  });
});

api.addEventListener({
  name: 'resume'
}, function(){
  api.setBlurEffect({
      style: 'none',
      global: true
  });
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.61及更高版本']
  }, {
    name: 'removeLaunchView',
    desc: ['移除启动图。若 config.xml 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。', 'removeLaunchView({params})'],
    params: [{
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时不使用动画',
        fields: `{
  type:"fade",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：


from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: [`api.removeLaunchView({
  animation: {
      type: 'fade',
      duration: 500
  }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'showLaunchView',
    desc: ['重新显示闪屏广告，若没有闪屏广告则不显示。', 'showLaunchView()'],
    sampleCode: [`api.showLaunchView();`],
    usability: ['iOS系统，Android系统', '可提供的1.2.37及更高版本']
  }, {
    name: 'parseTapmode',
    desc: ['解析元素 tapmode 属性，优化点击事件处理', '默认页面加载完成后，引擎会对 dom 里面的元素进行 tapmode 属性解析，若是之后用代码创建的 dom 元素，则需要调用该方法后 tapmode 属性才会生效', 'parseTapmode()'],
    sampleCode: [`api.parseTapmode();`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '高级窗口',
  icon: 'api_advance_win_icon'
}, {
  name: '数据存储',
  icon: 'api_storage_icon'
}, {
  name: '消息事件',
  icon: 'api_event_icon'
}, {
  name: 'UI组件',
  icon: 'api_ui_icon'
}, {
  name: '多媒体',
  icon: 'api_media_icon'
}, {
  name: '模块加载',
  icon: 'api_module_icon'
}, {
  name: 'WebApp历史',
  icon: 'api_history_icon',
  children: [{
    name: 'historyBack',
    desc: ['当前 window 或者 frame 的 a 标签历史记录后退一页', 'historyBack({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名称，若不传则表示对当前页面进行操作'
      }]
    }, {
      tip: 'query',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否只查询。为 true 时表示只查询是否可以后退，而不进行后退操作'
      }]
    }],
    sampleCode: [`api.historyBack({
  frameName: 'detail'
}, function(ret, err) {
    if (!ret.status) {
        api.closeWin();
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'historyForward',
    desc: ['当前 window 或者 frame 的 a 标签历史记录前进一页', 'historyForward({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名称，若不传则表示对当前页面进行操作'
      }]
    }, {
      tip: 'query',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否只查询。为 true 时表示只查询是否可以前进，而不进行前进操作'
      }]
    }],
    sampleCode: [`api.historyForward({
  frameName: 'detail'
}, function(ret, err) {
    if (!ret.status) {

    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '其他',
  icon: 'api_ui_icon',
  children: [{
    name: 'pageUp',
    desc: ['页面向上滚动一页', 'pageUp({params}, callback(ret, err))'],
    params: [{
      tip: 'top',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否直接滚动到最顶部'
      }]
    }],
    sampleCode: [`api.pageUp(function(ret, err) {
  if (!ret.scrolled) {
      //已经滚动到顶部
  }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'pageDown',
    desc: ['页面向下滚动一页', 'pageDown({params}, callback(ret, err))'],
    params: [{
      tip: 'bottom',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否直接滚动到最底部'
      }]
    }],
    sampleCode: [`api.pageDown(function(ret, err) {
  if (!ret.scrolled) {
      //已经滚动到底部
  }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }]
}]