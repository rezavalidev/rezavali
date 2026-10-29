export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
        Reza Vali
      </a>

      <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#services" className="transition-colors hover:text-foreground">
          Services
        </a>
        <a href="#projects" className="transition-colors hover:text-foreground">
          Projects
        </a>
        <a href="#about" className="transition-colors hover:text-foreground">
          About
        </a>
        <a href="#contact" className="transition-colors hover:text-foreground">
          Contact
        </a>
      </div>
    </nav>
  )
}
