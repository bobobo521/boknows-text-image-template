# Text → Image Letters · 通用字母图片交互模板

可复用的全屏作品集首页：文字在悬停、触摸和随机播放时变成图片，邻字轻微让位，离开后弹性退场。使用原生 HTML、CSS、JavaScript，无依赖、无需构建。

输入自己的标题，让 Codex 按字符位置设计并生成对应图片，再接入现有交互。风格与题材开放，核心是**有想象力，而且不同图片之间要有真正的风格差异**。

仓库附带的 22 张布艺图片只是可运行的示例，不是模板的风格限制。自己的标题有 N 个非空格字符位置，就制作 2N 张图片；重复字母也独立设计。

## 让 Codex 定制你的版本

创建自己的仓库并在 Codex 中打开，然后发送：

> 请将这个模板的标题改为「你的标题」。先阅读 AGENTS.md 和 docs/MATERIALS.md，按我的每个非空格字符位置设计两种图片，重复字母使用不同元素。运用多种视觉语言，避免统一成一套 3D 图标。使用图像生成工具制作透明素材，检查字母可辨认、完整轮廓与小尺寸效果，压缩为 WebP，更新 config.js、网页标题和简介，并记录每张素材的构思与完整提示词。完成后运行检查并提供预览。

详细流程见 [素材设计与制作指南](docs/MATERIALS.md)。生成在 Codex 中完成，网页自身不调用图像生成接口。

## 快速开始

点击 GitHub 的 **Use this template** 创建自己的仓库，或下载 ZIP。打开 index.html 即可预览。建议启动本地服务：

```sh
python3 -m http.server 8000
```

浏览器访问 http://localhost:8000 。任何支持静态文件的托管平台都可部署整个目录。

## 修改配置

编辑 config.js：

```js
window.LETTER_CONFIG = {
  text: 'bo',
  imagesByPosition: [
    ['00-b-a.webp', '00-b-b.webp'],
    ['01-o-a.webp', '01-o-b.webp']
  ],
  enterDuration: 340,
  exitDuration: 620,
  backgroundVideo: ''
};
```

- 图片放入 assets/，imagesByPosition 按字符位置排列，不计算空格。
- 每个位置可放一张或多张；空数组或缺省会保持文字。连续展示会尽量避开上一张。
- 修改 text 后也要调整素材映射。自带素材只覆盖示例 `boknows word`，不会自动生成其他字母图片。
- 当前排版适合短标题；长标题应同步调整 style.css 中 h1 的字号和页面宽度。
- index.html 修改辅助文案、标签、网页标题和简介；style.css 修改颜色、布局和字间距。
- 可把自己的视频放入 assets/，将 backgroundVideo 设为 `assets/your-video.webm`。默认静音循环并铺满，比例不同会裁切。页脚“上传背景视频”为本地临时预览，文件不上传服务器，刷新后清空。

## 交互与适配

开场逐字展示图片并恢复文字；空闲时随机切换；悬停切换、触摸支持；图片占位推动相邻文字；离开即开始约 620ms 缩小淡出。提供重播与暂停按钮，并支持系统减少动态效果设置。非 BMP 的单字符通常可显示，但组合 emoji、复杂文字塑形未专门适配。

## 文件

- config.js：公开配置入口
- app.js：动画与背景视频交互
- style.css / index.html：样式与结构
- assets/：22 张透明 WebP，总量约 1.98 MB
- docs/MATERIALS.md：素材制作方法与设计规则
- docs/materials.json：内置布艺示例的完整提示词、位置、文件名和说明
- scripts/validate.mjs：配置与素材基础检查

## 验证

```sh
node --check app.js
node scripts/validate.mjs
```

发布前请在目标浏览器检查开场、快速重复悬停、触摸、移动布局和自选视频。此模板不是组件库；更换字号、语言或图片比例后需自行校准。

## 许可与来源

代码和本仓库所附生成素材按 [MIT License](LICENSE) 提供，可修改和复用，保留许可文本。素材使用 OpenAI 内置图像生成工具独立生成，未包含参考品牌图、原始参考照片或私人背景视频。动效受文字与图片替换交互启发，本项目为独立实现，与 OpenAI 官方网站无隶属关系。

---

**English:** A dependency-free, configurable text-to-image portfolio hero with hover/touch interaction, randomized image variants, elastic transitions, and 22 sample textile assets and an open-ended mixed-media generation workflow. Edit config.js, replace assets/, and open index.html. Full generation prompts and workflow are included in docs/. MIT licensed.
