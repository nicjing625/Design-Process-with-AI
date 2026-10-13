import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { chapters } from '../data/chapters'

export function Layout() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <div className="shell">
      <header className="topbar">
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? '关闭导航' : '打开导航'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">CG</span>
          <span className="brand-text">
            <strong>从设计到上线</strong>
            <em>Cursor + GitHub 培训</em>
          </span>
        </Link>
      </header>

      {open ? <button type="button" className="backdrop" aria-label="关闭菜单" onClick={close} /> : null}

      <aside className={open ? 'sidebar is-open' : 'sidebar'}>
        <p className="sidebar-label">章节</p>
        <nav>
          <NavLink to="/" end className="nav-home" onClick={close}>
            概览
          </NavLink>
          {chapters.map((chapter) => (
            <NavLink key={chapter.slug} to={`/${chapter.slug}`} onClick={close}>
              <span>{chapter.number}</span>
              {chapter.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
