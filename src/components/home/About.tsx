import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Card className="border-border/80 bg-card border">
        <CardContent className="grid grid-cols-1 items-center gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Badge variant="outline" className="rounded-full">
              About
            </Badge>

            <h2 className="text-foreground mt-5 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              About
            </h2>

            <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-8">
              I&apos;m an independent developer focused on Telegram bots and
              Mini Apps. I build practical applications that connect Telegram
              interfaces to APIs, databases, and blockchain services where
              appropriate. My work emphasizes clear implementation, useful
              functionality, and maintainable code.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[320px] lg:justify-self-end">
            {/* Put the real portrait in public/images and replace this placeholder src. */}
            <Image
              src="/images/rezavali.webp"
              alt="Portrait of Reza Vali"
              width={320}
              height={400}
              className="border-border aspect-[4/5] w-full rounded-xl border object-cover"
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 320px, 100vw"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
