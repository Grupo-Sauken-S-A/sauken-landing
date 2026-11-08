// Enlaces oficiales de S-FiDE (repositorio y landing de GitHub Pages)
export const SFIDE_REPO_URL = "https://github.com/Grupo-Sauken-S-A/S-FIDE"
export const SFIDE_RELEASES_URL = `${SFIDE_REPO_URL}/releases/latest`
export const SFIDE_PAGES_URL = "https://grupo-sauken-s-a.github.io/S-FIDE/"
export const SFIDE_DOC_USUARIO_URL = `${SFIDE_PAGES_URL}manual-usuario-sfide-gui.html`
export const SFIDE_DOC_TECNICO_URL = `${SFIDE_PAGES_URL}manual-tecnico-integracion.html`

// Novedades redactadas a mano en lenguaje sencillo, por versión. Tienen prioridad sobre el resumen automático
// que el portal arma con las notas del release de GitHub (lib/sfide-notes.ts). Si una versión no está acá,
// se usa el resumen automático; si tampoco hay, solo se muestra el enlace a las notas completas.
export const SFIDE_NOVEDADES_CURADAS: Record<string, string[]> = {
  "1.5.1": [
    "Ya no firma con certificados vencidos: antes podía hacerlo sin avisar y el documento firmado no era aceptado después. Ahora comprueba la vigencia antes de firmar y, si venció, le dice cuándo.",
    "Elige solo el certificado correcto: no firma con certificados de autoridades certificantes ni con los emitidos solo para cifrar, y si hay más de uno (por ejemplo, el viejo y el renovado) usa el vigente.",
    "Avisa si el reloj de la computadora está desfasado, porque de él dependen la vigencia y la fecha de la firma (necesita conexión a Internet).",
    "Muestra el estado de cada certificado: vigente o vencido, y hasta cuándo.",
    "Revisión de seguridad de todos los componentes que se distribuyen, sin avisos conocidos.",
  ],
}

// Cada cuántos segundos se vuelve a consultar GitHub (3 horas)
export const SFIDE_REVALIDATE_SECONDS = 60 * 60 * 3
