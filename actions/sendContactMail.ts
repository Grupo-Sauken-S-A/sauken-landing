'use server'

import { ContactSchema } from "@/schemas"
import { redirect } from "next/navigation"
import { z } from "zod"

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

export async function sendContactMail(values: z.infer<typeof ContactSchema>) {
  const result = ContactSchema.safeParse(values)
  if (!result.success) {
    return { error: "Invalid form data" }
  }

  const { name, email, phone, company, message } = result.data

  const content = `
    Nombre: ${name}
    Email: ${email}
    Teléfono: ${phone}
    Empresa: ${company}
    Mensaje: ${message}
  `.trim()

  const data = {
    personalizations: [
      {
        to: [{ email: 'federico.schafer@gmail.com' }],
        subject: 'Consulta desde web Sauken',
      },
    ],
    from: { email: 'web@sauken.com.ar', name: name },
    reply_to: { email: email },
    content: [
      {
        type: 'text/plain',
        value: content,
      },
      {
        type: 'text/html',
        value: `
          <h1>Consulta desde web Sauken</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      },
    ],
  }
  
    const response = await fetch(SENDGRID_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    redirect('/gracias');
  }
