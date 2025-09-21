import * as React from "react"
import { cn } from "@/lib/utils"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_var(--color-primary)]",
  secondary: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

export function buttonClasses({ variant = "primary", size = "md", className = "" }: { variant?: NonNullable<ButtonProps["variant"]>; size?: NonNullable<ButtonProps["size"]>; className?: string }) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className)
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonClasses({ variant, size, className })}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
