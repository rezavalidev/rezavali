import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20">
      <Card className="border border-border/80 bg-card">
        <CardContent className="p-6 md:p-8">
          <Badge variant="outline" className="rounded-full">
            About
          </Badge>

          <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            About
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            I am an independent developer focused on Telegram bots and Mini Apps. I build
            practical, execution-oriented workflows that connect user interfaces with external APIs,
            PostgreSQL databases, and the TON ecosystem. My approach prioritizes hands-on
            implementation and reliable delivery over theoretical complexity.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
