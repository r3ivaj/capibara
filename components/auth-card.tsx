import * as React from "react"
import { cn } from "@/lib/utils"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  description?: string
  className?: string
}

export function AuthCard({
  children,
  title,
  description,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-lg border bg-card p-8 shadow-sm space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Content */}
      {children}
    </div>
  )
}
