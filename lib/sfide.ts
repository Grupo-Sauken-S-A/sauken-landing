import { SFIDE_REVALIDATE_SECONDS } from "@/constants/sfide"
import { parseReleaseNotes } from "@/lib/sfide-notes"

const LATEST_RELEASE_API = "https://api.github.com/repos/Grupo-Sauken-S-A/S-FIDE/releases/latest"

export interface SfideRelease {
  /** Versión vigente, ej. "1.5.1" */
  version: string
  /** Página del release en GitHub (notas completas y descargas) */
  url: string | null
  /** Resumen automático de "QUÉ HAY DE NUEVO"; null si el release no tiene el formato esperado */
  notes: string[] | null
}

/**
 * Último release de S-FiDE leído directamente de GitHub (versión, enlace y resumen de novedades).
 * Se cachea 3 horas. Si GitHub no responde devuelve null y el sitio sigue funcionando.
 */
export async function getSfideRelease(): Promise<SfideRelease | null> {
  try {
    const res = await fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: SFIDE_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return null
    const data: { tag_name?: string; html_url?: string; body?: string } = await res.json()
    const version = data.tag_name?.replace(/^v/i, "").trim()
    if (!version || !/^\d+(\.\d+)*/.test(version)) return null
    return {
      version,
      url: data.html_url && data.html_url.startsWith("https://github.com/") ? data.html_url : null,
      notes: parseReleaseNotes(data.body),
    }
  } catch {
    return null
  }
}

/** Solo la versión vigente (ej. "1.5.1") o null. */
export async function getSfideVersion(): Promise<string | null> {
  return (await getSfideRelease())?.version ?? null
}
