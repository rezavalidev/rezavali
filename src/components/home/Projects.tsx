import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const chainBouncerFeatures = [
  {
    title: 'Token Gate',
    description:
      'Verifies Native TON and Jetton balances via TON Connect to automate group access based on token holding requirements.',
  },
  {
    title: 'Subscription (Experimental)',
    description:
      'A dedicated UI and workflow for subscription-based membership management.',
  },
]

const chainBouncerStack = [
  'Next.js',
  'Telegram Mini App',
  'TON Connect',
  'PostgreSQL',
]

const nftVoteStack = ['Solidity', 'Next.js', 'Wagmi', 'RainbowKit']

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
                <Badge className="rounded-full">Featured</Badge>
                <Badge variant="outline" className="rounded-full">
                  Telegram Bot &amp; Mini App
                </Badge>
              </div>

              <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
                Personal project
              </p>
              <h3 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
                ChainBouncer
              </h3>

              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-7 md:text-base">
                A Telegram bot and Mini App for managing group access through
                wallet verification. The Token Gate mode checks native TON or
                Jetton balances against configurable requirements and automates
                access management. A separate subscription workflow is available
                experimentally.
              </p>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {chainBouncerFeatures.map((feature) => (
                  <li
                    key={feature.title}
                    className="border-border bg-background rounded-xl border p-4"
                  >
                    <h4 className="text-foreground font-medium">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">
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
                    />
                  }
                  nativeButton={false}
                  className="rounded-full px-5"
                >
                  Demo: Token Gate
                </Button>
                <Button
                  render={
                    <a
                      href="https://t.me/ChainBouncerBot/app?startapp=h3756zw5ufkszrugnpfqsfsf"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full px-5"
                >
                  Demo: Subscription (Exp)
                </Button>
              </div>
            </div>

            <div className="border-border bg-muted/40 border-t p-4 md:border-t-0 md:border-l md:p-6">
              <div className="relative h-[260px] w-full overflow-hidden rounded-xl border shadow-sm sm:h-[300px] lg:h-[500px]">
                <Image
                  src="/images/chainbouncer-screenshot.webp"
                  alt="ChainBouncer Telegram Mini App Interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-border/80 bg-card border">
          <CardHeader className="gap-3 pb-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-muted-foreground text-[11px] font-medium tracking-[0.18em] uppercase">
                  Personal project
                </p>
                <CardTitle className="mt-2 text-xl">NFTVote</CardTitle>
              </div>
              <Badge variant="outline" className="rounded-full">
                Web3 App
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-4">
            <CardDescription className="text-muted-foreground max-w-2xl text-sm leading-7 md:text-base">
              A decentralized voting application demonstrating EVM wallet
              connection and smart contract interaction.
            </CardDescription>

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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
