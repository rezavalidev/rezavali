'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    wavePopover?: {
      init: () => void | (() => void)
    }
  }
}

type VideoStatus = 'loading' | 'ready' | 'error'

type WaveVideoPopupProps = {
  src: string
  poster?: string
  title: string
}

export default function WaveVideoPopup({
  src,
  poster,
  title,
}: WaveVideoPopupProps) {
  const [status, setStatus] = useState<VideoStatus>('loading')
  const initialized = useRef(false)
  const ready = status === 'ready'
  const preview =
    poster ??
    `https://embed.wave.video/${src}/preview.jpg?width=1080&height=1920&play=true&color=%2330AEF2`

  const initializePopup = () => {
    if (initialized.current) {
      return
    }

    if (!window.wavePopover) {
      setStatus('error')
      return
    }

    initialized.current = true
    window.wavePopover.init()
    setStatus('ready')
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      aria-busy={!ready && status !== 'error'}
    >
      <div
        className="wave_popover_embed h-full w-full"
        data-id={src}
        data-width="360"
        data-height="640"
      >
        <div className="h-full w-full">
          {/* Wave's embed script binds directly to this image element. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt={`${title} demo video preview`}
            style={{
              cursor: ready ? 'pointer' : 'wait',
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: ready ? 'auto' : 'none',
            }}
            data-target="target"
          />
        </div>
      </div>

      {status !== 'ready' && (
        <p
          className="text-muted-foreground bg-background/85 absolute inset-x-0 bottom-0 p-3 text-center text-sm backdrop-blur-sm"
          role={status === 'error' ? 'alert' : 'status'}
        >
          {status === 'error'
            ? 'The video popup could not be loaded. Please try again later.'
            : 'Loading video…'}
        </p>
      )}

      <Script
        src="https://wave.video/embed/popover-embed.js"
        strategy="afterInteractive"
        onReady={initializePopup}
        onLoad={initializePopup}
        onError={() => setStatus('error')}
      />
    </div>
  )
}
