"use client"

import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation"
import { AppShell } from "@/components/app-shell"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return redirect("/iniciar-sesion")
  }

  return <AppShell>{children}</AppShell>
}
