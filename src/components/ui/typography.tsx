
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl font-bold", className)} {...props}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl font-semibold", className)} {...props}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("text-2xl font-semibold", className)} {...props}>
      {children}
    </h3>
  )
}

export function TypographyP({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className, ...props }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  )
}

export function TypographyLead({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

export function TypographySmall({ children, className, ...props }: TypographyProps) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)} {...props}>
      {children}
    </small>
  )
}

export function TypographyMono({ children, className, ...props }: TypographyProps) {
  return (
    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props}>
      {children}
    </code>
  )
}
