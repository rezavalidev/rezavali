import { Play } from 'lucide-react'

import WaveVideoPopup from '@/components/home/WaveVideoPopup'

type DemoVideoProps = {
  src?: string
  poster?: string
  aspect: '9/16' | '16/9'
  title: string
  showPlaceholder?: boolean
}

export default function DemoVideo({
  src,
  poster,
  aspect,
  title,
  showPlaceholder = true,
}: DemoVideoProps) {
  if (!src && !showPlaceholder) {
    return null
  }

  const isPortrait = aspect === '9/16'

  return (
    <div
      className="border-border bg-muted/40 relative mx-auto overflow-hidden rounded-xl border shadow-sm"
      style={{
        aspectRatio: isPortrait ? '9 / 16' : '16 / 9',
        width: isPortrait
          ? 'min(100%, calc(min(72vh, 640px) * 9 / 16))'
          : '100%',
        maxWidth: isPortrait ? undefined : '560px',
        height: 'auto',
      }}
    >
      {src ? (
        <div className="absolute inset-0">
          <WaveVideoPopup src={src} poster={poster} title={title} />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`${title} - demo video coming soon`}
          className="text-muted-foreground absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
        >
          <Play aria-hidden="true" className="size-10" strokeWidth={1.5} />
          <span className="text-sm">Demo video coming soon</span>
        </div>
      )}
    </div>
  )
}
