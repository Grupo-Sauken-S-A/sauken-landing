// Enlaces oficiales de S-FiDE (repositorio y landing de GitHub Pages)
export const SFIDE_REPO_URL = "https://github.com/Grupo-Sauken-S-A/S-FIDE"
export const SFIDE_RELEASES_URL = `${SFIDE_REPO_URL}/releases/latest`
export const SFIDE_PAGES_URL = "https://grupo-sauken-s-a.github.io/S-FIDE/"
export const SFIDE_DOC_USUARIO_URL = `${SFIDE_PAGES_URL}manual-usuario-sfide-gui.html`
export const SFIDE_DOC_TECNICO_URL = `${SFIDE_PAGES_URL}manual-tecnico-integracion.html`

// Texto de novedades escrito a mano: solo se muestra mientras coincida con la versión vigente.
export const SFIDE_NOVEDADES = {
  version: "1.5.0",
  items: [
    "Firma de PDF en cadena entre varias personas, en computadoras distintas y con S-FiDE o Acrobat Reader en cualquier combinación.",
    "Visor interno de PDF y de XML.",
    "Primera versión para macOS (Apple Silicon e Intel), además de Windows y Linux.",
  ],
}

// Cada cuántos segundos se vuelve a consultar GitHub (3 horas)
export const SFIDE_REVALIDATE_SECONDS = 60 * 60 * 3
