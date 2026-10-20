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
      streetAddress: "Gral. Alvear 84, 4º Piso, Oficina C",
      addressLocality: "Córdoba",
      addressCountry: "AR",
   },
   sameAs: [SOCIAL.linkedin, SOCIAL.facebook, SOCIAL.github, ...(SOCIAL.x ? [SOCIAL.x] : [])],
}
