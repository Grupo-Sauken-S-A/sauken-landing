'use client'

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Boton } from "../Boton"
import { sendContactMail } from "@/actions/sendContactMail"
import { ContactSchema } from "@/schemas"

export default function ContactForm() {
   const [error, setError] = useState<string>("")
   const [success, setSuccess] = useState<string>("")
   const [isPending, startTransition] = useTransition()

   const form = useForm<z.infer<typeof ContactSchema>>({
      resolver: zodResolver(ContactSchema),
      mode: "onTouched",
      defaultValues: {
         name: "",
         email: "",
         phone: "",
         company: "",
         message: "",
      }
   })

   const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
      setSuccess("")
      setError("")
      startTransition(() => {
         sendContactMail(values);
      })
   }
   return (
      <Form {...form}>
         <div className="contact-form-wrap relative">
            <Image src="/images/form-bg.svg" width={298} height={214} alt="" className="absolute right-0 -top-[60px] sm:top-0 w-[25%] xl:w-[35%] " />
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
               <div className="w-full sm:w-[70%] xl:w-[60%] pt-16">
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem className="flex gap-x-6">
                           <FormLabel>Nombre:</FormLabel>
                           <div className="flex-grow">
                              <FormControl>
                                 <Input {...field} />
                              </FormControl>
                              <FormMessage />
                           </div>
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="phone"
                     render={({ field }) => (
                        <FormItem className="flex gap-x-6">
                           <FormLabel>Teléfono:</FormLabel>
                           <div className="flex-grow">
                              <FormControl>
                                 <Input {...field} />
                              </FormControl>
                              <FormMessage />
                           </div>
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem className="flex gap-x-6">
                           <FormLabel>Email:</FormLabel>
                           <div className="flex-grow">
                              <FormControl>
                                 <Input {...field} />
                              </FormControl>
                              <FormMessage />
                           </div>
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="company"
                     render={({ field }) => (
                        <FormItem className="flex gap-x-6">
                           <FormLabel>Empresa:</FormLabel>
                           <div className="flex-grow">
                              <FormControl>
                                 <Input {...field} />
                              </FormControl>
                              <FormMessage />
                           </div>
                        </FormItem>
                     )}
                  />
               </div>


               <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                     <FormItem className="flex gap-x-6">
                        <FormLabel>Mensaje:</FormLabel>
                        <div className="flex-grow">
                           <FormControl>
                              <Textarea {...field} rows={6} />
                           </FormControl>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />
               {error && (
                  <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-3 text-sm text-destructive">
                     <p>{error}</p>
                  </div>
               )}
               {success && (
                  <div className="bg-emerald-500/15 p-4 rounded-md flex items-center gap-x-3 text-sm text-emerald-500">
                     <p>{success}</p>
                  </div>
               )}
               <div className="text-right">
                  <Boton type="submit" disabled={isPending} className="ml-auto mt-5">
                     Enviar
                  </Boton>
               </div>
            </form>
         </div>
      </Form>
   )
}