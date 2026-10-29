import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="hero" className="pt-10 pb-18 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
        <div className="space-y-8">
          <Badge
            variant="secondary"
            className="border-border/80 rounded-full border"
          >
            Available for new projects
          </Badge>

          <div className="space-y-6">
            <h1 className="text-foreground max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
              Telegram Bots &amp; Mini Apps Developer.
            </h1>

            <p className="text-muted-foreground max-w-lg text-base leading-7 md:text-lg">
              I build Telegram bots and Mini Apps that automate business
              workflows, simplify community management, and connect Telegram to
              external services and TON.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="rounded-full px-6"
            >
              Discuss a Project
            </Button>
            <Button
              render={<a href="#projects" />}
              variant="secondary"
              size="lg"
              className="rounded-full px-6"
            >
              View Projects
            </Button>
          </div>
        </div>

        <div className="border-border bg-card rounded-2xl border p-5 shadow-sm">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase">
            Focus
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-muted-foreground text-sm">Primary</p>
              <p className="text-foreground mt-1 text-xl font-semibold">
                Telegram Mini Apps
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Secondary</p>
              <p className="text-foreground mt-1 text-xl font-semibold">
                Bot Automation
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Context</p>
              <p className="text-foreground mt-1 text-xl font-semibold">
                Web3 + TON
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
