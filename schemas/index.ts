import * as z from 'zod';

const required = { message: 'Este campo es requerido' }

export const ContactSchema = z.object({
   name: z.string().trim().min(1, required).max(100),
   email: z.string().trim().min(1, required).max(150).email(),
   phone: z.string().trim().min(1, required).max(40),
   company: z.string().trim().min(1, required).max(120),
   message: z.string().trim().min(1, required).max(3000),
   // Honeypot: debe quedar vacío. Los bots suelen completarlo.
   website: z.string().max(200).optional(),
})
