export interface Acceso {
   title: string
   description: string
   href: string
   cta: string
   badge?: string
   external?: boolean
}

export interface GrupoAccesos {
   title: string
   items: Acceso[]
}

export const ACCESOS: GrupoAccesos[] = [
   {
      title: "Aplicaciones y comercio exterior",
      items: [
         {
            title: "S-BRM · Plataforma de Negocios",
            description: "Directorio de empresas, rondas de negocios, agenda internacional y biblioteca digital de comercio exterior.",
            href: "https://app.sauken.com.ar/cgi-bin/wspd_cgi.sh/WService=Sauken/app/login_w.w?init=1&app=BRM&mod=SAUKEN-BRM",
            cta: "Ingresar",
            external: true,
         },
         {
            title: "S-COD · Certificados de Origen",
            description: "Entidades habilitadas para emitir Certificados de Origen Digital y acceso a sus portales.",
            href: "/landing",
            cta: "Ver entidades",
         },
         {
            title: "Visualizador de COD",
            description: "Visualizá un Certificado de Origen Digital ALADI/MERCOSUR a partir de su archivo XML.",
            href: "https://viewcod.certificadoorigen.com.ar/",
            cta: "Abrir visualizador",
            external: true,
         },
         {
            title: "Visualizador de DJO",
            description: "Visualizá y verificá Declaraciones Juradas de Origen digitales.",
            href: "https://viewdjo.certificadoorigen.com.ar/",
            cta: "Abrir visualizador",
            external: true,
         },
         {
            title: "S-FiDE · Firma Digital",
            description: "Firmá y verificá documentos XML y PDF con tu certificado digital. Software libre.",
            href: "/landing#s-fide",
            cta: "Conocer S-FiDE",
         },
      ],
   },
   {
      title: "Espacio de trabajo Sauken",
      items: [
         {
            title: "Sauken Mail",
            description: "Tu correo de trabajo en la infraestructura propia de Grupo Sauken: simple, seguro y siempre disponible.",
            href: "https://webmail.sauken.com.ar/",
            cta: "Ingresar al correo",
            external: true,
         },
         {
            title: "Sauken Nube",
            description: "El espacio de trabajo de Grupo Sauken: archivos, calendario y colaboración en la nube propia.",
            href: "https://nextcloud.sauken.com.ar/",
            cta: "Ingresar a la nube",
            external: true,
         },
         {
            title: "Sauken Acceso",
            description: "Escritorios remotos desde el navegador. Solo funciona desde la red de Sauken o con una conexión VPN: pedí tu acceso VPN a soporte@sauken.com.ar.",
            href: "https://guacamole.sauken.com.ar/",
            cta: "Ver cómo ingresar",
            badge: "Requiere VPN",
            external: true,
         },
      ],
   },
   {
      title: "Equipo técnico y código abierto",
      items: [
         {
            title: "Sauken en GitHub",
            description: "Código abierto de Sauken: S-FiDE, COD-Viewer y DJO-Viewer, bajo licencia GPL.",
            href: "https://github.com/Grupo-Sauken-S-A/",
            cta: "Ver repositorios",
            external: true,
         },
         {
            title: "Infraestructura Sauken",
            description: "Cómo operamos, protegemos y respaldamos la plataforma donde corren las aplicaciones de nuestros clientes.",
            href: "https://sauken.com.ar/infra/",
            cta: "Ingresar",
            badge: "Con usuario",
            external: true,
         },
      ],
   },
]

// Accesos principales del menú "Ingresar" del encabezado
export const INGRESAR_ITEMS: Pick<Acceso, "title" | "href" | "badge" | "external">[] = [
   { title: "S-BRM · Plataforma de Negocios", href: ACCESOS[0].items[0].href, external: true },
   { title: "S-COD · Certificados de Origen", href: "/landing" },
   { title: "Sauken Mail", href: "https://webmail.sauken.com.ar/", external: true },
   { title: "Sauken Nube", href: "https://nextcloud.sauken.com.ar/", external: true },
   { title: "Sauken Acceso", href: "https://guacamole.sauken.com.ar/", badge: "Requiere VPN", external: true },
]
