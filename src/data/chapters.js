window.CHAPTERS = [
  {
    slug: 'prepare',
    number: '01',
    title: '准备工具与账号',
    summary: '先选好适合的 AI IDE 工具并准备好 GitHub 账号，后面的 AI 辅助设计、云端托管和发布上线才接得上。',
    blocks: [
      {
        type: 'lead',
        text: '开始前只需要两样核心工具：AI 编程助手（用自然语言设计并构建网页）和 GitHub（在云端存代码与协作）。下面先选择工具并完成关键操作。',
      },
      {
        type: 'step',
        number: '1',
        title: '选择适合你的 AI IDE 产品',
        body: '目前主流的 AI 原生编程工具有 Claude Code、Antigravity、Cursor 和 Trae 等。对于网页设计与原型落地，各有其优势特点。设计师可以根据团队技术栈、使用习惯和预算进行选择（本教程后续以 Antigravity 为例展开完整演示）。',
      },
      {
        type: 'screenshot',
        id: 'step-00',
        caption: '主流 AI IDE 产品选型参考：Claude Code、Antigravity、Cursor 与 Trae',
      },
      {
        type: 'step',
        number: '2',
        title: '安装并启动 Antigravity IDE',
        body: '下载并安装 Antigravity IDE 安装包。macOS 用户将应用拖进「应用程序」文件夹后启动即可。',
      },
      {
        type: 'screenshot',
        id: 'step-01',
        caption: '将 Antigravity IDE 拖入应用程序文件夹并启动',
      },
      {
        type: 'step',
        number: '3',
        title: '登录 Antigravity IDE 账号',
        body: '首次打开按界面指引登录账号，开启 AI 智能设计助手与项目工作区。',
      },
      {
        type: 'screenshot',
        id: 'step-02',
        caption: 'Antigravity IDE 桌面端登录提示',
      },
      {
        type: 'callout',
        title: '注意',
        text: '登录成功后，左侧即可看到文件项目区和 AI 对话面板，随时准备将设计想法转化为实际网页。不必先配置复杂设置。',
      },
      {
        type: 'step',
        number: '4',
        title: '注册 GitHub 并创建仓库',
        body: '打开 github.com 注册并登录。右上角进入 New repository，用英文给仓库起名（例如 my-website），创建即可。后续将通过 IDE 直接将代码推送到此仓库。',
      },
      {
        type: 'screenshot',
        id: 'step-03',
        caption: '在 GitHub 创建新的代码仓库',
      },
      {
        type: 'callout',
        title: '仓库是什么',
        text: '仓库是项目代码的云端文件夹。在 Antigravity IDE 中改好的文件，同步到 GitHub 后就能保存同一份可分享、可直接对接部署的版本。',
      },
    ],
  },
  {
    slug: 'design',
    number: '02',
    title: '在 Antigravity IDE 中设计网页',
    summary: '用自然语言描述视觉风格与布局，让 IDE 内置的 AI 自动生成页面代码，即时预览并持续调优。',
    blocks: [
      {
        type: 'lead',
        text: 'Antigravity IDE 是支持 AI 对话的智能集成环境。设计师不需要手写繁琐代码，只需像与前端开发对话一样描述视觉需求，IDE 就会自动在项目里创建和组织文件。',
      },
      {
        type: 'step',
        number: '1',
        title: '在本地电脑创建项目文件夹',
        body: '在本地电脑中新建一个专门的项目文件夹（例如 Design Process with AI），作为后续编写页面代码、存放图片素材与同步 Git 的工作根目录。',
      },
      {
        type: 'screenshot',
        id: 'step-06',
        caption: '在本地电脑中创建并查看项目工作文件夹',
      },
      {
        type: 'step',
        number: '2',
        title: '在 IDE 中打开本地项目',
        body: '在 Antigravity IDE 中选择打开文件夹，载入你的项目目录。打开后，左侧工作区会显示当前项目名称与文件树。',
      },
      {
        type: 'screenshot',
        id: 'step-04',
        caption: '在 Antigravity IDE 中选择并打开项目文件夹',
      },
      {
        type: 'screenshot',
        id: 'step-05',
        caption: '项目已在 IDE 中就绪，随时开启 AI 对话设计',
      },
      {
        type: 'step',
        number: '3',
        title: '用一句话说明设计需求',
        body: '在 IDE 的 AI 聊天框里写清：给谁看、什么视觉风格、版面结构、色彩与不要什么。一次说清核心设计点，AI 出图和出代码会更准确。',
      },
      {
        type: 'code',
        label: '可复制的 Prompt 示例',
        code: '请帮我做一个简洁的中文培训网站首页。\n\n风格：白底、浅灰分区、蓝色强调，像专业 SaaS 文档页。\n结构：顶部标题「从设计到上线」，一句说明，以及 5 个步骤卡片（准备工具、IDE 设计、上传 GitHub、测试部署、正式上线）。\n要求：桌面和手机都能看，留白充足，不要复杂动画。',
      },
      {
        type: 'step',
        number: '4',
        title: '让 AI 自动生成页面结构与样式',
        body: '发送 Prompt 后，Antigravity IDE 会自动在项目中生成 HTML、CSS 或组件代码。你可以查看它列出的改动预览，确认方向符合预期后再接受。',
      },
      {
        type: 'screenshot',
        id: 'step-0203',
        caption: '用 Prompt 让 IDE 的 AI 助手生成页面结构与样式并查看代码改动',
      },
      {
        type: 'step',
        number: '5',
        title: '实时本地预览',
        body: '在浏览器中打开本地页面或启动预览。像平时检查设计稿一样，仔细核对排版间距、字体层级与移动端响应式效果。',
      },
      {
        type: 'screenshot',
        id: 'step-07',
        caption: '浏览器中查看本地预览效果',
      },
      {
        type: 'step',
        number: '6',
        title: '对照画面继续微调',
        body: '预览不满意时，直接在 IDE 对话框里指明要改的位置，例如「标题字重增加一点」「手机端卡片改成上下排列」。IDE 修改完成后刷新页面即可查看。',
      },
      {
        type: 'callout',
        title: '设计师的工作新范式',
        text: '设计师的核心工作依然是把控画面品质与用户体验。只是从前的手工切图或反复沟通，变成了在 IDE 中用自然语言精准指导 AI 生成代码。',
      },
    ],
  },
  {
    slug: 'github',
    number: '03',
    title: '用 IDE 将代码发布到 GitHub',
    summary: '在 Antigravity IDE 中直接授权与连接 GitHub，一键把设计好的代码推送到云端仓库。',
    blocks: [
      {
        type: 'lead',
        text: 'IDE 里生成的是电脑上的本地文件，GitHub 则是团队协作与网站上线的云端枢纽。通过 IDE 内置的 GitHub 集成，设计师无需手动敲终端命令，点选界面即可完成云端同步。',
      },
      {
        type: 'step',
        number: '1',
        title: '在 IDE 中登录并授权 GitHub',
        body: '在 Antigravity IDE 的账户或源代码管理面板中，点击登录并授权 GitHub 账号。授权后，IDE 即可直接与你的 GitHub 仓库通信。',
      },
      {
        type: 'step',
        number: '2',
        title: '一键发布到 GitHub 仓库',
        body: '在 IDE 的源代码管理面板中，点击「发布到 GitHub」（Publish to GitHub）或输入改动说明后点击同步。IDE 会自动将本地设计好的代码上传至云端仓库。',
      },
      {
        type: 'screenshot',
        id: 'step-0203',
        caption: '在 IDE 源代码管理面板中查看改动并一键发布到 GitHub 仓库',
      },
      {
        type: 'callout',
        title: '图形化操作更直观',
        text: '现代 IDE 已经深度集成了 GitHub。设计师只要点选界面按钮，就能像在网盘同步文件一样完成代码版本管理与云端推送，告别复杂的命令行。',
      },
      {
        type: 'step',
        number: '3',
        title: '在 GitHub 上确认上传成果',
        body: '打开 github.com 仓库页面，刷新后能看到刚才在 IDE 中生成的代码和文件列表，说明已成功备份到云端。',
      },
      {
        type: 'screenshot',
        id: 'step-08',
        caption: 'GitHub 仓库页面显示已成功上传的项目文件',
      },
    ],
  },
  {
    slug: 'preview',
    number: '04',
    title: '部署测试环境',
    summary: '用 Vercel 或 GitHub Pages 关联 GitHub 仓库，自动生成随时可打开的在线测试链接，方便与同事或客户多端验收。',
    blocks: [
      {
        type: 'lead',
        text: 'Antigravity IDE 负责产出代码，GitHub 负责安全托管，部署平台（如 Vercel 或 GitHub Pages）则负责把代码实时变成网上可交互的网站。',
      },
      {
        type: 'step',
        number: '1',
        title: '关联 GitHub 仓库',
        body: '选择 Vercel 或 GitHub Pages 部署测试环境。若使用 Vercel，用 GitHub 账号登录 vercel.com 并导入项目仓库；若使用 GitHub Pages，在 GitHub 仓库 Settings 的 Pages 中指定 main 分支即可。',
      },
      {
        type: 'screenshot',
        id: 'step-09',
        caption: '在部署平台（如 Vercel 或 GitHub Pages）中关联仓库',
      },
      {
        type: 'step',
        number: '2',
        title: '配置并一键部署',
        body: '静态网页通常无需复杂构建配置，保持默认设置并确认。部署平台将自动读取仓库文件并完成云端构建。',
      },
      {
        type: 'step',
        number: '3',
        title: '获取测试链接',
        body: '部署完成后，平台会给出一个公开的在线预览网址（如 vercel.app 或 github.io 域名）。将链接发给同事或客户进行视觉与交互验收。',
      },
      {
        type: 'screenshot',
        id: 'step-10',
        caption: '部署完成，复制在线测试预览链接',
      },
      {
        type: 'step',
        number: '4',
        title: '在 IDE 中修改，线上自动重新部署',
        body: '在 Antigravity IDE 里改完任何设计细节并推送到 GitHub 后，Vercel 或 GitHub Pages 会自动侦测到更新并重新部署。稍候刷新测试链接即可看到最新效果。',
      },
      {
        type: 'callout',
        title: '各工具的分工协作',
        text: 'Antigravity IDE：修改和调试设计。GitHub：代码托管与版本流转。Vercel / GitHub Pages：对外可打开的测试网站。测试链接用来验收，还不是正式独立域名。',
      },
    ],
  },
  {
    slug: 'launch',
    number: '05',
    title: '正式上线',
    summary: '测试验收通过后，在 GitHub 上确认发布版本，在部署平台绑定独立域名，正式对外发布。',
    blocks: [
      {
        type: 'lead',
        text: '上线前先在测试站完成全端验收。再把代码合并到正式分支，绑定真正要给用户访问的品牌域名。',
      },
      {
        type: 'step',
        number: '1',
        title: '确认测试与验收结果',
        body: '用测试链接在桌面和手机多端仔细检查：排版间距、图片清晰度与交互是否符合预期。有问题就回到 Antigravity IDE 中继续修改并同步。',
      },
      {
        type: 'step',
        number: '2',
        title: '合并到正式分支',
        body: '在 GitHub 上创建 Pull Request，审核确认后合并到 main 主分支。确保主分支上的代码就是要对外发布的正式版本。',
      },
      {
        type: 'screenshot',
        id: 'step-11',
        caption: '在 GitHub 上查看分支（如 master、stage、prod）并管理正式版本合并',
      },
      {
        type: 'step',
        number: '3',
        title: '部署生产环境',
        body: '部署平台一般会自动将正式分支部署为生产站点。在项目的 Deployments 中确认最新一次生产部署成功。',
      },
      {
        type: 'step',
        number: '4',
        title: '绑定正式域名',
        body: '在部署平台的 Domains 设置中添加已购买的域名，并按提示前往域名服务商处解析 DNS 记录。生效后即可用正式域名访问。',
      },
      {
        type: 'step',
        number: '5',
        title: '全量检查并确认发布',
        body: '使用正式域名访问网站，检查所有关键页面的展示、链接与社交预览图，确认无误即宣告正式上线完成！',
      },
      {
        type: 'flow',
      },
    ],
  },
];
