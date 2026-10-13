type CalloutProps = {
  title: string
  text: string
}

export function Callout({ title, text }: CalloutProps) {
  return (
    <aside className="callout">
      <strong>{title}</strong>
      <p>{text}</p>
    </aside>
  )
}
