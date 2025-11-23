import type { Metadata } from "next"
import { ResetPasswordForm } from "@/components/reset-password-form"

export const metadata: Metadata = {
  title: "Restablecer Contraseña - Capibara AI",
  description: "Restablece tu contraseña de Capibara AI",
}

export default function ResetPasswordPage() {
  return <ResetPasswordForm />
}
