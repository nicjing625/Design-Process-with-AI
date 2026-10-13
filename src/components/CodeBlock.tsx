import { useState } from 'react'
import { copyText } from '../lib/copy'

type CodeBlockProps = {
  label?: string
  code: string
}

export function CodeBlock({ label, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    const ok = await copyText(code)
    if (!ok) return
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{label ?? '代码'}</span>
        <button type="button" className="copy-btn" onClick={copy}>
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
