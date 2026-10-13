export type CommandItem = {
  command: string
  note: string
}

export type ContentBlock =
  | { type: 'lead'; text: string }
  | { type: 'step'; number: string; title: string; body: string }
  | { type: 'screenshot'; id: string; caption: string }
  | { type: 'code'; label: string; code: string }
  | { type: 'commands'; items: CommandItem[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'flow' }

export type Chapter = {
  slug: string
  number: string
  title: string
  summary: string
  blocks: ContentBlock[]
}

export const chapters: Chapter[] = [
  {
    slug: 'prepare',
    number: '01',
    title: '准备工具与账号',
    summary: '先备好 Cursor、GitHub 和 Git，后面的设计、上传和上线才接得上。',
    blocks: [
      {
        type: 'lead',
        text: '开始前只需要三样东西：Cursor（写网页）、GitHub（存代码）、Git（在本地记录版本）。下面只看关键操作。',
      },
      {
        type: 'step',
        number: '1',
        title: '安装并登录 Cursor',
        body: '打开 cursor.com，下载对应系统的安装包。macOS 把 Cursor 拖进「应用程序」文件夹，再打开软件。',
      },
      {
        type: 'screenshot',
        id: 'step-01',
        caption: '将 Cursor 拖入应用程序文件夹',
      },
      {
        type: 'step',
        number: '2',
        title: '注册 Cursor 账号',
        body: '首次打开会提示注册。按页面指引继续，用邮箱或已有账号完成登录。',
      },
      {
        type: 'screenshot',
        id: 'step-02',
        caption: 'Cursor 桌面端注册提示',
      },
      {
        type: 'screenshot',
        id: 'step-02b',
        caption: '注册过程中可能出现其他产品介绍，选择 Continue to Cursor 即可',
      },
      {
        type: 'callout',
        title: '注意',
        text: '登录成功后，左侧能看到聊天和项目区域，就可以开始工作了。不必先改完所有设置。',
      },
      {
        type: 'step',
        number: '3',
        title: '注册 GitHub 并创建仓库',
        body: '打开 github.com 注册并登录。右上角进入 New repository，用英文给仓库起名（例如 my-website），创建即可。',
      },
      {
        type: 'screenshot',
        id: 'step-03',
        caption: '在 GitHub 创建新的代码仓库',
      },
      {
        type: 'callout',
        title: '仓库是什么',
        text: '仓库是项目代码的云端文件夹。本地电脑里改文件，GitHub 上保存同一份可分享的版本。',
      },
      {
        type: 'step',
        number: '4',
        title: '确认本机已有 Git',
        body: 'Git 用来记录每次改动，并同步到 GitHub。在终端运行下面命令，能看到版本号就说明已准备好。macOS 若弹出安装开发者工具，按提示安装即可。',
      },
      {
        type: 'code',
        label: '检查 Git',
        code: 'git --version',
      },
    ],
  },
  {
    slug: 'design',
    number: '02',
    title: '在 Cursor 中设计网页',
    summary: '用自然语言描述页面，让 AI 生成代码，在浏览器里看效果，再按画面继续改。',
    blocks: [
      {
        type: 'lead',
        text: 'Cursor 是带 AI 的编辑器。你描述想要的页面，它在项目里创建或修改文件。先打开项目，再对话。',
      },
      {
        type: 'step',
        number: '1',
        title: '打开本地项目',
        body: '在 Cursor 中选择打开文件夹，找到你的项目目录。打开后，左侧会显示当前项目名称。',
      },
      {
        type: 'screenshot',
        id: 'step-04',
        caption: '在 Cursor 中选择并打开项目文件夹',
      },
      {
        type: 'screenshot',
        id: 'step-05',
        caption: '项目已打开，可以开始用对话描述设计',
      },
      {
        type: 'step',
        number: '2',
        title: '用一句话说明设计需求',
        body: '在聊天框里写清：给谁看、什么风格、页面结构、不要什么。一次说重点，比一次堆全部细节更有效。',
      },
      {
        type: 'code',
        label: '可复制的 Prompt 示例',
        code: '请帮我做一个简洁的中文培训网站首页。\n\n风格：白底、浅灰分区、蓝色强调，像专业 SaaS 文档页。\n结构：顶部标题「从设计到上线」，一句说明，以及 5 个步骤卡片（准备工具、Cursor 设计、上传 GitHub、测试部署、正式上线）。\n要求：桌面和手机都能看，留白充足，不要复杂动画。',
      },
      {
        type: 'step',
        number: '3',
        title: '让 AI 创建或修改网页',
        body: '发送后，Cursor 会在项目里生成或改文件。看它列出的改动，确认方向对了再继续。',
      },
      {
        type: 'screenshot',
        id: 'step-06',
        caption: '用 Prompt 让 Cursor 生成或修改页面',
      },
      {
        type: 'step',
        number: '4',
        title: '本地预览',
        body: '按对话里的提示启动本地预览（常见是 npm run dev）。用浏览器打开给出的本地地址，像看真实网站一样检查排版和层级。',
      },
      {
        type: 'screenshot',
        id: 'step-07',
        caption: '浏览器中查看本地预览效果',
      },
      {
        type: 'step',
        number: '5',
        title: '对照画面继续调整',
        body: '预览不满意时，直接说要改的位置，例如「标题再小一点」「手机上卡片改成上下排列」。改完刷新页面再看。',
      },
      {
        type: 'callout',
        title: '讲解提示',
        text: '设计师的工作方式不变：先看画面，再提修改。只是修改是用对话完成，而不是先手写全部代码。',
      },
    ],
  },
  {
    slug: 'github',
    number: '03',
    title: '上传代码到 GitHub',
    summary: '把本地项目变成可追踪的版本，并推到 GitHub，供部署和协作使用。',
    blocks: [
      {
        type: 'lead',
        text: '本地文件夹是正在编辑的项目；GitHub 仓库是云端备份。上传之后，同事、部署平台才能用同一份代码。',
      },
      {
        type: 'step',
        number: '1',
        title: '理解两边的关系',
        body: 'Cursor 改的是电脑上的文件。Git 记下每一次提交。push 之后，GitHub 网页上就能看到这些文件。',
      },
      {
        type: 'step',
        number: '2',
        title: '提交并推送',
        body: '在项目目录的终端里，按顺序运行这些命令。把 <仓库地址> 换成 GitHub 仓库页面上的地址。',
      },
      {
        type: 'commands',
        items: [
          { command: 'git init', note: '开始在当前文件夹记录版本' },
          { command: 'git add .', note: '把当前改动放进待提交列表' },
          { command: 'git commit -m "完成首页设计"', note: '保存一版，并写上简短说明' },
          {
            command: 'git remote add origin <仓库地址>',
            note: '把本地项目连接到 GitHub 仓库',
          },
          { command: 'git branch -M main', note: '把当前分支命名为 main' },
          { command: 'git push -u origin main', note: '把这版代码上传到 GitHub' },
        ],
      },
      {
        type: 'callout',
        title: '如果仓库已经连过',
        text: '以后改完页面，通常只需 git add .、git commit、git push。不必重复 git init 和 git remote add。',
      },
      {
        type: 'step',
        number: '3',
        title: '在 GitHub 上确认',
        body: '打开仓库页面，能看到刚才的文件和提交说明，就表示上传成功。',
      },
      {
        type: 'screenshot',
        id: 'step-08',
        caption: 'GitHub 仓库页面显示已上传的项目文件',
      },
    ],
  },
  {
    slug: 'preview',
    number: '04',
    title: '部署测试环境',
    summary: '用 Vercel 把 GitHub 仓库变成可打开的测试链接，方便同事或客户验收。',
    blocks: [
      {
        type: 'lead',
        text: 'GitHub 负责保存代码。部署平台负责生成网上能打开的网站。下面以 Vercel 为例。',
      },
      {
        type: 'step',
        number: '1',
        title: '连接 GitHub 仓库',
        body: '打开 vercel.com，用 GitHub 账号登录。在仪表盘选择导入（Import）仓库，选中刚才的项目。',
      },
      {
        type: 'screenshot',
        id: 'step-09',
        caption: '在 Vercel 中导入 GitHub 仓库',
      },
      {
        type: 'step',
        number: '2',
        title: '配置并部署',
        body: '框架和构建命令一般会自动识别。Vite 项目通常保持默认即可，然后开始部署。',
      },
      {
        type: 'step',
        number: '3',
        title: '获取测试链接',
        body: '部署完成后，Vercel 会给出一个可访问的预览地址。复制这个链接发给同事或客户验收。',
      },
      {
        type: 'screenshot',
        id: 'step-10',
        caption: '部署完成，复制测试预览链接',
      },
      {
        type: 'step',
        number: '4',
        title: '改代码后重新部署',
        body: '在 Cursor 里改完、推送到 GitHub 后，Vercel 通常会自动再部署一次。过一会儿刷新测试链接即可。',
      },
      {
        type: 'callout',
        title: '分工记一下',
        text: 'GitHub：代码在哪、改了什么。Vercel：对外可打开的网站。测试链接用来验收，还不是正式域名。',
      },
    ],
  },
  {
    slug: 'launch',
    number: '05',
    title: '正式上线',
    summary: '测试通过后，把审核过的代码放到正式分支，部署生产环境并绑定域名。',
    blocks: [
      {
        type: 'lead',
        text: '上线前先确认测试站没问题。再把审核后的代码合并到正式分支，绑定真正要给用户打开的域名。',
      },
      {
        type: 'step',
        number: '1',
        title: '确认测试结果',
        body: '用测试链接检查桌面和手机：内容、链接、图片是否正常。有问题就回到 Cursor 修改，再推送、再预览。',
      },
      {
        type: 'step',
        number: '2',
        title: '合并到正式分支',
        body: '如果用了单独的测试分支，在 GitHub 上创建 Pull Request，审核后合并到 main（或你们约定的正式分支）。如果一直在 main 上开发，确保当前提交就是要发布的版本。',
      },
      {
        type: 'step',
        number: '3',
        title: '部署生产环境',
        body: 'Vercel 一般会把正式分支自动部署为生产站点。在项目的 Deployments 里确认最新一次生产部署成功。',
      },
      {
        type: 'step',
        number: '4',
        title: '绑定正式域名',
        body: '在 Vercel 项目的 Domains 中添加已购买的域名，并按页面提示到域名服务商处填写解析记录。生效后用正式域名打开网站。',
      },
      {
        type: 'screenshot',
        id: 'step-11',
        caption: '在部署平台绑定正式域名',
      },
      {
        type: 'step',
        number: '5',
        title: '检查并确认发布',
        body: '打开正式域名，再走一遍关键页面。确认标题、链接和预览图无误，就可以视为发布成功。',
      },
      {
        type: 'flow',
      },
    ],
  },
]

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug)
}

export function getChapterIndex(slug: string) {
  return chapters.findIndex((chapter) => chapter.slug === slug)
}
