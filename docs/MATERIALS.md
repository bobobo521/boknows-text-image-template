# 通用素材设计与制作指南

素材设计的核心是：**有想象力，而且不同图片之间要有真正的风格差异。**

## 核心设计规则

- **表现手法多样**：平面剪影、印花、渐变、抽象构成、网点、拼贴、织物、玻璃、镜面金属、立体场景都可以使用，不统一成一套 3D 图标。
- **题材不设限**：不限于设计工具，可以是动物、植物、食物、日常物件或超现实组合。要有巧思，避免只给字体换材质。
- **外轮廓不必是字母**：可以由物件组成字母，也可以把字母放在完整物件内部，例如花心刺绣、苹果标签、贴片印字。允许衬底、底座和附属元素。
- **保持字母可辨认**：造型可以夸张、变形、突破原字体边界，但放回标题后仍能读出对应字母。
- **重复字母使用不同元素**：例如 `boknows word` 的三个 `o`、两个 `w` 分别设计，不复用同一个造型。
- **每个位置两种样式**：按非空格字符位置计数，N 个位置制作 2N 张素材。例如 `boknows word` 共 11 个位置、22 张素材；两种样式可以连表现手法都不同，随机切换并避免连续重复。
- **统一的是使用效果**：协调显示尺度、视觉分量和交互节奏，不强行统一材质、配色、光影或空间感。
- **适合网页使用**：透明背景、完整轮廓、边缘留白，缩小后仍清楚；图片压缩，控制文件体积。

默认方向是多种视觉语言并置，形成丰富而有设计感的体验。没有“只做干净 3D”或“只用设计相关元素”的限制。只有用户明确要求主题限制时，才按该次要求收窄范围。

## Codex 制作流程

1. 读取用户的标题，保留大小写。按非空格字符位置列清单；不要按去重后的字母生成。每个位置分配 A/B 两个方案。
2. 先建立方案表：位置、字符、样式、题材、表现手法、外轮廓、字母如何显现、配色。检查相邻位置和重复字符有明显差异，避免同一模型只换颜色或材质。
3. 使用可用的图像生成工具逐张生成。借鉴参考的表现方法，独立设计构图。每张只包含一个位置的素材；不要生成整句标题再切割。若工具不可用，明确说明，保留待生成方案，不声称图片已经制作。
4. 检查实际输出：字母是否正确、背景是否真的透明而非棋盘格、外轮廓和附属元素是否完整、缩小后是否可读。错误结果重新生成或编辑。
5. 裁掉多余透明空白，但保留安全边距；协调每张显示尺度与视觉分量。不要把整批强行改成同一材质或光照。
6. 保存透明 WebP，最长边 640px、质量 84 可作为起点。根据边缘、细节和实际展示尺寸调整，目标单张约 50–150 KB，复杂图可放宽；不为体积牺牲字母识别度。
7. 以 `00-b-a.webp`、`00-b-b.webp` 等位置编号命名，放入 assets/。按顺序更新 config.js 中 text 和 imagesByPosition。空格不占图片数组位置。标题长度变化时调整字号和布局。
8. 更新网页标题、简介和辅助文案。将新批次每张的位置、字符、样式、构思、完整实际提示词、文件名记录到 docs/materials.json，替换旧示例记录。不要把未生成的构思写成已完成素材。
9. 运行 `node --check app.js` 和 `node scripts/validate.mjs`。预览检查开场、随机切换、快速悬停、离开退场、轻微让位、移动布局和图片加载。保持既有交互节奏。

## 单张提示词模板

每张填写不同的题材、表现方式与构成，不把下面模板当作统一视觉风格：

> Create one imaginative image asset representing the exact character “[CHARACTER]” for position [INDEX], variant [A/B], in “[TITLE]”. Concept: [SUBJECT AND UNEXPECTED IDEA]. Visual language: [FLAT SILHOUETTE / PRINT / GRADIENT / COLLAGE / TEXTILE / GLASS / METAL / SCENE / OTHER]. Outer silhouette: [OBJECT OR COMPOSITION]. The character is readable through [OBJECT ARRANGEMENT / NEGATIVE SPACE / LETTER INSIDE OBJECT]. Preserve the specified case. Use [PALETTE AND RELEVANT DETAILS]. Fully transparent alpha background, entire silhouette and attachments visible, safe edge margins, clear at small web display size. No surrounding scene unless it is an intentional self-contained part of the asset. No unrelated text or watermark.

生成结果需要逐张审查，提示词不能保证结果自动合格。平面方案不应附加无关的立体光影要求。

## 当前示例

仓库目前附带的是一批布艺、吊牌和缝纫主题示例，共 22 张，约 1.98 MB。它演示素材接入与交互，不代表通用规则只能做布艺。当前 [materials.json](materials.json) 保存的是这批示例的实际提示词；为自己的标题制作时应替换成新批次记录。

## 压缩示例

安装 Pillow 后：

```python
from PIL import Image
im = Image.open('letter.png').convert('RGBA')
im.thumbnail((640, 640), Image.Resampling.LANCZOS)
im.save('letter.webp', 'WEBP', quality=84, method=6)
```

发布时仅包含可分享的成品素材，不附带无关的私人文件或未经授权的参考图。
