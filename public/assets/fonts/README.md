第一步：准备中文字体文件
您需要一个.ttf格式的中文字体文件。您可以从多种渠道获取：

从您的操作系统：

Windows: 可以在 C:\Windows\Fonts 目录下找到，常用的有 微软雅黑 (msyh.ttf) 或 黑体 (simhei.ttf)。

macOS: 可以在 /System/Library/Fonts/ 目录下找到 苹方 (PingFang.ttc)。

下载开源字体（推荐）：为了避免版权问题和保证跨平台一致性，我强烈推荐使用开源字体。思源黑体 (Source Han Sans) 是一个极佳的选择，由Google和Adobe联合开发。

您可以从这里下载：Source Han Sans Releases on GitHub

下载后，解压缩文件，您只需要用到其中的 .otf 或 .ttf 文件。为了方便使用，建议选择常规体（Regular）和粗体（Bold）。

操作指南：

在您的项目根目录（与main.py同级）下，创建一个名为 fonts 的新文件夹。

选择一个中文字体文件，例如从思源黑体中选择 SourceHanSansSC-Regular.otf 和 SourceHanSansSC-Bold.otf。

将这两个字体文件复制到刚刚创建的 fonts 文件夹中。