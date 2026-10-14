(function () {
  const STAGES = [
    'Antigravity IDE 辅助设计',
    '本地即时预览',
    'GitHub 代码托管',
    '自动化测试部署',
    '多端验收',
    '正式上线',
  ];

  function getChapters() {
    return window.CHAPTERS || [];
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    field.remove();
    return ok;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderFlowChart() {
    return `
      <section class="flow" aria-label="工作流程">
        <h2>工作流总览</h2>
        <p class="flow-lead">从设计到上线，记住这条主线即可。</p>
        <ol class="flow-track">
          ${STAGES.map(
            (stage, idx) => `
            <li>
              <span class="flow-index">${String(idx + 1).padStart(2, '0')}</span>
              <span class="flow-label">${escapeHtml(stage)}</span>
            </li>
          `,
          ).join('')}
        </ol>
      </section>
    `;
  }

  function renderHome(chapters) {
    return `
      <article class="page home">
        <header class="hero">
          <p class="eyebrow">培训演示课件</p>
          <h1>用 Antigravity IDE 和 GitHub，把网页设计做成可上线的网站</h1>
          <p class="lede">
            面向有网页设计经验、编程经验有限的设计师。用智能 IDE 辅助产出代码、一键托管 GitHub、自动化测试部署到正式上线。
          </p>
        </header>

        <ol class="chapter-grid">
          ${chapters
            .map(
              (chapter) => `
            <li>
              <a href="#${chapter.slug}" class="chapter-card">
                <span class="chapter-num">${chapter.number}</span>
                <h2>${escapeHtml(chapter.title)}</h2>
                <p>${escapeHtml(chapter.summary)}</p>
                <span class="card-go">进入本节</span>
              </a>
            </li>
          `,
            )
            .join('')}
        </ol>

        ${renderFlowChart()}
      </article>
    `;
  }

  function renderChapterBlock(block) {
    switch (block.type) {
      case 'lead':
        return `<p class="lead-block">${escapeHtml(block.text)}</p>`;
      case 'step':
        return `
          <section class="step">
            <span class="step-num">${block.number}</span>
            <div>
              <h2>${escapeHtml(block.title)}</h2>
              <p>${escapeHtml(block.body)}</p>
            </div>
          </section>
        `;
      case 'screenshot': {
        const filename = block.id.endsWith('.png') ? block.id : `${block.id}.png`;
        const path = `./public/images/tutorial/${filename}`;
        return `
          <figure class="shot">
            <div class="shot-frame">
              <img src="${path}" alt="${escapeHtml(block.caption)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="shot-placeholder" style="display:none;">
                <span class="shot-id">${escapeHtml(block.id)}</span>
                <span class="shot-hint">${escapeHtml(block.caption)}</span>
                <span class="shot-path">public/images/tutorial/${filename}</span>
              </div>
            </div>
            <figcaption>
              <span class="shot-caption-id">${escapeHtml(block.id)}</span>
              ${escapeHtml(block.caption)}
            </figcaption>
          </figure>
        `;
      }
      case 'code':
        return `
          <div class="code-block">
            <div class="code-toolbar">
              <span>${escapeHtml(block.label || '代码')}</span>
              <button type="button" class="copy-btn" data-code="${escapeHtml(block.code)}">复制</button>
            </div>
            <pre><code>${escapeHtml(block.code)}</code></pre>
          </div>
        `;
      case 'commands':
        return `
          <ol class="commands">
            ${block.items
              .map(
                (item) => `
              <li>
                <div class="command-row">
                  <code>${escapeHtml(item.command)}</code>
                  <button type="button" class="copy-btn" data-code="${escapeHtml(item.command)}">复制</button>
                </div>
                <p>${escapeHtml(item.note)}</p>
              </li>
            `,
              )
              .join('')}
          </ol>
        `;
      case 'callout':
        return `
          <aside class="callout">
            <strong>${escapeHtml(block.title)}</strong>
            <p>${escapeHtml(block.text)}</p>
          </aside>
        `;
      case 'flow':
        return renderFlowChart();
      default:
        return '';
    }
  }

  function renderChapter(chapter, chapters) {
    const index = chapters.findIndex((c) => c.slug === chapter.slug);
    const prev = index > 0 ? chapters[index - 1] : null;
    const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null;

    return `
      <article class="page chapter">
        <header class="chapter-head">
          <p class="eyebrow">第 ${chapter.number} 节</p>
          <h1>${escapeHtml(chapter.title)}</h1>
          <p class="lede">${escapeHtml(chapter.summary)}</p>
        </header>

        <div class="chapter-body">
          ${chapter.blocks.map(renderChapterBlock).join('')}
        </div>

        <nav class="chapter-pager" aria-label="章节切换">
          ${
            prev
              ? `
            <a href="#${prev.slug}" class="pager-link">
              <span>上一节</span>
              <strong>${prev.number} ${escapeHtml(prev.title)}</strong>
            </a>
          `
              : `
            <a href="#/" class="pager-link">
              <span>返回</span>
              <strong>培训概览</strong>
            </a>
          `
          }
          ${
            next
              ? `
            <a href="#${next.slug}" class="pager-link pager-next">
              <span>下一节</span>
              <strong>${next.number} ${escapeHtml(next.title)}</strong>
            </a>
          `
              : `
            <a href="#/" class="pager-link pager-next">
              <span>完成</span>
              <strong>回到概览</strong>
            </a>
          `
          }
        </nav>
      </article>
    `;
  }

  function updateSidebar(currentSlug, chapters) {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    const isHome = !currentSlug || currentSlug === '/';
    let html = `
      <a href="#/" class="nav-home ${isHome ? 'active' : ''}">概览</a>
    `;

    chapters.forEach((chapter) => {
      const active = chapter.slug === currentSlug ? 'active' : '';
      html += `
        <a href="#${chapter.slug}" class="${active}">
          <span>${chapter.number}</span>
          ${escapeHtml(chapter.title)}
        </a>
      `;
    });

    nav.innerHTML = html;
  }

  function closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.backdrop');
    if (sidebar) sidebar.classList.remove('is-open');
    if (backdrop) backdrop.style.display = 'none';
  }

  function toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.backdrop');
    if (!sidebar) return;
    const isOpen = sidebar.classList.toggle('is-open');
    if (backdrop) backdrop.style.display = isOpen ? 'block' : 'none';
  }

  function render() {
    const chapters = getChapters();
    const rawHash = window.location.hash || '';
    const slug = rawHash.replace(/^#\/?/, '').trim();
    const main = document.getElementById('app-root');

    if (!main) return;

    closeMobileSidebar();

    const chapter = chapters.find((c) => c.slug === slug);

    if (chapter) {
      document.title = `${chapter.number} ${chapter.title} · 从设计到上线`;
      main.innerHTML = renderChapter(chapter, chapters);
      updateSidebar(chapter.slug, chapters);
    } else {
      document.title = '从设计到上线 · Antigravity IDE + GitHub 培训';
      main.innerHTML = renderHome(chapters);
      updateSidebar('', chapters);
    }

    window.scrollTo(0, 0);
  }

  function init() {
    const menuBtn = document.querySelector('.menu-btn');
    const backdrop = document.querySelector('.backdrop');

    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMobileSidebar);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeMobileSidebar);
    }

    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
        const code = copyBtn.getAttribute('data-code');
        if (code) {
          copyText(code).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '已复制';
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 1600);
          });
        }
      }

      const sidebarLink = e.target.closest('.sidebar a');
      if (sidebarLink) {
        closeMobileSidebar();
      }
    });

    window.addEventListener('hashchange', render);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
