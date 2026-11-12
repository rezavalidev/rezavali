import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import DemoVideo from '@/components/home/DemoVideo'

const chainBouncerHighlights = [
  {
    title: 'Native TON & Jettons',
    description: 'Gate access by TON balance or any Jetton.',
  },
  {
    title: 'One-time invite links',
    description: 'Eligible wallets get a single-use link that expires.',
  },
  {
    title: 'Ongoing enforcement',
    description:
      'Scheduled balance checks, a warning, a grace period, then removal.',
  },
]

const chainBouncerStack = [
  'Next.js',
  'Telegram Mini App',
  'TON Connect',
  'PostgreSQL',
]

const nftVoteStack = ['Solidity', 'Next.js', 'Wagmi', 'RainbowKit']

// TODO: Verify these technologies against GuildPass's actual stack.
const guildPassStack = [
  'Next.js',
  'Telegram Mini App',
  'TON Connect',
  'PostgreSQL',
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <Badge variant="outline" className="rounded-full">
            Selected work
          </Badge>
        </div>
        <a
          href="#contact"
          className="text-foreground hidden text-sm font-medium md:inline-flex"
        >
          Let&apos;s collaborate
        </a>
      </div>

      <div className="space-y-6">
        <Card className="border-border/80 bg-card overflow-hidden border">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="default" className="rounded-full bg-blue-950">
                  Featured
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Telegram Mini App
                </Badge>
              </div>

              <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
                PRODUCT
              </p>
              <h3 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
                ChainBouncer
              </h3>

              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-7 md:text-base">
                Automate community moderation and protect your channel or
                group's exclusivity. ChainBouncer is a white-labeled Telegram
                Mini App that instantly verifies native TON or Jetton balances,
                issues secure one-time access links, and automatically removes
                members who drop below your required holding thresholds.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {chainBouncerHighlights.map((feature) => (
                  <li
                    key={feature.title}
                    className="border-border bg-background rounded-xl border p-3"
                  >
                    <h4 className="text-foreground text-sm font-medium">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground mt-2 text-xs leading-5">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {chainBouncerStack.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href="https://t.me/ChainBouncerBot/app?startapp=h3756zw5ufkszrugnpfqa2el"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open ChainBouncer Token Gate demo"
                    />
                  }
                  nativeButton={false}
                  variant="default"
                  className="rounded-full px-5"
                >
                  Demo: Token Gate
                </Button>
              </div>
            </div>

            <div className="border-border bg-muted/40 border-t p-4 md:border-t-0 md:border-l md:p-6">
              <DemoVideo
                src="6ni24UDpgsL9uutj"
                aspect="9/16"
                title="ChainBouncer"
              />
            </div>
          </div>
        </Card>

        <Card className="border-border/80 bg-card overflow-hidden border">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="rounded-full">
                  Telegram Bot &amp; Mini App
                </Badge>
                <Badge variant="default" className="rounded-full bg-blue-950">
                  Experimental
                </Badge>
              </div>

              <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
                EXPERIMENTAL PROJECT
              </p>
              <h3 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
                GuildPass
              </h3>

              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-7 md:text-base">
                Turn your Telegram group or channel into a predictable recurring
                revenue stream with zero manual administration. GuildPass is a
                subscription management Mini App that handles automated crypto
                billing, subscription expiration tracking, and seamless group
                access, featuring automated revenue splits.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {guildPassStack.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href="https://t.me/GuildPassBot/app?startapp=rf0adp3ubqqgc82g1tugtvgw"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="default"
                  className="rounded-full px-5"
                >
                  Demo: Subscription (Exp)
                </Button>
              </div>
            </div>

            <div className="border-border bg-muted/40 border-t p-4 md:border-t-0 md:border-l md:p-6">
              <DemoVideo
                src="0cr9LBs5uJB1mObn"
                aspect="9/16"
                title="GuildPass"
              />
            </div>
          </div>
        </Card>

        {/* <Card className="border-border/80 bg-card border">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="rounded-full">
                  Web3 App
                </Badge>
              </div>
              <div>
                <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
                  PERSONAL PROJECT
                </p>
                <CardTitle className="mt-2 text-xl">NFTVote</CardTitle>
              </div>

              <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-7 md:text-base">
                A decentralized voting application demonstrating EVM wallet
                connection and smart contract interaction.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {nftVoteStack.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href="https://nftvote.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full px-5"
                >
                  Live App
                </Button>
                <Button
                  render={
                    <a
                      href="https://github.com/rezavalidev/NFTVote"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full px-5"
                >
                  GitHub
                </Button>
              </div>
            </div>

            <div className="border-border bg-muted/40 border-t p-4 md:border-t-0 md:border-l md:p-6">
              <DemoVideo aspect="16/9" title="NFTVote" />
            </div>
          </div>
        </Card> */}
      </div>
    </section>
  )
}
