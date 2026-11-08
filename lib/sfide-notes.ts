// Extrae un resumen corto de las novedades a partir del texto del release de GitHub.
// Función pura (sin red): se usa cuando no hay un texto redactado a mano para esa versión.

const MAX_ITEMS = 4
const MAX_LENGTH = 230

const SECTION_START = /^\s*(?:#{1,6}\s*)?(?:QU[ÉE]\s+HAY\s+DE\s+NUEVO|NOVEDADES)\b.*$/i
// Otro encabezado: línea en MAYÚSCULAS (ej. "SEGURIDAD") o con almohadillas.
const OTHER_HEADING = /^\s*(?:#{1,6}\s+\S.*|[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ0-9 ()\/.,:-]{3,})\s*$/

function firstSentence(text: string): string {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚ¿¡"“])/)
  return parts[0]
}

function clean(raw: string): string {
  let t = raw.replace(/\*\*/g, "").replace(/`/g, "").replace(/\s+/g, " ").trim()
  t = t.replace(/\s*\([^)]*\)/g, "") // quita aclaraciones entre paréntesis
  t = firstSentence(t).trim()
  // "CORRECCIÓN IMPORTANTE: …" → "Corrección importante: …"
  const m = t.match(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ ]{3,}):\s*(.*)$/)
  if (m) {
    const head = m[1].toLowerCase()
    t = `${head.charAt(0).toUpperCase()}${head.slice(1)}: ${m[2]}`
  }
  if (t.length > MAX_LENGTH) {
    t = t.slice(0, MAX_LENGTH).replace(/\s+\S*$/, "") + "…"
  }
  return t
}

/** Devuelve hasta 4 novedades en una frase cada una, o null si el release no tiene el formato esperado. */
export function parseReleaseNotes(body: string | null | undefined): string[] | null {
  if (!body) return null
  const lines = body.replace(/\r\n/g, "\n").split("\n")
  const start = lines.findIndex((l) => SECTION_START.test(l))
  if (start < 0) return null

  const bullets: string[] = []
  let current: string | null = null
  for (const line of lines.slice(start + 1)) {
    if (OTHER_HEADING.test(line) && !/^\s*[*-]\s/.test(line)) break
    const bullet = line.match(/^\s*[*-]\s+(.*)$/)
    if (bullet) {
      if (current) bullets.push(current)
      current = bullet[1]
    } else if (current && line.trim() !== "") {
      current += " " + line.trim()
    }
  }
  if (current) bullets.push(current)

  const items = bullets.map(clean).filter((t) => t.length > 15).slice(0, MAX_ITEMS)
  return items.length ? items : null
}
