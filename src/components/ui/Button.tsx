import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-foreground/5",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-12 min-w-[9.5rem] items-center justify-center px-8 py-3 font-sans text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
