<!-- updated:start -->最后更新于 2026-07-31<!-- updated:end -->

# Awesome MiniMax H3 Prompts 🎬

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Validate gallery](https://github.com/forgewebO1/awesome-minimax-h3-prompts/actions/workflows/validate.yml/badge.svg)](https://github.com/forgewebO1/awesome-minimax-h3-prompts/actions/workflows/validate.yml) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/forgewebO1/awesome-minimax-h3-prompts?style=social)](https://github.com/forgewebO1/awesome-minimax-h3-prompts/stargazers)

| [English](README.md) | [简体中文](README.zh-CN.md) | [Português (Brasil)](README.pt-BR.md) | [हिन्दी](README.hi-IN.md) | [日本語](README.ja-JP.md) | [한국어](README.ko-KR.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|

> 精选、可复现的 MiniMax H3 提示词画廊，并配有官方输入素材与输出结果。

首版收录 20 条案例，全部经 MiniMax 官方指南或官方 X 帖核验。

所有输出均可通过 GitHub 原生播放器直接观看，便于研究提示词结构与多模态引用关系。

## 📖 目录

1. [品牌影片与电影化内容](#category-1)
2. [动态设计与 AI 叙事](#category-2)
3. [产品、UI 与游戏概念](#category-3)
4. [动画与风格化视觉](#category-4)
5. [全模态参考与表演迁移](#category-5)
6. [精准多模态编辑](#category-6)
7. [资源](#resources)
8. [贡献指南](#contributing)
9. [许可证](#license)

---

<a id="category-1"></a>

## 1. 品牌影片与电影化内容

*品牌广告、电影预告与时尚导向的视觉设计。*

<!-- entry:video-001 -->
<a id="video-001"></a>

### 1.1. MiniMax 双筒望远镜装置广告

*以固定双筒望远镜视框扫描四个关键帧，形成克制的 MiniMax 品牌影片。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/241beec6-52bd-496c-9c08-f81465032d53" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/49231f09-e292-4cb5-b826-30c485009d6b" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/3bfa82e1-ae76-441a-b1c2-de2fa1ed327f" alt="Image 3" width="240"><br><sub>Image 3</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/ed87dbfe-6096-40bf-9fad-6dd35a0f186e" alt="Image 4" width="240"><br><sub>Image 4</sub></td>
  </tr>
</table>

**提示词:**

```text
将图像 1–4 作为连续关键帧，通过一副复古双筒望远镜的取景器寻找 MINIMAX 装置。开场画面失焦并带有轻微手持晃动，随后快速推进，将焦点转移到图像 1。关键帧之间使用快速的望远镜扫描转场，加入甩镜、运动模糊、光学拖影和短暂的曝光闪烁。在模糊达到峰值时切换，然后稳定下来并迅速恢复清晰。双圆形镜片遮罩必须始终绝对固定：位置、缩放、羽化黑色暗角和边缘柔度完全一致，不得变形或漂移。只有遮罩内部的图像可以移动。

在图像 2 中，让布料随风轻柔摆动，MINIMAX 字样应贴合褶皱，同时保持清晰可读。在图像 3 中，主体应像偶然被镜头捕捉到的时髦路人，自然地行走、转身和摆臂。在图像 4 中，主体调整眼镜或微微抬起下巴，呈现冷静、不费力的时尚广告姿态。

红色文字应随着对焦显现：起初略微模糊且不透明度较低，然后在 0.3–0.5 秒内逐渐变得清晰。可以加入轻微的垂直滑动或少量字距扩展。在下一次转场前让文字淡出，或让运动模糊将其带走。不要旋转、弹跳，也不要大幅飞入或飞出。

视觉语言：带有窥视感、受韦斯·安德森启发的 35 毫米胶片质感，包含细腻颗粒、柔和高光晕染、克制色彩和红色文字点缀。极简、高级、略带俏皮。不要添加人物、车辆、建筑或标志。准确保留核心构图和 MINIMAX 装置。
```

https://github.com/user-attachments/assets/0a629279-c4c3-44a9-8c35-818023cf830b

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-002 -->
<a id="video-002"></a>

### 1.2. 科幻宇宙门户预告

*巨大的黑暗门户、微小人物与红色标题组成紧凑的电影预告。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/74381a5a-97f9-4bad-9385-1e96b922efc0" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/529a4e85-08e1-4a1d-9773-e22866e209f1" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
采用写实电影化处理、高反差光线和紧凑节奏。以图像 1 作为整体情绪和视觉语言参考；以图像 2 作为主角参考。

镜头 1——超广角建立镜头。一个巨大的圆形宇宙门户几乎占满画面。主角只以极小的背影出现，位于画面下方、略偏右。潮湿地面反射光线；门户中心漆黑一片。镜头缓慢向前推进。一行大标题从黑暗边缘浮现，由柔焦逐渐变得锐利：“THE STARS WERE LISTENING”。使用极窄、粗重、全大写字体，颜色为深绯红和铁锈红，带有轻微颗粒和被薄雾柔化的边缘。

音频：深沉的次低频脉冲、远处的金属共鸣，以及标题完全对焦时的一次克制重击。→ 硬切。
```

https://github.com/user-attachments/assets/0d11484f-b267-4f27-98ba-4dcca3504894

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-003 -->
<a id="video-003"></a>

### 1.3. 火光模拟胶片时尚影片

*火光、模拟胶片颗粒和故障纹理塑造高反差时尚短片。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/2fed03ca-692b-4a7c-947d-14271b66b8d4" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/61289eb9-e704-47c6-ba30-5927e58a4e53" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
以图像 1 作为质感和情绪参考，以图像 2 作为主体外貌参考。生成一支 15 秒、16:9 的时尚短片。保留主体身份：铂金色长发、窄框黑色复古太阳镜、亮面黑色漆皮风衣、冷静自信的表情，以及映在风衣上的橙色火光。

风格：以模拟胶片拍摄、快速剪辑的时尚影片，背景是夜间大火、黑烟和橙红色火焰。叠加 VHS 故障、CCTV 信号中断、20 世纪 90 年代胶片颗粒、扫描线、色差、漏光、闪白转场和轻微画面抖动。
```

https://github.com/user-attachments/assets/c7e1923a-180f-4bf9-91e4-f50bebe811d7

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

---

<a id="category-2"></a>

## 2. 动态设计与 AI 叙事

*叙事动态、类型化故事与编辑节奏。*

<!-- entry:video-004 -->
<a id="video-004"></a>

### 2.1. 黄昏厨房里的手绘微光

*手机实拍与发光手绘生物在生活化厨房中自然融合。*

**提示词:**

```text
15 秒，16:9 横屏。将黄昏小厨房的实拍影像与手绘发光动画融合。窗边还残留着最后一缕夕阳。这个有人生活过的厨房里有一张旧木桌、一个洗到一半的杯子、一只略微起雾的玻璃瓶，以及一条悬挂的洗碗巾。

拍摄方式要像有人单手拿手机记录：轻微手抖、犹豫的近距离拉焦、逆光下的曝光呼吸，以及阴影中稍显粗糙的噪点。它应像是在家中匆忙捕捉到的惊人事件，而不是精心布置的广告。

不要出现巨眼、裂开的嘴、獠牙、威胁行为、扑向镜头、突然黑屏或跳吓。声音仅使用房间环境声、布料摩擦、轻柔的杯子碰撞声、水龙头滴水、拍摄者的脚步和安静呼吸，以及手绘生物发出的柔和电子音和细小叫声。
```

https://github.com/user-attachments/assets/4ca73472-8cef-4586-ba74-e634178a73c1

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-005 -->
<a id="video-005"></a>

### 2.2. 赛博垃圾摇滚说唱大片

*扫描杂志质感与快速硬切构成暗黑说唱时尚大片。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/167e5912-f22d-4315-9e09-a4ce139ab43c" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/9d17d5e6-4734-45ed-ab3b-366bc82e41a9" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
风格：暗黑流行 / 赛博垃圾摇滚 / 说唱音乐录像，兼具写实高级时尚质感与扫描胶片杂志的纹理——高反差，但不能廉价。参考 20 世纪 90 年代末至 21 世纪初的独立杂志、影印件、胶片扫描、地下音乐海报和拼贴小志。加入粗颗粒、轻微片门摆动、半色调网点、粗糙印刷边缘和少量扫描错位。剪辑保持快速，只用硬切——不要淡入淡出或柔和转场。匹配参考图像的文字处理和表面质感。
```

https://github.com/user-attachments/assets/4d8cef63-0baa-4d3f-983c-f09b84f83608

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-006 -->
<a id="video-006"></a>

### 2.3. 武侠竹林悬疑

*冷色竹林、薄雾与近景正反打营造克制悬疑。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/3cc11016-11ad-442f-876e-673ae0e341b8" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/20a9f42c-555a-44a3-85d5-e66d85b017e7" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
一部以夜间竹林为背景、16:9 的电影化武侠悬疑片。使用低饱和的冷蓝、墨绿、炭黑和灰色调。薄雾笼罩竹林，细雪在空中飘落。气氛冷峻、致命且克制，带有武林门派查案和交换秘密情报时的紧张感。

竹林深处，密集的竖直竹竿填满背景，远处泛着冷白色雾光。柔和、失焦的叶片局部遮挡前景，营造从竹丛中窥视的感觉。冷色、柔和的前侧主光照亮演员面部；逆光让前景保持暗沉，同时使远处发亮。使用浅景深，让树叶、雪花和竹子化为柔和散景。

优先使用面部特写和克制的正反打。节奏要收敛但紧张。写实古装剧制作质感、电影级灯光，不出现现代元素。不要字幕、屏幕文字、水印、现代服装或建筑、动画风格、过度磨皮、明亮日光或滑稽表演。
```

https://github.com/user-attachments/assets/74f4ca31-a390-4b72-ab5f-b8968769f63b

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-007 -->
<a id="video-007"></a>

### 2.4. 竖屏吸血鬼爱情预告

*以竖屏近景和危险吸引力建立短剧开场钩子。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/eacad84d-12f5-4008-aefd-9b9d8e74de86" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/d7f887c5-b3cd-4ed6-9290-e2fd4cce73d8" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
为国际短剧观众制作一支 15 秒、9:16 的真人吸血鬼爱情预告。用图像 1 参考男女主外貌，用图像 2 参考场景。始终保留两人的身份特征，并维持高级真人制作质感。

故事：一名天真的人类女子误入古堡禁区，唤醒了沉睡的吸血鬼贵族。他察觉她身上带着一丝远古战争的痕迹，由此产生危险的迷恋和占有式控制欲。她害怕他，却拒绝完全屈服，并反抗他的支配。

风格：ReelShort / DramaBox 式吸血鬼爱情——黑暗浪漫、宿命束缚、压迫感强，充满危险吸引力，具有强钩子和高冲击转折。整体应精致、克制、节奏紧凑，像一部爆款剧集开头的 15 秒。不要血腥、廉价恐怖、万圣节造型或现代街头审美。

按 TikTok / ReelShort / DramaBox 的竖屏构图。多用中近景、特写和极近特写，突出面孔、眼神接触、压迫感和关系张力。
```

https://github.com/user-attachments/assets/df0625d5-2470-483d-9fce-4c2c46cd32d0

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

---

<a id="category-3"></a>

## 3. 产品、UI 与游戏概念

*产品展示、界面动效与可玩世界概念。*

<!-- entry:video-008 -->
<a id="video-008"></a>

### 3.1. 高级眼镜广告

*白色影棚、两位模特与未来主义眼镜构成奢华广告。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/f79c4374-69bd-4068-a0a9-15849b0ba1d7" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/6a39f838-b496-4c10-ae69-8333d0f28edc" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/612db9d0-213d-4b7f-ad25-02e99f615b94" alt="Image 3" width="240"><br><sub>Image 3</sub></td>
  </tr>
</table>

**提示词:**

```text
制作一支高级 9:16 时尚眼镜广告。匹配参考视频的镜头节奏、剪辑速度、白色无缝背景和凌厉时尚态度。使用极简无缝白色影棚，艺术指导干净、大胆、前卫，达到全球奢侈品牌广告水准。

以图像 1 为主视觉：两位全身女性模特，一位黑人、一位白人，保留她们高级的服装、肢体语言、影棚灯光、秀场气场和冷酷态度。以图像 2 参考面部细节。两位模特佩戴基于图像 3 的未来主义奢华眼镜：环绕式弧形镜片、凌厉的猫眼/护目镜混合轮廓、镜面反射、流线型镜腿，以及高端时尚配饰的精致表面。
```

https://github.com/user-attachments/assets/1c5fb2ae-8a7c-4c5a-9755-f23dedc8e898

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-009 -->
<a id="video-009"></a>

### 3.2. 人体工学椅 360° 产品展示

*通过 360 度揭示、微距和工程动画展示人体工学功能。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/98c858fe-cbfa-4888-b2cb-c05b7861b9f1" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/35de5190-7499-4129-aea3-5120e2e5e523" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
在高级办公室中展示一把黑色 Herman Miller 人体工学椅，并完成完整的 360 度产品揭示。切换到透气网布靠背的微距画面并可视化气流，展示腰部支撑与人体工学曲线的工程动画，以及多向扶手和座椅高度调节。展示设计师、开发者和创意专业人士长时间舒适工作。加入 3D 骨骼支撑可视化，传达全天舒适性，并搭配精致室内设计。结尾出现文案：“WHERE INSPIRATION MEETS COMFORT.”。方向保持极简、冷色、专业、未来感和慢节奏。图像 1 用于功能细节，图像 2 用于产品参考。
```

https://github.com/user-attachments/assets/d1feed5e-ac59-42d0-973b-228f0af88638

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-010 -->
<a id="video-010"></a>

### 3.3. Nike 风格产品落地页

*高速滚动、粗斜体与材质化背景呈现运动品牌界面。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/2e4ef866-cc65-452e-90c5-56a254dbbddd" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
  </tr>
</table>

**提示词:**

```text
围绕图像 1 中的产品，制作一个受 Nike 数字设计语言启发的动态产品落地页 UI/UX 演示。使用超大、粗体、斜体无衬线字体，背景结合体现速度感的光轨与深色碳纤维或透气性能网布纹理。展示流畅、快速、有力量的页面滚动，以及通过放大和颜色反转实现的高冲击悬停交互。
```

https://github.com/user-attachments/assets/529be29b-0895-4278-9cfb-4febcfa1814e

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

---

<a id="category-4"></a>

## 4. 动画与风格化视觉

*风格化动画、角色宣传与游戏影像。*

<!-- entry:video-011 -->
<a id="video-011"></a>

### 4.1. 电影级仙侠 3D 分镜

*锁定角色身份，并按分镜生成无缝仙侠 3D 影像。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/63bcd684-34ac-4283-af7e-0b77099b7ba7" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/e44a7f35-a7cf-4909-a625-8a12aace8937" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
将图像 2 作为锁定角色参考。保留半束的黑色长发、镂空银冠、靛蓝发带、层叠浅色汉服、半透明蓝色外袍、深蓝腰带、银色花形扣件和长流苏。用图像 1 参考分镜顺序与节奏。

以高品质 4K、16:9 中式 3D 呈现，具有电影化仙侠制作水准：强烈、肃穆，并带有宿命感。逐拍遵循分镜，使用自然运镜和无缝转场——绝不能像幻灯片。只有特写或极近特写时展示正脸。远景中使用背影、后侧三分之四视角或纯环境镜头；绝不要展示远距离正脸。
```

https://github.com/user-attachments/assets/af1a44e2-1b0b-4587-b7fa-2eb0daf28b98

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-012 -->
<a id="video-012"></a>

### 4.2. 乙女游戏男主角宣传片

*严格保持角色设计的乙女游戏男主宣传片。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/97b6315b-cf3f-41da-91e6-ef026a3f9458" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/945a1484-24f1-4ffd-9ed7-4bcc8f151b6a" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
为乙女游戏男主角制作一支角色宣传片。将图像 2 作为严格身份参考。全片保持相同的面孔、发型、身体比例、服装设计、材质细节和精致乙女 CG 美学。
```

https://github.com/user-attachments/assets/d8b04f06-f210-478d-b3a3-472e504dba0e

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-013 -->
<a id="video-013"></a>

### 4.3. 现代战争 FPS 游戏画面

*模拟真实玩家移动、射击和后坐力的第一人称游戏片段。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/254e6f21-7635-427a-a843-cf8d74a8a9c6" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
  </tr>
</table>

**提示词:**

```text
镜头：第一人称、视线高度、手持式游戏画面。模拟玩家操作现代战争 FPS，手持突击步枪，在军事基地外围缓慢推进。沿掩体旁道路前行，让准星扫过前方通道，停下向远处目标射击数发，再继续向前推进，呈现真实玩家操控录像的感觉。

光线：现代军事基地中的冷色自然光，与烟雾和火光混合。画面保持写实清晰，武器、材质、尘土和战场薄雾达到 AAA 品质。

镜头运动：移动时带有轻微的玩家驱动摇摆；先缓慢前进，左右小幅查看，射击时加入轻微后坐力，然后稳定继续向前。
```

https://github.com/user-attachments/assets/599341de-2ea7-4071-a132-b14a22534b88

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

---

<a id="category-5"></a>

## 5. 全模态参考与表演迁移

*通过图像、视频、音乐、声音和运镜进行跨模态控制。*

<!-- entry:video-014 -->
<a id="video-014"></a>

### 5.1. 六素材节奏与音乐参考

*六张图像与一段视频共同控制素材、节奏、转场和音乐。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/00d8d0c8-09c6-4bc1-8025-c6f20154bc5d" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/e5b15989-a1cd-45cd-862c-f8b487ad5ef5" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/88e3c6e4-80aa-495f-b887-1e4c0c01faf9" alt="Image 3" width="240"><br><sub>Image 3</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/37f66059-f3c6-4d21-93fd-dc7ae424b1fc" alt="Image 4" width="240"><br><sub>Image 4</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/df24600d-60d8-4a5e-8438-7dafc1963d51" alt="Image 5" width="240"><br><sub>Image 5</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/d1f39aeb-485a-47a2-9639-b3e1537c4cf2" alt="Image 6" width="240"><br><sub>Image 6</sub></td>
  </tr>
</table>

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/54f83738-2df1-498a-9533-97cee954684a

**提示词:**

```text
使用图像 1–6 作为素材。紧密参考视频 1 的镜头节奏、转场语言和音乐。
```

https://github.com/user-attachments/assets/ea83b00c-8f0c-420c-92e6-f53a6a939e3f

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-015 -->
<a id="video-015"></a>

### 5.2. 咖啡到沙漠的一镜转场

*从微观咖啡表面无缝推进到辽阔沙丘的一镜到底。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/18e516b7-ff99-41fe-8b9d-c17b19b25fcf" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/5c38d808-e759-49ab-ac43-2d2b31ae7081" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**提示词:**

```text
@图像 1：快速推进至咖啡上的奶泡、可可颗粒和深色液体纹理，直到颗粒、气泡和涟漪充满画面。保持写实微距摄影，使用极浅景深，让细粉尘在逆光中漂浮。表面质感应悬于颗粒沙土与流体之间。

在可可颗粒、奶泡轮廓和咖啡漩涡与 @图像 2 中的沙丘脊线、风蚀纹理和飞沙极为相似的精确瞬间，无缝过渡到沙漠景观。继续向前推进，直至完整呈现 @图像 2 中的沙丘。

不要撕裂、黑帧、硬切、明显特效或合成接缝。保持写实、安静、克制——仿佛同一种颗粒材质自然地从微观咖啡表面扩展为广袤沙漠。一个连续镜头，不得出现可见剪辑。
```

https://github.com/user-attachments/assets/87c9c635-b623-411b-b2b2-29e8702bef48

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-016 -->
<a id="video-016"></a>

### 5.3. 希区柯克运镜、演唱与声音参考

*从三种模态分别迁移运镜、角色外观和演唱声音。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/2ba8c851-8ed4-4e27-9d08-4c6cf6a40d44" alt="Image 2" width="240"><br><sub>Image 2</sub></td>
  </tr>
</table>

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/81f914a1-fd84-4332-8809-83c55d4ed627

*Audio 3*

https://github.com/user-attachments/assets/74f84cda-0386-42fe-9054-9de9ba62fe1a

**提示词:**

```text
参考视频 1 的希区柯克式运镜，让图像 2 中的角色演唱，歌声与音频 3 一致。
```

https://github.com/user-attachments/assets/6eb07aaf-5eeb-454b-91c0-da3a4d4413e1

*来源: MiniMax — [官方 X 长文](https://x.com/MiniMax_AI/status/2083008095488516262)*

---

<a id="category-6"></a>

## 6. 精准多模态编辑

*定向替换、合成和手绘效果编辑。*

<!-- entry:video-017 -->
<a id="video-017"></a>

### 6.1. 将猫替换为狗

*在保持原视频其他内容的同时完成单一主体替换。*

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/a2303c9c-b36b-4756-b500-2e43dfbf5ced

**提示词:**

```text
将视频中的猫替换为狗。
```

https://github.com/user-attachments/assets/02315cea-a77b-4db6-b324-ecdb013c63b6

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-018 -->
<a id="video-018"></a>

### 6.2. 绿幕替换为童话环境

*用响应主体动作的童话场景替换绿幕并重做光照。*

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/21621adb-148b-49ad-a7f5-7c5b2903cb3c

*Video 2*

https://github.com/user-attachments/assets/445d26b0-cc32-4e09-8896-9f31691f2e1f

**提示词:**

```text
移除视频 1 的绿幕背景，并替换为类似视频 2 的童话环境。让所有背景元素正确响应主体的动作，并重新调整主体光照，使其自然融入新场景。
```

https://github.com/user-attachments/assets/b0132870-ec30-412c-a7de-d572e66d946f

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-019 -->
<a id="video-019"></a>

### 6.3. 多元素精准替换

*在同一镜头中完成六项明确、彼此独立的编辑。*

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/f38b3911-e0c4-4cb5-ba25-e1c7ca6f2103

**提示词:**

```text
在参考视频中：将报纸替换为绿色精装书；将椅子替换为红色沙发；移除主体的太阳镜并露出清晰面孔；移除汽车燃烧效果并将车辆恢复正常；将从外套中取出的照片替换为一本黑色小笔记本；并在画面左侧添加一棵树。
```

https://github.com/user-attachments/assets/091cfe0b-f56e-4f5b-b1b5-f653f0fd4cf9

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

<!-- entry:video-020 -->
<a id="video-020"></a>

### 6.4. 手绘动画图形特效

*手绘标记随人物靠近而增强，并在亲吻时改变色彩。*

**输入图像:**

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/7f60b728-d514-4aba-b184-3bf9f71a006e" alt="Image 1" width="240"><br><sub>Image 1</sub></td>
  </tr>
</table>

**参考媒体:**

*Video 1*

https://github.com/user-attachments/assets/9dbea982-c21a-4ac1-9439-20e320e9874f

**提示词:**

```text
在视频 1 中两个人周围添加类似图像 1 的橙黄色手绘标记。当两人靠近时，标记不断增多，从细小火花逐渐累积为明亮光辉。当他们接吻时，加入粉色笔触。
```

https://github.com/user-attachments/assets/65aab088-830a-4fa8-b454-94d1b67c24d2

*来源: MiniMax — [H3 官方用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)*

---

<a id="resources"></a>

## 7. 资源

- [MiniMax H3 用户指南](https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707)
- [MiniMax H3 官方发布帖](https://x.com/MiniMax_AI/status/2083006198828417501)
- [MiniMax H3 官方 X 长文](https://x.com/MiniMax_AI/status/2083008095488516262)

<a id="contributing"></a>

## 8. 贡献指南

提交提示词前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。投稿必须包含直接来源、完整提示词、对应输出，以及已确认的分享权限。

<a id="license"></a>

## 9. 许可证

仓库的编辑性文本采用 [CC BY 4.0](LICENSE) 许可。MiniMax 媒体、商标及第三方素材仍归各自权利人所有，不会自动纳入本许可证。
