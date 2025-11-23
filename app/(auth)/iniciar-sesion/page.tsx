import type { Metadata } from "next"
import { SignInForm } from "@/components/sign-in-form"

export const metadata: Metadata = {
  title: "Iniciar Sesión - Capibara AI",
  description: "Inicia sesión en tu cuenta de Capibara AI",
}

export default function SignInPage() {
  return <SignInForm />
}
