import { useState } from 'react'
import type { CommandItem } from '../data/chapters'
import { copyText } from '../lib/copy'

type CommandListProps = {
  items: CommandItem[]
}

export function CommandList({ items }: CommandListProps) {
  const [copied, setCopied] = useState<string | null>(null)

  async function copy(command: string) {
    const ok = await copyText(command)
    if (!ok) return
    setCopied(command)
    window.setTimeout(() => setCopied(null), 1600)
  }

  return (
    <ol className="commands">
      {items.map((item) => (
        <li key={item.command}>
          <div className="command-row">
            <code>{item.command}</code>
            <button type="button" className="copy-btn" onClick={() => copy(item.command)}>
              {copied === item.command ? '已复制' : '复制'}
            </button>
          </div>
          <p>{item.note}</p>
        </li>
      ))}
    </ol>
  )
}
