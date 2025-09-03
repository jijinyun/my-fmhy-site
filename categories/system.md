# 🖥️ 系统工具

精选好用且国内可访问的系统优化、管理工具合集。包含开源软件和免费工具，让你的电脑运行更流畅、管理更高效。

## 推荐工具

### 系统优化清理
- **[CCleaner](https://www.ccleaner.com/)** - 知名的系统清理和优化工具，清理临时文件和注册表
- **[BleachBit](https://www.bleachbit.org/)** - 开源系统清理工具，CCleaner的优秀替代品
- **[Wise Disk Cleaner](https://www.wisecleaner.com/wise-disk-cleaner.html)** - 免费的磁盘清理工具，界面友好
- **[Glary Utilities](https://www.glarysoft.com/glary-utilities/)** - 全功能系统优化工具箱，一键优化

### 软件包管理
- **[Ninite](https://ninite.com/)** - 批量安装软件工具，一次性安装多个常用软件
- **[Chocolatey](https://chocolatey.org/)** - Windows包管理器，命令行方式管理软件
- **[Scoop](https://scoop.sh/)** - 开源Windows包管理器，更适合开发者
- **[WinGet](https://github.com/microsoft/winget-cli)** - 微软官方包管理器，集成在Windows中

### 文件搜索管理
- **[Everything](https://www.voidtools.com/)** - 极速文件搜索工具，搜索速度极快
- **[WizTree](https://diskanalyzer.com/)** - 磁盘空间分析工具，快速找到大文件
- **[SpaceSniffer](http://www.uderzo.it/main_products/space_sniffer/)** - 可视化磁盘空间分析工具
- **[FreeCommander](https://freecommander.com/)** - 免费文件管理器，替代Windows资源管理器

### 系统信息监控
- **[HWiNFO](https://www.hwinfo.com/)** - 专业硬件检测工具，提供详细硬件信息
- **[Speccy](https://www.ccleaner.com/speccy)** - 系统信息查看工具，界面简洁易用
- **[CPU-Z](https://www.cpuid.com/softwares/cpu-z.html)** - CPU和硬件信息检测工具
- **[GPU-Z](https://www.techpowerup.com/gpuz/)** - 显卡信息检测工具

### 系统备份恢复
- **[Macrium Reflect Free](https://www.macrium.com/reflectfree)** - 免费系统备份和镜像工具
- **[Clonezilla](https://clonezilla.org/)** - 开源磁盘克隆和备份工具
- **[Veeam Agent](https://www.veeam.com/windows-endpoint-server-backup-free.html)** - 免费的Windows备份工具

### 开源工具推荐
- **[7-Zip](https://www.7-zip.org/)** - 开源压缩解压工具，支持多种格式
- **[Notepad++](https://notepad-plus-plus.org/)** - 开源代码和文本编辑器
- **[Sumatra PDF](https://www.sumatrapdfreader.org/free-pdf-reader)** - 开源轻量级PDF阅读器
- **[VLC Media Player](https://www.videolan.org/vlc/)** - 开源媒体播放器，支持几乎所有格式

## 使用技巧

### 🔧 Everything 高级搜索技巧
```bash
# 按文件类型搜索
*.pdf               # 所有PDF文件
*.mp4|*.avi         # MP4或AVI文件

# 按路径搜索
folder:downloads    # 下载文件夹中的文件
path:project\src    # 特定路径下的文件

# 组合搜索
*.docx recent:1week # 一周内修改的Word文档

#### 📦 Chocolatey 常用命令

# 安装软件
choco install googlechrome -y
choco install firefox -y

# 管理软件
choco list --local-only  # 查看已安装软件
choco upgrade all -y     # 升级所有软件
choco uninstall package  # 卸载软件

# 搜索软件包
choco search python
choco search --detail git