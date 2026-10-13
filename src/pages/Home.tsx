import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FlowChart } from '../components/FlowChart'
import { chapters } from '../data/chapters'

export function Home() {
  useEffect(() => {
    document.title = '从设计到上线 · Cursor + GitHub 培训'
  }, [])

  return (
    <article className="page home">
      <header className="hero">
        <p className="eyebrow">培训演示课件</p>
        <h1>用 Cursor 和 GitHub，把网页设计做成可上线的网站</h1>
        <p className="lede">
          面向有网页设计经验、编程经验有限的设计师。只讲关键节点：准备工具、在 Cursor
          里出页面、上传 GitHub、测试部署、正式上线。
        </p>
      </header>

      <ol className="chapter-grid">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link to={`/${chapter.slug}`} className="chapter-card">
              <span className="chapter-num">{chapter.number}</span>
              <h2>{chapter.title}</h2>
              <p>{chapter.summary}</p>
              <span className="card-go">进入本节</span>
            </Link>
          </li>
        ))}
      </ol>

      <FlowChart />
    </article>
  )
}
