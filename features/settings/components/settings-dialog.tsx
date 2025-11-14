"use client"

import { CheckIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface ConnectedAccount {
  id: string
  name: string
  icon: React.ReactNode
  connected?: boolean
}

// Instagram Icon Component
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

// Facebook Icon Component
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.646c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
    </svg>
  )
}

const connections: ConnectedAccount[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <InstagramIcon className="size-6" />,
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <FacebookIcon className="size-6" />,
  },
]

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  // Las cuentas conectadas (por ahora vacío, se poblará con datos reales después)
  const connectedAccounts: ConnectedAccount[] = []

  // Las aplicaciones disponibles son estáticas y siempre muestran todas las conexiones
  const availableApps = connections

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Configuración</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="connected-accounts" orientation="vertical">
          <div className="flex gap-4">
            <TabsList className="flex-col">
              <TabsTrigger value="connected-accounts" className="w-full">
                Cuentas conectadas
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="connected-accounts" className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">
                    Cuentas conectadas
                  </h3>
                  {connectedAccounts.length > 0 ? (
                    <div className="grid grid-cols-4 gap-3">
                      {connectedAccounts.map(({ id, name, icon }) => (
                        <div
                          key={id}
                        >
                          Test
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Aún no has conectado ninguna cuenta.
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">
                    Aplicaciones disponibles para conectar
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {availableApps.map(({ id, name, icon }) => (
                      <button
                        key={id}
                        type="button"
                        className="flex flex-col items-center justify-center gap-1.5 rounded-lg border p-3 transition-all hover:bg-accent hover:border-accent-foreground/20"
                      >
                        <div
                          className={cn(
                            id === "instagram" && "text-[#E4405F]",
                            id === "facebook" && "text-[#1877F2]"
                          )}
                        >
                          {icon}
                        </div>
                        <span className="text-xs font-medium">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
