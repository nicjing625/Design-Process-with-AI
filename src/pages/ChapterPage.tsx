import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Callout } from '../components/Callout'
import { ChapterNav } from '../components/ChapterNav'
import { CodeBlock } from '../components/CodeBlock'
import { CommandList } from '../components/CommandList'
import { FlowChart } from '../components/FlowChart'
import { Screenshot } from '../components/Screenshot'
import { getChapter } from '../data/chapters'

export function ChapterPage() {
  const { slug } = useParams()
  const chapter = slug ? getChapter(slug) : undefined

  useEffect(() => {
    if (!chapter) return
    document.title = `${chapter.number} ${chapter.title} · 从设计到上线`
    return () => {
      document.title = '从设计到上线 · Cursor + GitHub 培训'
    }
  }, [chapter])

  if (!chapter) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="page chapter">
      <header className="chapter-head">
        <p className="eyebrow">第 {chapter.number} 节</p>
        <h1>{chapter.title}</h1>
        <p className="lede">{chapter.summary}</p>
      </header>

      <div className="chapter-body">
        {chapter.blocks.map((block, index) => {
          switch (block.type) {
            case 'lead':
              return (
                <p key={index} className="lead-block">
                  {block.text}
                </p>
              )
            case 'step':
              return (
                <section key={index} className="step">
                  <span className="step-num">{block.number}</span>
                  <div>
                    <h2>{block.title}</h2>
                    <p>{block.body}</p>
                  </div>
                </section>
              )
            case 'screenshot':
              return <Screenshot key={block.id} id={block.id} caption={block.caption} />
            case 'code':
              return <CodeBlock key={index} label={block.label} code={block.code} />
            case 'commands':
              return <CommandList key={index} items={block.items} />
            case 'callout':
              return <Callout key={index} title={block.title} text={block.text} />
            case 'flow':
              return <FlowChart key="flow" />
            default:
              return null
          }
        })}
      </div>

      <ChapterNav slug={chapter.slug} />
    </article>
  )
}
