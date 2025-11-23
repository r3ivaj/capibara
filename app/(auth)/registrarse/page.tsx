import type { Metadata } from "next";
import { SignUpForm } from "@/components/sign-up-form";

export const metadata: Metadata = {
  title: "Crear Cuenta - Capibara AI",
  description: "Crea tu cuenta de Capibara AI para comenzar",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
