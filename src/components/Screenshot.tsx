import { useState } from 'react'

type ScreenshotProps = {
  id: string
  caption: string
}

export function Screenshot({ id, caption }: ScreenshotProps) {
  const [missing, setMissing] = useState(false)
  const src = `/images/tutorial/${id}.png`

  return (
    <figure className="shot">
      <div className="shot-frame">
        {missing ? (
          <div className="shot-placeholder">
            <span className="shot-id">{id}</span>
            <span className="shot-hint">{caption}</span>
            <span className="shot-path">public/images/tutorial/{id}.png</span>
          </div>
        ) : (
          <img src={src} alt={caption} onError={() => setMissing(true)} />
        )}
      </div>
      <figcaption>
        <span className="shot-caption-id">{id}</span>
        {caption}
      </figcaption>
    </figure>
  )
}
