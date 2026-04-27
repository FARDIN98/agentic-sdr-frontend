import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/* DESIGN.md §7: 2px radius, text-base label, no shadows, no hover lifts.
   Sizes resolve to --button-h-sm/--button-h/--button-h-lg.
   Hover/active = ±6% lightness via color-mix on --accent.
   Focus-visible inherits the global 2px accent outline (globals.css). */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-1)] border border-transparent text-[length:var(--text-base)] font-medium whitespace-nowrap transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] outline-none select-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[var(--surface-2)] disabled:text-[var(--text-disabled)] aria-invalid:border-[var(--danger)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[16px]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[color-mix(in_oklch,var(--accent),white_6%)] active:bg-[color-mix(in_oklch,var(--accent),black_6%)]",
        secondary:
          "bg-[var(--surface-2)] text-[var(--text)] border-[var(--hairline)] hover:bg-[color-mix(in_oklch,var(--surface-2),white_4%)] hover:border-[var(--hairline-strong)] active:bg-[color-mix(in_oklch,var(--surface-2),black_4%)]",
        outline:
          "bg-transparent text-[var(--text)] border-[var(--hairline)] hover:bg-[var(--surface-2)] hover:border-[var(--hairline-strong)] active:bg-[var(--surface)]",
        ghost:
          "bg-transparent text-[var(--text)] hover:bg-[var(--surface-2)] active:bg-[var(--surface)]",
        link:
          "bg-transparent text-[var(--text)] hover:underline underline-offset-4 px-0 h-auto",
        destructive:
          "bg-[var(--danger)] text-white hover:bg-[color-mix(in_oklch,var(--danger),white_6%)] active:bg-[color-mix(in_oklch,var(--danger),black_6%)]",
      },
      size: {
        default: "h-[var(--button-h)] gap-2 px-4",
        sm: "h-[var(--button-h-sm)] gap-2 px-3",
        lg: "h-[var(--button-h-lg)] gap-2 px-6",
        icon: "size-[var(--button-h)]",
        "icon-sm": "size-[var(--button-h-sm)]",
        "icon-lg": "size-[var(--button-h-lg)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
