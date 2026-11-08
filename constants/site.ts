export const SITE_URL = "https://sauken.com.ar"
export const SITE_NAME = "Sauken"

// Redes oficiales. X todavía no tiene cuenta: mientras sea null el ícono se muestra sin enlace.
export const SOCIAL = {
   linkedin: "https://www.linkedin.com/company/grupo-sauken-s.a./",
   facebook: "https://www.facebook.com/GrupoSauken",
   github: "https://github.com/Grupo-Sauken-S-A",
   x: null as string | null,
}

export const ORGANIZATION = {
   name: "Grupo Sauken S.A.",
   url: SITE_URL,
   logo: `${SITE_URL}/icon.png`,
   email: "info@sauken.com.ar",
   telephone: "+54 9 351 519 1003",
   address: {
      "@type": "PostalAddress",
      streetAddress: "Gral. Alvear 84, 4º Piso, Oficina C",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
   },
   // Datos públicos de la ficha de LinkedIn de la empresa
   foundingDate: "1992-06-01",
   slogan: "Impulsando tus resultados a través de la tecnología",
   description: "Consultora IT de Córdoba, Argentina: software a medida desarrollado con inteligencia artificial, firma digital, certificados de origen digitales e infraestructura gestionada.",
   knowsAbout: [
      "Desarrollo de software con inteligencia artificial",
      "Software a medida",
      "Infraestructura gestionada",
      "Firma digital",
      "Certificados de origen digitales",
   ],
   areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "City", name: "Córdoba" },
   ],
   sameAs: [SOCIAL.linkedin, SOCIAL.facebook, SOCIAL.github, ...(SOCIAL.x ? [SOCIAL.x] : [])],
}
