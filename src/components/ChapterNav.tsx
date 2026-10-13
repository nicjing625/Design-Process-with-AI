import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'

type ChapterNavProps = {
  slug: string
}

export function ChapterNav({ slug }: ChapterNavProps) {
  const index = chapters.findIndex((chapter) => chapter.slug === slug)
  const prev = index > 0 ? chapters[index - 1] : null
  const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null

  return (
    <nav className="chapter-pager" aria-label="章节切换">
      {prev ? (
        <Link to={`/${prev.slug}`} className="pager-link">
          <span>上一节</span>
          <strong>
            {prev.number} {prev.title}
          </strong>
        </Link>
      ) : (
        <Link to="/" className="pager-link">
          <span>返回</span>
          <strong>培训概览</strong>
        </Link>
      )}
      {next ? (
        <Link to={`/${next.slug}`} className="pager-link pager-next">
          <span>下一节</span>
          <strong>
            {next.number} {next.title}
          </strong>
        </Link>
      ) : (
        <Link to="/" className="pager-link pager-next">
          <span>完成</span>
          <strong>回到概览</strong>
        </Link>
      )}
    </nav>
  )
}
