const stages = [
  'Cursor 设计与开发',
  '本地预览',
  'GitHub 版本管理',
  '测试部署',
  '验收',
  '正式上线',
]

export function FlowChart() {
  return (
    <section className="flow" aria-label="工作流程">
      <h2>工作流总览</h2>
      <p className="flow-lead">从设计到上线，记住这条主线即可。</p>
      <ol className="flow-track">
        {stages.map((stage, index) => (
          <li key={stage}>
            <span className="flow-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="flow-label">{stage}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
