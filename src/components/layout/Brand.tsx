import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  className?: string;
  compact?: boolean;
};

export function Brand({ className = "", compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
    >
      <span aria-hidden className={`relative shrink-0 overflow-hidden ${compact ? "h-16 w-10" : "h-[72px] w-11"}`}>
        <Image
          src="/assets/logo/RevelationSigns_Logo_Transparent.png"
          alt=""
          fill
          sizes={compact ? "220px" : "260px"}
          className="object-cover"
          style={{ objectPosition: "6% center" }}
        />
      </span>
      <span className="min-w-0 leading-none">
        <span className={`block whitespace-nowrap font-serif font-medium tracking-[0.015em] text-[#f7f1e7] drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] ${compact ? "text-[1.35rem]" : "text-[1.45rem] sm:text-[1.7rem]"}`}>
          RevelationSigns
        </span>
        <span className="mt-1 block whitespace-nowrap font-sans text-[0.43rem] font-semibold tracking-[0.2em] text-accent uppercase sm:text-[0.5rem]">
          Ancient prophecy · Eternal truth
        </span>
      </span>
    </Link>
  );
}
