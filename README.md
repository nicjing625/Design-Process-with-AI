# 从设计到上线 · Antigravity IDE + GitHub 培训网站

面向有网页设计经验、编程经验有限的设计师，用精简课件演示：

**Antigravity IDE 辅助设计 → 本地即时预览 → GitHub 代码托管 → 自动化测试部署 → 多端验收 → 正式上线。**

这是培训演示站点，不是完整操作手册。

## 本地预览

### 方法一：直接在浏览器打开（无需安装任何环境，推荐）
在 macOS 访达（Finder）中，直接**双击项目根目录下的 `index.html`**，或者将 `index.html` 拖入 Chrome / Safari 浏览器，即可直接离线浏览。

### 方法二：使用开发服务器（可选）
如果本地已安装 Node.js：
```bash
npm install
npm run dev
```
用浏览器打开终端给出的地址（如 `http://localhost:5173`）即可。

## 网站结构

| 路径 | 章节 |
| --- | --- |
| `/` | 概览 |
| `/prepare` | 01 准备工具与账号 |
| `/design` | 02 在 Antigravity IDE 中设计网页 |
| `/github` | 03 用 IDE 将代码发布到 GitHub |
| `/preview` | 04 部署测试环境 |
| `/launch` | 05 正式上线 |

## 如何替换真实截图

1. 把图片导出为 PNG。
2. 按截图 ID 命名，例如 `step-03.png`。
3. 放到 `public/images/tutorial/`，覆盖同名文件。
4. **不要改页面结构**。截图组件会按 ID 读取对应文件；没有文件时显示占位块。

| ID | 内容 |
| --- | --- |
| `step-00` | 主流 AI IDE 产品：Claude Code、Antigravity、Cursor 与 Trae |
| `step-01` | 将 Antigravity IDE 拖入应用程序文件夹并启动 |
| `step-02` | Antigravity IDE 桌面端登录提示 |
| `step-03` | 在 GitHub 创建新仓库 |
| `step-06` | 在本地电脑创建项目工作文件夹 |
| `step-04` | 在 Antigravity IDE 中打开项目文件夹 |
| `step-05` | 项目已在 IDE 中就绪，随时开启 AI 对话设计 |
| `step-0203` | 用 Prompt 生成页面代码 / 在 IDE 中一键发布到 GitHub 仓库 |
| `step-07` | 浏览器本地预览 |
| `step-08` | GitHub 仓库中确认代码已上传 |
| `step-09` | 在部署平台（如 Vercel 或 GitHub Pages）中关联仓库 |
| `step-10` | 部署完成，复制测试预览链接 |
| `step-11` | 在 GitHub 上管理分支并确认合并到正式版本 |

已放入全部教程截图（`step-00` 至 `step-11` 以及 `step-0203`）。
