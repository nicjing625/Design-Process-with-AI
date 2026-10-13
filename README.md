# 从设计到上线 · Cursor + GitHub 培训网站

面向有网页设计经验、编程经验有限的设计师，用精简课件演示：

**Cursor 设计与开发 → 本地预览 → GitHub 版本管理 → 测试部署 → 验收 → 正式上线。**

这是培训演示站点，不是完整操作手册。

## 本地预览

需要已安装 Node.js（建议 20+）。

```bash
npm install
npm run dev
```

终端会给出本地地址，一般是 `http://localhost:5173`。用浏览器打开即可。

构建检查：

```bash
npm run build
npm run preview
```

## 网站结构

| 路径 | 章节 |
| --- | --- |
| `/` | 概览 |
| `/prepare` | 01 准备工具与账号 |
| `/design` | 02 在 Cursor 中设计网页 |
| `/github` | 03 上传代码到 GitHub |
| `/preview` | 04 部署测试环境 |
| `/launch` | 05 正式上线 |

## 如何替换真实截图

1. 把图片导出为 PNG。
2. 按截图 ID 命名，例如 `step-03.png`。
3. 放到 `public/images/tutorial/`，覆盖同名文件。
4. **不要改页面结构**。截图组件会按 ID 读取对应文件；没有文件时显示占位块。

| ID | 内容 |
| --- | --- |
| `step-01` | 将 Cursor 拖入应用程序文件夹 |
| `step-02` | Cursor 桌面端注册提示 |
| `step-02b` | 注册过程中的其他产品介绍页 |
| `step-03` | 在 GitHub 创建新仓库 |
| `step-04` | 在 Cursor 中打开项目文件夹 |
| `step-05` | 项目已在 Cursor 中打开 |
| `step-06` | 用 Prompt 让 Cursor 生成或修改页面 |
| `step-07` | 浏览器本地预览 |
| `step-08` | GitHub 仓库中确认代码已上传 |
| `step-09` | 在 Vercel 导入 GitHub 仓库 |
| `step-10` | 部署完成，复制测试链接 |
| `step-11` | 在部署平台绑定正式域名 |

已放入的截图：`step-01`、`step-02`、`step-02b`、`step-04`、`step-05`。其余仍为占位，补上同名 PNG 即可。
