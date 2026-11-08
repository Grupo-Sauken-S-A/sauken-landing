export interface Socio {
   name: string
   tipo: "Producto" | "Empresa"
   description: string
   href: string
   cta: string
   logo: string
   logoWidth: number
   logoHeight: number
}

// Socios estratégicos del Grupo Sauken. Textos sobrios: describen lo que hace cada uno y, en el caso de Ralvy,
// la relación confirmada (desarrollo conjunto y operación de su infraestructura por Sauken).
export const SOCIOS: Socio[] = [
   {
      name: "Ralvy",
      tipo: "Producto",
      description: "Plataforma de ticketing para eventos: entradas, productos, acreditaciones y control de accesos con QR. La desarrollamos en conjunto y operamos su infraestructura. Se complementa con S-EMS.",
      href: "https://ralvy.io/",
      cta: "Conocer Ralvy",
      logo: "/images/socios/ralvy.svg",
      logoWidth: 160,
      logoHeight: 64,
   },
   {
      name: "Phorus Group",
      tipo: "Empresa",
      description: "Empresa de desarrollo de software que diseña sistemas preparados para crecer: productos, infraestructura y estrategia de crecimiento.",
      href: "https://phorus.group/",
      cta: "Conocer Phorus Group",
      logo: "/images/socios/phorus.svg",
      logoWidth: 180,
      logoHeight: 48,
   },
]
