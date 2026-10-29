export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-border flex flex-col gap-5 border-t py-12 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="text-foreground text-lg font-semibold tracking-tight">
          Let&apos;s discuss your project.
        </p>
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-5 text-sm font-medium">
        <a
          href="https://t.me/rezavalidev"
          className="hover:text-foreground transition-colors"
        >
          Telegram
        </a>
        <a
          href="https://x.com/rezavalidev"
          className="hover:text-foreground transition-colors"
        >
          X
        </a>
        <a
          href="mailto:rezavalidev@proton.me"
          className="hover:text-foreground transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
