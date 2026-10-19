'use server'

import nodemailer from "nodemailer"
import { redirect } from "next/navigation"
import { z } from "zod"
import { ContactSchema } from "@/schemas"

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// Cabeceras: sin saltos de línea para evitar inyección de headers
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim()

function createTransport() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 465)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('SMTP no configurado (SMTP_HOST, SMTP_USER, SMTP_PASS)')
  }

  return nodemailer.createTransport({
    host,
    port,
    // 465 = TLS implícito; 587 = STARTTLS (obligatorio)
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
  })
}

export async function sendContactMail(values: z.infer<typeof ContactSchema>) {
  const result = ContactSchema.safeParse(values)
  if (!result.success) {
    return { error: "Invalid form data" }
  }

  const { name, email, phone, company, message } = result.data

  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone}`,
    `Empresa: ${company}`,
    `Mensaje: ${message}`,
  ].join('\n')

  const html = `
    <h1>Consulta desde web Sauken</h1>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Mensaje:</strong> ${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `

  try {
    await createTransport().sendMail({
      from: { name: singleLine(name), address: process.env.MAIL_FROM ?? 'web@sauken.com.ar' },
      to: process.env.MAIL_TO ?? 'info@sauken.com.ar',
      replyTo: email,
      subject: 'Consulta desde web Sauken',
      text,
      html,
    })
  } catch (err) {
    console.error('Error enviando mail de contacto', err)
    return { error: "No pudimos enviar tu consulta. Intentá nuevamente." }
  }

  redirect('/gracias')
}
