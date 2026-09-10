# 素材设计与制作方法

## 设计规则

1. 字母可辨认，但外轮廓不必等于字母。布条可组成字母，字母也可出现在马形挂件、邮票绣章、花朵或服装织标内部。
2. 同一位置两种独立造型；相同字符的不同位置不复用元素。
3. 本套限定吊牌、缝纫及布艺组合，通过牛仔、毛毡、织唛、缎面刺绣、灯芯绒、格纹和编绳区分表现方式。
4. 允许底板、布标耳、短吊绳、铆钉、线头；控制长度和细节，缩小后主体仍清楚。
5. 不复制参考图里的品牌标识或文案。统一使用尺度、视觉分量和交互，不要求每张相同材质。

## 生产步骤

1. 先按非空格字符建立位置清单，再为每个位置写 A/B 两个构思，避免只换颜色。
2. 使用内置图像生成工具，每张单独生成。参考限定工艺与视觉方向，而非直接剪取参考图。
3. 提示词注明具体布料、针法、外轮廓、字母大小写、附属元素、透明背景和边缘留白。完整提示词见 materials.json。
4. 逐张检查字母、轮廓和工艺；错误图片重新生成或局部修改。
5. 保留透明度，缩小到最长边 640px，导出 WebP，质量 84。附带文件是压缩成品，约 1.98 MB；未包含大尺寸原图。
6. 按 `位置-字母-样式.webp` 命名，写入 config.js 的 imagesByPosition。缩小到实际显示尺寸再检查；极大屏幕可自行制作更高分辨率版本。

## 提示词模板

> Create ONE inventive textile lettering asset: [具体工艺和构思]. Exact key text is lowercase "[字母]", clearly readable. Confine medium to hangtags, sewing, embroidery, fabric collage and textile details. Entire object and short loops fully visible within safe margins, mostly front view. Transparent alpha background, no surrounding cloth backdrop, no floor, packaging, watermark, brand names or other text. Controlled tactile detail, clean edges, strong small-size readability.

文件中的提示词是实际生成输入，效果不能只靠模板保证，仍需逐张检查。

## 在本地压缩自己的 PNG

安装 Pillow 后，可以使用以下例子：

```python
from PIL import Image
im = Image.open('letter.png').convert('RGBA')
im.thumbnail((640, 640), Image.Resampling.LANCZOS)
im.save('letter.webp', 'WEBP', quality=84, method=6)
```

仅处理你自己的素材。不要将未获授权的第三方参考图或视频一并发布。
