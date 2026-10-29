import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Telegram Bots & Automation',
    description:
      'Custom bots to automate business workflows, manage group access, and handle community interactions reliably.',
  },
  {
    title: 'Telegram Mini Apps',
    description:
      'Responsive, full-stack Next.js and React applications embedded directly within the Telegram interface.',
  },
  {
    title: 'Backend & API Integrations',
    description:
      'Connecting your Telegram frontends to PostgreSQL databases, external APIs, and third-party services.',
  },
  {
    title: 'Membership & TON Integrations',
    description:
      'Help communities implement wallet-connected experiences, token-gated access, and membership workflows using Telegram and TON.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="outline" className="rounded-full">
            Services
          </Badge>
        </div>
        <h2 className="text-foreground max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
          Practical delivery for product teams that need momentum.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <Card
            key={service.title}
            className="border-border/80 bg-card h-full border"
          >
            <CardHeader className="gap-4">
              <div className="border-border bg-muted text-foreground flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium">
                0{services.indexOf(service) + 1}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-6">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
