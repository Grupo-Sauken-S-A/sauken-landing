import * as z from 'zod';

export const ContactSchema = z.object({
   name: z.string().min(1, { message: 'Este campo es requerido' }),
   email: z.string().min(1, { message: 'Este campo es requerido' }).email(),
   phone: z.string().min(1, { message: 'Este campo es requerido' }),
   company: z.string().min(1, { message: 'Este campo es requerido' }),
   message: z.string().min(1, { message: 'Este campo es requerido' }),
 })