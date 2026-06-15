import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-gold-500 bg-gold-500 text-white hover:border-coffee-900 hover:bg-coffee-900",
  secondary:
    "border-coffee-900 bg-coffee-900 text-white hover:border-origin-700 hover:bg-origin-700",
  ghost:
    "border-coffee-900/20 bg-white/70 text-coffee-900 hover:border-gold-500 hover:text-gold-500"
};

export function CtaLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
