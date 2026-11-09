import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Card className="border-border/80 bg-card border">
        <CardContent className="p-6 md:p-8">
          <Badge variant="outline" className="rounded-full">
            About
          </Badge>

          <h2 className="text-foreground mt-5 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            About
          </h2>

          <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-8">
            I'm an independent developer focused on Telegram bots and Mini Apps.
            I build practical applications that connect Telegram interfaces to
            APIs, databases, and blockchain services where appropriate. My work
            emphasizes clear implementation, useful functionality, and
            maintainable code.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
