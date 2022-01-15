# ImageUploader 图片上传

<code src="./demos/index.tsx"></code>

# API

## ImageUploader

| 属性          | 说明                                                                          | 类型                                                      | 默认值    |
| ------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- | --------- |
| value         | 已上传的文件列表                                                              | `FileItem[]`                                              | -         |
| defaultValue  | 默认已上传的文件列表                                                          | `FileItem[]`                                              | -         |
| onChange      | 已上传的文件列表变化时触发                                                    | `(files: FileItem[]) => void`                             | -         |
| accept        | 文件类型，`jpg / png`                                                        | `string`                                                  | `jpg`     |
| maxCount      | 最多上传几张图片，超出数量会自动隐藏上传按钮                                     | `number`                                                  | -       |
| onCountExceed | 用户选择的图片数量超出最大限制时触发                                          | `(exceed: number) => void`                                | -         |
| disableUpload | 是否禁用上传按钮                                                              | `boolean`                                                 | `false`   |
| showUpload    | 是否展示上传按钮                                                              | `boolean`                                                 | `true`    |
| deletable     | 是否展示删除按钮                                                              | `boolean`                                                 | `true`    |
| capture       | 图片选取模式，可选值为 `library`（图片库）`camera`（直接调起摄像头）`album`（相册） | `string`                                                | `library` |
| onPreview     | 点击预览图片                                                                  | `(index: number) => void`                                 | `暂不支持此功能` |
| beforeUpload  | 文件读取前的回调函数，返回 `false` 可终止文件读取，支持返回 `Promise`         | `(file: File[]) => Promise<File[]> \| File[]`             | -         |
| onDelete      | 删除已上传成功的图片时触发，如果返回 `false` 表示阻止删除，支持返回 `Promise` | `(file: FileItem) => boolean \| Promise<boolean> \| void` | -         |
| uploadIcon      | 自定义上传icon                                                                | `ReactNode`                                         | -         |
| gap           | 每张图片间距                                                                    | -                                                    | `12px`   | 
| cellSize      | 图片和上传按钮的大小                                                             | -                                                    | `80px` |
