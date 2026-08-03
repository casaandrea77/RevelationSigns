import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-accent/20 bg-[#06101a] text-foreground">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-6 py-10 sm:flex-row sm:px-10 lg:px-12">
        <Image src="/assets/logo/RevelationSigns_Logo_Transparent.png" alt="RevelationSigns" width={300} height={100} className="h-auto w-[190px]" />

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-8">
          <Link
            href="/#journey"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Journey
          </Link>
          <Link
            href="/documentaries"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Documentaries
          </Link>
          <Link
            href="/great-controversy"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            The Book
          </Link>
          <Link
            href="/bible-studies"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Bible Studies
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-[0.22em] uppercase text-muted transition-colors duration-300 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <p className="font-sans text-xs tracking-[0.12em] text-muted/80">
          &copy; {new Date().getFullYear()} RevelationSigns. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
