import { SFIDE_REVALIDATE_SECONDS } from "@/constants/sfide"

const LATEST_RELEASE_API = "https://api.github.com/repos/Grupo-Sauken-S-A/S-FIDE/releases/latest"

/**
 * Versión vigente de S-FiDE según el último release de GitHub (ej. "1.5.0").
 * Se cachea 3 horas. Si GitHub no responde devuelve null y el sitio sigue funcionando.
 */
export async function getSfideVersion(): Promise<string | null> {
  try {
    const res = await fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: SFIDE_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return null
    const data: { tag_name?: string } = await res.json()
    const version = data.tag_name?.replace(/^v/i, "").trim()
    return version && /^\d+(\.\d+)*/.test(version) ? version : null
  } catch {
    return null
  }
}
