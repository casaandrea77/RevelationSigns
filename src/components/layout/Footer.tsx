import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 sm:flex-row sm:px-10 lg:px-16">
        <p className="font-serif text-lg tracking-[0.04em] text-foreground">
          Revelation<span className="text-accent">Signs</span>
        </p>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-8">
          <Link
            href="#"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Privacy
          </Link>
        </nav>

        <p className="font-sans text-xs tracking-[0.12em] text-muted/80">
          &copy; {new Date().getFullYear()} RevelationSigns
        </p>
      </div>
    </footer>
  );
}
