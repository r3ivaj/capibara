"use client"

import * as React from "react"
import Link from "next/link"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthCard } from "@/components/auth-card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

const resetPasswordSchema = z.object({
  email: z.email("Ingresa un correo electrónico válido."),
})

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: resetPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true)
      // Simulate loading state (no actual auth integration)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Reset password:", value)
      setIsLoading(false)
      setIsSuccess(true)
    },
  })

  return (
    <AuthCard
      title="Restablecer Contraseña"
      description={
        isSuccess
          ? "Revisa tu correo electrónico"
          : "Ingresa tu correo para recibir instrucciones"
      }
    >
      {isSuccess ? (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <svg
                className="size-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-semibold text-foreground">
                Correo enviado exitosamente
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Hemos enviado un enlace para restablecer tu contraseña a tu correo
              electrónico. Por favor revisa tu bandeja de entrada y sigue las
              instrucciones.
            </p>
          </div>

          {/* Back to Sign In */}
          <Link href="/iniciar-sesion" className="block">
            <Button variant="outline" className="w-full">
              Volver a iniciar sesión
            </Button>
          </Link>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            {/* Email Field */}
            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Correo electrónico
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="tu@ejemplo.com"
                      type="email"
                      autoComplete="email"
                    />
                    <FieldDescription>
                      Te enviaremos un enlace para restablecer tu contraseña
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            </form.Field>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar enlace de restablecimiento"
              )}
            </Button>

            {/* Back to Sign In Link */}
            <div className="text-center text-sm">
              <Link
                href="/iniciar-sesion"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Volver a iniciar sesión
              </Link>
            </div>
          </FieldGroup>
        </form>
      )}
    </AuthCard>
  )
}
